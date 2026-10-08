import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, HelpCircle, ChevronDown, Mail, Phone, MessageSquare } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Orders & Shipping",
    question: "How do I track my order on Avenza?",
    answer: "You can track your order in real time by navigating to My Orders under your Account. Each order has an active tracking ID and delivery timeline indicator."
  },
  {
    category: "Orders & Shipping",
    question: "What are the estimated delivery times?",
    answer: "Express orders in major tier-1 metros (Mumbai, Delhi NCR, Bengaluru) are delivered within 24–48 hours. Standard deliveries across India take 2–4 business days."
  },
  {
    category: "Returns & Exchanges",
    question: "What is Avenza's 7-Day Return Policy?",
    answer: "We offer hassle-free 7-day doorstep returns and exchanges for all unused items in their original packaging. Once picked up, your refund is processed within 24 hours."
  },
  {
    category: "Returns & Exchanges",
    question: "How do I request an exchange for size or color?",
    answer: "Go to My Orders, select the item you wish to exchange, choose your desired size/variant, and select 'Request Exchange'. Our agent will perform doorstep pickup & replacement simultaneously."
  },
  {
    category: "Payments & Security",
    question: "Which payment methods are accepted?",
    answer: "We accept UPI (Google Pay, PhonePe, Paytm, BHIM), all major Indian Credit/Debit cards (Visa, Mastercard, RuPay, Amex), Net Banking, and Cash on Delivery."
  },
  {
    category: "Payments & Security",
    question: "Is shopping on Avenza 100% secure?",
    answer: "Yes. All transactions are encrypted with 256-Bit SSL encryption. We do not store any sensitive card or banking credentials on our servers."
  },
  {
    category: "Account & Authenticity",
    question: "Are products sold on Avenza 100% authentic?",
    answer: "Every product listed on Avenza is sourced directly from verified brand flagship outlets or certified master artisans with authenticity certificates."
  }
];

export const HelpPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Orders & Shipping', 'Returns & Exchanges', 'Payments & Security', 'Account & Authenticity'];

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 text-left space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Help & Support Concierge</span>
      </div>

      {/* Header Banner */}
      <div className="bg-stone-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-800 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full text-xs text-amber-400 font-bold uppercase tracking-widest">
          <HelpCircle className="w-4 h-4 text-amber-400" /> Customer Concierge
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-50">
          How can we assist you today?
        </h1>
        <p className="text-stone-300 text-xs sm:text-sm max-w-xl font-light leading-relaxed">
          Find instant answers to questions regarding orders, shipping, 7-day doorstep returns, payments, and product authenticity guarantees.
        </p>
      </div>

      {/* Quick Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors border ${
              selectedCategory === cat
                ? 'bg-stone-950 text-amber-400 border-stone-900 shadow-xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion FAQ List */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-4">
        <h3 className="text-xl font-bold font-serif-luxury text-stone-900 mb-6">
          Frequently Asked Questions ({filteredFaqs.length})
        </h3>

        <div className="divide-y divide-stone-100">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-stone-900 text-sm hover:text-amber-900 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-amber-700 text-xs font-mono">Q{idx + 1}.</span> {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180 text-amber-700' : ''}`} />
                </button>

                {isOpen && (
                  <p className="mt-3 text-xs text-stone-600 leading-relaxed pl-7 border-l-2 border-amber-500 animate-fade-in">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Concierge Strip */}
      <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-stone-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-200/80 text-amber-950 flex items-center justify-center font-bold">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold">Email Concierge</h4>
            <span className="text-[11px] text-stone-600 font-mono">support@avenza.in</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-200/80 text-amber-950 flex items-center justify-center font-bold">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold">Toll-Free Hotline</h4>
            <span className="text-[11px] text-stone-600 font-mono">1800-AVENZA (283692)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="w-full bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3 px-4 rounded-xl text-xs text-center transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Open Support Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};
