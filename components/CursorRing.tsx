'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { prefersReducedMotion } from '@/lib/motion';

const HIT = 'a, button, .skill';

/** The ring that trails the mouse and grows over anything clickable. Lives in the layout so every page has it. */
const CursorRing = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const refresh = useRef<() => void>(() => {});
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return undefined;
    }

    let cx = 0,
      cy = 0,
      rx = 0,
      ry = 0;
    let scale = 1,
      targetScale = 1;
    let raf = 0;
    let running = false;
    let shown = false;

    // Runs only while the ring is still catching up, then stops until something changes.
    const frame = () => {
      rx += (cx - rx) * 0.18;
      ry += (cy - ry) * 0.18;
      scale += (targetScale - scale) * 0.14;
      el.style.transform = `translate(${rx - 15}px,${ry - 15}px) scale(${scale.toFixed(3)})`;
      if (Math.abs(cx - rx) + Math.abs(cy - ry) < 0.1 && Math.abs(targetScale - scale) < 0.005) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };

    const setTarget = (node: EventTarget | null) => {
      targetScale = node instanceof Element && node.closest(HIT) ? 2.1 : 1;
      start();
    };
    const hide = () => {
      shown = false;
      el.style.display = 'none';
    };

    const onMove = (e: PointerEvent) => {
      // Touch and pen also fire pointermove on laptops with a touchscreen.
      if (e.pointerType !== 'mouse') {
        hide();
        return;
      }
      cx = e.clientX;
      cy = e.clientY;
      if (!shown) {
        rx = cx;
        ry = cy;
        el.style.display = 'block';
        shown = true;
      }
      setTarget(e.target);
    };

    // What sits under a still mouse changes when the page scrolls or the route changes.
    refresh.current = () => {
      if (shown) setTarget(document.elementFromPoint(cx, cy));
    };
    const onScroll = () => refresh.current();

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
      document.documentElement.removeEventListener('pointerleave', hide);
      cancelAnimationFrame(raf);
      refresh.current = () => {};
    };
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => refresh.current());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-[30px] w-[30px] rounded-full border-2 border-accent [mix-blend-mode:difference] [transform:translate(-100px,-100px)]"
    />
  );
};

export default CursorRing;
