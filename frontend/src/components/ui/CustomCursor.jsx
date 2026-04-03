import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;

    // Don't show custom cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsVisible(true);

    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    const speed = 0.15;

    const updatePosition = () => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      if (cursor) {
        cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      if (cursorGlow) {
        // Glow follows with slight delay for smooth trail effect
        cursorGlow.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
    };

    gsap.ticker.add(updatePosition);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.matches('a, button, [role="button"], input, textarea, select, .magnetic-button, .tool-card')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target.matches('a, button, [role="button"], input, textarea, select, .magnetic-button, .tool-card')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      gsap.ticker.remove(updatePosition);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          position: 'fixed',
          top: -8,
          left: -8,
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: 'rgba(99, 102, 241, 0.8)',
          pointerEvents: 'none',
          zIndex: 10000,
          mixBlendMode: 'difference',
          transition: 'width 0.3s ease, height 0.3s ease, backgroundColor 0.3s ease',
          willChange: 'transform',
        }}
      />
      {/* Cursor glow effect */}
      <div
        ref={cursorGlowRef}
        className={`cursor-glow ${isHovering ? 'hovering' : ''}`}
        style={{
          position: 'fixed',
          top: -40,
          left: -40,
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9999,
          filter: 'blur(20px)',
          opacity: isHovering ? 0.8 : 0.4,
          transition: 'opacity 0.3s ease, transform 0.2s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
}
