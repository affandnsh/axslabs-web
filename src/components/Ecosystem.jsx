import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  MessageSquareCode, 
  Video, 
  Nfc, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  QrCode, 
  Smartphone,
  Flame,
  Camera,
  Share2,
  Sliders,
  Send,
  Zap
} from 'lucide-react';

export default function Ecosystem({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('lync');

  const products = [
    {
      id: 'lync',
      name: 'AXS Lync',
      pillar: 'Conversational AI Engine',
      tagline: '24/7 AI WhatsApp Chatbots & Real-Time POS Sync',
      icon: MessageSquareCode,
      color: '#8E4A4D',
      summary: 'Replaces lost telephone calls and messy manual WhatsApp orders with an enterprise-grade NLP reservation and food-dispatch engine.',
      features: [
        'Instant Table Reservations with live seating plan availability',
        'Direct Food Ordering with UPI / Razorpay payment links',
        'Automatic Kitchen Order Ticket (KOT) firing to existing POS',
        'Multilingual Bengali, Hindi & English conversational support',
        'Automated order status tracking (Confirmed -> In Kitchen -> Dispatched)'
      ],
      hardwareOrIntegration: 'Integrates with Petpooja, POSist, UrbanPiper & custom setups',
      visualPreview: (
        <div className="bg-[#FAF0E6] p-4 rounded-2xl border border-[#8F8A87]/20 shadow-inner text-xs space-y-2.5 font-sans">
          <div className="flex items-center justify-between border-b border-[#8F8A87]/15 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#AEBF97] animate-pulse" />
              <span className="font-bold text-[#2E2E2E]">WhatsApp Cloud API Bot</span>
            </div>
            <span className="text-[10px] text-[#8F8A87]">Verified Green Badge</span>
          </div>

          <div className="space-y-2 pt-1">
            <div className="bg-white/80 p-2.5 rounded-2xl rounded-tl-none max-w-[85%] border border-[#8F8A87]/10 text-[#2E2E2E]">
              <p className="font-semibold text-[#8E4A4D]">AXS Lync AI</p>
              <p className="text-[11px] mt-0.5">Welcome to The Bengal Kitchen! Would you like to reserve a table or order direct takeaway?</p>
            </div>
            <div className="bg-[#8E4A4D] text-[#FAF0E6] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-right">
              <p className="text-[11px]">Table for 4 at 8:30 PM under Danish.</p>
            </div>
            <div className="bg-white/80 p-2.5 rounded-2xl rounded-tl-none max-w-[90%] border border-[#8F8A87]/10 text-[#2E2E2E]">
              <p className="font-semibold text-[#AEBF97] flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#AEBF97]" /> Reservation Confirmed #BK-902
              </p>
              <p className="text-[11px] text-[#2E2E2E]/80 mt-1">Table 5 reserved. We look forward to hosting you in Park Street!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'studio',
      name: 'AXS Studio',
      pillar: 'Creative & Social Growth',
      tagline: 'AI UGC, Multimedia Production & Social Management',
      icon: Video,
      color: '#C77389',
      summary: 'High-aesthetic culinary storytelling, algorithmic Instagram Reels, AI-assisted UGC generation, and viral influencer activations that pack restaurant seats.',
      features: [
        'Signature Food Videography & Cinematic 4K Reel Production',
        'AI-Generated User-Generated Content (UGC) & Micro-creator amplification',
        'Full Instagram & Meta Ads performance funnel management',
        'Signature Dish Launch Campaigns & Kolkata Food Blogger previews',
        'Weekly high-converting narrative story sequences'
      ],
      hardwareOrIntegration: 'Full-service on-site studio team based in Kolkata',
      visualPreview: (
        <div className="bg-[#FAF0E6] p-4 rounded-2xl border border-[#8F8A87]/20 shadow-inner text-xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-[#8F8A87]/15 pb-2">
            <div className="flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-[#C77389]" />
              <span className="font-bold text-[#2E2E2E]">Viral Reel Pipeline</span>
            </div>
            <span className="text-[10px] bg-[#C77389]/20 text-[#8E4A4D] font-bold px-2 py-0.5 rounded-full">
              4.8x Reach
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-white/80 rounded-xl p-2.5 border border-[#8F8A87]/10 flex flex-col justify-between">
              <span className="text-[10px] uppercase font-bold text-[#8F8A87]">Avg Reel Plays</span>
              <div className="text-lg font-black text-[#8E4A4D] mt-1">142,500+</div>
              <span className="text-[10px] text-[#AEBF97] font-semibold flex items-center gap-0.5 mt-1">
                <TrendingUp className="w-2.5 h-2.5" /> +320% organic
              </span>
            </div>
            <div className="bg-white/80 rounded-xl p-2.5 border border-[#8F8A87]/10 flex flex-col justify-between">
              <span className="text-[10px] uppercase font-bold text-[#8F8A87]">Direct Table Inquiries</span>
              <div className="text-lg font-black text-[#2E2E2E] mt-1">890 / mo</div>
              <span className="text-[10px] text-[#8E4A4D] font-semibold mt-1">
                Direct DM to WhatsApp
              </span>
            </div>
          </div>

          <div className="bg-white/80 p-2 rounded-xl border border-white flex items-center justify-between text-[11px]">
            <span className="text-[#2E2E2E]/80">Content cadence: 12-16 high-polish monthly assets</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C77389]" />
          </div>
        </div>
      )
    },
    {
      id: 'accessories',
      name: 'AXSessories',
      pillar: 'Smart On-Premise Hardware',
      tagline: 'Smart NFC/QR Reception Standees & Digital Menu Hardware',
      icon: Nfc,
      color: '#AEBF97',
      summary: 'Tactile, premium wooden and matte acrylic NFC standees engineered for restaurant dining tables, reception bars, and valet points.',
      features: [
        'Instant Tap-to-Menu NFC & High-Density dynamic QR codes',
        'One-Tap Google 5-Star Review booster with algorithmic filtering',
        'Direct WhatsApp Loyalty Member onboarding in under 3 seconds',
        'Weather-resistant, spill-proof matte finish matching restaurant decor',
        'Dynamic backend menu redirect without re-printing hardware'
      ],
      hardwareOrIntegration: 'Custom branded with restaurant logo & table numbering',
      visualPreview: (
        <div className="bg-[#FAF0E6] p-4 rounded-2xl border border-[#8F8A87]/20 shadow-inner text-xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-[#8F8A87]/15 pb-2">
            <div className="flex items-center gap-2">
              <Nfc className="w-3.5 h-3.5 text-[#AEBF97]" />
              <span className="font-bold text-[#2E2E2E]">Physical Table Hardware</span>
            </div>
            <span className="text-[10px] bg-[#AEBF97]/30 text-[#2E2E2E] font-bold px-2 py-0.5 rounded-full">
              NFC + QR Sync
            </span>
          </div>

          <div className="bg-white/90 p-3 rounded-xl border border-white text-center space-y-2">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-[#E1C7BA]/50 flex items-center justify-center text-[#8E4A4D] border border-white">
              <QrCode className="w-7 h-7 text-[#8E4A4D]" />
            </div>
            <p className="font-bold text-[#2E2E2E] text-xs">Table 12 Smart Standee</p>
            <p className="text-[10px] text-[#8F8A87]">Tap phone or scan camera to launch 0% fee digital menu & loyalty</p>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#8F8A87] px-1">
            <span>Review conversion: 4.8★</span>
            <span className="text-[#8E4A4D] font-semibold">+230 Google ratings/mo</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#E1C7BA]/35 border-y border-[#8F8A87]/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-semibold text-[#8E4A4D] uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-[#8E4A4D]" />
            <span>Integrated Tri-Pillar Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E2E2E] tracking-tight">
            The AXS Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2E2E2E]/75 leading-relaxed">
            Three synergistic pillars designed to solve the modern hospitality trifecta: operational automation, creative customer acquisition, and smart dining room hardware.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/80 hover:border-[#8E4A4D]/30 transition-all duration-300 shadow-glass relative group"
              >
                <div>
                  {/* Top Badge & Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/70 text-[#8E4A4D] border border-white">
                      {product.pillar}
                    </span>
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105"
                      style={{ backgroundColor: product.color }}
                    >
                      <Icon className="w-6 h-6 text-[#FAF0E6]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-[#2E2E2E] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#8E4A4D] mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-[#2E2E2E]/80 leading-relaxed mb-6">
                    {product.summary}
                  </p>

                  {/* Interactive Visual Mockup Box */}
                  <div className="mb-6">
                    {product.visualPreview}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#8F8A87]">
                      System Capabilities:
                    </div>
                    {product.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#2E2E2E]">
                        <div className="w-4 h-4 rounded-full bg-[#AEBF97]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#2E2E2E]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integration Pill & Action */}
                <div className="pt-4 border-t border-[#8F8A87]/15">
                  <div className="text-[11px] text-[#8F8A87] font-medium mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C77389] shrink-0" />
                    <span>{product.hardwareOrIntegration}</span>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/80 hover:bg-[#8E4A4D] text-[#8E4A4D] hover:text-[#FAF0E6] font-semibold text-xs transition-all duration-200 border border-white shadow-sm group-hover:border-[#8E4A4D]"
                  >
                    <span>Request {product.name} Spec Sheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrendingUp(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className || "w-4 h-4"}
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
