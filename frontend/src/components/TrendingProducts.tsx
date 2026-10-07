import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

export const TrendingProducts: React.FC = () => {
  const { products } = useShop();
  const [activeTab, setActiveTab] = useState('All Trending');

  const tabs = [
    'All Trending',
    'Tech & Gadgets',
    'Apparel & Style',
    'Home & Living'
  ];

  // Filter logic for tabs
  const filteredProducts = products.filter(product => {
    if (activeTab === 'All Trending') return true;
    if (activeTab === 'Tech & Gadgets') return product.category === 'Electronics' || product.category === 'Mobiles' || product.category === 'Watches';
    if (activeTab === 'Apparel & Style') return product.category === 'Fashion' || product.category === 'Bags' || product.category === 'Accessories';
    if (activeTab === 'Home & Living') return product.category === 'Home' || product.category === 'Kitchen';
    return true;
  }).slice(0, 15);

  return (
    <section className="my-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div className="text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            CURATED FAVORITES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Trending Now Across India
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all min-h-[44px] flex items-center ${
                activeTab === tab
                  ? 'bg-stone-950 text-amber-400 shadow-md border border-stone-800'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: 2 cols on Mobile, 3 on Tablet, 5 on Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
