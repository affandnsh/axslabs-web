import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Bot, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  UtensilsCrossed,
  MessageCircle,
  Zap,
  MapPin
} from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  const handleScrollToServices = (e) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#D8959B]/25 via-[#C77389]/20 to-[#FAF0E6]/10 rounded-full orb-glow -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#AEBF97]/20 rounded-full orb-glow -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E1C7BA]/40 rounded-full orb-glow -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Top Location & Category Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs sm:text-sm font-medium text-[#2E2E2E] shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#AEBF97] animate-pulse" />
            <span className="text-[#8E4A4D] font-semibold">Kolkata Born</span>
            <span className="text-[#8F8A87]">•</span>
            <span className="text-[#2E2E2E]/80">Powering Elite Indian F&B Infrastructure</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2E2E2E] leading-[1.15] sm:leading-[1.12]">
            Restaurant Technology{' '}
            <span className="text-[#8F8A87] font-normal">|</span>{' '}
            <span className="bg-gradient-to-r from-[#8E4A4D] via-[#C77389] to-[#8E4A4D] bg-clip-text text-transparent">
              Digital Infrastructure
            </span>{' '}
            <span className="text-[#8F8A87] font-normal">|</span>{' '}
            AI & Automation
          </h1>
        </motion.div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-center text-base sm:text-xl text-[#2E2E2E]/80 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Streamline operations, reduce third-party dependency, and scale profitability with bespoke digital ecosystems.
        </motion.p>

        {/* Buttons / Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA (#8E4A4D) */}
          <a
            href="#services"
            onClick={handleScrollToServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#8E4A4D] hover:bg-[#783e41] text-[#FAF0E6] font-semibold text-base shadow-soft-lift hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Outline */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl glass-card hover:bg-white/70 border border-[#8F8A87]/30 text-[#2E2E2E] font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#C77389]" />
            <span>Schedule Consultation</span>
          </button>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-[#8F8A87] font-medium"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#AEBF97]" />
            <span>Zero Aggregator Commission (0%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#AEBF97]" />
            <span>WhatsApp Cloud API Direct</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#AEBF97]" />
            <span>Enterprise POS Sync</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#AEBF97]" />
            <span>Kolkata Dedicated On-Ground Support</span>
          </div>
        </motion.div>

        {/* Fluid Glass Floating Cards Showcase in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 relative max-w-4xl mx-auto"
        >
          {/* Main Hero Card Container */}
          <div className="glass-card rounded-3xl p-5 sm:p-8 border border-white/70 shadow-glass relative z-10 overflow-hidden">
            {/* Top Bar with Status */}
            <div className="flex flex-wrap items-center justify-between pb-5 border-b border-[#8F8A87]/15 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#AEBF97] animate-ping" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8E4A4D]">
                  AXS Ecosystem Live Engine
                </span>
              </div>
              <div className="text-xs font-medium text-[#8F8A87] bg-white/50 px-3 py-1 rounded-full border border-white/60">
                Direct Restaurant Cloud v3.4
              </div>
            </div>

            {/* Grid of Interactive Real-time Mock Previews */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {/* Floating Item 1: WhatsApp AI Conversational Order */}
              <div className="p-4 rounded-2xl bg-white/60 border border-white/80 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#AEBF97]/25 flex items-center justify-center text-[#8E4A4D]">
                      <MessageCircle className="w-4 h-4 text-[#8E4A4D]" />
                    </div>
                    <span className="text-xs font-bold text-[#2E2E2E]">AXS Lync AI</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#AEBF97]/30 text-[#2E2E2E] font-medium">
                    24/7 Active
                  </span>
                </div>
                <div className="bg-[#FAF0E6]/90 p-2.5 rounded-xl border border-[#8F8A87]/10 text-xs text-[#2E2E2E]/90 mb-3 space-y-1">
                  <p className="font-semibold text-[#8E4A4D]">Guest: "Table for 4 at 8 PM + Gondhoraj Chicken?"</p>
                  <p className="text-[#2E2E2E]/70 text-[11px]">AI Bot: "Table 7 reserved. Platter added. Payment link sent!"</p>
                </div>
                <div className="text-[11px] text-[#8F8A87] flex items-center gap-1 font-medium">
                  <Zap className="w-3 h-3 text-[#C77389]" />
                  <span>Instant 1.2s NLP dispatch</span>
                </div>
              </div>

              {/* Floating Item 2: 0% Commission Direct Revenue */}
              <div className="p-4 rounded-2xl bg-white/60 border border-white/80 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#C77389]/20 flex items-center justify-center text-[#8E4A4D]">
                      <TrendingUp className="w-4 h-4 text-[#8E4A4D]" />
                    </div>
                    <span className="text-xs font-bold text-[#2E2E2E]">Margin Shield</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C77389]/20 text-[#8E4A4D] font-bold">
                    0% Commission
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-2xl font-black text-[#8E4A4D] tracking-tight">₹3,48,200</div>
                  <p className="text-[11px] text-[#2E2E2E]/70 font-medium">Direct takeaway & dine-in billing</p>
                </div>
                <div className="text-[11px] text-[#AEBF97] font-semibold flex items-center gap-1 bg-[#AEBF97]/15 px-2 py-1 rounded-lg">
                  <CheckCircle2 className="w-3 h-3 text-[#8E4A4D]" />
                  <span className="text-[#2E2E2E]">Saved ₹94,000+ from aggregator cut</span>
                </div>
              </div>

              {/* Floating Item 3: Smart Hardware & Menu */}
              <div className="p-4 rounded-2xl bg-white/60 border border-white/80 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#D8959B]/25 flex items-center justify-center text-[#8E4A4D]">
                      <UtensilsCrossed className="w-4 h-4 text-[#8E4A4D]" />
                    </div>
                    <span className="text-xs font-bold text-[#2E2E2E]">AXSessories NFC</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/70 text-[#8F8A87] font-medium">
                    Standee Sync
                  </span>
                </div>
                <div className="text-xs text-[#2E2E2E]/80 space-y-1 mb-2">
                  <div className="flex justify-between text-[11px]">
                    <span>Table Tap Rate</span>
                    <span className="font-bold text-[#8E4A4D]">94.2%</span>
                  </div>
                  <div className="w-full bg-[#FAF0E6] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#8E4A4D] h-full rounded-full w-[94%]" />
                  </div>
                  <p className="text-[10px] text-[#8F8A87] pt-1">Direct Google Reviews & WhatsApp repeat re-orders</p>
                </div>
                <div className="text-[11px] text-[#8F8A87] font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#AEBF97]" />
                  <span>Kolkata Cloud POS compatible</span>
                </div>
              </div>
            </div>
          </div>

          {/* Soft floating decorative element behind */}
          <div className="absolute -bottom-4 -right-4 w-40 h-28 bg-[#C77389]/20 rounded-3xl blur-xl -z-10" />
          <div className="absolute -top-4 -left-4 w-40 h-28 bg-[#AEBF97]/25 rounded-3xl blur-xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
