import React from 'react';
import { ShieldCheck, Sparkles, Phone, UserCheck, MessageSquare } from 'lucide-react';

export const Footer = ({ onOpenAdmin, onOpenRegister }) => {
  return (
    <footer style={{
      background: '#e8f2ed',
      borderTop: '1px solid rgba(5, 150, 105, 0.18)',
      padding: '4.5rem 0 2.5rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* 1. Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <Sparkles size={16} />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f2e22', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
                dev<span style={{ color: '#059669' }}>spark</span>
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1rem' }}>
              Intra-College Innovation & AI Sprint • Empowering multidisciplinary student builders across algorithmic logic, diagnostics, and AI working prototypes.
            </p>

            <div style={{ fontSize: '0.8rem', color: '#6b7280', fontFamily: 'var(--font-mono)' }}>
              Organized by <strong>Team Stack Tracers</strong> • Dept of CSE, ABIET Pathankot.
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#0f2e22', marginBottom: '1rem', fontWeight: 700 }}>Navigation & Docs</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
              <a href="#overview" style={{ color: '#4b5563', textDecoration: 'none' }}>What's that?</a>
              <a href="#details" style={{ color: '#4b5563', textDecoration: 'none' }}>2 Sprint Stages & 200-Pt Final Rubric</a>
              <a href="#schedule" style={{ color: '#4b5563', textDecoration: 'none' }}>Master Timeline (09:30 AM – 02:30 PM)</a>
              <a href="#mentors" style={{ color: '#4b5563', textDecoration: 'none' }}>Mentors & Event Coordinators</a>
              <a href="#faq" style={{ color: '#4b5563', textDecoration: 'none' }}>FAQ & Guidelines</a>
              <a href="/docs/DevSpark_Official_Rules.pdf" download style={{ color: '#059669', textDecoration: 'none', fontWeight: 700 }}>📄 Download Rules Matrix (PDF)</a>
              <a href="/docs/DevSpark_Problem_Statements.pdf" download style={{ color: '#047857', textDecoration: 'none', fontWeight: 700 }}>📄 Download Problem Statements (PDF)</a>
            </div>
          </div>

          {/* 3. Contact Helpdesk */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#0f2e22', marginBottom: '1rem', fontWeight: 700 }}>Contact & Helpdesk</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Student Helplines */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#4b5563', fontWeight: 700 }}>
                  Student Event Coordinators:
                </div>
                <a
                  href="tel:9464495638"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#059669',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <Phone size={13} color="#059669" />
                  <span>+91 94644 95638</span>
                </a>

                <a
                  href="tel:8198073212"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#059669',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <Phone size={13} color="#059669" />
                  <span>+91 81980 73212</span>
                </a>
              </div>
            </div>
          </div>

          {/* 4. Actions & Portals */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#0f2e22', marginBottom: '1rem', fontWeight: 700 }}>Participant Portal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={onOpenRegister}
                className="btn-dribbble btn-dribbble-primary"
                style={{ justifyContent: 'flex-start', padding: '0.65rem 1.25rem' }}
              >
                <span>Register Team</span>
              </button>

              <button
                onClick={onOpenAdmin}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(5, 150, 105, 0.22)',
                  color: '#059669',
                  borderRadius: '6px',
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 1px 3px rgba(6, 78, 59, 0.06)'
                }}
              >
                <ShieldCheck size={15} color="#059669" />
                <span>Coordinator Desk Console</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(5, 150, 105, 0.12)',
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#6b7280'
        }}>
          <div>
            © 2026 DevSpark • Department of Computer Science & Engineering, ABIET Pathankot. All rights reserved.
          </div>
          <div>
            Event Helpline: +91 94644 95638
          </div>
        </div>
      </div>
    </footer>
  );
};
