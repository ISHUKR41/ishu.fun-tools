import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let globalLenis = null;

export function getLenis() {
  return globalLenis;
}

export function lenisScrollTo(target, options = {}) {
  if (globalLenis) {
    globalLenis.scrollTo(target, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options
    });
  }
}

export default function useLenis() {
  const lenisRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    // ULTRA-OPTIMIZED Lenis configuration for butter-smooth, zero-lag scrolling
    // Optimized for 60fps performance across ALL devices (mobile, tablet, desktop)
    const lenis = new Lenis({
      duration: 1.2,                    // Perfect balance: smooth but responsive
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for natural feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,            // Optimized for desktop precision
      touchMultiplier: 1.8,             // Better mobile responsiveness
      normalizeWheel: true,
      smoothTouch: false,               // Native touch on mobile = better performance
      syncTouch: false,
      syncTouchLerp: 0.075,             // Smoother touch interpolation
      infinite: false,
      __iosNoInertiaNativeScrolling: true,
    });

    globalLenis = lenis;
    lenisRef.current = lenis;

    // High-performance GSAP ScrollTrigger sync
    lenis.on('scroll', ScrollTrigger.update);

    // Optimized RAF loop - uses native requestAnimationFrame for 60fps
    function raf(time) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }

    rafId.current = requestAnimationFrame(raf);

    // Add Lenis classes for CSS targeting
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    // Prevent default scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      lenis.destroy();
      globalLenis = null;
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  return lenisRef.current;
}
