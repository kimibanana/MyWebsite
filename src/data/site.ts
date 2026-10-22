// Every business detail the site shows lives here.
// Items marked TODO are placeholders waiting on real info.

export const site = {
  name: 'Kimi Web Solutions',
  shortName: 'Kimi',
  tagline: 'SEO & websites that bring in customers',
  description:
    'Kimi Web Solutions builds fast, conversion-focused websites and runs SEO that gets Philippine businesses found on Google. Transparent pricing, monthly reports, no lock-in contracts.',
  url: 'https://kimiwebsolutions.com', // TODO: real domain
  email: 'hello@kimiwebsolutions.com', // TODO
  phone: '+63 900 000 0000', // TODO
  phoneHref: 'tel:+639000000000', // TODO
  viber: 'viber://chat?number=%2B639000000000', // TODO
  whatsapp: 'https://wa.me/639000000000', // TODO
  messenger: 'https://m.me/kimiwebsolutions', // TODO
  hours: 'Mon–Fri, 9:00 AM – 6:00 PM (PHT)', // TODO
  address: {
    locality: 'Laguna', // TODO: city
    region: 'Calabarzon',
    country: 'PH',
    countryName: 'Philippines',
  },
  areaServed: ['Philippines', 'Worldwide (remote)'],
  founded: '2024', // TODO
  social: {
    facebook: 'https://facebook.com/kimiwebsolutions', // TODO
    linkedin: 'https://linkedin.com/company/kimiwebsolutions', // TODO
    instagram: '', // TODO (optional)
  },
  // Form handling. Works out of the box on Netlify. For other hosts, set a
  // Formspree (or similar) endpoint here and it will be used instead.
  formEndpoint: '', // e.g. 'https://formspree.io/f/xxxxxxx'
  // Stats are hidden until real numbers are filled in (see Stats component).
  stats: [
    { value: '', label: 'Websites launched' }, // TODO
    { value: '', label: 'Keywords on page 1' }, // TODO
    { value: '', label: 'Average client rating' }, // TODO
  ],
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Our Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
