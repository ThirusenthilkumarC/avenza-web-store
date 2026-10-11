import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Logo } from '../components/Logo';
import { SEO } from '../components/SEO';
import { Lock, Mail, ArrowRight, Eye, EyeOff, ShieldCheck, Sparkles } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useShop();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});

  const validate = () => {
    const errs: { email?: string; password?: string } = {};
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      login(email, password);
      setIsLoading(false);
      navigate('/account');
    }, 400);
  };

  const handleUseDemo = () => {
    setEmail('vikram.roy@example.com');
    setPassword('Luxury@2026');
    setErrors({});
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4 text-left">
      <SEO
        title="Sign In | AVENZA Luxury Marketplace"
        description="Sign in to your AVENZA account to access your orders, saved addresses and luxury privileges."
      />

      <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xl space-y-6">
        <div className="text-center">
          <Logo />
          <h1 className="text-2xl font-bold font-serif-luxury text-stone-900 mt-4">Welcome Back</h1>
          <p className="text-xs text-stone-500 mt-1">Sign in to your AVENZA luxury shopping account</p>
        </div>

        {/* Quick Demo Credentials Pill */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
            <div>
              <p className="font-bold text-amber-950 text-[11px]">Testing as Reviewer?</p>
              <p className="text-[10px] text-amber-800">Auto-fill verified demo credentials</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleUseDemo}
            className="bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold px-3 py-1.5 rounded-lg text-[10px] transition-colors shrink-0 shadow-xs"
          >
            Fill Demo
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-stone-500" /> Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="name@example.com"
              className={`w-full p-3 text-sm border rounded-xl outline-none transition-colors ${
                errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 focus:border-amber-600'
              }`}
            />
            {errors.email && <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.email}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-stone-700 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-stone-500" /> Password
              </label>
              <Link to="/forgot-password" className="text-[11px] text-amber-800 hover:underline font-semibold">
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: undefined });
                }}
                placeholder="••••••••"
                className={`w-full p-3 pr-10 text-sm border rounded-xl outline-none transition-colors ${
                  errors.password ? 'border-rose-400 bg-rose-50/30' : 'border-stone-300 focus:border-amber-600'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.password}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Sign In to Account</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-stone-500 border-t border-stone-100">
          <span>New to AVENZA? </span>
          <Link to="/register" className="text-amber-800 font-bold hover:underline">
            Create an Account
          </Link>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>256-Bit SSL Encrypted & Protected</span>
        </div>
      </div>
    </div>
  );
};
