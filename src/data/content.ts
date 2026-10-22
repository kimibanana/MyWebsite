// Sprints, pricing, proof and FAQs. Prices are suggested starting points (TODO: confirm).

export type Sprint = {
  name: string;
  icon: string;
  price: string;
  cadence: string;
  blurb: string;
  deliverables: string[];
  featured?: boolean;
  cta: string;
};

// Every engagement starts here.
export const foundationSprint: Sprint = {
  name: 'Foundation Sprint',
  icon: 'flag',
  price: '$997',
  cadence: 'one-time · 30 days',
  blurb: 'Fix what’s holding you back and get a clear 90-day roadmap. Every SEO engagement starts here.',
  deliverables: [
    'Tracking setup: GA4, Search Console, call tracking',
    'Full website quality audit (technical, on-page, content)',
    'Technical and on-page fixes implemented',
    'Google Business Profile optimization',
    'Top 30 citations built and cleaned up',
    'Competitor and keyword map',
    'Prioritized 90-day sprint roadmap',
  ],
  cta: 'Start my Foundation Sprint',
};

// Stack one or more after the Foundation Sprint.
export const monthlySprints: Sprint[] = [
  {
    name: 'Local Sprint',
    icon: 'pin',
    price: '$650',
    cadence: '/month',
    blurb: 'Climb the Map Pack and build reviews.',
    deliverables: [
      'Weekly Google Business Profile posts',
      'Review request system + responses',
      '10 new citations or local links',
      'Map Pack rank grid tracking',
      'GBP Q&A and photo updates',
    ],
    cta: 'Add Local Sprint',
  },
  {
    name: 'Content Sprint',
    icon: 'file',
    price: '$900',
    cadence: '/month',
    blurb: 'Pages that rank for the jobs you want.',
    deliverables: [
      '4 service, city or blog pages',
      'Keyword targeting from your map',
      'Internal linking + schema',
      'Refresh of 1 underperforming page',
      'Published and indexed for you',
    ],
    featured: true,
    cta: 'Add Content Sprint',
  },
  {
    name: 'Authority Sprint',
    icon: 'link',
    price: '$1,200',
    cadence: '/month',
    blurb: 'Earn the links that move rankings.',
    deliverables: [
      '6–8 relevant, white-hat backlinks',
      'Local PR and partnership outreach',
      'Link gap analysis vs. competitors',
      'Anchor text and toxic link review',
      'Live link report',
    ],
    cta: 'Add Authority Sprint',
  },
  {
    name: 'Ads Sprint',
    icon: 'target',
    price: '$750',
    cadence: '/month + ad spend',
    blurb: 'Google Ads and Local Services Ads, managed for cost per lead.',
    deliverables: [
      'Google Ads and/or LSA management',
      'Conversion and call tracking',
      'Weekly search term cleanup',
      'Ad and landing page testing',
      'LSA lead disputes',
    ],
    cta: 'Add Ads Sprint',
  },
];

// Pre-built stacks for people who don't want to choose.
export const bundles = [
  { name: 'Local Starter', sprints: 'Local Sprint', price: '$650/mo', note: 'Best for one location in a smaller market' },
  { name: 'Local Growth', sprints: 'Local + Content', price: '$1,450/mo', note: 'Most popular: Map Pack plus organic pages', featured: true },
  { name: 'Market Leader', sprints: 'Local + Content + Authority', price: '$2,500/mo', note: 'For competitive cities and multi-location businesses' },
];

export const webPackages: Sprint[] = [
  {
    name: 'Launch Sprint',
    icon: 'layout',
    price: '$2,500',
    cadence: 'one-time · 30 days',
    blurb: 'A fast, conversion-focused site for a single-location business.',
    deliverables: [
      'Up to 8 pages',
      'Custom mobile-first design',
      'Click-to-call + quote forms',
      'On-page SEO + schema',
      'GA4, Search Console, call tracking',
      '30 days of post-launch support',
    ],
    cta: 'Plan my website',
  },
  {
    name: 'Growth Site Sprint',
    icon: 'layout',
    price: '$4,500',
    cadence: 'one-time · 30–45 days',
    blurb: 'An SEO-led site with service and city pages built to rank.',
    deliverables: [
      'Up to 20 pages',
      'Conversion copywriting',
      'Service + location page system',
      'Reviews and booking integrations',
      'Redirect mapping from your old site',
      '60 days of post-launch support',
    ],
    featured: true,
    cta: 'Plan my website',
  },
];

export const carePlans = [
  { name: 'Care', price: '$99/mo', features: ['Hosting, SSL, backups', 'Updates and security', '30 min of edits / month'] },
  { name: 'Care Plus', price: '$199/mo', features: ['Everything in Care', '2 hrs of edits / month', 'Monthly speed + SEO health check'] },
];

