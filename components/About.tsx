'use client';

import { useEffect, useRef } from 'react';
import { getSr } from '@/lib/sr';
import { srConfig, about } from '@/data/content';

const About = () => {
  const { skillGroups, html } = about;
  const revealContainer = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sr = getSr();
    sr && sr.reveal(revealContainer.current!, srConfig());
  }, []);

  return (
    <section id="about" ref={revealContainer} className="bg-cream px-[34px] py-24 max-thone:px-5 max-thone:py-14">
      <div className="mx-auto grid max-w-[1500px] grid-cols-[1.1fr_0.9fr] items-start gap-[60px] max-tablet:grid-cols-1">
        <div>
          <div className="mb-3.5 font-mono text-[13px] tracking-[0.16em] text-accent uppercase">[ 04 ] About</div>
          <h2 className="m-0 text-[clamp(30px,4vw,58px)] leading-[0.98] font-extrabold tracking-[-0.03em] text-ink [&_mark]:bg-transparent [&_mark]:text-accent">
            Solo architect <mark>&amp;</mark> team lead.
          </h2>
          <div
            className="[&_p]:mt-[26px] [&_p]:max-w-[600px] [&_p]:text-[17px] [&_p]:font-medium [&_p]:leading-[1.6] [&_p]:text-[#1c1b18]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="flex flex-col border-2 border-ink">
          {skillGroups &&
            skillGroups.map((group, i) => (
              <div
                key={i}
                className="skill border-b-2 border-ink px-[22px] py-5 [transition:background_0.24s_ease,color_0.24s_ease] last:border-b-0 hover:bg-ink hover:text-cream">
                <div className="font-mono text-[11px] tracking-[0.1em] text-accent uppercase">{group.label}</div>
                <div className="mt-2 text-[15px] font-semibold">{group.items.join(' · ')}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
