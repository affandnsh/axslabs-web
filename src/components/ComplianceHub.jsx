import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  FileText, 
  CreditCard, 
  Lock, 
  ChevronDown, 
  CheckCircle2, 
  AlertCircle,
  Building,
  Scale,
  FileCheck2,
  ExternalLink
} from 'lucide-react';

export default function ComplianceHub() {
  const [activeTab, setActiveTab] = useState('refund');
  const [expandedSection, setExpandedSection] = useState(null);

  const tabs = [
    {
      id: 'refund',
      title: 'Refund & Payment Policy',
      shortTitle: 'Refund Policy',
      icon: CreditCard,
      badge: 'Mandatory Disclosure'
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      shortTitle: 'Terms & SaaS Rules',
      icon: FileText,
      badge: 'Client Service Agreement'
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Policy',
      shortTitle: 'Data Privacy & Encryption',
      icon: Lock,
      badge: 'WhatsApp Cloud API & CRM'
    }
  ];

  return (
    <section id="compliance" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#E1C7BA]/30 border-t border-[#8F8A87]/15">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-semibold text-[#8E4A4D] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#AEBF97]" />
            <span>Official Regulatory & Merchant Verification Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E2E2E] tracking-tight">
            Compliance & Legal Hub
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/75 leading-relaxed">
            Transparent operational contracts, merchant verification policies, and payment terms for Razorpay, banking partners, and enterprise restaurant clients.
          </p>
        </div>

        {/* Verification Meta Banner */}
        <div className="glass-card rounded-2xl p-4 sm:p-5 mb-8 border border-white/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#AEBF97]/30 text-[#2E2E2E] flex items-center justify-center font-bold">
              <FileCheck2 className="w-4 h-4 text-[#8E4A4D]" />
            </div>
            <div>
              <p className="font-bold text-[#2E2E2E]">AXS Labs Legal Entity & Merchant Verification</p>
              <p className="text-[#8F8A87]">Registered Office: 14/1, Mofidul Islam Lane, Kolkata 700014, West Bengal, India</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#AEBF97]/25 text-[#2E2E2E] font-semibold text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#8E4A4D]" />
              Razorpay Verified Policy Standard
            </span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#8E4A4D] text-[#FAF0E6] border-[#8E4A4D] shadow-md'
                    : 'glass-card text-[#2E2E2E] border-white/70 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#AEBF97]' : 'text-[#8E4A4D]'}`} />
                <span>{tab.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-white/80 shadow-glass bg-white/65"
        >
          {/* TAB 1: REFUND & PAYMENT POLICY */}
          {activeTab === 'refund' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#8F8A87]/20 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2E2E2E]">
                    Refund & Payment Policy
                  </h3>
                  <p className="text-xs text-[#8F8A87] mt-0.5">
                    Official Terms of Billing, Setup Invoicing, and Recurring Maintenance
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#8E4A4D]/10 text-[#8E4A4D] text-xs font-bold">
                  Effective 2026
                </span>
              </div>

              {/* Exact Policy Provisions */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#FAF0E6]/90 border border-[#8E4A4D]/25 relative overflow-hidden">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#8E4A4D] text-[#FAF0E6] flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#8E4A4D] uppercase tracking-wide">
                        Advance Implementation Non-Refundability
                      </h4>
                      <p className="text-sm text-[#2E2E2E] mt-1.5 font-medium leading-relaxed">
                        The 50% advance implementation fee is strictly non-refundable once project deployment commences.
                      </p>
                      <p className="text-xs text-[#2E2E2E]/70 mt-1">
                        Our engineering team initiates direct resource allocation, Meta WhatsApp Cloud API credentials setup, custom database provisioning, and proprietary workflow architecture immediately upon invoice settlement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF0E6]/90 border border-[#8E4A4D]/25 relative overflow-hidden">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#8E4A4D] text-[#FAF0E6] flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#8E4A4D] uppercase tracking-wide">
                        Final Handover & Go-Live Criteria
                      </h4>
                      <p className="text-sm text-[#2E2E2E] mt-1.5 font-medium leading-relaxed">
                        Final project handover and go-live will only occur upon clearing the remaining 100% of the setup fees.
                      </p>
                      <p className="text-xs text-[#2E2E2E]/70 mt-1">
                        Live production DNS switchover, production WhatsApp bot verification release, administrative staff credentials handover, and on-premise hardware deployment take effect immediately upon final setup fee receipt.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF0E6]/90 border border-[#8E4A4D]/25 relative overflow-hidden">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#8E4A4D] text-[#FAF0E6] flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#8E4A4D] uppercase tracking-wide">
                        Monthly Maintenance & Server Settlement Window
                      </h4>
                      <p className="text-sm text-[#2E2E2E] mt-1.5 font-medium leading-relaxed">
                        Monthly maintenance and server fees must be cleared within the first 10 days of each billing month. Failure to remit payment within this window will result in automated system downtime, server suspension, and chatbot deactivation.
                      </p>
                      <p className="text-xs text-[#2E2E2E]/70 mt-1">
                        Our automated cloud watchdog triggers service reconnection within 60 minutes once delinquent balances are resolved via official invoice payment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-5 border-t border-[#8F8A87]/20 flex flex-wrap items-center justify-between text-xs text-[#8F8A87] gap-3">
                <span className="font-semibold text-[#2E2E2E]">Accepted Settlement Channels:</span>
                <span className="flex items-center gap-2 text-[#2E2E2E]/80">
                  <span>Razorpay Verified Gateway</span> • 
                  <span>Direct NEFT/RTGS Current Account</span> • 
                  <span>Corporate UPI</span>
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS & CONDITIONS */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#8F8A87]/20 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2E2E2E]">
                    Terms & Conditions
                  </h3>
                  <p className="text-xs text-[#8F8A87] mt-0.5">
                    Service Delivery Timelines, SaaS Usage Rules, and Infrastructure Maintenance Terms
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#AEBF97]/30 text-[#2E2E2E] text-xs font-bold">
                  SaaS & Service Agreement
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#2E2E2E]/85 leading-relaxed">
                <div className="bg-[#FAF0E6]/60 p-4 rounded-2xl border border-white">
                  <h4 className="font-bold text-[#8E4A4D] mb-1">1. Scope of Implementation & Timelines</h4>
                  <p>
                    AXS Labs undertakes bespoke development of restaurant digital infrastructure, AI reservation chatbots, direct ordering engines, and smart hardware integration. Standard delivery timelines range from 7 to 21 business days following receipt of the 50% advance setup fee and comprehensive brand assets (menu, high-resolution media, POS credentials).
                  </p>
                </div>

                <div className="bg-[#FAF0E6]/60 p-4 rounded-2xl border border-white">
                  <h4 className="font-bold text-[#8E4A4D] mb-1">2. SaaS Platform Usage & Server Hosting Rules</h4>
                  <p>
                    Clients are granted a non-exclusive, non-transferable license to utilize the AXS Lync chatbot interface, ordering dashboards, and CRM modules throughout the active maintenance agreement. Client shall not reverse-engineer, re-license, or sub-distribute proprietary conversational workflows, backend algorithms, or firmware deployed in AXSessories hardware.
                  </p>
                </div>

                <div className="bg-[#FAF0E6]/60 p-4 rounded-2xl border border-white">
                  <h4 className="font-bold text-[#8E4A4D] mb-1">3. Uptime, SLA & Maintenance Schedules</h4>
                  <p>
                    AXS Labs maintains an enterprise target of 99.9% uptime across all cloud servers and webhook endpoints. Routine maintenance and server patch deployments are conducted during off-peak hours (02:00 AM - 05:00 AM IST) with advance client notification. Emergency critical bug fixes are addressed with an initial triage within 2 hours.
                  </p>
                </div>

                <div className="bg-[#FAF0E6]/60 p-4 rounded-2xl border border-white">
                  <h4 className="font-bold text-[#8E4A4D] mb-1">4. POS & Third-Party Platform Disclaimers</h4>
                  <p>
                    While AXS Labs builds direct API bridges with major restaurant POS systems (such as Petpooja, POSist, and others), uninterrupted sync depends on active third-party API availability and valid merchant credentials provided by the client.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#8F8A87]/20 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2E2E2E]">
                    Privacy & Data Governance Policy
                  </h3>
                  <p className="text-xs text-[#8F8A87] mt-0.5">
                    Data Handling for CRM, End-to-End Encryption via WhatsApp Cloud API & Database Protocols
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#8F8A87]/15 text-[#2E2E2E] text-xs font-bold">
                  DPDP Act Compliant
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#2E2E2E]/85 leading-relaxed">
                <div className="bg-[#FAF0E6]/60 p-4 rounded-2xl border border-white">
                  <h4 className="font-bold text-[#8E4A4D] mb-1">1. Restaurant First-Party Data Ownership</h4>
                  <p>
                    All customer records, phone numbers, order histories, and dining preferences gathered through AXS Labs direct ordering web systems or WhatsApp bots remain the exclusive intellectual property of the respective restaurant client. AXS Labs will never sell, lease, or cross-market your guest records to competing eateries.
                  </p>
                </div>

                <div className="bg-[#FAF0E6]/60 p-4 rounded-2xl border border-white">
                  <h4 className="font-bold text-[#8E4A4D] mb-1">2. End-to-End Encryption & WhatsApp Cloud API Standards</h4>
                  <p>
                    All conversational transactions routed through AXS Lync strictly comply with Meta WhatsApp Cloud API protocols. Data in transit is secured with TLS 1.3 encryption, and message exchanges adhere to end-to-end communication guarantees mandated by international cybersecurity standards.
                  </p>
                </div>

                <div className="bg-[#FAF0E6]/60 p-4 rounded-2xl border border-white">
                  <h4 className="font-bold text-[#8E4A4D] mb-1">3. Database Security & Access Restrictions</h4>
                  <p>
                    Client databases are isolated within dedicated Virtual Private Clouds (VPC) featuring AES-256 encryption-at-rest, automated real-time off-site backups, and strict Role-Based Access Control (RBAC). Only authenticated restaurant administrative accounts can decrypt and export guest tables.
                  </p>
                </div>

                <div className="bg-[#FAF0E6]/60 p-4 rounded-2xl border border-white">
                  <h4 className="font-bold text-[#8E4A4D] mb-1">4. Payment Gateway & Financial Data Privacy</h4>
                  <p>
                    AXS Labs does not store sensitive credit card numbers or UPI MPINs. All payment processing is directly tokenized and handled through PCI-DSS Level 1 certified gateway partners (including Razorpay and NPCI Unified Payments Interface).
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Legal Contact Box */}
        <div className="mt-8 text-center text-xs text-[#8F8A87]">
          For compliance, merchant audit inquiries, or MSA agreements, reach our legal desk at{' '}
          <a href="mailto:legal@axslabs.in" className="text-[#8E4A4D] font-bold hover:underline">
            compliance@axslabs.in
          </a>{' '}
          or call our enterprise governance line at{' '}
          <a href="tel:+917003951988" className="text-[#8E4A4D] font-bold hover:underline">
            +91 7003951988
          </a>.
        </div>

      </div>
    </section>
  );
}
