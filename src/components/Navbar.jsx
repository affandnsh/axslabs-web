import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Cpu,
  UserCheck
} from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', icon: Cpu },
    { name: 'Ecosystem', href: '#ecosystem', icon: Layers },
    { name: 'About', href: '#about', icon: UserCheck },
    { name: 'Compliance', href: '#compliance', icon: ShieldCheck },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 pb-2">
      <div 
        className={`max-w-7xl mx-auto rounded-3xl transition-all duration-300 ${
          isScrolled 
            ? 'glass-card shadow-glass border-white/60 bg-[#FAF0E6]/85 backdrop-blur-xl py-3 px-5 sm:px-6' 
            : 'bg-white/40 backdrop-blur-md border border-white/40 py-4 px-6 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="AXS Labs Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#8E4A4D] to-[#C77389] flex items-center justify-center text-[#FAF0E6] shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="font-bold text-lg tracking-wider">AXS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#2E2E2E] leading-none group-hover:text-[#8E4A4D] transition-colors">
                AXS Labs
              </span>
              <span className="text-[10px] tracking-widest text-[#8F8A87] font-medium uppercase mt-0.5">
                Hospitality Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-[#2E2E2E]/80 hover:text-[#8E4A4D] hover:bg-white/50 rounded-2xl transition-all duration-200 flex items-center gap-1.5"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="text-xs font-semibold text-[#8E4A4D] hover:text-[#2E2E2E] px-3.5 py-2 rounded-2xl hover:bg-white/40 transition-colors"
            >
              Book Call
            </button>
            
            <a
              href="https://wa.me/917003951988?text=Hi%20AXS%20Labs%2C%20I%20run%20a%20restaurant%20and%20would%20like%20to%20explore%20your%20digital%20infrastructure%20and%20AI%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#8E4A4D] hover:bg-[#723a3d] text-[#FAF0E6] text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[#AEBF97]" />
              <span>Contact on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-2xl text-[#2E2E2E] hover:bg-white/50 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-7xl glass-card bg-[#FAF0E6]/95 backdrop-blur-2xl rounded-3xl p-5 border border-white/60 shadow-glass"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#2E2E2E] hover:text-[#8E4A4D] hover:bg-white/60 rounded-2xl transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#C77389]" />
                    <span>{link.name}</span>
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#8F8A87]/20 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 rounded-2xl bg-white/60 text-[#8E4A4D] font-semibold text-sm border border-white/80 hover:bg-white transition-colors"
                >
                  Schedule Consultation
                </button>

                <a
                  href="https://wa.me/917003951988?text=Hi%20AXS%20Labs%2C%20I%20run%20a%20restaurant%20and%20would%20like%20to%20explore%20your%20digital%20infrastructure%20and%20AI%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#8E4A4D] text-[#FAF0E6] text-sm font-semibold shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#AEBF97]" />
                  <span>Contact on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
