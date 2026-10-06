import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

/**
 * BRAND LOGO PLACEHOLDER COMPONENT
 * 
 * Replace this section or logo SVG with your official brand logo image/icon.
 * Example:
 * <img src="/logo.png" alt="Your Website Name" className="h-10" />
 */
export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false }) => {
  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-2.5 group transition-all ${className}`}
      aria-label="Home Page"
    >
      {/* PLACEHOLDER ICON - Replace with your logo SVG/PNG */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-sm transition-transform duration-300 group-hover:scale-105 ${
        isLight 
          ? 'bg-amber-500 text-stone-950' 
          : 'bg-stone-900 text-amber-400 border border-amber-500/30'
      }`}>
        <ShoppingBag className="w-5 h-5 text-amber-400 group-hover:rotate-6 transition-transform" />
      </div>

      {/* PLACEHOLDER TEXT BRAND - Replace text or remove when adding image logo */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif-luxury text-xl font-bold tracking-tight ${
            isLight ? 'text-white' : 'text-stone-900'
          }`}>
            LUXE<span className="text-amber-600 font-light italic">MARKET</span>
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-semibold border border-amber-300/60 uppercase tracking-widest hidden sm:inline-block">
            DEMO
          </span>
        </div>
        <span className={`text-[10px] tracking-wider uppercase font-medium -mt-1 ${
          isLight ? 'text-stone-400' : 'text-stone-500'
        }`}>
          [YOUR BRAND LOGO PLACEHOLDER]
        </span>
      </div>
    </Link>
  );
};
