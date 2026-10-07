import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, RefreshCw } from 'lucide-react';

export const ReturnsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 text-left space-y-6">
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Returns & Refund Policy</span>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <h1 className="text-3xl font-bold font-serif-luxury text-stone-900">
          7-Day Easy Returns & Exchanges
        </h1>

        <div className="space-y-4 text-xs text-stone-700 leading-relaxed">
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200">
            <h3 className="font-bold text-amber-950 text-sm flex items-center gap-2 mb-1">
              <RefreshCw className="w-4 h-4 text-amber-800" /> Doorstep Pickup & Instant Refunds
            </h3>
            <p>
              At Avenza, customer satisfaction is paramount. If you are not completely satisfied with your purchase, you may initiate a return or exchange within 7 days of delivery.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 text-sm mb-1">Return Eligibility Guidelines</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Item must be unused, unwashed, and in original condition with intact price tags and brand packaging.</li>
              <li>Jewellery, personalized items, and unsealed cosmetics are eligible for exchange only if damaged upon arrival.</li>
              <li>Electronics must include all accessories, manuals, and original box serial numbers.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 text-sm mb-1">How to Initiate a Return</h4>
            <p>1. Go to <strong>My Orders</strong> page in your Avenza Account.</p>
            <p>2. Select the order item and click <strong>Request Return / Exchange</strong>.</p>
            <p>3. Our courier agent will complete a doorstep quality check and collect the item within 24–48 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
