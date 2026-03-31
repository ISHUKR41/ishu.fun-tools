import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Sparkles, UserX } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import './ToolHero.css';

export default function ToolHero({ tool }) {
  const Icon = LucideIcons[tool.icon] || LucideIcons.FileText;

  return (
    <section className="tool-hero" style={{ '--tool-color': tool.color }}>
      <div className="tool-hero__bg">
        <div className="tool-hero__orb tool-hero__orb--1" />
        <div className="tool-hero__orb tool-hero__orb--2" />
        <div className="tool-hero__grid" />
      </div>

      <div className="tool-hero__content container">
        {/* Breadcrumb */}
        <motion.nav
          className="tool-hero__breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
        >
          <Link to="/" className="tool-hero__crumb">Home</Link>
          <ChevronRight size={14} />
          <Link to="/tools" className="tool-hero__crumb">Tools</Link>
          <ChevronRight size={14} />
          <span className="tool-hero__crumb tool-hero__crumb--current">{tool.name}</span>
        </motion.nav>

        {/* Icon + Title */}
        <motion.div
          className="tool-hero__icon-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: `${tool.color}15` }}
        >
          <Icon size={36} style={{ color: tool.color }} strokeWidth={1.8} />
        </motion.div>

        <motion.h1
          className="tool-hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {tool.name}{' '}
          <span className="tool-hero__title-sub">— Free Online</span>
        </motion.h1>

        <motion.p
          className="tool-hero__desc"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {tool.description}. No signup required. Fast, secure, and works on any device.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          className="tool-hero__badges"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <span className="tool-hero__trust-badge">
            <Shield size={14} /> Secure
          </span>
          <span className="tool-hero__trust-badge">
            <Sparkles size={14} /> Free Forever
          </span>
          <span className="tool-hero__trust-badge">
            <UserX size={14} /> No Signup
          </span>
        </motion.div>
      </div>
    </section>
  );
}
