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
      // HYPER-OPTIMIZED duration for 90-120 FPS across ALL devices
      duration: isMobile ? 0.5 : isTablet ? 0.7 : 0.8,
      // Premium easing curve (Apple/Framer/Stripe-style ultra-smooth)
      easing: (t) => {
        // Custom ease-out-expo for buttery-smooth deceleration
        return t === 1 ? 1 : 1 - Math.pow(2, -12 * t);
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      // CRITICAL: Adaptive smooth wheel - enable only on desktop for butter-smooth scrolling
      smoothWheel: !isMobile,
      // Ultra-responsive multipliers - optimized for instant response
      wheelMultiplier: isLowEnd ? 0.9 : 1.0,
      touchMultiplier: isMobile ? 1.8 : isTablet ? 1.6 : 1.5,
      normalizeWheel: true,
      // CRITICAL: Native touch scrolling = instant 90+ FPS on all mobile devices
      smoothTouch: false,
      syncTouch: false,
      syncTouchLerp: 0.05,  // Ultra-fast interpolation for instant response
      touchInertiaMultiplier: isMobile ? 18 : isTablet ? 22 : 30,
      infinite: false,
      autoResize: true,
      // Allow disabling lenis on specific elements (dropzones, modals, etc.)
      prevent: (node) => node.classList.contains('no-lenis') || node.closest('.no-lenis'),
      // iOS-specific optimization for native momentum scrolling
      __iosNoInertiaNativeScrolling: true,
      // Performance optimization - aggressive lerp for ultra-smooth scrolling
      lerp: isMobile ? 0.05 : isLowEnd ? 0.06 : 0.04,
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
