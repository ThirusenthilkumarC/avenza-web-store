import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { User, Package, Heart, MapPin, CreditCard, LogOut, ChevronRight } from 'lucide-react';

export const AccountPage: React.FC = () => {
  const { deliveryLocation, showToast } = useShop();

  const [profile, setProfile] = useState({
    name: 'Vikramaditya Roy',
    email: 'vikram.roy@example.com',
    phone: '+91 98765 43210'
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Profile details updated successfully', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 text-left">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">My Account</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 mb-6">
        Customer Account Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT ACCOUNT NAVIGATION TABS */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-stone-200/90 shadow-2xs space-y-1">
          <div className="p-4 bg-stone-900 text-white rounded-2xl mb-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-lg shadow-sm">
              {profile.name[0]}
            </div>
            <div>
              <p className="font-bold text-sm font-serif-luxury">{profile.name}</p>
              <p className="text-[11px] text-stone-300">{profile.email}</p>
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

          <button
            onClick={() => showToast('Saved address list is synced with checkout', 'info')}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-stone-100 text-stone-700 font-medium text-xs transition-colors text-left"
          >
            <MapPin className="w-4 h-4 text-stone-500" /> Saved Delivery Addresses ({deliveryLocation.city})
          </button>

          <button
            onClick={() => showToast('Saved cards and UPI IDs are active', 'info')}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-stone-100 text-stone-700 font-medium text-xs transition-colors text-left"
          >
            <CreditCard className="w-4 h-4 text-stone-500" /> Saved Payment Methods
          </button>

          <button
            onClick={() => showToast('Logged out of demo session', 'info')}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-rose-700 hover:bg-rose-50 font-bold text-xs transition-colors text-left mt-4 border-t border-stone-100 pt-3"
          >
            <LogOut className="w-4 h-4 text-rose-600" /> Sign Out
          </button>
        </div>

        {/* RIGHT PROFILE FORM */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-stone-200/90 shadow-2xs space-y-6">
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

            <button
              type="submit"
              className="bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-sm"
            >
              Save Profile Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
