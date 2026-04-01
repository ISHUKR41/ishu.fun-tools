import { useEffect, useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Search, Command, Sparkles, ArrowRight, FileText, Zap, Globe, Star, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from 'countup.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ParticleErrorBoundary from '../3d/ParticleErrorBoundary';
import './HeroSection.css';

const ParticleBackground = lazy(() => import('../3d/ParticleBackground'));

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

// SVG floating shapes - GPU friendly (transform only)
function FloatingShapes() {
  return (
    <svg
      className="hero__floating-shapes"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Animated circles */}
      <circle className="fshape fshape--1" cx="100" cy="180" r="4" fill="rgba(99,102,241,0.5)" />
      <circle className="fshape fshape--2" cx="1100" cy="120" r="3" fill="rgba(139,92,246,0.5)" />
      <circle className="fshape fshape--3" cx="950" cy="450" r="5" fill="rgba(236,72,153,0.4)" />
      <circle className="fshape fshape--4" cx="80" cy="500" r="3.5" fill="rgba(99,102,241,0.4)" />
      <circle className="fshape fshape--5" cx="600" cy="60" r="2.5" fill="rgba(139,92,246,0.6)" />
      {/* Cross shapes */}
      <path className="fshape fshape--6" d="M200 350 h12 M206 344 v12" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      <path className="fshape fshape--7" d="M980 300 h10 M985 295 v10" stroke="rgba(236,72,153,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Ring shapes */}
      <circle cx="260" cy="500" r="18" fill="none" stroke="rgba(99,102,241,0.12)" strokeWidth="1" className="fshape fshape--8" />
      <circle cx="900" cy="200" r="24" fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="1" className="fshape fshape--9" />
      {/* Lines */}
      <line x1="0" y1="220" x2="1200" y2="380" stroke="rgba(99,102,241,0.04)" strokeWidth="1" />
      <line x1="0" y1="400" x2="1200" y2="200" stroke="rgba(139,92,246,0.03)" strokeWidth="1" />
    </svg>
  );
}

export default function HeroSection({ onSearch }) {
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const counterRefs = useRef([]);
  const heroRef = useRef();
  const badgeRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const searchRef = useRef();
  const trendingRef = useRef();
  const statsContainerRef = useRef();

  // CountUp animations
  useEffect(() => {
    if (statsInView) {
      STATS.forEach((stat, i) => {
        const el = counterRefs.current[i];
        if (el) {
          const cu = new CountUp(el, stat.value, {
            duration: 2.2,
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

  // GSAP entrance + ScrollTrigger parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1) Entrance timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        delay: 0.1,
      });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65 }
      )
      .fromTo(
        titleRef.current.querySelectorAll('.hero__title-line'),
        { opacity: 0, y: 50, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.75, stagger: 0.12 },
        '-=0.35'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.4'
      )
      .fromTo(
        searchRef.current,
        { opacity: 0, y: 20, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        trendingRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45 },
        '-=0.25'
      )
      .fromTo(
        statsContainerRef.current?.querySelectorAll('.hero__stat') || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
        '-=0.2'
      );

      // 2) Parallax on scroll — orbs move at different speeds
      gsap.to('.hero__gradient-orb--1', {
        yPercent: -20,
        xPercent: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
      gsap.to('.hero__gradient-orb--2', {
        yPercent: 15,
        xPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2.5,
        },
      });
      gsap.to('.hero__gradient-orb--3', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // 3) Floating shapes handled by CSS animations (see HeroSection.css .fshape--N)

      // 4) Content parallax (text moves up slightly on scroll)
      gsap.to('.hero__content', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero-section" ref={heroRef}>
      {/* Three.js Particle Background */}
      <ParticleErrorBoundary>
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      </ParticleErrorBoundary>

      {/* Background */}
      <div className="hero__bg">
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__gradient-orb hero__gradient-orb--3" />
        <div className="hero__grid-pattern" />
        <FloatingShapes />
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__badge" ref={badgeRef} style={{ opacity: 0 }}>
          <Sparkles size={14} />
          <span>120+ Professional PDF Tools — Free Forever</span>
        </div>

        <h1 className="hero__title" ref={titleRef}>
          <span className="hero__title-line">
            Every PDF Tool
          </span>
          <span className="hero__title-line hero__title-gradient">
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

        <div className="hero__stats" ref={(el) => { statsRef(el); statsContainerRef.current = el; }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className="hero__stat">
              <stat.icon size={18} className="hero__stat-icon" />
              <span className="hero__stat-value" ref={(el) => (counterRefs.current[i] = el)}>
                0
              </span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
