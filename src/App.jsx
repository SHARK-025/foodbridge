import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import OurMission from './components/OurMission';
import OurSolution from './components/OurSolution';
import HowItWorks from './components/HowItWorks';
import KeyFeatures from './components/KeyFeatures';
import ImpactDashboard from './components/ImpactDashboard';
import CommunityStories from './components/CommunityStories';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import SafetyModal from './components/SafetyModal';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    tab: 'donor', // 'donor' | 'volunteer' | 'partner'
  });

  const [isSafetyModalOpen, setIsSafetyModalOpen] = useState(false);

  const handleOpenDonate = (tab = 'donor') => {
    setModalState({ isOpen: true, tab });
  };

  const handleCloseDonate = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#F7F3E9] text-[#252A25] font-sans flex flex-col selection:bg-[#E7A64B] selection:text-[#173D2B]">
      {/* 1. STICKY NAVIGATION */}
      <Navbar
        onOpenDonate={handleOpenDonate}
        onOpenSafety={() => setIsSafetyModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. HERO SECTION */}
        <Hero onOpenDonate={handleOpenDonate} />

        {/* OUR MISSION PILLARS */}
        <OurMission />

        {/* 3. THE PROBLEM: Surplus vs Hunger Contrasting Blocks */}
        <TheProblem />

        {/* 4. OUR SOLUTION: Visual Diagram & Connection Architecture */}
        <OurSolution onOpenDonate={handleOpenDonate} />

        {/* 5. HOW IT WORKS: 3 Step Process */}
        <HowItWorks onOpenDonate={handleOpenDonate} />

        {/* 6. KEY FEATURES: 5 Core Features */}
        <KeyFeatures onOpenDonate={handleOpenDonate} />

        {/* 7. IMPACT DASHBOARD: Illustrative Demo Metrics */}
        <ImpactDashboard />

        {/* 8. COMMUNITY STORIES: 3 Illustrative Narratives */}
        <CommunityStories />

        {/* 9. FINAL CTA: Action Buttons */}
        <FinalCTA onOpenDonate={handleOpenDonate} />
      </main>

      {/* 10. FOOTER */}
      <Footer
        onOpenDonate={handleOpenDonate}
        onOpenSafety={() => setIsSafetyModalOpen(true)}
      />

      {/* INTERACTIVE DONATION INTEREST MODAL */}
      <DonationModal
        key={modalState.isOpen ? modalState.tab : 'closed'}
        isOpen={modalState.isOpen}
        onClose={handleCloseDonate}
        initialTab={modalState.tab}
      />

      {/* FOOD SAFETY & HANDLING STANDARDS MODAL */}
      <SafetyModal
        isOpen={isSafetyModalOpen}
        onClose={() => setIsSafetyModalOpen(false)}
      />
    </div>
  );
}
