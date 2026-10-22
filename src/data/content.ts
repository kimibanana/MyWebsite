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
    blurb: 'Pages that rank for the treatments and services you want.',
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
    client: 'Family dental practice',
    location: 'Austin, TX',
    service: 'Medical SEO + LSA',
    challenge: 'Ranked for the practice name only; new-patient calls came almost entirely from insurance directories.',
    solution: 'Foundation Sprint, then Local and Content sprints with treatment pages, plus Local Services Ads.',
    results: [
      { value: '+182%', label: 'new-patient calls' },
      { value: 'Top 3', label: 'Map Pack in 7 suburbs' },
      { value: '−36%', label: 'cost per new patient' },
    ],
  },
  {
    placeholder: true,
    client: 'Med spa',
    location: 'Sydney, AU',
    service: 'Website + Google Ads',
    challenge: 'Outdated site with no online booking; ads sent traffic to the homepage.',
    solution: 'Growth Site Sprint with online booking and treatment landing pages; monthly Ads Sprints.',
    results: [
      { value: '+71%', label: 'online bookings' },
      { value: '1.7s', label: 'mobile load time' },
      { value: '5.8×', label: 'return on ad spend' },
    ],
  },
  {
    placeholder: true,
    client: 'Physical therapy clinic',
    location: 'Toronto, CA',
    service: 'Medical SEO',
    challenge: 'Two locations competing with national chains for every search.',
    solution: 'Location pages, condition content reviewed by clinicians, and a patient review system.',
    results: [
      { value: '+240%', label: 'organic traffic' },
      { value: '41', label: 'keywords on page 1' },
      { value: '210+', label: 'new Google reviews' },
    ],
  },
];

export const testimonials = [
  {
    placeholder: true,
    quote: 'For the first time I know exactly what our marketing company did each month. New-patient calls are up and we stopped relying on directories.',
    name: 'Client name',
    role: 'Practice Owner, Dental practice, Texas',
  },
  {
    placeholder: true,
    quote: 'They understood aesthetics marketing and the ad policies around it. Our new site books consultations while we sleep.',
    name: 'Client name',
    role: 'Founder, Med spa, Sydney',
  },
  {
    placeholder: true,
    quote: 'Clear scope, clear price, clear results. The sprint model is exactly what a busy clinic needs.',
    name: 'Client name',
    role: 'Clinic Director, Physical therapy, Ontario',
  },
];

// Shown in the hero. Illustrative numbers, labeled as a sample on the page.
export const dashboard = {
  title: 'Practice growth dashboard',
  period: 'Last 30 days',
  kpis: [
    { label: 'New patients', value: '86', change: '+24%' },
    { label: 'Cost per patient', value: '$112', change: '−18%' },
    { label: 'Calls & bookings', value: '312', change: '+31%' },
    { label: 'Conversion rate', value: '6.8%', change: '+1.2 pts' },
  ],
  channels: [
    { name: 'Google Maps (Map Pack)', patients: 34, share: 40 },
    { name: 'Organic search', patients: 22, share: 26 },
    { name: 'Google Ads', patients: 18, share: 21 },
    { name: 'Local Services Ads', patients: 12, share: 14 },
  ],
};

// Our four-channel framework.
export const framework = [
  { icon: 'pin', title: 'Get found', body: 'Medical SEO and Google Maps so patients find you when they search.', href: '/services/medical-seo' },
  { icon: 'target', title: 'Get chosen', body: 'Google Ads and Local Services Ads at the top of the page, today.', href: '/services/google-ads' },
  { icon: 'layout', title: 'Get booked', body: 'A fast website with online booking that turns visitors into appointments.', href: '/services/medical-website-design' },
  { icon: 'star', title: 'Get trusted', body: 'Reviews, reputation and content that make patients choose you.', href: '/services/medical-seo' },
];

export const specialties = [
  { name: 'Dental & orthodontics', icon: 'heart' },
  { name: 'Med spas & aesthetics', icon: 'star' },
  { name: 'Dermatology', icon: 'shield' },
  { name: 'Plastic surgery', icon: 'users' },
  { name: 'Chiropractic', icon: 'zap' },
  { name: 'Physical therapy', icon: 'chart' },
  { name: 'Primary & urgent care', icon: 'clipboard' },
  { name: 'Mental health & therapy', icon: 'chat' },
];

export const otherBusinesses = ['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Law firms', 'Contractors', 'Cleaning', 'Pest control', 'Real estate', 'Auto services'];

