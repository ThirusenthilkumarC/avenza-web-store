import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { User, Mail, Lock, Phone, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = '10-digit mobile number required';
    if (!formData.password || formData.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    if (!formData.termsAccepted) errs.termsAccepted = 'You must accept the terms & privacy policy';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      showToast(`Account created successfully for ${formData.fullName}! Welcome to Avenza.`, 'success');
      navigate('/account');
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 my-10 text-left">
      <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <Logo />
          <h1 className="text-2xl font-bold font-serif-luxury text-stone-900 pt-2">
            Create Your Avenza Account
          </h1>
          <p className="text-xs text-stone-500">
            Join India's premier luxury marketplace for exclusive access & benefits
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Vikramaditya Roy"
                className="w-full pl-10 pr-4 py-3 text-xs border border-stone-300 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            {errors.fullName && <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-3 text-xs border border-stone-300 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            {errors.email && <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile Number</label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                placeholder="9876543210"
                className="w-full pl-10 pr-4 py-3 text-xs border border-stone-300 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 font-mono"
              />
            </div>
            {errors.phone && <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="password"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                placeholder="At least 6 characters"
                className="w-full pl-10 pr-4 py-3 text-xs border border-stone-300 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            {errors.password && <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Confirm Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="Re-enter password"
                className="w-full pl-10 pr-4 py-3 text-xs border border-stone-300 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            {errors.confirmPassword && <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              checked={formData.termsAccepted}
              onChange={e => setFormData({ ...formData, termsAccepted: e.target.checked })}
              className="mt-0.5 accent-amber-600"
            />
            <label htmlFor="terms" className="text-xs text-stone-600 leading-snug cursor-pointer">
              I agree to the <Link to="/terms" className="text-amber-800 font-bold hover:underline">Terms of Service</Link> & <Link to="/privacy" className="text-amber-800 font-bold hover:underline">Privacy Policy</Link>.
            </label>
          </div>
          {errors.termsAccepted && <p className="text-[11px] text-rose-600 font-semibold">{errors.termsAccepted}</p>}

          <button
            type="submit"
            className="w-full bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-stone-100 text-center text-xs text-stone-600">
          Already have an account?{' '}
          <Link to="/login" className="text-amber-800 font-bold hover:underline">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
};
