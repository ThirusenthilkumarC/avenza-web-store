import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Logo } from '../components/Logo';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useShop();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Signed in successfully!', 'success');
    navigate('/account');
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4 text-left">
      <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div className="text-center">
          <Logo />
          <h2 className="text-2xl font-bold font-serif-luxury text-stone-900 mt-4">Welcome Back</h2>
          <p className="text-xs text-stone-500 mt-1">Sign in to your account to view saved orders & wishlist</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-stone-500" /> Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-stone-500" /> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <span>Sign In to Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-stone-500">
          <span>Don't have an account yet? </span>
          <button
            onClick={() => {
              showToast('Demo Account auto-initialized!', 'info');
              navigate('/account');
            }}
            className="text-amber-800 font-bold hover:underline"
          >
            Sign up as Guest
          </button>
        </div>
      </div>
    </div>
  );
};
