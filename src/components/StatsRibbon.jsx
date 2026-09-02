import React from 'react';
import { Award, Layers, Users, Cpu, CheckCircle } from 'lucide-react';
import { Interactive3DCard } from './Interactive3DCard';

export const StatsRibbon = () => {
  const pillars = [
    {
      icon: Award,
      title: '₹28,000 Cash Pool',
      subtitle: 'Top 3 Podium Awards',
      desc: '1st: ₹15,000 + Trophy • 2nd: ₹8,000 • 3rd: ₹5,000. Official Certificates of Excellence & Participation for all.',
      color: '#d97706',
      bgGlow: 'rgba(251, 191, 36, 0.15)',
      borderColor: 'rgba(251, 191, 36, 0.4)'
    },
    {
      icon: Layers,
      title: '500-Pt Cumulative',
      subtitle: 'Zero Mid-Event Eliminations',
      desc: 'All teams play all 3 rounds (R1: 100 Pts + R2: 150 Pts + R3: 250 Pts). Final standings by aggregate performance.',
      color: '#0284c7',
      bgGlow: 'rgba(56, 189, 248, 0.15)',
      borderColor: 'rgba(56, 189, 248, 0.4)'
    },
    {
      icon: Users,
      title: 'Open Campus Teams',
      subtitle: '2–5 Members Multidisciplinary',
      desc: 'Open across all academic streams & years (CSE, IT, Management, Sciences). Cross-discipline teaming rewarded.',
      color: '#7c3aed',
      bgGlow: 'rgba(168, 85, 247, 0.15)',
      borderColor: 'rgba(168, 85, 247, 0.4)'
    },
    {
      icon: Cpu,
      title: 'AI Tool Mastery',
      subtitle: 'Full GenAI Approvals',
      desc: 'Freely leverage Gemini, ChatGPT, Claude, GitHub Copilot, and v0 for rapid ideation, coding, and scaffolding.',
      color: '#059669',
      bgGlow: 'rgba(52, 211, 153, 0.15)',
      borderColor: 'rgba(52, 211, 153, 0.4)'
    }
  ];

  return (
    <section style={{ padding: '2rem 0 3.5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Interactive3DCard key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem'
              }}>
                <div>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: item.bgGlow,
                    border: `1px solid ${item.borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <Icon size={22} color={item.color} />
                  </div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: item.color, fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    {item.subtitle}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.6rem', color: '#0f172a' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ marginTop: '1.4rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(226, 232, 240, 0.8)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                  <CheckCircle size={14} color={item.color} />
                  <span>Official DevSpark Parameter</span>
                </div>
              </Interactive3DCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
