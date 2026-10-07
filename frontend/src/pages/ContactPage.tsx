import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ChevronRight, Mail, Phone, MapPin, Headphones, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your inquiry has been sent to Avenza Concierge', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 text-left space-y-6">
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Contact & Support</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 bg-stone-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest">
            <Headphones className="w-3.5 h-3.5" /> 24x7 CONCIERGE
          </div>

          <h1 className="text-3xl font-bold font-serif-luxury text-stone-50">
            Get in Touch With Us
          </h1>

          <div className="space-y-4 text-xs text-stone-300 pt-2">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Corporate Office</strong>
                <span>Avenza Towers, Marine Drive, Mumbai 400001, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <strong className="text-white block font-semibold">Toll-Free Support</strong>
                <span className="font-mono">1800-200-AVENZA (+91 22 8976 4321)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <strong className="text-white block font-semibold">Concierge Email</strong>
                <span>support@avenza.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-4">
          <h2 className="text-2xl font-bold font-serif-luxury text-stone-900">
            Send Us a Message
          </h2>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
              <h3 className="font-bold text-emerald-900 text-sm">Message Sent Successfully!</h3>
              <p className="text-xs text-emerald-700">Thank you for reaching out. An Avenza concierge manager will respond within 4 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Vikramaditya Roy"
                  className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Your Email Address *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Subject *</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Order Inquiry / Return Request"
                  className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Message *</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your query in detail..."
                  className="w-full p-3 border border-stone-300 rounded-xl outline-none focus:border-amber-600 text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
