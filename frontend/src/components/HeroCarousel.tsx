import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  bgGradient: string;
  featuredProductImage: string;
  featuredProductTitle: string;
  featuredProductPrice: string;
  featuredProductBadge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "AVENZA GRAND FESTIVAL",
    title: "Mega Shopping Festival",
    subtitle: "Discover premium electronics, fashion, lifestyle essentials and handcrafted treasures curated for modern India.",
    primaryCtaText: "Shop Grand Deals",
    primaryCtaLink: "/products?deal=true",
    secondaryCtaText: "Explore Curations",
    secondaryCtaLink: "/products",
    bgGradient: "from-stone-950 via-stone-900 to-amber-950/80",
    featuredProductImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    featuredProductTitle: "ChronoCraft Heritage Skeleton Automatic Watch",
    featuredProductPrice: "₹12,999",
    featuredProductBadge: "50% OFF TODAY"
  },
  {
    id: 2,
    badge: "IMMERSIVE SPATIAL AUDIO",
    title: "Next-Gen Tech & Audio",
    subtitle: "Upgrade your everyday experience with flagship active noise cancelling headphones, 4K curved displays and ultrabooks.",
    primaryCtaText: "Explore Electronics",
    primaryCtaLink: "/products/electronics",
    secondaryCtaText: "Explore Curations",
    secondaryCtaLink: "/products",
    bgGradient: "from-stone-950 via-slate-950 to-stone-900",
    featuredProductImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    featuredProductTitle: "TechNova Spatial Pro ANC Headphones",
    featuredProductPrice: "₹4,999",
    featuredProductBadge: "HOT TRENDING"
  },
  {
    id: 3,
    badge: "HAUTE FASHION & HERITAGE",
    title: "Royal Silk & Heritage Apparel",
    subtitle: "Handcrafted luxury and timeless Indian style—Kanjivaram silk sarees, raw silk bandhgalas and Italian leather accessories.",
    primaryCtaText: "Shop Haute Couture",
    primaryCtaLink: "/products/men-fashion",
    secondaryCtaText: "Explore Curations",
    secondaryCtaLink: "/products",
    bgGradient: "from-stone-950 via-amber-950/70 to-stone-900",
    featuredProductImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    featuredProductTitle: "Aurelia Royal Handcrafted Raw Silk Bandhgala",
    featuredProductPrice: "₹14,999",
    featuredProductBadge: "EXCLUSIVE EDITION"
  }
];

export const HeroCarousel: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentSlideIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden rounded-3xl border border-stone-800 shadow-2xl bg-stone-950 text-white my-4 transition-all"
    >
      {/* Background Gradient & Texture */}
      <div className={`absolute inset-0 bg-gradient-to-r ${activeSlide.bgGradient} transition-all duration-700 opacity-95`} />
      
      {/* Subtle Glow Spheres */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]">
        
        {/* LEFT PROMOTIONAL CONTENT */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 text-left">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs text-amber-400 font-bold tracking-widest uppercase w-fit shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {activeSlide.badge}
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-stone-50 leading-tight tracking-tight">
            {activeSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-300 text-xs sm:text-base leading-relaxed max-w-xl font-light">
            {activeSlide.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate(activeSlide.primaryCtaLink)}
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-stone-950 font-extrabold px-6 sm:px-7 py-3.5 rounded-xl shadow-lg shadow-amber-900/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm min-h-[44px]"
            >
              <span>{activeSlide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate(activeSlide.secondaryCtaLink)}
              className="bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 px-5 sm:px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 min-h-[44px]"
            >
              <span>{activeSlide.secondaryCtaText}</span>
            </button>
          </div>

          {/* Trust assurances */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-stone-400 border-t border-stone-800/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" /> 100% Genuine Guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" /> Fast Express Delivery
            </span>
          </div>
        </div>

        {/* RIGHT FEATURED PRODUCT PREVIEW CARD */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-sm bg-stone-900/90 border border-stone-700/80 rounded-2xl p-4 shadow-2xl backdrop-blur-md transition-transform duration-300">
            {/* Top Badge */}
            <div className="absolute top-6 left-6 z-20 bg-amber-500 text-stone-950 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
              {activeSlide.featuredProductBadge}
            </div>

            {/* Product Image */}
            <div className="overflow-hidden rounded-xl bg-stone-950 h-52 sm:h-56 w-full flex items-center justify-center relative">
              <img
                src={activeSlide.featuredProductImage}
                alt={activeSlide.featuredProductTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card Info */}
            <div className="pt-4 flex items-center justify-between text-left">
              <div className="pr-2">
                <p className="text-xs font-semibold text-stone-200 line-clamp-1">
                  {activeSlide.featuredProductTitle}
                </p>
                <p className="text-lg font-bold text-amber-400 mt-0.5 font-mono">
                  {activeSlide.featuredProductPrice}
                </p>
              </div>

              <button
                onClick={() => navigate(activeSlide.primaryCtaLink)}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 p-2.5 rounded-xl font-bold transition-colors shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="View product"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* CAROUSEL PREV/NEXT CONTROLS */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-stone-950/80 hover:bg-stone-900 text-stone-300 hover:text-white p-3 rounded-full border border-stone-700 shadow-lg backdrop-blur-xs transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-stone-950/80 hover:bg-stone-900 text-stone-300 hover:text-white p-3 rounded-full border border-stone-700 shadow-lg backdrop-blur-xs transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* CAROUSEL INDICATORS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlideIndex
                ? 'w-8 bg-amber-400'
                : 'w-2 bg-stone-700 hover:bg-stone-500'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
