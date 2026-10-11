import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  verified: boolean;
  productName: string;
  productPath: string;
  quote: string;
  tag: string;
}

const customerReviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Aishwarya Singhania',
    location: 'Altamount Road, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '3 days ago',
    verified: true,
    productName: 'Devika Royal Heritage Banarasi Silk Saree',
    productPath: '/shop?category=fashion',
    quote: 'The craftsmanship of the Banarasi weave is transcendent. It arrived in white-glove condition with the certificate of authenticity and custom gilded packaging within 24 hours.',
    tag: 'Haute Fashion'
  },
  {
    id: 'rev-2',
    name: 'Kabir Oberoi',
    location: 'Golf Links, New Delhi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '1 week ago',
    verified: true,
    productName: 'Aura Pro ANC Titanium Wireless Headphones',
    productPath: '/shop?category=electronics',
    quote: 'Superior acoustics, immaculate titanium finish, and seamless noise cancelling. The AVENZA concierge team kept me updated at every stage of courier transit.',
    tag: 'Flagship Electronics'
  },
  {
    id: 'rev-3',
    name: 'Dr. Meera Nambiar',
    location: 'Indiranagar, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    productName: 'Chronos Heritage Mechanical Tourbillon Watch',
    productPath: '/shop?category=accessories',
    quote: 'A masterpiece timepiece. The weight, exhibition caseback, and movement precision exceeded expectations. Truly a new avenue for luxury shopping in India.',
    tag: 'Fine Horology'
  }
];

export const CustomerReviewsSection: React.FC = () => {
  return (
    <section className="my-14 text-left">
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl relative overflow-hidden">
        {/* Subtle decorative gold glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Patron Testimonials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury tracking-tight text-stone-100">
              Trusted by Discerning Patrons Across India
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-xl leading-relaxed">
              Read authentic experiences from certified patrons who cherish authentic luxury, white-glove fulfillment, and certified provenance.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 bg-stone-950/60 p-4 rounded-2xl border border-stone-800 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-stone-100 mt-1">4.96 / 5.0 Rating</p>
              <p className="text-[11px] text-stone-400">Over 25,000+ Luxury Orders</p>
            </div>
            <div className="h-10 w-px bg-stone-800" />
            <div>
              <p className="text-base font-bold text-amber-400">100%</p>
              <p className="text-[11px] text-stone-300 font-medium">Authenticity</p>
              <p className="text-[10px] text-stone-500">Guaranteed</p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-950/70 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group shadow-md"
            >
              <div>
                {/* Header row with avatar, name, and quote icon */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      loading="lazy"
                      className="w-11 h-11 rounded-full object-cover border border-amber-400/30"
                    />
                    <div>
                      <h3 className="font-bold text-sm text-stone-100 group-hover:text-amber-300 transition-colors">
                        {rev.name}
                      </h3>
                      <p className="text-[11px] text-stone-400">{rev.location}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-stone-700 group-hover:text-amber-500/50 transition-colors shrink-0" />
                </div>

                {/* Stars and verified badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3 h-3" /> Verified Purchase
                    </span>
                  )}
                  <span className="text-[10px] text-stone-500 ml-auto">{rev.date}</span>
                </div>

                {/* Quote */}
                <p className="text-xs text-stone-300 leading-relaxed italic mb-4">
                  "{rev.quote}"
                </p>
              </div>

              {/* Product purchased reference link */}
              <div className="pt-3 border-t border-stone-850 flex items-center justify-between text-[11px]">
                <span className="text-stone-400 truncate pr-2">
                  Purchased:{' '}
                  <Link to={rev.productPath} className="text-amber-400 hover:underline font-medium">
                    {rev.productName}
                  </Link>
                </span>
                <span className="shrink-0 px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-[10px] text-stone-400">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
