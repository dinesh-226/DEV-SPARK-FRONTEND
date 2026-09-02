import React from 'react';
import { IsometricHeroArt } from './IsometricHeroArt';
import { MapPin, Calendar, Award, ArrowRight, Sparkles } from 'lucide-react';

export const Hero = ({ onRegisterClick }) => {
  return (
    <section style={{ position: 'relative', paddingTop: '7.5rem', paddingBottom: '3.5rem', overflow: 'hidden' }}>
      <div className="container">

        {/* Main 2-Column Hero Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>

          {/* Left Column: Text & Register */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: '#ecfdf5',
              border: '1px solid rgba(5, 150, 105, 0.28)',
              color: '#059669',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              marginBottom: '1rem'
            }}>
              <Sparkles size={13} color="#059669" />
              <span>TEAM STACK TRACERS • CSE DEPT</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
              lineHeight: 1.12,
              fontWeight: 800,
              color: '#0f2e22',
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-heading)'
            }}>
              DevSpark <br />
              <span className="green-gradient-text">Innovation Sprint</span>
            </h1>

            {/* Green Tagline */}
            <div style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              marginBottom: '1.25rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              alignItems: 'center'
            }}>
              <span style={{ color: '#059669' }}>Logic</span>
              <span style={{ color: '#9ca3af' }}>|</span>
              <span style={{ color: '#047857' }}>Diagnostics</span>
              <span style={{ color: '#9ca3af' }}>|</span>
              <span style={{ color: '#10b981' }}>AI Prototyping</span>
              <span style={{ color: '#9ca3af' }}>|</span>
              <span style={{ color: '#064e3b' }}>Defense</span>
            </div>

            <p style={{
              fontSize: '0.98rem',
              color: '#4b5563',
              lineHeight: 1.65,
              maxWidth: '455px',
              marginBottom: '2rem'
            }}>
              Join us to discover new ways to build and innovate. A multidisciplinary 500-point sprint bridging foundational logic, problem diagnostics, and generative AI prototypes by Team Stack Tracers at ABIET Pathankot.
            </p>

            <button
              onClick={onRegisterClick}
              className="btn-dribbble btn-dribbble-primary"
              style={{ padding: '0.9rem 2.5rem', fontSize: '1.05rem' }}
            >
              <span>Register</span>
            </button>
          </div>

          {/* Right Column: Isometric Line-Art Illustration */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IsometricHeroArt />
          </div>

        </div>

        {/* Bottom Information Row (Green & White Theme Cards) */}
        <div style={{
          borderTop: '1px solid rgba(5, 150, 105, 0.15)',
          paddingTop: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>

          {/* 1. Stylized Map Card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(5, 150, 105, 0.25)',
            borderRadius: '10px',
            padding: '1.25rem',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '130px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 15px rgba(6, 78, 59, 0.05)'
          }}>
            {/* SVG Mini Map Grid Lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3, pointerEvents: 'none' }}>
              <line x1="20" y1="10" x2="180" y2="10" stroke="#6b7280" strokeWidth="1" />
              <line x1="20" y1="50" x2="220" y2="50" stroke="#6b7280" strokeWidth="1" />
              <line x1="40" y1="10" x2="40" y2="120" stroke="#6b7280" strokeWidth="1" />
              <line x1="120" y1="10" x2="120" y2="120" stroke="#6b7280" strokeWidth="1" />
              <line x1="180" y1="30" x2="180" y2="120" stroke="#6b7280" strokeWidth="1" />

              {/* Route Path in Emerald Green */}
              <path d="M 40 30 L 70 30 L 70 90 L 110 90" stroke="#059669" strokeWidth="2.5" fill="none" />
              <circle cx="40" cy="30" r="3.5" fill="#059669" />
            </svg>

            {/* Emerald Green Venue Pin */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              background: '#059669',
              color: '#ffffff',
              padding: '0.25rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.72rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <MapPin size={11} />
              <span>MAIN AUDITORIUM</span>
            </div>

            <div style={{ position: 'relative', zIndex: 2, fontSize: '0.78rem', color: '#4b5563', marginTop: '1rem' }}>
              ABIET Campus • Kotli, Pathankot
            </div>
          </div>

          {/* 2. When? Column */}
          <div>
            <div style={{ color: '#059669', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              When?
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2e22', lineHeight: 1.3 }}>
              Master Sprint <br />
              09:00 AM – 05:15 PM
            </div>
            <div style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>
              Reporting: 09:00 AM Sharp
            </div>
          </div>

          {/* 3. Where? Column */}
          <div>
            <div style={{ color: '#047857', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              Where?
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2e22', lineHeight: 1.3 }}>
              Main Auditorium <br />
              B.Tech Building, ABIET
            </div>
            <div style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>
              Kotli, Pathankot (Punjab)
            </div>
          </div>

          {/* 4. Awards? Column */}
          <div>
            <div style={{ color: '#10b981', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              Awards?
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2e22', lineHeight: 1.3 }}>
              ₹19,000 Cash Pool <br />
              + Top 3 Trophies
            </div>
            <div style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>
              100% Certified for All
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
