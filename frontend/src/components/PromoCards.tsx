import React from 'react';
import { Tag, RefreshCw, Truck, ShieldCheck } from 'lucide-react';

export const PromoCards: React.FC = () => {
  const benefits = [
    {
      icon: Tag,
      title: "Special Discount",
      subtitle: "Up to 70% Off Top Brands & Daily Essentials",
      color: "bg-amber-100/70 text-amber-900 border-amber-200"
    },
    {
      icon: RefreshCw,
      title: "Smart Exchange",
      subtitle: "Instant Trade-in Value for Old Devices & Apparel",
      color: "bg-amber-100/70 text-amber-900 border-amber-200"
    },
    {
      icon: Truck,
      title: "Free Express Delivery",
      subtitle: "On Orders Above ₹499 Across 19,000+ Pincodes",
      color: "bg-amber-100/70 text-amber-900 border-amber-200"
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      subtitle: "100% Protected UPI, Cards & Easy EMI Options",
      color: "bg-amber-100/70 text-amber-900 border-amber-200"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      {benefits.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${item.color} group-hover:scale-105 transition-transform`}>
              <IconComponent className="w-6 h-6" />
            </div>

            <div className="text-left">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="text-xs text-stone-500 mt-0.5 leading-snug">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
