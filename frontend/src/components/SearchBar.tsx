import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ChevronDown, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/categories';

export const SearchBar: React.FC<{ isMobile?: boolean; onCloseMobile?: () => void }> = ({
  isMobile = false,
  onCloseMobile
}) => {
  const navigate = useNavigate();
  const { products, setSearchQuery: setContextSearchQuery } = useShop();
  
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isOpenSuggestions, setIsOpenSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on query & category
  const suggestions = query.trim().length > 1
    ? products
        .filter(p => {
          const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.brand.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase());
          const matchesCategory = selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
          return matchesQuery && matchesCategory;
        })
        .slice(0, 6)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpenSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim() && selectedCategory === 'All') return;

    setContextSearchQuery(query);
    setIsOpenSuggestions(false);
    
    let path = `/search?q=${encodeURIComponent(query)}`;
    if (selectedCategory !== 'All') {
      path += `&category=${encodeURIComponent(selectedCategory)}`;
    }
    
    if (onCloseMobile) onCloseMobile();
    navigate(path);
  };

  const handleSelectSuggestion = (productId: number) => {
    setIsOpenSuggestions(false);
    if (onCloseMobile) onCloseMobile();
    navigate(`/product/${productId}`);
  };

  return (
    <div ref={searchRef} className={`relative ${isMobile ? 'w-full' : 'max-w-2xl flex-1'}`}>
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-white rounded-xl border border-stone-300 shadow-sm focus-within:border-amber-600 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all overflow-hidden"
      >
        {/* Category selector dropdown inside search */}
        {!isMobile && (
          <div className="relative border-r border-stone-200 shrink-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-stone-50 hover:bg-stone-100 py-2.5 pl-3.5 pr-8 text-xs font-semibold text-stone-700 cursor-pointer outline-none transition-colors"
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        )}

        {/* Input input */}
        <div className="relative flex-1 flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpenSuggestions(true);
            }}
            onFocus={() => setIsOpenSuggestions(true)}
            placeholder="Search 50,000+ luxury products, brands & categories..."
            className="w-full py-2.5 px-4 text-sm text-stone-900 bg-transparent placeholder-stone-400 outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpenSuggestions(false);
              }}
              className="p-1.5 text-stone-400 hover:text-stone-700 mr-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 px-5 py-2.5 flex items-center justify-center font-medium transition-colors shrink-0"
          aria-label="Submit Search"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>

      {/* Instant Suggestions Dropdown */}
      {isOpenSuggestions && query.trim().length > 1 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden z-50 animate-fade-in">
          <div className="p-2.5 bg-stone-50 border-b border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Product Matches</span>
            <span className="flex items-center gap-1 text-amber-700">
              <Sparkles className="w-3 h-3" /> Quick view
            </span>
          </div>

          {suggestions.length > 0 ? (
            <div className="divide-y divide-stone-100 max-h-80 overflow-y-auto">
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item.id)}
                  className="p-3 hover:bg-amber-50/50 flex items-center gap-3 cursor-pointer transition-colors group"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-11 h-11 object-cover rounded-lg border border-stone-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-stone-900 truncate group-hover:text-amber-800">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-stone-500">
                      <span>{item.brand}</span>
                      <span>•</span>
                      <span className="font-semibold text-stone-900">₹{item.price.toLocaleString('en-IN')}</span>
                      {item.discount > 0 && (
                        <span className="text-emerald-600 text-[10px] font-bold">({item.discount}% OFF)</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-stone-500">
              No products found for "{query}". Press Enter to search all departments.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
