import React, { useState } from 'react';
import { X, Users, UserPlus, Trash2, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { registerTeamAPI } from '../services/api';

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

export const RegistrationModal = ({ isOpen, onClose, onRegistrationSuccess }) => {
  const [teamName, setTeamName] = useState('');
  const [collegeName, setCollegeName] = useState('');

  // Team Leader (Full Name, Email, Phone, Department, Academic Year)
  const [leader, setLeader] = useState({
    name: '',
    email: '',
    phone: '',
    department: DEPARTMENTS[0],
    academicYear: '3rd Year'
  });

  // Additional members (1 to 4 -> Total 2 to 5 members; Full Name, Email, Phone, Department)
  const [members, setMembers] = useState([
    {
      name: '',
      email: '',
      phone: '',
      department: DEPARTMENTS[1],
      academicYear: '3rd Year'
    }
  ]);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

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
        department: DEPARTMENTS[0],
        academicYear: '2nd Year'
      }
    ]);
  };

  const handleRemoveMember = (idx) => {
    if (members.length <= 1) {
      setErrorMsg('Minimum team size is 2 members (1 Leader + 1 Member).');
      return;
    }
    setErrorMsg('');
    setMembers(members.filter((_, i) => i !== idx));
  };

  const handleMemberChange = (idx, field, val) => {
    const updated = [...members];
    updated[idx][field] = val;
    setMembers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!teamName.trim()) {
      setErrorMsg('Please enter your Team Name.');
      return;
    }

    if (!collegeName.trim()) {
      setErrorMsg('Please enter your College / Institute Name.');
      return;
    }

    if (!leader.name.trim() || !leader.email.trim() || !leader.phone.trim()) {
      setErrorMsg('Please complete all required fields for Team Leader (Name, Email, Phone).');
      return;
    }

    for (let i = 0; i < members.length; i++) {
      const m = members[i];
      if (!m.name.trim() || !m.email.trim() || !m.phone.trim()) {
        setErrorMsg(`Please complete required fields for Member ${i + 2} (Name, Email, Phone).`);
        return;
      }
    }

    setLoading(true);

    const payload = {
      teamName: teamName.trim(),
      collegeName: collegeName.trim(),
      teamLeader: leader,
      members: members
    };

    try {
      const res = await registerTeamAPI(payload);
      setLoading(false);

      if (res.success && res.data) {
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch (e) {}

        onClose();
        onRegistrationSuccess(res.data);
      } else {
        setErrorMsg(res.message || 'Registration failed. Please check inputs.');
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg('Network error connecting to registration server.');
    }
  };

  const totalTeamSize = 1 + members.length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '740px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          border: '1px solid rgba(5, 150, 105, 0.25)',
          borderRadius: '12px',
          boxShadow: '0 25px 60px -15px rgba(6, 78, 59, 0.25)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid rgba(5, 150, 105, 0.12)',
          background: '#f4f8f6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              TEAM REGISTRATION • 2 TO 5 MEMBERS
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#0f2e22', margin: 0 }}>
              Register for DevSpark
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#4b5563',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div style={{ padding: '1.75rem', overflowY: 'auto', flex: 1, background: '#ffffff' }}>
          
          {errorMsg && (
            <div style={{
              background: '#fee2e2',
              border: '1px solid #ef4444',
              color: '#b91c1c',
              borderRadius: '6px',
              padding: '0.85rem 1.15rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.88rem'
            }}>
              <AlertCircle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Team & College Profile */}
            <div style={{
              background: '#f4f8f6',
              border: '1px solid rgba(5, 150, 105, 0.15)',
              borderRadius: '8px',
              padding: '1.25rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#0f2e22', margin: 0 }}>Team & Institution</h4>
                <span className="crimson-pill">{totalTeamSize} Members</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Team Name *</label>
                  <input
                    type="text"
                    required
                    placeholder=""
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">College Name *</label>
                  <input
                    type="text"
                    required
                    placeholder=""
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* Team Leader */}
            <div style={{
              background: '#f4f8f6',
              border: '1px solid rgba(5, 150, 105, 0.3)',
              borderRadius: '8px',
              padding: '1.25rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{ marginBottom: '0.85rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  PRIMARY CONTACT
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#0f2e22', margin: 0 }}>Team Leader</h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder=""
                    value={leader.name}
                    onChange={(e) => setLeader({ ...leader, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder=""
                    value={leader.email}
                    onChange={(e) => setLeader({ ...leader, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder=""
                    value={leader.phone}
                    onChange={(e) => setLeader({ ...leader, phone: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
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

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Year *</label>
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
            </div>

            {/* Additional Members */}
            <div style={{
              background: '#f4f8f6',
              border: '1px solid rgba(5, 150, 105, 0.15)',
              borderRadius: '8px',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#0f2e22', margin: 0 }}>
                  Team Members ({members.length} added)
                </h4>

                {members.length < 4 && (
                  <button
                    type="button"
                    onClick={handleAddMember}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #059669',
                      color: '#059669',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <UserPlus size={13} />
                    <span>Add Member ({members.length + 1})</span>
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {members.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(5, 150, 105, 0.15)',
                      borderRadius: '6px',
                      padding: '1rem',
                      boxShadow: '0 2px 8px rgba(6, 78, 59, 0.04)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                        MEMBER {idx + 2}
                      </span>
                      {members.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(idx)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#ef4444',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.2rem',
                            fontSize: '0.75rem'
                          }}
                        >
                          <Trash2 size={13} />
                          <span>Remove</span>
                        </button>
                      )}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder=""
                          value={m.name}
                          onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                          className="form-input"
                          style={{ padding: '0.65rem 0.85rem' }}
                        />
                      </div>
                      <div>
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder=""
                          value={m.email}
                          onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                          className="form-input"
                          style={{ padding: '0.65rem 0.85rem' }}
                        />
                      </div>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder=""
                          value={m.phone}
                          onChange={(e) => handleMemberChange(idx, 'phone', e.target.value)}
                          className="form-input"
                          style={{ padding: '0.65rem 0.85rem' }}
                        />
                      </div>
                      <div>
                        <label className="form-label">Department *</label>
                        <select
                          value={m.department}
                          onChange={(e) => handleMemberChange(idx, 'department', e.target.value)}
                          className="form-select"
                          style={{ padding: '0.65rem 0.85rem' }}
                        >
                          {DEPARTMENTS.map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Year *</label>
                        <select
                          value={m.academicYear || '3rd Year'}
                          onChange={(e) => handleMemberChange(idx, 'academicYear', e.target.value)}
                          className="form-select"
                          style={{ padding: '0.65rem 0.85rem' }}
                        >
                          {ACADEMIC_YEARS.map(y => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-dribbble btn-dribbble-primary"
              style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
            >
              {loading ? 'Submitting Registration to MongoDB...' : 'Complete Registration'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};
