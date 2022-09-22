module.exports = {
  siteTitle: 'Sumit Bhardwaj | Software Development Engineer',
  siteDescription:
    'Sumit Bhardwaj is a Software Development Engineer at myclassroom, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Sumit Bhardwaj, Sumit, Bhardwaj, bhardwajsvmit, software developer, software development engineer, software engineer, web developer, react developer, react native developer, delhi',
  siteUrl: 'https://bhardwajsvmit.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sumit Bhardwaj',
  location: 'Delhi, India',
  email: 'bhardwajsvmit@gmail.com',
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
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

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
