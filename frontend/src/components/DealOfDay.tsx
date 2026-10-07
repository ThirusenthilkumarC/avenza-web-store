import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { CountdownTimer } from './CountdownTimer';
import { useNavigate } from 'react-router-dom';

export const DealOfDay: React.FC = () => {
  const navigate = useNavigate();
  const { products } = useShop();

  // Filter deal products
  const dealProducts = products.filter(p => p.isDealOfDay || p.discount >= 44).slice(0, 4);

  return (
    <section className="my-10 bg-amber-500/5 rounded-3xl p-5 sm:p-8 border border-amber-300/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
        <div className="flex flex-wrap items-center gap-3 text-left">
          <span className="text-2xl sm:text-3xl">⚡</span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
              Deal of the Day
            </h2>
            <p className="text-xs text-stone-500">Handpicked limited-time lightning discounts with free delivery</p>
          </div>
          
          <div className="mt-1 sm:mt-0 sm:ml-3">
            <CountdownTimer targetHours={8} />
          </div>
        </div>

        <button
          onClick={() => navigate('/products?deal=true')}
          className="flex items-center gap-1 text-xs font-bold text-amber-900 hover:text-amber-950 transition-colors group self-start sm:self-center min-h-[44px]"
        >
          <span>View All Lightning Deals →</span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {dealProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
