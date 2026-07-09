'use client';

import React, { useEffect, useRef } from 'react';
import { getSr } from '@/lib/sr';
import { srConfig, hero } from '@/data/content';

const MARQUEE_ITEMS = [
  'React',
  'Next.js',
  'TypeScript',
  'Framer Motion',
  'TanStack Query',
  'GraphQL',
  'React Native',
  'PWA',
];

const NAME_LINE_CLASS = 'block text-[clamp(64px,13.5vw,232px)]';

const Hero = () => {
  const { eyebrow, nameLine1, nameLine2, buttonText, stats, html } = hero;
  const eyebrowText = `{ ${eyebrow} }`;

  const sectionRef = useRef<HTMLElement | null>(null);
  const blobRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const eyebrowInkRef = useRef<HTMLDivElement | null>(null);
  const name1Ref = useRef<HTMLSpanElement | null>(null);
  const name2Ref = useRef<HTMLSpanElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const revealMap = useRef(new Map<number, HTMLElement>());
  const addReveal = (key: number, el: HTMLElement | null) => {
    if (el) revealMap.current.set(key, el);
    else revealMap.current.delete(key);
  };

  useEffect(() => {
    const sr = getSr();
    Array.from(revealMap.current.values()).forEach((el, i) => sr && sr.reveal(el, srConfig(i * 100)));
  }, []);

  useEffect(() => {
    let cx = -100,
      cy = -100,
      rx = -100,
      ry = -100;
    let scale = 1,
      targetScale = 1;
    let raf: number;
    let shown = false;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (!shown && cursorRef.current) {
        cursorRef.current.style.display = 'block';
        shown = true;
      }
      const t = e.target as HTMLElement | null;
      const hit = t?.closest?.('a, [data-work], [data-row], .skill');
      targetScale = hit ? 2.1 : 1;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('mousemove', onMove);

    const loop = () => {
      rx += (cx - rx) * 0.18;
      ry += (cy - ry) * 0.18;
      scale += (targetScale - scale) * 0.14;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${rx - 15}px,${ry - 15}px) scale(${scale.toFixed(3)})`;
      }
      if (eyebrowRef.current && eyebrowInkRef.current && blobRef.current) {
        if (blobRef.current.style.opacity !== '0') {
          const er = eyebrowRef.current.getBoundingClientRect();
          const R = (blobRef.current.getBoundingClientRect().width / 2) * 0.94;
          eyebrowInkRef.current.style.clipPath = `circle(${R.toFixed(1)}px at ${(rx - er.left).toFixed(1)}px ${(ry - er.top).toFixed(1)}px)`;
        } else {
          eyebrowInkRef.current.style.clipPath = 'circle(0px at -999px -999px)';
        }
      }
      if (sectionRef.current && blobRef.current) {
        const r = sectionRef.current.getBoundingClientRect();
        const inside = cy >= r.top && cy <= r.bottom;
        blobRef.current.style.opacity = inside ? '1' : '0';
        blobRef.current.style.transform = `translate(${rx - r.left}px,${ry - r.top}px) translate(-50%,-50%)`;
        const px = cx / window.innerWidth - 0.5;
        const py = cy / Math.max(r.height, 1) - 0.5;
        if (name1Ref.current) {
          name1Ref.current.style.transform = `translate(${(-px * 14).toFixed(1)}px,${(-py * 14 * 0.4).toFixed(1)}px)`;
        }
        if (name2Ref.current) {
          name2Ref.current.style.transform = `translate(${(-px * 26).toFixed(1)}px,${(-py * 26 * 0.4).toFixed(1)}px)`;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return undefined;
    const dir = -1;
    const speed = 60;
    const half = () => el.scrollWidth / 2;
    let x = 0;
    let last = performance.now();
    let mult = 1,
      targetMult = 1;
    let raf: number;

    const onEnter = () => {
      targetMult = 0.14;
    };
    const onLeave = () => {
      targetMult = 1;
    };
    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      mult += (targetMult - mult) * 0.07;
      x += dir * speed * mult * dt;
      const h = half();
      if (-x >= h) x += h;
      el.style.transform = `translateX(${x.toFixed(2)}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-[30px] w-[30px] rounded-full border-2 border-accent [mix-blend-mode:difference] [transform:translate(-100px,-100px)] max-tablet:hidden!"
      />
      <section
        ref={sectionRef}
        data-hero
        className="relative flex min-h-[calc(100vh-59px)] flex-col justify-center overflow-hidden px-[34px] pt-12 pb-9 max-thone:px-5 max-thone:pt-10 max-thone:pb-7">
        <div
          ref={blobRef}
          className="pointer-events-none absolute top-0 left-0 h-[380px] w-[380px] rounded-full bg-accent opacity-0 mix-blend-multiply blur-[2px] [transform:translate(-50%,-50%)] [will-change:transform]"
        />
        <div className="relative z-2 mx-auto w-full max-w-[1500px]">
          <div
            ref={(el: HTMLDivElement | null) => {
              addReveal(0, el);
              eyebrowRef.current = el;
            }}
            className="relative z-3 flex items-center gap-[14px] font-mono text-[13px] font-medium tracking-[0.14em] text-accent uppercase">
            {eyebrowText}
            <div
              ref={eyebrowInkRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center gap-[14px] text-ink [clip-path:circle(0px_at_-999px_-999px)]">
              {eyebrowText}
            </div>
          </div>

          <h1 className="mt-[18px] leading-[0.82] font-extrabold tracking-[-0.045em] text-ink uppercase">
            <span ref={name1Ref} className={NAME_LINE_CLASS}>
              {nameLine1}
            </span>
            <span
              ref={name2Ref}
              className={`${NAME_LINE_CLASS} text-transparent [-webkit-text-stroke:clamp(1.5px,0.32vw,4px)_#111110]`}>
              {nameLine2}
            </span>
          </h1>

          <div ref={el => addReveal(1, el)} className="mt-[34px] flex flex-wrap items-end justify-between gap-[44px]">
            <p
              className="m-0 max-w-[560px] text-[clamp(17px,1.7vw,21px)] font-medium leading-[1.45] text-[#1c1b18] [&_mark]:bg-accent [&_mark]:px-1.5 [&_mark]:text-inherit"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <a
              href="#work"
              className="group inline-flex flex-none items-center gap-[14px] bg-ink px-[26px] py-[18px] font-mono text-sm font-semibold tracking-[0.04em] text-cream uppercase no-underline shadow-[7px_7px_0_#FF4D23] [transition:transform_0.2s_cubic-bezier(0.34,1.3,0.4,1),box-shadow_0.2s_cubic-bezier(0.34,1.3,0.4,1),color_0.2s_ease] hover:text-accent hover:shadow-[0px_0px_0_#FF4D23] hover:[transform:translate(7px,7px)] active:shadow-[0_0_0_transparent] active:[transform:translate(7px,7px)_scale(0.95)]">
              {buttonText}{' '}
              <span className="inline-block [transition:transform_0.24s_cubic-bezier(0.3,1.5,0.4,1)] group-hover:[transform:translate(4px,4px)]">
                ↘
              </span>
            </a>
          </div>
        </div>

        <div
          ref={el => addReveal(2, el)}
          className="relative z-2 mt-auto flex flex-wrap items-center gap-x-[30px] gap-y-2.5 pt-10 font-mono text-xs tracking-[0.06em] text-[#6b685f] uppercase max-thone:gap-x-3.5 max-thone:pt-8 [&_.sep]:text-accent">
          {stats &&
            stats.map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="sep">/</span>}
                <span>{stat}</span>
              </React.Fragment>
            ))}
          <span className="ml-auto text-ink max-thone:hidden">{'{ SCROLL ↓ }'}</span>
        </div>
      </section>

      <div className="overflow-hidden border-t-2 border-b-2 border-ink bg-accent py-[18px] text-ink">
        <div
          ref={marqueeRef}
          className="flex w-max gap-[30px] text-[clamp(26px,3.4vw,46px)] font-extrabold tracking-[-0.02em] whitespace-nowrap uppercase [will-change:transform]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span>✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
