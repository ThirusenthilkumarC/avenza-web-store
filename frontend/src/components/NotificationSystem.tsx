import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import {
  X,
  Sparkles,
  ShoppingBag,
  Heart,
  Truck,
  Gift,
  Zap,
  Tag,
  Flame,
  Clock,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import type { NotificationType } from '../types';

const typeIconMap: Record<NotificationType, React.FC<{ className?: string }>> = {
  flash_sale: Sparkles,
  cart_reminder: ShoppingBag,
  wishlist_price_drop: Heart,
  order_status: Truck,
  welcome_offer: Gift,
  low_stock: Zap,
  discount_unlocked: Tag,
  trending_product: Flame,
  festival_offer: Sparkles,
  delivery_update: PackageCheck
};

export const NotificationSystem: React.FC = () => {
  const navigate = useNavigate();
  const { activeNotification, dismissNotification } = useShop();

  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);
  const [countdownSeconds, setCountdownSeconds] = useState(activeNotification?.expirySeconds || 5058);

  // Swipe gesture state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Countdown timer for Flash Sale
  useEffect(() => {
    if (!activeNotification?.expirySeconds) return;
    setCountdownSeconds(activeNotification.expirySeconds);
    const interval = setInterval(() => {
      setCountdownSeconds(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [activeNotification]);

  // Auto-dismiss progress bar timer
  useEffect(() => {
    if (!activeNotification || isPaused) return;
    const duration = activeNotification.durationMs || 6000;
    const stepMs = 50;
    const stepPercent = (stepMs / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev <= stepPercent) {
          dismissNotification();
          return 0;
        }
        return prev - stepPercent;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [activeNotification, isPaused]);

  // Reset progress when new notification arrives
  useEffect(() => {
    if (activeNotification) {
      setProgress(100);
    }
  }, [activeNotification]);

  // Keyboard Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeNotification) {
        dismissNotification();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeNotification]);

  if (!activeNotification) return null;

  const IconComponent = typeIconMap[activeNotification.type] || Sparkles;

  // Format countdown seconds into 01h 24m 18s
  const formatCountdown = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
  };

  const handleCtaClick = () => {
    if (activeNotification.ctaLink) {
      navigate(activeNotification.ctaLink);
    }
    dismissNotification();
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      dismissNotification();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-50 max-w-sm w-[calc(100%-1.5rem)] sm:w-96 bg-stone-950 text-white rounded-2xl border border-amber-500/40 shadow-2xl overflow-hidden animate-fade-in transition-all duration-300 backdrop-blur-md"
    >
      {/* Auto-Dismiss Progress Bar */}
      <div className="w-full bg-stone-800 h-1 overflow-hidden">
        <div
          className="bg-gradient-to-r from-amber-500 to-amber-300 h-full transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-4 sm:p-5 relative text-left space-y-3">
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 bg-stone-900 border border-amber-500/30 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] text-amber-400 font-bold uppercase tracking-wider">
            <IconComponent className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{activeNotification.badge}</span>
          </div>

          <button
            onClick={dismissNotification}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-900 transition-colors shrink-0 min-w-[32px] min-h-[32px] flex items-center justify-center"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Title & Description with optional Featured Thumbnail */}
        <div className="flex items-start gap-3">
          {activeNotification.featuredImage && (
            <img
              src={activeNotification.featuredImage}
              alt={activeNotification.title}
              className="w-14 h-14 rounded-xl object-contain bg-stone-900 border border-stone-800 p-1 shrink-0"
            />
          )}

          <div className="space-y-1 flex-1">
            <h4 className="text-xs sm:text-sm font-bold text-stone-100 leading-snug line-clamp-2">
              {activeNotification.title}
            </h4>
            <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed font-light line-clamp-2">
              {activeNotification.description}
            </p>
          </div>
        </div>

        {/* Flash Sale Live Timer (if flash_sale) */}
        {activeNotification.type === 'flash_sale' && (
          <div className="bg-amber-950/60 border border-amber-500/30 p-2 rounded-xl flex items-center justify-between text-xs text-amber-300 font-mono">
            <span className="flex items-center gap-1 text-[11px] text-amber-400 font-sans font-bold">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Offer Ends In:
            </span>
            <span className="font-bold text-amber-400 tracking-wider">
              {formatCountdown(countdownSeconds)}
            </span>
          </div>
        )}

        {/* CTA Button */}
        {activeNotification.ctaText && (
          <div className="pt-1">
            <button
              onClick={handleCtaClick}
              className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-stone-950 font-extrabold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all transform active:scale-98 shadow-md min-h-[40px]"
            >
              <span>{activeNotification.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
