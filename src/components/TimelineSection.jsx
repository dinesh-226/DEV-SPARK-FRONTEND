import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const TimelineSection = () => {
  const schedule = [
    {
      time: '09:30 AM Sharp',
      phase: 'Check-in',
      title: 'Reporting & Desk Check-in',
      desc: 'Team badge allocation, BYOD Wi-Fi authentication, and Auditorium table clustering.',
      color: '#059669'
    },
    {
      time: '10:00 AM – 10:15 AM',
      phase: 'Briefing',
      title: 'Operational Briefing',
      desc: 'Opening remarks by HOD (CSE), rulebook overview, and 200-pt Top 3 winner scoring guidelines.',
      color: '#047857'
    },
    {
      time: '10:15 AM – 11:00 AM',
      phase: 'Round 01',
      title: 'Round 1: LogicSprint (Aptitude & Tech Assessment)',
      desc: '40 Objective MCQs (+2.5 / -0.5 marking). Synchronized digital auto-lock at 11:00 AM.',
      color: '#059669'
    },
    {
      time: '11:00 AM – 11:15 AM',
      phase: 'Break',
      title: '15 Min Break',
      desc: 'Short 15 min break and transition for Round 2 prototype showcase.',
      color: '#10b981'
    },
    {
      time: '11:15 AM – 12:00 PM',
      phase: 'Round 02 • Phase 1 (100 Pts)',
      title: 'Round 2: DevSprint Showcase (Phase 1 — 100 Pts)',
      desc: 'All teams showcase their home-built working prototype before the evaluation jury (100 Pts). Scores in Phase 1 determine the Top 5 shortlist.',
      color: '#059669'
    },
    {
      time: '12:00 PM – 12:15 PM',
      phase: 'Shortlist',
      title: '15-Min Break & Top 5 Finalists Announcement',
      desc: 'Jury aggregates preliminary scores and announces the Top 5 finalist squads.',
      color: '#047857'
    },
    {
      time: '12:15 PM – 01:15 PM',
      phase: 'Round 02 • Phase 2 (100 Pts)',
      title: 'Round 2: DevSprint Finalist Stage Defense (Phase 2 — 100 Pts)',
      desc: 'Top 5 finalists deliver in-depth stage defense & technical jury Q&A (100 Pts). Combined with Round 1 (100 Pts) = 200 Total Points to evaluate the Top 3 Winners.',
      color: '#059669'
    },
    {
      time: '01:15 PM – 02:00 PM',
      phase: 'Lunch',
      title: 'Lunch Break & Mid-Day Networking',
      desc: 'Complimentary lunch for all participants; final score compilation.',
      color: '#10b981'
    },
    {
      time: '02:00 PM – 02:30 PM',
      phase: 'Ceremony',
      title: 'Valedictory Ceremony & Accolades Distribution',
      desc: 'Announcement of Top 3 Winners (evaluated out of 200 Pts: R1 + R2 Phase 2), Trophies, and Official Department Certificates.',
      color: '#047857'
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
            A synchronized single-day schedule from 09:30 AM to 02:30 PM.
          </p>
        </div>

        {/* Schedule List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
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
