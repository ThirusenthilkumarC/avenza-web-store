import React from 'react';
import { Tag, RefreshCw, Truck, ShieldCheck } from 'lucide-react';

export const PromoCards: React.FC = () => {
  const benefits = [
    {
      icon: Tag,
      title: "SPECIAL DISCOUNT",
      subtitle: "Up to 70% Off",
      color: "bg-amber-100/70 text-amber-900 border-amber-200"
    },
    {
      icon: RefreshCw,
      title: "SMART EXCHANGE",
      subtitle: "Instant trade-in value",
      color: "bg-amber-100/70 text-amber-900 border-amber-200"
    },
    {
      icon: Truck,
      title: "EXPRESS DELIVERY",
      subtitle: "Fast delivery across India",
      color: "bg-amber-100/70 text-amber-900 border-amber-200"
    },
    {
      icon: ShieldCheck,
      title: "SECURE PAYMENTS",
      subtitle: "Protected checkout",
      color: "bg-amber-100/70 text-amber-900 border-amber-200"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
      {benefits.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${item.color} group-hover:scale-105 transition-transform`}>
              <IconComponent className="w-6 h-6 text-amber-900" />
            </div>

            <div className="text-left">
              <h4 className="text-xs font-extrabold text-stone-900 tracking-wider uppercase">
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
