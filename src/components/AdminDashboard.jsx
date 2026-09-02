import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Download, Search, RefreshCw, Key, LogOut, ChevronDown, ChevronUp, User, Phone, Mail, GraduationCap, Building, Award, Clock } from 'lucide-react';
import { getAllTeamsAdminAPI, exportTeamsCsvAPI, updateTeamStatusAPI } from '../services/api';

export const AdminDashboard = ({ isOpen, onClose, onSelectTeam }) => {
  const [passcode, setPasscode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  const [teams, setTeams] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [expandedTeamId, setExpandedTeamId] = useState(null);

  // Reset authentication every time modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setAuthenticated(false);
      setPasscode('');
      setAuthError('');
      setExpandedTeamId(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    setLoading(true);

    try {
      const res = await getAllTeamsAdminAPI(passcode.trim());
      setLoading(false);
      if (res.success) {
        setAuthenticated(true);
        setTeams(res.data.teams || []);
        setStats(res.data.stats || {});
      } else {
        setAuthError(res.message || 'Invalid Coordinator Passcode. Access denied.');
      }
    } catch (err) {
      setLoading(false);
      setAuthError('Connection failed to authorization server.');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPasscode('');
    setAuthError('');
    setTeams([]);
    setStats(null);
    setExpandedTeamId(null);
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const res = await getAllTeamsAdminAPI(passcode.trim());
      setLoading(false);
      if (res.success) {
        setTeams(res.data.teams || []);
        setStats(res.data.stats || {});
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    exportTeamsCsvAPI(passcode.trim());
  };

  const handleTableChange = async (teamId, tableNo) => {
    try {
      const res = await updateTeamStatusAPI(teamId, { tableNumber: tableNo });
      if (res.success) {
        setTeams(teams.map(t => (t.registrationId === teamId || t._id === teamId ? { ...t, tableNumber: tableNo } : t)));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const filteredTeams = teams.filter(t => {
    const s = search.toLowerCase();
    return (
      t.teamName?.toLowerCase().includes(s) ||
      (t.registrationId || t.teamPassId)?.toLowerCase().includes(s) ||
      t.collegeName?.toLowerCase().includes(s) ||
      t.teamLeader?.name?.toLowerCase().includes(s) ||
      t.teamLeader?.phone?.toLowerCase().includes(s) ||
      t.teamLeader?.email?.toLowerCase().includes(s) ||
      t.teamLeader?.department?.toLowerCase().includes(s) ||
      (t.members && t.members.some(m =>
        m.name?.toLowerCase().includes(s) ||
        m.phone?.toLowerCase().includes(s) ||
        m.email?.toLowerCase().includes(s) ||
        m.department?.toLowerCase().includes(s)
      ))
    );
  });

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1100px',
          width: '95%',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          border: '1px solid rgba(5, 150, 105, 0.3)',
          borderRadius: '14px',
          boxShadow: '0 25px 60px -15px rgba(6, 78, 59, 0.3)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid rgba(5, 150, 105, 0.15)',
          background: '#f4f8f6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#ecfdf5',
              border: '1px solid #059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#059669'
            }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f2e22', margin: 0, fontWeight: 800 }}>
                Coordinator Desk Console
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                Team Stack Tracers • Department of CSE, ABIET
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {authenticated && (
              <button
                onClick={handleLogout}
                style={{
                  background: '#fee2e2',
                  border: '1px solid #ef4444',
                  color: '#b91c1c',
                  borderRadius: '6px',
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
                title="Log out and lock console"
              >
                <LogOut size={14} />
                <span>Logout</span>
              </button>
            )}

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#4b5563',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.25rem'
              }}
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Body */}
        {!authenticated ? (
          /* =========================================================================
             COORDINATOR LOGIN SCREEN (NO PASSWORD DISPLAYED)
             ========================================================================= */
          <div style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '420px', margin: '0 auto' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: '#ecfdf5',
              border: '1.5px solid #059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#059669',
              margin: '0 auto 1.5rem',
              boxShadow: '0 4px 15px rgba(5, 150, 105, 0.15)'
            }}>
              <Key size={26} />
            </div>

            <h4 style={{ fontSize: '1.45rem', color: '#0f2e22', marginBottom: '0.4rem', fontWeight: 800 }}>
              Coordinator Authentication
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#4b5563', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              Please enter your authorized coordinator passcode to access live registration records and participant details.
            </p>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="password"
                required
                placeholder="Enter Coordinator Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="form-input"
                style={{
                  textAlign: 'center',
                  fontSize: '1.05rem',
                  letterSpacing: '0.15em',
                  padding: '0.85rem'
                }}
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-dribbble btn-dribbble-primary"
                style={{ padding: '0.85rem', fontSize: '0.98rem' }}
              >
                {loading ? 'Verifying Passcode...' : 'Unlock Console'}
              </button>
            </form>

            {authError && (
              <div style={{
                background: '#fee2e2',
                border: '1px solid #ef4444',
                color: '#b91c1c',
                borderRadius: '6px',
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
                marginTop: '1.25rem',
                fontWeight: 600
              }}>
                {authError}
              </div>
            )}
          </div>
        ) : (
          /* =========================================================================
             AUTHENTICATED DASHBOARD (SHOWING FULL TEAM & MEMBER INFORMATION)
             ========================================================================= */
          <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
            
            {/* Top Stats Cards (Cleaned of Database Status & Verified/Checked In) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div style={{ background: '#f4f8f6', border: '1px solid rgba(5, 150, 105, 0.18)', borderRadius: '8px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>TOTAL REGISTERED TEAMS</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f2e22', lineHeight: 1.1, marginTop: '0.35rem' }}>
                  {stats?.totalTeams || teams.length}
                </div>
              </div>
              <div style={{ background: '#f4f8f6', border: '1px solid rgba(5, 150, 105, 0.18)', borderRadius: '8px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>TOTAL PARTICIPANTS & BUILDERS</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f2e22', lineHeight: 1.1, marginTop: '0.35rem' }}>
                  {stats?.totalParticipants || (teams.reduce((acc, t) => acc + 1 + (t.members?.length || 0), 0))}
                </div>
              </div>
            </div>

            {/* Actions & Search Bar */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              {/* Search input */}
              <div style={{ display: 'flex', gap: '0.5rem', flex: 1, minWidth: '280px', maxWidth: '520px' }}>
                <input
                  type="text"
                  placeholder="Search by Team, Leader, Phone, Member, College..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-input"
                  style={{ padding: '0.6rem 0.9rem', fontSize: '0.88rem' }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={handleRefresh}
                  className="btn-dribbble btn-dribbble-secondary"
                  style={{ padding: '0.55rem 0.95rem', fontSize: '0.82rem' }}
                  title="Reload from MongoDB"
                >
                  <RefreshCw size={14} />
                  <span>Refresh</span>
                </button>
                <button
                  onClick={handleExportCSV}
                  className="btn-dribbble btn-dribbble-primary"
                  style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}
                  title="Download Excel / CSV record with all members"
                >
                  <Download size={14} />
                  <span>Export Full CSV</span>
                </button>
              </div>
            </div>

            {/* Scrollable Team Dossier Cards */}
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.3rem' }}>
              {filteredTeams.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#6b7280', fontSize: '0.95rem' }}>
                  No team registrations found matching current search.
                </div>
              ) : (
                filteredTeams.map((team, idx) => {
                  const regId = team.registrationId || team.teamPassId || `TEAM-${idx+1}`;
                  const isExpanded = expandedTeamId === regId;
                  const totalMembersCount = 1 + (team.members ? team.members.length : 0);
                  const leader = team.teamLeader || {};

                  return (
                    <div
                      key={team._id || regId}
                      style={{
                        background: '#ffffff',
                        border: isExpanded ? '1.5px solid #059669' : '1px solid rgba(5, 150, 105, 0.2)',
                        borderRadius: '10px',
                        padding: '1.25rem',
                        boxShadow: '0 2px 10px rgba(6, 78, 59, 0.04)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {/* Top Row: Team Summary & Quick Controls */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                            <span style={{
                              background: '#ecfdf5',
                              border: '1px solid rgba(5, 150, 105, 0.3)',
                              color: '#059669',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: 800,
                              fontFamily: 'var(--font-mono)'
                            }}>
                              {regId}
                            </span>
                            <h4 style={{ fontSize: '1.25rem', color: '#0f2e22', margin: 0, fontWeight: 800 }}>
                              {team.teamName}
                            </h4>
                            <span className="crimson-pill">
                              {totalMembersCount} Members
                            </span>
                          </div>

                          <div style={{ fontSize: '0.85rem', color: '#4b5563', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            <span>🏛️ <strong>{team.collegeName || 'ABIET Pathankot'}</strong></span>
                            <span>👤 Leader: <strong style={{ color: '#0f2e22' }}>{leader.name}</strong> ({leader.phone || 'No phone'})</span>
                          </div>
                        </div>

                        {/* Controls: Table Assign, View Pass, Expand */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                          {/* Table Select */}
                          <select
                            value={team.tableNumber || 'Unassigned'}
                            onChange={(e) => handleTableChange(regId, e.target.value)}
                            style={{
                              background: '#f4f8f6',
                              border: '1px solid rgba(5, 150, 105, 0.25)',
                              borderRadius: '6px',
                              padding: '0.35rem 0.6rem',
                              fontSize: '0.78rem',
                              color: '#0f2e22',
                              fontWeight: 600
                            }}
                          >
                            <option value="Unassigned">Table: Unassigned</option>
                            {[...Array(20)].map((_, i) => (
                              <option key={i+1} value={`Table ${String(i+1).padStart(2, '0')}`}>
                                Table {String(i+1).padStart(2, '0')}
                              </option>
                            ))}
                          </select>

                          {/* Pass Preview Button */}
                          <button
                            onClick={() => {
                              onClose();
                              onSelectTeam(team);
                            }}
                            style={{
                              background: '#ffffff',
                              border: '1px solid #059669',
                              color: '#059669',
                              borderRadius: '6px',
                              padding: '0.35rem 0.75rem',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Pass / QR
                          </button>

                          {/* Expand Details Button */}
                          <button
                            onClick={() => setExpandedTeamId(isExpanded ? null : regId)}
                            style={{
                              background: '#f4f8f6',
                              border: '1px solid rgba(5, 150, 105, 0.2)',
                              color: '#0f2e22',
                              borderRadius: '6px',
                              padding: '0.35rem 0.65rem',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.2rem'
                            }}
                          >
                            <span>{isExpanded ? 'Hide Info' : 'Show All Info'}</span>
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        </div>
                      </div>

                      {/* =========================================================================
                          EXPANDED FULL ROSTER & ALL MEMBER INFORMATION DOSSIER
                         ========================================================================= */}
                      {isExpanded && (
                        <div style={{
                          marginTop: '1.25rem',
                          paddingTop: '1.25rem',
                          borderTop: '1px solid rgba(5, 150, 105, 0.15)'
                        }}>
                          {/* 1. All Team Members Grid */}
                          <div style={{ marginBottom: '1.25rem' }}>
                            <div style={{ fontSize: '0.78rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                              COMPLETE ROSTER ({totalMembersCount} REGISTERED BUILDERS)
                            </div>

                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                              gap: '0.85rem'
                            }}>
                              {/* Leader Card */}
                              <div style={{
                                background: '#f4f8f6',
                                border: '1.5px solid #059669',
                                borderRadius: '8px',
                                padding: '0.9rem 1.1rem'
                              }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                                  <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                                    ★ TEAM LEADER
                                  </span>
                                  <span style={{ fontSize: '0.72rem', color: '#6b7280' }}>
                                    {leader.academicYear || '3rd Year'}
                                  </span>
                                </div>

                                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f2e22', marginBottom: '0.35rem' }}>
                                  {leader.name || 'Unnamed Leader'}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.82rem', color: '#4b5563' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                    <Phone size={13} color="#059669" />
                                    <span>{leader.phone || 'N/A'}</span>
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                    <Mail size={13} color="#059669" />
                                    <span>{leader.email || 'N/A'}</span>
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                    <Building size={13} color="#059669" />
                                    <span>{leader.department || 'CSE'}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Additional Members */}
                              {team.members && team.members.map((m, mIdx) => (
                                <div
                                  key={mIdx}
                                  style={{
                                    background: '#ffffff',
                                    border: '1px solid rgba(5, 150, 105, 0.2)',
                                    borderRadius: '8px',
                                    padding: '0.9rem 1.1rem',
                                    boxShadow: '0 1px 4px rgba(6, 78, 59, 0.03)'
                                  }}
                                >
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                                    <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                                      MEMBER {mIdx + 2}
                                    </span>
                                    <span style={{ fontSize: '0.72rem', color: '#6b7280' }}>
                                      {m.academicYear || '3rd Year'}
                                    </span>
                                  </div>

                                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2e22', marginBottom: '0.35rem' }}>
                                    {m.name || `Member ${mIdx + 2}`}
                                  </div>

                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.82rem', color: '#4b5563' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                      <Phone size={13} color="#059669" />
                                      <span>{m.phone || 'N/A'}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                      <Mail size={13} color="#059669" />
                                      <span>{m.email || 'N/A'}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                      <Building size={13} color="#059669" />
                                      <span>{m.department || 'CSE'}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 2. Additional Meta & Scores */}
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '1rem',
                            background: '#f4f8f6',
                            borderRadius: '8px',
                            padding: '1rem',
                            fontSize: '0.82rem'
                          }}>
                            <div>
                              <div style={{ color: '#059669', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                                💡 PROJECT SUMMARY / PROTOTYPE IDEA
                              </div>
                              <div style={{ color: '#1f2937', fontStyle: team.projectIdeaSummary ? 'normal' : 'italic' }}>
                                {team.projectIdeaSummary || 'No preliminary summary submitted.'}
                              </div>
                            </div>

                            <div>
                              <div style={{ color: '#059669', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                                📊 SCORES (500 PTS TARGET)
                              </div>
                              <div style={{ color: '#1f2937' }}>
                                Round 1: <strong>{team.scores?.round1 || 0}</strong> | Round 2: <strong>{team.scores?.round2 || 0}</strong> | Round 3: <strong>{team.scores?.round3 || 0}</strong>
                              </div>
                              <div style={{ color: '#059669', fontWeight: 800, marginTop: '0.2rem' }}>
                                Total Cumulative: {team.scores?.total || 0} / 500 Pts
                              </div>
                            </div>

                            <div>
                              <div style={{ color: '#059669', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                                ⏱ REGISTRATION TIMESTAMP
                              </div>
                              <div style={{ color: '#4b5563' }}>
                                {team.createdAt ? new Date(team.createdAt).toLocaleString() : 'N/A'}
                              </div>
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
