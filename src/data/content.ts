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
    blurb: 'Google, Meta and other paid ads, managed for cost per patient.',
    deliverables: [
      'Google, Meta, TikTok, LinkedIn or LSA campaign management',
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
  { icon: 'pin', title: 'Get found', body: 'SEO and Google Maps, so nearby patients see your clinic when they search for your services.', href: '/services/medical-seo' },
  { icon: 'target', title: 'Get chosen', body: 'Google Ads and Local Services Ads that reach people searching now, with every enquiry tracked.', href: '/services/google-ads' },
  { icon: 'layout', title: 'Get booked', body: 'A clear, welcoming website where calling or booking takes a few taps on any phone.', href: '/services/medical-website-design' },
  { icon: 'star', title: 'Get trusted', body: 'Steady reviews and helpful answers to the questions patients ask before they book.', href: '/services/medical-seo' },
];

export type Industry = { name: string; icon: string; focus: string; sub?: string[] };

// Every healthcare industry we serve, grouped the way patients and regulators see them.
export const industryGroups: { title: string; items: Industry[] }[] = [
  {
    title: 'Medical & regulated healthcare',
    items: [
      { name: 'Medical practices & GP clinics', icon: 'heart', focus: 'Be the first clinic families find for check-ups, consultations and same-day care.' },
      { name: 'Hospitals & medical centers', icon: 'clipboard', focus: 'Grow departments and specialty centers with visibility for every service and doctor.' },
      { name: 'Telehealth clinics', icon: 'phone', focus: 'Win national searches and convert visitors into online consultations.' },
      { name: 'Urgent care clinics', icon: 'clock', focus: 'Show up first, with accurate hours and wait times, when patients need care today.' },
      { name: 'Weight management clinics', icon: 'zap', focus: 'Promote programs and treatments within strict health-claim and ad-policy rules.' },
      { name: 'Peptide clinics', icon: 'plus', focus: 'Compliant education and campaigns for a closely watched treatment category.' },
      { name: 'Pain management clinics', icon: 'heart', focus: 'Reach patients searching for relief from chronic and acute pain.' },
    ],
  },
  {
    title: 'Allied health & care',
    items: [
      { name: 'Allied health', icon: 'users', focus: 'Fill appointment books for every allied health discipline, practitioner by practitioner.', sub: ['Physiotherapy', 'Speech pathology', 'Occupational therapy', 'Psychologists', 'Counsellors', 'Dietitians', 'Nutritionists', 'Chiropractors', 'Osteopaths', 'Podiatrists', 'Exercise physiologists', 'Myotherapists', 'Audiologists', 'Optometrists', 'Positive behaviour support', 'Acupuncture'] },
      { name: 'Disability & NDIS providers', icon: 'users', focus: 'Reach participants, families and coordinators with clear, accessible information.', sub: ['SIL providers', 'SDA housing', 'Support coordination', 'Plan management', 'Therapy services', 'Community access', 'Daily living support', 'Respite care'] },
      { name: 'Aged care & home health care', icon: 'heart', focus: 'Build trust with families researching care for a parent or loved one.' },
      { name: 'Mental health services', icon: 'chat', focus: 'Help people find the right therapist with sensitive, privacy-first marketing.' },
      { name: 'Rehabilitation centers', icon: 'zap', focus: 'Reach patients and referrers for inpatient and outpatient rehab programs.' },
      { name: 'Sports medicine', icon: 'target', focus: 'Attract athletes and active patients for injury care and performance.' },
    ],
  },
  {
    title: 'Aesthetics & cosmetic',
    items: [
      { name: 'Cosmetic & aesthetic clinics', icon: 'star', focus: 'Book more consultations for injectables, skin and body treatments.', sub: ['Cosmetic injectables', 'Medical spas', 'Non-surgical aesthetics', 'Laser & skin treatments'] },
      { name: 'Dermatology & skin clinics', icon: 'shield', focus: 'Attract both medical and cosmetic skin patients with content Google trusts.' },
      { name: 'Cosmetic surgery', icon: 'users', focus: 'Reach high-intent patients researching procedures and turn them into consultations.', sub: ['Plastic surgery', 'Breast surgery', 'Facial surgery', 'Body contouring', 'Hair transplants'] },
    ],
  },
  {
    title: 'Specialty, diagnostics & retail',
    items: [
      { name: 'Dental practices', icon: 'heart', focus: 'Fill the chair with new patients and grow implants, braces and cosmetic dentistry.' },
      { name: 'Fertility & IVF', icon: 'star', focus: 'Support couples through a long, emotional research journey with trustworthy content.' },
      { name: 'Eye care & ophthalmology', icon: 'eye', focus: 'Fill the schedule for eye exams, LASIK, cataract and specialist care.' },
      { name: 'Hearing clinics', icon: 'chat', focus: 'Reach people and families researching hearing tests and hearing aids.' },
      { name: 'Sleep clinics', icon: 'moon', focus: 'Turn searches about snoring and sleep apnea into booked sleep studies.' },
      { name: 'Health screening', icon: 'clipboard', focus: 'Sell check-up packages and executive health screens online.' },
      { name: 'Radiology, imaging & pathology labs', icon: 'chart', focus: 'Be the lab or imaging center patients and doctors find first.' },
      { name: 'Functional medicine', icon: 'zap', focus: 'Explain your approach clearly and attract patients who want it.' },
      { name: 'Pharmacies', icon: 'plus', focus: 'Drive foot traffic, services and online orders for retail pharmacies.' },
      { name: 'Veterinary clinics & animal hospitals', icon: 'heart', focus: 'Win “vet near me” searches and keep pet owners coming back.' },
      { name: 'Health e-commerce & supplement brands', icon: 'cart', focus: 'Grow online sales while staying inside health-product advertising rules.' },
      { name: 'Medical device companies', icon: 'target', focus: 'Reach clinicians, buyers and patients with compliant campaigns.' },
      { name: 'Corporate health', icon: 'users', focus: 'Win employer contracts for workplace health and wellness programs.' },
    ],
  },
];

