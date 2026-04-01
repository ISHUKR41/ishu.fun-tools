import { useRef, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Flame } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import './ToolCard.css';

const ToolCard = memo(function ToolCard({ tool, index }) {
  const Icon = LucideIcons[tool.icon] || LucideIcons.FileText;
  const cardRef = useRef(null);
  const groupDelay = Math.min((index % 4) * 40, 120);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('tool-card--visible');
          io.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '50px 0px -10px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="tool-card"
      id={`tool-${tool.slug}`}
      style={{ '--card-color': tool.color, '--card-delay': `${groupDelay}ms` }}
    >
      <Link to={`/tools/${tool.slug}`} style={{ position: 'absolute', inset: 0, zIndex: 10 }} aria-label={tool.name} />

      <div className="tool-card__glow" />

      <div className="tool-card__header">
        <div className="tool-card__icon-wrap" style={{ background: `${tool.color}15` }}>
          <Icon size={20} style={{ color: tool.color }} strokeWidth={2} />
        </div>
        <div className="tool-card__badges">
          {tool.isNew && (
            <span className="tool-card__badge tool-card__badge--new">
              <Sparkles size={10} /> New
            </span>
          )}
          {tool.isPopular && (
            <span className="tool-card__badge tool-card__badge--popular">
              <Flame size={10} /> Popular
            </span>
          )}
          {tool.isAI && (
            <span className="tool-card__badge tool-card__badge--ai">
              <Sparkles size={10} /> AI
            </span>
          )}
        </div>
      </div>

      <h3 className="tool-card__name">{tool.name}</h3>
      <p className="tool-card__description">{tool.description}</p>

      <div className="tool-card__footer">
        <div className="tool-card__meta">
          <span className="tool-card__rating">
            <Star size={12} fill="currentColor" /> {tool.rating}
          </span>
          <span className="tool-card__uses">{tool.uses} uses</span>
        </div>
        <span className="tool-card__cta">
          Use Tool <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
});

export default ToolCard;
