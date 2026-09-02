import React, { useState } from 'react';
import { Terminal, Bug, Cpu, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const DetailsRounds = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Score Calculator State
  const [r1Correct, setR1Correct] = useState(32);
  const [r1Incorrect, setR1Incorrect] = useState(4);
  const [r2Score, setR2Score] = useState(120);
  const [r3Score, setR3Score] = useState(210);

  const r1Calculated = Math.max(0, Math.min(100, (r1Correct * 2.5) - (r1Incorrect * 0.5)));
  const totalScore = Math.round((r1Calculated + r2Score + r3Score) * 10) / 10;
  const percentage = Math.round((totalScore / 500) * 100);

  const tracks = [
    {
      id: 'round1',
      tag: 'TRACK 01',
      title: 'Round 1: LogicSprint',
      points: '100 Points',
      time: '10:15 AM – 11:00 AM (45 Mins)',
      color: '#059669', // Emerald Green
      icon: Terminal,
      desc: 'Synchronized digital challenge testing algorithmic logic, pseudo-code tracing, data reasoning, and modern AI/Cloud fundamentals.',
      details: [
        '40 Objective & Multiple-Choice Questions',
        '+2.5 Points for correct answer | -0.5 Points penalty for incorrect answer',
        'Automated digital leaderboard freeze at 11:00 AM sharp'
      ]
    },
    {
      id: 'round2',
      tag: 'TRACK 02',
      title: 'Round 2: BugHunt Diagnostics',
      points: '150 Points',
      time: '11:15 AM – 12:30 PM (75 Mins)',
      color: '#047857', // Forest Green
      icon: Bug,
      desc: 'Hands-on debugging and error-resolution sprint across Python, C++, Java, and JavaScript against automated hidden test suites.',
      details: [
        'Tier 1 (30 Pts): Structural & syntax inconsistencies',
        'Tier 2 (50 Pts): Logical breaks, index faults & infinite loops',
        'Tier 3 (70 Pts): Multi-component call stack diagnostics & root-cause isolation'
      ]
    },
    {
      id: 'round3',
      tag: 'TRACK 03',
      title: 'Round 3: DevSprint (AI-Augmented)',
      points: '250 Points',
      time: '01:30 PM – 04:15 PM (Build & Demos)',
      color: '#10b981', // Mint Bright Green
      icon: Cpu,
      desc: 'Translate on-the-spot problem statements into functional, user-centric prototypes using approved Generative AI assistants with live stage defense.',
      details: [
        'AI Approval: Gemini, ChatGPT, Claude, GitHub Copilot, v0 fully approved',
        'Timeline: 90 mins build + 15 mins code freeze + 3–4 min stage demo before Jury',
        '250-Pt Rubric: Impact (60 Pts), Working Code (70 Pts), AI Mastery (40 Pts), UI/UX (40 Pts), Defense (40 Pts)'
      ]
    }
  ];

  return (
    <section id="details" style={{ padding: '5.5rem 0', background: '#e8f2ed', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="crimson-pill" style={{ marginBottom: '0.6rem' }}>
            DETAILS & ROUNDS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0f2e22', marginBottom: '0.5rem' }}>
            3-Stage Sprint Tracks
          </h2>
          <p style={{ color: '#4b5563', maxWidth: '640px', fontSize: '0.98rem', lineHeight: 1.6 }}>
            500 cumulative points across algorithmic logic, code diagnostics, and AI working prototypes.
          </p>
        </div>

        {/* 3 Tracks Cards on Pure White Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {tracks.map((trk, idx) => {
            const Icon = trk.icon;
            const isSelected = activeTab === idx;
            return (
              <TiltCard3D
                key={trk.id}
                onClick={() => setActiveTab(idx)}
                className="dribbble-card"
                maxTilt={12}
                style={{
                  cursor: 'pointer',
                  border: isSelected ? `2px solid ${trk.color}` : '1px solid rgba(5, 150, 105, 0.15)',
                  background: '#ffffff',
                  borderTop: `3.5px solid ${trk.color}`,
                  boxShadow: isSelected ? `0 12px 30px ${trk.color}25` : '0 4px 15px rgba(6, 78, 59, 0.05)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    background: `${trk.color}14`,
                    color: trk.color,
                    border: `1px solid ${trk.color}35`
                  }}>
                    {trk.tag}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: trk.color, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    {trk.points}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                    background: `${trk.color}14`,
                    border: `1px solid ${trk.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: trk.color
                  }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#0f2e22', margin: 0 }}>
                    {trk.title.split(':')[1]}
                  </h3>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {trk.desc}
                </p>

                <div style={{ borderTop: '1px solid rgba(5, 150, 105, 0.08)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {trk.details.map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#1f2937' }}>
                      <CheckCircle2 size={14} color={trk.color} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(5, 150, 105, 0.08)', fontSize: '0.78rem', color: '#6b7280', fontFamily: 'var(--font-mono)' }}>
                  ⏱ {trk.time}
                </div>
              </TiltCard3D>
            );
          })}
        </div>

        {/* 500-Pt Score Simulator */}
        <TiltCard3D
          maxTilt={5}
          style={{
            background: '#ffffff',
            border: '1px solid rgba(5, 150, 105, 0.25)',
            borderRadius: '12px',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            boxShadow: '0 8px 30px rgba(6, 78, 59, 0.06)'
          }}
        >
          <div>
            <div className="crimson-pill" style={{ marginBottom: '0.5rem' }}>
              SCORE SIMULATOR
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#0f2e22', marginBottom: '0.5rem' }}>
              Cumulative 500-Point Target
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Every round adds directly to your aggregate score. Adjust sliders to preview your final standing.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#4b5563', marginBottom: '0.25rem' }}>
                  <span>Round 1: LogicSprint ({r1Correct} Correct)</span>
                  <span style={{ color: '#059669', fontWeight: 700 }}>{r1Calculated.toFixed(1)} / 100 Pts</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={r1Correct}
                  onChange={(e) => setR1Correct(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#059669' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#4b5563', marginBottom: '0.25rem' }}>
                  <span>Round 2: BugHunt Diagnostics</span>
                  <span style={{ color: '#047857', fontWeight: 700 }}>{r2Score} / 150 Pts</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={r2Score}
                  onChange={(e) => setR2Score(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#047857' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#4b5563', marginBottom: '0.25rem' }}>
                  <span>Round 3: DevSprint (AI Prototype)</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>{r3Score} / 250 Pts</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="250"
                  value={r3Score}
                  onChange={(e) => setR3Score(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#10b981' }}
                />
              </div>
            </div>
          </div>

          {/* Projection Card */}
          <div style={{
            background: '#f4f8f6',
            border: '1px solid rgba(5, 150, 105, 0.35)',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.78rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              PROJECTED AGGREGATE SCORE
            </div>
            
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f2e22', lineHeight: 1.1, margin: '0.5rem 0' }}>
              {totalScore} <span style={{ fontSize: '1.4rem', color: '#6b7280' }}>/ 500</span>
            </div>

            <div style={{ background: 'rgba(5, 150, 105, 0.12)', height: '6px', borderRadius: '3px', overflow: 'hidden', margin: '1.25rem 0' }}>
              <div style={{ width: `${percentage}%`, height: '100%', background: 'linear-gradient(90deg, #059669 0%, #10b981 50%, #34d399 100%)' }} />
            </div>

            <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>
              {percentage}% of maximum cumulative score
            </div>

            <div style={{ marginTop: '1.25rem', padding: '0.75rem', background: '#ecfdf5', borderRadius: '6px', border: '1px solid rgba(5, 150, 105, 0.25)', fontSize: '0.82rem', color: '#059669', fontWeight: 700 }}>
              {totalScore >= 420 ? '🏆 Podium Winning Range (Top 3 Contender)' : totalScore >= 340 ? '🎖️ High Merit Tier (Certificate of Excellence)' : '🚀 Active Contender'}
            </div>
          </div>
        </TiltCard3D>

      </div>
    </section>
  );
};
