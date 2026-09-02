import React from 'react';
import { Users, Shield, Sparkles } from 'lucide-react';
import { Interactive3DCard } from './Interactive3DCard';

export const Committee = () => {
  const studentCoordinators = [
    {
      name: 'Rishabh & Dinesh',
      role: 'Lead Student Coordinators',
      desc: 'Overall event logistics, timetable synchronization, and campus operations oversight.',
      pillColor: 'cyan'
    },
    {
      name: 'Love & Nishant',
      role: 'Technical Operations Leads',
      desc: 'Coding diagnostics sandbox, test suite repositories, and local network contingency.',
      pillColor: 'purple'
    },
    {
      name: 'Manya & Shivani',
      role: 'Event Hosts & Stage Directors',
      desc: 'Inaugural ceremony, rules briefing, interactive interlude, and valedictory awards.',
      pillColor: 'mint'
    }
  ];

  return (
    <section id="committee" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="labs-pill active" style={{ marginBottom: '0.75rem' }}>
            <Users size={13} />
            <span>ORGANIZING BODY</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: '0.8rem' }}>
            Powered by <span className="gradient-labs-ai">Team Stack Tracers</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
            Department of Computer Science & Engineering • Aman Bhalla Institute of Engineering & Technology, Kotli, Pathankot.
          </p>
        </div>

        {/* Institutional Leadership Banner */}
        <div style={{ maxWidth: '900px', margin: '0 auto 2.5rem' }}>
          <Interactive3DCard style={{
            padding: '2rem',
            border: '1.5px solid rgba(56, 189, 248, 0.4)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.9) 100%)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Shield size={28} color="#0284c7" />
              </div>
              <div>
                <span className="labs-pill cyan" style={{ fontSize: '0.72rem', padding: '0.15rem 0.55rem', marginBottom: '0.35rem', fontWeight: 700 }}>
                  ACADEMIC & INSTITUTIONAL PATRONAGE
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#0f172a', margin: '0.15rem 0' }}>
                  Dept of Computer Science & Engineering (ABIET)
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>
                  Academic sanction, official NAAC/NBA certification issuance, and institutional faculty committee.
                </p>
              </div>
            </div>
          </Interactive3DCard>
        </div>

        {/* Student Leads Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          {studentCoordinators.map((c, i) => (
            <Interactive3DCard key={i} style={{ padding: '1.75rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(241, 245, 249, 0.9)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Sparkles size={18} color="#7c3aed" />
              </div>
              <div style={{ fontSize: '0.75rem', color: '#7c3aed', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                {c.role}
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#0f172a', margin: '0 0 0.5rem' }}>
                {c.name}
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                {c.desc}
              </p>
            </Interactive3DCard>
          ))}
        </div>

      </div>
    </section>
  );
};
