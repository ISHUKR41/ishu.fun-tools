import { useEffect, useRef } from 'react';
import { Search, Command, Sparkles, ArrowRight, FileText, Zap, Globe, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from 'countup.js';
import './HeroSection.css';

const TRENDING_TOOLS = [
  { label: 'Merge PDF', slug: 'merge-pdf' },
  { label: 'Compress PDF', slug: 'compress-pdf' },
  { label: 'PDF to Word', slug: 'pdf-to-word' },
  { label: 'OCR PDF', slug: 'ocr-pdf' },
  { label: 'Sign PDF', slug: 'sign-pdf' },
];

const STATS = [
  { icon: FileText, value: 50, suffix: 'M+', label: 'Files Processed' },
  { icon: Zap, value: 120, suffix: '+', label: 'Free Tools' },
  { icon: Globe, value: 195, suffix: '', label: 'Countries' },
  { icon: Star, value: 4.9, suffix: '/5', label: 'User Rating', decimals: 1 },
];

export default function HeroSection({ onSearch }) {
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const counterRefs = useRef([]);

  useEffect(() => {
    if (statsInView) {
      STATS.forEach((stat, i) => {
        const el = counterRefs.current[i];
        if (el) {
          const cu = new CountUp(el, stat.value, {
            duration: 2.5,
            decimalPlaces: stat.decimals || 0,
            separator: ',',
            suffix: stat.suffix,
            useEasing: true,
            enableScrollSpy: false,
          });
          cu.start();
        }
      });
    }
  }, [statsInView]);

  return (
    <section className="hero" id="hero-section">
      {/* Background elements */}
      <div className="hero__bg">
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__gradient-orb hero__gradient-orb--3" />
        <div className="hero__grid-pattern" />
      </div>

      <div className="hero__content container">
        {/* Eyebrow badge */}
        <div className="hero__badge animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Sparkles size={14} />
          <span>120+ Professional PDF Tools — Free Forever</span>
        </div>

        {/* Headline */}
        <h1 className="hero__title">
          <span className="hero__title-line animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Every PDF Tool
          </span>
          <span className="hero__title-line hero__title-gradient animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            You'll Ever Need.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Merge, split, compress, convert — 120+ powerful tools.
          <br />
          Free, fast, and secure. Used by millions worldwide.
        </p>

        {/* Search bar */}
        <div className="hero__search-wrapper animate-fade-in-up" style={{ animationDelay: '0.65s' }}>
          <div className="hero__search" id="hero-search">
            <Search size={18} className="hero__search-icon" />
            <input
              type="text"
              placeholder="Search 120+ tools... (e.g. merge, compress, convert)"
              className="hero__search-input"
              onChange={(e) => onSearch?.(e.target.value)}
              aria-label="Search PDF tools"
            />
            <kbd className="hero__search-kbd">
              <Command size={11} />K
            </kbd>
          </div>
        </div>

        {/* Trending tags */}
        <div className="hero__trending animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <span className="hero__trending-label">Popular:</span>
          <div className="hero__trending-tags">
            {TRENDING_TOOLS.map((tool) => (
              <a key={tool.slug} href={`#${tool.slug}`} className="hero__trending-tag">
                {tool.label}
                <ArrowRight size={12} />
              </a>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="hero__stats" ref={statsRef}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className="hero__stat animate-fade-in-up" style={{ animationDelay: `${0.9 + i * 0.1}s` }}>
              <stat.icon size={18} className="hero__stat-icon" />
              <span
                className="hero__stat-value"
                ref={(el) => (counterRefs.current[i] = el)}
              >
                0
              </span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
