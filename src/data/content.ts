// Pricing, proof and FAQs. Prices are suggested starting points (TODO: confirm).

export const pricing = {
  websites: [
    {
      name: 'Starter Website',
      price: '₱25,000',
      cadence: 'one-time',
      blurb: 'For new businesses that need a professional site, fast.',
      features: [
        'Up to 5 pages',
        'Mobile-first custom design',
        'Contact form + chat buttons',
        'Basic on-page SEO',
        'Google Analytics & Search Console',
        '30 days of free support',
      ],
      cta: 'Start my website',
      featured: false,
    },
    {
      name: 'Growth Website',
      price: '₱55,000',
      cadence: 'one-time',
      blurb: 'Our most popular: a lead-generating site with SEO built in.',
      features: [
        'Up to 12 pages',
        'Conversion-focused copywriting',
        'Service & location pages for SEO',
        'Schema markup + speed optimization',
        'Blog setup with 2 starter articles',
        'Google Business Profile setup',
        '60 days of free support',
      ],
      cta: 'Get the Growth site',
      featured: true,
    },
    {
      name: 'E-commerce Store',
      price: '₱45,000+',
      cadence: 'one-time',
      blurb: 'Shopify or WooCommerce with local payments.',
      features: [
        'Custom storefront design',
        'Up to 50 products uploaded',
        'GCash, Maya, card & COD',
        'Shipping and courier setup',
        'Product SEO',
        'Store training',
      ],
      cta: 'Plan my store',
      featured: false,
    },
  ],
  seo: [
    {
      name: 'Local SEO',
      price: '₱8,000',
      cadence: '/month',
      blurb: 'Win the Google Maps pack in your city.',
      features: [
        'Google Business Profile optimization',
        'Citations and NAP cleanup',
        'Review generation system',
        'Weekly GBP posts',
        'Monthly local ranking report',
      ],
      cta: 'Rank locally',
      featured: false,
    },
    {
      name: 'SEO Growth',
      price: '₱15,000',
      cadence: '/month',
      blurb: 'Consistent rankings, traffic and leads.',
      features: [
        'Technical SEO fixes',
        'Up to 20 target keywords',
        '2 SEO articles per month',
        'On-page optimization',
        'Link building',
        'Monthly report + strategy call',
      ],
      cta: 'Grow my traffic',
      featured: true,
    },
    {
      name: 'SEO Authority',
      price: '₱30,000',
      cadence: '/month',
      blurb: 'For competitive industries and national reach.',
      features: [
        'Everything in SEO Growth',
        'Up to 50 target keywords',
        '4 SEO articles per month',
        'Digital PR link building',
        'Conversion rate optimization',
        'Bi-weekly calls',
      ],
      cta: 'Dominate my market',
      featured: false,
    },
  ],
  addons: [
    { name: 'Website Care & Hosting', price: 'from ₱2,500/mo' },
    { name: 'Google Ads Management', price: 'from ₱12,000/mo' },
    { name: 'In-depth SEO Audit', price: '₱9,500 one-time' },
    { name: 'Extra SEO article', price: '₱2,500 each' },
  ],
};

// Proof. Entries marked placeholder render with a "Sample" label and should be
// replaced with real clients before launch.
export const caseStudies = [
  {
    placeholder: true,
    client: 'Dental clinic',
    location: 'Laguna',
    industry: 'Healthcare',
    service: 'Local SEO + Website',
    challenge: 'Not visible on Google Maps; most patients came from walk-ins and referrals.',
    solution: 'New mobile-first website, Google Business Profile optimization and a review request system.',
    results: [
      { value: '3×', label: 'more calls from Google' },
      { value: 'Top 3', label: 'in the Maps pack' },
      { value: '120+', label: 'new reviews' },
    ],
  },
  {
    placeholder: true,
    client: 'Home furniture brand',
    location: 'Metro Manila',
    industry: 'E-commerce',
    service: 'Shopify Store + SEO',
    challenge: 'Selling only through Facebook chat; orders were hard to track and margins were thin.',
    solution: 'Shopify store with GCash and card payments, product SEO and abandoned cart emails.',
    results: [
      { value: '42%', label: 'of sales now online-direct' },
      { value: '2.1s', label: 'mobile load time' },
      { value: '+180%', label: 'organic traffic in 6 months' },
    ],
  },
  {
    placeholder: true,
    client: 'B2B logistics company',
    location: 'Cavite',
    industry: 'Logistics',
    service: 'SEO Growth',
    challenge: 'Outdated website and zero organic leads; relied entirely on sales cold calls.',
    solution: 'Technical SEO overhaul, service pages for each route and monthly content.',
    results: [
      { value: '35', label: 'keywords on page 1' },
      { value: '+240%', label: 'organic leads' },
      { value: '₱0', label: 'extra ad spend' },
    ],
  },
];

