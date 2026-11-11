export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  /** Short year label for the home page row. */
  year: string;
  /** One line: what the product is and what was owned. */
  tagline: string;
  /** Headline result, shown as a chip on the home page and large on the case study. */
  metric: string;
  metricLabel: string;
  /** Short pills for the home page row. */
  tags: readonly string[];
  problem: string;
  approach: string;
  /** Strings are numbered items. A `{ heading }` entry starts a labelled group. */
  built: readonly (string | { readonly heading: string })[];
  outcome: string;
  tech: readonly string[];
}

const studies = [
  {
    slug: 'rarebetsports',
    title: 'RareBetSports',
    company: 'RareBetSports',
    role: 'Senior Frontend Engineer',
    period: 'Sep 2024 — Now',
    year: '2024 →',
    tagline: 'A high-traffic fantasy-sports platform, owned end to end as the only frontend engineer.',
    metric: '1st prize',
    metricLabel: '$200K global hackathon · UI/UX',
    tags: ['Solo architect', 'CSP middleware', 'React Virtuoso', 'Canvas API'],
    problem:
      'A consumer fantasy-sports product moves real money at high traffic, and it had one frontend engineer. Sign-up had to be quick on any login method, entries that were going to fail had to be caught before they were submitted, and the app had to be hard to attack. All of that had to hold while features kept shipping.',
    approach:
      'I own the frontend architecture, the roadmap and the production lifecycle. I treat correctness and security as frontend work: check an entry before it is submitted instead of explaining a failure afterwards, and enforce security in Next.js middleware instead of leaving it to each page. Long lists are virtualised so the app stays fast as the data grows.',
    built: [
      'Multi-method onboarding that gets a new user from landing to playing with little friction',
      'A pre-submission validation layer that catches bad entries before they become failed transactions',
      'A Next.js middleware security stack with nonce-based CSP and hardened headers',
      'Virtualised leaderboards with React Virtuoso',
      'Interaction and motion polish with Framer Motion',
    ],
    outcome:
      'The validation layer cut failed transactions, and the product runs on a production-grade security stack. The interface work won 1st prize for UI/UX at a $200K global hackathon.',
    tech: ['Next.js', 'React', 'TypeScript', 'React Virtuoso', 'Framer Motion', 'Canvas API', 'CSP'],
  },
  {
    slug: 'jio-cloud-gaming',
    title: 'Jio Cloud Gaming',
    company: 'Jio Platforms',
    role: 'SDE II, Frontend',
    period: 'Jan 2023 — Sep 2023',
    year: '2023',
    tagline: 'A cloud-gaming platform, migrated from React to Next.js by a team of six that I led.',
    metric: '300K → 2M',
    metricLabel: 'Weekly active users in under 9 months',
    tags: ['Led 6 engineers', '~98% drop-off cut', 'Next.js SSR', 'PWA'],
    problem:
      'The platform was a React app that needed to grow to a much larger audience. It was also losing players at the worst moment: crashes at game launch meant many of them never reached the game.',
    approach:
      'I led six engineers through a full React → Next.js migration onto a modular monolithic SSR architecture. For the launch drop-off, we used Sentry crash data to find and fix the crashes behind it. PWA support and Core Web Vitals work ran alongside the migration.',
    built: [
      'A full React → Next.js migration, delivered with a team of six',
      'A modular monolithic SSR architecture',
      'Sentry-driven crash resolution for the game-launch flow',
      'PWA support',
      'Core Web Vitals improvements across the platform',
    ],
    outcome:
      'Weekly active users grew from about 300K to 2M in under 9 months, and drop-off at game launch fell by about 98%.',
    tech: ['Next.js', 'React', 'SSR', 'PWA', 'Sentry', 'Core Web Vitals'],
  },
  {
    slug: 'parcel',
    title: 'Parcel',
    company: 'Parcel Inc.',
    role: 'Full Stack Developer',
    period: 'Sep 2023 — Sep 2024',
    year: '2023–24',
    tagline: 'A Web3 payroll and treasury platform. I worked on the core product and co-built its fiat off-ramp from zero.',
    metric: '2 products',
    metricLabel: 'Core treasury app and a 0 → 1 fiat off-ramp',
    tags: ['Web3', '0 → 1 off-ramp', 'GraphQL', 'Event-driven'],
    problem:
      'Parcel is a Web3 payroll and treasury platform: teams pay people and manage funds on-chain, behind multi-signature approvals. Finance teams trust it with real money, so they need to know what happened to every payment, and ledgers have to stay usable as they grow long. Funds held on the platform also still have to reach a bank account, and there was no path from balance to bank.',
    approach:
      'I worked across both products. On the off-ramp, I co-built the balance-to-bank flow from scratch. On the core product, I owned features full-stack. Notifications are event-driven, so each team hears about a payment in the channel it already uses. The bookkeeping tables are virtualised, so long ledgers stay fast. Sentry went in across the stack so a failed payment can be traced quickly.',
    built: [
      { heading: 'Fiat off-ramp' },
      'A balance-to-bank off-ramp for on-chain funds, co-built from zero to production',
      { heading: 'Core payroll and treasury product' },
      'Event-driven notifications over Email, Telegram and Slack',
      'GraphQL-backed virtualised bookkeeping tables',
      'Sentry instrumentation across the stack',
    ],
    outcome:
      'The off-ramp went from nothing to production, which gave teams a path from balance to bank. On the core product, teams hear about payments in their own channels, and Sentry observability cut the mean time to debug an issue.',
    tech: ['Web3', 'GraphQL', 'Event-driven architecture', 'Virtualised tables', 'Sentry'],
  },
  {
    slug: 'myclassroom',
    title: 'MyClassroom',
    company: 'MyClassroom',
    role: 'SDE I',
    period: 'Feb 2021 — Jan 2023',
    year: '2021–23',
    tagline: 'An ed-tech student app, built from zero as the first mobile engineer.',
    metric: '20K+',
    metricLabel: 'Daily active users across mobile and web',
    tags: ['First mobile engineer', 'React Native', 'Live classes', 'Mentored 3'],
    problem:
      'MyClassroom needed a student app and had no mobile engineer. The app had to cover the whole school day: live classes, online exams, maths content and fee payments.',
    approach:
      'I built the React Native app from zero as the first mobile engineer. Where a proven SDK existed for video, payments or OCR, I integrated it instead of building it, which kept the effort on the student experience. I also mentored a team of three.',
    built: [
      'The React Native student app, shipped to Google Play with regular updates',
      'Live classes on the Zoom SDK',
      'An online exam system',
      'MathJax/LaTeX rendering and Mathpix OCR for maths content',
      'Payments through Razorpay and Paytm',
      'A CRM web app with role-based protected routes',
    ],
    outcome:
      'The product grew from zero to more than 20,000 daily active users across mobile and web.',
    tech: ['React Native', 'React', 'Redux', 'Zoom SDK', 'MathJax', 'Mathpix', 'Razorpay', 'Paytm'],
  },
] as const satisfies readonly CaseStudy[];

/** Every slug that has a page. Anything that links to a case study is typed with this, so a wrong slug fails the build. */
export type CaseStudySlug = (typeof studies)[number]['slug'];

export const caseStudies: readonly CaseStudy[] = studies;

/** For the route, where the slug is whatever is in the URL. */
export const getCaseStudy = (slug: string): CaseStudy | undefined => caseStudies.find(c => c.slug === slug);

/** For links inside the site, where the slug is known to exist. */
export const caseStudy = (slug: CaseStudySlug): CaseStudy => caseStudies.find(c => c.slug === slug)!;
