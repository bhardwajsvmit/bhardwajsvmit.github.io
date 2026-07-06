let srInstance = null;

export function getSr() {
  if (typeof window === 'undefined') return null;
  if (!srInstance) {
    // eslint-disable-next-line global-require
    const mod = require('scrollreveal');
    const ScrollReveal = mod.default || mod;
    srInstance = ScrollReveal();
  }
  return srInstance;
}
