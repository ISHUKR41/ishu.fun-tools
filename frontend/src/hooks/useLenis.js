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
    globalLenis.scrollTo(target, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), ...options });
  }
}

export default function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Optimized Lenis configuration for ultra-smooth, lag-free scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced for smoother control
      touchMultiplier: 2,
      smoothTouch: false, // Keep false for native touch feel
      infinite: false,
      syncTouch: false,
      lerp: 0.08, // Reduced for smoother interpolation
      prevent: (node) => node.closest('[data-lenis-prevent]') !== null,
    });

    globalLenis = lenis;
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    // Use requestAnimationFrame for better performance
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      globalLenis = null;
    };
  }, []);
}
