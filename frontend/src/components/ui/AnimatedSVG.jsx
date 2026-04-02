import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import './AnimatedSVG.css';

// Register GSAP plugins (Note: DrawSVG and MorphSVG require GSAP Club GreenSock membership)
// For production, use alternatives or purchase license
// gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

/**
 * AnimatedSVG Component
 * Creates smooth SVG path animations
 *
 * @param {string} type - 'draw' | 'morph' | 'float'
 * @param {React.ReactNode} children - SVG content
 * @param {Object} animationConfig - GSAP animation configuration
 */
export default function AnimatedSVG({
  type = 'draw',
  children,
  trigger = 'scroll',
  animationConfig = {},
  className = '',
  ...props
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path, line, polyline, polygon, circle, rect, ellipse');

    if (type === 'draw') {
      // SVG path drawing animation
      paths.forEach((path) => {
        const length = path.getTotalLength?.() || 0;

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        if (trigger === 'scroll') {
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: animationConfig.duration || 2,
            ease: animationConfig.ease || 'power2.inOut',
            scrollTrigger: {
              trigger: svg,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            ...animationConfig
          });
        } else {
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: animationConfig.duration || 2,
            ease: animationConfig.ease || 'power2.inOut',
            ...animationConfig
          });
        }
      });
    }

    if (type === 'float') {
      // Floating animation
      gsap.to(svg, {
        y: 20,
        rotation: 5,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        ...animationConfig
      });
    }

    if (type === 'pulse') {
      // Pulsing scale animation
      gsap.to(svg, {
        scale: 1.05,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        ...animationConfig
      });
    }

    return () => {
      gsap.killTweensOf(svg);
      gsap.killTweensOf(paths);
    };
  }, [type, trigger, animationConfig]);

  return (
    <div
      ref={svgRef}
      className={`animated-svg animated-svg--${type} ${className}`}
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * SVG Icon components for common icons with animations
 */
export function CheckmarkSVG({ animated = true, size = 64, color = '#10b981', className = '' }) {
  return (
    <AnimatedSVG type={animated ? 'draw' : 'none'} trigger="mount" className={className}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="3" fill="none" />
        <path
          d="M16 32L26 42L48 20"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </AnimatedSVG>
  );
}

export function UploadIconSVG({ animated = true, size = 64, color = '#6366f1', className = '' }) {
  return (
    <AnimatedSVG type={animated ? 'float' : 'none'} className={className}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path
          d="M32 10L32 46M32 10L22 20M32 10L42 20"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 40L10 50C10 53.3137 12.6863 56 16 56L48 56C51.3137 56 54 53.3137 54 50L54 40"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </AnimatedSVG>
  );
}

export function LoadingSpinnerSVG({ size = 48, color = '#6366f1', className = '' }) {
  const spinnerRef = useRef(null);

  useEffect(() => {
    if (spinnerRef.current) {
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 1,
        ease: 'none',
        repeat: -1,
      });
    }
  }, []);

  return (
    <div ref={spinnerRef} className={`loading-spinner ${className}`}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
          fill="none"
          opacity="0.3"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="15.7 47.1"
          fill="none"
        />
      </svg>
    </div>
  );
}
