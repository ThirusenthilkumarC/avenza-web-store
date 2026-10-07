import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ShieldCheck, RefreshCw, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 mt-20 pt-14 pb-24 lg:pb-12 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TRUST GUARANTEES STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pb-10 mb-10 border-b border-stone-800 text-left">
          <div className="flex items-center gap-4 bg-stone-900/80 p-4 rounded-2xl border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 font-bold">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-100">100% Genuine Guarantee</h4>
              <p className="text-xs text-stone-400 mt-0.5">Direct from verified brand outlets & master artisans</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-stone-900/80 p-4 rounded-2xl border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 font-bold">
              <RefreshCw className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-100">Easy Returns & Exchange</h4>
              <p className="text-xs text-stone-400 mt-0.5">7-day doorstep pickup with instant refund status</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-stone-900/80 p-4 rounded-2xl border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 font-bold">
              <Lock className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-100">Secure UPI & Card Payments</h4>
              <p className="text-xs text-stone-400 mt-0.5">256-Bit SSL protected payment checkout</p>
            </div>
          </div>
        </div>

        {/* FOUR COLUMN FOOTER LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left mb-12">
          {/* Col 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Get to Know Us
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/account" className="hover:text-amber-400 transition-colors">About Avenza</Link></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Careers & Culture</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Press Room</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Avenza Cares</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Artisan Heritage Initiative</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Customer Lounge</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Brand Stories</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Social Concierge</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Affiliate Network</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Make Money on Avenza
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Sell on Avenza</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Fulfilment by Avenza</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Advertising</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Avenza Merchant Hub</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Supply to Avenza</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Let Us Help You
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/account" className="hover:text-amber-400 transition-colors">Your Account</Link></li>
              <li><Link to="/orders" className="hover:text-amber-400 transition-colors">Returns & Replacement</Link></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Purchase Protection</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Help & Support</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Avenza App</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BRANDING & PAYMENT METHODS */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo isLight />

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-stone-400">
            <span className="flex items-center gap-1 font-semibold text-stone-300">
              <Lock className="w-3.5 h-3.5 text-amber-400" /> Accepted Gateways:
            </span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-[11px] font-mono text-stone-300">UPI (GPay / PhonePe)</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-[11px] font-mono text-stone-300">Visa / Mastercard / RuPay</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-[11px] font-mono text-stone-300">Net Banking</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-[11px] font-mono text-stone-300">Cash on Delivery</span>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 text-center text-[11px] text-stone-500 space-y-1">
          <p>© 2026 AVENZA Luxury Marketplace. All rights reserved.</p>
          <div className="flex justify-center items-center gap-4 text-stone-400 pt-1">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:underline">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
