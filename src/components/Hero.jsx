import React from 'react';
import { IsometricHeroArt } from './IsometricHeroArt';
import { MapPin, Calendar, Award, ArrowRight, Sparkles, FileText, Download, Layers, ShieldCheck } from 'lucide-react';

export const Hero = ({ onRegisterClick }) => {
  return (
    <section style={{ position: 'relative', paddingTop: '7.5rem', paddingBottom: '3.5rem', overflow: 'hidden' }}>
      <div className="container">

        {/* Main 2-Column Hero Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
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
              <span style={{ color: '#059669' }}>LogicSprint</span>
              <span style={{ color: '#9ca3af' }}>|</span>
              <span style={{ color: '#047857' }}>DevSprint</span>
              <span style={{ color: '#9ca3af' }}>|</span>
              <span style={{ color: '#10b981' }}>AI Prototyping</span>
              <span style={{ color: '#9ca3af' }}>|</span>
              <span style={{ color: '#064e3b' }}>Live Defense</span>
            </div>

            <p style={{
              fontSize: '0.98rem',
              color: '#4b5563',
              lineHeight: 1.65,
              maxWidth: '475px',
              marginBottom: '1.75rem'
            }}>
              Join us to discover new ways to build and innovate. A multidisciplinary sprint: build your AI prototype beforehand from home, qualify for the Top 5 shortlist in Phase 1 (100 Pts), and compete for the Top 3 Winners based on Round 1 (100 Pts) + Round 2 Phase 2 Stage Defense (100 Pts) = 200 Final Points.
            </p>

            {/* CTA & Official Document Download Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
              <button
                onClick={onRegisterClick}
                className="btn-dribbble btn-dribbble-primary"
                style={{ padding: '0.85rem 2.25rem', fontSize: '1rem' }}
              >
                <span>Register Team</span>
              </button>

              <a
                href="/docs/DevSpark_Official_Rules.pdf"
                download="DevSpark_Official_Rules_Matrix.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: '#ffffff',
                  border: '1px solid rgba(5, 150, 105, 0.3)',
                  color: '#059669',
                  padding: '0.8rem 1.25rem',
                  borderRadius: '6px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(6, 78, 59, 0.05)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#ecfdf5'; e.currentTarget.style.borderColor = '#059669'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = 'rgba(5, 150, 105, 0.3)'; }}
              >
                <Download size={15} />
                <span>Rules Matrix (PDF)</span>
              </a>

              <a
                href="/docs/DevSpark_Problem_Statements.pdf"
                download="DevSpark_Problem_Statements.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: '#ffffff',
                  border: '1px solid rgba(5, 150, 105, 0.3)',
                  color: '#047857',
                  padding: '0.8rem 1.25rem',
                  borderRadius: '6px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(6, 78, 59, 0.05)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#ecfdf5'; e.currentTarget.style.borderColor = '#047857'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = 'rgba(5, 150, 105, 0.3)'; }}
              >
                <FileText size={15} />
                <span>Problem Statements (PDF)</span>
              </a>
            </div>
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
              09:30 AM – 02:30 PM
            </div>
            <div style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>
              Reporting: 09:30 AM Sharp
            </div>
          </div>

          {/* 3. Format & Scoring Column */}
          <div>
            <div style={{ color: '#047857', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              Architecture
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2e22', lineHeight: 1.3 }}>
              2 Sprint Stages <br />
              200-Pt Final Evaluation
            </div>
            <div style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>
              R1 (100 Pts) + R2 Phase 2 (100 Pts) = Top 3 Winners
            </div>
          </div>

          {/* 4. Team Standards Column */}
          <div>
            <div style={{ color: '#10b981', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              Team Size
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2e22', lineHeight: 1.3 }}>
              2 to 3 Members <br />
              Multidisciplinary
            </div>
            <div style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>
              100% Certified for All Teams
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
