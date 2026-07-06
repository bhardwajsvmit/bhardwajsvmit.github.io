'use client';

import { useEffect, useRef } from 'react';
import { getSr } from '@/lib/sr';
import { srConfig, jobs } from '@/data/content';

const Jobs = () => {
  const revealTitle = useRef<HTMLHeadingElement | null>(null);
  const revealMap = useRef(new Map<number, HTMLElement>());
  const addReveal = (key: number, el: HTMLElement | null) => {
    if (el) revealMap.current.set(key, el);
    else revealMap.current.delete(key);
  };

  useEffect(() => {
    const sr = getSr();
    sr && sr.reveal(revealTitle.current!, srConfig());
    Array.from(revealMap.current.values()).forEach((el, i) => sr && sr.reveal(el, srConfig(i * 80)));
  }, []);

  return (
    <section id="timeline" className="bg-ink px-[34px] py-24 max-thone:px-5 max-thone:py-14 text-cream">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-3.5 font-mono text-[13px] tracking-[0.16em] text-accent uppercase">[ 03 ] Experience</div>
        <h2
          ref={revealTitle}
          className="m-0 mb-[50px] text-[clamp(34px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.03em] text-cream">
          Five years, four teams.
        </h2>
        <div className="border-t-2 border-rule">
          {jobs.map((item, i) => {
            const { title, company, range, html } = item;
            return (
              <div
                key={i}
                ref={el => addReveal(i, el)}
                data-row
                className="grid grid-cols-[200px_1fr] gap-6 border-b-2 border-rule px-[10px] py-[26px] [transition:background_0.26s_cubic-bezier(0.2,0.7,0.2,1),color_0.26s_cubic-bezier(0.2,0.7,0.2,1),padding-left_0.26s_cubic-bezier(0.2,0.7,0.2,1)] max-thone:grid-cols-1 hover:bg-accent hover:pl-[22px] hover:text-ink">
                <div className="font-mono text-[12.5px] tracking-[0.03em]">{range.toUpperCase()}</div>
                <div>
                  <div className="text-[clamp(20px,2.2vw,28px)] font-bold tracking-[-0.01em]">
                    {title} <span className="font-normal opacity-60">— {company}</span>
                  </div>
                  <div
                    className="mt-2 max-w-[820px] text-[14.5px] font-medium leading-[1.55] opacity-[0.82]"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
