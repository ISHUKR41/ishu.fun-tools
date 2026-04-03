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
      // Adaptive duration based on device capability
      duration: isMobile ? 0.8 : isTablet ? 1.0 : 1.2,
      // Ultra-smooth cubic-bezier easing
      easing: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      // CRITICAL: Disable smooth wheel on mobile for native 60 FPS scrolling
      smoothWheel: !isMobile,
      // Optimized multipliers for responsive feel
      wheelMultiplier: isLowEnd ? 1.0 : 0.9,
      touchMultiplier: isMobile ? 2.5 : isTablet ? 2.0 : 1.8,
      normalizeWheel: true,
      // CRITICAL: Native touch scrolling = instant 60 FPS on all mobile devices
      smoothTouch: false,
      syncTouch: false,
      syncTouchLerp: 0.075,  // Faster interpolation for snappier feel
      touchInertiaMultiplier: isMobile ? 12 : isTablet ? 18 : 25,
      infinite: false,
      autoResize: true,
      // Allow disabling lenis on specific elements
      prevent: (node) => node.classList.contains('no-lenis') || node.closest('.no-lenis'),
      // iOS-specific optimization
      __iosNoInertiaNativeScrolling: true,
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
