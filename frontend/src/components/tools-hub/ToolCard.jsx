import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Flame } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import './ToolCard.css';

const ToolCard = memo(function ToolCard({ tool, index }) {
  const Icon = LucideIcons[tool.icon] || LucideIcons.FileText;
  const groupDelay = Math.min(Math.floor(index / 4) * 0.06, 0.24);

  return (
    <motion.div
      className="tool-card"
      id={`tool-${tool.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: '0px 0px -30px 0px' }}
      transition={{ duration: 0.35, delay: groupDelay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.18 } }}
      style={{ '--card-color': tool.color, position: 'relative' }}
    >
      <Link to={`/tools/${tool.slug}`} style={{position: 'absolute', inset: 0, zIndex: 10}} aria-label={tool.name} />

      {/* Glow effect on hover */}
      <div className="tool-card__glow" />

      {/* Header row */}
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

      {/* Content */}
      <h3 className="tool-card__name">{tool.name}</h3>
      <p className="tool-card__description">{tool.description}</p>

      {/* Footer */}
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
    </motion.div>
  );
});

export default ToolCard;
