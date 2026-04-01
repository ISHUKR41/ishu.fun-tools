import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Parallax effect for hero sections
    gsap.utils.toArray('.parallax-layer').forEach((layer) => {
      const depth = layer.dataset.depth || 0.5;
      gsap.to(layer, {
        y: () => -(layer.offsetHeight * depth),
        ease: 'none',
        scrollTrigger: {
          trigger: layer.closest('section') || layer,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    });

    // Fade-in animations on scroll
    gsap.utils.toArray('.scroll-fade-in').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Scale animations
    gsap.utils.toArray('.scroll-scale').forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Slide animations
    gsap.utils.toArray('.scroll-slide-left').forEach((el) => {
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    gsap.utils.toArray('.scroll-slide-right').forEach((el) => {
      gsap.fromTo(
        el,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Stagger animation for grids/lists
    gsap.utils.toArray('.scroll-stagger').forEach((container) => {
      const items = container.querySelectorAll('.stagger-item');
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
