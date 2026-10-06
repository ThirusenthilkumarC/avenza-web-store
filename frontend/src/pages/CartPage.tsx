import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Trash2, Plus, Minus, Heart, ShoppingBag, ShieldCheck, Tag, ArrowRight, ChevronRight } from 'lucide-react';
import { coupons } from '../data/coupons';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    toggleWishlist,
    isInWishlist,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    cartSubtotal,
    cartDiscount,
    couponDiscount,
    deliveryCharge,
    cartTotal
  } = useShop();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (!couponInput.trim()) return;

    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponInput('');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-4 border border-amber-200">
          <ShoppingBag className="w-10 h-10 text-amber-700" />
        </div>
        <h2 className="text-2xl font-bold font-serif-luxury text-stone-900">Your Shopping Cart is Empty</h2>
        <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
          Explore our handpicked luxury collection and add flagship items to your bag.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 mt-6 bg-stone-900 text-amber-400 font-bold px-7 py-3 rounded-xl text-xs hover:bg-amber-600 hover:text-stone-950 transition-all shadow-md"
        >
          <span>Start Shopping</span>
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
        <span className="font-semibold text-stone-900">Shopping Cart ({cart.length} items)</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 mb-6">
        Shopping Cart & Summary
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT CART ITEMS LIST */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs divide-y divide-stone-100">
            {cart.map(item => {
              const inWishlist = isInWishlist(item.product.id);
              return (
                <div key={item.product.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  {/* Image & Title */}
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-contain rounded-xl border border-stone-200 p-2 bg-stone-50 shrink-0 cursor-pointer"
                      onClick={() => navigate(`/product/${item.product.id}`)}
                    />

                    <div>
                      <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest">
                        {item.product.brand}
                      </span>
                      <h3
                        onClick={() => navigate(`/product/${item.product.id}`)}
                        className="text-xs font-bold text-stone-900 hover:text-amber-900 cursor-pointer line-clamp-2 leading-snug"
                      >
                        {item.product.name}
                      </h3>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-extrabold text-stone-900">
                          ₹{item.product.price.toLocaleString('en-IN')}
                        </span>
                        {item.product.originalPrice > item.product.price && (
                          <span className="text-xs text-stone-400 line-through">
                            ₹{item.product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-stone-200 text-stone-700 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold font-mono text-stone-900">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-stone-200 text-stone-700 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="text-sm font-extrabold text-stone-900 font-mono min-w-[70px] text-right">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>

                    {/* Wishlist & Delete */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toggleWishlist(item.product)}
                        className={`p-2 rounded-lg transition-colors ${
                          inWishlist ? 'text-rose-600 bg-rose-50' : 'text-stone-400 hover:text-stone-700 hover:bg-stone-100'
                        }`}
                        title="Save to Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${inWishlist ? 'fill-rose-600' : ''}`} />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Available Mock Coupons Banner */}
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs">
            <span className="font-bold text-amber-950 flex items-center gap-1.5 mb-2">
              <Tag className="w-4 h-4 text-amber-700" /> Available Promo Coupons (Click to copy code):
            </span>
            <div className="flex flex-wrap gap-2">
              {coupons.map(c => (
                <button
                  key={c.code}
                  onClick={() => {
                    setCouponInput(c.code);
                    applyCoupon(c.code);
                  }}
                  className="bg-white border border-amber-300 hover:border-amber-600 text-amber-900 font-mono font-bold px-3 py-1.5 rounded-lg transition-colors shadow-2xs text-[11px]"
                >
                  {c.code} ({c.discountPercent ? `${c.discountPercent}% OFF` : `₹${c.flatDiscount} OFF`})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-6">
          <h2 className="text-lg font-bold font-serif-luxury text-stone-900 pb-3 border-b border-stone-200">
            Order Total Summary
          </h2>

          {/* Coupon Form */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">Have a Promo Coupon?</label>
            {appliedCoupon ? (
              <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-900 font-medium">
                <div>
                  <span className="font-mono font-bold">{appliedCoupon.code}</span> Applied!
                </div>
                <button onClick={removeCoupon} className="text-emerald-700 hover:text-emerald-950 font-bold text-[11px]">
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                  placeholder="Enter Code (e.g. SAVE500)"
                  className="flex-1 p-2.5 text-xs border border-stone-300 rounded-xl outline-none font-mono focus:border-amber-600"
                />
                <button
                  type="submit"
                  className="bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold px-4 text-xs rounded-xl transition-colors"
                >
                  Apply
                </button>
              </form>
            )}
            {couponError && <p className="text-[11px] text-rose-600 mt-1 font-medium">{couponError}</p>}
          </div>

          {/* Breakdown */}
          <div className="space-y-2.5 text-xs text-stone-700 pt-3 border-t border-stone-200">
            <div className="flex justify-between">
              <span>Item Subtotal ({cart.length} items)</span>
              <span className="font-mono font-bold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
            </div>

            {cartDiscount > 0 && (
              <div className="flex justify-between text-emerald-700">
                <span>Product Discounts Savings</span>
                <span className="font-mono font-bold">-₹{cartDiscount.toLocaleString('en-IN')}</span>
              </div>
            )}

            {couponDiscount > 0 && (
              <div className="flex justify-between text-emerald-700 font-semibold">
                <span>Coupon Code Discount ({appliedCoupon?.code})</span>
                <span className="font-mono font-bold">-₹{couponDiscount.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Estimated Shipping & Delivery</span>
              <span className="font-mono font-bold">
                {deliveryCharge === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${deliveryCharge}`}
              </span>
            </div>

            <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline text-sm">
              <span className="font-extrabold text-stone-900">Total Payable Amount</span>
              <span className="text-2xl font-extrabold text-amber-800 font-mono">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Proceed to Checkout Button */}
          <button
            onClick={() => navigate('/checkout')}
            className="w-full bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition-all"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[10px] text-stone-400 text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            100% Encrypted & Safe Checkout Guarantee
          </p>
        </div>
      </div>
    </div>
  );
};
