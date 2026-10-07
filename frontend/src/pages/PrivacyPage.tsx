import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 text-left space-y-6">
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Privacy Policy</span>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-2xs space-y-4 text-xs text-stone-700 leading-relaxed">
        <h1 className="text-3xl font-bold font-serif-luxury text-stone-900 mb-2">
          Privacy & Data Protection Policy
        </h1>
        <p>AVENZA values your privacy. Your personal information, shipping addresses, and payment details are encrypted using 256-bit SSL protocols.</p>
        <h3 className="font-bold text-stone-900 text-sm pt-2">Information Collection</h3>
        <p>We collect essential information required to fulfill orders, calculate delivery timelines, and process secure payments.</p>
      </div>
    </div>
  );
};
