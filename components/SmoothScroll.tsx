'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Lenis smooth scrolling for the whole site.
 * - Native scroll position is animated (no transform wrapper), so
 *   framer-motion's useScroll / parallax keeps working with it.
 * - Anchor links (#work, #contact, …) go through Lenis too, with an
 *   offset for the sticky navbar, instead of jumping.
 * - Skipped entirely when the user prefers reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80 });
    }
    document.addEventListener('click', onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('click', onClick);
      lenis.destroy();
    };
  }, []);
  return null;
}
