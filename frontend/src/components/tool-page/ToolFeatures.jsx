import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import './ToolFeatures.css';

export default function ToolFeatures({ features, toolColor }) {
  return (
    <section className="tool-features section-sm">
      <div className="container">
        <h2 className="tool-features__title">Why use this tool?</h2>
        <div className="tool-features__grid">
          {features.map((feat, i) => {
            const Icon = LucideIcons[feat.icon] || LucideIcons.Check;
            return (
              <motion.div
                key={feat.title}
                className="tool-feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="tool-feature__icon" style={{ color: toolColor, background: `${toolColor}10` }}>
                  <Icon size={20} />
                </div>
                <h3 className="tool-feature__name">{feat.title}</h3>
                <p className="tool-feature__desc">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
