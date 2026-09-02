import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const TimelineSection = () => {
  const schedule = [
    {
      time: '09:00 AM – 09:45 AM',
      phase: 'Phase 01',
      title: 'Reporting, Desk Check-in & System Readiness',
      desc: 'Team badge allocation, BYOD Wi-Fi authentication, and table clustering.',
      color: '#059669'
    },
    {
      time: '09:45 AM – 10:15 AM',
      phase: 'Phase 02',
      title: 'Inauguration & Operational Briefing',
      desc: 'Opening remarks by HOD (CSE), rulebook overview, and 500-pt scoring guidelines.',
      color: '#047857'
    },
    {
      time: '10:15 AM – 11:00 AM',
      phase: 'Phase 03',
      title: 'Round 1: LogicSprint (Aptitude & Tech Assessment)',
      desc: '40 Objective questions (+2.5 / -0.5). Synchronized digital freeze at 11:00 AM.',
      color: '#059669'
    },
    {
      time: '11:15 AM – 12:30 PM',
      phase: 'Phase 04',
      title: 'Round 2: BugHunt & Logic Tracing (Debugging)',
      desc: '3 Challenge tiers across Python, C++, Java, JS with hidden test suite execution.',
      color: '#047857'
    },
    {
      time: '12:30 PM – 01:30 PM',
      phase: 'Phase 05',
      title: 'Lunch & Mid-Day Networking Break',
      desc: 'Complimentary lunch for all teams; mid-sprint score audits.',
      color: '#10b981'
    },
    {
      time: '01:30 PM – 03:15 PM',
      phase: 'Phase 06',
      title: 'Round 3: DevSprint (AI Prototyping Build)',
      desc: 'Problem statement release; 90 mins AI build window + 15 mins code freeze.',
      color: '#059669'
    },
    {
      time: '03:15 PM – 04:15 PM',
      phase: 'Phase 07',
      title: 'Live Stage Demonstrations & Technical Q&A',
      desc: '3–4 min prototype defense per team evaluated on the 250-pt rubric.',
      color: '#047857'
    },
    {
      time: '04:40 PM – 05:15 PM',
      phase: 'Phase 08',
      title: 'Valedictory Ceremony & Prize Distribution',
      desc: 'Announcement of Top 3 winners (₹10k, ₹5.5k, ₹3.5k + Trophies + Certificates).',
      color: '#10b981'
    }
  ];

  return (
    <section id="schedule" style={{ padding: '5.5rem 0', background: '#f4f8f6', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="crimson-pill" style={{ marginBottom: '0.6rem' }}>
            EVENT SCHEDULE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0f2e22', marginBottom: '0.5rem' }}>
            Master Sprint Timeline
          </h2>
          <p style={{ color: '#4b5563', maxWidth: '640px', fontSize: '0.98rem', lineHeight: 1.6 }}>
            A synchronized single-day schedule from 09:00 AM to 05:15 PM.
          </p>
        </div>

        {/* Schedule List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {schedule.map((item, idx) => (
            <TiltCard3D
              key={idx}
              className="dribbble-card"
              maxTilt={8}
              style={{
                padding: '1.6rem',
                border: '1px solid rgba(5, 150, 105, 0.15)',
                borderLeft: `4px solid ${item.color}`,
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 3px 15px rgba(6, 78, 59, 0.04)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', color: item.color, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    {item.phase}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#4b5563', fontFamily: 'var(--font-mono)' }}>
                    {item.time}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#0f2e22', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </section>
  );
};
