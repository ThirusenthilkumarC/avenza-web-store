import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Search, Sparkles, ChevronRight, X } from 'lucide-react';
import { SEO } from '../components/SEO';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || 'All';

  const { products } = useShop();

  const handleClearSearch = () => {
    setSearchParams({});
  };

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
      <SEO
        title={query ? `Search: "${query}" | AVENZA Luxury Marketplace` : 'Search Luxury Catalog | AVENZA'}
        description={`Explore search results for "${query}" across luxury flagship electronics, fashion, and artisanal heritage goods.`}
      />
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Search Results</span>
      </div>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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

          {(query || categoryParam !== 'All') && (
            <button
              onClick={handleClearSearch}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition-colors self-start sm:self-auto cursor-pointer"
              aria-label="Clear Search"
            >
              <X className="w-3.5 h-3.5 text-stone-600" />
              <span>Clear Search</span>
            </button>
          )}
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
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {(query || categoryParam !== 'All') && (
              <button
                onClick={handleClearSearch}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-2.5 rounded-xl text-xs transition-colors shadow-sm"
              >
                Clear Search
              </button>
            )}
            <Link
              to="/products"
              className="bg-stone-900 text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-amber-600 hover:text-stone-950 transition-colors shadow-sm"
            >
              Browse All Products Catalog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
