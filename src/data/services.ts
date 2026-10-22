export type Service = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  headline: string;
  intro: string;
  startingAt: string; // TODO: confirm pricing
  priceNote: string;
  pains: string[];
  outcomes: { title: string; body: string }[];
  included: string[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'seo',
    name: 'SEO Services',
    icon: 'search',
    short: 'Rank on page 1 for the searches your customers already make, and turn that traffic into enquiries.',
    headline: 'Get found by customers who are already searching for you',
    intro:
      'Most of your customers start on Google. If you are not on page one, they are calling your competitor. We fix the technical issues holding your site back, write content that answers what buyers search for, and earn the links that build authority.',
    startingAt: '₱15,000/mo',
    priceNote: '3-month start, then month-to-month. Cancel with 30 days notice.',
    pains: [
      'You paid for SEO before and could not tell what was actually done.',
      'Your competitors outrank you even though your service is better.',
      'Traffic is flat, or it comes from people who never buy.',
      'You are stuck paying for ads because organic brings in nothing.',
    ],
    outcomes: [
      { title: 'More qualified traffic', body: 'We target keywords with buying intent, not vanity terms nobody converts on.' },
      { title: 'Clear reporting', body: 'A plain-language monthly report: rankings, traffic, leads, and exactly what we did.' },
      { title: 'Compounding results', body: 'Unlike ads, rankings keep working after the spend stops.' },
    ],
    included: [
      'Full technical SEO audit and fixes',
      'Keyword and competitor research',
      'On-page optimization (titles, headings, internal links, schema)',
      'Content strategy and SEO-optimized articles',
      'White-hat link building',
      'Google Search Console & GA4 setup',
      'Monthly report and strategy call',
    ],
    idealFor: ['Service businesses', 'E-commerce stores', 'B2B companies', 'Clinics and professional firms'],
    faqs: [
      { q: 'How long until I see results?', a: 'Most clients see movement in rankings within 6–8 weeks and meaningful lead growth in 3–6 months. Competitive industries take longer. We will give you an honest estimate after the audit.' },
      { q: 'Do you guarantee #1 rankings?', a: 'No, and you should be wary of anyone who does. Google controls rankings. What we guarantee is transparent work, monthly reporting, and a strategy built around revenue, not vanity metrics.' },
      { q: 'Do I need to sign a long contract?', a: 'No. Our SEO plans are month-to-month after an initial 3-month setup period, because SEO needs a few months to show results fairly.' },
    ],
    metaTitle: 'SEO Services Philippines | Rank on Page 1 | Kimi Web Solutions',
    metaDescription: 'Results-driven SEO for Philippine businesses. Technical SEO, content and link building with clear monthly reporting. No lock-in contracts. Get a free SEO audit.',
  },
  {
    slug: 'local-seo',
    name: 'Local SEO & Google Maps',
    icon: 'pin',
    short: 'Show up in the Google Maps pack when nearby customers search "near me".',
    headline: 'Be the first business locals see on Google Maps',
    intro:
      'When someone searches "dentist near me" or "aircon cleaning Laguna", Google shows three businesses on the map. Those three get most of the calls. We optimize your Google Business Profile, citations and reviews so one of them is you.',
    startingAt: '₱8,000/mo',
    priceNote: 'Per location. Month-to-month.',
    pains: [
      'Your Google Business Profile is missing, unverified, or barely filled in.',
      'Competitors with worse service show up above you on the map.',
      'You have few reviews and no system to get more.',
      'Your name, address and phone are inconsistent across the web.',
    ],
    outcomes: [
      { title: 'More calls and direction requests', body: 'Map pack visibility drives the highest-intent local leads.' },
      { title: 'A steady stream of reviews', body: 'A simple review request system your staff can actually use.' },
      { title: 'Consistent listings', body: 'Your business details cleaned up across directories and maps.' },
    ],
    included: [
      'Google Business Profile setup or optimization',
      'Local keyword research',
      'Citation building and cleanup',
      'Review generation system',
      'Weekly Google Business Profile posts',
      'Location page optimization on your website',
      'Monthly local ranking report',
    ],
    idealFor: ['Clinics and dental offices', 'Restaurants and cafes', 'Home services', 'Retail stores'],
    faqs: [
      { q: 'I don’t have a website. Can local SEO still work?', a: 'Yes, a strong Google Business Profile can bring calls on its own. A fast website makes it work much better, so we usually recommend both.' },
      { q: 'Can you remove bad reviews?', a: 'We cannot remove genuine reviews, but we help you respond professionally and report reviews that break Google’s policies. More good reviews is the real fix.' },
    ],
    metaTitle: 'Local SEO Philippines | Google Maps Ranking | Kimi Web Solutions',
    metaDescription: 'Get into the Google Maps 3-pack. Google Business Profile optimization, citations and review systems for local Philippine businesses.',
  },
  {
    slug: 'web-design',
    name: 'Website Design & Development',
    icon: 'layout',
    short: 'Fast, mobile-first websites built to turn visitors into calls, bookings and sales.',
    headline: 'A website that works as hard as you do',
    intro:
      'A good-looking website is not enough. Yours should load in under two seconds, work perfectly on a phone, and make it obvious what to do next. We design every page around one goal: getting the visitor to contact you.',
    startingAt: '₱25,000',
    priceNote: 'One-time. Includes 30 days of free support after launch.',
    pains: [
      'Your site looks outdated and you are embarrassed to share the link.',
      'It is slow, breaks on mobile, or is hard to update.',
      'People visit but nobody fills in the form or calls.',
      'Your last developer disappeared and you cannot log in.',
    ],
    outcomes: [
      { title: 'Built to convert', body: 'Clear messaging, strong calls to action, and trust signals on every page.' },
      { title: 'SEO-ready from day one', body: 'Clean code, fast loading, proper structure and schema so Google understands you.' },
      { title: 'You own everything', body: 'Your domain, your hosting, your files. No hostage situations.' },
    ],
    included: [
      'Discovery call and sitemap planning',
      'Custom design (no recycled templates)',
      'Mobile-first, responsive build',
      'Copywriting help for key pages',
      'On-page SEO and speed optimization',
      'Contact forms, Messenger/Viber/WhatsApp buttons',
      'Google Analytics & Search Console setup',
      'Training video so you can make edits',
    ],
    idealFor: ['New businesses', 'Companies with outdated sites', 'Professionals and consultants', 'Clinics, schools and resorts'],
    faqs: [
      { q: 'How long does a website take?', a: 'A 5–7 page business website usually takes 3–4 weeks from kickoff to launch, depending on how quickly we receive your content and feedback.' },
      { q: 'Which platform do you use?', a: 'We pick what fits your needs: WordPress if you want to edit everything yourself, Shopify for online stores, or a fast static site for maximum speed and security. We explain the trade-offs before you decide.' },
      { q: 'Can I update the website myself?', a: 'Yes. Every site comes with a training video, and we can set up an easy editor so you can change text and photos without touching code.' },
    ],
    metaTitle: 'Web Design Philippines | Fast, High-Converting Websites | Kimi',
    metaDescription: 'Custom, mobile-first websites for Philippine businesses. Fast, SEO-ready and designed to turn visitors into leads. Websites from ₱25,000.',
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce Websites',
    icon: 'cart',
    short: 'Shopify and WooCommerce stores with GCash, Maya and card payments built in.',
    headline: 'An online store that sells while you sleep',
    intro:
      'Selling only on Facebook or Shopee means paying fees and following someone else’s rules. We build your own store with local payment options, shipping integrations, and product pages designed to sell.',
    startingAt: '₱45,000',
    priceNote: 'One-time. Platform and payment gateway fees are separate.',
    pains: [
      'Marketplace fees are eating your margins.',
      'Managing orders through chat is chaotic and error-prone.',
      'Customers abandon checkout because it is confusing.',
      'Your store does not show up on Google.',
    ],
    outcomes: [
      { title: 'Lower selling costs', body: 'Own your customer data and stop paying commission on every sale.' },
      { title: 'Smooth checkout', body: 'GCash, Maya, cards and COD in a checkout that works on mobile.' },
      { title: 'Search-ready product pages', body: 'Product and category SEO so shoppers find you on Google.' },
    ],
    included: [
      'Shopify or WooCommerce setup',
      'Custom storefront design',
      'Up to 50 products uploaded',
      'Local payment gateway integration',
      'Shipping and courier setup',
      'Product and collection SEO',
      'Abandoned cart emails',
      'Store management training',
    ],
    idealFor: ['Brands selling on social media', 'Retail stores going online', 'Food and beverage', 'Exporters'],
    faqs: [
      { q: 'Shopify or WooCommerce?', a: 'Shopify is easier to run and very reliable; WooCommerce has no monthly platform fee and is more flexible. We recommend one based on your product count, budget and team.' },
      { q: 'Can you migrate my existing store?', a: 'Yes. We migrate products, customers and orders, and set up redirects so you keep your Google rankings.' },
    ],
    metaTitle: 'E-commerce Website Philippines | Shopify & WooCommerce | Kimi',
    metaDescription: 'Shopify and WooCommerce stores with GCash, Maya and card payments. Sell directly, cut marketplace fees, and get found on Google.',
  },
  {
    slug: 'google-ads',
    name: 'Google Ads Management',
    icon: 'target',
    short: 'Paid search campaigns that bring leads this week, managed for profit, not clicks.',
    headline: 'Leads this week, while your SEO builds',
    intro:
      'Google Ads puts you at the top of search results today. Done badly, it burns money fast. We build tightly targeted campaigns, track every call and form, and cut whatever does not bring customers.',
    startingAt: '₱12,000/mo',
    priceNote: 'Management fee. Ad spend is paid directly to Google.',
    pains: [
      'You spent on ads before and got clicks, but no customers.',
      'You do not know which keywords bring in actual leads.',
      'Your cost per lead keeps climbing.',
      'Nobody is checking the account regularly.',
    ],
    outcomes: [
      { title: 'Tracked conversions', body: 'Every call, form and chat is tracked so we optimize for leads, not clicks.' },
      { title: 'Less wasted spend', body: 'Negative keywords, schedules and locations dialed in weekly.' },
      { title: 'Landing pages that convert', body: 'We fix the page the ad sends people to, not just the ad.' },
    ],
    included: [
      'Account audit or new account setup',
      'Keyword research and campaign structure',
      'Ad copywriting and extensions',
      'Conversion tracking (calls, forms, chats)',
      'Weekly optimization',
      'Landing page recommendations',
      'Monthly report and call',
    ],
    idealFor: ['New businesses needing leads fast', 'Seasonal promotions', 'High-value services', 'E-commerce stores'],
    faqs: [
      { q: 'How much should I spend on ads?', a: 'It depends on your industry and goals. Many local businesses start with ₱15,000–₱30,000 per month in ad spend. We will recommend a budget after reviewing your market.' },
      { q: 'Do I own the ad account?', a: 'Yes. The account is in your name and you keep full access, even if you stop working with us.' },
    ],
    metaTitle: 'Google Ads Management Philippines | PPC Agency | Kimi',
    metaDescription: 'Google Ads campaigns managed for leads and profit. Conversion tracking, weekly optimization and honest reporting.',
  },
  {
    slug: 'website-care',
    name: 'Website Care & Hosting',
    icon: 'shield',
    short: 'Fast hosting, backups, security and updates, so your site never goes down.',
    headline: 'Never worry about your website again',
    intro:
      'Hacked sites, expired domains and broken plugins cost you leads and rankings. Our care plans keep your site fast, secure and backed up, with a real person to message when you need a change.',
    startingAt: '₱2,500/mo',
    priceNote: 'Includes hosting. Annual billing gets 2 months free.',
    pains: [
      'Your site has been hacked or went down without warning.',
      'Plugins and themes have not been updated in years.',
      'Small changes take your developer weeks.',
      'You are not sure who controls your domain and hosting.',
    ],
    outcomes: [
      { title: 'Always online', body: 'Fast, managed hosting with uptime monitoring and daily backups.' },
      { title: 'Secure', body: 'SSL, firewall, malware scanning and timely updates.' },
      { title: 'Changes done fast', body: 'Send us edits by email or chat. Most are done within 2 business days.' },
    ],
    included: [
      'Managed hosting and SSL',
      'Daily off-site backups',
      'Core, theme and plugin updates',
      'Security monitoring and malware cleanup',
      'Uptime monitoring',
      'Up to 1 hour of content edits per month',
      'Domain and email management',
    ],
    idealFor: ['Any business website', 'WordPress sites', 'Sites we built or inherited'],
    faqs: [
      { q: 'Can you take over a site someone else built?', a: 'Yes. We start with a health check, fix any urgent issues, then put it on a care plan.' },
      { q: 'What happens if my site gets hacked?', a: 'On a care plan, cleanup and restoration are included at no extra cost.' },
    ],
    metaTitle: 'Website Maintenance & Hosting Philippines | Kimi Web Solutions',
    metaDescription: 'Managed hosting, backups, security and updates for business websites. Care plans from ₱2,500/month with fast edits by a real person.',
  },
  {
    slug: 'website-audit',
    name: 'SEO & Website Audit',
    icon: 'clipboard',
    short: 'A clear, prioritized report on what is holding your site back and how to fix it.',
    headline: 'Find out exactly why your website is not bringing in leads',
    intro:
      'Not ready for a monthly plan? Our in-depth audit reviews your technical SEO, content, speed, conversion and competitors, then gives you a prioritized action plan your team (or ours) can follow.',
    startingAt: '₱9,500',
    priceNote: 'One-time. Fully credited if you start a plan within 30 days.',
    pains: [
      'You suspect something is wrong but do not know where to start.',
      'You got a free "audit" that was just an automated PDF.',
      'Your traffic dropped after a Google update.',
      'You want a second opinion before hiring an agency.',
    ],
    outcomes: [
      { title: 'Prioritized fixes', body: 'Every issue ranked by impact and effort, so you fix what matters first.' },
      { title: 'Competitor insights', body: 'See what your top competitors are doing that you are not.' },
      { title: 'A walkthrough call', body: 'We explain the findings in plain language and answer your questions.' },
    ],
    included: [
      'Technical SEO crawl and review',
      'Core Web Vitals and speed analysis',
      'On-page and content gap review',
      'Backlink profile review',
      'Conversion and UX review',
      'Top 3 competitor comparison',
      '60-minute walkthrough call',
    ],
    idealFor: ['Businesses with an in-house team', 'Sites hit by a Google update', 'Before a redesign'],
    faqs: [
      { q: 'How is this different from the free audit?', a: 'The free audit is a quick 15-minute review that spots the biggest issues. The paid audit is a deep, manual review with a full action plan.' },
      { q: 'How long does it take?', a: 'You receive the report within 7 business days, followed by a walkthrough call.' },
    ],
    metaTitle: 'SEO Audit Philippines | In-Depth Website Audit | Kimi Web Solutions',
    metaDescription: 'A manual, in-depth SEO and website audit with a prioritized action plan and walkthrough call. Find what is holding your site back.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
