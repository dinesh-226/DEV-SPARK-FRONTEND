import React, { useState } from 'react';
import { 
  Terminal, Cpu, Clock, CheckCircle2, ArrowRight, Download, 
  FileText, Shield, Sparkles, Layers, Award
} from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const DetailsRounds = () => {
  const [activeStageTab, setActiveStageTab] = useState(0);

  // Score Calculator State (200 Points Final Winner Model: R1 100 Pts + R2 Phase 2 100 Pts, with Phase 1 100 Pts Qualifier)
  const [r1Correct, setR1Correct] = useState(32);
  const [r1Incorrect, setR1Incorrect] = useState(4);
  const [r2Phase1, setR2Phase1] = useState(85);
  const [r2Phase2, setR2Phase2] = useState(90);

  const r1Calculated = Math.max(0, Math.min(100, (r1Correct * 2.5) - (r1Incorrect * 0.5)));
  const finalWinnerScore = Math.round((r1Calculated + r2Phase2) * 10) / 10;
  const percentage = Math.round((finalWinnerScore / 200) * 100);

  // 2 Official Competition Stages
  const stages = [
    {
      id: 'round1',
      tag: 'STAGE 01',
      title: 'Round 1: LogicSprint',
      points: '100 Points (Final Score)',
      time: '10:15 AM – 11:00 AM (45 Mins)',
      color: '#059669', // Emerald Green
      icon: Terminal,
      desc: 'Synchronized digital aptitude and core tech assessment. Points contribute directly to the 200-point final Top 3 evaluation.',
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
      title: 'Round 2: DevSprint (Phase 1 & Phase 2)',
      points: 'Phase 1 (100 Pts Qualifier) • Phase 2 (100 Pts Final)',
      time: '11:15 AM – 01:15 PM (Phase 1 Demos & Phase 2 Finalist Defense)',
      color: '#047857', // Forest Green
      icon: Cpu,
      desc: 'Phase 1 (100 Pts) qualifies the Top 5 squads. The Top 5 then deliver Phase 2 Stage Defense (100 Pts) which is combined with Round 1 (100 Pts) to decide the Top 3 Winners (200 Total Points).',
      details: [
        'Phase 1 Prototype Showcase (100 Points | 11:15 AM – 12:00 PM): All squads demonstrate their live running prototype before the jury; evaluated specifically to shortlist the Top 5 finalist teams',
        'Phase 2 Finalist Stage Defense (100 Points | 12:15 PM – 01:15 PM): Top 5 shortlisted teams deliver in-depth stage defense and technical jury Q&A (100 Points)',
        'Final Result (200 Points Total): The Top 3 Winners are evaluated strictly from Round 1 LogicSprint (100 Pts) + Round 2 Phase 2 Final Stage Defense (100 Pts) = 200 Total Points',
        'Build from Home: Develop full working code beforehand using approved AI tools (ChatGPT, Gemini, Claude, Copilot, v0, Cursor)',
        'The "Zero-Black-Box" Rule: Every member must explain component logic, state handlers, and APIs without copy-pasting'
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
            A structured framework: Phase 1 (100 Pts) shortlists the Top 5 finalist teams, and the final Top 3 Winners are evaluated from Round 1 LogicSprint (100 Pts) + Round 2 Phase 2 Stage Defense (100 Pts) = 200 Total Points.
          </p>
        </div>

        {/* 2 Stage Sprint Overview Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
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
                    color: stg.color,
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.04em'
                  }}>
                    {stg.tag}
                  </span>
                  <span style={{
                    background: '#ecfdf5',
                    color: stg.color,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    border: `1px solid ${stg.color}35`
                  }}>
                    {stg.points}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: `${stg.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stg.color
                  }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f2e22', margin: 0, fontWeight: 700 }}>
                    {stg.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {stg.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {stg.details.map((item, dIdx) => (
                    <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#374151' }}>
                      <CheckCircle2 size={15} color={stg.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
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
            200-PT FINAL WINNER SCORE SIMULATOR (TOP 3 EVALUATION)
           ========================================================================= */}
        <TiltCard3D
          maxTilt={5}
          style={{
            background: '#ffffff',
            border: '1px solid rgba(5, 150, 105, 0.25)',
            borderRadius: '12px',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            boxShadow: '0 8px 30px rgba(6, 78, 59, 0.06)'
          }}
        >
          <div>
            <div className="crimson-pill" style={{ marginBottom: '0.5rem' }}>
              SCORE SIMULATOR • TOP 3 EVALUATION
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#0f2e22', marginBottom: '0.5rem' }}>
              Final 200-Point Winner Target
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Top 3 Winners are evaluated from <strong>Round 1 (100 Pts)</strong> + <strong>Round 2 Phase 2 (100 Pts)</strong> = <strong>200 Total Points</strong>. Phase 1 (100 Pts) serves as the qualifying round for the Top 5 shortlist.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Round 1 Slider */}
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

              {/* Phase 1 Qualifier Info Slider */}
              <div style={{ background: '#f4f8f6', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(5, 150, 105, 0.15)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#4b5563', marginBottom: '0.25rem' }}>
                  <span>Round 2: Phase 1 Demos (Top 5 Qualifier Benchmark)</span>
                  <span style={{ color: '#047857', fontWeight: 700 }}>{r2Phase1} / 100 Pts</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={r2Phase1}
                  onChange={(e) => setR2Phase1(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#047857' }}
                />
                <div style={{ fontSize: '0.72rem', color: '#059669', marginTop: '0.25rem', fontWeight: 600 }}>
                  ✓ Qualifying Hurdle: Top 5 squads advance to Phase 2 Stage Defense
                </div>
              </div>

              {/* Phase 2 Stage Defense Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#4b5563', marginBottom: '0.25rem' }}>
                  <span>Round 2: Phase 2 Finalist Stage Defense (Top 5 Teams)</span>
                  <span style={{ color: '#059669', fontWeight: 700 }}>{r2Phase2} / 100 Pts</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={r2Phase2}
                  onChange={(e) => setR2Phase2(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#059669' }}
                />
              </div>
            </div>
          </div>

          {/* Projection Card */}
          <div style={{
            background: '#f4f8f6',
            border: '1.5px solid rgba(5, 150, 105, 0.35)',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.78rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              FINAL WINNER SCORE (R1 + R2 PHASE 2)
            </div>
            
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f2e22', lineHeight: 1.1, margin: '0.5rem 0' }}>
              {finalWinnerScore} <span style={{ fontSize: '1.4rem', color: '#6b7280' }}>/ 200</span>
            </div>

            <div style={{ background: 'rgba(5, 150, 105, 0.12)', height: '6px', borderRadius: '3px', overflow: 'hidden', margin: '1.25rem 0' }}>
              <div style={{ width: `${percentage}%`, height: '100%', background: 'linear-gradient(90deg, #059669 0%, #10b981 50%, #34d399 100%)' }} />
            </div>

            <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>
              {percentage}% of maximum championship score (200 Pts)
            </div>

            <div style={{ marginTop: '1.25rem', padding: '0.75rem', background: '#ecfdf5', borderRadius: '6px', border: '1px solid rgba(5, 150, 105, 0.25)', fontSize: '0.82rem', color: '#059669', fontWeight: 700 }}>
              {finalWinnerScore >= 175 ? '🏆 Top 3 Podium Winner (1st / 2nd / 3rd Contender)' : finalWinnerScore >= 140 ? '🎖️ Top 5 Finalist Distinction' : '🚀 Active Sprint Builder'}
            </div>
          </div>
        </TiltCard3D>

      </div>
    </section>
  );
};
