import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Star, ShoppingBag, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const QuickViewModal: React.FC = () => {
  const navigate = useNavigate();
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useShop();
  
  if (!quickViewProduct) return null;

  const [selectedImg, setSelectedImg] = useState(quickViewProduct.images[0]);
  const inWishlist = isInWishlist(quickViewProduct.id);

  const handleClose = () => setQuickViewProduct(null);

  const handleAddToCart = () => {
    addToCart(quickViewProduct);
    handleClose();
  };

  const handleGoToDetails = () => {
    handleClose();
    navigate(`/product/${quickViewProduct.id}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 animate-fade-in relative p-6">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-stone-100 hover:bg-stone-200 text-stone-700 p-2 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Gallery Preview */}
          <div>
            <div className="w-full h-64 bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden flex items-center justify-center p-4 mb-3">
              <img
                src={selectedImg}
                alt={quickViewProduct.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnail selector */}
            {quickViewProduct.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className={`w-14 h-14 rounded-xl border p-1 bg-stone-50 transition-all ${
                      selectedImg === img ? 'border-amber-600 ring-2 ring-amber-500/20' : 'border-stone-200 opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
                {quickViewProduct.brand}
              </span>
              <h2 className="text-lg font-bold text-stone-900 font-serif-luxury mt-1 leading-snug">
                {quickViewProduct.name}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center bg-amber-100 text-amber-900 px-2 py-0.5 rounded text-xs font-bold">
                  <span>{quickViewProduct.rating}</span>
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 ml-1" />
                </div>
                <span className="text-xs text-stone-500">({quickViewProduct.reviews} verified reviews)</span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-extrabold text-stone-900">
                  ₹{quickViewProduct.price.toLocaleString('en-IN')}
                </span>
                {quickViewProduct.originalPrice > quickViewProduct.price && (
                  <>
                    <span className="text-sm text-stone-400 line-through">
                      ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-bold text-emerald-600">
                      ({quickViewProduct.discount}% OFF)
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-stone-600 mt-3 line-clamp-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Features list */}
              <div className="mt-3 space-y-1">
                {quickViewProduct.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-stone-200 mt-4 space-y-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow-md transition-all"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>

                <button
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className={`p-3 rounded-xl border transition-colors ${
                    inWishlist ? 'bg-rose-50 border-rose-300 text-rose-600' : 'border-stone-300 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-rose-600' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleGoToDetails}
                className="w-full text-center py-2 text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center justify-center gap-1"
              >
                <span>View Full Product Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
