import { Shield, Trash2, UserX, Lock, Zap, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import Globe from '../3d/Globe';
import './TrustSection.css';

const TRUST_ITEMS = [
  {
    icon: Lock,
    title: 'Bank-Level Encryption',
    description: 'Files encrypted in transit (TLS 1.3) and at rest. Enterprise-grade security.',
    color: '#6366F1',
  },
  {
    icon: Trash2,
    title: 'Auto-Deleted in 1 Hour',
    description: 'We never store your documents permanently. All files are auto-deleted.',
    color: '#EF4444',
  },
  {
    icon: UserX,
    title: 'No Registration',
    description: 'Use any tool without creating an account. Completely anonymous.',
    color: '#10B981',
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'We do not read or interpret your data. Your files are your property.',
    color: '#F59E0B',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Average processing time under 5 seconds. No queues, no waiting.',
    color: '#EC4899',
  },
  {
    icon: Server,
    title: 'Global Delivery',
    description: 'Deployed on edge networks globally. Always available when you need it.',
    color: '#06B6D4',
  },
];

export default function TrustSection() {
  return (
    <section className="trust section" id="trust-section">
      <div className="container">
        <div className="trust__layout">
          <div className="trust__content">
            <div className="trust__header trust__header--left">
              <h2 className="trust__title">
                Global Infrastructure, <br />
                <span className="gradient-text">Local Speed</span>
              </h2>
              <p className="trust__subtitle">
                Every file is processed securely via our global edge network and deleted automatically. Trusted worldwide.
              </p>
            </div>

            <div className="trust__grid trust__grid--2col">
              {TRUST_ITEMS.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="trust__card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <div className="trust__card-icon" style={{ background: `${item.color}12`, color: item.color }}>
                    <item.icon size={22} />
                  </div>
                  <h3 className="trust__card-title">{item.title}</h3>
                  <p className="trust__card-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="trust__globe-wrapper"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Globe />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
