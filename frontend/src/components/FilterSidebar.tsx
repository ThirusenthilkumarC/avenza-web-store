import React from 'react';
import { categories } from '../data/categories';
import { RotateCcw, Star, X, Filter } from 'lucide-react';

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  selectedBrands: string[];
  minRating: number;
  minDiscount: number;
  inStockOnly: boolean;
}

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (newFilters: FilterState) => void;
  availableBrands: string[];
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onChange,
  availableBrands,
  isMobileOpen = false,
  onCloseMobile
}) => {
  const handleCategoryChange = (catName: string) => {
    onChange({ ...filters, category: catName });
  };

  const handleBrandToggle = (brand: string) => {
    const updated = filters.selectedBrands.includes(brand)
      ? filters.selectedBrands.filter(b => b !== brand)
      : [...filters.selectedBrands, brand];
    onChange({ ...filters, selectedBrands: updated });
  };

  const handleReset = () => {
    onChange({
      category: 'All',
      minPrice: 0,
      maxPrice: 100000,
      selectedBrands: [],
      minRating: 0,
      minDiscount: 0,
      inStockOnly: false
    });
  };

  const content = (
    <div className="space-y-6 text-left">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-amber-700" />
          <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider">Filters</h3>
        </div>
        
        <button
          onClick={handleReset}
          className="text-[11px] font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* CATEGORIES FILTER */}
      <div>
        <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
          Departments
        </h4>
        <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors flex items-center justify-between ${
              filters.category === 'All' ? 'bg-amber-100 text-amber-950 font-bold' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span>All Categories</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.name)}
              className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors flex items-center justify-between ${
                filters.category.toLowerCase() === cat.name.toLowerCase()
                  ? 'bg-amber-100 text-amber-950 font-bold'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] text-stone-400 font-normal">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* PRICE RANGE FILTER */}
      <div className="pt-4 border-t border-stone-200">
        <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
          Price Range (₹)
        </h4>
        <div className="flex items-center gap-2 mb-3">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => onChange({ ...filters, minPrice: Number(e.target.value) })}
            placeholder="Min"
            className="w-full p-2 text-xs border border-stone-300 rounded-lg outline-none focus:border-amber-600 font-mono"
          />
          <span className="text-stone-400 text-xs">-</span>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
            placeholder="Max"
            className="w-full p-2 text-xs border border-stone-300 rounded-lg outline-none focus:border-amber-600 font-mono"
          />
        </div>
        <input
          type="range"
          min={0}
          max={100000}
          step={1000}
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-amber-600"
        />
        <p className="text-[11px] text-stone-500 mt-1 font-mono">
          Up to ₹{filters.maxPrice.toLocaleString('en-IN')}
        </p>
      </div>

      {/* BRAND FILTER */}
      {availableBrands.length > 0 && (
        <div className="pt-4 border-t border-stone-200">
          <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
            Brands
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {availableBrands.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-2 text-xs text-stone-700 hover:text-stone-900 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="rounded border-stone-300 text-amber-600 focus:ring-amber-500 accent-amber-600"
                />
                <span className="font-medium">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* RATING FILTER */}
      <div className="pt-4 border-t border-stone-200">
        <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
          Minimum Rating
        </h4>
        <div className="space-y-1.5">
          {[4.5, 4.0, 3.5].map((starVal) => (
            <button
              key={starVal}
              onClick={() => onChange({ ...filters, minRating: filters.minRating === starVal ? 0 : starVal })}
              className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-medium border transition-colors ${
                filters.minRating === starVal
                  ? 'bg-amber-100 border-amber-300 text-amber-950 font-bold'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center gap-1">
                <span>{starVal}★ & Above</span>
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* DISCOUNT FILTER */}
      <div className="pt-4 border-t border-stone-200">
        <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
          Discount Percentage
        </h4>
        <div className="flex flex-wrap gap-2">
          {[20, 30, 40, 50].map((disc) => (
            <button
              key={disc}
              onClick={() => onChange({ ...filters, minDiscount: filters.minDiscount === disc ? 0 : disc })}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filters.minDiscount === disc
                  ? 'bg-stone-900 text-amber-400'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {disc}% or More
            </button>
          ))}
        </div>
      </div>

      {/* STOCK TOGGLE */}
      <div className="pt-4 border-t border-stone-200">
        <label className="flex items-center justify-between text-xs font-semibold text-stone-800 cursor-pointer">
          <span>In Stock Only</span>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onChange({ ...filters, inStockOnly: e.target.checked })}
            className="w-4 h-4 accent-amber-600 rounded"
          />
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:block w-64 shrink-0 bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs self-start sticky top-24">
        {content}
      </aside>

      {/* MOBILE FILTER MODAL DRAWER */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex lg:hidden">
          <div className="w-4/5 max-w-xs bg-white h-full shadow-2xl p-5 overflow-y-auto animate-fade-in relative">
            <button
              onClick={onCloseMobile}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            {content}
          </div>
          <div className="flex-1" onClick={onCloseMobile} />
        </div>
      )}
    </>
  );
};
