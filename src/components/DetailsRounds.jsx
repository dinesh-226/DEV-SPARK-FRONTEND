import React, { useState } from 'react';
import { 
  Terminal, Cpu, Clock, CheckCircle2, ArrowRight, Download, 
  FileText, Shield, Sparkles, Layers, Award
} from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const DetailsRounds = () => {
  const [activeStageTab, setActiveStageTab] = useState(0);

  // Score Calculator State (350 Points Model)
  const [r1Correct, setR1Correct] = useState(32);
  const [r1Incorrect, setR1Incorrect] = useState(4);
  const [r2Score, setR2Score] = useState(210);

  const r1Calculated = Math.max(0, Math.min(100, (r1Correct * 2.5) - (r1Incorrect * 0.5)));
  const totalScore = Math.round((r1Calculated + r2Score) * 10) / 10;
  const percentage = Math.round((totalScore / 350) * 100);

  // 2 Official Competition Stages (100 Pts + 250 Pts = 350 Pts Total)
  const stages = [
    {
      id: 'round1',
      tag: 'STAGE 01',
      title: 'Round 1: LogicSprint',
      points: '100 Points',
      time: '10:15 AM – 11:00 AM (45 Mins)',
      color: '#059669', // Emerald Green
      icon: Terminal,
      desc: 'Synchronized digital aptitude and core tech assessment testing algorithmic logic, pseudocode tracing, data reasoning, and modern AI/Cloud fundamentals.',
      details: [
        '40 Objective Multiple-Choice Questions (MCQs)',
        '+2.5 Points for correct answer | -0.5 Points penalty for incorrect answer | 0.0 Unattempted',
        'Automated Apps Script trigger auto-locks submission form at T + 45 minutes sharp',
        'Exactly one submission form per team submitted from the designated Team Leader device',
        'No external tabs, cross-table consulting, or outside communication permitted during active quiz'
      ]
    },
    {
      id: 'round2',
      tag: 'STAGE 02',
      title: 'Round 2: DevSprint Showcase & Defense',
      points: '250 Points',
      time: '11:15 AM – 01:15 PM (Phase 1 Demos & Phase 2 Finalist Defense)',
      color: '#047857', // Forest Green
      icon: Cpu,
      desc: 'Build your AI prototype solution beforehand from home based on the problem tracks. On event day, showcase and defend your live working prototype across Phase 1 demos and Phase 2 Top 5–7 finalist defense.',
      details: [
        'Build from Home: Develop full working code beforehand using ChatGPT, Gemini, Claude, Copilot, v0, Cursor',
        'Phase 1 Demos (11:15 AM – 12:00 PM): All squads demonstrate their live running prototype before the jury',
        'Phase 2 Finalist Defense (12:15 PM – 01:15 PM): Top 5 to 7 shortlisted teams deliver in-depth stage defense and jury Q&A',
        'The "Zero-Black-Box" Rule: Every member must explain component logic, state handlers, and APIs without rote copy-pasting',
        'Live Dynamic Execution: Prototypes must execute live with reactive inputs (0 pts for static Figma/wireframes)'
      ]
    }
  ];

  return (
    <section id="details" style={{ padding: '5.5rem 0', background: '#e8f2ed', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="crimson-pill" style={{ marginBottom: '0.6rem' }}>
            OFFICIAL COMPETITION ARCHITECTURE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0f2e22', marginBottom: '0.5rem' }}>
            2-Stage Sprint & Evaluation Matrix
          </h2>
          <p style={{ color: '#4b5563', maxWidth: '680px', fontSize: '0.98rem', lineHeight: 1.6 }}>
            A cumulative 350-point framework comprising Round 1 LogicSprint (100 Pts) and Round 2 DevSprint (250 Pts) governed by the official Department evaluation rubric.
          </p>
        </div>

        {/* 2 Stage Sprint Overview Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            const isSelected = activeStageTab === idx;
            return (
              <TiltCard3D
                key={stg.id}
                onClick={() => setActiveStageTab(idx)}
                className="dribbble-card"
                maxTilt={8}
                style={{
                  cursor: 'pointer',
                  border: isSelected ? `2px solid ${stg.color}` : '1px solid rgba(5, 150, 105, 0.18)',
                  background: '#ffffff',
                  borderTop: `4px solid ${stg.color}`,
                  boxShadow: isSelected ? `0 12px 30px ${stg.color}25` : '0 4px 15px rgba(6, 78, 59, 0.05)'
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
                    background: `${stg.color}14`,
                    color: stg.color,
                    border: `1px solid ${stg.color}35`
                  }}>
                    {stg.tag}
                  </span>
                  <span style={{ fontSize: '1rem', color: stg.color, fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                    {stg.points}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    background: `${stg.color}14`,
                    border: `1px solid ${stg.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stg.color
                  }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f2e22', margin: 0, fontWeight: 800 }}>
                    {stg.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {stg.desc}
                </p>

                <div style={{ borderTop: '1px solid rgba(5, 150, 105, 0.08)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {stg.details.map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: '#1f2937' }}>
                      <CheckCircle2 size={15} color={stg.color} style={{ flexShrink: 0, marginTop: '0.18rem' }} />
                      <span style={{ lineHeight: 1.45 }}>{d}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(5, 150, 105, 0.08)', fontSize: '0.8rem', color: '#059669', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                  ⏱ {stg.time}
                </div>
              </TiltCard3D>
            );
          })}
        </div>

        {/* Problem Statements & Framework Official PDF Download Banner */}
        <div style={{
          background: '#ffffff',
          border: '1.5px solid rgba(5, 150, 105, 0.25)',
          borderRadius: '12px',
          padding: '1.75rem 2rem',
          marginBottom: '3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center',
          boxShadow: '0 4px 20px rgba(6, 78, 59, 0.05)'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontSize: '0.78rem', fontWeight: 800, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              <FileText size={14} />
              <span>OFFICIAL PROBLEM STATEMENTS & FRAMEWORK</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#0f2e22', margin: '0 0 0.35rem', fontWeight: 800 }}>
              Round 2 Challenge Problem Statements & AI Prompt Guidelines
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Download the official PDF document to review the complete challenge statements, mandatory deliverables, and prompt engineering protocols.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <a
              href="/docs/DevSpark_Problem_Statements.pdf"
              download="DevSpark_Problem_Statements.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#059669',
                color: '#ffffff',
                padding: '0.75rem 1.35rem',
                borderRadius: '6px',
                fontSize: '0.88rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(5, 150, 105, 0.25)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#047857'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#059669'; }}
            >
              <Download size={15} />
              <span>Download Problem Statements (PDF)</span>
            </a>

            <a
              href="/docs/DevSpark_Official_Rules.pdf"
              download="DevSpark_Official_Rules_Matrix.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#ffffff',
                border: '1.5px solid #059669',
                color: '#059669',
                padding: '0.75rem 1.35rem',
                borderRadius: '6px',
                fontSize: '0.88rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ecfdf5'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; }}
            >
              <Download size={15} />
              <span>Rules & Rubric Matrix (PDF)</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            350-PT SCORE SIMULATOR
           ========================================================================= */}
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
              Cumulative 350-Point Target
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Both Round 1 (LogicSprint) and Round 2 (DevSprint) add directly to your aggregate standing.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#4b5563', marginBottom: '0.25rem' }}>
                  <span>Round 1: LogicSprint ({r1Correct} Correct, {r1Incorrect} Incorrect)</span>
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
                  <span>Round 2: DevSprint (AI Prototype & Live Defense)</span>
                  <span style={{ color: '#047857', fontWeight: 700 }}>{r2Score} / 250 Pts</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="250"
                  value={r2Score}
                  onChange={(e) => setR2Score(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#047857' }}
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
              {totalScore} <span style={{ fontSize: '1.4rem', color: '#6b7280' }}>/ 350</span>
            </div>

            <div style={{ background: 'rgba(5, 150, 105, 0.12)', height: '6px', borderRadius: '3px', overflow: 'hidden', margin: '1.25rem 0' }}>
              <div style={{ width: `${percentage}%`, height: '100%', background: 'linear-gradient(90deg, #059669 0%, #10b981 50%, #34d399 100%)' }} />
            </div>

            <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>
              {percentage}% of maximum cumulative score
            </div>

            <div style={{ marginTop: '1.25rem', padding: '0.75rem', background: '#ecfdf5', borderRadius: '6px', border: '1px solid rgba(5, 150, 105, 0.25)', fontSize: '0.82rem', color: '#059669', fontWeight: 700 }}>
              {totalScore >= 300 ? '🏆 Top Standing (Podium Contender)' : totalScore >= 240 ? '🎖️ High Merit Tier (Certificate of Excellence)' : '🚀 Active Sprint Builder'}
            </div>
          </div>
        </TiltCard3D>

      </div>
    </section>
  );
};