// Flat list for the homepage grid and strip.
export const specialties = industryGroups.flatMap((g) => g.items);

export type Capability = { name: string; body: string; href?: string };

// Full service catalog. Items with an href have their own service page.
export const capabilityGroups: { title: string; icon: string; items: Capability[] }[] = [
  {
    title: 'Digital presence',
    icon: 'layout',
    items: [
      { name: 'Medical website design', body: 'Fast, compliant clinic websites with clear booking paths.', href: '/services/medical-website-design' },
      { name: 'Landing pages', body: 'Campaign pages that turn ad clicks into appointments.', href: '/services/landing-pages' },
      { name: 'Medical SEO', body: 'Rank for the treatments patients search for in your area.', href: '/services/medical-seo' },
      { name: 'Google Business Profile & local SEO', body: 'Win the map for every clinic location.', href: '/services/medical-seo' },
      { name: 'AI search visibility', body: 'Get recommended in ChatGPT, Gemini and Google AI Overviews.' },
      { name: 'Content marketing', body: 'Treatment, condition and blog content reviewed by your clinicians.' },
      { name: 'Social media management', body: 'Consistent, compliant posting on the platforms your patients use.' },
      { name: 'Accessible healthcare websites', body: 'Websites that work for patients with disabilities, built to WCAG standards.' },
    ],
  },
  {
    title: 'Paid advertising',
    icon: 'target',
    items: [
      { name: 'Google Ads', body: 'Search and Maps ads planned around your services and appointment capacity.', href: '/services/google-ads' },
      { name: 'Meta Ads', body: 'Facebook and Instagram campaigns for local patients.', href: '/services/meta-ads' },
      { name: 'Local Services Ads', body: 'Pay-per-lead ads with Google’s trust badge, where available.', href: '/services/local-services-ads' },
      { name: 'TikTok Ads', body: 'Short-form video ads for aesthetics, wellness and younger patients.' },
      { name: 'LinkedIn Ads', body: 'Reach clinicians, referrers and corporate health buyers.' },
      { name: 'ChatGPT Ads', body: 'Early access to ads in AI assistants as the format rolls out.' },
    ],
  },
  {
    title: 'Growth & retention',
    icon: 'chart',
    items: [
      { name: 'Conversion rate optimization', body: 'Testing and booking-path fixes that turn visitors into patients.', href: '/services/conversion-rate-optimization' },
      { name: 'Lead generation', body: 'Multi-channel campaigns that deliver qualified patient enquiries.' },
      { name: 'Email marketing', body: 'Recall, reactivation and newsletters that bring patients back.' },
      { name: 'Patient retention', body: 'Reminders, follow-ups and loyalty programs that reduce no-shows.' },
      { name: 'Reputation management', body: 'More five-star reviews and professional responses to every one.' },
      { name: 'Growth consultancy & strategy', body: 'A senior strategist to plan your marketing, budget and hiring.' },
    ],
  },
  {
    title: 'Data & systems',
    icon: 'clipboard',
    items: [
      { name: 'Advanced conversion tracking', body: 'Privacy-safe tracking of calls, forms and bookings back to each channel.' },
      { name: 'Clinic system integration', body: 'Connect your booking and practice management software to your marketing.' },
      { name: 'Analytics & reporting', body: 'One dashboard for patients, cost per patient and revenue by channel.' },
      { name: 'AI & automation', body: 'Chatbots, instant replies and workflows that answer patients faster.' },
      { name: 'Website care & maintenance', body: 'Hosting, security, backups and edits, handled.', href: '/services/website-care' },
    ],
  },
];

// Rules our compliance review checks copy and campaigns against.
export const complianceFrameworks = {
  philippines: ['FDA Philippines advertising rules', 'DOH guidelines', 'Data Privacy Act of 2012', 'PRC & medical society codes of ethics'],
  global: ['HIPAA (United States)', 'Ahpra & TGA (Australia)', 'ASA / CAP Code (United Kingdom)', 'Google & Meta healthcare ad policies'],
};

