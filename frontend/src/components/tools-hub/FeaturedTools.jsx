import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Flame, TrendingUp } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { getFeaturedTools } from '../../data/tools.data';
import './FeaturedTools.css';

gsap.registerPlugin(ScrollTrigger);

const FEATURED_GRADIENTS = [
  'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(99,102,241,0.05) 100%)',
  'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(168,85,247,0.05) 100%)',
  'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.05) 100%)',
  'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.05) 100%)',
  'linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(244,63,94,0.05) 100%)',
  'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(59,130,246,0.05) 100%)',
];

export default function FeaturedTools() {
  const featured = getFeaturedTools();
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.featured__header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.featured__header', start: 'top 85%', once: true },
        }
      );

      // Cards stagger
      gsap.fromTo('.featured__card',
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out',
          stagger: { amount: 0.4, from: 'start' },
          scrollTrigger: { trigger: '.featured__grid', start: 'top 80%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="featured section-sm" id="featured-tools" ref={sectionRef}>
      <div className="container">
        <div className="featured__header">
          <div className="featured__label">
            <Flame size={15} />
            <span>Most Popular This Month</span>
          </div>
          <Link to="/tools" className="featured__see-all">
            <TrendingUp size={14} />
            See all 120+ tools
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="featured__grid">
          {featured.map((tool, i) => {
            const Icon = LucideIcons[tool.icon] || LucideIcons.FileText;

            return (
              <div
                key={tool.slug}
                className="featured__card"
                style={{
                  '--featured-bg': FEATURED_GRADIENTS[i] || FEATURED_GRADIENTS[0],
                  '--featured-color': tool.color,
                }}
              >
                <Link to={`/tools/${tool.slug}`} className="featured__card-link" aria-label={tool.name} />

                <div className="featured__card-icon" style={{ background: `${tool.color}18` }}>
                  <Icon size={26} style={{ color: tool.color }} strokeWidth={1.8} />
                </div>

                <div className="featured__card-content">
                  <h3 className="featured__card-name">{tool.name}</h3>
                  <p className="featured__card-desc">{tool.description}</p>
                </div>

                <div className="featured__card-footer">
                  <div className="featured__card-stats">
                    <span className="featured__card-rating">
                      <Star size={11} fill="currentColor" /> {tool.rating}
                    </span>
                    <span className="featured__card-sep">·</span>
                    <span className="featured__card-uses">{tool.uses}/mo</span>
                  </div>
                  <span className="featured__card-cta">
                    Use free <ArrowRight size={13} />
                  </span>
                </div>

                {tool.isAI && (
                  <span className="featured__ai-badge">
                    <Sparkles size={10} /> AI
                  </span>
                )}
                {tool.isNew && (
                  <span className="featured__new-badge">New</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
