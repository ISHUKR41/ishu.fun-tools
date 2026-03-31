import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Flame } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { getFeaturedTools } from '../../data/tools.data';
import './FeaturedTools.css';

const FEATURED_GRADIENTS = [
  'linear-gradient(135deg, #3B82F620, #6366F110)',
  'linear-gradient(135deg, #8B5CF620, #A855F710)',
  'linear-gradient(135deg, #3B82F620, #06B6D410)',
  'linear-gradient(135deg, #6366F120, #8B5CF610)',
  'linear-gradient(135deg, #EC489920, #F43F5E10)',
  'linear-gradient(135deg, #6366F120, #3B82F610)',
];

export default function FeaturedTools() {
  const featured = getFeaturedTools();

  return (
    <section className="featured section-sm" id="featured-tools">
      <div className="container">
        <div className="featured__header">
          <div className="featured__label">
            <Flame size={16} />
            <span>Most Popular</span>
          </div>
        </div>

        <div className="featured__grid">
          {featured.map((tool, i) => {
            const Icon = LucideIcons[tool.icon] || LucideIcons.FileText;

            return (
              <motion.div
                key={tool.slug}
                className="featured__card"
                style={{ 
                  '--featured-bg': FEATURED_GRADIENTS[i] || FEATURED_GRADIENTS[0], 
                  '--featured-color': tool.color, 
                  position: 'relative'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <Link to={`/tools/${tool.slug}`} style={{ position: 'absolute', inset: 0, zIndex: 10 }} aria-label={tool.name} />
                
                <div className="featured__card-icon" style={{ background: `${tool.color}18` }}>
                  <Icon size={28} style={{ color: tool.color }} strokeWidth={1.8} />
                </div>
                
                <div className="featured__card-content">
                  <h3 className="featured__card-name">{tool.name}</h3>
                  <p className="featured__card-desc">{tool.description}</p>
                </div>

                <div className="featured__card-footer">
                  <span className="featured__card-uses">{tool.uses} uses/mo</span>
                  <span className="featured__card-cta">
                    Use free <ArrowRight size={14} />
                  </span>
                </div>

                {tool.isAI && (
                  <span className="featured__ai-badge">
                    <Sparkles size={10} /> AI
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
