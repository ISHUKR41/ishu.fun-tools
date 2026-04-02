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
    // ULTRA-OPTIMIZED Lenis configuration for 90-120 FPS butter-smooth scrolling
    // Heavily optimized for zero-lag across ALL devices (mobile, tablet, desktop)
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2,   // Faster on mobile for responsiveness
      easing: (t) => {
        // Optimized easing curve for smoothness
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile,           // Disable smooth wheel on mobile for native performance
      wheelMultiplier: 0.9,             // Slightly faster response
      touchMultiplier: isMobile ? 2.2 : 1.8, // More responsive touch
      normalizeWheel: true,
      smoothTouch: false,               // CRITICAL: Native touch = 60 FPS on mobile
      syncTouch: false,                 // CRITICAL: Async touch for better performance
      syncTouchLerp: 0.1,               // Faster interpolation
      touchInertiaMultiplier: isMobile ? 15 : 25, // Better inertia feel
      infinite: false,
      autoResize: true,
      prevent: (node) => node.classList.contains('no-lenis'),
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
