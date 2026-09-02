import React, { useState, useEffect } from 'react';
import { 
  Terminal, Bug, Cpu, Trophy, Sparkles, ArrowUpRight, 
  CheckCircle2, Play, RefreshCw, Send, Zap, Volume2, Users, Layers
} from 'lucide-react';

export const LabsBentoGrid = ({ onRegisterClick }) => {
  // 1. R1 Mini Quiz State
  const [r1Answer, setR1Answer] = useState(null);
  const [r1ScoreMsg, setR1ScoreMsg] = useState('');

  const handleR1Answer = (choice) => {
    setR1Answer(choice);
    if (choice === 'correct') {
      setR1ScoreMsg('✓ Correct! +2.5 Points earned in LogicSprint simulation.');
    } else {
      setR1ScoreMsg('✗ Incorrect! -0.5 Penalty applied (DevSpark scoring integrity rule).');
    }
  };

  // 2. R2 Code Debugger State
  const [bugFixed, setBugFixed] = useState(false);

  // 3. R3 Prompt Playground State
  const [promptIdea, setPromptIdea] = useState('Campus Timetable Clash Resolver');
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiOutput, setAiOutput] = useState(
    'Architecture: Node.js + Express + Gemini 1.5 Pro.\nLogic: Graph coloring algorithm to isolate schedule overlaps in <200ms.\nUI: Responsive dashboard with live conflict badges.'
  );

  const handleGenerateAiPrompt = (e) => {
    e.preventDefault();
    setAiGenerating(true);
    setAiOutput('Analyzing problem statement & generating prototype blueprint...');
    setTimeout(() => {
      setAiGenerating(false);
      setAiOutput(
        `Prototype: ${promptIdea}\nFramework: Full-stack MERN + Gemini API\nCore Feature: Multi-threaded heuristics & real-time WebSocket notifications.\nDevSprint Score Potential: 235/250 Pts!`
      );
    }, 700);
  };

  // Equalizer animation bars
  const [equalizerHeights, setEqualizerHeights] = useState([40, 75, 55, 90, 60, 80, 45, 95, 70, 50, 85, 60]);
  useEffect(() => {
    const interval = setInterval(() => {
      setEqualizerHeights(prev => prev.map(() => Math.floor(Math.random() * 65 + 25)));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experiments" style={{ padding: '3rem 0 4.5rem', position: 'relative' }}>
      <div className="container">
        
        {/* Google Labs Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="labs-pill active" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={13} />
            <span>INTERACTIVE SPRINT EXPERIMENTS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: '0.8rem' }}>
            Google Labs <span className="gradient-labs">Interactive Sandbox</span>
          </h2>
          <p style={{ color: '#9aa0a6', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
            Test your logic, fix flawed diagnostic code, and simulate Gemini prompt scaffolding directly inside the DevSpark sandbox.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.25rem'
        }}>
          
          {/* Card 1: Large Featured Hero Bento (Span 12 on mobile, Span 7 on desktop) */}
          <div
            className="labs-card bento-hero"
            style={{
              gridColumn: 'span 7',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(145deg, rgba(20, 25, 42, 0.95) 0%, rgba(10, 12, 18, 0.95) 100%)',
              border: '1px solid rgba(66, 133, 244, 0.35)',
              position: 'relative'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className="labs-pill active" style={{ color: '#4285F4', borderColor: '#4285F4' }}>
                    FEATURED EXPERIMENT
                  </span>
                  <span className="labs-pill" style={{ color: '#34A853', borderColor: '#34A853' }}>
                    ● LIVE SPRINT
                  </span>
                </div>
                <div className="card-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>
                DevSpark: Intra-College Innovation & AI Sprint
              </h3>

              <p style={{ color: '#9aa0a6', fontSize: '0.98rem', lineHeight: 1.6, maxWidth: '580px', marginBottom: '1.5rem' }}>
                Open to all academic disciplines at ABIET Pathankot. Cumulative 500-point scoring model across LogicSprint, BugHunt diagnostics, and Gemini AI-augmented prototyping.
              </p>

              {/* Animated Equalizer Waveform (Google Labs style) */}
              <div style={{
                background: 'rgba(8, 9, 14, 0.85)',
                borderRadius: '14px',
                padding: '1.1rem 1.4rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(66, 133, 244, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Volume2 size={16} color="#8ab4f8" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#5f6368', fontFamily: 'var(--font-mono)' }}>AI SPRINT STREAM</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>Logic & AI Signal Engine</div>
                  </div>
                </div>

                {/* Equalizer Bars */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '32px' }}>
                  {equalizerHeights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: '4px',
                        height: `${h}%`,
                        borderRadius: '2px',
                        background: 'var(--grad-google)',
                        transition: 'height 0.2s ease'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', alignItems: 'center' }}>
              <button
                onClick={onRegisterClick}
                className="btn-labs btn-labs-google"
                style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
              >
                <span>Register Team (2–5 Members)</span>
                <ArrowUpRight size={15} />
              </button>

              <a
                href="#guidelines"
                className="btn-labs btn-labs-outline"
                style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
              >
                <span>Read Full Rulebook</span>
              </a>
            </div>
          </div>

          {/* Card 2: Interactive Sandbox - Round 1 Logic Quiz (Span 5) */}
          <div
            className="labs-card bento-r1"
            style={{
              gridColumn: 'span 5',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(16, 18, 26, 0.85)',
              border: '1px solid rgba(66, 133, 244, 0.25)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="labs-pill" style={{ color: '#4285F4', borderColor: 'rgba(66, 133, 244, 0.4)' }}>
                  LOGICSPARK ARENA
                </span>
                <span style={{ fontSize: '0.75rem', color: '#9aa0a6', fontFamily: 'var(--font-mono)' }}>
                  Round 1 • 100 Pts
                </span>
              </div>

              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.6rem' }}>
                Try a Sample Logic Challenge
              </h4>

              <div style={{
                background: 'rgba(8, 9, 14, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '0.9rem 1.1rem',
                fontSize: '0.85rem',
                color: '#e8eaed',
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)',
                lineHeight: 1.5
              }}>
                Q: An array of 1,024 elements is binary searched. What is the maximum number of comparisons?
              </div>

              {/* Option choices */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                <button
                  onClick={() => handleR1Answer('correct')}
                  style={{
                    background: r1Answer === 'correct' ? 'rgba(52, 168, 83, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: r1Answer === 'correct' ? '1px solid #34A853' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '0.6rem 0.9rem',
                    textAlign: 'left',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>A) 10 Comparisons (log₂ 1024)</span>
                  {r1Answer === 'correct' && <CheckCircle2 size={14} color="#34A853" />}
                </button>

                <button
                  onClick={() => handleR1Answer('wrong1')}
                  style={{
                    background: r1Answer === 'wrong1' ? 'rgba(234, 67, 53, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: r1Answer === 'wrong1' ? '1px solid #EA4335' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '0.6rem 0.9rem',
                    textAlign: 'left',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>B) 512 Comparisons</span>
                </button>

                <button
                  onClick={() => handleR1Answer('wrong2')}
                  style={{
                    background: r1Answer === 'wrong2' ? 'rgba(234, 67, 53, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: r1Answer === 'wrong2' ? '1px solid #EA4335' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '0.6rem 0.9rem',
                    textAlign: 'left',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>C) 1,024 Comparisons</span>
                </button>
              </div>

              {r1ScoreMsg && (
                <div style={{
                  fontSize: '0.8rem',
                  color: r1Answer === 'correct' ? '#34A853' : '#EA4335',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)'
                }}>
                  {r1ScoreMsg}
                </div>
              )}
            </div>

            <div style={{ fontSize: '0.75rem', color: '#5f6368', marginTop: '0.75rem' }}>
              40 Questions in Main Event • +2.5 Correct • -0.5 Incorrect
            </div>
          </div>

          {/* Card 3: Interactive Sandbox - Round 2 Bug Diagnostics (Span 6) */}
          <div
            className="labs-card bento-r2"
            style={{
              gridColumn: 'span 6',
              padding: '2rem',
              background: 'rgba(16, 18, 26, 0.85)',
              border: '1px solid rgba(251, 188, 4, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="labs-pill" style={{ color: '#FBBC04', borderColor: 'rgba(251, 188, 4, 0.4)' }}>
                  BUGHUNT DIAGNOSTIC ARENA
                </span>
                <span style={{ fontSize: '0.75rem', color: '#9aa0a6', fontFamily: 'var(--font-mono)' }}>
                  Round 2 • 150 Pts
                </span>
              </div>

              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Live Code Diagnostics Sandbox
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#9aa0a6', marginBottom: '1rem' }}>
                Locate runtime edge-cases & off-by-one errors across Python, C++, Java, JS.
              </p>

              {/* Code Snippet */}
              <div style={{
                background: 'rgba(8, 9, 14, 0.95)',
                border: `1px solid ${bugFixed ? 'rgba(52, 168, 83, 0.4)' : 'rgba(234, 67, 53, 0.4)'}`,
                borderRadius: '12px',
                padding: '1rem',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                color: '#e8eaed',
                marginBottom: '1rem'
              }}>
                <div style={{ color: '#5f6368', marginBottom: '0.3rem' }}># Tier 2: Edge-Case State Failure</div>
                <div>def calculate_avg(scores):</div>
                <div style={{ paddingLeft: '1rem' }}>
                  {bugFixed ? (
                    <span style={{ color: '#34A853' }}>return sum(scores) / len(scores) if len(scores) &gt; 0 else 0.0</span>
                  ) : (
                    <span style={{ color: '#f87171' }}>return sum(scores) / len(scores)  # Crashes on ZeroDivisionError!</span>
                  )}
                </div>
              </div>

              <button
                onClick={() => setBugFixed(!bugFixed)}
                className="btn-labs btn-labs-outline"
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem',
                  fontSize: '0.85rem',
                  borderColor: bugFixed ? '#34A853' : '#FBBC04',
                  color: bugFixed ? '#34A853' : '#ffffff'
                }}
              >
                <RefreshCw size={14} />
                <span>{bugFixed ? '✓ Bug Patched (Test Cases: 4/4 Passed)' : 'Fix ZeroDivision Crash (Submit Patch)'}</span>
              </button>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#5f6368', marginTop: '1rem' }}>
              Challenge Tiers: Tier 1 (30 Pts) + Tier 2 (50 Pts) + Tier 3 (70 Pts)
            </div>
          </div>

          {/* Card 4: Interactive Sandbox - Round 3 AI Prompt Scaffolding (Span 6) */}
          <div
            className="labs-card bento-r3"
            style={{
              gridColumn: 'span 6',
              padding: '2rem',
              background: 'rgba(16, 18, 26, 0.85)',
              border: '1px solid rgba(234, 67, 53, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="labs-pill" style={{ color: '#EA4335', borderColor: 'rgba(234, 67, 53, 0.4)' }}>
                  DEVSPRINT AI PROMPT LAB
                </span>
                <span style={{ fontSize: '0.75rem', color: '#9aa0a6', fontFamily: 'var(--font-mono)' }}>
                  Round 3 • 250 Pts
                </span>
              </div>

              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Gemini Prompt Scaffolding Tester
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#9aa0a6', marginBottom: '1rem' }}>
                Test your on-the-spot idea prompt for rapid AI-augmented solution builds.
              </p>

              <form onSubmit={handleGenerateAiPrompt} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  value={promptIdea}
                  onChange={(e) => setPromptIdea(e.target.value)}
                  placeholder="e.g. Smart Campus Navigation Bot"
                  className="form-input"
                  style={{ padding: '0.6rem 0.9rem', fontSize: '0.85rem', flex: 1 }}
                />
                <button
                  type="submit"
                  disabled={aiGenerating}
                  className="btn-labs btn-labs-primary"
                  style={{ padding: '0 1rem', flexShrink: 0 }}
                >
                  <Send size={14} />
                </button>
              </form>

              {/* AI Output Terminal */}
              <div style={{
                background: 'rgba(8, 9, 14, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '0.85rem 1rem',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#8ab4f8',
                whiteSpace: 'pre-line',
                minHeight: '80px',
                lineHeight: 1.5
              }}>
                {aiOutput}
              </div>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#5f6368', marginTop: '1rem' }}>
              Approved AI Tools: Gemini, ChatGPT, Claude, GitHub Copilot, v0
            </div>
          </div>

          {/* Card 5: Prize Foil Card (Span 6) */}
          <div
            className="labs-card bento-prizes"
            style={{
              gridColumn: 'span 6',
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(28, 22, 12, 0.9) 0%, rgba(14, 16, 24, 0.9) 100%)',
              border: '1px solid rgba(251, 188, 4, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <span className="labs-pill" style={{ color: '#FBBC04', borderColor: '#FBBC04', marginBottom: '0.75rem' }}>
                ₹28,000 PRIZE STAGE
              </span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: '0.4rem 0' }}>
                Podium Cash Rewards
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#9aa0a6', margin: 0 }}>
                1st: ₹15,000 • 2nd: ₹8,000 • 3rd: ₹5,000 + Winner Trophies and Official Merit Certificates.
              </p>
            </div>

            <a
              href="#prizes"
              className="btn-labs btn-labs-primary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
            >
              <span>View Podium</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Card 6: Multi-Disciplinary Synergies (Span 6) */}
          <div
            className="labs-card bento-teams"
            style={{
              gridColumn: 'span 6',
              padding: '2rem',
              background: 'rgba(16, 18, 26, 0.85)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <span className="labs-pill" style={{ color: '#c084fc', borderColor: '#c084fc', marginBottom: '0.75rem' }}>
                OPEN ELIGIBILITY (2–5 MEMBERS)
              </span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: '0.4rem 0' }}>
                Multi-Disciplinary Teams
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#9aa0a6', margin: 0 }}>
                Open to all academic years and streams (CSE, IT, Management, Commerce, Applied Sciences).
              </p>
            </div>

            <button
              onClick={onRegisterClick}
              className="btn-labs btn-labs-outline"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
            >
              <span>Build Roster</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .bento-hero, .bento-r1, .bento-r2, .bento-r3, .bento-prizes, .bento-teams {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
