import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Search, Sparkles, ChevronRight } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || 'All';

  const { products } = useShop();

  // Search logic
  const results = products.filter(p => {
    const matchesQuery = !query ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase());
      
    const matchesCategory = categoryParam === 'All' || p.category.toLowerCase() === categoryParam.toLowerCase();
    
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 text-left">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Search Results</span>
      </div>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-serif-luxury text-stone-900">
              {query ? `Search results for "${query}"` : 'All Products'}
            </h1>
            <p className="text-xs text-stone-500 mt-0.5">
              Found <strong>{results.length}</strong> matching products across departments
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 shadow-2xs">
          <Sparkles className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-900 font-serif-luxury">No exact matches found</h3>
          <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
            Try checking spelling or using more generic keywords such as "Headphones", "Silk", "Laptop" or "Watch".
          </p>
          <Link
            to="/products"
            className="inline-block mt-4 bg-stone-900 text-amber-400 font-bold px-6 py-3 rounded-xl text-xs hover:bg-amber-600 hover:text-stone-950 transition-colors shadow-sm"
          >
            Browse All Products Catalog
          </Link>
        </div>
      )}
    </div>
  );
};
