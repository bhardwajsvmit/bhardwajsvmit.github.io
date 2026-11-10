'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { getSr } from '@/lib/sr';
import { srConfig, stats, type Stat as StatData } from '@/data/content';

const Stat = ({ value, prefix, suffix, label, source, delay }: StatData & { delay: number }) => {
  const numRef = useRef<HTMLSpanElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const sr = getSr();
    sr && sr.reveal(revealRef.current!, srConfig(delay));
  }, [delay]);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || doneRef.current) return;
          doneRef.current = true;
          const dur = 1700;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(value * eased) + (p > 0.05 ? suffix || '' : '');
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = value + (suffix || '');
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <div
      ref={revealRef}
      className="min-w-0 border-r-2 border-b-2 border-cream border-rule px-[26px] pt-[34px] pb-[30px] max-thone:px-3.5 max-thone:pt-6 max-thone:pb-5 [&:nth-child(4n)]:border-r-0 max-tablet:[&:nth-child(2n)]:border-r-0">
      <div className="text-[clamp(48px,6vw,90px)] max-thone:text-[clamp(28px,9.5vw,44px)] leading-none font-extrabold tracking-[-0.04em] text-accent">
        {prefix}
        <span ref={numRef}>0</span>
      </div>
      <div className="mt-3.5 font-mono text-[12.5px] leading-[1.6] tracking-[0.04em] text-[#a7a499] uppercase">
        {label.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {i > 0 && <br />}
            {line}
          </React.Fragment>
        ))}
      </div>
      {source && (
        <Link
          href={`/work/${source.slug}`}
          className="mt-4 inline-block bg-[linear-gradient(#FF4D23,#FF4D23)] bg-left-bottom bg-no-repeat bg-[length:0_2px] pb-0.5 font-mono text-[11.5px] font-bold tracking-[0.06em] text-cream uppercase no-underline [transition:color_0.2s_ease,background-size_0.28s_cubic-bezier(0.2,0.7,0.2,1)] hover:bg-[length:100%_2px] hover:text-accent">
          {source.name} →
        </Link>
      )}
    </div>
  );
};

const Impact = () => {
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const sr = getSr();
    sr && sr.reveal(eyebrowRef.current!, srConfig());
    sr && sr.reveal(titleRef.current!, srConfig(60));
  }, []);

  return (
    <section id="impact" className="bg-ink px-[34px] py-24 max-thone:px-5 max-thone:py-14 text-cream">
      <div className="mx-auto max-w-[1500px]">
        <div ref={eyebrowRef} className="mb-3.5 font-mono text-[13px] tracking-[0.16em] text-accent uppercase">
          {'{ 02 — BY THE NUMBERS }'}
        </div>
        <h2
          ref={titleRef}
          className="m-0 mb-14 max-w-[1100px] text-[clamp(34px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.03em] text-cream">
          Numbers from shipping at scale.
        </h2>
        <div className="grid grid-cols-4 border-t-2 border-cream max-tablet:grid-cols-2">
          {stats.map((stat, i) => (
            <Stat key={i} {...stat} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
