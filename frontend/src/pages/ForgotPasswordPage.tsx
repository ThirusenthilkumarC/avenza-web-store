import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Mail, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ForgotPasswordPage: React.FC = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setIsSubmitted(true);
    showToast(`Password reset link sent to ${email}`, 'success');
  };

  return (
    <div className="max-w-md mx-auto px-4 my-12 text-left">
      <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <Logo />
          <h1 className="text-2xl font-bold font-serif-luxury text-stone-900 pt-2">
            Reset Your Password
          </h1>
          <p className="text-xs text-stone-500">
            Enter your registered email address and we'll send you instructions to reset your password.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-stone-900 text-sm">Reset Link Dispatched</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We have sent a password reset link to <strong className="font-mono text-stone-900">{email}</strong>. Please check your inbox and follow the instructions.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-stone-950 text-amber-400 font-bold px-6 py-3 rounded-xl text-xs"
            >
              Return to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 text-xs border border-stone-300 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
              {error && <p className="text-[11px] text-rose-600 mt-1 font-semibold">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Send Reset Instructions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-stone-100 text-center">
          <Link to="/login" className="text-xs font-bold text-stone-600 hover:text-stone-900 inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