// Proof. Entries marked placeholder render with a "Sample" label and should be
// replaced with real clients before launch.
export const caseStudies = [
  {
    placeholder: true,
    client: 'Roofing company',
    location: 'Dallas, TX',
    service: 'Local SEO + LSA',
    challenge: 'Relied on shared leads from lead-gen platforms; invisible in the Map Pack outside one suburb.',
    solution: 'Foundation Sprint, then Local and Content sprints with city pages, plus Local Services Ads setup.',
    results: [
      { value: '3.2×', label: 'more calls from Google' },
      { value: 'Top 3', label: 'Map Pack in 9 suburbs' },
      { value: '−38%', label: 'cost per lead' },
    ],
  },
  {
    placeholder: true,
    client: 'Dental clinic',
    location: 'Sydney, AU',
    service: 'Web Design + Local SEO',
    challenge: 'Outdated site with a confusing booking process and few new-patient enquiries.',
    solution: 'Growth Site Sprint with online booking, treatment pages and a review system.',
    results: [
      { value: '+64%', label: 'new patient bookings' },
      { value: '1.8s', label: 'mobile load time' },
      { value: '140+', label: 'new Google reviews' },
    ],
  },
  {
    placeholder: true,
    client: 'HVAC contractor',
    location: 'Toronto, CA',
    service: 'Google Ads',
    challenge: 'Spending heavily on ads with no call tracking and a rising cost per lead.',
    solution: 'Rebuilt campaigns, added call tracking and a dedicated landing page; weekly Ads Sprint optimization.',
    results: [
      { value: '+112%', label: 'tracked leads' },
      { value: '−41%', label: 'cost per lead' },
      { value: '6.4×', label: 'return on ad spend' },
    ],
  },
];

export const testimonials = [
  {
    placeholder: true,
    quote: 'For the first time I know exactly what my marketing company did each month. The phone rings more and I stopped buying shared leads.',
    name: 'Client name',
    role: 'Owner, Roofing company, Texas',
  },
  {
    placeholder: true,
    quote: 'They rebuilt our site in a month and new patient bookings went up straight away. Easy to work with and always quick to reply.',
    name: 'Client name',
    role: 'Practice Manager, Dental clinic, Sydney',
  },
  {
    placeholder: true,
    quote: 'The sprint model is brilliant. Clear scope, clear price, clear results. No more paying a retainer and hoping.',
    name: 'Client name',
    role: 'Founder, HVAC company, Ontario',
  },
];

export const homeFaqs = [
  {
    q: 'What is a sprint?',
    a: 'A sprint is 30 days of focused work with a written scope, fixed price and delivery date. Week 1 we plan, weeks 2–3 we execute, and week 4 we deliver a report showing exactly what was done and what moved. You choose which sprints to run next.',
  },
  {
    q: 'Why sprints instead of a normal retainer?',
    a: 'With a typical retainer you pay every month and hope something happens. With sprints you see the deliverables before you pay and the results after. You can add, pause or swap sprints as your business changes.',
  },
  {
    q: 'Do you lock clients into contracts?',
    a: 'No. The Foundation Sprint is a one-time project. Monthly sprints are month-to-month; we keep clients by delivering, not with contracts.',
  },
  {
    q: 'Will I own my website and accounts?',
    a: 'Always. Your domain, hosting, website, Google Business Profile, Analytics and ad accounts are in your name. If you ever leave, you keep everything.',
  },
  {
    q: 'Where is your team based, and what hours do you work?',
    a: 'We are a remote team serving local businesses in the US, UK, Canada and Australia. We schedule calls in your time zone and reply within one business day.',
  },
  {
    q: 'What kinds of businesses do you work with?',
    a: 'Local service businesses: home services like HVAC, plumbing, roofing and electrical, dental and medical clinics, law firms, med spas, and contractors.',
  },
];

export const process = [
  { title: 'Free growth audit', body: 'We review your site, Google Business Profile, rankings and competitors, then walk you through what we found. No obligation.' },
  { title: 'Foundation Sprint', body: '30 days to fix the technical issues, set up tracking and build your 90-day roadmap.' },
  { title: 'Monthly sprints', body: 'Stack the sprints that fit your goals: Local, Content, Authority or Ads. Each has a fixed scope and price.' },
  { title: 'Report & next sprint', body: 'Every sprint ends with a plain-language report. We review the data together and plan the next one.' },
];

export const sprintCycle = [
  { week: 'Week 1', title: 'Plan', body: 'Agree on the sprint scope, targets and deliverables.' },
  { week: 'Weeks 2–3', title: 'Execute', body: 'Our specialists do the work, with progress updates.' },
  { week: 'Week 4', title: 'Deliver & report', body: 'You get a report of what shipped and what moved.' },
];

export const pains = [
  { icon: 'eye-off', title: 'Invisible on Google Maps', body: 'Customers in your area search every day, and call the three businesses on the map instead of you.' },
  { icon: 'wallet', title: 'Paying for shared leads', body: 'Lead platforms sell the same homeowner to five competitors, and the price keeps going up.' },
  { icon: 'question', title: 'Retainers with no visibility', body: 'You pay every month, get a vague report, and can’t tell what was actually done.' },
  { icon: 'hourglass', title: 'A website that just sits there', body: 'It looks okay, but it doesn’t make the phone ring.' },
];

export const promises = [
  { icon: 'file', title: 'Fixed scope, fixed price', body: 'Every sprint is written down before we start.' },
  { icon: 'unlock', title: 'No long-term contracts', body: 'Month-to-month sprints. Pause or swap anytime.' },
  { icon: 'key', title: 'You own everything', body: 'Site, profiles, accounts and data stay in your name.' },
  { icon: 'chart', title: 'Results you can see', body: 'Calls, leads and rankings reported every sprint.' },
];

export const industries = ['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Dental', 'Law firms', 'Med spas', 'Contractors', 'Cleaning', 'Pest control'];
