import React, { useState } from 'react';
import { Terminal, Bug, Cpu, Sparkles, Clock, CheckCircle2, ArrowRight, Award, Zap, Code, Shield } from 'lucide-react';
import { Interactive3DCard } from './Interactive3DCard';

export const RoundExplorer = () => {
  const [activeRoundTab, setActiveRoundTab] = useState(0);

  const sprintTracks = [
    {
      id: 'round1',
      tag: 'TRACK 01',
      title: 'Round 1: LogicSprint',
      subtitle: 'Aptitude, Tech & Analytical Reasoning',
      badge: '100 Points • 45 Mins',
      color: '#0284c7',
      pillColor: 'cyan',
      bgGlow: 'rgba(56, 189, 248, 0.12)',
      icon: Terminal,
      time: '10:15 AM – 11:00 AM',
      description: 'Synchronized digital challenge testing algorithmic thinking, pseudo-code tracing, data interpretation, and modern cloud/AI fundamentals.',
      domains: [
        'Logical reasoning & quantitative problem solving',
        'Pseudo-code tracing, flowcharts & decision analysis',
        'Modern technology trends (Cloud, Generative AI, Web Tech, Open Source)'
      ],
      rules: [
        { label: 'Total Questions', val: '40 Objective Multiple-Choice / Interactive' },
        { label: 'Correct Answer', val: '+2.5 Points' },
        { label: 'Incorrect Answer', val: '-0.5 Points (Scoring integrity)' },
        { label: 'Unanswered', val: '0 Points' },
        { label: 'Leaderboard Freeze', val: '11:00 AM sharp' }
      ]
    },
    {
      id: 'round2',
      tag: 'TRACK 02',
      title: 'Round 2: BugHunt & Logic Tracing',
      subtitle: 'Live Problem Diagnostics & Debugging',
      badge: '150 Points • 75 Mins',
      color: '#d97706',
      pillColor: 'amber',
      bgGlow: 'rgba(251, 191, 36, 0.12)',
      icon: Bug,
      time: '11:15 AM – 12:30 PM',
      description: 'Hands-on debugging and error-resolution sprint. Teams trace flawed execution flows and code snippets to locate broken logic, runtime faults, and edge cases.',
      domains: [
        'Multilingual Support: Python, C++, Java, JavaScript & Pseudo-code',
        'Automated real-time test-case validation against hidden test suites',
        'Concise root-cause isolation and diagnostic summaries'
      ],
      tiers: [
        {
          name: 'Tier 1 — Structural & Syntax Inconsistencies',
          pts: '30 Pts',
          tasks: '5 baseline error-resolution tasks'
        },
        {
          name: 'Tier 2 — Logical Breaks & Edge-Case Failures',
          pts: '50 Pts',
          tasks: '4 tasks: out-of-range indices, state mismatches, infinite conditions'
        },
        {
          name: 'Tier 3 — Multi-Component Diagnostics',
          pts: '70 Pts',
          tasks: '3 complex scenarios: call-stack tracing & root-cause isolation'
        }
      ]
    },
    {
      id: 'round3',
      tag: 'TRACK 03',
      title: 'Round 3: DevSprint (AI-Augmented)',
      subtitle: 'Rapid Solution Prototyping & Live Defense',
      badge: '250 Points • 105 Mins Sprint',
      color: '#7c3aed',
      pillColor: 'purple',
      bgGlow: 'rgba(168, 85, 247, 0.12)',
      icon: Cpu,
      time: '01:30 PM – 03:15 PM (Build) + 03:15 PM – 04:15 PM (Live Demos)',
      description: 'Translate on-the-spot real-world problem statements into functional, user-centric working prototypes with approved AI tools and live stage defense.',
      domains: [
        'AI Tool Approval: Fully Approved (Gemini, ChatGPT, Claude, GitHub Copilot, v0)',
        'Problem Statements: Campus Utility, Automation, Student Productivity, Data Dashboards',
        'Sprint: 90 mins build + 15 mins code freeze + 3-4 min live jury pitch'
      ],
      rubric: [
        { criteria: 'Problem Relevance & Impact', pts: '60 Pts', desc: 'Significance and campus utility of the prototype' },
        { criteria: 'Working Prototype & Functionality', pts: '70 Pts', desc: 'Live execution, interactive features, code quality' },
        { criteria: 'AI Tool Mastery & Prompting', pts: '40 Pts', desc: 'Effective prompt engineering, iteration depth' },
        { criteria: 'UI/UX Usability & Creativity', pts: '40 Pts', desc: 'Visual polish, user flow, responsive interface' },
        { criteria: 'Pitch & Technical Q&A Defense', pts: '40 Pts', desc: 'Communication clarity, architecture defense' }
      ]
    }
  ];

  const current = sprintTracks[activeRoundTab];

  return (
    <section id="rounds" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="labs-pill active" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={13} />
            <span>PROGRESSIVE 3-ROUND ARCHITECTURE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: '0.8rem' }}>
            Competition <span className="gradient-labs-ai">Sprint Tracks</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
            Three synchronized sprint tracks totaling 500 cumulative points. No mid-event eliminations.
          </p>
        </div>

        {/* 3 3D Tilt Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          {sprintTracks.map((trk, idx) => {
            const Icon = trk.icon;
            const isSelected = activeRoundTab === idx;
            return (
              <Interactive3DCard
                key={trk.id}
                onClick={() => setActiveRoundTab(idx)}
                style={{
                  cursor: 'pointer',
                  border: isSelected ? `2px solid ${trk.color}` : '1px solid rgba(226, 232, 240, 0.85)',
                  boxShadow: isSelected ? `0 12px 35px -5px ${trk.color}30` : '0 4px 12px rgba(0, 0, 0, 0.03)',
                  background: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.75)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  padding: '1.75rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span className={`labs-pill ${trk.pillColor}`} style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}>
                      {trk.tag}
                    </span>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(241, 245, 249, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: trk.color
                    }}>
                      <ArrowRight size={15} className="arrow-slide" />
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: trk.bgGlow,
                      border: `1px solid ${trk.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={22} color={trk.color} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                        {trk.title.split(':')[1]}
                      </h3>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                        {trk.badge}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: '0.5rem 0 0' }}>
                    {trk.description}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  marginTop: '1.25rem',
                  borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                  fontSize: '0.78rem',
                  color: '#64748b',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <span>⏱ {trk.time}</span>
                  <span style={{ color: trk.color, fontWeight: 700 }}>
                    {isSelected ? '● Selected Track' : 'Click to inspect'}
                  </span>
                </div>
              </Interactive3DCard>
            );
          })}
        </div>

        {/* Selected Sprint Track Details */}
        <Interactive3DCard style={{ padding: '2.5rem', border: `1px solid ${current.color}40` }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.75rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span className={`labs-pill ${current.pillColor}`} style={{ fontWeight: 700 }}>
                  {current.tag} • {current.badge}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                  Time Window: {current.time}
                </span>
              </div>
              <h3 style={{ fontSize: '1.85rem', color: '#0f172a' }}>{current.title}</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0 }}>{current.subtitle}</p>
            </div>

            <div style={{
              background: current.bgGlow,
              border: `1px solid ${current.color}30`,
              borderRadius: '16px',
              padding: '0.85rem 1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.72rem', color: current.color, fontFamily: 'var(--font-mono)', fontWeight: 700 }}>MAX POINTS</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>
                {current.badge.split('•')[0].trim()}
              </div>
            </div>
          </div>

          {/* R1 Rules */}
          {current.rules && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1.05rem', color: current.color, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Terminal size={18} /> Question Format & Scoring Rules
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.9rem' }}>
                {current.rules.map((r, i) => (
                  <div key={i} style={{ background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.9)', borderRadius: '14px', padding: '1.1rem', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{r.label}</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '0.25rem' }}>{r.val}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* R2 Tiers */}
          {current.tiers && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1.05rem', color: current.color, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Bug size={18} /> 3 Diagnostic Challenge Tiers (150 Pts)
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {current.tiers.map((t, i) => (
                  <div key={i} style={{
                    background: '#ffffff',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    borderRadius: '14px',
                    padding: '1.1rem 1.4rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                  }}>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{t.name}</div>
                      <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.2rem' }}>{t.tasks}</div>
                    </div>
                    <span className="labs-pill amber" style={{ fontSize: '0.85rem' }}>
                      {t.pts}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* R3 Rubric */}
          {current.rubric && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1.05rem', color: current.color, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={18} /> Official 5-Criteria Judging Rubric (250 Pts)
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.9rem' }}>
                {current.rubric.map((item, i) => (
                  <div key={i} style={{ background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.9)', borderRadius: '14px', padding: '1.1rem', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>{item.criteria}</span>
                      <span className="labs-pill purple" style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem' }}>{item.pts}</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#475569', margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Domains */}
          <div style={{ background: 'rgba(248, 250, 252, 0.9)', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
            <h5 style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.6rem' }}>
              Key Assessment Domains
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {current.domains.map((dom, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#334155' }}>
                  <CheckCircle2 size={16} color={current.color} style={{ flexShrink: 0 }} />
                  <span>{dom}</span>
                </div>
              ))}
            </div>
          </div>
        </Interactive3DCard>

      </div>
    </section>
  );
};
