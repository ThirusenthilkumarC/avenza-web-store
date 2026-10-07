import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Sparkles, Store, MapPin } from 'lucide-react';
import { Logo } from '../components/Logo';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 text-left space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">About Avenza</span>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-2xs space-y-6">
        <Logo />

        <h1 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 leading-tight">
          A New Avenue for Luxury Shopping in India
        </h1>

        <p className="text-stone-600 text-sm leading-relaxed">
          Founded in 2026, <strong>AVENZA Luxury Marketplace</strong> was born out of a passion to bridge authentic Indian heritage craftsmanship with cutting-edge global innovation. We curate verified flagship products across 16 departments—from Kanjivaram pure silk weaves to spatial noise cancelling audio technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80">
            <ShieldCheck className="w-6 h-6 text-amber-800 mb-2" />
            <h3 className="font-bold text-stone-900 text-sm">100% Authentic Policy</h3>
            <p className="text-xs text-stone-500 mt-1">Direct sourcing from authorized brand outlets and master weaver guilds.</p>
          </div>

          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80">
            <Store className="w-6 h-6 text-amber-800 mb-2" />
            <h3 className="font-bold text-stone-900 text-sm">Empowering Merchants</h3>
            <p className="text-xs text-stone-500 mt-1">45,000+ verified Indian sellers connected to millions of discerning buyers.</p>
          </div>

          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80">
            <MapPin className="w-6 h-6 text-amber-800 mb-2" />
            <h3 className="font-bold text-stone-900 text-sm">Pan-India Reach</h3>
            <p className="text-xs text-stone-500 mt-1">Reliable insured express delivery network covering 19,000+ pincodes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
