import React, { useState } from 'react';
import { Mail, ArrowRight, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const NewsletterSection: React.FC = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address');
      return;
    }

    setError('');
    setIsSubscribed(true);
    showToast('Welcome to the Avenza Private Circle! Voucher code unlocked.', 'success');
  };

  const handleCopyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('PRIVILEGE1000');
      setCopied(true);
      showToast('Coupon code PRIVILEGE1000 copied to clipboard!', 'info');
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="my-14 text-left">
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
        {/* Subtle accent radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Avenza Private Circle</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif-luxury text-stone-100 tracking-tight">
            Curated Elegance, Delivered to Your Inbox
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
            Subscribe for private preview invitations, curated releases from master artisans, and unlock an instant <strong className="text-amber-400">₹1,000 welcome voucher</strong> on your first order.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-3">
              <div className="relative flex items-center">
                <Mail className="w-5 h-5 absolute left-4 text-stone-400 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your personal email address"
                  className="w-full pl-12 pr-32 py-3.5 bg-stone-950/80 border border-stone-700 rounded-2xl text-xs sm:text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {error && <p className="text-xs text-rose-400 font-semibold">{error}</p>}

              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-stone-400 pt-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Instant ₹1,000 Voucher
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Private Preview Access
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Zero Spam, Unsubscribe Anytime
                </span>
              </div>
            </form>
          ) : (
            <div className="bg-stone-950/90 border border-amber-500/30 rounded-2xl p-6 max-w-md mx-auto text-center space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-amber-300 font-serif-luxury">
                Welcome to The Private Circle!
              </h3>
              <p className="text-xs text-stone-300">
                Your confirmation has been recorded for <strong className="font-mono text-white">{email}</strong>. Use your exclusive voucher code at checkout:
              </p>
              <div className="flex items-center justify-between p-3 rounded-xl bg-stone-900 border border-amber-500/40">
                <span className="font-mono font-bold text-amber-400 text-sm tracking-widest pl-2">
                  PRIVILEGE1000
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-stone-950 font-bold rounded-lg text-xs hover:bg-amber-400 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
