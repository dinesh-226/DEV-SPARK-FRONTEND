import React, { useState, useEffect } from 'react';
import { X, QrCode, Printer, MapPin, CheckCircle, Trophy } from 'lucide-react';
import QRCode from 'qrcode';

export const TeamPassModal = ({ team, onClose }) => {
  const [qrUrl, setQrUrl] = useState('');

  const passId = team?.registrationId || team?.teamPassId;

  const qrData = JSON.stringify({
    passId: passId,
    name: team?.teamName,
    college: team?.collegeName,
    leader: team?.teamLeader?.name,
    phone: team?.teamLeader?.phone,
    members: (team?.members?.length || 0) + 1,
    table: team?.tableNumber || team?.allocatedTableNumber || 'TBD'
  });

  useEffect(() => {
    if (team) {
      QRCode.toDataURL(qrData, {
        width: 150,
        margin: 1,
        color: {
          dark: '#0f2e22',
          light: '#ffffff'
        }
      })
        .then(url => setQrUrl(url))
        .catch(err => console.error(err));
    }
  }, [team, qrData]);

  if (!team) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '520px',
          width: '100%',
          background: '#ffffff',
          border: '1px solid rgba(5, 150, 105, 0.3)',
          borderRadius: '12px',
          boxShadow: '0 25px 60px -15px rgba(6, 78, 59, 0.25)',
          overflow: 'hidden'
        }}
      >
        {/* Pass Top Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#ffffff'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              OFFICIAL PARTICIPANT PASS
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#ffffff', margin: 0, fontWeight: 800 }}>
              DevSpark Sprint 2026
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(0, 0, 0, 0.15)',
              border: 'none',
              borderRadius: '4px',
              width: '32px',
              height: '32px',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Pass Content */}
        <div style={{ padding: '1.75rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="crimson-pill" style={{ marginBottom: '0.4rem' }}>
              PASS ID: {passId}
            </span>
            <h2 style={{ fontSize: '1.75rem', color: '#0f2e22', margin: '0.3rem 0' }}>
              {team.teamName}
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#4b5563', margin: 0 }}>
              College: <strong style={{ color: '#059669' }}>{team.collegeName || 'ABIET Pathankot'}</strong>
            </p>
          </div>

          {/* QR Code */}
          <div style={{
            background: '#f4f8f6',
            borderRadius: '8px',
            border: '1px solid rgba(5, 150, 105, 0.2)',
            padding: '1rem',
            maxWidth: '170px',
            margin: '0 auto 1.5rem',
            textAlign: 'center'
          }}>
            {qrUrl ? (
              <img src={qrUrl} alt="QR Pass" style={{ width: '140px', height: '140px', display: 'block', margin: '0 auto' }} />
            ) : (
              <div style={{ width: '140px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <QrCode size={40} color="#059669" />
              </div>
            )}
            <div style={{ fontSize: '0.65rem', color: '#059669', fontWeight: 800, marginTop: '0.3rem', fontFamily: 'var(--font-mono)' }}>
              DESK CHECK-IN 09:00 AM
            </div>
          </div>

          {/* Details */}
          <div style={{
            background: '#f4f8f6',
            border: '1px solid rgba(5, 150, 105, 0.15)',
            borderRadius: '8px',
            padding: '1.1rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.85rem',
            fontSize: '0.85rem',
            marginBottom: '1.5rem'
          }}>
            <div>
              <div style={{ color: '#6b7280', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>TEAM LEADER</div>
              <div style={{ fontWeight: 700, color: '#0f2e22' }}>{team.teamLeader?.name}</div>
              <div style={{ fontSize: '0.75rem', color: '#059669' }}>{team.teamLeader?.phone}</div>
            </div>

            <div>
              <div style={{ color: '#6b7280', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>ROSTER</div>
              <div style={{ fontWeight: 700, color: '#0f2e22' }}>
                {(team.members?.length || 0) + 1} Members
              </div>
              <div style={{ fontSize: '0.75rem', color: '#4b5563' }}>{team.teamLeader?.department?.split('(')[0]}</div>
            </div>

            <div>
              <div style={{ color: '#6b7280', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>REPORTING TIME</div>
              <div style={{ fontWeight: 700, color: '#059669' }}>09:00 AM Sharp</div>
            </div>

            <div>
              <div style={{ color: '#6b7280', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>VENUE SEAT</div>
              <div style={{ fontWeight: 700, color: '#0f2e22' }}>
                {team.tableNumber || team.allocatedTableNumber ? `${team.tableNumber || team.allocatedTableNumber}` : 'Allocated at Desk'}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={handlePrint}
              className="btn-dribbble btn-dribbble-primary"
              style={{ flex: 1, padding: '0.75rem', fontSize: '0.9rem' }}
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="btn-dribbble btn-dribbble-secondary"
              style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem' }}
            >
              <span>Close</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
