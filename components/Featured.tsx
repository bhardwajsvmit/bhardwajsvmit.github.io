'use client';

import { useEffect, useRef } from 'react';
import { getSr } from '@/lib/sr';
import { srConfig, featured } from '@/data/content';

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
        <div className="mb-3.5 font-mono text-[13px] tracking-[0.16em] text-accent uppercase">[ 02 ] Selected work</div>
        <h2
          ref={revealTitle}
          className="m-0 mb-[50px] text-[clamp(34px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.03em] text-ink">
          Things I&rsquo;ve built &amp; owned.
        </h2>
        <div className="border-t-2 border-ink">
          {featured.map((item, i) => {
            const { title, year, tech, html } = item;
            return (
              <article
                key={i}
                ref={el => addReveal(i, el)}
                data-work
                className="group relative grid cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-[30px] border-b-2 border-ink px-2 py-9 max-thone:grid-cols-[auto_1fr] max-thone:gap-x-4 max-thone:gap-y-3 max-thone:py-7 [transition:background_0.3s_cubic-bezier(0.2,0.7,0.2,1),color_0.3s_cubic-bezier(0.2,0.7,0.2,1),padding_0.3s_cubic-bezier(0.2,0.7,0.2,1)] hover:bg-ink hover:px-6 hover:text-cream">
                <div className="font-mono text-[15px] font-bold text-accent">{String(i + 1).padStart(2, '0')}</div>
                <div className="min-w-0 max-thone:col-span-2">
                  <h3 className="m-0 text-[clamp(30px,4.2vw,60px)] leading-[0.95] font-extrabold tracking-[-0.03em] text-inherit [transition:transform_0.34s_cubic-bezier(0.2,0.7,0.2,1)] group-hover:[transform:translateX(12px)]">
                    {title}
                  </h3>
                  <div
                    className="mt-3.5 max-w-[680px] text-[15.5px] font-medium leading-[1.6]"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  {tech && (
                    <div className="mt-[18px] flex flex-wrap gap-2 font-mono text-[11.5px] tracking-[0.04em] uppercase">
                      {tech.map((t, j) => (
                        <span key={j} className="rounded-full border-[1.5px] border-current px-[11px] py-[5px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="font-mono text-xs whitespace-nowrap text-right max-thone:col-start-2 max-thone:row-start-1">
                  {year}
                  <div className="mt-2 inline-block text-[26px] [transition:transform_0.3s_cubic-bezier(0.3,1.4,0.4,1),color_0.3s_ease] group-hover:text-accent group-hover:[transform:translate(7px,-7px)]">
                    ↗
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
