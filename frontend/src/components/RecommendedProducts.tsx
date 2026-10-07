import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { History, RotateCcw } from 'lucide-react';

export const RecommendedProducts: React.FC = () => {
  const { recentlyViewed, products, showToast } = useShop();

  const handleClearHistory = () => {
    localStorage.removeItem('luxury_recently_viewed');
    showToast('Browsing history cleared', 'info');
    window.location.reload();
  };

  const displayProducts = recentlyViewed.length >= 6
    ? recentlyViewed.slice(0, 6)
    : [...recentlyViewed, ...products.filter(p => !recentlyViewed.some(rv => rv.id === p.id))].slice(0, 6);

  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">
            <History className="w-3.5 h-3.5 text-amber-600" />
            PERSONALIZED SELECTION
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Recommended Based on Your Browsing
          </h2>
        </div>

        <button
          onClick={handleClearHistory}
          className="flex items-center gap-1 text-xs font-bold text-stone-500 hover:text-stone-900 transition-colors min-h-[44px]"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Clear History
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {displayProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
