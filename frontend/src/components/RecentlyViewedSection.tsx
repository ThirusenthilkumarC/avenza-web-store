import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { History, RotateCcw } from 'lucide-react';

export const RecentlyViewedSection: React.FC = () => {
  const { recentlyViewed, clearRecentlyViewed } = useShop();

  // If no items have been viewed, do not render an empty section
  if (!recentlyViewed || recentlyViewed.length === 0) {
    return null;
  }

  return (
    <section className="my-14 text-left">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">
            <History className="w-3.5 h-3.5 text-amber-600" />
            BROWSING HISTORY
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Recently Viewed by You
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Items you recently inspected during your shopping journey on AVENZA.
          </p>
        </div>

        <button
          onClick={clearRecentlyViewed}
          className="flex items-center gap-1 text-xs font-bold text-stone-500 hover:text-stone-900 transition-colors min-h-[44px]"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Clear History
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {recentlyViewed.slice(0, 5).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
