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
    // Ultra-optimized Lenis configuration for buttery-smooth, lag-free scrolling
    const lenis = new Lenis({
      duration: 1.5,                    // Longer duration for smoother feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      orientation: 'vertical',          // Vertical scrolling
      gestureOrientation: 'vertical',   // Handle vertical gestures
      smoothWheel: true,                // Enable smooth wheel scrolling
      wheelMultiplier: 0.7,             // Fine control over scroll speed
      touchMultiplier: 1.5,             // Touch scroll multiplier
      normalizeWheel: true,             // Normalize wheel delta
      smoothTouch: false,               // Native touch feel on mobile
      syncTouch: false,                 // Don't sync touch with scroll
      syncTouchLerp: 0.1,              // Touch sync interpolation
      __iosNoInertiaNativeScrolling: true, // Fix iOS momentum scrolling
    });

    globalLenis = lenis;
    lenisRef.current = lenis;

    // Sync with GSAP ScrollTrigger
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
    });

    // Optimized RAF loop for 60fps performance
    function raf(time) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }

    rafId.current = requestAnimationFrame(raf);

    // Add Lenis class to html for CSS targeting
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      lenis.destroy();
      globalLenis = null;
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  return lenis;
}
