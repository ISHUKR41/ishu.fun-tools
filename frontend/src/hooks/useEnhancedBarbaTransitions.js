/**
 * Enhanced Barba.js Page Transitions Hook
 * Implements smooth page-to-page transitions with GSAP
 * Optimized for 60 FPS performance
 */
import { useEffect, useRef } from 'react';
import barba from '@barba/core';
import { gsap } from 'gsap';
import { getLenis } from './useLenis';

// Page transition animations
const transitions = {
  // Fade slide transition (default)
  fadeSlide: {
    leave: (data) => {
      return gsap.to(data.current.container, {
        opacity: 0,
        y: -50,
        duration: 0.4,
        ease: 'power2.in',
      });
    },
    enter: (data) => {
      return gsap.from(data.next.container, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power2.out',
      });
    },
  },

  // Clip path reveal
  clipReveal: {
    leave: (data) => {
      return gsap.to(data.current.container, {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        duration: 0.5,
        ease: 'power3.in',
      });
    },
    enter: (data) => {
      return gsap.from(data.next.container, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        duration: 0.6,
        ease: 'power3.out',
      });
    },
  },

  // Scale fade
  scaleFade: {
    leave: (data) => {
      return gsap.to(data.current.container, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: 'power2.in',
      });
    },
    enter: (data) => {
      return gsap.from(data.next.container, {
        opacity: 0,
        scale: 1.05,
        duration: 0.5,
        ease: 'power2.out',
      });
    },
  },
};

export default function useEnhancedBarbaTransitions(transitionType = 'fadeSlide') {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const selectedTransition = transitions[transitionType] || transitions.fadeSlide;

    barba.init({
      transitions: [
        {
          name: 'default-transition',
          async leave(data) {
            // Scroll to top before transition
            const lenis = getLenis();
            if (lenis) {
              lenis.scrollTo(0, { immediate: true });
            }

            return selectedTransition.leave(data);
          },
          async enter(data) {
            return selectedTransition.enter(data);
          },
          async after(data) {
            // Re-initialize any page-specific scripts
            const lenis = getLenis();
            if (lenis) {
              lenis.resize();
              lenis.scrollTo(0, { immediate: true });
            }

            // Refresh ScrollTrigger
            if (window.ScrollTrigger) {
              window.ScrollTrigger.refresh();
            }
          },
        },
      ],
      views: [
        {
          namespace: 'tools-page',
          beforeEnter() {
            // Tool page specific initialization
            gsap.set('[data-animate]', { opacity: 0, y: 20 });
          },
          afterEnter() {
            // Animate elements in
            gsap.to('[data-animate]', {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: 'power2.out',
            });
          },
        },
      ],
      prevent: ({ el }) => {
        // Prevent Barba on specific elements
        return (
          el.classList?.contains('no-barba') ||
          el.closest('[data-no-barba]') !== null ||
          el.hasAttribute('download')
        );
      },
      requestError: (trigger, action, url, response) => {
        // Handle 404s or errors gracefully
        if (response.status === 404) {
          window.location.href = '/tools';
        }
        return false;
      },
    });

    return () => {
      if (barba) {
        barba.destroy();
        initialized.current = false;
      }
    };
  }, [transitionType]);
}

// Helper function to manually trigger page transition
export function barbaGo(url, trigger = null) {
  barba.go(url, trigger);
}

// Helper to force Barba to ignore a link
export function addNoBarba(element) {
  if (element) {
    element.setAttribute('data-no-barba', 'true');
  }
}
