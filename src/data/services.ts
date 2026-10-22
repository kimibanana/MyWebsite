export type Service = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  headline: string;
  intro: string;
  startingAt: string; // TODO: confirm pricing
  priceNote: string;
  sprintNote: string;
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
    slug: 'local-seo',
    name: 'Local SEO',
    icon: 'pin',
    short: 'Rank in the Google Map Pack and organic results for the jobs you want, in the areas you serve.',
    headline: 'Own the Map Pack in every area you serve',
    intro:
      'When a homeowner searches “emergency plumber near me”, three businesses show up on the map and get most of the calls. We optimize your Google Business Profile, build location and service pages, earn local links and reviews, and make sure one of those three is you.',
    startingAt: '$997',
    priceNote: 'Foundation Sprint, then monthly sprints from $650/mo.',
    sprintNote: 'Starts with the Foundation Sprint. Continue with Local, Content and Authority sprints.',
    pains: [
      'Competitors with worse reviews show up above you on Google Maps.',
      'You paid an SEO company before and never knew what they actually did.',
      'Your site ranks for your business name, but not for the services people search.',
      'You rely on referrals and lead-gen platforms that sell the same lead to five competitors.',
    ],
    outcomes: [
      { title: 'More calls from the map', body: 'Map Pack visibility drives the highest-intent local leads there are.' },
      { title: 'Leads you own', body: 'Exclusive enquiries from your own site and profile, not shared leads from a platform.' },
      { title: 'Work you can see', body: 'Every sprint has a written scope and a delivery report. No black box.' },
    ],
    included: [
      'Google Business Profile optimization and weekly posts',
      'Service + city landing pages',
      'Technical SEO and on-page fixes',
      'Citation building and NAP cleanup',
      'Review generation system',
      'Local link building',
      'Map Pack rank tracking by neighborhood',
      'Monthly sprint report and call',
    ],
    idealFor: ['Home services (HVAC, plumbing, roofing, electrical)', 'Dental and medical clinics', 'Law firms', 'Med spas and salons', 'Contractors and remodelers'],
    faqs: [
      { q: 'How long until I see results?', a: 'Google Business Profile and technical fixes often move the needle in 4–8 weeks. Competitive organic rankings typically take 3–6 months. You will see exactly what was delivered at the end of every sprint, so you are never left guessing.' },
      { q: 'Do you guarantee #1 rankings?', a: 'No, and nobody honestly can, because Google controls rankings. We guarantee the scope of every sprint: you know exactly what will be delivered and by when.' },
      { q: 'Can you rank me in cities where I don’t have an office?', a: 'Yes, through service-area pages and organic rankings. Map Pack rankings depend heavily on your verified address, and we will be upfront about what is realistic.' },
    ],
    metaTitle: 'Local SEO for Service Businesses | Rank in the Map Pack | Web Frontier',
    metaDescription: 'Local SEO for service businesses in the US, UK, Canada and Australia. Google Business Profile, local pages, reviews and links, delivered in fixed-price 30-day sprints.',
  },
  {
    slug: 'web-design',
    name: 'Web Design',
    icon: 'layout',
    short: 'Fast, mobile-first websites that turn visitors into phone calls and booked jobs.',
    headline: 'A website that books jobs while you’re on the job',
    intro:
      'Most local business websites look fine and convert nobody. We build fast, mobile-first sites with click-to-call buttons, clear service pages, trust signals and quote forms, so more of your visitors become customers. SEO is built in from day one.',
    startingAt: '$2,500',
    priceNote: 'One-time Launch Sprint. Live in about 30 days.',
    sprintNote: 'Delivered as a Launch Sprint with a fixed scope and launch date.',
    pains: [
      'Your site looks dated and you hesitate to send people to it.',
      'It is slow, clunky on phones, or hard to update.',
      'People visit but don’t call or fill in the form.',
      'Your last web designer disappeared and you can’t log in.',
    ],
    outcomes: [
      { title: 'Built to convert', body: 'Click-to-call, quote forms, reviews and clear offers on every page.' },
      { title: 'SEO-ready', body: 'Service and location page structure, schema and speed, built for local rankings.' },
      { title: 'You own it', body: 'Your domain, hosting and files are in your name. No lock-in.' },
    ],
    included: [
      'Discovery call and sitemap planning',
      'Custom, mobile-first design',
      'Conversion copywriting for key pages',
      'Service and location pages',
      'Click-to-call, quote forms and booking integration',
      'Speed optimization and schema markup',
      'Google Analytics 4, Search Console and call tracking',
      'Training video for simple edits',
    ],
    idealFor: ['New or rebranding businesses', 'Sites that get traffic but few leads', 'Businesses outgrowing a DIY website'],
    faqs: [
      { q: 'How long does a website take?', a: 'Most sites launch within one 30-day Launch Sprint, as long as we receive your content and feedback on time. Bigger sites may take two sprints.' },
      { q: 'Which platform do you use?', a: 'WordPress when you want to edit everything yourself, or a fast static build for maximum speed and security. We explain the trade-offs before you decide.' },
      { q: 'Can you redesign without losing my rankings?', a: 'Yes. We map every existing URL, keep what ranks, and set up redirects so you keep your traffic.' },
    ],
    metaTitle: 'Web Design for Local Businesses | Websites That Convert | Web Frontier',
    metaDescription: 'Fast, mobile-first websites for local service businesses, built to turn visitors into calls and booked jobs. Launched in a fixed-price 30-day sprint.',
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    icon: 'target',
    short: 'Search campaigns that put you at the top of Google today, managed for booked jobs, not clicks.',
    headline: 'Leads this week, managed for profit',
    intro:
      'Google Ads puts you at the top of the results today. Run badly, it burns cash fast. We build tightly targeted campaigns, track every call and form, and cut what doesn’t bring in customers, sprint after sprint.',
    startingAt: '$750/mo',
    priceNote: 'Ads Sprint management fee. Ad spend is paid directly to Google.',
    sprintNote: 'Setup in the first sprint, then monthly Ads Sprints focused on cost per lead.',
    pains: [
      'You spent on ads and got clicks, but not customers.',
      'You don’t know which keywords actually bring in jobs.',
      'Cost per lead keeps climbing month after month.',
      'Your current agency “manages” the account but nothing changes.',
    ],
    outcomes: [
      { title: 'Every lead tracked', body: 'Calls, forms and chats are tracked so we optimize for jobs, not clicks.' },
      { title: 'Less wasted spend', body: 'Negative keywords, schedules and service areas tightened every sprint.' },
      { title: 'Better landing pages', body: 'We fix the page the ad sends people to, not just the ad.' },
    ],
    included: [
      'Account audit or new account build',
      'Keyword research and campaign structure',
      'Ad copy and assets',
      'Call, form and offline conversion tracking',
      'Weekly bid and search term optimization',
      'Landing page recommendations',
      'Monthly sprint report and call',
    ],
    idealFor: ['Businesses that need leads now', 'High-value services', 'Seasonal pushes', 'Supporting SEO while it builds'],
    faqs: [
      { q: 'How much should I spend on ads?', a: 'It depends on your market and service. Many local businesses start with $1,500–$5,000 per month in ad spend. We recommend a budget after looking at your competition.' },
      { q: 'Do I own the ad account?', a: 'Yes. The account is in your name and you keep full access, even if you stop working with us.' },
    ],
    metaTitle: 'Google Ads Management for Local Businesses | Web Frontier',
    metaDescription: 'Google Ads campaigns for local service businesses, managed for booked jobs and lower cost per lead. Clear monthly sprints and honest reporting.',
  },
  {
    slug: 'local-services-ads',
    name: 'Local Services Ads',
    icon: 'shield',
    short: 'Get the Google Guaranteed or Google Screened badge and pay per lead, not per click.',
    headline: 'Show up above everyone with Google Guaranteed',
    intro:
      'Local Services Ads sit at the very top of Google with a trust badge, and you pay per lead instead of per click. We handle verification, profile setup, budgets, lead disputes and review strategy, so you get more booked jobs for less.',
    startingAt: '$500/mo',
    priceNote: 'LSA management. Lead costs are paid directly to Google.',
    sprintNote: 'Setup and verification in the first sprint, then ongoing monthly management.',
    pains: [
      'Verification has stalled, or you don’t know where to start.',
      'You’re paying for junk or out-of-area leads.',
      'Competitors show up in LSA and you don’t.',
      'You never dispute bad leads, so you pay for them.',
    ],
    outcomes: [
      { title: 'Top-of-page trust', body: 'The Google Guaranteed or Google Screened badge above the regular ads.' },
      { title: 'Pay per lead', body: 'Only pay for real enquiries in your service area.' },
      { title: 'Fewer wasted leads', body: 'We review and dispute invalid leads so you get credited.' },
    ],
    included: [
      'Eligibility check and verification support',
      'Profile setup and job type optimization',
      'Service area and budget configuration',
      'Lead review and dispute management',
      'Review generation to improve ranking',
      'Monthly lead and cost report',
    ],
    idealFor: ['Plumbers, HVAC, electricians, roofers', 'Locksmiths and cleaners', 'Lawyers and financial planners', 'Other LSA-eligible services'],
    faqs: [
      { q: 'Is my business eligible?', a: 'LSA is available for many home service and professional categories in the US, Canada, the UK and Australia. We confirm eligibility for your category and location before you pay anything.' },
      { q: 'Should I run LSA or Google Ads?', a: 'Often both. LSA captures high-intent searches with a trust badge; Google Ads covers services and keywords LSA doesn’t. We recommend the right mix for your budget.' },
    ],
    metaTitle: 'Local Services Ads Management | Google Guaranteed | Web Frontier',
    metaDescription: 'Google Local Services Ads setup and management. Verification, profile optimization, lead disputes and reviews, so you pay less per booked job.',
  },
  {
    slug: 'website-care',
    name: 'Website Maintenance',
    icon: 'clipboard',
    short: 'Hosting, backups, security, updates and quick edits, so your site never lets you down.',
    headline: 'Never worry about your website again',
    intro:
      'A hacked or broken site costs you leads and rankings. Our care plans keep your website fast, secure and backed up, with a real person who makes your changes quickly.',
    startingAt: '$99/mo',
    priceNote: 'Month-to-month. Cancel anytime.',
    sprintNote: 'Ongoing monthly plan. Pairs with any sprint.',
    pains: [
      'Your site went down or got hacked without warning.',
      'Plugins and themes haven’t been updated in years.',
      'Small changes take weeks to get done.',
      'You’re not sure who controls your domain and hosting.',
    ],
    outcomes: [
      { title: 'Always online', body: 'Managed hosting, uptime monitoring and daily backups.' },
      { title: 'Secure', body: 'SSL, firewall, malware scanning and timely updates.' },
      { title: 'Edits done fast', body: 'Send a message; most changes are done within 2 business days.' },
    ],
    included: [
      'Managed hosting and SSL',
      'Daily off-site backups',
      'Core, theme and plugin updates',
      'Security monitoring and malware cleanup',
      'Uptime monitoring',
      'Monthly content edits (30 min or 2 hrs by plan)',
      'Monthly health report',
    ],
    idealFor: ['Any local business website', 'WordPress sites', 'Sites we built or inherited'],
    faqs: [
      { q: 'Can you take over a site someone else built?', a: 'Yes. We start with a health check, fix urgent issues, then move it onto a care plan.' },
      { q: 'What if my site gets hacked?', a: 'On a care plan, cleanup and restoration are included at no extra cost.' },
    ],
    metaTitle: 'Website Maintenance & Hosting for Small Businesses | Web Frontier',
    metaDescription: 'Managed hosting, backups, security, updates and fast edits for local business websites. Care plans from $99/month, cancel anytime.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
