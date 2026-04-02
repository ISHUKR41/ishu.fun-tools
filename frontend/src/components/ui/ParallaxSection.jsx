import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxSection - Ultra-smooth parallax scrolling with GSAP ScrollTrigger
 * Optimized for 90-120 FPS performance
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to parallax
 * @param {number} props.speed - Parallax speed (0.1 = slow, 2 = fast). Default: 0.5
 * @param {string} props.direction - Direction of parallax ('up' or 'down'). Default: 'up'
 * @param {string} props.className - Additional CSS class
 */
export default function ParallaxSection({ children, speed = 0.5, direction = 'up', className = '' }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Calculate parallax movement
    const movement = direction === 'up' ? -100 * speed : 100 * speed;

    // Create parallax animation with GSAP ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5, // Smooth scrubbing for 60fps
        invalidateOnRefresh: true,
      }
    });

    tl.fromTo(content,
      { y: -movement },
      { y: movement, ease: 'none' }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getById(tl.scrollTrigger?.id)?.kill();
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={`parallax-section ${className}`} style={{ overflow: 'hidden' }}>
      <div ref={contentRef} className="parallax-content" style={{ willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
}

/**
 * ParallaxLayer - Individual parallax layer for multi-layer effects
 * @param {Object} props
 * @param {React.ReactNode} props.children - Layer content
 * @param {number} props.depth - Layer depth (0-1, higher = more parallax). Default: 0.5
 * @param {string} props.className - Additional CSS class
 */
export function ParallaxLayer({ children, depth = 0.5, className = '' }) {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Multi-layer parallax effect
    const speed = (1 - depth) * 100;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: layer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.3,
        invalidateOnRefresh: true,
      }
    });

    tl.fromTo(layer,
      { y: -speed },
      { y: speed, ease: 'none' }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getById(tl.scrollTrigger?.id)?.kill();
    };
  }, [depth]);

  return (
    <div
      ref={layerRef}
      className={`parallax-layer ${className}`}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)', // GPU acceleration
      }}
    >
      {children}
    </div>
  );
}
