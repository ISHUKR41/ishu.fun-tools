import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Command, Menu, X, FileText } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="ishu.fun home">
          <div className="navbar__logo-icon">
            <FileText size={20} strokeWidth={2.5} />
          </div>
          <span className="navbar__logo-text">
            ishu<span className="navbar__logo-dot">.fun</span>
          </span>
        </Link>

        {/* Nav Links - Desktop */}
        <div className="navbar__links">
          <Link to="/tools" className="navbar__link navbar__link--active">
            Tools
            <span className="navbar__link-badge">120+</span>
          </Link>
          <a href="https://ishu.fun" className="navbar__link" target="_blank" rel="noopener noreferrer">Home</a>
          <a href="https://ishu.fun/blog" className="navbar__link" target="_blank" rel="noopener noreferrer">Blog</a>
          <a href="https://ishu.fun/about" className="navbar__link" target="_blank" rel="noopener noreferrer">About</a>
        </div>

        {/* Right side */}
        <div className="navbar__actions">
          <button className="navbar__search-trigger" id="search-trigger" aria-label="Search tools">
            <Search size={16} />
            <span>Search tools...</span>
            <kbd className="navbar__kbd">
              <Command size={10} />K
            </kbd>
          </button>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <Link to="/tools" className="navbar__mobile-link">Tools</Link>
          <a href="https://ishu.fun" className="navbar__mobile-link">Home</a>
          <a href="https://ishu.fun/blog" className="navbar__mobile-link">Blog</a>
          <a href="https://ishu.fun/about" className="navbar__mobile-link">About</a>
        </div>
      )}
    </nav>
  );
}
