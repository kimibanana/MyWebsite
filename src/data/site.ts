// Every business detail the site shows lives here.
// Items marked TODO are placeholders waiting on real info.

const whatsappNumber = '639063813194';

export const site = {
  name: 'Web Frontier',
  tagline: 'Medical marketing that fills your schedule',
  experience: '10+ years',
  description:
    'Web Frontier is a medical and healthcare marketing agency in the Philippines, working with clinics, hospitals and practices worldwide. We bring in more patients with medical SEO, websites and Google Ads, delivered in fixed-price 30-day sprints.',
  url: 'https://webfrontierco.netlify.app', // TODO: custom domain
  email: 'info@webfrontier.co',
  founder: {
    name: 'Kimberly Anne Lamsen',
    initials: 'KL',
    role: 'Founder & Senior SEO Strategist',
  },
  whatsappDisplay: '+63 906 381 3194',
  whatsapp: `https://wa.me/${whatsappNumber}`,
  phoneHref: `tel:+${whatsappNumber}`,
  bookingUrl: '/contact', // TODO: Calendly or Google Calendar booking link
  hours: 'Mon–Fri, Philippine time, with calls in your time zone',
  // Home market first, then the international markets we serve.
  markets: ['Philippines', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore', 'United Arab Emirates', 'New Zealand'],
  marketCodes: ['PH', 'US', 'GB', 'CA', 'AU', 'SG', 'AE', 'NZ'],
  phCities: ['Metro Manila', 'Laguna', 'Cavite', 'Batangas', 'Pampanga', 'Cebu', 'Davao', 'Iloilo', 'Bacolod', 'Cagayan de Oro'],
  founded: '2024', // TODO
  // TODO: accounts not created yet. These handles are placeholders; update
  // each URL once the profile exists, then set socialLive to true so the
  // profiles are also listed in search-engine structured data.
  socialLive: false,
  social: [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/webfrontierco' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/webfrontierco' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/webfrontierco' },
    { name: 'X', icon: 'x', url: 'https://x.com/webfrontierco' },
    { name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@webfrontierco' },
    { name: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@webfrontierco' },
  ],
  // Google Map on the contact page. TODO: confirm the exact address to show.
  map: {
    query: 'Laguna, Philippines',
    label: 'Laguna, Philippines',
  },
  annualDiscount: 0.15,
  // Form handling. Works out of the box on Netlify. For other hosts, set a
  // Formspree (or similar) endpoint here and it will be used instead.
  formEndpoint: '', // e.g. 'https://formspree.io/f/xxxxxxx'
  // Stats are hidden until real numbers are filled in.
  stats: [
    { value: '', label: 'New patients generated' }, // TODO
    { value: '', label: 'Keywords ranked on page 1' }, // TODO
    { value: '', label: 'Average client rating' }, // TODO
  ],
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Specialties', href: '/who-we-serve' },
  { label: 'Results', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];
