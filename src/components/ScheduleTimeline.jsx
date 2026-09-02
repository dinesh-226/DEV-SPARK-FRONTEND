import React, { useState } from 'react';
import { Calendar, Clock, MapPin, UserCheck, Sparkles } from 'lucide-react';
import { Interactive3DCard } from './Interactive3DCard';

export const ScheduleTimeline = () => {
  const [filterCategory, setFilterCategory] = useState('all');

  const scheduleData = [
    {
      phase: 'Phase 1',
      title: 'Reporting, Desk Registration & System Readiness',
      time: '09:00 AM – 09:45 AM',
      duration: '45 mins',
      category: 'onboarding',
      color: '#0284c7',
      pillColor: 'cyan',
      lead: 'Lead Coordinators (Rishabh, Dinesh)',
      venue: 'Main Auditorium Foyer / Reception Desk',
      details: 'Team check-in, confirmation of team attendance (2–5 members per team), physical badge allocation, cluster table onboarding, BYOD Wi-Fi & charger checks.'
    },
    {
      phase: 'Phase 2',
      title: 'Inauguration, Welcome Address & Rule Briefing',
      time: '09:45 AM – 10:15 AM',
      duration: '30 mins',
      category: 'ceremony',
      color: '#d97706',
      pillColor: 'amber',
      lead: 'Event Hosts (Manya, Shivani)',
      venue: 'Main Auditorium Stage',
      details: 'Opening remarks by Principal, Head of Department (CSE), and Class Coordinators. Comprehensive operational briefing outlining 500-pt scoring model and code of conduct.'
    },
    {
      phase: 'Phase 3',
      title: 'Round 1: LogicSprint (Aptitude & Tech Assessment)',
      time: '10:15 AM – 11:00 AM',
      duration: '45 mins',
      category: 'competition',
      color: '#0284c7',
      pillColor: 'cyan',
      lead: 'Technical Leads (Love, Nishant)',
      venue: 'Central Auditorium Seating Clusters',
      details: 'Live digital quiz (40 Questions | +2.5 / -0.5). Synchronized digital launch, active invigilation, and automated freeze at 11:00 AM sharp.'
    },
    {
      phase: 'Phase 4',
      title: 'Operational Transition & Round 2 Briefing',
      time: '11:00 AM – 11:15 AM',
      duration: '15 mins',
      category: 'break',
      color: '#64748b',
      pillColor: 'cyan',
      lead: 'Technical Team & Stage Hosts',
      venue: 'Main Auditorium Stage',
      details: 'Short hydration break. Live projector briefing on Round 2 diagnostics structure (Tier 1 Syntax, Tier 2 Exceptions, Tier 3 Logic Faults) and challenge repository links.'
    },
    {
      phase: 'Phase 5',
      title: 'Round 2: BugHunt & Logic Tracing (Code Debugging)',
      time: '11:15 AM – 12:30 PM',
      duration: '75 mins',
      category: 'competition',
      color: '#d97706',
      pillColor: 'amber',
      lead: 'Technical Leads (Love, Nishant)',
      venue: 'Central Auditorium & Secondary Staging Lab',
      details: 'Live diagnostic challenge across Python, C++, Java, and JavaScript. Real-time test-case validator runs submissions against hidden evaluation suites.'
    },
    {
      phase: 'Phase 6',
      title: 'Lunch, Refreshments & Mid-Day Networking Break',
      time: '12:30 PM – 01:30 PM',
      duration: '60 mins',
      category: 'break',
      color: '#059669',
      pillColor: 'mint',
      lead: 'Hospitality & Logistics Team',
      venue: 'Institutional Cafeteria / Dining Area',
      details: 'Lunch for participating teams, judges, dignitaries, and volunteers. Behind-the-scenes score compilation for Rounds 1 & 2.'
    },
    {
      phase: 'Phase 7',
      title: 'Round 3: DevSprint (AI-Augmented Rapid Solution Build)',
      time: '01:30 PM – 03:15 PM',
      duration: '105 mins',
      category: 'competition',
      color: '#7c3aed',
      pillColor: 'purple',
      lead: 'Technical Leads & Lead Coordinators',
      venue: 'Central Auditorium',
      details: '01:30 PM on-the-spot problem statement reveal. 90 mins intensive AI build window (ChatGPT, Gemini, Claude, Copilot, v0) + 15 mins code freeze for git pushes & slide deck upload.'
    },
    {
      phase: 'Phase 8',
      title: 'Live Prototype Demonstrations & Technical Q&A Defense',
      time: '03:15 PM – 04:15 PM',
      duration: '60 mins',
      category: 'defense',
      color: '#db2777',
      pillColor: 'purple',
      lead: 'Judging Panel & Technical Team',
      venue: 'Main Auditorium Stage & Central Review Tables',
      details: '3–4 minute live stage demo & presentation per team before Judging Panel. Evaluated against the 250-point rubric.'
    },
    {
      phase: 'Phase 9',
      title: 'Cumulative Score Audit & Interactive Audience Interlude',
      time: '04:15 PM – 04:40 PM',
      duration: '25 mins',
      category: 'ceremony',
      color: '#d97706',
      pillColor: 'amber',
      lead: 'Event Hosts (Manya, Shivani)',
      venue: 'Main Auditorium Stage',
      details: 'Final score aggregation (R1: 100 + R2: 150 + R3: 250 = 500 Max). Interactive tech trivia quiz and audience engagement while official results are signed off.'
    },
    {
      phase: 'Phase 10',
      title: 'Valedictory Ceremony, Dignitary Remarks & Prize Distribution',
      time: '04:40 PM – 05:15 PM',
      duration: '35 mins',
      category: 'ceremony',
      color: '#059669',
      pillColor: 'mint',
      lead: 'Dignitaries, HOD (CSE), Coordinators (Rishabh, Dinesh)',
      venue: 'Main Auditorium Stage',
      details: 'Announcement of Top 3 winning teams (₹15,000, ₹8,000, ₹5,000 + Trophies + Certificates of Excellence). Participation certificates distribution and official group photograph.'
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All 10 Phases' },
    { id: 'competition', label: 'Sprint Rounds' },
    { id: 'defense', label: 'Live Demos' },
    { id: 'ceremony', label: 'Inauguration & Awards' },
    { id: 'break', label: 'Breaks & Transitions' }
  ];

  const filtered = filterCategory === 'all'
    ? scheduleData
    : scheduleData.filter(s => s.category === filterCategory);

  return (
    <section id="schedule" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <div className="labs-pill active" style={{ marginBottom: '0.75rem' }}>
            <Calendar size={13} />
            <span>DEVSPARK EXECUTION TIMELINE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: '0.8rem' }}>
            Master Event <span className="gradient-labs-ai">Execution Schedule</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
            Synchronized 10-phase sprint from 09:00 AM to 05:15 PM with designated coordinators.
          </p>
        </div>

        {/* Filter bar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div className="filter-bar-wrapper">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`filter-btn ${filterCategory === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Cards */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filtered.map((item) => (
            <Interactive3DCard
              key={item.phase}
              style={{
                padding: '1.6rem 2rem',
                borderLeft: `4px solid ${item.color}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className={`labs-pill ${item.pillColor}`} style={{ padding: '0.2rem 0.65rem', fontSize: '0.75rem' }}>
                    {item.phase}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                    <Clock size={15} color={item.color} /> {item.time}
                  </span>
                </div>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                  Duration: {item.duration}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 700, margin: 0 }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                {item.details}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.85rem',
                borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                fontSize: '0.82rem',
                color: '#64748b',
                gap: '0.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0f172a' }}>
                  <UserCheck size={14} color={item.color} />
                  <span><strong>Lead:</strong> {item.lead}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} />
                  <span>{item.venue}</span>
                </div>
              </div>
            </Interactive3DCard>
          ))}
        </div>

      </div>
    </section>
  );
};
