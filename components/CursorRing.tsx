'use client';

import { useEffect, useRef } from 'react';

const HIT = 'a, button, [data-work], [data-row], .skill';

/** The ring that trails the pointer and grows over anything clickable. Lives in the layout so every page has it. */
const CursorRing = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

    let cx = -100,
      cy = -100,
      rx = -100,
      ry = -100;
    let scale = 1,
      targetScale = 1;
    let raf = 0;
    let shown = false;

    const onMove = (e: PointerEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (!shown) {
        rx = cx;
        ry = cy;
        el.style.display = 'block';
        shown = true;
      }
      const t = e.target as HTMLElement | null;
      targetScale = t?.closest?.(HIT) ? 2.1 : 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    const loop = () => {
      rx += (cx - rx) * 0.18;
      ry += (cy - ry) * 0.18;
      scale += (targetScale - scale) * 0.14;
      el.style.transform = `translate(${rx - 15}px,${ry - 15}px) scale(${scale.toFixed(3)})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-[30px] w-[30px] rounded-full border-2 border-accent [mix-blend-mode:difference] [transform:translate(-100px,-100px)]"
    />
  );
};

export default CursorRing;
