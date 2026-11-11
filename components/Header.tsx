'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/data/content';
import { useClockRef } from '@/lib/useClock';

const Header = () => {
  const clockRef = useClockRef<HTMLSpanElement>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-[60] border-b-2 border-ink bg-cream">
      <div className="flex items-center gap-[18px] px-[34px] py-4 max-phablet:gap-3 max-phablet:px-5 max-phablet:py-3.5">
        <Link
          href="/"
          aria-label="Sumit Bhardwaj, home"
          className="font-mono text-[15px] font-bold tracking-[0.02em] text-inherit no-underline [&_span]:text-accent-deep">
          SUMIT.B<span>✦</span>
        </Link>
        <nav
          aria-label="Sections"
          className="ml-auto flex gap-[26px] font-mono text-[12.5px] font-medium tracking-[0.02em] uppercase max-thone:hidden">
          {navLinks.map(({ name, url }, i) => (
            <Link
              key={i}
              href={url}
              className="bg-[linear-gradient(#FF4D23,#FF4D23)] bg-left-bottom bg-no-repeat bg-[length:0_2px] pb-[3px] text-inherit no-underline [transition:color_0.2s_ease,background-size_0.28s_cubic-bezier(0.2,0.7,0.2,1)] hover:bg-[length:100%_2px] hover:text-accent-deep">
              <span className="mr-[5px] text-accent-deep">{String(i + 1).padStart(2, '0')}</span>
              {name}
            </Link>
          ))}
        </nav>
        <span className="font-mono text-[11.5px] font-medium tracking-[0.06em] text-[#6b685f] uppercase max-thone:hidden">
          New Delhi — <span ref={clockRef}>--:--</span> IST
        </span>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-[13px] py-[7px] font-mono text-[11.5px] font-semibold tracking-[0.06em] text-cream uppercase no-underline [transition:color_0.2s_ease] hover:text-accent max-thone:ml-auto">
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" />
          Open to work
        </a>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(o => !o)}
          className="hidden h-[34px] w-[34px] flex-none cursor-pointer flex-col items-center justify-center gap-[6px] border-2 border-ink bg-transparent p-0 max-thone:flex">
          <span
            className={`block h-0.5 w-4 bg-ink [transition:transform_0.24s_cubic-bezier(0.2,0.7,0.2,1)] ${open ? '[transform:translateY(4px)_rotate(45deg)]' : ''}`}
          />
          <span
            className={`block h-0.5 w-4 bg-ink [transition:transform_0.24s_cubic-bezier(0.2,0.7,0.2,1)] ${open ? '[transform:translateY(-4px)_rotate(-45deg)]' : ''}`}
          />
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Sections" className="hidden border-t-2 border-ink max-thone:block">
          {navLinks.map(({ name, url }, i) => (
            <Link
              key={i}
              href={url}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 border-b-2 border-ink px-5 py-4 text-[22px] font-extrabold tracking-[-0.02em] text-ink no-underline last:border-b-0 active:bg-ink active:text-cream">
              <span className="font-mono text-[13px] font-bold tracking-normal text-accent-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
