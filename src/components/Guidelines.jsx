import React, { useState } from 'react';
import { 
  FileText, CheckCircle2, ShieldCheck, Laptop, 
  Users, AlertTriangle, ArrowRight, Sparkles 
} from 'lucide-react';
import { Interactive3DCard } from './Interactive3DCard';

export const Guidelines = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Executive Summary' },
    { id: 'eligibility', label: 'Eligibility & Team Roster' },
    { id: 'byod', label: 'BYOD Infrastructure' },
    { id: 'scoring', label: '500-Pt Scoring Matrix' },
    { id: 'contingency', label: 'Risk & Contingency' }
  ];

  return (
    <section id="guidelines" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <div className="labs-pill active" style={{ marginBottom: '0.75rem' }}>
            <FileText size={13} />
            <span>DEVSPARK MASTER SPECIFICATIONS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: '0.8rem' }}>
            Comprehensive <span className="gradient-labs-ai">Event Guidelines</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
            Read through the complete operational execution blueprint, team formation policies, hardware standards, and scoring integrity rules.
          </p>
        </div>

        {/* Google Labs Sliding Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div className="filter-bar-wrapper">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`filter-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Card with 3D Tilt */}
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <Interactive3DCard style={{ padding: '2.5rem' }}>
            {activeTab === 'overview' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Sparkles size={22} color="#0284c7" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: '#0f172a' }}>Executive Summary</h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, fontFamily: 'var(--font-mono)' }}>
                      DevSpark — Intra-College Innovation & AI Sprint • Team Stack Tracers
                    </p>
                  </div>
                </div>

                <p style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  DevSpark is an open, multidisciplinary campus innovation and technical competition organized by <strong>Team Stack Tracers</strong> under the Department of Computer Science & Engineering at <strong>Aman Bhalla Institute of Engineering and Technology (ABIET)</strong>, Kotli, Pathankot.
                </p>

                <div style={{
                  background: 'rgba(240, 249, 255, 0.8)',
                  border: '1px solid rgba(186, 230, 253, 0.9)',
                  borderRadius: '16px',
                  padding: '1.4rem',
                  marginBottom: '1.75rem'
                }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0369a1', marginBottom: '0.5rem' }}>Developer-First Philosophy</h4>
                  <p style={{ fontSize: '0.92rem', color: '#475569', margin: 0, lineHeight: 1.65 }}>
                    Inspired by developer-first community initiatives (such as Google Developer Student Clubs and DevFest), DevSpark bridges foundational logic, systematic problem diagnostics, and modern AI-assisted product development. The competition follows a <strong>non-eliminatory cumulative scoring framework</strong>, allowing every participating team to engage in all stages of the competition, with the final top 3 teams determined by aggregate performance.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'rgba(248, 250, 252, 0.9)', padding: '1.1rem 1.25rem', borderRadius: '14px', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>ORGANIZING BODY</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '0.2rem' }}>Team Stack Tracers</div>
                  </div>
                  <div style={{ background: 'rgba(248, 250, 252, 0.9)', padding: '1.1rem 1.25rem', borderRadius: '14px', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>INSTITUTION</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '0.2rem' }}>ABIET, Pathankot</div>
                  </div>
                  <div style={{ background: 'rgba(248, 250, 252, 0.9)', padding: '1.1rem 1.25rem', borderRadius: '14px', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>PRIMARY VENUE</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '0.2rem' }}>Main Auditorium & Hall</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'eligibility' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Users size={22} color="#7c3aed" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: '#0f172a' }}>Open Campus Eligibility & Multi-Disciplinary Teaming</h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, fontFamily: 'var(--font-mono)' }}>
                      Section 3.1 & 3.2 • Cross-Discipline Synergy
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="#059669" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.98rem' }}>Open to All Academic Streams & Years:</strong>
                      <p style={{ color: '#475569', fontSize: '0.92rem', margin: '0.2rem 0 0' }}>
                        Open to all registered students of Colleges, regardless of degree, department, or academic year (Engineering, Computer Applications, Management, Commerce, and Basic Sciences).
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="#059669" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.98rem' }}>Multi-Disciplinary Team Composition:</strong>
                      <p style={{ color: '#475569', fontSize: '0.92rem', margin: '0.2rem 0 0' }}>
                        Teams can be composed of members from different departments (e.g., combining a Computer Applications student for development, a Business/Management student for product design and pitching, and a Science/Engineering student for analytical logic).
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="#059669" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.98rem' }}>Team Size Parameters:</strong>
                      <p style={{ color: '#475569', fontSize: '0.92rem', margin: '0.2rem 0 0' }}>
                        <strong>Minimum: 2 Members</strong> • <strong>Maximum: 5 Members</strong>. Single-member registrations are not permitted.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommended Synergy Matrix */}
                <div style={{ background: 'rgba(243, 232, 255, 0.6)', border: '1px solid rgba(216, 180, 254, 0.8)', borderRadius: '16px', padding: '1.4rem' }}>
                  <h4 style={{ fontSize: '0.98rem', color: '#7c3aed', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={16} /> Recommended 4–5 Member Team Synergy Roster
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                    <div style={{ background: '#ffffff', padding: '0.85rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0284c7' }}>Dev & Architecture</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>CSE / IT / BCA / MCA</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '0.85rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#059669' }}>AI Prompt Specialist</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>AI / Web Developer</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '0.85rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#db2777' }}>Product & Pitch</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>BBA / MBA / Commerce</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '0.85rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#d97706' }}>Logic Diagnostics</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Science / Engineering</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'byod' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(52, 211, 153, 0.15)',
                    border: '1px solid rgba(52, 211, 153, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Laptop size={22} color="#059669" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: '#0f172a' }}>Infrastructure & BYOD (Bring Your Own Device)</h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, fontFamily: 'var(--font-mono)' }}>
                      Section 3.3 & 6.0 • Technical Requirements
                    </p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ background: 'rgba(248, 250, 252, 0.9)', border: '1px solid rgba(226, 232, 240, 0.8)', borderRadius: '16px', padding: '1.4rem' }}>
                    <h4 style={{ fontSize: '1rem', color: '#0284c7', marginBottom: '0.85rem' }}>🏛️ Institution Setup</h4>
                    <ul style={{ paddingLeft: '1.2rem', color: '#475569', fontSize: '0.9rem', lineHeight: 1.7 }}>
                      <li>Central Auditorium / Seminar Hall space</li>
                      <li>Collaborative cluster table seating per team</li>
                      <li>Dedicated high-bandwidth campus Wi-Fi network</li>
                      <li>Central AV projection and audio broadcast</li>
                      <li>High-capacity electrical distribution & power grid</li>
                    </ul>
                  </div>

                  <div style={{ background: 'rgba(248, 250, 252, 0.9)', border: '1px solid rgba(226, 232, 240, 0.8)', borderRadius: '16px', padding: '1.4rem' }}>
                    <h4 style={{ fontSize: '1rem', color: '#059669', marginBottom: '0.85rem' }}>💻 Team Checklist</h4>
                    <ul style={{ paddingLeft: '1.2rem', color: '#475569', fontSize: '0.9rem', lineHeight: 1.7 }}>
                      <li>Laptops (minimum 1, recommended 2–3 per team)</li>
                      <li>Original power adapters and laptop chargers</li>
                      <li>Multi-plug extension spike guard strips</li>
                      <li>Preferred working software, IDEs and GenAI accounts</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'scoring' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(251, 191, 36, 0.15)',
                    border: '1px solid rgba(251, 191, 36, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ShieldCheck size={22} color="#d97706" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: '#0f172a' }}>500-Point Scoring Matrix & Tie-Breaker Protocol</h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, fontFamily: 'var(--font-mono)' }}>
                      Section 4.0 • Non-Eliminatory Architecture
                    </p>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(224, 242, 254, 0.8), rgba(243, 232, 255, 0.8))',
                  border: '1px solid rgba(186, 230, 253, 0.9)',
                  borderRadius: '16px',
                  padding: '1.4rem',
                  marginBottom: '1.75rem'
                }}>
                  <div style={{ fontSize: '0.82rem', color: '#0369a1', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    AGGREGATE SCORING FORMULA
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0.4rem 0' }}>
                    Round 1 (100 Pts) + Round 2 (150 Pts) + Round 3 (250 Pts) = <span className="gradient-labs-ai">500 Max Points</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>
                    Every team stays in the competition until the final podium announcement.
                  </p>
                </div>

                <h4 style={{ fontSize: '1.05rem', color: '#0f172a', marginBottom: '0.85rem' }}>⚖️ Tie-Breaker Precedence Order</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)', padding: '0.9rem 1.2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                    <span className="labs-pill cyan" style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem' }}>Tier 1</span>
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>Higher score in <strong>Round 3 (DevSprint AI Prototype)</strong> takes precedence.</span>
                  </div>
                  <div style={{ background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)', padding: '0.9rem 1.2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                    <span className="labs-pill cyan" style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem' }}>Tier 2</span>
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>If still tied, higher score in <strong>Round 2 (BugHunt Diagnostics)</strong> decides rank.</span>
                  </div>
                  <div style={{ background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)', padding: '0.9rem 1.2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                    <span className="labs-pill cyan" style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem' }}>Tier 3</span>
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>If still tied, fastest overall submission timestamp in <strong>Round 1 (LogicSprint)</strong> applies.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contingency' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(244, 63, 94, 0.15)',
                    border: '1px solid rgba(244, 63, 94, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <AlertTriangle size={22} color="#e11d48" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: '#0f172a' }}>Contingency & Risk Management Protocols</h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, fontFamily: 'var(--font-mono)' }}>
                      Section 4.0 • Zero-Downtime Assurance
                    </p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ background: 'rgba(248, 250, 252, 0.9)', border: '1px solid rgba(226, 232, 240, 0.8)', borderRadius: '16px', padding: '1.4rem' }}>
                    <h4 style={{ fontSize: '1rem', color: '#0284c7', marginBottom: '0.6rem' }}>📶 Network & Wi-Fi Glitch Fallback</h4>
                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65 }}>
                      Dedicated secondary hotspot tethering and offline local subnet server prepared on standby by Technical Leads Love & Nishant.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(248, 250, 252, 0.9)', border: '1px solid rgba(226, 232, 240, 0.8)', borderRadius: '16px', padding: '1.4rem' }}>
                    <h4 style={{ fontSize: '1rem', color: '#059669', marginBottom: '0.6rem' }}>🖥️ Hardware Contingency Lab</h4>
                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65 }}>
                      5 pre-configured desktop workstations reserved in the adjoining CSE Lab for emergency migration if any team experiences hardware failure.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Interactive3DCard>
        </div>

      </div>
    </section>
  );
};
