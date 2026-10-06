import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SortDropdownProps {
  value: string;
  onChange: (sortValue: string) => void;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-stone-500 hidden sm:inline flex items-center gap-1">
        <ArrowUpDown className="w-3.5 h-3.5" /> Sort by:
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border border-stone-300 hover:border-amber-600 rounded-xl px-3.5 py-2 text-xs font-semibold text-stone-800 outline-none cursor-pointer shadow-2xs transition-colors"
      >
        <option value="relevance">Relevance</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Customer Rating</option>
        <option value="discount">Biggest Discount</option>
        <option value="newest">Newest Arrivals</option>
      </select>
    </div>
  );
};
