import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, ArrowRight } from 'lucide-react';

interface BrandItem {
  name: string;
  category: string;
  origin: string;
  tagline: string;
}

const featuredBrandsList: BrandItem[] = [
  { name: 'Rolex', category: 'Haute Horlogerie', origin: 'Geneva, Switzerland', tagline: 'A Crown for Every Achievement' },
  { name: 'Apple', category: 'Flagship Tech', origin: 'Cupertino, USA', tagline: 'Pro Performance & Innovation' },
  { name: 'Hermès', category: 'Leather Goods & Silk', origin: 'Paris, France', tagline: 'Artisanal Mastery Since 1837' },
  { name: 'Bang & Olufsen', category: 'Acoustic Engineering', origin: 'Struer, Denmark', tagline: 'Magical Sound & Pure Form' },
  { name: 'Louis Vuitton', category: 'Heritage Luxury', origin: 'Paris, France', tagline: 'The Art of Timeless Travel' },
  { name: 'Sony', category: 'Audio & Visual', origin: 'Tokyo, Japan', tagline: 'Master-Class Spatial Experience' },
  { name: 'Patek Philippe', category: 'Swiss Watchmaking', origin: 'Geneva, Switzerland', tagline: 'Begin Your Own Tradition' },
  { name: 'Leica', category: 'Precision Optics', origin: 'Wetzlar, Germany', tagline: 'The Essence of Photography' },
  { name: 'Dyson', category: 'Intelligent Care', origin: 'Malmesbury, UK', tagline: 'Engineered for Performance' },
  { name: 'Tom Ford', category: 'Signature Couture', origin: 'New York, USA', tagline: 'Glamour & Modern Elegance' },
  { name: 'Chanel', category: 'Haute Parfumerie', origin: 'Paris, France', tagline: 'Uncompromising Sophistication' },
  { name: 'Eames', category: 'Iconic Living', origin: 'Michigan, USA', tagline: 'Architectural Modern Design' }
];

export const FeaturedBrands: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectBrand = (brandName: string) => {
    navigate(`/products?brand=${encodeURIComponent(brandName)}`);
  };

  return (
    <section className="my-14 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-800 uppercase mb-1">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            HERITAGE & ICONIC HOUSES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Featured Partner Brands
          </h2>
          <p className="text-xs text-stone-500 mt-1 max-w-xl">
            Explore verified brand ateliers and official manufacturer boutiques partnering with AVENZA across India.
          </p>
        </div>

        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 hover:underline shrink-0 self-start sm:self-auto min-h-[44px]"
        >
          <span>Browse All Brands</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid: 2 cols mobile, 3 cols tablet, 4/6 cols desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {featuredBrandsList.map((brand) => (
          <div
            key={brand.name}
            onClick={() => handleSelectBrand(brand.name)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSelectBrand(brand.name);
            }}
            className="group bg-white rounded-2xl p-4 border border-stone-200/90 shadow-2xs hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 min-h-[130px]"
          >
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 inline-block mb-2">
                {brand.category}
              </span>
              <h3 className="text-base font-bold text-stone-900 font-serif-luxury group-hover:text-amber-800 transition-colors">
                {brand.name}
              </h3>
              <p className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">
                {brand.tagline}
              </p>
            </div>

            <div className="pt-2 mt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400 group-hover:text-amber-700 font-medium">
              <span>{brand.origin}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
