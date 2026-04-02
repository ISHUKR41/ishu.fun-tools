import { useEffect } from 'react';
import barba from '@barba/core';
import gsap from 'gsap';

/**
 * Barba.js Page Transitions Hook
 * Provides smooth, cinematic page-to-page transitions
 * Optimized for 60 FPS performance
 */
export default function useBarbaTransitions() {
  useEffect(() => {
    // Only initialize once
    if (barba.data.current) return;

    barba.init({
      debug: false,
      timeout: 5000,
      preventRunning: true,
      transitions: [
        {
          name: 'fade-slide',
          async leave(data) {
            const done = this.async();

            // Animate out
            gsap.to(data.current.container, {
              opacity: 0,
              y: -50,
              duration: 0.4,
              ease: 'power2.in',
              onComplete: done,
            });
          },
          async enter(data) {
            // Scroll to top
            window.scrollTo(0, 0);

            // Animate in
            gsap.fromTo(
              data.next.container,
              {
                opacity: 0,
                y: 50,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
              }
            );
          },
        },
      ],
      views: [
        {
          namespace: 'tools',
          beforeEnter(data) {
            // Reinitialize scroll animations for tools page
            console.log('Entering tools view');
          },
        },
        {
          namespace: 'tool',
          beforeEnter(data) {
            // Reinitialize animations for individual tool page
            console.log('Entering tool view');
          },
        },
      ],
    });

    return () => {
      barba.destroy();
    };
  }, []);

  return null;
}
