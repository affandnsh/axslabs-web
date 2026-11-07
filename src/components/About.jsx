import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Compass, 
  HeartHandshake,
  UserCheck
} from 'lucide-react';

export default function About({ onOpenConsultation }) {
  const leadershipHighlights = [
    {
      title: 'Kolkata-Rooted F&B Focus',
      description: 'Understanding the nuanced hospitality culture of Park Street, Hindustan Park, Salt Lake, and Southern Avenue—combining traditional culinary pride with automated efficiency.'
    },
    {
      title: 'First-Party Asset Philosophy',
      description: 'We believe restaurants must own their diner databases, online menus, and booking records—never leasing their customer relationships from third-party monopolies.'
    },
    {
      title: 'Battle-Tested Digital Architecture',
      description: 'Engineering systems with 99.9% uptime, rapid WhatsApp API delivery, and instant POS synchronization that hold up even through chaotic Saturday night rushes.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FAF0E6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Leadership Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card rounded-4xl p-8 border border-white/80 shadow-glass relative bg-gradient-to-br from-white/70 to-[#E1C7BA]/30 overflow-hidden">
              
              {/* Subtle visual accent */}
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#8E4A4D] to-[#C77389] flex items-center justify-center text-[#FAF0E6] mb-6 shadow-md">
                <Building2 className="w-10 h-10 text-[#FAF0E6]" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8E4A4D]/10 text-[#8E4A4D] text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#8E4A4D]" />
                <span>Headquartered in Kolkata</span>
              </div>

              <h3 className="text-2xl font-black text-[#2E2E2E] mt-2">
                Affan Danish
              </h3>
              <p className="text-xs font-bold text-[#8E4A4D] uppercase tracking-wider">
                Founder & Principal Infrastructure Architect
              </p>

              <blockquote className="mt-5 text-sm text-[#2E2E2E]/80 italic leading-relaxed bg-[#FAF0E6]/80 p-4 rounded-2xl border border-[#8F8A87]/15">
                "For decades, Kolkata's legendary restaurants built customer loyalty through culinary excellence and unmatched warmth. But over the last ten years, aggregator monopolies stepped in between restaurants and their guests—taxing 30% on every order and locking away customer numbers. AXS Labs was founded to hand that sovereignty, data, and margin back to restaurant founders."
              </blockquote>

              <div className="mt-6 pt-5 border-t border-[#8F8A87]/15 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#8F8A87] block text-[10px] uppercase font-bold">Direct Line</span>
                  <a href="tel:+919123004152" className="font-bold text-[#8E4A4D] hover:underline">
                    +91 9123004152
                  </a>
                </div>
                <div>
                  <span className="text-[#8F8A87] block text-[10px] uppercase font-bold">Base of Operations</span>
                  <span className="font-bold text-[#2E2E2E]">Kolkata 700014, WB</span>
                </div>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#AEBF97]/25 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Right Column: Mission & Strategic Approach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-semibold text-[#8E4A4D] uppercase tracking-wider mb-4">
              <UserCheck className="w-3.5 h-3.5 text-[#C77389]" />
              <span>Leadership & Agency Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E2E2E] tracking-tight leading-tight">
              Building Independent Digital Ecosystems For Modern Restaurants
            </h2>

            <p className="mt-5 text-base text-[#2E2E2E]/80 leading-relaxed">
              At <strong className="text-[#8E4A4D]">AXS Labs</strong>, we don't build generic marketing websites. We architect end-to-end proprietary infrastructure—combining conversational WhatsApp AI, smart on-premise NFC hardware, zero-commission ordering channels, and high-converting multimedia storytelling.
            </p>

            <p className="mt-3 text-sm text-[#2E2E2E]/75 leading-relaxed">
              Based in Kolkata and expanding across East India and pan-national culinary hubs, we partner with independent restaurateurs, cloud kitchens, and multi-outlet dining groups to automate labor-intensive front-desk operations while turning first-time diners into high-frequency regulars.
            </p>

            {/* Strategic Pillars */}
            <div className="mt-8 space-y-4">
              {leadershipHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/55 border border-white/80 shadow-sm flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-xl bg-[#8E4A4D]/10 text-[#8E4A4D] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#8E4A4D]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2E2E2E]">{item.title}</h4>
                    <p className="text-xs text-[#2E2E2E]/70 mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#8E4A4D] hover:bg-[#783e41] text-[#FAF0E6] font-semibold text-sm shadow-md transition-all duration-200"
              >
                <span>Partner With AXS Labs</span>
                <HeartHandshake className="w-4 h-4 text-[#AEBF97]" />
              </button>

              <a
                href="#compliance"
                className="text-xs font-semibold text-[#8F8A87] hover:text-[#2E2E2E] underline underline-offset-4"
              >
                View Legal & Regulatory Compliance
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
