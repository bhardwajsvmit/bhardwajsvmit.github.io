'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { getSr } from '@/lib/sr';
import { srConfig } from '@/data/content';
import { caseStudies } from '@/data/work';

const Featured = () => {
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
    <section id="work" className="bg-cream px-[34px] py-24 max-thone:px-5 max-thone:py-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-3.5 font-mono text-[13px] tracking-[0.16em] text-accent uppercase">{'{ 01 — SELECTED WORK }'}</div>
        <h2
          ref={revealTitle}
          className="m-0 text-[clamp(34px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.03em] text-ink">
          Cool stuff I&rsquo;ve shipped.
        </h2>
        <p className="m-0 mt-5 mb-[50px] max-w-[620px] text-[17px] font-medium leading-[1.55] text-[#1c1b18]">
          Four products, each told from the problem to the result. Open one for the full case study.
        </p>
        <div className="border-t-2 border-ink">
          {caseStudies.map((item, i) => {
            const { slug, title, year, tagline, metric, metricLabel, tags } = item;
            return (
              <article key={slug} ref={el => addReveal(i, el)} className="border-b-2 border-ink">
                <Link
                  href={`/work/${slug}`}
                  data-work
                  aria-label={`${title} case study`}
                  className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-[30px] px-2 py-9 text-ink no-underline max-thone:grid-cols-[auto_1fr] max-thone:gap-x-4 max-thone:gap-y-3 max-thone:py-7 [transition:background_0.3s_cubic-bezier(0.2,0.7,0.2,1),color_0.3s_cubic-bezier(0.2,0.7,0.2,1),padding_0.3s_cubic-bezier(0.2,0.7,0.2,1)] hover:bg-ink hover:px-6 hover:text-cream focus-visible:bg-ink focus-visible:px-6 focus-visible:text-cream focus-visible:outline-none">
                  <div className="font-mono text-[15px] font-bold text-accent">{String(i + 1).padStart(2, '0')}</div>
                  <div className="min-w-0 max-thone:col-span-2">
                    <h3 className="m-0 text-[clamp(30px,4.2vw,60px)] leading-[0.95] font-extrabold tracking-[-0.03em] text-inherit [transition:transform_0.34s_cubic-bezier(0.2,0.7,0.2,1)] group-hover:[transform:translateX(12px)]">
                      {title}
                    </h3>
                    <p className="m-0 mt-3.5 max-w-[680px] text-[17px] font-medium leading-[1.5]">{tagline}</p>
                    <div className="mt-5 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                      <span className="text-[clamp(24px,2.6vw,36px)] leading-none font-extrabold tracking-[-0.03em] text-accent">
                        {metric}
                      </span>
                      <span className="font-mono text-[12px] tracking-[0.05em] uppercase opacity-80">{metricLabel}</span>
                    </div>
                    <div className="mt-[18px] flex flex-wrap gap-2 font-mono text-[11.5px] tracking-[0.04em] uppercase">
                      {tags.map(t => (
                        <span key={t} className="rounded-full border-[1.5px] border-current px-[11px] py-[5px]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 font-mono text-[12.5px] font-bold tracking-[0.08em] uppercase group-hover:text-accent">
                      Read case study{' '}
                      <span className="inline-block [transition:transform_0.3s_cubic-bezier(0.3,1.4,0.4,1)] group-hover:[transform:translateX(6px)]">
                        →
                      </span>
                    </div>
                  </div>
                  <div className="font-mono text-xs whitespace-nowrap text-right max-thone:col-start-2 max-thone:row-start-1">
                    {year}
                    <div className="mt-2 text-[26px] [transition:transform_0.3s_cubic-bezier(0.3,1.4,0.4,1),color_0.3s_ease] group-hover:text-accent group-hover:[transform:translate(7px,-7px)]">
                      ↗
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
