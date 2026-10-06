import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { History, Sparkles } from 'lucide-react';

export const RecommendedProducts: React.FC = () => {
  const { recentlyViewed, products } = useShop();

  // If user has recently viewed items, show them + top picks. Else show popular items.
  const displayProducts = recentlyViewed.length >= 4
    ? recentlyViewed.slice(0, 6)
    : [...recentlyViewed, ...products.filter(p => !recentlyViewed.some(rv => rv.id === p.id))].slice(0, 6);

  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">
            {recentlyViewed.length > 0 ? (
              <>
                <History className="w-3.5 h-3.5 text-amber-600" />
                RECENTLY VIEWED & PICKED FOR YOU
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                CURATED RECOMMENDATIONS
              </>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Recommended Based on Your Browsing
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {displayProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
