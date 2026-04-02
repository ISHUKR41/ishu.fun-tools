import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ParallaxLayer.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxLayer Component
 * Creates smooth multi-layer parallax scrolling effects
 * Optimized for 60-120 FPS performance across all devices
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to apply parallax to
 * @param {number} props.speed - Parallax speed multiplier (0.1 = slow, 1 = normal, 2 = fast)
 * @param {string} props.direction - 'vertical' | 'horizontal'
 * @param {string} props.className - Additional CSS classes
 */
export default function ParallaxLayer({
  children,
  speed = 0.5,
  direction = 'vertical',
  className = '',
  ...props
}) {
  const layerRef = useRef(null);

  useEffect(() => {
    const element = layerRef.current;
    if (!element) return;

    // Use GSAP ScrollTrigger for hardware-accelerated parallax
    const ctx = gsap.context(() => {
      const movement = direction === 'vertical' ? 'y' : 'x';

      gsap.to(element, {
        [movement]: () => {
          // Calculate parallax offset based on scroll position
          const scrollY = window.scrollY || window.pageYOffset;
          const elementTop = element.offsetTop;
          const offset = (scrollY - elementTop) * speed;
          return direction === 'vertical' ? offset : offset;
        },
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true, // Smooth parallax tied to scroll position
          invalidateOnRefresh: true,
        }
      });
    }, layerRef);

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div
      ref={layerRef}
      className={`parallax-layer parallax-layer--${direction} ${className}`}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU acceleration
      }}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * ParallaxSection Component
 * Creates a section with multiple parallax layers
 */
export function ParallaxSection({ children, className = '', ...props }) {
  return (
    <div className={`parallax-section ${className}`} {...props}>
      {children}
    </div>
  );
}
