import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Magnetic hover effect hook
 * Makes elements follow mouse movement with a smooth magnetic pull
 */
export default function useMagneticEffect(strength = 0.3) {
  const elementRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const elementPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.max(rect.width, rect.height);

      if (distance < maxDistance) {
        mousePosition.current = {
          x: deltaX * strength,
          y: deltaY * strength,
        };

        gsap.to(element, {
          x: mousePosition.current.x,
          y: mousePosition.current.y,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return elementRef;
}
