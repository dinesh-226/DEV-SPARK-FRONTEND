import React from 'react';
import { Award, Clock, ArrowRight, ShieldCheck, Sparkles, Phone, Mail, Building, HelpCircle } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const MentorsSection = ({ onRegisterClick }) => {
  const facultyMentors = [
    {
      name: 'Dr. Rajat Arora Sir',
      role: 'Faculty Mentor',
      imgUrl: '/organizers/rajat_passport.jpg',
      dept: 'Department of Computer Science & Engineering',
      color: '#059669' // Emerald Green
    },
    {
      name: 'Mrs. Sunaina Mam',
      role: 'Faculty Mentor',
      imgUrl: '/organizers/sunaina_passport.jpg',
      dept: 'Department of Computer Science & Engineering',
      color: '#047857' // Forest Green
    },
    {
      name: 'Mrs. Tanvi Mam',
      role: 'Faculty Mentor',
      imgUrl: '/organizers/tanvi_passport.jpg',
      dept: 'Department of Computer Science & Engineering',
      color: '#10b981' // Mint Green
    }
  ];

  const studentCoordinators = [
    {
      name: 'Manya',
      role: 'Event Coordinator',
      imgUrl: '/organizers/manya_passport.jpg',
      color: '#059669'
    },
    {
      name: 'Shivani',
      role: 'Event Coordinator',
      imgUrl: '/organizers/shivani_passport.jpg',
      color: '#047857'
    },
    {
      name: 'Love',
      role: 'Event Coordinator',
      imgUrl: '/organizers/love_passport.jpg',
      color: '#10b981'
    },
    {
      name: 'Nishant',
      role: 'Event Coordinator',
      imgUrl: '/organizers/nishant_passport.jpg',
      color: '#059669'
    },
    {
      name: 'Dinesh',
      role: 'Event Coordinator',
      imgUrl: '/organizers/dinesh_passport.jpg',
      color: '#047857'
    },
    {
      name: 'Rishabh',
      role: 'Event Coordinator',
      imgUrl: '/organizers/rishabh_passport.jpg',
      color: '#10b981'
    }
  ];

  return (
    <section id="mentors" style={{ padding: '5.5rem 0 4rem', position: 'relative' }}>
      <div className="container">

        {/* =========================================================================
            1. FACULTY MENTORS (GREEN ACCENTS ON PURE WHITE CARDS)
           ========================================================================= */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="crimson-pill" style={{ marginBottom: '0.6rem' }}>
            ACADEMIC GUIDANCE
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', color: '#0f2e22', marginBottom: '0.4rem' }}>
            Mentors
          </h2>
          <p style={{ color: '#4b5563', fontSize: '1rem', marginBottom: '2.25rem' }}>
            Department of Computer Science & Engineering • Aman Bhalla Institute of Engineering & Technology (ABIET).
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {facultyMentors.map((mentor, idx) => (
              <TiltCard3D
                key={idx}
                className="dribbble-card"
                maxTilt={8}
                style={{
                  display: 'flex',
                  gap: '1.75rem',
                  padding: '1.75rem 2rem',
                  alignItems: 'center',
                  background: '#ffffff',
                  border: '1px solid rgba(5, 150, 105, 0.18)',
                  borderTop: `4px solid ${mentor.color}`,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(6, 78, 59, 0.06)'
                }}
              >
                {/* Large Faculty Mentor Passport Photo Frame */}
                <div style={{
                  width: '140px',
                  height: '175px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  background: '#f4f8f6',
                  border: `2.5px solid ${mentor.color}`,
                  boxShadow: '0 6px 20px rgba(5, 150, 105, 0.2)'
                }}>
                  <img
                    src={mentor.imgUrl}
                    alt={mentor.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(1.05)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                {/* Mentor Info */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#0f2e22', margin: '0 0 0.35rem', fontWeight: 800 }}>
                    {mentor.name}
                  </h3>

                  <div style={{ fontSize: '0.95rem', color: mentor.color, fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {mentor.role}
                  </div>

                  <div style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.5 }}>
                    {mentor.dept}
                  </div>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>

        {/* =========================================================================
            2. INTER-COLLEGE & TPO SIR FACULTY CONTACT CARD
           ========================================================================= */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            <TiltCard3D
              className="dribbble-card"
              maxTilt={8}
              style={{
                display: 'flex',
                gap: '1.75rem',
                padding: '1.75rem 2rem',
                alignItems: 'center',
                background: '#ffffff',
                border: '1px solid rgba(5, 150, 105, 0.18)',
                borderTop: '4px solid #059669',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(6, 78, 59, 0.06)',
                maxWidth: '620px'
              }}
            >
              {/* Faculty Passport Photo Frame (Exact Same Size as Mentors) */}
              <div style={{
                width: '140px',
                height: '175px',
                borderRadius: '8px',
                overflow: 'hidden',
                flexShrink: 0,
                background: '#f4f8f6',
                border: '2.5px solid #059669',
                boxShadow: '0 6px 20px rgba(5, 150, 105, 0.2)'
              }}>
                <img
                  src="/organizers/faculty_contact_passport.jpg"
                  alt="Mr. Vivek Sir"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.05)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Faculty Info: Name, TPO Sir, Inner Line & Phone Number */}
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.4rem', color: '#0f2e22', margin: '0 0 0.35rem', fontWeight: 800 }}>
                  Mr. Vivek Sir
                </h3>

                <div style={{ fontSize: '0.95rem', color: '#059669', fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  Training and Placement Officer
                </div>

                <div style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                  For faculty escorts, inter-college team registrations, official institutional verification, or general campus sprint queries:
                </div>

                <a
                  href="tel:6239760625"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    background: '#ecfdf5',
                    border: '1px solid #059669',
                    color: '#047857',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#059669';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ecfdf5';
                    e.currentTarget.style.color = '#047857';
                  }}
                >
                  <Phone size={15} />
                  <span>+91 62397 60625</span>
                </a>
              </div>
            </TiltCard3D>
          </div>
        </div>

        {/* =========================================================================
            3. EVENT COORDINATORS (WHITE CARDS WITH GREEN ACCENTS)
           ========================================================================= */}
        <div style={{ marginBottom: '4.5rem' }}>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2rem',
            borderBottom: '1px solid rgba(5, 150, 105, 0.2)',
            paddingBottom: '1.25rem'
          }}>
            <div>
              <div className="crimson-pill" style={{ marginBottom: '0.5rem' }}>
                STUDENT LEADERSHIP
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0f2e22', margin: 0 }}>
                Event Coordinators
              </h2>
              <p style={{ color: '#4b5563', fontSize: '0.92rem', marginTop: '0.4rem' }}>
                Team Stack Tracers • Department of Computer Science & Engineering.
              </p>
            </div>
          </div>

          {/* Circuit Box Framing in Emerald Green */}
          <div style={{
            borderLeft: '2.5px solid #059669',
            borderBottom: '2.5px solid #059669',
            borderRadius: '0 0 0 20px',
            padding: '1.5rem 0 2.5rem 2rem',
            position: 'relative'
          }}>

            {/* Coordinators Grid with 3D Tilt */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {studentCoordinators.map((person, idx) => (
                <TiltCard3D
                  key={idx}
                  className="dribbble-card"
                  maxTilt={10}
                  style={{
                    display: 'flex',
                    gap: '1.35rem',
                    padding: '1.4rem',
                    alignItems: 'center',
                    background: '#ffffff',
                    border: '1px solid rgba(5, 150, 105, 0.15)',
                    borderTop: `3px solid ${person.color}`,
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(6, 78, 59, 0.05)'
                  }}
                >
                  {/* Passport Size Photo Frame */}
                  <div style={{
                    width: '105px',
                    height: '130px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: '#f4f8f6',
                    border: `1.5px solid ${person.color}55`,
                    boxShadow: '0 4px 12px rgba(6, 78, 59, 0.08)'
                  }}>
                    <img
                      src={person.imgUrl}
                      alt={person.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'contrast(1.05)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>

                  {/* Clean Info */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.3rem', color: '#0f2e22', margin: '0 0 0.3rem', fontWeight: 700 }}>
                      {person.name}
                    </h4>

                    <div style={{ fontSize: '0.82rem', color: person.color, fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      {person.role}
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>

            {/* Centered Register CTA Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={onRegisterClick}
                className="btn-dribbble btn-dribbble-primary"
                style={{
                  padding: '0.95rem 3.5rem',
                  fontSize: '1.05rem'
                }}
              >
                <span>Register</span>
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            4. JUDGES SECTION (GREEN ACCENTS ON WHITE BACKGROUND)
           ========================================================================= */}
        <div>
          <div className="crimson-pill" style={{ marginBottom: '0.6rem' }}>
            EVALUATION PANEL
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0f2e22', marginBottom: '0.4rem' }}>
            Judges
          </h2>
          <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '2rem' }}>
            Expert jury evaluating Round 3 DevSprint prototype presentations, code quality, and live defense.
          </p>

          <TiltCard3D
            maxTilt={4}
            style={{
              background: '#ffffff',
              border: '1px dashed rgba(5, 150, 105, 0.4)',
              borderRadius: '12px',
              padding: '3rem 2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(6, 78, 59, 0.05)'
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#ecfdf5',
              border: '1px solid #059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#059669',
              margin: '0 auto 1.25rem'
            }}>
              <Clock size={26} />
            </div>

            <div style={{
              display: 'inline-block',
              padding: '0.35rem 1rem',
              background: '#ecfdf5',
              border: '1px solid #059669',
              borderRadius: '4px',
              color: '#059669',
              fontWeight: 800,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.85rem'
            }}>
              ★ YET TO BE UPDATED SOON
            </div>

            <p style={{ color: '#4b5563', fontSize: '0.92rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.6 }}>
              The distinguished panel of academic evaluators and industry experts for DevSprint Prototype judging will be unveiled shortly before the sprint begins.
            </p>
          </TiltCard3D>
        </div>

      </div>
    </section>
  );
};
