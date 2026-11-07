import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MessageCircle, 
  CheckCircle, 
  Sparkles, 
  Building2, 
  User, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    phone: '',
    location: 'Kolkata (Park Street / Central)',
    primaryInterest: 'All Solutions (Full Ecosystem)'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*New Restaurant Infrastructure Consultation Request*%0A%0A` +
      `*Restaurant Name:* ${encodeURIComponent(formData.restaurantName || 'Not specified')}%0A` +
      `*Owner/Manager:* ${encodeURIComponent(formData.ownerName || 'Not specified')}%0A` +
      `*Contact:* ${encodeURIComponent(formData.phone || 'Not specified')}%0A` +
      `*Location:* ${encodeURIComponent(formData.location)}%0A` +
      `*Primary Interest:* ${encodeURIComponent(formData.primaryInterest)}%0A%0A` +
      `Requested via AXS Labs Web Portal`;

    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(`https://wa.me/917003951988?text=${message}`, '_blank');
    }, 900);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2E2E2E]/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg glass-card bg-[#FAF0E6]/95 backdrop-blur-2xl rounded-4xl p-6 sm:p-8 border border-white/80 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/60 hover:bg-white flex items-center justify-center text-[#2E2E2E] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E4A4D]/10 text-[#8E4A4D] text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#C77389]" />
                <span>Private 1-on-1 Strategy Session</span>
              </div>

              <h3 className="text-2xl font-black text-[#2E2E2E] tracking-tight">
                Schedule Architecture Consultation
              </h3>
              <p className="mt-1 text-xs text-[#2E2E2E]/70 leading-relaxed">
                Connect directly with AXS Labs founders to assess your aggregator commissions and design your restaurant's digital infrastructure.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F8A87] mb-1">
                    Restaurant / Cafe Brand Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#8F8A87] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mocambo, Peter Cat, Cafe Drifter"
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border border-white/90 text-xs sm:text-sm text-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-[#8E4A4D]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F8A87] mb-1">
                      Founder / Manager Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8F8A87] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border border-white/90 text-xs sm:text-sm text-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-[#8E4A4D]/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F8A87] mb-1">
                      WhatsApp Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8F8A87] absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border border-white/90 text-xs sm:text-sm text-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-[#8E4A4D]/40"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F8A87] mb-1">
                      Location / Neighborhood
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-white/80 border border-white/90 text-xs text-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-[#8E4A4D]/40"
                    >
                      <option>Kolkata (Park Street / Central)</option>
                      <option>Kolkata (Salt Lake / New Town)</option>
                      <option>Kolkata (Hindustan Park / South)</option>
                      <option>Kolkata (Ballygunge / Alipore)</option>
                      <option>Howrah & Greater Kolkata</option>
                      <option>Other Indian Culinary Hub</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F8A87] mb-1">
                      Priority Focus
                    </label>
                    <select
                      value={formData.primaryInterest}
                      onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-white/80 border border-white/90 text-xs text-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-[#8E4A4D]/40"
                    >
                      <option>All Solutions (Full Ecosystem)</option>
                      <option>AXS Lync (WhatsApp AI Bot)</option>
                      <option>0% Commission Direct Website</option>
                      <option>AXS Studio (Viral Reels & UGC)</option>
                      <option>AXSessories (NFC Smart Standees)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#8E4A4D] hover:bg-[#723a3d] text-[#FAF0E6] font-bold text-sm shadow-md transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4 text-[#AEBF97]" />
                    <span>Proceed to Direct WhatsApp Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-[#8F8A87] mt-2">
                    Direct line with Affan Danish & AXS Labs Core Technical Team. No spam guaranteed.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#AEBF97]/30 text-[#8E4A4D] flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-[#8E4A4D]" />
              </div>
              <h4 className="text-xl font-bold text-[#2E2E2E]">
                Connecting to AXS Labs WhatsApp
              </h4>
              <p className="text-xs text-[#2E2E2E]/80 max-w-xs mx-auto">
                Opening verified WhatsApp chat with Founder Affan Danish (+91 7003951988) with your restaurant dossier...
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded-xl bg-white/80 text-xs font-semibold text-[#8E4A4D]"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
