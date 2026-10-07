import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Store, ShieldCheck, CheckCircle2, ArrowRight, ChevronRight, User, Mail, Phone, MapPin, Building, Lock } from 'lucide-react';
import { categories } from '../data/categories';

export const SellerRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    category: categories[0]?.name || 'Electronics',
    city: '',
    gstin: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.businessName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    if (formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast('Seller Application Submitted Successfully!', 'success');
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 text-left">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Seller Onboarding</span>
      </div>

      {isSuccess ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-300 shadow-2xl text-center space-y-6 animate-fade-in max-w-xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider border border-emerald-300">
              APPLICATION RECEIVED
            </span>
            <h1 className="text-3xl font-bold font-serif-luxury text-stone-900 mt-2">
              Welcome to Avenza Merchant Hub!
            </h1>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              Your registration for <strong>{formData.businessName}</strong> has been submitted. Our dedicated seller onboarding team will review your GSTIN details and contact you within 24 hours.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-stone-950 text-amber-400 font-bold py-3.5 rounded-xl shadow-md text-xs text-center"
            >
              Return to Marketplace Home
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT PROMOTIONAL BANNER */}
          <div className="lg:col-span-5 bg-stone-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest">
              <Store className="w-3.5 h-3.5" /> AVENZA SELLER NETWORK
            </div>

            <h1 className="text-3xl font-bold font-serif-luxury text-stone-50 leading-tight">
              Grow Your Brand With Avenza
            </h1>

            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Join 45,000+ verified Indian merchants selling handcrafted luxury, high-end electronics, and flagship fashion.
            </p>

            <div className="space-y-3 pt-4 border-t border-stone-800 text-xs text-stone-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span><strong>0% Commission</strong> for the first 30 days</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <span>Express pickup across <strong>19,000+ Pincodes</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Instant weekly payouts directly to your bank account</span>
              </div>
            </div>
          </div>

          {/* RIGHT REGISTRATION FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-serif-luxury text-stone-900">
                Register as a Verified Seller
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">Fill out your business details below to create your merchant account</p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium rounded-xl">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-stone-500" /> Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-stone-500" /> Business Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Royal Silk Handlooms"
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-stone-500" /> Business Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seller@business.com"
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-stone-500" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm font-mono"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Primary Product Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm bg-white"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-500" /> Operating City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Surat, Jaipur, Mumbai"
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">GSTIN Number (Optional)</label>
                  <input
                    type="text"
                    value={formData.gstin}
                    onChange={(e) => setFormData({ ...formData, gstin: e.target.value.toUpperCase() })}
                    placeholder="e.g. 27AAAAA0000A1Z5"
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm font-mono"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-stone-500" /> Account Password *
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="py-3 px-5 border border-stone-300 rounded-xl text-stone-700 font-semibold text-xs hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Submitting Application...' : 'Register Merchant Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
