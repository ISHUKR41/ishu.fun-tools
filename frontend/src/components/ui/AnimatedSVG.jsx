import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

/**
 * AnimatedSVGIcon - Animated SVG icons with GSAP
 * Ultra-smooth 60fps animations optimized for performance
 */

/**
 * Draw animation for SVG paths (stroke animation)
 */
export function SVGDrawAnimation({ children, duration = 1.5, loop = false, className = '' }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path, line, circle, rect, polyline, polygon');

    paths.forEach((path) => {
      const length = path.getTotalLength?.() || 100;

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: duration,
        ease: 'power2.inOut',
        repeat: loop ? -1 : 0,
        repeatDelay: loop ? 0.5 : 0,
      });
    });
  }, [duration, loop]);

  return (
    <svg ref={svgRef} className={\`svg-draw \${className}\`} style={{ overflow: 'visible' }}>
      {children}
    </svg>
  );
}

/**
 * Float animation for SVG elements
 */
export function FloatAnimation({ children, distance = 20, duration = 3, className = '' }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.to(element, {
      y: -distance,
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      gsap.killTweensOf(element);
    };
  }, [distance, duration]);

  return (
    <div ref={elementRef} className={\`float-animation \${className}\`} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}

/**
 * Pulse/Scale animation
 */
export function PulseAnimation({ children, scale = 1.05, duration = 2, className = '' }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.to(element, {
      scale: scale,
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    return () => {
      gsap.killTweensOf(element);
    };
  }, [scale, duration]);

  return (
    <div ref={elementRef} className={\`pulse-animation \${className}\`} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}

export default {
  SVGDrawAnimation,
  FloatAnimation,
  PulseAnimation,
};
