import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  isLight?: boolean;
  showTagline?: boolean;
}

/**
 * OFFICIAL AVENZA BRAND LOGO COMPONENT
 * Displays the official uploaded logo icon alongside bold "AVENZA" typography.
 * 
 * Desktop: [LOGO ICON] AVENZA (Luxury Marketplace)
 * Mobile:  [LOGO ICON] AVENZA
 */
export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false, showTagline = true }) => {
  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-2.5 shrink-0 group transition-opacity duration-200 hover:opacity-95 ${className}`}
      aria-label="AVENZA Luxury Marketplace"
    >
      {/* Official Logo Icon Image */}
      <div className="p-0.5 rounded-xl bg-[#FAF8F5] shrink-0">
        <img
          src="/avenza-logo.jpg"
          alt="AVENZA Logo Icon"
          className="h-9 sm:h-11 w-auto object-contain rounded-lg"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-none">
        <span className={`font-serif-luxury text-xl sm:text-2xl font-black tracking-tight ${
          isLight ? 'text-white' : 'text-stone-950'
        }`}>
          AVENZA
        </span>
        {showTagline && (
          <span className={`text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-0.5 ${
            isLight ? 'text-amber-400' : 'text-amber-800'
          }`}>
            LUXURY MARKETPLACE
          </span>
        )}
      </div>
    </Link>
  );
};
