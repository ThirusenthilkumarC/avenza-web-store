import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Heart,
  ShoppingBag,
  User,
  Package,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Flame,
  Globe,
  Award,
  Smartphone,
  Laptop,
  Shirt,
  Home,
  Dumbbell
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { categories } from '../data/categories';

export const Header: React.FC = () => {
  const { cartCount, cartSubtotal, wishlist, deliveryLocation, setDeliveryLocation } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [pincodeInput, setPincodeInput] = useState(deliveryLocation.pincode);
  const [cityInput, setCityInput] = useState(deliveryLocation.city);

  const handleSaveLocation = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincodeInput.length >= 5) {
      setDeliveryLocation({ pincode: pincodeInput, city: cityInput || 'Selected Pincode' });
      setIsLocationModalOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200/80 shadow-xs">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 flex items-center justify-between border-b border-stone-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/30 uppercase tracking-widest">
              FESTIVE SPECIAL
            </span>
            <span className="text-stone-300 hidden sm:inline">
              Get Up To <strong className="text-amber-400 font-semibold">70% OFF</strong> on Luxury Brands + Extra 10% with Coupon <code className="text-amber-300 font-mono">WELCOME10</code>
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-medium text-stone-400">
            <span className="hidden md:flex items-center gap-1.5 text-stone-300">
              <Globe className="w-3.5 h-3.5 text-amber-400" /> EN / ₹ INR
            </span>
            <Link to="/account" className="hover:text-amber-400 transition-colors hidden sm:inline">
              Seller Hub
            </Link>
            <Link to="/orders" className="hover:text-amber-400 transition-colors">
              Help & Support
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN TOP HEADER */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* WEBSITE LOGO PLACEHOLDER */}
        <Logo />

        {/* LOCATION SELECTOR */}
        <button
          onClick={() => setIsLocationModalOpen(true)}
          className="hidden xl:flex items-center gap-2 p-2 rounded-xl hover:bg-stone-100 transition-colors text-left text-xs border border-transparent hover:border-stone-200"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-500 uppercase font-bold tracking-wider">Deliver to</span>
            <span className="font-semibold text-stone-900 truncate max-w-[110px]">
              {deliveryLocation.city} {deliveryLocation.pincode}
            </span>
          </div>
        </button>

        {/* LARGE SEARCH BAR */}
        <div className="hidden lg:block flex-1 max-w-xl mx-2">
          <SearchBar />
        </div>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Account */}
          <Link
            to="/account"
            className="hidden sm:flex items-center gap-2 p-2 rounded-xl hover:bg-stone-100 text-stone-800 transition-colors text-xs font-semibold"
          >
            <User className="w-5 h-5 text-stone-700" />
            <div className="hidden xl:flex flex-col text-left leading-tight">
              <span className="text-[10px] text-stone-500 font-normal">Welcome</span>
              <span>Account & Orders</span>
            </div>
          </Link>

          {/* Orders */}
          <Link
            to="/orders"
            className="hidden md:flex items-center gap-2 p-2 rounded-xl hover:bg-stone-100 text-stone-800 transition-colors text-xs font-semibold"
          >
            <Package className="w-5 h-5 text-stone-700" />
            <span className="hidden xl:inline">My Orders</span>
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative p-2 rounded-xl hover:bg-stone-100 text-stone-800 transition-colors flex items-center justify-center"
            title="Wishlist"
          >
            <Heart className="w-5 h-5 text-stone-800" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white px-3.5 py-2 rounded-xl transition-all shadow-sm group"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-amber-400 group-hover:text-stone-950 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-stone-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-stone-900">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="hidden sm:flex flex-col text-left leading-none">
              <span className="text-[9px] text-stone-400 uppercase tracking-widest font-semibold group-hover:text-stone-900">
                Cart Total
              </span>
              <span className="text-xs font-bold text-amber-300 group-hover:text-stone-950 transition-colors">
                ₹{cartSubtotal.toLocaleString('en-IN')}
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* MOBILE SEARCH BAR */}
      <div className="lg:hidden px-4 pb-3">
        <SearchBar isMobile />
      </div>

      {/* SECOND NAVIGATION BAR (DESKTOP) */}
      <div className="hidden lg:block bg-stone-100 border-t border-stone-200 text-xs text-stone-800 font-semibold">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-none py-2">
          {/* All Categories Dropdown Button */}
          <div className="relative group">
            <button className="flex items-center gap-2 bg-stone-900 text-white px-3.5 py-1.5 rounded-lg hover:bg-amber-600 transition-colors text-xs font-bold">
              <Menu className="w-4 h-4 text-amber-400" />
              <span>All Categories</span>
              <ChevronDown className="w-3.5 h-3.5 ml-1 text-amber-400" />
            </button>

            {/* Hover mega menu */}
            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-stone-200 p-2 hidden group-hover:block z-50 divide-y divide-stone-100">
              {categories.slice(0, 10).map((cat) => (
                <Link
                  key={cat.id}
                  to={`/products/${cat.slug}`}
                  className="flex items-center justify-between p-2.5 hover:bg-amber-50 rounded-lg text-stone-800 hover:text-amber-900 font-medium transition-colors"
                >
                  <span className="text-xs">{cat.name}</span>
                  <span className="text-[10px] text-stone-400 font-normal">{cat.count} items</span>
                </Link>
              ))}
              <Link
                to="/products"
                className="block text-center p-2.5 text-xs text-amber-700 font-bold hover:underline"
              >
                View All Departments →
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6 text-stone-700">
            <Link
              to="/products?deal=true"
              className="flex items-center gap-1.5 text-amber-800 font-bold hover:text-amber-950 transition-colors bg-amber-200/60 px-2.5 py-1 rounded-md border border-amber-300/50"
            >
              <Flame className="w-3.5 h-3.5 text-amber-700 fill-amber-500" />
              Today's Deals
            </Link>

            <Link to="/products?sort=rating" className="hover:text-amber-700 transition-colors flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-stone-500" /> Best Sellers
            </Link>

            <Link to="/products?sort=newest" className="hover:text-amber-700 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> New Arrivals
            </Link>

            <Link to="/products/mobiles" className="hover:text-amber-700 transition-colors flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5 text-stone-500" /> Mobiles & Tablets
            </Link>

            <Link to="/products/electronics" className="hover:text-amber-700 transition-colors flex items-center gap-1">
              <Laptop className="w-3.5 h-3.5 text-stone-500" /> Electronics & Gadgets
            </Link>

            <Link to="/products/men-fashion" className="hover:text-amber-700 transition-colors flex items-center gap-1">
              <Shirt className="w-3.5 h-3.5 text-stone-500" /> Fashion & Apparel
            </Link>

            <Link to="/products/home-living" className="hover:text-amber-700 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-stone-500" /> Home & Kitchen
            </Link>

            <Link to="/products/sports" className="hover:text-amber-700 transition-colors flex items-center gap-1">
              <Dumbbell className="w-3.5 h-3.5 text-stone-500" /> Sports & Fitness
            </Link>

            <Link to="/products" className="text-amber-800 font-bold hover:underline">
              More...
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE NAV MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex lg:hidden">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-fade-in">
            <div>
              {/* Mobile Drawer Header */}
              <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-900 text-white">
                <Logo isLight />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-stone-400 hover:text-white rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Location display in mobile drawer */}
              <div
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLocationModalOpen(true);
                }}
                className="p-3 bg-amber-50 border-b border-amber-200/60 flex items-center justify-between text-xs cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>Deliver to <strong>{deliveryLocation.city} ({deliveryLocation.pincode})</strong></span>
                </div>
                <span className="text-[10px] font-bold text-amber-800 uppercase">Change</span>
              </div>

              {/* Navigation Links */}
              <div className="p-4 space-y-1">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-3 mb-2">
                  Shop Departments
                </p>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products/${cat.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-stone-100 text-stone-800 font-medium text-sm transition-colors"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-stone-400 font-normal">({cat.count})</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Account Links */}
            <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-2">
              <Link
                to="/account"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-2.5 rounded-xl font-semibold text-sm shadow-sm"
              >
                <User className="w-4 h-4" /> Account & Profile
              </Link>
              <Link
                to="/orders"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-white text-stone-800 border border-stone-300 py-2.5 rounded-xl font-semibold text-sm"
              >
                <Package className="w-4 h-4" /> Track My Orders
              </Link>
            </div>
          </div>

          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

      {/* LOCATION SELECTOR MODAL */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 animate-fade-in relative">
            <button
              onClick={() => setIsLocationModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-serif-luxury">Choose your location</h3>
                <p className="text-xs text-stone-500">Select delivery pincode to check product availability & offers</p>
              </div>
            </div>

            <form onSubmit={handleSaveLocation} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">City Name</label>
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  placeholder="e.g. Mumbai, Bengaluru, Delhi"
                  className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Pincode</label>
                <input
                  type="text"
                  value={pincodeInput}
                  onChange={(e) => setPincodeInput(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="e.g. 400001"
                  className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 font-mono"
                  required
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsLocationModalOpen(false)}
                  className="flex-1 py-2.5 border border-stone-300 rounded-xl text-stone-700 font-semibold text-xs hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-stone-900 text-amber-400 hover:bg-amber-600 hover:text-stone-950 font-bold text-xs rounded-xl shadow-md transition-colors"
                >
                  Apply Location
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
