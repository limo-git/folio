// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'X',
    url: 'https://x.com/dimple_ew',
  },
  {
    label: 'leetcode',
    url: 'https://leetcode.com/u/limo-leet/',
  },
  {
    label: 'codeforces',
    url: 'https://codeforces.com/profile/limo-cf',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/limo-git',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dimple-yadav-149344202/',
  },
];

const resourceLinks = [
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/community/file/1328038510191576951/project-starter-template',
  },
];

const heroText =
  'A full-stack developer, making good shit since 2023, hiding bad shit since 2023.';

  const locationPlace = `28°36'50.6"N 77°13'52.0"E`;
  const locationCountry = 'India, New Delhi';
  

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'dimple-yadav/milk';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
