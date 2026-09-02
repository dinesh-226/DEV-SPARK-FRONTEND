import React from 'react';
import { Trophy, Award, Medal, Sparkles, CheckCircle2 } from 'lucide-react';
import { Interactive3DCard } from './Interactive3DCard';

export const Prizes = () => {
  const prizeCards = [
    {
      position: '2nd Place',
      title: '1st Runner-Up',
      amount: '₹8,000',
      badge: 'SILVER PODIUM',
      trophy: 'Runner-Up Trophy',
      cert: 'Certificate of Excellence',
      color: '#0284c7',
      pillColor: 'cyan',
      bgGlow: 'rgba(56, 189, 248, 0.15)',
      order: 2
    },
    {
      position: '1st Place',
      title: 'Grand Champion',
      amount: '₹15,000',
      badge: 'GOLD CHAMPION',
      trophy: 'Winner Trophy & Accolades',
      cert: 'Certificate of Excellence',
      color: '#d97706',
      pillColor: 'amber',
      bgGlow: 'rgba(251, 191, 36, 0.2)',
      order: 1,
      isFeatured: true
    },
    {
      position: '3rd Place',
      title: '2nd Runner-Up',
      amount: '₹5,000',
      badge: 'BRONZE PODIUM',
      trophy: '2nd Runner-Up Trophy',
      cert: 'Certificate of Excellence',
      color: '#db2777',
      pillColor: 'purple',
      bgGlow: 'rgba(236, 72, 153, 0.15)',
      order: 3
    }
  ];

  return (
    <section id="prizes" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="labs-pill active" style={{ marginBottom: '0.75rem' }}>
            <Trophy size={13} />
            <span>₹28,000 CASH PRIZE REWARDS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: '0.8rem' }}>
            Awards & <span className="gradient-labs-ai">Prize Podium</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
            Celebrating top performance across logic, problem diagnostics, and AI working prototypes.
          </p>
        </div>

        {/* 3 Podium Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1.75rem',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto 3rem'
        }}>
          {prizeCards.map((item) => (
            <Interactive3DCard
              key={item.position}
              style={{
                padding: item.isFeatured ? '2.5rem 2rem' : '2rem 1.75rem',
                border: item.isFeatured ? '2px solid rgba(251, 191, 36, 0.8)' : '1px solid rgba(226, 232, 240, 0.85)',
                boxShadow: item.isFeatured ? '0 16px 40px -10px rgba(251, 191, 36, 0.25)' : '0 4px 15px rgba(0, 0, 0, 0.03)',
                transform: item.isFeatured ? 'scale(1.03)' : 'scale(1)',
                background: item.isFeatured ? 'linear-gradient(180deg, #ffffff 0%, rgba(254, 243, 199, 0.4) 100%)' : '#ffffff',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {item.isFeatured && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: '#ffffff',
                  padding: '0.25rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                  boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)'
                }}>
                  ★ GRAND CHAMPION
                </div>
              )}

              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: item.bgGlow,
                border: `1px solid ${item.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                boxShadow: `0 4px 15px ${item.bgGlow}`
              }}>
                <Trophy size={32} color={item.color} />
              </div>

              <div style={{ fontSize: '0.8rem', color: item.color, fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase' }}>
                {item.position}
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', margin: '0.2rem 0 1rem' }}>
                {item.title}
              </h3>

              {/* Amount */}
              <div style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                color: item.color,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1,
                marginBottom: '1.5rem'
              }}>
                {item.amount}
                <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', fontWeight: 500, marginTop: '0.35rem' }}>Direct Cash Award</span>
              </div>

              {/* Perks */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                textAlign: 'left',
                borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                paddingTop: '1.25rem',
                fontSize: '0.88rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a' }}>
                  <Award size={16} color={item.color} />
                  <span>{item.trophy}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>{item.cert}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.8rem' }}>
                  <Sparkles size={14} color="#0284c7" />
                  <span>NAAC/NBA Accreditation Portfolio</span>
                </div>
              </div>
            </Interactive3DCard>
          ))}
        </div>

        {/* All Participants Certification Banner */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Interactive3DCard style={{
            padding: '1.5rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            background: 'rgba(240, 249, 255, 0.85)',
            border: '1px solid rgba(186, 230, 253, 0.9)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Medal size={26} color="#0284c7" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#0f172a', margin: 0 }}>
                  Official Certificate of Participation for All Attendees
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#475569', margin: '0.2rem 0 0' }}>
                  Every participating student receives an authorized certificate from the Department of Computer Science & Engineering, ABIET.
                </p>
              </div>
            </div>

            <span className="labs-pill mint" style={{ fontSize: '0.82rem' }}>
              100% Certified
            </span>
          </Interactive3DCard>
        </div>

      </div>
    </section>
  );
};