export const whyUs = [
  { icon: 'heart', title: 'Healthcare-first', body: 'Built around how patients choose providers, and the rules that come with medical marketing.' },
  { icon: 'clock', title: 'A decade of experience', body: '10+ years of SEO, web and ads work. The fundamentals that grow a practice grow any local business.' },
  { icon: 'file', title: 'Fixed-scope sprints', body: 'Every 30-day sprint has a written scope, fixed price and delivery report. No black-box retainers.' },
  { icon: 'users', title: 'Direct access', body: 'Talk to the specialists doing the work, with regular calls to review progress and results.' },
];

export const consultation = [
  { title: 'Competitor analysis', body: 'Who ranks and advertises in your area, and why they get the calls.' },
  { title: 'Visibility snapshot', body: 'Your Map Pack, organic and ads presence for the treatments that matter.' },
  { title: 'Website & booking review', body: 'Where visitors drop off before they become patients.' },
  { title: 'Your growth roadmap', body: 'The 3 biggest fixes and the sprints we’d recommend, with realistic timelines.' },
];

export const homeFaqs = [
  {
    q: 'Do you only work with medical practices?',
    a: 'Healthcare is our focus, but not our limit. The same fundamentals (local SEO, fast websites, well-run ads, and reviews) work for any local business, and we also serve home services, law firms, contractors and other local companies.',
  },
  {
    q: 'What is a sprint?',
    a: 'A sprint is 30 days of focused work with a written scope, fixed price and delivery date. Week 1 we plan, weeks 2–3 we execute, and week 4 we deliver a report of exactly what was done and what moved.',
  },
  {
    q: 'Is your marketing HIPAA-conscious?',
    a: 'Yes. We keep protected health information out of marketing tools: forms collect only non-clinical contact details, and tracking is set up so patient health data isn’t shared with ad platforms. Where you need intake or booking, we connect the compliant tools your practice already uses.',
  },
  {
    q: 'Do you lock clients into contracts?',
    a: 'No. The Foundation Sprint is a one-time project and monthly sprints are month-to-month. We keep clients by delivering, not with contracts. If you’d like to commit, a 12-month partnership saves 15% on every monthly sprint and care plan.',
  },
  {
    q: 'Will we own our website and accounts?',
    a: 'Always. Your domain, website, Google Business Profile, Analytics and ad accounts stay in your practice’s name.',
  },
  {
    q: 'Where is your team, and what hours do you work?',
    a: 'We are a remote team serving practices and local businesses in the US, UK, Canada and Australia. We schedule calls in your time zone and reply within one business day.',
  },
];

export const process = [
  { title: 'Free growth audit', body: 'We review your website, Google Business Profile, rankings and competitors, then walk you through what we found. No obligation.' },
  { title: 'Foundation Sprint', body: '30 days to fix technical issues, set up privacy-conscious tracking and build your 90-day roadmap.' },
  { title: 'Monthly sprints', body: 'Stack the sprints that fit your goals: Local, Content, Authority or Ads. Each has a fixed scope and price.' },
  { title: 'Report & next sprint', body: 'Every sprint ends with a plain-language report. We review the data together and plan the next one.' },
];

export const sprintCycle = [
  { week: 'Week 1', title: 'Plan', body: 'Agree on the sprint scope, targets and deliverables.' },
  { week: 'Weeks 2–3', title: 'Execute', body: 'Our specialists do the work, with progress updates.' },
  { week: 'Week 4', title: 'Deliver & report', body: 'You get a report of what shipped and what moved.' },
];

export const pains = [
  { icon: 'eye-off', title: 'Invisible on Google Maps', body: 'Patients nearby search every day and book with the three practices on the map instead of you.' },
  { icon: 'wallet', title: 'Dependent on directories', body: 'Insurance directories and referral sites control your patient flow, and your competitors are listed right beside you.' },
  { icon: 'question', title: 'Retainers with no visibility', body: 'You pay every month, get a vague report, and can’t tell what was actually done.' },
  { icon: 'hourglass', title: 'A website that doesn’t book', body: 'It looks fine, but patients still call to ask basic questions, or don’t call at all.' },
];

export const promises = [
  { icon: 'file', title: 'Fixed scope, fixed price', body: 'Every sprint is written down before we start.' },
  { icon: 'unlock', title: 'No long-term contracts', body: 'Month-to-month sprints. Pause or swap anytime.' },
  { icon: 'key', title: 'You own everything', body: 'Site, profiles, accounts and data stay in your name.' },
  { icon: 'shield', title: 'Privacy-conscious', body: 'Patient health data stays out of marketing tools.' },
];
