import type ScrollRevealType from 'scrollreveal';
import { prefersReducedMotion } from '@/lib/motion';

type SrInstance = ReturnType<typeof ScrollRevealType>;

let srInstance: SrInstance | null = null;

export function getSr(): SrInstance | null {
  if (typeof window === 'undefined') return null;
  if (prefersReducedMotion()) return null;
  if (!srInstance) {
    const mod = require('scrollreveal');
    const ScrollReveal: typeof ScrollRevealType = mod.default || mod;
    srInstance = ScrollReveal();
  }
  return srInstance;
}
