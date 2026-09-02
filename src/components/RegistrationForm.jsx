import React, { useState } from 'react';
import { 
  Users, UserPlus, Trash2, Sparkles, Check, 
  AlertCircle, ShieldCheck, ArrowRight, Laptop, Send, Cpu 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { registerTeamAPI } from '../services/api';
import { Interactive3DCard } from './Interactive3DCard';

const DEPARTMENTS = [
  'Computer Science & Engineering (CSE)',
  'Information Technology (IT)',
  'Computer Applications (BCA / MCA)',
  'Management & Business (BBA / MBA)',
  'Commerce & Economics',
  'Basic Sciences & Applied Physics/Math',
  'Electronics & Communication (ECE)',
  'Mechanical Engineering',
  'Civil Engineering',
  'Other / Multidisciplinary'
];

const ACADEMIC_YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgraduate'];

const TRACKS = [
  'Campus Utility & Automation',
  'AI Productivity Utilities & QA',
  'Student Educational & Learning Dashboards',
  'Smart Workflow Automation & Schedulers',
  'Open Innovation (GenAI Prototype)'
];

const MEMBER_ROLES = [
  'Team Lead & Full-Stack Developer',
  'AI Prompt Engineer & Logic Specialist',
  'UI/UX Designer & Product Strategist',
  'Pitch Presenter & Business Analyst',
  'Code Diagnostic & Test Engineer'
];

export const RegistrationForm = ({ onRegistrationSuccess }) => {
  const [teamName, setTeamName] = useState('');
  const [trackPreference, setTrackPreference] = useState(TRACKS[0]);
  const [projectIdeaSummary, setProjectIdeaSummary] = useState('');

  // Team Leader
  const [leader, setLeader] = useState({
    name: '',
    email: '',
    phone: '',
    rollNo: '',
    department: DEPARTMENTS[0],
    academicYear: '3rd Year',
    role: MEMBER_ROLES[0]
  });

  // Additional members (1 to 4 allowed -> total 2 to 5)
  const [members, setMembers] = useState([
    {
      name: '',
      email: '',
      phone: '',
      rollNo: '',
      department: DEPARTMENTS[1],
      academicYear: '3rd Year',
      role: MEMBER_ROLES[1]
    }
  ]);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleAddMember = () => {
    if (members.length >= 4) {
      setErrorMsg('Maximum team size is 5 members (1 Leader + 4 Members).');
      return;
    }
    setErrorMsg('');
    setMembers([
      ...members,
      {
        name: '',
        email: '',
        phone: '',
        rollNo: '',
        department: DEPARTMENTS[0],
        academicYear: '2nd Year',
        role: MEMBER_ROLES[2]
      }
    ]);
  };

  const handleRemoveMember = (index) => {
    if (members.length <= 1) {
      setErrorMsg('Minimum team size is 2 members (1 Leader + 1 Member).');
      return;
    }
    setErrorMsg('');
    setMembers(members.filter((_, idx) => idx !== index));
  };

  const handleMemberChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Validations
    if (!teamName.trim()) {
      setErrorMsg('Please enter your Team Name.');
      return;
    }

    if (!leader.name.trim() || !leader.email.trim() || !leader.phone.trim() || !leader.rollNo.trim()) {
      setErrorMsg('Please complete all required fields for the Team Leader.');
      return;
    }

    for (let i = 0; i < members.length; i++) {
      const m = members[i];
      if (!m.name.trim() || !m.email.trim() || !m.rollNo.trim()) {
        setErrorMsg(`Please complete all required fields for Team Member ${i + 1}.`);
        return;
      }
    }

    setLoading(true);

    const payload = {
      teamName: teamName.trim(),
      trackPreference,
      projectIdeaSummary: projectIdeaSummary.trim(),
      teamLeader: leader,
      members: members
    };

    try {
      const res = await registerTeamAPI(payload);
      setLoading(false);

      if (res.success && res.data) {
        try {
          confetti({
            particleCount: 140,
            spread: 90,
            origin: { y: 0.6 }
          });
        } catch (e) {}

        onRegistrationSuccess(res.data);

        // Reset form
        setTeamName('');
        setProjectIdeaSummary('');
        setLeader({
          name: '',
          email: '',
          phone: '',
          rollNo: '',
          department: DEPARTMENTS[0],
          academicYear: '3rd Year',
          role: MEMBER_ROLES[0]
        });
        setMembers([
          {
            name: '',
            email: '',
            phone: '',
            rollNo: '',
            department: DEPARTMENTS[1],
            academicYear: '3rd Year',
            role: MEMBER_ROLES[1]
          }
        ]);
      } else {
        setErrorMsg(res.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg('Network error while connecting to the registration server.');
    }
  };

  const totalTeamSize = 1 + members.length;

  return (
    <section id="register" style={{ padding: '4.5rem 0 5.5rem', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="labs-pill active" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={13} />
            <span>PORTAL REGISTRATION • TEAMS OF 2–5</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: '0.8rem' }}>
            Register for <span className="gradient-labs-ai">DevSpark 2026</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
            Submit your team details below. Once registered, your team will receive an official 3D Digital <strong>DevSpark Pass</strong> with QR authentication.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ maxWidth: '920px', margin: '0 auto' }}>
          {errorMsg && (
            <div style={{
              background: 'rgba(255, 228, 230, 0.9)',
              border: '1px solid rgba(244, 63, 94, 0.4)',
              color: '#be123c',
              borderRadius: '16px',
              padding: '1.1rem 1.4rem',
              marginBottom: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.92rem'
            }}>
              <AlertCircle size={20} color="#e11d48" style={{ flexShrink: 0 }} />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* 1. Team Profile */}
          <div style={{ marginBottom: '1.75rem' }}>
            <Interactive3DCard style={{ padding: '2.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Users size={20} color="#0284c7" />
                  <span>1. Team Profile & Sprint Track</span>
                </h3>
                <span className="labs-pill cyan">
                  Team Size: {totalTeamSize} Members
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Team Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. LogicCrafters, AI Nova, Quantum Tracers"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Sprint Track Preference *</label>
                  <select
                    value={trackPreference}
                    onChange={(e) => setTrackPreference(e.target.value)}
                    className="form-select"
                  >
                    {TRACKS.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Preliminary Concept / Solution Focus (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe what problem area or idea your team wants to explore during the AI Sprint..."
                  value={projectIdeaSummary}
                  onChange={(e) => setProjectIdeaSummary(e.target.value)}
                  className="form-textarea"
                />
              </div>
            </Interactive3DCard>
          </div>

          {/* 2. Team Leader */}
          <div style={{ marginBottom: '1.75rem' }}>
            <Interactive3DCard style={{ padding: '2.2rem', borderLeft: '4px solid #0284c7' }}>
              <div style={{ marginBottom: '1.4rem' }}>
                <div className="labs-pill cyan" style={{ fontSize: '0.72rem', padding: '0.15rem 0.55rem', marginBottom: '0.4rem' }}>
                  PRIMARY POINT OF CONTACT
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a' }}>2. Team Leader Information</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Leader Full Name"
                    value={leader.name}
                    onChange={(e) => setLeader({ ...leader, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="leader@abiet.edu.in"
                    value={leader.email}
                    onChange={(e) => setLeader({ ...leader, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={leader.phone}
                    onChange={(e) => setLeader({ ...leader, phone: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">College Roll Number / ID *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CSE22014"
                    value={leader.rollNo}
                    onChange={(e) => setLeader({ ...leader, rollNo: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Department *</label>
                  <select
                    value={leader.department}
                    onChange={(e) => setLeader({ ...leader, department: e.target.value })}
                    className="form-select"
                  >
                    {DEPARTMENTS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Academic Year *</label>
                  <select
                    value={leader.academicYear}
                    onChange={(e) => setLeader({ ...leader, academicYear: e.target.value })}
                    className="form-select"
                  >
                    {ACADEMIC_YEARS.map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>
            </Interactive3DCard>
          </div>

          {/* 3. Additional Members */}
          <div style={{ marginBottom: '2.5rem' }}>
            <Interactive3DCard style={{ padding: '2.2rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a' }}>
                    3. Team Members ({members.length} added • Total {totalTeamSize}/5)
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0 }}>
                    Combine developers, AI prompt engineers, and product pitch specialists across departments.
                  </p>
                </div>

                {members.length < 4 && (
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="btn-magnetic btn-magnetic-outline"
                    style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
                  >
                    <UserPlus size={15} color="#0284c7" />
                    <span>Add Member ({members.length + 1})</span>
                  </button>
                )}
              </div>

              {/* Member Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {members.map((member, index) => (
                  <div
                    key={index}
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      borderRadius: '16px',
                      padding: '1.4rem',
                      position: 'relative',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span className="labs-pill" style={{ fontSize: '0.75rem' }}>
                        MEMBER {index + 2} (CO-PARTICIPANT)
                      </span>

                      {members.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(index)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#e11d48',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            fontSize: '0.8rem',
                            fontWeight: 600
                          }}
                        >
                          <Trash2 size={15} />
                          <span>Remove</span>
                        </button>
                      )}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Member Full Name"
                          value={member.name}
                          onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="member@abiet.edu.in"
                          value={member.email}
                          onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">College Roll Number *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. IT23009"
                          value={member.rollNo}
                          onChange={(e) => handleMemberChange(index, 'rollNo', e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Department *</label>
                        <select
                          value={member.department}
                          onChange={(e) => handleMemberChange(index, 'department', e.target.value)}
                          className="form-select"
                        >
                          {DEPARTMENTS.map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Academic Year *</label>
                        <select
                          value={member.academicYear}
                          onChange={(e) => handleMemberChange(index, 'academicYear', e.target.value)}
                          className="form-select"
                        >
                          {ACADEMIC_YEARS.map(y => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Team Synergy Role</label>
                        <select
                          value={member.role}
                          onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                          className="form-select"
                        >
                          {MEMBER_ROLES.map(r => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Interactive3DCard>
          </div>

          {/* Submission Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              disabled={loading}
              className="btn-magnetic btn-magnetic-gradient"
              style={{
                padding: '1.1rem 3.5rem',
                fontSize: '1.1rem',
                width: '100%',
                maxWidth: '480px',
                margin: '0 auto',
                boxShadow: '0 8px 30px rgba(236, 72, 153, 0.35)'
              }}
            >
              {loading ? (
                <span>Generating 3D DevSpark Pass...</span>
              ) : (
                <>
                  <span>Complete Team Registration</span>
                  <ArrowRight size={18} className="arrow-slide" />
                </>
              )}
            </button>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.85rem' }}>
              By registering, your team agrees to the BYOD hardware guidelines and the non-eliminatory cumulative scoring policy.
            </p>
          </div>
        </form>

      </div>
    </section>
  );
};
