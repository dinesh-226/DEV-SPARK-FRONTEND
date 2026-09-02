import React, { useState } from 'react';
import { Search, X, Ticket, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getTeamByIdAPI } from '../services/api';

export const TeamLookup = ({ isOpen, onClose, onSelectTeam }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setErrorMsg('');
    setSearchResult(null);

    try {
      const res = await getTeamByIdAPI(searchQuery.trim());
      setLoading(false);
      if (res.success && res.data) {
        setSearchResult(res.data);
      } else {
        setErrorMsg(res.message || 'No team found with this Pass ID, Team Name, or Roll Number.');
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg('Failed to search. Please check network.');
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '480px',
          width: '100%',
          padding: '2rem',
          background: '#222631',
          border: '1px solid rgba(255, 30, 68, 0.4)',
          borderRadius: '8px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Ticket size={18} color="#ff1e44" />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>Retrieve Team Pass</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#8e97a6',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.88rem', color: '#8e97a6', marginBottom: '1.25rem' }}>
          Enter your <strong>Pass ID</strong>, <strong>Team Name</strong>, or <strong>Roll Number</strong>:
        </p>

        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <input
            type="text"
            required
            placeholder="e.g. DSPARK-xxxx or Roll No"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ fontSize: '0.9rem' }}
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-dribbble btn-dribbble-primary"
            style={{ padding: '0 1.25rem', flexShrink: 0 }}
          >
            {loading ? '...' : <Search size={16} />}
          </button>
        </form>

        {errorMsg && (
          <div style={{
            background: 'rgba(255, 30, 68, 0.12)',
            border: '1px solid #ff1e44',
            color: '#ff6b81',
            borderRadius: '4px',
            padding: '0.75rem 1rem',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <AlertCircle size={16} color="#ff1e44" style={{ flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {searchResult && (
          <div style={{
            background: '#1a1d26',
            border: '1px solid rgba(255, 30, 68, 0.3)',
            borderRadius: '6px',
            padding: '1.25rem',
            marginTop: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="crimson-pill">{searchResult.teamPassId}</span>
              <span style={{ fontSize: '0.78rem', color: '#ff1e44', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle2 size={13} /> Verified
              </span>
            </div>

            <h4 style={{ fontSize: '1.15rem', color: '#ffffff', margin: '0.2rem 0' }}>
              {searchResult.teamName}
            </h4>

            <div style={{ fontSize: '0.82rem', color: '#8e97a6', marginBottom: '1rem' }}>
              Leader: <strong style={{ color: '#ffffff' }}>{searchResult.teamLeader?.name}</strong> ({searchResult.teamLeader?.rollNo})
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectTeam(searchResult);
              }}
              className="btn-dribbble btn-dribbble-primary"
              style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem' }}
            >
              <span>View Digital Pass</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
