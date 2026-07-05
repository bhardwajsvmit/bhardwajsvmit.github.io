module.exports = {
  siteTitle: 'Sumit Bhardwaj | Senior Frontend Engineer',
  siteDescription:
    'Sumit Bhardwaj is a Senior Frontend Engineer who takes products from 0→1 and scales them to millions of users — performance, SSR/SEO, design systems, and security.',
  siteKeywords:
    'Sumit Bhardwaj, Sumit, Bhardwaj, bhardwajsvmit, senior frontend engineer, software engineer, react developer, next.js developer, react native developer, new delhi',
  siteUrl: 'https://bhardwajsvmit.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sumit Bhardwaj',
  location: 'New Delhi, IN',
  email: 'bhardwajsvmit@gmail.com',
  phone: '+919654901601',
  phoneDisplay: '+91 96549 01601',
  github: 'https://github.com/bhardwajsvmit',
  twitterHandle: '@sumitbhardwaj_',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/bhardwajsvmit',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bhardwajsvmit/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bhardwajsvmit',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sumitbhardwaj_',
    },
  ],

  navLinks: [
    {
      name: 'Work',
      url: '/#work',
    },
    {
      name: 'Impact',
      url: '/#impact',
    },
    {
      name: 'Experience',
      url: '/#timeline',
    },
    {
      name: 'About',
      url: '/#about',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  stats: [
    { value: 2, suffix: 'M', label: 'Weekly active users\nscaled from 300K' },
    { value: 98, prefix: '~', suffix: '%', label: 'Drop-off cut\nat game launch' },
    { value: 200, prefix: '$', suffix: 'K', label: 'Hackathon 1st prize\nglobal · UI/UX' },
    { value: 6, label: 'Engineers led\nacross 4 teams' },
  ],

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
