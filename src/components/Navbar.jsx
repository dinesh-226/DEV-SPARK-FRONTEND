import React, { useState, useEffect } from 'react';
import { Hexagon, ShieldCheck, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export const Navbar = ({ onOpenAdmin, onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("What's that?");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "What's that?", href: '#overview' },
    { name: 'Details', href: '#details' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'FAQ', href: '#faq' }
  ];

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveTab(name);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(244, 248, 246, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(5, 150, 105, 0.15)',
        padding: '1.1rem 0',
        transition: 'all 0.2s ease',
        boxShadow: scrolled ? '0 2px 15px rgba(6, 78, 59, 0.06)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Green Themed Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 2px 8px rgba(5, 150, 105, 0.3)'
          }}>
            <Sparkles size={18} />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2e22', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
            dev<span style={{ color: '#059669' }}>spark</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.name)}
              className={`nav-link ${activeTab === link.name ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={onOpenRegister}
            className="btn-dribbble btn-dribbble-primary"
            style={{ padding: '0.55rem 1.4rem', fontSize: '0.9rem' }}
          >
            <span>Register</span>
          </button>

          <button
            onClick={onOpenAdmin}
            style={{
              background: '#ffffff',
              border: '1px solid rgba(5, 150, 105, 0.25)',
              borderRadius: '6px',
              width: '36px',
              height: '36px',
              color: '#059669',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px rgba(6, 78, 59, 0.05)'
            }}
            title="Coordinator Admin Console"
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#047857'; e.currentTarget.style.background = '#ecfdf5'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(5, 150, 105, 0.25)'; e.currentTarget.style.background = '#ffffff'; }}
          >
            <ShieldCheck size={17} />
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              color: '#0f2e22',
              cursor: 'pointer',
              display: 'none',
              padding: '0.3rem'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid rgba(5, 150, 105, 0.25)',
          padding: '1.25rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.name)}
              style={{
                color: '#0f2e22',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.4rem 0'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 959px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
