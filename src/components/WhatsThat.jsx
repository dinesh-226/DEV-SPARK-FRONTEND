import React, { useState } from 'react';
import { Layers, Laptop, Cpu, Trophy, Play, Users, Coffee, Clock, ArrowRight } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const WhatsThat = ({ onRegisterClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      num: '01',
      title: '500-Pt Cumulative',
      subtitle: 'Zero Mid-Event Elimination',
      desc: 'All teams participate across all 3 rounds. Standings are determined strictly by aggregate score at the final ceremony.',
      color: '#059669' // Emerald Green
    },
    {
      num: '02',
      title: 'BYOD Infrastructure',
      subtitle: 'Bring Your Own Device',
      desc: 'Work on your own laptops with your custom dev environment. High-speed campus Wi-Fi and power grid provided in the Auditorium.',
      color: '#047857' // Forest Green
    },
    {
      num: '03',
      title: 'AI Tools Permitted',
      subtitle: 'Rapid Prototype Scaffolding',
      desc: 'Leverage Gemini, ChatGPT, Claude, GitHub Copilot, and v0 during Round 3 for fast ideation, architecture, and coding.',
      color: '#10b981' // Mint Bright Green
    },
    {
      num: '04',
      title: '₹19,000 Cash Pool',
      subtitle: 'Top 3 Winning Teams',
      desc: '1st: ₹10,000 • 2nd: ₹5,500 • 3rd: ₹3,500 + Winner Trophies + Official Certificates of Participation for every attendee.',
      color: '#064e3b' // Deep Emerald
    }
  ];

  const highlights = [
    {
      icon: Users,
      title: 'Join as a Team',
      desc: 'Form multidisciplinary squads of 2 to 5 members across departments.',
      color: '#059669'
    },
    {
      icon: Coffee,
      title: 'Snacks & Refreshments',
      desc: 'Complimentary mid-day meals and networking breaks provided.',
      color: '#047857'
    },
    {
      icon: Clock,
      title: 'Synchronized AI Sprint',
      desc: '09:00 AM to 05:15 PM full single-day rapid innovation challenge.',
      color: '#10b981'
    }
  ];

  return (
    <section id="overview" style={{ padding: '5.5rem 0 3.5rem', position: 'relative' }}>
      
      {/* Animated Flowing Green Circuit Line - Moved above the section header */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'visible'
        }}
      >
        <path
          d="M 120 0 L 120 25 Q 120 42 145 42 L 920 42 Q 945 42 945 68 L 945 680 Q 945 720 900 720 L 80 720"
          stroke="#059669"
          strokeWidth="1.8"
          strokeDasharray="6 4"
          fill="none"
          opacity="0.35"
          style={{ animation: 'cableFlow 3s linear infinite' }}
        />
        <circle cx="120" cy="25" r="3.5" fill="#047857" />
        <circle cx="945" cy="68" r="3.5" fill="#10b981" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="crimson-pill" style={{ marginBottom: '0.6rem' }}>
            EVENT OVERVIEW
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0f2e22', marginBottom: '0.5rem' }}>
            Event Overview & Structure
          </h2>
          <p style={{ color: '#4b5563', maxWidth: '640px', fontSize: '0.98rem', lineHeight: 1.6 }}>
            An intensive 1-day sprint designed to bridge fundamental logic, problem diagnostics, and modern AI solution prototyping.
          </p>
        </div>

        {/* 4 Clean Cards Grid on Pure White Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4.5rem'
        }}>
          {features.map((item) => (
            <TiltCard3D
              key={item.num}
              className="dribbble-card"
              maxTilt={10}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                background: '#ffffff',
                border: '1px solid rgba(5, 150, 105, 0.15)',
                borderTop: `3.5px solid ${item.color}`,
                boxShadow: '0 4px 20px rgba(6, 78, 59, 0.05)'
              }}
            >
              <div>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: item.color,
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.85rem'
                }}>
                  {item.num}
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#0f2e22', marginBottom: '0.35rem' }}>
                  {item.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: item.color, fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.85rem', letterSpacing: '0.02em' }}>
                  {item.subtitle}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Video / Quote Showcase Block */}
        <TiltCard3D
          maxTilt={6}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4.5rem',
            padding: '2.5rem',
            background: '#ffffff',
            border: '1px solid rgba(5, 150, 105, 0.22)',
            borderRadius: '12px',
            boxShadow: '0 8px 30px rgba(6, 78, 59, 0.06)'
          }}
        >
          {/* Left Video Player Box */}
          <div
            style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              background: '#04130d',
              minHeight: '280px',
              maxHeight: '460px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1.5px solid rgba(5, 150, 105, 0.35)',
              boxShadow: '0 8px 24px rgba(6, 78, 59, 0.12)'
            }}
          >
            <video
              src="/organizers/highlight_reel.mp4"
              controls
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                maxHeight: '460px',
                objectFit: 'contain',
                borderRadius: '8px',
                display: 'block',
                background: '#000000'
              }}
            />

            {/* Badge Overlay */}
            <div style={{
              position: 'absolute',
              top: '0.85rem',
              left: '0.85rem',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              color: '#ffffff',
              background: 'rgba(5, 150, 105, 0.92)',
              backdropFilter: 'blur(8px)',
              padding: '0.3rem 0.65rem',
              borderRadius: '4px',
              fontWeight: 800,
              zIndex: 2,
              pointerEvents: 'none',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)'
            }}>
              ▶ SPRINT HIGHLIGHT REEL & PROTOTYPE DEMOS
            </div>
          </div>

          {/* Right Quote & Philosophy */}
          <div>
            <blockquote style={{
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#0f2e22',
              lineHeight: 1.35,
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-heading)'
            }}>
              "Tell me and I will forget, show me and I may remember, involve me and I will understand."
            </blockquote>
            <div style={{ color: '#059669', fontWeight: 700, fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              Xunzi • Applied Learning Philosophy
            </div>

            <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
              DevSpark is built on developer-first community principles. Rather than passive lectures, every student actively diagnoses code, tests edge cases, and builds functional prototypes before an expert jury.
            </p>
          </div>
        </TiltCard3D>

        {/* 3 Interactive Feature Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          paddingTop: '1rem'
        }}>
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: `2px solid ${h.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: h.color,
                  flexShrink: 0,
                  background: '#ffffff',
                  boxShadow: '0 2px 10px rgba(6, 78, 59, 0.06)'
                }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#0f2e22', marginBottom: '0.35rem' }}>
                    {h.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.55, margin: 0 }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
