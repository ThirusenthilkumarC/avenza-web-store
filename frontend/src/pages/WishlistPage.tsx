import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ArrowRight, ChevronRight } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4 border border-rose-200">
          <Heart className="w-10 h-10 fill-rose-600" />
        </div>
        <h2 className="text-2xl font-bold font-serif-luxury text-stone-900">Your Wishlist is Empty</h2>
        <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
          Save your favorite products to your personal luxury wishlist to track deals and availability.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 mt-6 bg-stone-900 text-amber-400 font-bold px-7 py-3 rounded-xl text-xs hover:bg-amber-600 hover:text-stone-950 transition-all shadow-md"
        >
          <span>Explore Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 text-left">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">My Wishlist ({wishlist.length} items)</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            My Saved Wishlist
          </h1>
          <p className="text-xs text-stone-500 mt-1">Products saved to your browser session</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {wishlist.map(item => (
          <ProductCard key={item.product.id} product={item.product} />
        ))}
      </div>
    </div>
  );
};
