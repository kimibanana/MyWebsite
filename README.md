# Web Frontier website

Marketing site for Web Frontier, a medical marketing agency (SEO, websites, Google Ads, Local Services Ads, maintenance) that also serves other local businesses in the US, UK, Canada and Australia. The homepage follows a WEBRIS-style flow, and services are sold as fixed-price 30-day sprints.
Built with [Astro](https://astro.build) as a static site: fast, secure, and SEO-friendly, with no database or plugins to maintain.

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Services overview | `/services` |
| Service pages (5) | `/services/medical-seo`, `/services/medical-website-design`, `/services/google-ads`, `/services/local-services-ads`, `/services/website-care` |
| Who we serve | `/who-we-serve` |
| Sprints & pricing | `/pricing` |
| Results (case studies) | `/work` |
| About | `/about` |
| Contact | `/contact` |
| Free growth audit landing page | `/free-audit` |
| Thank you, privacy, 404 | `/thank-you`, `/privacy`, `/404` |

## Editing content

Almost everything you will want to change lives in three files:

- `src/data/site.ts`: business name, WhatsApp, email, booking link, hours, markets served, social links, stats, form endpoint.
- `src/data/services.ts`: each service page (headline, pain points, what's included, starting price, FAQs, SEO title and description).
- `src/data/content.ts`: sprints and pricing (Foundation Sprint, monthly sprints, bundles, website sprints, care plans), case studies, testimonials, FAQs, process steps, industries.

Search the code for `TODO` to find every placeholder. Case studies and testimonials marked `placeholder: true` show a "Sample" label; replace them with real clients and set `placeholder: false` (or remove the line).

Stats in `site.stats` stay hidden until you fill in a `value`.

## Brand kit

| Token | Color | Use |
| --- | --- | --- |
| Lagoon | `#0E7C7B` | Primary brand color, links, icons |
| Mango | `#FF8A3D` | Call-to-action buttons only |
| Ink | `#0F172A` | Headings and text |
| Night | `#0B1A24` | Dark sections and footer |
| Sand | `#F6F5F0` | Light section backgrounds |

Fonts: **Manrope** for headings and **Inter** for body text, self-hosted for speed.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Free options, all connect directly to this GitHub repo and redeploy on every push:

- **Netlify** (recommended): "Add new site" → "Import from Git" → pick this repo. Settings are read from `netlify.toml`. Contact forms work automatically through Netlify Forms; submissions appear under Site → Forms, and you can turn on email notifications there.
- **Cloudflare Pages** or **Vercel**: build command `npm run build`, output directory `dist`. Forms need an endpoint: create a free form at Formspree and paste its URL into `formEndpoint` in `src/data/site.ts`.

After the domain is live, update `site` in `astro.config.mjs`, `url` in `src/data/site.ts`, and the sitemap line in `public/robots.txt`, then submit `/sitemap-index.xml` in Google Search Console.

## SEO built in

- Unique title and meta description per page
- JSON-LD schema: ProfessionalService (organization), Service, FAQPage, BreadcrumbList
- XML sitemap and robots.txt
- Open Graph image for social sharing
- Static HTML, self-hosted fonts, almost no JavaScript, for strong Core Web Vitals
- Semantic headings, accessible forms, skip link, reduced-motion support
