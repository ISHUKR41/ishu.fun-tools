import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getToolBySlug } from '../../data/tools.data';
import './RelatedTools.css';

export default function RelatedTools({ slugs }) {
  const tools = slugs.map(s => getToolBySlug(s)).filter(Boolean);

  if (tools.length === 0) return null;

  return (
    <section className="related-tools section-sm">
      <div className="container">
        <h2 className="related-tools__title">You might also need</h2>
        <div className="related-tools__grid">
          {tools.map((tool, i) => {
            const Icon = LucideIcons[tool.icon] || LucideIcons.FileText;
            return (
              <motion.div
                key={tool.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link to={`/tools/${tool.slug}`} className="related-card" style={{ '--rc-color': tool.color }}>
                  <div className="related-card__icon" style={{ background: `${tool.color}12` }}>
                    <Icon size={22} style={{ color: tool.color }} strokeWidth={1.8} />
                  </div>
                  <div className="related-card__info">
                    <h3 className="related-card__name">{tool.name}</h3>
                    <p className="related-card__desc">{tool.description}</p>
                  </div>
                  <ArrowRight size={16} className="related-card__arrow" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
