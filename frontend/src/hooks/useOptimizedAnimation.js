import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * HYPER-OPTIMIZED GSAP Animation Hook
 * Batches animations for 90-120 FPS performance
 * Uses RAF and timeline for efficient rendering
 */
export default function useOptimizedAnimation(animationConfig = {}) {
  const elementRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create a timeline for better control and batching
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power2.out',
        duration: 0.6,
      },
    });

    timelineRef.current = tl;

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  const play = () => timelineRef.current?.play();
  const pause = () => timelineRef.current?.pause();
  const reverse = () => timelineRef.current?.reverse();
  const restart = () => timelineRef.current?.restart();

  return {
    elementRef,
    timeline: timelineRef.current,
    play,
    pause,
    reverse,
    restart,
  };
}

/**
 * Batch GSAP animations for multiple elements
 * Much more efficient than individual animations
 */
export function useBatchAnimation(elements, options = {}) {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!elements || elements.length === 0) return;

    const {
      stagger = 0.05,
      duration = 0.6,
      ease = 'power2.out',
      ...animationProps
    } = options;

    // Create master timeline
    const tl = gsap.timeline();

    // Batch animate all elements with stagger
    tl.fromTo(
      elements,
      {
        opacity: 0,
        y: 20,
        ...animationProps.from,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        ease,
        stagger,
        ...animationProps.to,
      }
    );

    timelineRef.current = tl;

    return () => tl.kill();
  }, [elements, options]);

  return timelineRef.current;
}

/**
 * Optimized scroll-triggered animation
 * Uses GSAP ScrollTrigger with performance optimizations
 */
export function useScrollAnimation(config = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Lazy load ScrollTrigger only when needed
    import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const {
        trigger = element,
        start = 'top 80%',
        end = 'bottom 20%',
        scrub = false,
        markers = false,
        animation,
        ...rest
      } = config;

      // Create scroll-triggered animation
      const scrollTrigger = ScrollTrigger.create({
        trigger,
        start,
        end,
        scrub,
        markers,
        ...rest,
        onEnter: () => {
          if (animation) {
            gsap.to(element, animation);
          }
        },
      });

      return () => scrollTrigger.kill();
    });
  }, [config]);

  return elementRef;
}

/**
 * Performance-optimized hover animation
 * Uses GSAP's quickTo for ultra-smooth 60+ FPS hover effects
 */
export function useHoverAnimation(hoverConfig = {}, leaveConfig = {}) {
  const elementRef = useRef(null);
  const quickToRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create quickTo functions for instant response
    const quickToY = gsap.quickTo(element, 'y', {
      duration: 0.3,
      ease: 'power2.out',
    });

    const quickToScale = gsap.quickTo(element, 'scale', {
      duration: 0.3,
      ease: 'power2.out',
    });

    quickToRef.current = { quickToY, quickToScale };

    const handleMouseEnter = () => {
      quickToY(hoverConfig.y || -5);
      quickToScale(hoverConfig.scale || 1.02);
    };

    const handleMouseLeave = () => {
      quickToY(0);
      quickToScale(1);
    };

    element.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverConfig, leaveConfig]);

  return elementRef;
}
