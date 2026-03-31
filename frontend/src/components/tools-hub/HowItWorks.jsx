import { Upload, Settings, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const STEPS = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload your file',
    description: 'Drag & drop or browse. Supports PDF, images, documents, and more.',
    color: '#6366F1',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Configure options',
    description: 'Customize settings for your specific needs. Quick and intuitive.',
    color: '#8B5CF6',
  },
  {
    icon: Download,
    number: '03',
    title: 'Download result',
    description: 'Get your processed file instantly. No email, no waiting.',
    color: '#EC4899',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <h2 className="how-it-works__title">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="how-it-works__subtitle">
            Process any file in under 30 seconds. It's that simple.
          </p>
        </div>

        <div className="how-it-works__steps">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="how-it-works__step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="how-it-works__step-number" style={{ color: step.color }}>
                {step.number}
              </div>
              <div className="how-it-works__step-icon" style={{ background: `${step.color}12`, color: step.color }}>
                <step.icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-desc">{step.description}</p>
              
              {i < STEPS.length - 1 && (
                <div className="how-it-works__connector">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
