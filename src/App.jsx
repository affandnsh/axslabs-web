import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Ecosystem from './components/Ecosystem';
import SavingsCalculator from './components/SavingsCalculator';
import About from './components/About';
import ComplianceHub from './components/ComplianceHub';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF0E6] text-[#2E2E2E] font-sans selection:bg-[#C77389] selection:text-white relative">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2. Core Services Grid */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* 3. The AXS Ecosystem (3-Column Layout) */}
        <Ecosystem onOpenConsultation={handleOpenConsultation} />

        {/* 4. Interactive ROI / Commission Savings Calculator */}
        <SavingsCalculator onOpenConsultation={handleOpenConsultation} />

        {/* 5. About Us & Leadership */}
        <About onOpenConsultation={handleOpenConsultation} />

        {/* 6. Compliance & Legal Hub */}
        <ComplianceHub />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation} 
      />

      {/* Floating WhatsApp Quick Action Button for Mobile / Quick Inquiries */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/917003951988?text=Hello%20AXS%20Labs%2C%20I%20am%20interested%20in%20your%20digital%20infrastructure%20services%20for%20my%20restaurant."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#8E4A4D] hover:bg-[#723a3d] text-[#FAF0E6] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/40"
          aria-label="Direct WhatsApp Chat with AXS Labs"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AEBF97] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#AEBF97]"></span>
          </span>
          <MessageCircle className="w-5 h-5 text-[#FAF0E6]" />
          <span className="text-xs font-bold hidden sm:inline-block pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
