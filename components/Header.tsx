'use client';

import { navLinks } from '@/data/content';

const Header = () => (
  <header className="sticky top-0 z-[60] flex items-center gap-[18px] border-b-2 border-ink bg-cream px-[34px] py-4 max-phablet:px-5 max-phablet:py-3.5">
    <span className="font-mono text-[15px] font-bold tracking-[0.02em] [&_span]:text-accent">
      SUMIT.B<span>✦</span>
    </span>
    <nav className="ml-auto flex gap-[26px] font-mono text-[12.5px] font-medium tracking-[0.02em] uppercase max-thone:hidden">
      {navLinks.map(({ name, url }, i) => (
        <a
          key={i}
          href={url}
          className="bg-[linear-gradient(#FF4D23,#FF4D23)] bg-left-bottom bg-no-repeat bg-[length:0_2px] pb-[3px] text-inherit no-underline [transition:color_0.2s_ease,background-size_0.28s_cubic-bezier(0.2,0.7,0.2,1)] hover:bg-[length:100%_2px] hover:text-accent">
          {name}
        </a>
      ))}
    </nav>
    <span className="inline-flex items-center gap-2 rounded-full bg-ink px-[13px] py-[7px] font-mono text-[11.5px] font-semibold tracking-[0.06em] text-cream uppercase max-thone:ml-auto">
      <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" />
      Open to work
    </span>
  </header>
);

export default Header;
