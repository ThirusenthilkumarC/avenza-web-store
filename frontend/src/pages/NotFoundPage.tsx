import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { Home, ShoppingBag } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 my-16 text-center space-y-8">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl space-y-6">
        <span className="text-6xl sm:text-8xl font-black font-serif-luxury text-amber-900 tracking-widest block">
          404
        </span>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Avenue Not Found
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
            The page or product link you are looking for may have moved, been renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Search Bar fallback */}
        <div className="max-w-md mx-auto pt-2">
          <SearchBar />
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold px-7 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs shadow-md"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold px-7 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs border border-stone-300"
          >
            <ShoppingBag className="w-4 h-4" /> Explore All Departments
          </Link>
        </div>
      </div>
    </div>
  );
};
