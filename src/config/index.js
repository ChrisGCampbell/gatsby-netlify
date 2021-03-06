module.exports = {
  siteTitle: 'Chris G Campbell | Machine Learning Engineer',
  siteDescription:
    'Chris G Campbell is a machine learning engineer and data scientist that specializes in developing exceptional, high-quality computational applications.',
  siteKeywords:
    'Chris G Campbell, Chris, Campbell, ChrisGCampbell, software engineer, machine learning, data scientist, Georgia Tech',
  siteUrl: 'https://chriscampbell.tech',
  siteLanguage: 'en_US',


  name: 'Chris G Campbell',
  location: 'Remote',
  email: 'chriscampbell.tech',
  github: 'https://github.com/ChrisGCampbell',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/ChrisGCampbell/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ChrisGCampbell',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@ChrisGCampbell',


  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

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
