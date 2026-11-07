import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Globe, 
  Database, 
  Megaphone, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Smartphone,
  QrCode,
  Users,
  Search,
  Star,
  Zap,
  ShoppingBag,
  BellRing
} from 'lucide-react';

export default function Services({ onOpenConsultation }) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const services = [
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      category: '24/7 Operations',
      tagline: 'Zero Staff Fatigue. 100% Booking & Order Accuracy.',
      description: 'Custom AI conversational agents integrated directly into WhatsApp Cloud API for autonomous table reservations, real-time interactive digital menus, automated pickup ordering, and kitchen POS ticket dispatch.',
      icon: Bot,
      accentColor: '#8E4A4D',
      badgeBg: 'bg-[#8E4A4D]/10 text-[#8E4A4D]',
      deliverables: [
        'WhatsApp AI Chatbots (Meta Cloud API)',
        'Conversational Table Reservation Engine',
        'Direct Takeaway & Delivery Ordering via Chat',
        'Automated Kitchen POS & KOT integration'
      ],
      metrics: 'Eliminates 90% of manual phone order errors; responds in under 2 seconds.'
    },
    {
      id: 'digital-infrastructure',
      title: 'Digital Infrastructure',
      category: 'Brand Ownership',
      tagline: 'High-Converting Web Ecosystems Owned By You, Not Aggregators.',
      description: 'Ultra-fast, mobile-first restaurant websites, interactive visual menus with allergen filters, and proprietary direct ordering systems that bypass 25-35% Swiggy & Zomato commissions.',
      icon: Globe,
      accentColor: '#C77389',
      badgeBg: 'bg-[#C77389]/15 text-[#8E4A4D]',
      deliverables: [
        'Bespoke Mobile-First Restaurant Web Apps',
        'Direct 0% Commission Online Ordering Systems',
        'Dynamic Real-time Digital Menus & Price Control',
        'Integrated Payment Gateway (Razorpay/UPI) Direct to Current A/C'
      ],
      metrics: 'Keep 100% of order ticket size directly in your business account.'
    },
    {
      id: 'customer-management',
      title: 'Customer Management (CRM)',
      category: 'First-Party Data',
      tagline: 'Turn Anonymous Diners Into Lifelong High-Value Patrons.',
      description: 'Stop letting third-party platforms hide your guests’ phone numbers and preferences. Centralize your guest database, track lifetime order histories, dietary tags, anniversaries, and average spend per cover.',
      icon: Database,
      accentColor: '#8F8A87',
      badgeBg: 'bg-[#8F8A87]/15 text-[#2E2E2E]',
      deliverables: [
        'Centralized Restaurant Guest Database',
        'Dine-in, Takeaway & Delivery Order Histories',
        'VIP & High-Spender Tagging & Alerts',
        'Complete Data Privacy & Secure Export Protocols'
      ],
      metrics: 'Unlocks actionable guest profiles with 3.2x higher return visit probability.'
    },
    {
      id: 'marketing-automation',
      title: 'Marketing Automation',
      category: 'Revenue Retention',
      tagline: 'Precision WhatsApp Broadcasts That Pack Tables On Slow Weekdays.',
      description: 'Deploy targeted WhatsApp campaigns, automated birthday perks, mid-week lunch combos, and automated win-back triggers for patrons who haven’t visited in 30 days.',
      icon: Megaphone,
      accentColor: '#D8959B',
      badgeBg: 'bg-[#D8959B]/20 text-[#8E4A4D]',
      deliverables: [
        'WhatsApp Verified Green Tick Broadcast Campaigns',
        'Automated Inactive Diner Re-engagement Flows',
        'Custom Loyalty Points & Cashbacks per WhatsApp Number',
        'Festive (Durga Puja, Diwali, New Year) Pre-booking Blasts'
      ],
      metrics: '98% open rates with an average 18-24% voucher redemption rate.'
    },
    {
      id: 'business-growth',
      title: 'Business Growth & Presence',
      category: 'Market Dominance',
      tagline: 'Dominate Kolkata Food Searches and Outrank Competitors.',
      description: 'Comprehensive local SEO, Google Business Profile optimization, automated positive review generation at the dining table, and algorithmic reputation management.',
      icon: TrendingUp,
      accentColor: '#AEBF97',
      badgeBg: 'bg-[#AEBF97]/25 text-[#2E2E2E]',
      deliverables: [
        'Hyperlocal Google Maps & Search Engine Optimization',
        'Automated 5-Star Review Funnels via Smart QR Standees',
        'Digital Presence & High-End Food Photography Management',
        'Competitor Benchmark & Dining Trend Analytics'
      ],
      metrics: 'Skyrockets Google Map ranking into the local 3-pack within 60 days.'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#FAF0E6] via-[#FAF0E6] to-[#FAF0E6]/60">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#D8959B]/15 rounded-full orb-glow -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#AEBF97]/20 rounded-full orb-glow -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-semibold text-[#8E4A4D] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C77389]" />
            <span>End-to-End Restaurant Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E2E2E] tracking-tight">
            Core Digital Infrastructure Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2E2E2E]/70 leading-relaxed">
            Engineered exclusively for restaurant owners who refuse to sacrifice 30% of their top line to aggregator monopolies.
          </p>
        </div>

        {/* 5-Card Responsive Grid with Hover Liquid Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0 || index === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/70 hover:border-[#C77389]/40 hover:shadow-glass-hover transition-all duration-300 relative group overflow-hidden ${
                  isFeatured ? 'bg-white/50' : 'bg-white/35'
                }`}
              >
                {/* Subtle colored accent glow on top edge */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: service.accentColor }}
                />

                <div>
                  {/* Category Pill and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${service.badgeBg}`}>
                      {service.category}
                    </span>
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
                      style={{ 
                        backgroundColor: `${service.accentColor}18`,
                        color: service.accentColor 
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2E2E2E] group-hover:text-[#8E4A4D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8E4A4D] mt-1 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#2E2E2E]/75 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-[#8F8A87]/15">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#8F8A87] mb-2">
                      Included Capabilities:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#2E2E2E]/90">
                        <CheckCircle className="w-4 h-4 text-[#AEBF97] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact Metric & Action */}
                <div className="mt-8 pt-4 border-t border-[#8F8A87]/15">
                  <div className="text-[11px] text-[#2E2E2E]/80 bg-[#FAF0E6] p-3 rounded-2xl border border-[#8F8A87]/15 mb-4">
                    <span className="font-bold text-[#8E4A4D]">ROI Impact: </span>
                    {service.metrics}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#8E4A4D] bg-white/70 hover:bg-[#8E4A4D] hover:text-[#FAF0E6] border border-white/80 transition-all duration-200 group-hover:shadow-sm"
                  >
                    <span>Deploy in Your Restaurant</span>
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
