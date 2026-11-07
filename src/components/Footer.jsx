import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  MessageCircle, 
  ShieldCheck, 
  Building2, 
  Heart,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { name: 'Core Services', href: '#services' },
    { name: 'AXS Lync (AI Chatbots)', href: '#ecosystem' },
    { name: 'AXS Studio (Media)', href: '#ecosystem' },
    { name: 'AXSessories (NFC Hardware)', href: '#ecosystem' },
    { name: 'Commission Calculator', href: '#services' },
    { name: 'Leadership & Vision', href: '#about' },
  ];

  const complianceLinks = [
    { name: 'Refund & Payment Policy', href: '#compliance' },
    { name: 'Terms & Conditions', href: '#compliance' },
    { name: 'Privacy & Data Policy', href: '#compliance' },
    { name: 'Razorpay / MSME Verification', href: '#compliance' },
    { name: 'SaaS SLA & Uptime Standards', href: '#compliance' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#E1C7BA] text-[#2E2E2E] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#8F8A87]/25 relative overflow-hidden">
      {/* Subtle background wave/gradient */}
      <div className="max-w-7xl mx-auto">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#8F8A87]/25">
          
          {/* Brand Info & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#8E4A4D] flex items-center justify-center text-[#FAF0E6] shadow-md font-bold text-lg">
                AXS
              </div>
              <span className="text-2xl font-black tracking-tight text-[#2E2E2E]">
                AXS Labs
              </span>
            </div>

            <p className="text-sm text-[#2E2E2E]/80 leading-relaxed max-w-sm">
              Kolkata-based digital infrastructure and growth agency for restaurants. Helping modern hospitality leaders break aggregator dependency, automate guest interactions, and scale direct profitability.
            </p>

            {/* Direct Connect Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href="https://wa.me/917003951988?text=Hello%20AXS%20Labs%2C%20I%20would%20like%20to%20discuss%20solutions%20for%20my%20restaurant."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#8E4A4D] hover:bg-[#723a3d] text-[#FAF0E6] text-xs font-semibold shadow-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#AEBF97]" />
                <span>Enterprise WhatsApp</span>
              </a>

              <a
                href="tel:+919123004152"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/70 hover:bg-white text-[#2E2E2E] text-xs font-semibold border border-white/80 transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#8E4A4D]" />
                <span>Direct Founder Line</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-7) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8E4A4D] mb-4">
              Infrastructure
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="text-[#2E2E2E]/80 hover:text-[#8E4A4D] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#8F8A87]" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Legal (Col 8-9) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8E4A4D] mb-4">
              Official Head Office & Contact
            </h4>
            
            <div className="space-y-3.5 text-xs text-[#2E2E2E]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8E4A4D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#2E2E2E]">Registered Address:</span>
                  <p className="text-[#2E2E2E]/80 leading-relaxed">
                    14/1, Mofidul Islam Lane, Kolkata 700014,<br />
                    West Bengal, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Building2 className="w-4 h-4 text-[#8E4A4D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#2E2E2E]">Enterprise Line:</span>
                  <a href="tel:+917003951988" className="hover:text-[#8E4A4D] font-medium text-[#2E2E2E]/90">
                    +91 7003951988
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#AEBF97] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#2E2E2E]">Founder Line:</span>
                  <a href="tel:+919123004152" className="hover:text-[#8E4A4D] font-medium text-[#2E2E2E]/90">
                    +91 9123004152 (Affan Danish)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#8E4A4D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#2E2E2E]">Merchant Onboarding Desk:</span>
                  <span className="text-[#2E2E2E]/80">Razorpay Merchant Verified & MSME Aligned</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8F8A87] gap-4">
          <div className="flex items-center gap-2">
            <span>© {currentYear} <strong className="text-[#2E2E2E]">AXS Labs</strong>. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a 
              href="#compliance" 
              onClick={(e) => handleScrollTo(e, '#compliance')}
              className="hover:text-[#8E4A4D] transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="text-[#8F8A87]/50">•</span>
            <a 
              href="#compliance" 
              onClick={(e) => handleScrollTo(e, '#compliance')}
              className="hover:text-[#8E4A4D] transition-colors"
            >
              Refund Policy
            </a>
            <span className="text-[#8F8A87]/50">•</span>
            <a 
              href="#compliance" 
              onClick={(e) => handleScrollTo(e, '#compliance')}
              className="hover:text-[#8E4A4D] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
