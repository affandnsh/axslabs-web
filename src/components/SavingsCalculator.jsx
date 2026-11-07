import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, IndianRupee, ShieldAlert } from 'lucide-react';

export default function SavingsCalculator({ onOpenConsultation }) {
  const [monthlyRevenue, setMonthlyRevenue] = useState(600000); // 6 Lakh INR monthly online orders
  const aggregatorCutPercentage = 28; // Swiggy/Zomato typical average take rate (commissions + convenience + ad fees)

  const commissionLostMonthly = Math.round(monthlyRevenue * (aggregatorCutPercentage / 100));
  const commissionLostYearly = commissionLostMonthly * 12;
  const directRetainedYearly = commissionLostYearly;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#FAF0E6]">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-4xl p-6 sm:p-10 lg:p-12 border border-white/80 shadow-glass relative overflow-hidden bg-gradient-to-br from-white/70 via-white/50 to-[#E1C7BA]/40">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Interactive Slider */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8E4A4D]/10 text-[#8E4A4D] text-xs font-bold uppercase tracking-wider mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>Aggregator Commission Audit</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E2E2E] tracking-tight">
                How much is your restaurant losing to 28% third-party cuts?
              </h3>
              
              <p className="mt-2 text-sm text-[#2E2E2E]/75 leading-relaxed">
                Aggregators mask their true cost through commissions, packaging levies, customer data withholding, and sponsored bidding wars. Move your repeat regulars to your own 0% commission direct channel.
              </p>

              {/* Slider Control */}
              <div className="mt-8 space-y-4 bg-white/70 p-5 rounded-2xl border border-white">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8F8A87]">
                    Your Monthly Online Delivery / Takeaway Revenue:
                  </span>
                  <span className="text-xl font-extrabold text-[#8E4A4D]">
                    ₹{monthlyRevenue.toLocaleString('en-IN')}
                  </span>
                </div>

                <input
                  type="range"
                  min="100000"
                  max="3000000"
                  step="50000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E1C7BA] rounded-lg appearance-none cursor-pointer accent-[#8E4A4D]"
                />

                <div className="flex justify-between text-[11px] text-[#8F8A87] font-semibold">
                  <span>₹1 Lakh / mo</span>
                  <span>₹15 Lakh / mo</span>
                  <span>₹30 Lakh / mo</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#2E2E2E]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#AEBF97] shrink-0" />
                  <span>Direct UPI into Current A/C</span>
                </div>
                <div className="flex items-center gap-2 text-[#2E2E2E]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#AEBF97] shrink-0" />
                  <span>You own 100% of Diner Phone Numbers</span>
                </div>
              </div>
            </div>

            {/* Right Column: Calculations Breakdown Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#8E4A4D] to-[#723a3d] text-[#FAF0E6] p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C77389]/20 rounded-full blur-2xl" />

              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#AEBF97] border-b border-white/15 pb-3">
                  <span>Estimated Commission Loss</span>
                  <span>~28% Aggregator Tax</span>
                </div>

                <div className="my-5">
                  <span className="text-xs uppercase tracking-wider text-[#FAF0E6]/70">Monthly Bleed:</span>
                  <div className="text-3xl font-black tracking-tight text-[#FAF0E6]">
                    -₹{commissionLostMonthly.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[11px] text-[#FAF0E6]/60">Paid to third-party delivery platforms</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 mb-6">
                  <span className="text-xs uppercase tracking-wider text-[#AEBF97] font-bold">Annual Capital Recoverable:</span>
                  <div className="text-3xl sm:text-4xl font-black text-[#AEBF97] mt-1">
                    ₹{directRetainedYearly.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[11px] text-[#FAF0E6]/80 mt-1">
                    Pure margin retained by building your bespoke AXS Labs infrastructure.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#FAF0E6] hover:bg-white text-[#8E4A4D] font-bold text-sm transition-all duration-200 shadow-md hover:scale-[1.02]"
              >
                <span>Reclaim Your Margins Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
