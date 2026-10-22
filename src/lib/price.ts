import { site } from '../data/site';

// "$1,450/mo" -> "$1,233/mo" with the 12-month partnership discount applied.
export function annualPrice(price: string): string {
  return price.replace(/\$([\d,]+)/, (_, n: string) => {
    const value = Math.round(Number(n.replace(/,/g, '')) * (1 - site.annualDiscount));
    return '$' + value.toLocaleString('en-US');
  });
}

export const discountLabel = `${Math.round(site.annualDiscount * 100)}%`;
