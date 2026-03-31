import { FileText, Globe2, ExternalLink, Heart, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories.data';
import './Footer.css';

const footerLinks = {
  tools: [
    { label: 'Merge PDF', href: '/tools/merge-pdf' },
    { label: 'Compress PDF', href: '/tools/compress-pdf' },
    { label: 'PDF to Word', href: '/tools/pdf-to-word' },
    { label: 'Split PDF', href: '/tools/split-pdf' },
    { label: 'Sign PDF', href: '/tools/sign-pdf' },
    { label: 'OCR PDF', href: '/tools/ocr-pdf' },
    { label: 'All Tools →', href: '/tools' },
  ],
  company: [
    { label: 'About', href: 'https://ishu.fun/about' },
    { label: 'Blog', href: 'https://ishu.fun/blog' },
    { label: 'Contact', href: 'https://ishu.fun/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  resources: [
    { label: 'API Documentation', href: '/api' },
    { label: 'Help Center', href: '/help' },
    { label: 'Status Page', href: '/status' },
    { label: 'Changelog', href: '/changelog' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer__inner container">
        {/* Top section */}
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <FileText size={18} strokeWidth={2.5} />
              </div>
              <span className="footer__logo-text">
                ishu<span className="gradient-text">.fun</span>
              </span>
            </div>
            <p className="footer__tagline">
              120+ free PDF tools. No signup required.<br/>
              Fast, secure, and works on any device.
            </p>
            <div className="footer__socials">
              <a href="https://github.com" className="footer__social" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Globe2 size={18} />
              </a>
              <a href="https://twitter.com" className="footer__social" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="footer__links-grid">
            <div className="footer__col">
              <h4 className="footer__col-title">Popular Tools</h4>
              {footerLinks.tools.map(link => (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Company</h4>
              {footerLinks.company.map(link => (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Resources</h4>
              {footerLinks.resources.map(link => (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="footer__categories">
          {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
            <span key={cat.id} className="footer__category-pill" style={{ color: cat.color }}>
              {cat.label}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} ishu.fun — All rights reserved.
          </p>
          <p className="footer__made">
            Made with <Heart size={12} className="footer__heart" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
