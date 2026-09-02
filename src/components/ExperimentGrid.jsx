import React, { useState } from 'react';
import { 
  Interactive3DCard 
} from './Interactive3DCard';
import { 
  Sparkles, Terminal, Bug, Cpu, Music, Trophy, 
  ArrowRight, CheckCircle2, Play, Volume2, Users, Layers, ExternalLink 
} from 'lucide-react';

export const ExperimentGrid = ({ onRegisterClick }) => {
  // Category Filter State
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Interactive sandbox states
  const [r1Answer, setR1Answer] = useState(null);
  const [r2BugFixed, setR2BugFixed] = useState(false);
  const [promptInput, setPromptInput] = useState('Campus Roommate Compatibility Finder');
  const [generatedScaffold, setGeneratedScaffold] = useState('');

  const categories = ['All Experiments', 'Generative AI', 'Developer & Code', 'Logic & Aptitude', 'Audio & Vision', 'Awards'];

  const experiments = [
    {
      id: 'exp1',
      title: 'DevSprint: GenAI Rapid Solution Prototyping',
      category: 'Generative AI',
      tag: 'EXPERIMENT 01 • 250 PTS',
      tagColor: 'purple',
      description: 'On-the-spot problem statement sprint. Build functional full-stack prototypes leveraging Gemini, ChatGPT, Claude, and Copilot with live stage defense.',
      icon: Cpu,
      gradient: 'linear-gradient(135deg, #e0e7ff 0%, #fae8ff 100%)',
      previewType: 'prompt',
      actionText: 'Launch AI Sprint Track',
      actionHref: '#rounds'
    },
    {
      id: 'exp2',
      title: 'BugHunt: Live Diagnostics & Logic Tracing',
      category: 'Developer & Code',
      tag: 'EXPERIMENT 02 • 150 PTS',
      tagColor: 'cyan',
      description: 'Hands-on debugging arena. Trace flawed call-stacks, resolve edge-cases, and fix runtime crashes across Python, C++, Java, and JavaScript.',
      icon: Bug,
      gradient: 'linear-gradient(135deg, #e0f2fe 0%, #ecfdf5 100%)',
      previewType: 'code',
      actionText: 'Explore Diagnostics Arena',
      actionHref: '#rounds'
    },
    {
      id: 'exp3',
      title: 'LogicSprint: Algorithmic & Tech Assessment',
      category: 'Logic & Aptitude',
      tag: 'EXPERIMENT 03 • 100 PTS',
      tagColor: 'mint',
      description: '45-minute synchronized digital assessment testing algorithmic reasoning, pseudo-code flowcharts, and cloud/AI fundamentals (+2.5 / -0.5 points).',
      icon: Terminal,
      gradient: 'linear-gradient(135deg, #ecfdf5 0%, #fef3c7 100%)',
      previewType: 'quiz',
      actionText: 'Test Logic Challenge',
      actionHref: '#rounds'
    },
    {
      id: 'exp4',
      title: 'MusicFX & Audio AI Signal Sandbox',
      category: 'Audio & Vision',
      tag: 'EXPERIMENTAL SANDBOX',
      tagColor: 'purple',
      description: 'Inspired by Google MusicFX. Explore generative soundscapes, audio waveform synthesis, and real-time algorithmic audio tokenization.',
      icon: Music,
      gradient: 'linear-gradient(135deg, #fdf4ff 0%, #e0e7ff 100%)',
      previewType: 'audio',
      actionText: 'Listen to AI Waveform',
      actionHref: '#calculator'
    },
    {
      id: 'exp5',
      title: '₹28,000 Cash Pool & Recognition Podium',
      category: 'Awards',
      tag: 'AWARDS & MERIT',
      tagColor: 'amber',
      description: '1st Place (₹15,000 Gold Champion), 2nd Place (₹8,000), 3rd Place (₹5,000) + Winner Trophies and official NAAC/NBA Accreditation portfolio certificates.',
      icon: Trophy,
      gradient: 'linear-gradient(135deg, #fef3c7 0%, #fee2e2 100%)',
      previewType: 'trophy',
      actionText: 'View Podium Awards',
      actionHref: '#prizes'
    },
    {
      id: 'exp6',
      title: 'Multidisciplinary Team Synergy Engine',
      category: 'Generative AI',
      tag: '2–5 MEMBER ROSTER',
      tagColor: 'cyan',
      description: 'Open campus teaming combining engineering programmers, business pitch presenters, and science logic specialists across all academic years.',
      icon: Users,
      gradient: 'linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 100%)',
      previewType: 'team',
      actionText: 'Register Team Roster',
      actionHref: '#register'
    }
  ];

  const handleGeneratePrompt = (e) => {
    e.preventDefault();
    setGeneratedScaffold(`Scaffolded: ${promptInput} \nStack: MERN + Gemini 1.5 Pro \nArchitecture: Real-time heuristic matching with <150ms latency.`);
  };

  const filteredExperiments = selectedCategory === 'All Experiments'
    ? experiments
    : experiments.filter(e => e.category === selectedCategory || (selectedCategory === 'All' && true));

  return (
    <section id="experiments" style={{ padding: '4.5rem 0 5.5rem', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <div className="labs-pill active" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={13} />
            <span>INTERACTIVE GOOGLE LABS EXPERIMENT GALLERY</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', marginBottom: '0.8rem' }}>
            Explore AI <span className="gradient-labs-ai">Experiments & Sprints</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem' }}>
            Interactive early-stage sprint sandboxes, logic tests, and prompt prototyping tools. Hover over any card for smooth 3D tilt and gleam.
          </p>
        </div>

        {/* Category Pill Sliding Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div className="filter-bar-wrapper">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Experiment Cards Grid (3 Columns on Desktop, 1 on Mobile) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredExperiments.map((item) => {
            const Icon = item.icon;
            return (
              <Interactive3DCard
                key={item.id}
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '440px'
                }}
              >
                {/* 1. Card Top: Sleek Interactive Preview Box */}
                <div>
                  <div style={{
                    background: item.gradient,
                    borderRadius: '16px',
                    padding: '1.25rem',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '140px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    {/* Floating Glass Icon in Top Right */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}>
                      <Icon size={20} color="#0f172a" />
                    </div>

                    {/* Preview Type Interactive Sandbox Renderers */}
                    {item.previewType === 'prompt' && (
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#6366f1', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          PROMPT SCAFFOLDER
                        </div>
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.9)',
                          padding: '0.6rem 0.8rem',
                          borderRadius: '10px',
                          fontSize: '0.78rem',
                          color: '#0f172a',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {generatedScaffold || 'Try: "Campus Attendance Scanner via AI"'}
                        </div>
                      </div>
                    )}

                    {item.previewType === 'code' && (
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#0284c7', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          CODE DIAGNOSTIC
                        </div>
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          padding: '0.6rem 0.8rem',
                          borderRadius: '10px',
                          fontSize: '0.78rem',
                          color: r2BugFixed ? '#059669' : '#e11d48',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {r2BugFixed ? '✓ return total / len(arr) if len(arr) > 0' : '✗ return total / len(arr) # ZeroDivision!'}
                        </div>
                      </div>
                    )}

                    {item.previewType === 'quiz' && (
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          LOGIC ASSESSMENT
                        </div>
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          padding: '0.6rem 0.8rem',
                          borderRadius: '10px',
                          fontSize: '0.78rem',
                          color: '#0f172a',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          Q: Time complexity of Binary Search? <strong style={{ color: '#059669' }}>O(log N)</strong>
                        </div>
                      </div>
                    )}

                    {item.previewType === 'audio' && (
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#9333ea', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          AUDIO EQUALIZER
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '28px' }}>
                          {[40, 75, 55, 90, 60, 80, 45, 95, 70, 50, 85, 60].map((h, i) => (
                            <div key={i} style={{ width: '4px', height: `${h}%`, borderRadius: '2px', background: 'var(--grad-google-ai)' }} />
                          ))}
                        </div>
                      </div>
                    )}

                    {item.previewType === 'trophy' && (
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#d97706', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          ₹28,000 TOTAL REWARDS
                        </div>
                        <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#b45309', fontFamily: 'var(--font-heading)' }}>
                          ₹15,000 <span style={{ fontSize: '0.85rem', color: '#64748b' }}>1st</span> • ₹8,000 <span style={{ fontSize: '0.85rem', color: '#64748b' }}>2nd</span> • ₹5,000 <span style={{ fontSize: '0.85rem', color: '#64748b' }}>3rd</span>
                        </div>
                      </div>
                    )}

                    {item.previewType === 'team' && (
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#0284c7', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          MULTIDISCIPLINARY
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 700 }}>
                          CSE + Management + Basic Sciences (2–5 Members)
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. Card Body: Clean Title, Short Feature Description, Category Pill Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                    <span className={`labs-pill ${item.tagColor}`} style={{ fontSize: '0.72rem', padding: '0.2rem 0.65rem' }}>
                      {item.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      {item.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                {/* 3. Card Footer: "Try Experiment" Button with Arrow Slide Effect */}
                <div style={{
                  paddingTop: '1.25rem',
                  marginTop: '1.5rem',
                  borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <a
                    href={item.actionHref}
                    className="btn-magnetic btn-magnetic-primary"
                    style={{ padding: '0.6rem 1.35rem', fontSize: '0.85rem', width: '100%', justifyContent: 'space-between' }}
                    onClick={(e) => {
                      if (item.actionHref === '#register') {
                        e.preventDefault();
                        onRegisterClick();
                      }
                    }}
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight size={16} className="arrow-slide" />
                  </a>
                </div>
              </Interactive3DCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
