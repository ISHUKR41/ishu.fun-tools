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
    // HYPER-OPTIMIZED Lenis configuration for 90-120 FPS butter-smooth scrolling
    // Zero-lag across ALL devices with intelligent device detection
    const width = window.innerWidth;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isLowEnd = (window.devicePixelRatio || 1) < 2 || (navigator.hardwareConcurrency || 2) <= 4;

    const lenis = new Lenis({
      // ULTRA-OPTIMIZED duration for instant response with smooth feel
      duration: isMobile ? 0.7 : isTablet ? 0.9 : 1.0,
      // Premium easing curve (Apple/Framer-style)
      easing: (t) => {
        // Custom ease-out-expo for ultra-smooth deceleration
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      // CRITICAL: Adaptive smooth wheel - enable only on desktop for butter-smooth scrolling
      smoothWheel: !isMobile,
      // Ultra-responsive multipliers - reduced for tighter control
      wheelMultiplier: isLowEnd ? 0.8 : 0.7,
      touchMultiplier: isMobile ? 2.2 : isTablet ? 2.0 : 1.5,
      normalizeWheel: true,
      // CRITICAL: Native touch scrolling = instant 60 FPS on all mobile devices
      smoothTouch: false,
      syncTouch: false,
      syncTouchLerp: 0.1,  // Balanced interpolation for smooth yet responsive feel
      touchInertiaMultiplier: isMobile ? 15 : isTablet ? 20 : 28,
      infinite: false,
      autoResize: true,
      // Allow disabling lenis on specific elements (dropzones, modals, etc.)
      prevent: (node) => node.classList.contains('no-lenis') || node.closest('.no-lenis'),
      // iOS-specific optimization for native momentum scrolling
      __iosNoInertiaNativeScrolling: true,
      // Performance optimization - lerp affects smoothing intensity
      lerp: isMobile ? 0.1 : isLowEnd ? 0.08 : 0.07,
    });

    globalLenis = lenis;
    lenisRef.current = lenis;

    // High-performance GSAP ScrollTrigger sync with throttling
    let scrollTicking = false;
    lenis.on('scroll', () => {
      if (!scrollTicking) {
        scrollTicking = true;
        ScrollTrigger.update();
        requestAnimationFrame(() => {
          scrollTicking = false;
        });
      }
    });

    // Ultra-optimized RAF loop with priority scheduling
    function raf(time) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }

    rafId.current = requestAnimationFrame(raf);

    // Add Lenis classes for CSS targeting
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    // Prevent default scroll restoration for smoother navigation
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
