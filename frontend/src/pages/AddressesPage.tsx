import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus, Trash2, Edit2, Check } from 'lucide-react';
import type { DeliveryAddress } from '../types';
import { useShop } from '../context/ShopContext';

export const AddressesPage: React.FC = () => {
  const { showToast } = useShop();

  const [addresses, setAddresses] = useState<DeliveryAddress[]>([
    {
      id: 'addr-1',
      fullName: 'Vikramaditya Roy',
      phone: '+91 98765 43210',
      pincode: '400001',
      street: 'Apartment 4B, Marine Drive Towers',
      city: 'Mumbai',
      state: 'Maharashtra',
      type: 'Home',
      isDefault: true
    },
    {
      id: 'addr-2',
      fullName: 'Vikramaditya Roy (Work)',
      phone: '+91 98765 43210',
      pincode: '400051',
      street: 'Suite 1204, BKC Financial Tower',
      city: 'Mumbai',
      state: 'Maharashtra',
      type: 'Work',
      isDefault: false
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddr, setEditingAddr] = useState<DeliveryAddress | null>(null);

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    pincode: '',
    street: '',
    city: '',
    state: '',
    type: 'Home' as 'Home' | 'Work' | 'Other'
  });

  const handleOpenModal = (addr?: DeliveryAddress) => {
    if (addr) {
      setEditingAddr(addr);
      setForm({
        fullName: addr.fullName,
        phone: addr.phone,
        pincode: addr.pincode,
        street: addr.street,
        city: addr.city,
        state: addr.state,
        type: addr.type
      });
    } else {
      setEditingAddr(null);
      setForm({
        fullName: '',
        phone: '',
        pincode: '',
        street: '',
        city: '',
        state: '',
        type: 'Home'
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || form.pincode.length < 6) {
      showToast('Please fill all required fields correctly', 'error');
      return;
    }

    if (editingAddr) {
      setAddresses(prev => prev.map(a => a.id === editingAddr.id ? { ...a, ...form } : a));
      showToast('Address updated successfully', 'success');
    } else {
      const newAddr: DeliveryAddress = {
        id: `addr-${Date.now()}`,
        ...form,
        isDefault: addresses.length === 0
      };
      setAddresses(prev => [...prev, newAddr]);
      showToast('New delivery address added', 'success');
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
    showToast('Address removed', 'info');
  };

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
    showToast('Default delivery address updated', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 text-left space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/account" className="hover:text-stone-900">Account</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Saved Addresses</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Delivery Addresses
          </h1>
          <p className="text-xs text-stone-500 mt-0.5">Manage your shipping destinations & default locations</p>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-md"
        >
          <Plus className="w-4 h-4" /> Add New Address
        </button>
      </div>

      {/* Address Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map(addr => (
          <div
            key={addr.id}
            className={`bg-white rounded-3xl p-6 border transition-all space-y-4 flex flex-col justify-between relative ${
              addr.isDefault
                ? 'border-amber-500 ring-2 ring-amber-500/20 shadow-md'
                : 'border-stone-200 shadow-2xs hover:border-stone-300'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="bg-stone-100 text-stone-800 font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-md tracking-wider">
                  {addr.type}
                </span>
                {addr.isDefault && (
                  <span className="bg-amber-100 text-amber-950 font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Check className="w-3 h-3 text-amber-800" /> Default Address
                  </span>
                )}
              </div>

              <h3 className="font-bold text-stone-900 text-sm">{addr.fullName}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {addr.street}, {addr.city}, {addr.state} - <strong className="font-mono text-stone-900">{addr.pincode}</strong>
              </p>
              <p className="text-xs text-stone-500">Phone: {addr.phone}</p>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold">
              {!addr.isDefault && (
                <button
                  onClick={() => handleSetDefault(addr.id)}
                  className="text-amber-800 hover:underline text-[11px]"
                >
                  Set as Default
                </button>
              )}
              <div className="flex items-center gap-3 ml-auto">
                <button
                  onClick={() => handleOpenModal(addr)}
                  className="text-stone-600 hover:text-stone-900 flex items-center gap-1"
                >
                  <Edit2 className="w-3.5 h-3.5" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Address Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 text-left space-y-4 animate-fade-in">
            <h3 className="text-lg font-bold font-serif-luxury text-stone-900">
              {editingAddr ? 'Edit Address' : 'Add New Delivery Address'}
            </h3>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={e => setForm({ ...form, fullName: e.target.value })}
                  className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Mobile Phone</label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 font-mono"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Street Address / Landmark</label>
                <input
                  type="text"
                  value={form.street}
                  onChange={e => setForm({ ...form, street: e.target.value })}
                  className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">City</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={e => setForm({ ...form, city: e.target.value })}
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">State</label>
                  <input
                    type="text"
                    value={form.state}
                    onChange={e => setForm({ ...form, state: e.target.value })}
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    value={form.pincode}
                    onChange={e => setForm({ ...form, pincode: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                    className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 font-mono"
                    required
                  />
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 border border-stone-300 rounded-xl text-stone-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-stone-950 text-amber-400 hover:bg-amber-600 hover:text-stone-950 font-bold rounded-xl shadow-md transition-colors"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
