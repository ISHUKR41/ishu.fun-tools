import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { getLenis } from '../../hooks/useLenis';
import './AdvancedParallax.module.css';

export function ParallaxLayer({ children, speed = 1, className = '', direction = 'vertical' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Transform based on scroll position with customizable speed
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const x = useTransform(scrollYProgress, [0, 1], [0, direction === 'horizontal' ? -100 * speed : 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <motion.div
      ref={ref}
      className={`parallax-layer ${className}`}
      style={{
        y: direction === 'vertical' ? y : 0,
        x: direction === 'horizontal' ? x : 0,
        opacity,
        scale,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({ children, layers = [], className = '' }) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={`parallax-section ${className}`}>
      {layers.map((layer, index) => (
        <ParallaxLayer
          key={index}
          speed={layer.speed || (index + 1) * 0.5}
          direction={layer.direction || 'vertical'}
          className={layer.className || ''}
        >
          {layer.content}
        </ParallaxLayer>
      ))}
      <div className="parallax-content">{children}</div>
    </div>
  );
}

// Multi-layer background parallax with depth
export function ParallaxBackground() {
  return (
    <div className="parallax-bg-container">
      {/* Layer 1: Slowest - far background */}
      <ParallaxLayer speed={0.2} className="parallax-bg-layer parallax-layer-1">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
      </ParallaxLayer>

      {/* Layer 2: Medium speed - mid background */}
      <ParallaxLayer speed={0.4} className="parallax-bg-layer parallax-layer-2">
        <div className="gradient-mesh" />
      </ParallaxLayer>

      {/* Layer 3: Faster - foreground elements */}
      <ParallaxLayer speed={0.6} className="parallax-bg-layer parallax-layer-3">
        <div className="floating-shape shape-1" />
        <div className="floating-shape shape-2" />
        <div className="floating-shape shape-3" />
      </ParallaxLayer>
    </div>
  );
}

export default ParallaxLayer;
