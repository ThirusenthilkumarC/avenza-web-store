import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 text-left space-y-6">
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Terms of Service</span>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-2xs space-y-4 text-xs text-stone-700 leading-relaxed">
        <h1 className="text-3xl font-bold font-serif-luxury text-stone-900 mb-2">
          Terms of Service
        </h1>
        <p>Welcome to AVENZA Luxury Marketplace. By accessing our platform, you agree to comply with our marketplace guidelines, buyer protection policies, and terms of usage.</p>
        <h3 className="font-bold text-stone-900 text-sm pt-2">1. Marketplace Platform</h3>
        <p>Avenza facilitates transactions between verified sellers and discerning buyers across India. All listings are subject to strict authenticity verification.</p>
        <h3 className="font-bold text-stone-900 text-sm pt-2">2. Pricing & Orders</h3>
        <p>Prices listed are inclusive of GST and applicable taxes. Avenza reserves the right to cancel orders arising from typographical pricing errors.</p>
      </div>
    </div>
  );
};
