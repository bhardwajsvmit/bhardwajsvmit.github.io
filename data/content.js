export const email = 'bhardwajsvmit@gmail.com';
export const phone = '+919654901601';
export const phoneDisplay = '+91 96549 01601';

export const socialMedia = [
  { name: 'GitHub', url: 'https://github.com/bhardwajsvmit' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/bhardwajsvmit/' },
];

export const navLinks = [
  { name: 'Work', url: '#work' },
  { name: 'Impact', url: '#impact' },
  { name: 'Experience', url: '#timeline' },
  { name: 'About', url: '#about' },
];

export const stats = [
  { value: 2, suffix: 'M', label: 'Weekly active users\nscaled from 300K' },
  { value: 98, prefix: '~', suffix: '%', label: 'Drop-off cut\nat game launch' },
  { value: 200, prefix: '$', suffix: 'K', label: 'Hackathon 1st prize\nglobal · UI/UX' },
  { value: 6, label: 'Engineers led\nacross 4 teams' },
];

export const srConfig = (delay = 200) => ({
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

export const hero = {
  eyebrow: 'Senior Frontend Engineer — New Delhi, IN',
  nameLine1: 'Sumit',
  nameLine2: 'Bhardwaj',
  buttonText: 'See the work',
  stats: ['5+ yrs shipping', 'React · Next.js · TypeScript', '1st prize · $200K hackathon'],
  html:
    "I take products from <mark>0&rarr;1</mark> — and from 300K to 2M weekly users. Frontend that holds up under real load: performance, SSR/SEO, design systems, security.",
};

export const about = {
  skillGroups: [
    { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'MUI', 'Framer Motion'] },
    { label: 'Performance', items: ['SSR', 'SSG', 'PWA', 'Virtualization', 'Core Web Vitals', 'Micro-FE'] },
    { label: 'Data / State', items: ['TanStack Query', 'Redux', 'Zustand', 'GraphQL', 'REST'] },
    {
      label: 'Security / More',
      items: ['CSP', 'Hardened headers', 'Sentry', 'React Native', 'Node.js'],
    },
  ],
  html:
    "<p>I've shipped full products end-to-end as the only frontend engineer, and guided teams of up to six through migrations and re-architectures. What stays constant: an obsession with performance, accessibility, and interfaces that feel effortless under real load.</p>\n<p>Based in New Delhi — open to senior frontend roles at high-growth product companies where performance, scale, and UX are core.</p>",
};

export const jobs = [
  {
    title: 'Senior Frontend Engineer',
    company: 'RareBetSports',
    range: 'Sep 2024 — Now',
    html:
      '<p>Sole frontend engineer shipping a high-traffic fantasy-sports product end-to-end: onboarding, validation layer, nonce-based CSP middleware, virtualised leaderboards, and Framer Motion polish recognised with a $200K hackathon win.</p>',
  },
  {
    title: 'Full Stack Developer',
    company: 'Parcel Inc.',
    range: 'Sep 2023 — Sep 2024',
    html:
      '<p>Fintech payroll &amp; treasury platform. Co-built a 0→1 fiat off-ramp, real-time multi-channel notifications, GraphQL-backed virtualised ledgers, and Sentry instrumentation across the stack.</p>',
  },
  {
    title: 'SDE II, Frontend',
    company: 'Jio Platforms',
    range: 'Jan 2023 — Sep 2023',
    html:
      '<p>Led 6 engineers through a React→Next.js migration; scaled 300K→2M WAU, cut launch drop-off ~98%, and shipped PWA + Core Web Vitals improvements across a cloud-gaming platform.</p>',
  },
  {
    title: 'SDE I',
    company: 'MyClassroom',
    range: 'Feb 2021 — Jan 2023',
    html:
      '<p>First mobile engineer — built the React Native student app from zero, scaled to 20,000+ DAU across mobile and web, integrated Zoom SDK, MathJax/LaTeX, Mathpix OCR, and Razorpay/Paytm. Mentored a team of 3.</p>',
  },
];

export const featured = [
  {
    title: 'RareBetSports',
    year: '2024 →',
    tech: ['Solo architect', 'CSP middleware', 'React Virtuoso', 'Canvas API'],
    html:
      '<p>Sole frontend engineer on a high-traffic consumer fantasy-sports platform — owned architecture, roadmap and production lifecycle. Frictionless multi-method onboarding, a pre-submission validation layer that cut failed transactions, and a production-grade Next.js middleware security stack.</p>',
  },
  {
    title: 'Fintech Fiat Off-Ramp',
    year: '2023–24',
    tech: ['0 → 1 product', 'GraphQL', 'Event-driven', 'Sentry'],
    html:
      '<p>Co-built a balance-to-bank off-ramp from scratch on a payroll &amp; treasury platform, growing into full-stack ownership across event-driven notifications (Email/Telegram/Slack), GraphQL-backed virtualised bookkeeping tables, and Sentry observability that cut mean-time-to-debug.</p>',
  },
  {
    title: 'Jio Cloud Gaming',
    year: '2023',
    tech: ['Led 6 engineers', '300K → 2M', 'Next.js SSR', 'PWA'],
    html:
      '<p>Led a team of 6 through a full React → Next.js migration with a modular monolithic SSR architecture. Grew the platform from ~300K to 2M weekly active users in under 9 months, cut launch drop-off ~98% via Sentry-driven crash resolution, and shipped PWA + Core Web Vitals wins.</p>',
  },
];

export const contact = {
  title: "Let's build<br>something sharp.",
  buttonText: 'email me',
};
