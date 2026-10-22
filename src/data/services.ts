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
    slug: 'medical-seo',
    name: 'Medical SEO',
    icon: 'search',
    short: 'Rank in the Map Pack and on page one for the treatments patients search for in your area.',
    headline: 'Be the practice patients find first',
    intro:
      'When someone searches “dentist near me” or “dermatologist for acne”, three practices show up on the map and get most of the calls. We optimize your Google Business Profile, build treatment and location pages, earn trusted links and reviews, and follow Google’s standards for health content, so one of those three is you.',
    startingAt: '$997',
    priceNote: 'Foundation Sprint, then monthly sprints from $650/mo.',
    sprintNote: 'Starts with the Foundation Sprint. Continue with Local, Content and Authority sprints.',
    pains: [
      'Competitors with fewer reviews show up above you on Google Maps.',
      'Your website ranks for your practice name but not for the treatments you want more of.',
      'You paid an SEO company before and never knew what they actually did.',
      'Patient volume depends on referrals and insurance directories you don’t control.',
    ],
    outcomes: [
      { title: 'More new-patient calls', body: 'Map Pack visibility drives the highest-intent bookings there are.' },
      { title: 'More of the right patients', body: 'We target the high-value treatments and services you want to grow.' },
      { title: 'Content Google trusts', body: 'Health pages written to E-E-A-T standards and reviewed by your clinicians.' },
    ],
    included: [
      'Google Business Profile optimization and weekly posts',
      'Treatment, condition and location pages',
      'Technical SEO and site speed fixes',
      'Medical schema (Physician, MedicalClinic, FAQ)',
      'Healthcare directory citations and NAP cleanup',
      'Patient review generation system',
      'Local link building',
      'Monthly sprint report and call',
    ],
    idealFor: ['Dental and orthodontic practices', 'Med spas and aesthetic clinics', 'Dermatology and plastic surgery', 'Chiropractic and physical therapy', 'Primary and urgent care'],
    faqs: [
      { q: 'How long until we see more patients?', a: 'Google Business Profile and technical fixes often move the needle in 4–8 weeks. Competitive organic rankings usually take 3–6 months. Every sprint ends with a report of exactly what was delivered and what moved.' },
      { q: 'Who writes the medical content?', a: 'Our healthcare writers draft it from your input and published guidelines, and a clinician on your team reviews it before it goes live. Your name and credentials appear as the medical reviewer, which helps with Google’s trust signals.' },
      { q: 'Do you guarantee #1 rankings?', a: 'No, and nobody honestly can. We guarantee the scope of every sprint: you know exactly what will be delivered and by when.' },
    ],
    metaTitle: 'Medical SEO for Practices | Rank in the Map Pack | Web Frontier',
    metaDescription: 'Medical SEO for dental, med spa, dermatology, chiropractic and other practices. Google Business Profile, treatment pages, reviews and links in fixed-price 30-day sprints.',
  },
  {
    slug: 'medical-website-design',
    name: 'Medical Website Design',
    icon: 'layout',
    short: 'Fast, trustworthy practice websites that turn visitors into booked appointments.',
    headline: 'A practice website that books appointments 24/7',
    intro:
      'Patients judge your practice by your website before they ever call. We build fast, mobile-first sites with online booking, clear treatment pages, provider bios, reviews and accessibility built in, so more visitors become patients.',
    startingAt: '$2,500',
    priceNote: 'One-time Launch Sprint. Live in about 30 days.',
    sprintNote: 'Delivered as a Launch Sprint with a fixed scope and launch date.',
    pains: [
      'Your site looks dated and doesn’t reflect the quality of your care.',
      'It is slow, clunky on phones, or hard for your team to update.',
      'Patients visit but call to ask questions the site should answer.',
      'Online booking is missing or confusing.',
    ],
    outcomes: [
      { title: 'Built to book', body: 'Online scheduling, click-to-call and clear next steps on every page.' },
      { title: 'Built for trust', body: 'Provider bios, credentials, reviews and before-and-after galleries where appropriate.' },
      { title: 'Privacy-conscious', body: 'Secure forms that keep medical details out of plain email, plus accessibility best practices.' },
    ],
    included: [
      'Discovery call and sitemap planning',
      'Custom, mobile-first design',
      'Treatment, condition and provider pages',
      'Online booking and patient form integrations',
      'Accessibility (WCAG) best practices',
      'Speed optimization and medical schema',
      'GA4, Search Console and call tracking',
      'Training video for simple edits',
    ],
    idealFor: ['New or rebranding practices', 'Multi-location groups', 'Practices adding new treatments'],
    faqs: [
      { q: 'How long does a new practice website take?', a: 'Most sites launch within one 30-day Launch Sprint, as long as we receive your content and approvals on time. Larger multi-location sites may take two sprints.' },
      { q: 'Is the website HIPAA compliant?', a: 'Marketing websites shouldn’t collect protected health information through ordinary forms. We keep contact forms to non-clinical details and can connect HIPAA-compliant intake or booking tools that your practice already uses.' },
      { q: 'Can you redesign without losing our rankings?', a: 'Yes. We map every existing URL, keep what ranks, and set up redirects so you keep your traffic.' },
    ],
    metaTitle: 'Medical Website Design | Practice Websites That Book | Web Frontier',
    metaDescription: 'Fast, mobile-first websites for dental, medical and aesthetic practices, built to turn visitors into booked appointments. Launched in a fixed-price 30-day sprint.',
  },
  {
    slug: 'google-ads',
    name: 'Google Ads for Practices',
    icon: 'target',
    short: 'Search campaigns that put your practice at the top of Google today, managed for booked patients.',
    headline: 'New patients this week, managed for profit',
    intro:
      'Google Ads puts your practice at the top of the results today. Healthcare ads come with extra policies and expensive clicks, so mistakes cost more. We build compliant, tightly targeted campaigns, track every call and booking, and cut what doesn’t bring in patients.',
    startingAt: '$750/mo',
    priceNote: 'Ads Sprint management fee. Ad spend is paid directly to Google.',
    sprintNote: 'Setup in the first sprint, then monthly Ads Sprints focused on cost per patient.',
    pains: [
      'You spent on ads and got clicks, but few booked patients.',
      'Ads were disapproved under Google’s healthcare policies.',
      'You don’t know which treatments and keywords actually pay off.',
      'Cost per patient keeps climbing.',
    ],
    outcomes: [
      { title: 'Every booking tracked', body: 'Calls, forms and online bookings tracked, without sending patient health data to ad platforms.' },
      { title: 'Policy-compliant ads', body: 'Campaigns built around Google’s healthcare and medicine policies.' },
      { title: 'Lower cost per patient', body: 'Search terms, schedules and locations tightened every sprint.' },
    ],
    included: [
      'Account audit or new account build',
      'Treatment-level keyword research',
      'Ad copy and assets within healthcare policies',
      'Privacy-conscious conversion tracking',
      'Weekly bid and search term optimization',
      'Landing page recommendations',
      'Monthly sprint report and call',
    ],
    idealFor: ['Practices launching a new treatment', 'High-value procedures', 'New locations', 'Supporting SEO while it builds'],
    faqs: [
      { q: 'How much should we spend on ads?', a: 'It depends on your specialty and market. Many practices start with $2,000–$6,000 per month in ad spend. We recommend a budget after reviewing your competition.' },
      { q: 'Do we own the ad account?', a: 'Yes. The account is in your practice’s name and you keep full access, even if you stop working with us.' },
    ],
    metaTitle: 'Google Ads for Medical Practices | Healthcare PPC | Web Frontier',
    metaDescription: 'Google Ads for dental, medical and aesthetic practices: policy-compliant campaigns, privacy-conscious tracking and lower cost per new patient.',
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    icon: 'users',
    short: 'Facebook and Instagram campaigns that reach local patients and turn interest into booked consultations.',
    headline: 'Reach patients before they start searching',
    intro:
      'Many treatments start with a scroll, not a search: aesthetics, dental makeovers, weight loss, fertility and health checks. We plan Facebook and Instagram campaigns around your services, local audiences and appointment capacity, write creative that stays inside Meta’s health and wellness policies, and track every enquiry back to the ad that brought it.',
    startingAt: '$750/mo',
    priceNote: 'Ads Sprint management fee. Ad spend is paid directly to Meta.',
    sprintNote: 'Runs as an Ads Sprint, on its own or alongside Google Ads.',
    pains: [
      'Boosted posts get likes but never bookings.',
      'Ads keep getting rejected under Meta’s health and wellness rules.',
      'Leads come in from forms but nobody follows up fast enough.',
      'You can’t tell which ads actually produced patients.',
    ],
    outcomes: [
      { title: 'Consultations, not likes', body: 'Campaigns are optimized for booked appointments and qualified enquiries.' },
      { title: 'Policy-safe creative', body: 'Ads, before-and-after images and claims are reviewed before launch.' },
      { title: 'Clear cost per patient', body: 'Tracking connects ad spend to enquiries and bookings.' },
    ],
    included: [
      'Audience and offer strategy by service and location',
      'Ad creative and copy (image, carousel and video)',
      'Meta health and wellness policy review',
      'Lead forms or landing pages with privacy-safe tracking',
      'Retargeting for website visitors and video viewers',
      'Weekly optimization and creative testing',
      'Monthly lead and cost report',
    ],
    idealFor: ['Aesthetic clinics and med spas', 'Dental makeovers and orthodontics', 'Weight loss and wellness programs', 'Fertility clinics', 'Health screening packages'],
    faqs: [
      { q: 'Can medical clinics advertise on Facebook and Instagram?', a: 'Yes, within Meta’s policies. Some treatments have extra restrictions on targeting, images and claims. We check your services against those rules before we build anything.' },
      { q: 'Should we run Meta Ads or Google Ads?', a: 'Google Ads captures people already searching for a treatment. Meta Ads creates demand among people who are likely to want it. Many clinics run both, and we recommend the mix that fits your budget.' },
    ],
    metaTitle: 'Meta Ads for Clinics | Facebook & Instagram Ads for Healthcare | Web Frontier',
    metaDescription: 'Facebook and Instagram ads for clinics and practices: audience strategy, policy-safe creative, lead tracking and monthly reporting, managed in 30-day sprints.',
  },
  {
    slug: 'landing-pages',
    name: 'Landing Pages',
    icon: 'layout',
    short: 'Purpose-built campaign pages that turn ad clicks into booked appointments.',
    headline: 'Stop sending ad clicks to your homepage',
    intro:
      'A homepage tries to talk to everyone. A landing page talks to one patient about one treatment and asks for one action. We design fast, mobile-first pages for each campaign, with the proof, pricing cues and booking path patients need to say yes, and we test them so they get better every month.',
    startingAt: '$750',
    priceNote: 'Per landing page, one-time. Delivered within a 30-day sprint.',
    sprintNote: 'Built inside a Website or Ads Sprint, or ordered on its own.',
    pains: [
      'You pay for ad clicks that land on a generic homepage.',
      'Visitors leave without calling or booking.',
      'Every page change needs your web developer and takes weeks.',
      'Your ads and your website say different things.',
    ],
    outcomes: [
      { title: 'More bookings per click', body: 'One message, one offer and one clear next step.' },
      { title: 'Lower cost per patient', body: 'Better conversion rates mean more patients for the same ad spend.' },
      { title: 'Compliant by design', body: 'Claims, testimonials and images reviewed for your market’s rules.' },
    ],
    included: [
      'Treatment-specific page design and copy',
      'Mobile-first build that loads in under 2 seconds',
      'Booking, call and WhatsApp buttons',
      'Reviews, credentials and before-and-after proof',
      'Privacy-safe forms and conversion tracking',
      'A/B test of headline or offer',
    ],
    idealFor: ['Clinics running Google or Meta Ads', 'New treatment or service launches', 'Seasonal promotions and health packages', 'Multi-location campaigns'],
    faqs: [
      { q: 'Can the landing page live on our existing website?', a: 'Yes. We can build it inside your current site or on a fast subdomain, whichever tracks and loads best.' },
      { q: 'How many landing pages do we need?', a: 'Usually one per major treatment or campaign. We recommend starting with your highest-value service and adding more as results come in.' },
    ],
    metaTitle: 'Healthcare Landing Pages That Convert | Web Frontier',
    metaDescription: 'Fast, compliant landing pages for clinic ad campaigns, built to turn clicks into booked appointments. From $750 per page.',
  },
  {
    slug: 'conversion-rate-optimization',
    name: 'Conversion Rate Optimization',
    icon: 'chart',
    short: 'Testing and booking-path fixes that turn more of your existing visitors into patients.',
    headline: 'Get more patients from the traffic you already have',
    intro:
      'Most clinic websites lose patients between the first visit and the booking. We find where they drop off using analytics, heatmaps and session recordings, fix the friction in your forms, booking flow and calls to action, and run tests to prove what works. Every improvement lowers the cost of every other channel.',
    startingAt: '$900/mo',
    priceNote: 'Monthly CRO sprint. Month-to-month.',
    sprintNote: 'Runs as a monthly sprint alongside SEO or Ads.',
    pains: [
      'Traffic is growing but bookings aren’t.',
      'Patients start the booking form and never finish it.',
      'You redesign the site every few years and hope it works better.',
      'Nobody can say which pages make or lose you patients.',
    ],
    outcomes: [
      { title: 'Higher booking rates', body: 'Small fixes in the booking path compound into more patients every month.' },
      { title: 'Decisions based on data', body: 'Every change is tested and measured, not guessed.' },
      { title: 'Cheaper patients from every channel', body: 'SEO and ads both get more efficient when the site converts.' },
    ],
    included: [
      'Funnel and analytics audit',
      'Heatmaps and session recordings',
      'Booking form and call-to-action fixes',
      'A/B tests on key pages',
      'Page speed and mobile UX improvements',
      'Monthly test results report',
    ],
    idealFor: ['Clinics with steady traffic but low bookings', 'Practices running paid ads', 'Multi-location groups', 'Online booking and telehealth providers'],
    faqs: [
      { q: 'How much traffic do we need for CRO?', a: 'Formal A/B tests need steady traffic, but every site benefits from fixing obvious friction. For smaller clinics we focus on proven best-practice fixes first.' },
      { q: 'Will you change our whole website?', a: 'No. CRO is a series of targeted changes, each measured. If a bigger redesign makes sense, we’ll tell you and show you why.' },
    ],
    metaTitle: 'Conversion Rate Optimization for Clinics | Web Frontier',
    metaDescription: 'Turn more website visitors into booked patients with funnel audits, booking-path fixes and A/B testing in monthly 30-day sprints.',
  },
  {
    slug: 'local-services-ads',
    name: 'Local Services Ads',
    icon: 'shield',
    short: 'Show up above everyone with a Google trust badge, and pay per lead instead of per click.',
    headline: 'Show up at the very top with a Google trust badge',
    intro:
      'Local Services Ads sit above every other result with a Google Screened or Google Guaranteed badge, and you pay per lead instead of per click. They’re available for many healthcare and local service categories. We handle eligibility, verification, profile setup, budgets, lead disputes and reviews.',
    startingAt: '$500/mo',
    priceNote: 'LSA management. Lead costs are paid directly to Google.',
    sprintNote: 'Setup and verification in the first sprint, then ongoing monthly management.',
    pains: [
      'Verification has stalled, or you don’t know where to start.',
      'You’re paying for junk or out-of-area leads.',
      'Competitors show up in LSA and you don’t.',
      'Nobody disputes invalid leads, so you pay for them.',
    ],
    outcomes: [
      { title: 'Top-of-page trust', body: 'A Google trust badge above the regular ads and the map.' },
      { title: 'Pay per lead', body: 'Only pay for real enquiries in your service area.' },
      { title: 'Fewer wasted leads', body: 'We review and dispute invalid leads so you get credited.' },
    ],
    included: [
      'Eligibility check for your specialty and location',
      'Verification and licensing support',
      'Profile setup and service optimization',
      'Service area and budget configuration',
      'Lead review and dispute management',
      'Review generation to improve ranking',
      'Monthly lead and cost report',
    ],
    idealFor: ['Eligible healthcare specialties', 'Practices in the US, Canada, UK and other countries where LSA is available', 'Clinics that want pay-per-lead pricing'],
    faqs: [
      { q: 'Is my practice eligible?', a: 'Eligibility depends on your specialty and location and changes over time. We confirm whether your category is available before you pay anything.' },
      { q: 'Should we run LSA or Google Ads?', a: 'Often both. LSA captures high-intent searches with a trust badge; Google Ads covers treatments and keywords LSA doesn’t. We recommend the right mix for your budget.' },
    ],
    metaTitle: 'Local Services Ads Management for Practices | Web Frontier',
    metaDescription: 'Google Local Services Ads setup and management: eligibility, verification, profile optimization, lead disputes and reviews, so you pay less per new patient.',
  },
  {
    slug: 'website-care',
    name: 'Website Maintenance',
    icon: 'clipboard',
    short: 'Secure hosting, backups, updates and quick edits, so your site never lets patients down.',
    headline: 'A website that’s always secure and up to date',
    intro:
      'A hacked or broken website costs you patients and trust. Our care plans keep your site fast, secure and backed up, with a real person who makes your changes quickly: new providers, hours, offers and treatments.',
    startingAt: '$99/mo',
    priceNote: 'Month-to-month. Cancel anytime.',
    sprintNote: 'Ongoing monthly plan. Pairs with any sprint.',
    pains: [
      'Your site went down or got hacked without warning.',
      'Plugins and themes haven’t been updated in years.',
      'Small changes like new hours or providers take weeks.',
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
    idealFor: ['Clinic, hospital and practice websites', 'WordPress sites', 'Sites we built or inherited'],
    faqs: [
      { q: 'Can you take over a site someone else built?', a: 'Yes. We start with a health check, fix urgent issues, then move it onto a care plan.' },
      { q: 'What if our site gets hacked?', a: 'On a care plan, cleanup and restoration are included at no extra cost.' },
    ],
    metaTitle: 'Website Maintenance for Clinics & Practices | Web Frontier',
    metaDescription: 'Managed hosting, backups, security, updates and fast edits for clinic and practice websites. Care plans from $99/month, cancel anytime.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
