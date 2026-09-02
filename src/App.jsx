import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatsThat } from './components/WhatsThat';
import { DetailsRounds } from './components/DetailsRounds';
import { TimelineSection } from './components/TimelineSection';
import { PrizesSection } from './components/PrizesSection';
import { MentorsSection } from './components/MentorsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { TeamPassModal } from './components/TeamPassModal';
import { AdminDashboard } from './components/AdminDashboard';

export const App = () => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [activePassTeam, setActivePassTeam] = useState(null);
  const [adminOpen, setAdminOpen] = useState(false);

  const handleOpenRegister = () => {
    setRegisterModalOpen(true);
  };

  return (
    <div className="devspark-app" style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Top Navbar */}
      <Navbar
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenRegister={handleOpenRegister}
      />

      {/* Main Dribbble Hackathon Hero Section */}
      <Hero onRegisterClick={handleOpenRegister} />

      {/* Section 1: What's that? (4 Core Pillars + 3D Hover Tilt + Video Demo Box) */}
      <WhatsThat onRegisterClick={handleOpenRegister} />

      {/* Section 2: Details & 3 Sprint Tracks + 500-Pt Simulator with Hover Tilt */}
      <DetailsRounds />

      {/* Section 3: Master Schedule & Timeline */}
      <TimelineSection />

      {/* Section 4: ₹28,000 Prize Pool Podium with Hover Tilt */}
      <PrizesSection />

      {/* Section 5: Faculty Mentors, Organizers & Judges */}
      <MentorsSection onRegisterClick={handleOpenRegister} />

      {/* Section 6: Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenRegister={handleOpenRegister}
      />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        onRegistrationSuccess={(registeredTeam) => {
          setActivePassTeam(registeredTeam);
        }}
      />

      {/* Digital DevSpark Team Pass Modal */}
      {activePassTeam && (
        <TeamPassModal
          team={activePassTeam}
          onClose={() => setActivePassTeam(null)}
        />
      )}

      {/* Coordinator Dashboard Modal */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        onSelectTeam={(team) => {
          setActivePassTeam(team);
        }}
      />
    </div>
  );
};

export default App;
