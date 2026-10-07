import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { Shirt, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FashionSection: React.FC = () => {
  const navigate = useNavigate();
  const { products } = useShop();

  const fashionProducts = products
    .filter(p => p.category === 'Fashion' || p.category === 'Accessories')
    .slice(0, 4);

  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">
            <Shirt className="w-3.5 h-3.5 text-amber-600" />
            HERITAGE & COUTURE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Haute Fashion & Heritage Apparel
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">Handcrafted luxury and timeless Indian style</p>
        </div>

        <button
          onClick={() => navigate('/products/men-fashion')}
          className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors group min-h-[44px]"
        >
          <span>Explore Couture</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {fashionProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
