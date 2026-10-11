import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { User, Package, Heart, MapPin, CreditCard, LogOut, ChevronRight, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { SEO } from '../components/SEO';

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, updateProfile, logout, deliveryLocation, showToast } = useShop();

  const [profile, setProfile] = useState({
    name: currentUser?.name || 'Vikramaditya Roy',
    email: currentUser?.email || 'vikram.roy@example.com',
    phone: currentUser?.phone || '+91 98765 43210'
  });

  useEffect(() => {
    if (currentUser) {
      setProfile({
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone || '+91 98765 43210'
      });
    }
  }, [currentUser]);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.name.trim() || !profile.email.trim()) {
      showToast('Name and email are required', 'error');
      return;
    }
    updateProfile({
      name: profile.name.trim(),
      email: profile.email.trim(),
      phone: profile.phone.trim()
    });
    showToast('Profile details updated successfully', 'success');
  };

  const handleLogout = () => {
    logout();
    showToast('You have successfully signed out of your session', 'info');
    navigate('/login');
  };

  return (
    <>
      <SEO
        title="My Account Dashboard | AVENZA Luxury Marketplace"
        description="Manage your AVENZA account details, personal addresses, privilege tier, and active concierge orders."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 text-left">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
          <Link to="/" className="hover:text-stone-900">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-stone-900">My Account</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
              Customer Account Dashboard
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              Welcome back, {currentUser?.name || 'Privileged Guest'}. Manage your profile and luxury preferences.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{currentUser?.membershipTier || 'Privilege Gold'} Tier</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT ACCOUNT NAVIGATION TABS */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-stone-200/90 shadow-2xs space-y-1">
            <div className="p-4 bg-stone-900 text-white rounded-2xl mb-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-lg shadow-sm font-serif-luxury">
                {profile.name ? profile.name[0].toUpperCase() : 'A'}
              </div>
              <div className="overflow-hidden">
                <p className="font-bold text-sm font-serif-luxury truncate">{profile.name}</p>
                <p className="text-[11px] text-stone-300 truncate">{profile.email}</p>
                <p className="text-[10px] text-amber-400 font-medium mt-0.5">{currentUser?.joinedDate || 'Member since 2026'}</p>
              </div>
            </div>

            <Link
              to="/account"
              className="flex items-center gap-3 p-3 rounded-xl bg-amber-100/70 text-amber-950 font-bold text-xs"
            >
              <User className="w-4 h-4 text-amber-800" /> Profile Information
            </Link>

            <Link
              to="/orders"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-100 text-stone-700 font-medium text-xs transition-colors"
            >
              <Package className="w-4 h-4 text-stone-500" /> My Orders & Shipments
            </Link>

            <Link
              to="/wishlist"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-100 text-stone-700 font-medium text-xs transition-colors"
            >
              <Heart className="w-4 h-4 text-stone-500" /> Saved Wishlist Items
            </Link>

            <Link
              to="/account/addresses"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-100 text-stone-700 font-medium text-xs transition-colors"
            >
              <MapPin className="w-4 h-4 text-stone-500" /> Saved Delivery Addresses ({deliveryLocation.city})
            </Link>

            <button
              onClick={() => showToast('Saved cards, UPI IDs, and Net Banking tokens are active', 'info')}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-stone-100 text-stone-700 font-medium text-xs transition-colors text-left"
            >
              <CreditCard className="w-4 h-4 text-stone-500" /> Saved Payment Methods
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 p-3 rounded-xl text-rose-700 hover:bg-rose-50 font-bold text-xs transition-colors text-left mt-4 border-t border-stone-100 pt-3"
            >
              <LogOut className="w-4 h-4 text-rose-600" /> Sign Out
            </button>
          </div>

          {/* RIGHT PROFILE FORM & MEMBER PERKS */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-2xs space-y-6">
              <h2 className="text-xl font-bold font-serif-luxury text-stone-900 pb-3 border-b border-stone-200">
                Personal Information & Settings
              </h2>

              <form onSubmit={handleSaveProfile} className="space-y-4 max-w-xl">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600 font-mono"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="submit"
                    className="bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Save Profile Changes
                  </button>
                </div>
              </form>
            </div>

            {/* MEMBER PRIVILEGE PERKS CARD */}
            <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
                <h3 className="font-serif-luxury font-bold text-lg text-amber-300">
                  {currentUser?.membershipTier || 'Privilege Gold'} Membership Benefits
                </h3>
              </div>
              <p className="text-xs text-stone-300 mb-6 leading-relaxed">
                As a valued AVENZA member, your account is enrolled in complimentary luxury concierge services, insured logistics, and guaranteed 48-hour return resolution across India.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-bold text-amber-400 mb-1">Complimentary Courier</p>
                  <p className="text-stone-400 text-[11px]">Free tamper-evident express air shipping on all orders.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-bold text-amber-400 mb-1">Private Preview Vault</p>
                  <p className="text-stone-400 text-[11px]">24-hour early access to bespoke festival releases and limited drops.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-bold text-amber-400 mb-1">Direct Concierge</p>
                  <p className="text-stone-400 text-[11px]">Dedicated assistance via concierge@avenza.luxury.</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  VIP Priority Line: 1800-283-692
                </span>
                <Link to="/contact" className="text-amber-400 hover:underline font-semibold">
                  Contact Concierge Desk &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

