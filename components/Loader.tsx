'use client';

import { useEffect, useRef, useState } from 'react';

const Loader = () => {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let finished = false;
    const dur = 900;
    const start = performance.now();

    const finish = () => {
      if (finished) return;
      finished = true;
      setPct(100);
      setLeaving(true);
      setTimeout(() => setHidden(true), 750);
    };

    const tick = (now: number) => {
      if (finished) return;
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 2.4);
      setPct(Math.round(eased * 100));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else finish();
    };
    rafRef.current = requestAnimationFrame(tick);
    const fallback = setTimeout(finish, 1500);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(fallback);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col justify-between bg-ink px-[34px] py-[26px] text-cream [transition:translate_0.7s_cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? '-translate-y-full' : ''
      }`}>
      <div className="font-mono text-[13px] tracking-[0.16em] text-accent uppercase">{'{ LOADING }'}</div>
      <div className="flex items-end justify-between">
        <div className="font-mono text-[13px] tracking-[0.1em] uppercase [&_span]:text-accent">
          SUMIT.B<span>✦</span> — PORTFOLIO
        </div>
        <div className="text-[clamp(80px,14vw,220px)] leading-[0.8] font-extrabold tracking-[-0.05em]">{pct}%</div>
      </div>
    </div>
  );
};

export default Loader;
