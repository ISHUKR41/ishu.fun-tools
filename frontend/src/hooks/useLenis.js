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
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5,
      smoothTouch: false,
      infinite: false,
      syncTouch: false,
    });

    globalLenis = lenis;
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const rafCallback = (time) => { lenis.raf(time * 1000); };
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
      globalLenis = null;
    };
  }, []);
}
