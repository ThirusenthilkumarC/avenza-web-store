import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { Award, ArrowRight } from 'lucide-react';

export const BestSellersSection: React.FC = () => {
  const { products } = useShop();

  // Pick top rated and highest reviewed products
  const bestSellers = [...products]
    .sort((a, b) => (b.rating * 1000 + b.reviews) - (a.rating * 1000 + a.reviews))
    .slice(0, 5);

  return (
    <section className="my-14 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            TOP RATED BY PATRONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            AVENZA Best Sellers
          </h2>
          <p className="text-xs text-stone-500 mt-1 max-w-xl">
            Our most coveted luxury timepieces, couture fashion, high-fidelity audio, and flagship devices with certified 5-star customer ratings.
          </p>
        </div>

        <Link
          to="/best-sellers"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 hover:underline shrink-0 self-start sm:self-auto min-h-[44px]"
        >
          <span>View All Best Sellers</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {bestSellers.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
