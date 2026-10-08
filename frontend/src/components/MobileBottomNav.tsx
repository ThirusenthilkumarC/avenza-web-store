import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, Search, Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const MobileBottomNav: React.FC = () => {
  const { cartCount, wishlist } = useShop();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 flex items-center justify-around text-[10px] font-semibold text-stone-600 shadow-2xl">
      <NavLink
        to="/"
        aria-label="Avenza Homepage"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition-colors ${
            isActive ? 'text-amber-700 font-bold' : 'hover:text-stone-900'
          }`
        }
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/products"
        aria-label="Browse Product Categories"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition-colors ${
            isActive ? 'text-amber-700 font-bold' : 'hover:text-stone-900'
          }`
        }
      >
        <Grid className="w-5 h-5" />
        <span>Categories</span>
      </NavLink>

      <NavLink
        to="/search"
        aria-label="Search Products"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition-colors ${
            isActive ? 'text-amber-700 font-bold' : 'hover:text-stone-900'
          }`
        }
      >
        <Search className="w-5 h-5" />
        <span>Search</span>
      </NavLink>

      <NavLink
        to="/wishlist"
        aria-label={`View Wishlist, ${wishlist.length} items`}
        className={({ isActive }) =>
          `relative flex flex-col items-center gap-1 transition-colors ${
            isActive ? 'text-amber-700 font-bold' : 'hover:text-stone-900'
          }`
        }
      >
        <div className="relative">
          <Heart className="w-5 h-5" />
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-amber-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              {wishlist.length}
            </span>
          )}
        </div>
        <span>Wishlist</span>
      </NavLink>

      <NavLink
        to="/cart"
        aria-label={`View Cart, ${cartCount} items`}
        className={({ isActive }) =>
          `relative flex flex-col items-center gap-1 transition-colors ${
            isActive ? 'text-amber-700 font-bold' : 'hover:text-stone-900'
          }`
        }
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-stone-900 text-amber-400 text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </div>
        <span>Cart</span>
      </NavLink>
    </div>
  );
};
