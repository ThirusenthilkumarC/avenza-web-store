import React from 'react';
import { SEO } from '../components/SEO';
import { HeroCarousel } from '../components/HeroCarousel';
import { PromoCards } from '../components/PromoCards';
import { CategoryGrid } from '../components/CategoryGrid';
import { DealOfDay } from '../components/DealOfDay';
import { TrendingProducts } from '../components/TrendingProducts';
import { ElectronicsSection } from '../components/ElectronicsSection';
import { FashionSection } from '../components/FashionSection';
import { SellerCTA } from '../components/SellerCTA';
import { RecommendedProducts } from '../components/RecommendedProducts';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SEO
        title="AVENZA | Luxury Marketplace - Premium E-Commerce"
        description="Discover authentic flagship electronics, haute fashion, fine watches and master artisan creations on AVENZA."
      />
      {/* 1. HERO CAROUSEL */}
      <HeroCarousel />

      {/* 2. PROMOTIONAL BENEFITS CARDS */}
      <PromoCards />

      {/* 3. SHOP BY CURATED CATEGORIES */}
      <CategoryGrid />

      {/* 4. DEAL OF THE DAY WITH LIVE COUNTDOWN */}
      <DealOfDay />

      {/* 5. TRENDING PRODUCTS ACROSS INDIA */}
      <TrendingProducts />

      {/* 6. BEST OF ELECTRONICS & GADGETS */}
      <ElectronicsSection />

      {/* 7. HAUTE FASHION & HERITAGE APPAREL */}
      <FashionSection />

      {/* 8. SELLER CTA SECTION */}
      <SellerCTA />

      {/* 9. RECOMMENDED PRODUCTS BASED ON BROWSING */}
      <RecommendedProducts />
    </div>
  );
};
