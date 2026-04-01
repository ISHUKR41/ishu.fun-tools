import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

// Enhanced page transition with GSAP
export default function usePageTransition() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Page enter animation
    const tl = gsap.timeline();

    tl.fromTo(
      '.page-wrapper',
      {
        opacity: 0,
        y: 20,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
      }
    );

    // Animate content sections
    tl.fromTo(
      '.animate-in',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '-=0.3'
    );

    return () => {
      tl.kill();
    };
  }, [location.pathname]);
}
