import React, { useState } from 'react';
import { Calculator, Award, Sparkles, TrendingUp, RefreshCw } from 'lucide-react';
import { Interactive3DCard } from './Interactive3DCard';

export const ScoringCalculator = () => {
  // R1 State
  const [r1Correct, setR1Correct] = useState(32);
  const [r1Incorrect, setR1Incorrect] = useState(4);

  // R2 State
  const [r2Tier1, setR2Tier1] = useState(30);
  const [r2Tier2, setR2Tier2] = useState(40);
  const [r2Tier3, setR2Tier3] = useState(50);

  // R3 State
  const [r3Relevance, setR3Relevance] = useState(50);
  const [r3Functionality, setR3Functionality] = useState(60);
  const [r3Prompt, setR3Prompt] = useState(35);
  const [r3UiUx, setR3UiUx] = useState(35);
  const [r3Pitch, setR3Pitch] = useState(35);

  // Calculations
  const r1Score = Math.max(0, Math.min(100, (r1Correct * 2.5) - (r1Incorrect * 0.5)));
  const r2Score = Math.max(0, Math.min(150, r2Tier1 + r2Tier2 + r2Tier3));
  const r3Score = Math.max(0, Math.min(250, r3Relevance + r3Functionality + r3Prompt + r3UiUx + r3Pitch));
  const totalScore = Math.round((r1Score + r2Score + r3Score) * 10) / 10;
  const percentage = Math.round((totalScore / 500) * 100);

  const getTierAdvice = (score) => {
    if (score >= 440) return { title: '🏆 Top Podium Contender (1st Place Range)', color: '#0284c7', text: 'Exceptional cumulative velocity across all logic, diagnostics, and AI prototyping tracks.' };
    if (score >= 380) return { title: '🥈 High Merit Tier (2nd / 3rd Place Range)', color: '#7c3aed', text: 'Strong performance with high probability for cash awards and trophies.' };
    if (score >= 300) return { title: '🎖️ Solid Contender (Certificate of Excellence)', color: '#059669', text: 'Great balanced performance. Maximizing Round 3 AI prototype points will push you directly to the podium.' };
    return { title: '🚀 Emerging Team', color: '#d97706', text: 'Focus on eliminating penalties in LogicSprint and perfecting your DevSprint working prototype.' };
  };

  const advice = getTierAdvice(totalScore);

  const handleReset = () => {
    setR1Correct(32);
    setR1Incorrect(4);
    setR2Tier1(30);
    setR2Tier2(40);
    setR2Tier3(50);
    setR3Relevance(50);
    setR3Functionality(60);
    setR3Prompt(35);
    setR3UiUx(35);
    setR3Pitch(35);
  };

  return (
    <section id="calculator" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="labs-pill active" style={{ marginBottom: '0.75rem' }}>
            <Calculator size={13} />
            <span>INTERACTIVE CUMULATIVE SIMULATOR</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: '0.8rem' }}>
            500-Point <span className="gradient-labs-ai">Score Simulator</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
            Experiment with potential scores across all 3 rounds to project your team's cumulative standing.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Sliders Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* R1 */}
            <Interactive3DCard style={{ padding: '1.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#0284c7' }}>Round 1: LogicSprint</h4>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>40 Questions (+2.5 / -0.5)</p>
                </div>
                <span className="labs-pill cyan">
                  {r1Score.toFixed(1)} / 100 Pts
                </span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155', marginBottom: '0.3rem' }}>
                  <span>Correct Answers: <strong>{r1Correct}</strong></span>
                  <span style={{ color: '#059669', fontWeight: 600 }}>+{(r1Correct * 2.5).toFixed(1)} pts</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={r1Correct}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setR1Correct(val);
                    if (val + r1Incorrect > 40) setR1Incorrect(40 - val);
                  }}
                  style={{ width: '100%', accentColor: '#0284c7' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155', marginBottom: '0.3rem' }}>
                  <span>Incorrect Answers: <strong>{r1Incorrect}</strong></span>
                  <span style={{ color: '#e11d48', fontWeight: 600 }}>-{(r1Incorrect * 0.5).toFixed(1)} pts</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={40 - r1Correct}
                  value={r1Incorrect}
                  onChange={(e) => setR1Incorrect(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#e11d48' }}
                />
              </div>
            </Interactive3DCard>

            {/* R2 */}
            <Interactive3DCard style={{ padding: '1.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#d97706' }}>Round 2: BugHunt Diagnostics</h4>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>3 Challenge Tiers</p>
                </div>
                <span className="labs-pill amber">
                  {r2Score} / 150 Pts
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155', marginBottom: '0.2rem' }}>
                    <span>Tier 1 Syntax (Max 30)</span>
                    <span style={{ color: '#d97706', fontWeight: 600 }}>{r2Tier1} pts</span>
                  </div>
                  <input type="range" min="0" max="30" step="6" value={r2Tier1} onChange={(e) => setR2Tier1(Number(e.target.value))} style={{ width: '100%', accentColor: '#d97706' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155', marginBottom: '0.2rem' }}>
                    <span>Tier 2 Logic Faults (Max 50)</span>
                    <span style={{ color: '#d97706', fontWeight: 600 }}>{r2Tier2} pts</span>
                  </div>
                  <input type="range" min="0" max="50" step="12.5" value={r2Tier2} onChange={(e) => setR2Tier2(Number(e.target.value))} style={{ width: '100%', accentColor: '#d97706' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155', marginBottom: '0.2rem' }}>
                    <span>Tier 3 Multi-Component (Max 70)</span>
                    <span style={{ color: '#d97706', fontWeight: 600 }}>{r2Tier3} pts</span>
                  </div>
                  <input type="range" min="0" max="70" step="10" value={r2Tier3} onChange={(e) => setR2Tier3(Number(e.target.value))} style={{ width: '100%', accentColor: '#d97706' }} />
                </div>
              </div>
            </Interactive3DCard>

            {/* R3 */}
            <Interactive3DCard style={{ padding: '1.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#7c3aed' }}>Round 3: DevSprint (AI)</h4>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>AI Prototyping & Live Defense</p>
                </div>
                <span className="labs-pill purple">
                  {r3Score} / 250 Pts
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#334155', marginBottom: '0.2rem' }}>
                    <span>Relevance & Impact (Max 60)</span>
                    <span>{r3Relevance} pts</span>
                  </div>
                  <input type="range" min="0" max="60" value={r3Relevance} onChange={(e) => setR3Relevance(Number(e.target.value))} style={{ width: '100%', accentColor: '#7c3aed' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#334155', marginBottom: '0.2rem' }}>
                    <span>Working Prototype (Max 70)</span>
                    <span>{r3Functionality} pts</span>
                  </div>
                  <input type="range" min="0" max="70" value={r3Functionality} onChange={(e) => setR3Functionality(Number(e.target.value))} style={{ width: '100%', accentColor: '#7c3aed' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#334155', marginBottom: '0.2rem' }}>
                    <span>AI Mastery & Prompting (Max 40)</span>
                    <span>{r3Prompt} pts</span>
                  </div>
                  <input type="range" min="0" max="40" value={r3Prompt} onChange={(e) => setR3Prompt(Number(e.target.value))} style={{ width: '100%', accentColor: '#7c3aed' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#334155', marginBottom: '0.2rem' }}>
                    <span>UI/UX & Stage Defense (Max 80)</span>
                    <span>{r3UiUx + r3Pitch} pts</span>
                  </div>
                  <input type="range" min="0" max="40" value={r3UiUx} onChange={(e) => setR3UiUx(Number(e.target.value))} style={{ width: '100%', accentColor: '#7c3aed' }} />
                </div>
              </div>
            </Interactive3DCard>

          </div>

          {/* Right Projection Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Interactive3DCard style={{
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(248, 250, 252, 0.9) 100%)',
              border: '1.5px solid rgba(56, 189, 248, 0.4)',
              padding: '2.2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontSize: '0.82rem', color: '#0284c7', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  CUMULATIVE AGGREGATE PROJECTION
                </div>
                
                <div style={{
                  fontSize: '3.8rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                  margin: '0.5rem 0',
                  color: '#0f172a'
                }}>
                  {totalScore} <span style={{ fontSize: '1.5rem', color: '#64748b', fontWeight: 500 }}>/ 500</span>
                </div>

                {/* Shimmering Gradient Progress Bar */}
                <div style={{ background: 'rgba(226, 232, 240, 0.8)', height: '10px', borderRadius: '999px', overflow: 'hidden', margin: '1.25rem 0' }}>
                  <div style={{
                    width: `${percentage}%`,
                    height: '100%',
                    background: 'var(--grad-google-ai)',
                    borderRadius: '999px',
                    transition: 'width 0.3s ease',
                    boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)'
                  }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#475569', fontFamily: 'var(--font-mono)' }}>
                  <span>{percentage}% Total Yield</span>
                  <span>500 Max Points</span>
                </div>
              </div>

              {/* Status Advice Box */}
              <div style={{
                background: 'rgba(248, 250, 252, 0.95)',
                border: `1px solid ${advice.color}40`,
                borderRadius: '16px',
                padding: '1.3rem',
                marginTop: '1.5rem',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: advice.color, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <TrendingUp size={18} /> {advice.title}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.55, margin: 0 }}>
                  {advice.text}
                </p>
              </div>

              <button
                onClick={handleReset}
                className="btn-magnetic btn-magnetic-outline"
                style={{ marginTop: '1.5rem', width: '100%', fontSize: '0.88rem' }}
              >
                <RefreshCw size={14} />
                <span>Reset Simulation</span>
              </button>
            </Interactive3DCard>

            {/* Quick breakdown list */}
            <Interactive3DCard style={{ padding: '1.5rem' }}>
              <h5 style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.85rem' }}>
                Cumulative Score Matrix
              </h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#0f172a' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7' }} /> Round 1: LogicSprint</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{r1Score.toFixed(1)} pts</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#0f172a' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d97706' }} /> Round 2: BugHunt Diagnostics</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{r2Score} pts</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#0f172a' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed' }} /> Round 3: DevSprint (AI)</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{r3Score} pts</span>
                </div>
              </div>
            </Interactive3DCard>

          </div>
        </div>

      </div>
    </section>
  );
};
