import { useEffect, useRef } from 'react';

/**
 * Custom hook for optimized scroll-triggered animations using Intersection Observer
 * Prevents animation overhead for off-screen elements
 *
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for early/late triggering
 * @param {boolean} options.triggerOnce - Whether to trigger only once
 * @returns {React.RefObject} - Ref to attach to the element
 */
export default function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if browser supports Intersection Observer
    if (!('IntersectionObserver' in window)) {
      // Fallback: show element immediately on unsupported browsers
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (triggerOnce && hasAnimated.current) return;

            element.classList.add('is-visible');
            hasAnimated.current = true;

            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            element.classList.remove('is-visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
}

/**
 * Alternative hook for stagger animations
 * Use this for lists or grids where items should animate in sequence
 */
export function useStaggerAnimation(itemsLength, delay = 50) {
  const refs = useRef([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      refs.current.forEach((el) => {
        if (el) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, index * delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      refs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [itemsLength, delay]);

  return refs;
}