export const testimonials = [
  {
    placeholder: true,
    quote: 'They explained everything in plain language and we finally understand what our marketing budget is doing. Calls from Google have tripled.',
    name: 'Client name',
    role: 'Owner, Dental clinic',
  },
  {
    placeholder: true,
    quote: 'Our old site was slow and nobody used the contact form. The new one gets enquiries every week, and they replied to every question within the day.',
    name: 'Client name',
    role: 'Marketing Manager, Logistics company',
  },
  {
    placeholder: true,
    quote: 'No lock-in, clear monthly reports, and real results. Exactly what we wanted from an agency.',
    name: 'Client name',
    role: 'Founder, E-commerce brand',
  },
];

export const homeFaqs = [
  {
    q: 'How much does a website or SEO cost?',
    a: 'Websites start at ₱25,000 one-time and SEO plans start at ₱8,000 per month. Every project gets a fixed written quote before we start, so there are no surprise fees. See our pricing page for full details.',
  },
  {
    q: 'Do you lock clients into long contracts?',
    a: 'No. Website projects are one-time fees. SEO plans have a 3-month starting period (SEO needs time to show results fairly), then they are month-to-month. We keep clients by getting results, not with contracts.',
  },
  {
    q: 'How soon will I see results?',
    a: 'Google Ads can bring leads within days. A new website usually launches in 3–4 weeks. SEO typically shows ranking movement in 6–8 weeks and meaningful lead growth in 3–6 months.',
  },
  {
    q: 'Will I own my website, domain and accounts?',
    a: 'Always. Your domain, hosting, website files, Google Analytics and ad accounts are registered in your name. If you ever leave, you take everything with you.',
  },
  {
    q: 'I’m not technical. Will I understand what you are doing?',
    a: 'Yes. We explain things in plain language, send a simple monthly report, and you always have a direct line to the person working on your account.',
  },
  {
    q: 'Do you work with businesses outside the Philippines?',
    a: 'Yes. We are based in the Philippines and work with clients locally and abroad, with meetings scheduled around your time zone.',
  },
];

export const process = [
  { title: 'Free audit & call', body: 'We review your website, rankings and competitors, then walk you through what we found. No obligation.' },
  { title: 'Clear plan & quote', body: 'You get a written plan with fixed pricing, timelines and the results we are aiming for.' },
  { title: 'We build & optimize', body: 'Our team does the work, with progress updates so you always know where things stand.' },
  { title: 'Report & grow', body: 'Monthly reports in plain language, and a strategy that improves as the data comes in.' },
];

export const pains = [
  { icon: 'eye-off', title: 'Invisible on Google', body: 'Customers search for what you sell every day, and find your competitors instead.' },
  { icon: 'hourglass', title: 'A website that just sits there', body: 'It looks okay, but it does not bring in calls, bookings or sales.' },
  { icon: 'question', title: 'No idea what you are paying for', body: 'Past agencies sent vague reports, long contracts and no real results.' },
  { icon: 'wallet', title: 'Ads that burn cash', body: 'You pay for clicks every day, and the leads stop the moment you stop paying.' },
];

export const promises = [
  { icon: 'file', title: 'Fixed, written quotes', body: 'Know the full price before we start. No hidden fees.' },
  { icon: 'unlock', title: 'No lock-in contracts', body: 'Month-to-month SEO after the starting period.' },
  { icon: 'key', title: 'You own everything', body: 'Domain, site, accounts and data stay in your name.' },
  { icon: 'chart', title: 'Plain-language reports', body: 'Leads, rankings and what we did, every month.' },
];
