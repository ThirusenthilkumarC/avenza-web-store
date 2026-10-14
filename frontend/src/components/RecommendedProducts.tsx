import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

export const RecommendedProducts: React.FC = () => {
  const { products } = useShop();

  // Curate highly-rated luxury products (rating >= 4.7) from diverse departments
  const recommendations = useMemo(() => {
    return products
      .filter(p => p.rating >= 4.7 && p.discount >= 10)
      .slice(0, 5);
  }, [products]);

  if (recommendations.length === 0) return null;

  return (
    <section className="my-14 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            TAILORED FOR YOU
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Personalized Luxury Recommendations
          </h2>
          <p className="text-xs text-stone-500 mt-1 max-w-xl">
            Algorithmic curations matched to premium taste profiles, verified mastercraft reviews, and trending artisan collections.
          </p>
        </div>

        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 hover:underline shrink-0 self-start sm:self-auto min-h-[44px]"
        >
          <span>Explore All Curations</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {recommendations.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
