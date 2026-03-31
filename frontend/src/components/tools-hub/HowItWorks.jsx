import { useRef, useEffect } from 'react';
import { Upload, Settings, Download, ArrowRight, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload your file',
    description: 'Drag & drop or browse. Supports PDF, images, documents — any format.',
    color: '#6366F1',
    points: ['Drag & drop support', 'Multiple files at once', 'Up to 100MB per file'],
  },
  {
    icon: Settings,
    number: '02',
    title: 'Configure options',
    description: 'Customize settings for your specific needs. Simple, fast, intuitive.',
    color: '#8B5CF6',
    points: ['Smart defaults', 'Preview in real-time', 'One-click presets'],
  },
  {
    icon: Download,
    number: '03',
    title: 'Download result',
    description: 'Get your processed file instantly. No email required, no waiting.',
    color: '#EC4899',
    points: ['Instant download', 'Cloud storage link', 'Auto-deleted in 1hr'],
  },
];

export default function HowItWorks() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo('.hiw__header', 
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.hiw__header',
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Steps stagger
      gsap.fromTo('.hiw__step',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.hiw__steps',
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Connector line animation
      gsap.fromTo('.hiw__connector',
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 0.6, ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.hiw__steps',
            start: 'top 75%',
            once: true,
          },
        }
      );

      // Points reveal
      gsap.fromTo('.hiw__point',
        { opacity: 0, x: -12 },
        {
          opacity: 1, x: 0, duration: 0.4, ease: 'power2.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.hiw__steps',
            start: 'top 70%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="how-it-works section" id="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="hiw__header">
          <span className="hiw__eyebrow">Simple Process</span>
          <h2 className="hiw__title">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="hiw__subtitle">
            Process any file in under 30 seconds. No signup needed.
          </p>
        </div>

        <div className="hiw__steps">
          {STEPS.map((step, i) => (
            <div key={step.number} className="hiw__step-wrapper">
              <div className="hiw__step">
                {/* Number badge */}
                <div className="hiw__step-number" style={{ color: step.color, borderColor: `${step.color}30` }}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="hiw__step-icon" style={{ background: `${step.color}12`, color: step.color }}>
                  <step.icon size={30} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.description}</p>

                {/* Feature points */}
                <ul className="hiw__points">
                  {step.points.map((pt) => (
                    <li key={pt} className="hiw__point">
                      <CheckCircle size={13} style={{ color: step.color, flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector between steps */}
              {i < STEPS.length - 1 && (
                <div className="hiw__connector" aria-hidden="true">
                  <div className="hiw__connector-line" style={{ background: `linear-gradient(90deg, ${step.color}40, ${STEPS[i+1].color}40)` }} />
                  <ArrowRight size={16} style={{ color: step.color }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
