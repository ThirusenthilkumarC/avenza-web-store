import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { Laptop, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ElectronicsSection: React.FC = () => {
  const navigate = useNavigate();
  const { products } = useShop();

  const electronicsProducts = products
    .filter(p => p.category === 'Electronics' || p.category === 'Mobiles')
    .slice(0, 4);

  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">
            <Laptop className="w-3.5 h-3.5 text-amber-600" />
            TECH & INNOVATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Best of Electronics & Gadgets
          </h2>
        </div>

        <button
          onClick={() => navigate('/products/electronics')}
          className="hidden sm:flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors group min-h-[44px]"
        >
          <span>Explore Audio Fest →</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* LEFT FEATURED PROMO BANNER */}
        <div
          onClick={() => navigate('/products/electronics')}
          className="lg:col-span-4 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between cursor-pointer border border-stone-800 shadow-xl group hover:border-amber-500/50 transition-all relative overflow-hidden min-h-[340px]"
        >
          {/* Subtle Ambient Circle */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest">
              <Volume2 className="w-3.5 h-3.5" /> FEATURED SHOWCASE
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-50 mt-4 leading-tight group-hover:text-amber-300 transition-colors">
              Immersive Spatial Audio
            </h3>
            
            <p className="text-xs text-stone-300 mt-2.5 font-light leading-relaxed">
              Upgrade your everyday experience with next-generation technology.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between">
            <span className="text-xs font-extrabold text-amber-400">Explore Audio Fest →</span>
          </div>
        </div>

        {/* RIGHT PRODUCT CARDS GRID */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {electronicsProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
