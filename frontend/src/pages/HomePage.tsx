import React from 'react';
import { SEO } from '../components/SEO';
import { HeroCarousel } from '../components/HeroCarousel';
import { PromoCards } from '../components/PromoCards';
import { CategoryGrid } from '../components/CategoryGrid';
import { DealOfDay } from '../components/DealOfDay';
import { TrendingProducts } from '../components/TrendingProducts';
import { BestSellersSection } from '../components/BestSellersSection';
import { NewArrivalsSection } from '../components/NewArrivalsSection';
import { ElectronicsSection } from '../components/ElectronicsSection';
import { FashionSection } from '../components/FashionSection';
import { FeaturedBrands } from '../components/FeaturedBrands';
import { RecommendedProducts } from '../components/RecommendedProducts';
import { RecentlyViewedSection } from '../components/RecentlyViewedSection';
import { SellerCTA } from '../components/SellerCTA';
import { CustomerReviewsSection } from '../components/CustomerReviewsSection';
import { NewsletterSection } from '../components/NewsletterSection';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SEO
        title="AVENZA | A New Avenue for You — Luxury Online Shopping Marketplace"
        description="Discover authentic flagship electronics, haute fashion, Swiss timepieces, fine leathercraft, and master artisan creations on AVENZA. Insured air express delivery across India."
      />

      {/* 1. LARGE PROMOTIONAL HERO CAROUSEL */}
      <HeroCarousel />

      {/* 2. PROMOTIONAL ASSURANCE & BENEFITS CARDS */}
      <PromoCards />

      {/* 3. EXPLORE BY 15 CURATED LUXURY CATEGORIES */}
      <CategoryGrid />

      {/* 4. EXCLUSIVE DEALS & OFFER OF THE DAY WITH LIVE COUNTDOWN */}
      <DealOfDay />

      {/* 5. TRENDING PRODUCTS ACROSS INDIA */}
      <TrendingProducts />

      {/* 6. BEST SELLERS CURATION */}
      <BestSellersSection />

      {/* 7. NEW ARRIVALS COLLECTION */}
      <NewArrivalsSection />

      {/* 8. BEST OF FLAGSHIP ELECTRONICS & AUDIO */}
      <ElectronicsSection />

      {/* 9. HAUTE FASHION & HERITAGE APPAREL */}
      <FashionSection />

      {/* 10. FEATURED LUXURY PARTNER BRANDS */}
      <FeaturedBrands />

      {/* 11. PERSONALIZED LUXURY RECOMMENDATIONS */}
      <RecommendedProducts />

      {/* 12. RECENTLY VIEWED BROWSING HISTORY */}
      <RecentlyViewedSection />

      {/* 13. SELLER HUB & CONCIERGE CTA */}
      <SellerCTA />

      {/* 14. VERIFIED PATRON TESTIMONIALS */}
      <CustomerReviewsSection />

      {/* 15. PRIVATE CIRCLE NEWSLETTER SUBSCRIPTION */}
      <NewsletterSection />
    </div>
  );
};
