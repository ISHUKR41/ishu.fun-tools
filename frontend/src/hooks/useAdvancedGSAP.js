import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { getLenis } from './useLenis';

gsap.registerPlugin(ScrollTrigger);

/**
 * Ultra-optimized GSAP animations with ScrollTrigger
 * Automatically syncs with Lenis smooth scrolling
 * Batches animations for 60-120 FPS performance
 */

export function useRevealAnimation(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const {
      delay = 0,
      duration = 0.8,
      ease = 'power3.out',
      y = 40,
      opacity = 0,
      stagger = 0,
      scrub = false,
      start = 'top 90%',
      end = 'bottom 10%',
      markers = false,
    } = options;

    const elements = ref.current.querySelectorAll('[data-reveal]');
    const targets = elements.length > 0 ? elements : [ref.current];

    const animation = gsap.fromTo(
      targets,
      {
        y,
        opacity,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        ease,
        delay,
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start,
          end,
          scrub,
          markers,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [ref, options]);
}

export function useFadeInAnimation(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const {
      delay = 0,
      duration = 1,
      ease = 'power2.out',
      start = 'top 85%',
    } = options;

    const animation = gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [ref, options]);
}

export function useParallaxAnimation(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const {
      speed = 0.5,
      start = 'top bottom',
      end = 'bottom top',
      scrub = 1,
    } = options;

    const animation = gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start,
        end,
        scrub,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [ref, options]);
}

export function useScaleAnimation(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const {
      from = 0.8,
      to = 1,
      duration = 0.6,
      ease = 'back.out(1.4)',
      start = 'top 90%',
    } = options;

    const animation = gsap.fromTo(
      ref.current,
      { scale: from, opacity: 0 },
      {
        scale: to,
        opacity: 1,
        duration,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [ref, options]);
}

export function useStaggerAnimation(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const {
      selector = '[data-stagger]',
      delay = 0,
      duration = 0.6,
      stagger = 0.1,
      y = 30,
      ease = 'power2.out',
      start = 'top 85%',
    } = options;

    const elements = ref.current.querySelectorAll(selector);
    if (elements.length === 0) return;

    const animation = gsap.fromTo(
      elements,
      {
        y,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        ease,
        delay,
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [ref, options]);
}

export function useCounterAnimation(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const {
      from = 0,
      to,
      duration = 2,
      ease = 'power2.out',
      start = 'top 80%',
      format = (value) => Math.round(value).toLocaleString(),
    } = options;

    const obj = { value: from };

    const animation = gsap.to(obj, {
      value: to || parseInt(ref.current.textContent.replace(/,/g, ''), 10),
      duration,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: 'play none none reverse',
      },
      onUpdate: () => {
        ref.current.textContent = format(obj.value);
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [ref, options]);
}

export function usePinAnimation(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const {
      start = 'top top',
      end = 'bottom top',
      pinSpacing = true,
      scrub = 1,
    } = options;

    ScrollTrigger.create({
      trigger: ref.current,
      start,
      end,
      pin: true,
      pinSpacing,
      scrub,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [ref, options]);
}

export function useBatchReveal(containerRef, options = {}) {
  useEffect(() => {
    if (!containerRef.current) return;

    const {
      selector = '[data-batch]',
      batchMax = 3,
      interval = 0.1,
      y = 40,
      duration = 0.6,
      ease = 'power2.out',
    } = options;

    const elements = containerRef.current.querySelectorAll(selector);
    if (elements.length === 0) return;

    ScrollTrigger.batch(elements, {
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            ease,
            stagger: interval,
            overwrite: true,
          }
        );
      },
      batchMax,
      start: 'top 90%',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [containerRef, options]);
}

// Utility to create smooth magnetic button effect
export function useMagneticEffect(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const {
      strength = 0.3,
      speed = 0.2,
    } = options;

    const element = ref.current;
    let bounds = element.getBoundingClientRect();

    const handleMouseMove = (e) => {
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: speed,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: speed,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    const handleResize = () => {
      bounds = element.getBoundingClientRect();
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, options]);
}

export default {
  useRevealAnimation,
  useFadeInAnimation,
  useParallaxAnimation,
  useScaleAnimation,
  useStaggerAnimation,
  useCounterAnimation,
  usePinAnimation,
  useBatchReveal,
  useMagneticEffect,
};
