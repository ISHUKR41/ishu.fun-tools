import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Command, Sparkles, ArrowRight, FileText, Zap, Globe, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from 'countup.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './HeroSection.css';

gsap.registerPlugin(ScrollTrigger);

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
  const heroRef = useRef();
  const contentRef = useRef();
  const badgeRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const searchRef = useRef();
  const trendingRef = useRef();

  useEffect(() => {
    if (statsInView) {
      STATS.forEach((stat, i) => {
        const el = counterRefs.current[i];
        if (el) {
          const cu = new CountUp(el, stat.value, {
            duration: 2,
            decimalPlaces: stat.decimals || 0,
            separator: ',',
            suffix: stat.suffix,
            useEasing: true,
          });
          cu.start();
        }
      });
    }
  }, [statsInView]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(titleRef.current.children,
        { opacity: 0, y: 30, skewY: 1 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.7, stagger: 0.1 },
        '-=0.3'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(searchRef.current,
        { opacity: 0, y: 16, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5 },
        '-=0.2'
      )
      .fromTo(trendingRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.2'
      );

      gsap.to('.hero__gradient-orb--1', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
      gsap.to('.hero__gradient-orb--2', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero-section" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__gradient-orb hero__gradient-orb--3" />
        <div className="hero__grid-pattern" />
        <svg className="hero__svg-lines" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <line x1="0" y1="200" x2="1200" y2="400" stroke="rgba(99,102,241,0.04)" strokeWidth="1" />
          <line x1="0" y1="350" x2="1200" y2="150" stroke="rgba(139,92,246,0.03)" strokeWidth="1" />
          <circle cx="900" cy="100" r="150" stroke="rgba(99,102,241,0.05)" strokeWidth="1" fill="none" />
          <circle cx="300" cy="480" r="100" stroke="rgba(236,72,153,0.04)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="hero__content container" ref={contentRef}>
        <div className="hero__badge" ref={badgeRef} style={{ opacity: 0 }}>
          <Sparkles size={14} />
          <span>120+ Professional PDF Tools — Free Forever</span>
        </div>

        <h1 className="hero__title" ref={titleRef}>
          <span className="hero__title-line" style={{ opacity: 0 }}>
            Every PDF Tool
          </span>
          <span className="hero__title-line hero__title-gradient" style={{ opacity: 0 }}>
            You'll Ever Need.
          </span>
        </h1>

        <p className="hero__subtitle" ref={subtitleRef} style={{ opacity: 0 }}>
          Merge, split, compress, convert — 120+ powerful tools.
          <br />
          Free, fast, and secure. Used by millions worldwide.
        </p>

        <div className="hero__search-wrapper" ref={searchRef} style={{ opacity: 0 }}>
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

        <div className="hero__trending" ref={trendingRef} style={{ opacity: 0 }}>
          <span className="hero__trending-label">Popular:</span>
          <div className="hero__trending-tags">
            {TRENDING_TOOLS.map((tool) => (
              <Link key={tool.slug} to={`/tools/${tool.slug}`} className="hero__trending-tag">
                {tool.label}
                <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>

        <div className="hero__stats" ref={statsRef}>
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="hero__stat animate-fade-in-up"
              style={{ animationDelay: `${0.9 + i * 0.1}s` }}
            >
              <stat.icon size={18} className="hero__stat-icon" />
              <span className="hero__stat-value" ref={(el) => (counterRefs.current[i] = el)}>
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
