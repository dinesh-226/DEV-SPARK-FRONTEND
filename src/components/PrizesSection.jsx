import React from 'react';
import { Trophy, Award, Medal, CheckCircle2 } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const PrizesSection = () => {
  const prizes = [
    {
      position: '1st Place',
      title: 'Grand Champion',
      amount: '₹10,000',
      tag: 'GOLD',
      trophy: 'Winner Trophy',
      border: '#10b981',
      accentColor: '#047857', // Forest Gold/Emerald
      isFeatured: true
    },
    {
      position: '2nd Place',
      title: '1st Runner-Up',
      amount: '₹5,500',
      tag: 'SILVER',
      trophy: 'Runner-Up Trophy',
      border: '#059669',
      accentColor: '#059669' // Emerald Green
    },
    {
      position: '3rd Place',
      title: '2nd Runner-Up',
      amount: '₹3,500',
      tag: 'BRONZE',
      trophy: '2nd Runner-Up Trophy',
      border: '#34d399',
      accentColor: '#059669' // Mint Green
    }
  ];

  return (
    <section id="prizes" style={{ padding: '5.5rem 0', background: '#e8f2ed', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="crimson-pill" style={{ marginBottom: '0.6rem' }}>
            PRIZES & REWARDS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0f2e22', marginBottom: '0.5rem' }}>
            ₹19,000 Cash Prize Pool
          </h2>
          <p style={{ color: '#4b5563', maxWidth: '620px', fontSize: '0.98rem' }}>
            Top 3 cumulative team awards with official college credentials and trophies.
          </p>
        </div>

        {/* 3 Podium Cards on Pure White Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          {prizes.map((p) => (
            <TiltCard3D
              key={p.position}
              className="dribbble-card"
              maxTilt={p.isFeatured ? 14 : 10}
              style={{
                border: `1.5px solid ${p.isFeatured ? '#059669' : 'rgba(5, 150, 105, 0.18)'}`,
                borderTop: `4.5px solid ${p.border}`,
                background: '#ffffff',
                padding: '2.25rem 2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: p.isFeatured ? '0 12px 35px rgba(5, 150, 105, 0.16)' : '0 4px 20px rgba(6, 78, 59, 0.05)'
              }}
            >
              <div>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: p.accentColor,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                  marginBottom: '0.4rem'
                }}>
                  {p.position.toUpperCase()} • {p.tag}
                </div>

                <h3 style={{ fontSize: '1.4rem', color: '#0f2e22', marginBottom: '1.25rem' }}>
                  {p.title}
                </h3>

                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: p.accentColor,
                  lineHeight: 1,
                  marginBottom: '1.5rem'
                }}>
                  {p.amount}
                </div>
              </div>

              <div style={{
                borderTop: '1px solid rgba(5, 150, 105, 0.08)',
                paddingTop: '1rem',
                fontSize: '0.85rem',
                color: '#374151',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0f2e22', fontWeight: 600 }}>
                  <Trophy size={15} color={p.accentColor} />
                  <span>{p.trophy}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color={p.accentColor} />
                  <span>Certificate of Excellence</span>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Certificate Guarantee */}
        <div style={{
          background: '#ffffff',
          border: '1px solid rgba(5, 150, 105, 0.18)',
          borderRadius: '10px',
          padding: '1.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: '0 4px 15px rgba(6, 78, 59, 0.05)'
        }}>
          <Medal size={24} color="#059669" style={{ flexShrink: 0 }} />
          <div>
            <div style={{ color: '#0f2e22', fontWeight: 700, fontSize: '0.95rem' }}>
              Official Certificate of Participation for All Attendees
            </div>
            <div style={{ color: '#4b5563', fontSize: '0.85rem' }}>
              Issued by Department of Computer Science & Engineering, ABIET Pathankot for your academic & NAAC portfolio.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
