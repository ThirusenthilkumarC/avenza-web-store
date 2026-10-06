import React from 'react';
import { Store, ShieldCheck, MapPin, CreditCard, ArrowRight } from 'lucide-react';

export const SellerCTA: React.FC = () => {
  return (
    <section className="my-12">
      {/* Dark Banner */}
      <div className="bg-stone-950 rounded-3xl p-8 sm:p-12 text-white border border-stone-800 shadow-2xl relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-8 space-y-3">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest">
              <Store className="w-3.5 h-3.5" /> SELLER HUB OPPORTUNITY
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-50 leading-tight">
              Sell to Millions of Shoppers Across India
            </h2>

            <p className="text-stone-300 text-sm max-w-2xl font-light leading-relaxed">
              Grow your business with our zero-commission onboarding, nationwide logistics support, and instant payouts. Join thousands of thriving brands today.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition-colors">
              <span>Register as a Seller</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors text-center">
              Learn Seller Benefits
            </button>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="relative z-10 mt-10 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-extrabold text-stone-100">45,000+</p>
              <p className="text-[11px] text-stone-400">Verified Sellers</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-extrabold text-stone-100">100% Genuine</p>
              <p className="text-[11px] text-stone-400">Quality Assured</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-extrabold text-stone-100">19,000+</p>
              <p className="text-[11px] text-stone-400">Pincodes Covered</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-extrabold text-stone-100">Instant UPI</p>
              <p className="text-[11px] text-stone-400">Secure Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
