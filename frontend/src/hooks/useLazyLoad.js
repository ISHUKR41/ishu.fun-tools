import { useEffect, useRef, useState } from 'react';

/**
 * HYPER-OPTIMIZED Lazy Loading Hook for 90-120 FPS
 * Uses IntersectionObserver with aggressive optimization
 * Prevents unnecessary renders and provides smooth loading
 */
export default function useLazyLoad(options = {}) {
  const {
    threshold = 0.01,
    rootMargin = '100px 0px',
    triggerOnce = true,
    onIntersect,
  } = options;

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Don't observe if already visible and triggerOnce is true
    if (isVisible && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onIntersect?.();

          // Disconnect after first intersection if triggerOnce
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, isVisible, onIntersect]);

  return [elementRef, isVisible];
}

/**
 * Optimized image lazy loading hook
 * Loads images only when in viewport with blur-up effect
 */
export function useLazyImage(src, placeholder = '') {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, isVisible] = useLazyLoad({
    threshold: 0.01,
    rootMargin: '200px 0px', // Start loading before visible
    triggerOnce: true,
  });

  useEffect(() => {
    if (!isVisible || !src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      // Use requestAnimationFrame for smooth transition
      requestAnimationFrame(() => {
        setImageSrc(src);
      });
    };
  }, [isVisible, src]);

  return [imageRef, imageSrc];
}

/**
 * Batch lazy loading for multiple elements
 * More efficient than creating individual observers
 */
export function useBatchLazyLoad(count, options = {}) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: options.threshold || 0.01,
        rootMargin: options.rootMargin || '100px 0px',
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [count, options.threshold, options.rootMargin]);

  const setRef = (index) => (element) => {
    itemRefs.current[index] = element;
  };

  const isVisible = (index) => visibleItems.has(index);

  return { setRef, isVisible };
}
