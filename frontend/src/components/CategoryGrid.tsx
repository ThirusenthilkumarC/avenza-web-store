import React from 'react';
import { categories } from '../data/categories';
import { CategoryCard } from './CategoryCard';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CategoryGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
            EXPLORE CURATED AVENUES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 mt-1">
            Shop by Curated Avenues
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">Discover premium collections selected for you</p>
        </div>

        <button
          onClick={() => navigate('/products')}
          className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors group min-h-[44px]"
        >
          <span>View All Curations</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid: 2 per row on Mobile, 4-5 on Tablet, 8 per row on Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
};
