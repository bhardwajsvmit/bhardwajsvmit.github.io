export interface SocialLink {
  name: string;
  url: string;
}

export interface NavLink {
  name: string;
  url: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Case study this number comes from. */
  source?: { name: string; slug: string };
}

export interface SrConfig {
  origin: string;
  distance: string;
  duration: number;
  delay: number;
  rotate: { x: number; y: number; z: number };
  opacity: number;
  scale: number;
  easing: string;
  mobile: boolean;
  reset: boolean;
  useDelay: string;
  viewFactor: number;
  viewOffset: { top: number; right: number; bottom: number; left: number };
}

export interface Hero {
  eyebrow: string;
  nameLine1: string;
  nameLine2: string;
  buttonText: string;
  stats: string[];
  html: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Principle {
  title: string;
  text: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface About {
  skillGroups: SkillGroup[];
  quickFacts: QuickFact[];
  principles: Principle[];
  html: string;
}

export interface Job {
  title: string;
  company: string;
  yearFrom: string;
  yearTo: string;
  html: string;
  /** Case study that tells this role's full story. */
  slug: string;
}

export interface Contact {
  title: string;
}

export const email = 'bhardwajsvmit@gmail.com';
export const phone = '+919654901601';
export const phoneDisplay = '+91 96549 01601';

export const socialMedia: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/bhardwajsvmit' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/bhardwajsvmit/' },
  { name: 'Telegram', url: 'https://t.me/bhardwajsumit' },
];

export const navLinks: NavLink[] = [
  { name: 'Work', url: '/#work' },
  { name: 'Impact', url: '/#impact' },
  { name: 'Experience', url: '/#timeline' },
  { name: 'About', url: '/#about' },
];

export const stats: Stat[] = [
  {
    value: 2,
    suffix: 'M',
    label: 'Weekly active users\nscaled from 300K',
    source: { name: 'Jio Cloud Gaming', slug: 'jio-cloud-gaming' },
  },
  {
    value: 98,
    prefix: '~',
    suffix: '%',
    label: 'Drop-off cut\nat game launch',
    source: { name: 'Jio Cloud Gaming', slug: 'jio-cloud-gaming' },
  },
  {
    value: 200,
    prefix: '$',
    suffix: 'K',
    label: 'Hackathon 1st prize\nglobal · UI/UX',
    source: { name: 'RareBetSports', slug: 'rarebetsports' },
  },
  { value: 6, label: 'Engineers led\nacross 4 teams' },
];

export const srConfig = (delay = 200): SrConfig => ({
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
});

export const hero: Hero = {
  eyebrow: 'Senior Frontend Engineer — New Delhi, IN',
  nameLine1: 'Sumit',
  nameLine2: 'Bhardwaj',
  buttonText: 'See the work',
  stats: ['5+ yrs shipping', 'React · Next.js · TypeScript', '1st prize · $200K hackathon'],
  html:
    'Frontend engineer who makes products <em>fast</em> — and keeps them that way. From <mark>0→1</mark> builds to 300K→2M weekly users: performance, SSR/SEO, design systems, security.',
};

export const about: About = {
  skillGroups: [
    { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'MUI', 'Framer Motion'] },
    { label: 'Performance', items: ['SSR', 'SSG', 'PWA', 'Virtualization', 'Core Web Vitals', 'Micro-FE'] },
    { label: 'Data / State', items: ['TanStack Query', 'Redux', 'Zustand', 'GraphQL', 'REST'] },
    {
      label: 'Security / More',
      items: ['CSP', 'Hardened headers', 'Sentry', 'React Native', 'Node.js'],
    },
  ],
  quickFacts: [
    { label: 'Experience', value: '5+ years' },
    { label: 'Focus', value: 'Frontend · Performance' },
    { label: 'Core stack', value: 'React · Next.js · TypeScript' },
    { label: 'Based in', value: 'New Delhi, IN' },
    { label: 'Open to', value: 'Senior frontend roles' },
    { label: 'Approach', value: '0 → 1, then scale' },
  ],
  principles: [
    {
      title: 'Own it end to end',
      text: 'Architecture, roadmap, build and production. At RareBetSports I am the only frontend engineer, so nothing is handed off half-done.',
    },
    {
      title: 'Performance is a feature',
      text: 'SSR, virtualisation, Core Web Vitals and crash data decide what ships next. That is the work behind Jio Cloud Gaming going from 300K to 2M weekly users.',
    },
    {
      title: 'Lead by shipping',
      text: 'I led six engineers through a React → Next.js migration and mentored a team of three at MyClassroom. Teams move fastest with a clear architecture and small, safe steps.',
    },
  ],
  html:
    "<p>I've shipped full products end-to-end as the only frontend engineer, and guided teams of up to six through migrations and re-architectures. What stays constant: an obsession with performance, accessibility, and interfaces that feel effortless under real load.</p>\n<p>Based in New Delhi — open to senior frontend roles at high-growth product companies where performance, scale, and UX are core.</p>",
};

export const jobs: Job[] = [
  {
    title: 'Senior Frontend Engineer',
    company: 'RareBetSports',
    slug: 'rarebetsports',
    yearFrom: '2024',
    yearTo: 'NOW',
    html:
      '<p>Sole frontend engineer shipping a fantasy-sports product end-to-end: onboarding, validation layer, nonce-based CSP middleware, virtualised leaderboards, and a $200K hackathon win.</p>',
  },
  {
    title: 'Full Stack Developer',
    company: 'Parcel Inc.',
    slug: 'parcel',
    yearFrom: '2023',
    yearTo: '2024',
    html:
      '<p>Web3 payroll &amp; treasury platform. Worked on the core product and co-built a 0→1 fiat off-ramp: real-time multi-channel notifications, GraphQL-backed virtualised ledgers, Sentry instrumentation.</p>',
  },
  {
    title: 'SDE II, Frontend',
    company: 'Jio Platforms',
    slug: 'jio-cloud-gaming',
    yearFrom: '2023',
    yearTo: '2023',
    html:
      '<p>Led 6 engineers through a React→Next.js migration; scaled 300K→2M WAU, cut launch drop-off ~98%, shipped PWA + Core Web Vitals wins on a cloud-gaming platform.</p>',
  },
  {
    title: 'SDE I',
    company: 'MyClassroom',
    slug: 'myclassroom',
    yearFrom: '2021',
    yearTo: '2023',
    html:
      '<p>First mobile engineer — built the React Native student app from zero to 20,000+ DAU, integrated Zoom SDK, MathJax/LaTeX, Mathpix OCR, Razorpay/Paytm. Mentored 3.</p>',
  },
];

export const contact: Contact = {
  title: "Let's build<br>something sharp.",
};
