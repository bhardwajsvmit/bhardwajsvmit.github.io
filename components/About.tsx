'use client';

import { useEffect, useRef } from 'react';
import { getSr } from '@/lib/sr';
import { srConfig, about } from '@/data/content';

const About = () => {
  const { skillGroups, quickFacts, principles, html } = about;
  const revealContainer = useRef<HTMLDivElement | null>(null);
  const revealPrinciples = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sr = getSr();
    sr && sr.reveal(revealContainer.current!, srConfig());
    sr && sr.reveal(revealPrinciples.current!, srConfig());
  }, []);

  return (
    <section id="about" className="bg-cream px-[34px] py-24 max-thone:px-5 max-thone:py-14">
      <div
        ref={revealContainer}
        className="mx-auto grid max-w-[1500px] grid-cols-[1.1fr_0.9fr] items-start gap-[60px] max-tablet:grid-cols-1">
        <div>
          <div className="mb-3.5 font-mono text-[13px] tracking-[0.16em] text-accent uppercase">{'{ 04 — ABOUT }'}</div>
          <h2 className="m-0 text-[clamp(30px,4vw,58px)] leading-[0.98] font-extrabold tracking-[-0.03em] text-ink [&_mark]:bg-transparent [&_mark]:text-accent">
            Solo architect <mark>&amp;</mark> team lead.
          </h2>
          <div
            className="[&_p]:mt-[26px] [&_p]:max-w-[600px] [&_p]:text-[17px] [&_p]:font-medium [&_p]:leading-[1.6] [&_p]:text-[#1c1b18]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <dl className="m-0 mt-10 grid max-w-[600px] grid-cols-2 border-t-2 border-ink max-phablet:grid-cols-1">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="border-b-2 border-ink py-3.5 pr-4">
                <dt className="font-mono text-[11px] tracking-[0.14em] text-[#6b685f] uppercase">{label}</dt>
                <dd className="m-0 mt-1 text-[16px] font-bold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col border-2 border-b-0 border-ink">
          {skillGroups &&
            skillGroups.map((group, i) => (
              <div
                key={i}
                className="skill grid grid-cols-[44px_1fr] gap-4 border-b-2 border-ink px-[22px] py-5 [transition:background_0.24s_ease,color_0.24s_ease] hover:bg-ink hover:text-cream">
                <div className="font-mono text-[15px] font-bold text-accent">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="text-[17px] font-bold">{group.label}</div>
                  <div className="mt-1.5 font-mono text-xs opacity-75">{group.items.join(' · ')}</div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div ref={revealPrinciples} className="mx-auto mt-24 max-w-[1500px] max-thone:mt-14">
        <div className="mb-3.5 font-mono text-[13px] tracking-[0.16em] text-accent uppercase">{'{ HOW I WORK }'}</div>
        <div className="grid grid-cols-3 border-t-2 border-ink max-tablet:grid-cols-1">
          {principles.map(({ title, text }, i) => (
            <div
              key={title}
              className="border-b-2 border-ink py-7 pr-8 not-last:border-r-2 not-first:pl-8 max-tablet:border-r-0! max-tablet:px-0!">
              <div className="font-mono text-[15px] font-bold text-accent">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="m-0 mt-3 text-[clamp(22px,2.2vw,30px)] leading-[1.05] font-extrabold tracking-[-0.02em] text-ink">
                {title}
              </h3>
              <p className="m-0 mt-3 text-[15.5px] font-medium leading-[1.6] text-[#1c1b18]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
