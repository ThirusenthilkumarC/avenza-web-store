import React from 'react';
import { Store, ShieldCheck, MapPin, CreditCard, ArrowRight, Percent, Headphones } from 'lucide-react';

export const SellerCTA: React.FC = () => {
  return (
    <section className="my-12 space-y-6">
      {/* Dark Seller Banner */}
      <div className="bg-stone-950 rounded-3xl p-6 sm:p-12 text-white border border-stone-800 shadow-2xl relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-8 space-y-3">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest">
              <Store className="w-3.5 h-3.5" /> AVENZA SELLER HUB
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold font-serif-luxury text-stone-50 leading-tight">
              Sell to Millions of Discerning Shoppers Across India
            </h2>

            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl font-light leading-relaxed">
              Grow your business with Avenza and reach customers looking for premium products.
            </p>

            {/* Benefits Row */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-amber-300">
              <span className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
                <Percent className="w-3.5 h-3.5 text-amber-400" /> 0% Onboarding Fee
              </span>
              <span className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
                <Headphones className="w-3.5 h-3.5 text-amber-400" /> Dedicated Account Support
              </span>
              <span className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
                <CreditCard className="w-3.5 h-3.5 text-amber-400" /> Secure Payments
              </span>
              <span className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Pan-India Reach
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold px-7 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 min-h-[44px]">
              <span>Register as a Seller</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* TRUST SECTION CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 border border-amber-200 flex items-center justify-center shrink-0 font-bold">
            <Store className="w-5 h-5 text-amber-800" />
          </div>
          <div>
            <p className="text-sm sm:text-base font-extrabold text-stone-900">45,000+</p>
            <p className="text-[11px] text-stone-500 leading-tight">Verified Indian Sellers</p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 border border-amber-200 flex items-center justify-center shrink-0 font-bold">
            <ShieldCheck className="w-5 h-5 text-amber-800" />
          </div>
          <div>
            <p className="text-sm sm:text-base font-extrabold text-stone-900">100% Genuine</p>
            <p className="text-[11px] text-stone-500 leading-tight">Authentic Product Policy</p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 border border-amber-200 flex items-center justify-center shrink-0 font-bold">
            <MapPin className="w-5 h-5 text-amber-800" />
          </div>
          <div>
            <p className="text-sm sm:text-base font-extrabold text-stone-900">19,000+ Pincodes</p>
            <p className="text-[11px] text-stone-500 leading-tight">Pan-India Express Reach</p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 border border-amber-200 flex items-center justify-center shrink-0 font-bold">
            <CreditCard className="w-5 h-5 text-amber-800" />
          </div>
          <div>
            <p className="text-sm sm:text-base font-extrabold text-stone-900">Secure UPI</p>
            <p className="text-[11px] text-stone-500 leading-tight">Protected Checkout</p>
          </div>
        </div>
      </div>
    </section>
  );
};
