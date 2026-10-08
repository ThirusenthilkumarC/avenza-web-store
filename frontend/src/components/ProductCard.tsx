import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Eye, ShieldCheck, Check } from 'lucide-react';
import type { Product } from '../types';
import { useShop } from '../context/ShopContext';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  
  const [imgSrc, setImgSrc] = useState(product.images[0]);
  const [isAdded, setIsAdded] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden relative transform hover:-translate-y-1"
    >
      {/* Top Badges & Wishlist */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div>
          {product.badge && (
            <span className="bg-stone-900 text-amber-400 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-md shadow-sm border border-stone-800 tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        <button
          onClick={handleWishlistToggle}
          className={`pointer-events-auto p-2 rounded-full shadow-md backdrop-blur-xs transition-transform duration-200 hover:scale-110 ${
            inWishlist
              ? 'bg-rose-50 text-rose-600 border border-rose-200'
              : 'bg-white/90 text-stone-600 hover:text-rose-600 border border-stone-200'
          }`}
          aria-label={`Save ${product.name} to Wishlist`}
        >
          <Heart className={`w-4 h-4 ${inWishlist ? 'fill-rose-600' : ''}`} />
        </button>
      </div>

      {/* Product Image Container */}
      <div className="relative w-full h-52 bg-stone-50 overflow-hidden flex items-center justify-center p-3">
        <img
          src={imgSrc}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width="300"
          height="300"
          onError={() => setImgSrc('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80')}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick View Hover Overlay Button */}
        <button
          onClick={handleQuickView}
          aria-label={`Quick view ${product.name}`}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-stone-900/90 hover:bg-stone-900 text-white text-xs font-semibold px-4 py-2 rounded-xl backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 shadow-lg"
        >
          <Eye className="w-3.5 h-3.5 text-amber-400" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Brand */}
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800">
            {product.brand}
          </span>

          {/* Title */}
          <h3 className="text-xs font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-2 mt-0.5 leading-snug">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 text-amber-900 text-[11px] font-bold">
              <span>{product.rating}</span>
              <Star className="w-3 h-3 text-amber-500 fill-amber-500 ml-0.5" />
            </div>
            <span className="text-[11px] text-stone-500 font-medium">({product.reviews} reviews)</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-stone-100">
          {/* Pricing */}
          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold text-stone-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-xs text-stone-500 line-through font-medium">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-emerald-700">
                  {product.discount}% OFF
                </span>
              </>
            )}
          </div>

          {/* Delivery Badge */}
          <p className="text-[10px] text-stone-600 mt-1 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-700" />
            <span>{product.delivery}</span>
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to Shopping Cart`}
            className={`w-full mt-3 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs ${
              isAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