export const complianceSteps = [
  { title: 'Regulatory mapping', body: 'We list the rules that apply to your specialty and country before we write a word.' },
  { title: 'Claims & copy review', body: 'Treatment claims, before-and-after images and testimonials are checked against those rules.' },
  { title: 'Platform policy check', body: 'Ads and landing pages are built to pass Google and Meta healthcare policies the first time.' },
  { title: 'Privacy-safe tracking', body: 'Patient health information stays out of forms, analytics and ad platforms.' },
  { title: 'Ongoing monitoring', body: 'Every sprint we re-check live ads and pages as rules and platform policies change.' },
];

export const whyUs = [
  { icon: 'heart', title: 'Only healthcare', body: 'We understand how patients choose care, and the rules that protect them.' },
  { icon: 'shield', title: 'Careful with claims', body: 'We check pages and ads against your country’s health advertising rules, and you approve every claim.' },
  { icon: 'file', title: 'Progress you can see', body: 'Each sprint has a written goal and a plain-English report of what changed.' },
  { icon: 'users', title: 'Hands-on support', body: 'You talk directly to the people doing the work, and we take care of the details.' },
];

export const consultation = [
  { title: 'Competitor analysis', body: 'Who ranks and advertises in your area, and why they get the calls.' },
  { title: 'Visibility snapshot', body: 'Your Map Pack, organic and ads presence for the treatments that matter.' },
  { title: 'Website & booking review', body: 'Where visitors drop off before they become patients.' },
  { title: 'Your growth roadmap', body: 'The 3 biggest fixes and the sprints we’d recommend, with realistic timelines.' },
];

export const homeFaqs = [
  {
    home: true,
    q: 'Do you only work with healthcare businesses?',
    a: 'Yes. We work only with clinics, hospitals, practices and other healthcare providers. That focus is why we understand patient search behavior, medical advertising rules and the ad-platform policies that trip up generalist agencies.',
  },
  {
    q: 'Do you work with clinics in the Philippines?',
    a: 'Yes. We are based in Laguna and work with clinics and hospitals across Metro Manila, Calabarzon, Cebu, Davao and the rest of the country. We know local search behavior, Google Maps in Philippine cities, and the FDA Philippines and DOH rules on health advertising.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We serve practices in the US, UK, Canada, Australia, Singapore, the UAE and beyond. We schedule calls in your time zone, follow your country’s advertising and privacy rules, and reply within one business day.',
  },
  {
    home: true,
    q: 'What is a sprint?',
    a: 'A sprint is 30 days of focused work with a written scope, fixed price and delivery date. Week 1 we plan, weeks 2–3 we execute, and week 4 we deliver a report of exactly what was done and what moved.',
  },
  {
    q: 'How quickly will we see results?',
    a: 'Google Ads can bring enquiries within the first week or two once campaigns are live. SEO and Google Maps rankings usually show clear movement in 3 to 6 months, depending on your competition and your website’s starting point.',
  },
  {
    q: 'Is your marketing compliant with healthcare rules?',
    a: 'Every campaign goes through our compliance review against the rules for your country and specialty, such as FDA Philippines and DOH guidelines, HIPAA in the US, or Ahpra and TGA in Australia, plus Google and Meta healthcare policies. We keep patient health information out of marketing tools. Your practice still gives final approval on all claims.',
  },
  {
    home: true,
    q: 'Do you lock clients into contracts?',
    a: 'No. The Foundation Sprint is a one-time project and monthly sprints are month-to-month. We keep clients by delivering, not with contracts. If you’d like to commit, a 12-month partnership saves 15% on every monthly sprint and care plan.',
  },
  {
    q: 'Will we own our website and accounts?',
    a: 'Always. Your domain, website, Google Business Profile, Analytics and ad accounts stay in your practice’s name.',
  },
  {
    home: true,
    q: 'Do we need to know which service we need before we contact you?',
    a: 'No. Tell us what your clinic wants more of, such as calls, bookings or a particular treatment, and what has or hasn’t worked so far. We’ll suggest where to start, and it’s fine if the answer is “not yet”.',
  },
  {
    home: true,
    q: 'Can you guarantee more bookings and calls?',
    a: 'No honest agency can. Results depend on your location, competition, services and starting point. What we can promise is focused work on the things that most affect bookings, clear reporting on what changed, and straight answers about what is realistic for your practice.',
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
  { icon: 'eye-off', title: 'Hard to find nearby', body: 'Other clinics appear on Google Maps before you, even for services you know you do well.' },
  { icon: 'question', title: 'Quiet phones, unclear reports', body: 'You can’t tell which calls came from Google, or what an agency actually did last month.' },
  { icon: 'hourglass', title: 'A website that holds you back', body: 'It hasn’t changed in years, it’s slow on phones, and booking takes too many steps.' },
];

export const promises = [
  { icon: 'file', title: 'Fixed scope, fixed price', body: 'Every sprint is written down before we start.' },
  { icon: 'unlock', title: 'No long-term contracts', body: 'Month-to-month sprints. Pause or swap anytime.' },
  { icon: 'key', title: 'You own everything', body: 'Site, profiles, accounts and data stay in your name.' },
  { icon: 'shield', title: 'Privacy-conscious', body: 'Patient health data stays out of marketing tools.' },
];
