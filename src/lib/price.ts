import { site } from '../data/site';

// Visitors see prices in their own currency. Prices are written in USD in the
// data files; each USD amount maps to a set local price here.
// TODO: confirm local prices (set from approximate exchange rates, rounded).
export const currencies = [
  { code: 'USD', label: 'USD $', symbol: '$' },
  { code: 'PHP', label: 'PHP ₱', symbol: '₱' },
  { code: 'GBP', label: 'GBP £', symbol: '£' },
  { code: 'AUD', label: 'AUD A$', symbol: 'A$' },
] as const;
type Code = (typeof currencies)[number]['code'];

const table: Record<number, Record<Exclude<Code, 'USD'>, number>> = {
  99: { PHP: 5790, GBP: 79, AUD: 149 },
  112: { PHP: 6500, GBP: 89, AUD: 170 },
  199: { PHP: 11490, GBP: 159, AUD: 299 },
  500: { PHP: 28900, GBP: 399, AUD: 750 },
  650: { PHP: 37900, GBP: 499, AUD: 990 },
  750: { PHP: 43900, GBP: 579, AUD: 1150 },
  900: { PHP: 51900, GBP: 699, AUD: 1390 },
  997: { PHP: 57900, GBP: 779, AUD: 1497 },
  1200: { PHP: 69900, GBP: 929, AUD: 1850 },
  1450: { PHP: 83900, GBP: 1099, AUD: 2200 },
  2000: { PHP: 115000, GBP: 1500, AUD: 3000 },
  2500: { PHP: 144900, GBP: 1949, AUD: 3800 },
  4500: { PHP: 259900, GBP: 3499, AUD: 6900 },
  6000: { PHP: 350000, GBP: 4500, AUD: 9000 },
};

const fmt = (symbol: string, n: number) => symbol + n.toLocaleString('en-US');

function amounts(usd: number, annual: boolean): Record<Code, string> {
  const local = table[usd];
  if (!local) throw new Error(`No local prices for $${usd}; add it to src/lib/price.ts`);
  const k = annual ? 1 - site.annualDiscount : 1;
  const out = {} as Record<Code, string>;
  for (const c of currencies) {
    const base = c.code === 'USD' ? usd : local[c.code];
    // Peso prices round to the nearest ₱10 so discounted prices stay tidy.
    const step = c.code === 'PHP' && annual ? 10 : 1;
    out[c.code] = fmt(c.symbol, Math.round((base * k) / step) * step);
  }
  return out;
}

// Replaces every "$1,234" in a string with a span that the currency script
// swaps on the client. USD is the server-rendered default.
export function priceHtml(text: string, annual = false): string {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return escaped.replace(/\$([\d,]+)/g, (_, n: string) => {
    const a = amounts(Number(n.replace(/,/g, '')), annual);
    const data = currencies.map((c) => `data-${c.code.toLowerCase()}="${a[c.code]}"`).join(' ');
    return `<span class="price" ${data}>${a.USD}</span>`;
  });
}

export const discountLabel = `${Math.round(site.annualDiscount * 100)}%`;
