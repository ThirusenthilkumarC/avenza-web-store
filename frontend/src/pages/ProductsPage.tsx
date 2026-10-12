import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams, useLocation, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { FilterSidebar } from '../components/FilterSidebar';
import type { FilterState } from '../components/FilterSidebar';
import { SortDropdown } from '../components/SortDropdown';
import { Grid, List, ChevronRight, SlidersHorizontal, Sparkles, ArrowDown } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getCanonicalCategoryName, matchesProductCategory } from '../utils/categoryMatcher';

export const ProductsPage: React.FC = () => {
  const { category: urlCategory } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const searchDeal = searchParams.get('deal') === 'true' || location.pathname.includes('deals') || location.pathname.includes('offers');
  const searchSort = searchParams.get('sort');
  const queryCategory = searchParams.get('category');

  const { products } = useShop();

  // Determine initial canonical category
  const initialRawCategory = urlCategory || queryCategory;
  const initialCategory = initialRawCategory
    ? getCanonicalCategoryName(initialRawCategory)
    : 'All';

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    minPrice: 0,
    maxPrice: 250000,
    selectedBrands: [],
    minRating: 0,
    minDiscount: searchDeal ? 20 : 0,
    inStockOnly: false
  });

  const [sortBy, setSortBy] = useState<string>(
    location.pathname.includes('best-sellers')
      ? 'rating'
      : location.pathname.includes('new-arrivals')
      ? 'newest'
      : searchSort || 'relevance'
  );

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedCount, setLoadedCount] = useState(12);
  const itemsPerPage = 12;

  // Re-sync filters and sort whenever the URL route, category param, or query params change
  useEffect(() => {
    const rawCat = urlCategory || searchParams.get('category');
    const canonicalCat = rawCat ? getCanonicalCategoryName(rawCat) : 'All';

    const isDealRoute = location.pathname.includes('deals') || location.pathname.includes('offers') || searchParams.get('deal') === 'true';
    const isBestSellerRoute = location.pathname.includes('best-sellers') || searchParams.get('sort') === 'rating';
    const isNewArrivalRoute = location.pathname.includes('new-arrivals') || searchParams.get('sort') === 'newest';

    setFilters(prev => ({
      ...prev,
      category: canonicalCat,
      minDiscount: isDealRoute ? 20 : 0
    }));

    if (isBestSellerRoute) {
      setSortBy('rating');
    } else if (isNewArrivalRoute) {
      setSortBy('newest');
    } else if (searchParams.get('sort')) {
      setSortBy(searchParams.get('sort')!);
    }

    setCurrentPage(1);
    setLoadedCount(itemsPerPage);
  }, [urlCategory, searchParams, location.pathname]);

  // Extract available brands for the active category
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    products.forEach(p => {
      if (filters.category === 'All' || matchesProductCategory(p, filters.category)) {
        if (p.brand) brandsSet.add(p.brand);
      }
    });
    return Array.from(brandsSet).sort();
  }, [products, filters.category]);

  // Filter & Sort products logic
  const filteredProducts = useMemo(() => {
    const list = products.filter(p => {
      // Category match using flexible canonical matching
      if (filters.category !== 'All' && !matchesProductCategory(p, filters.category)) {
        return false;
      }
      // Price range match
      if (p.price < filters.minPrice || p.price > filters.maxPrice) {
        return false;
      }
      // Brands match
      if (filters.selectedBrands.length > 0 && !filters.selectedBrands.includes(p.brand)) {
        return false;
      }
      // Rating match
      if (p.rating < filters.minRating) {
        return false;
      }
      // Discount match
      if (p.discount < filters.minDiscount) {
        return false;
      }
      // In stock match
      if (filters.inStockOnly && p.stock <= 0) {
        return false;
      }
      return true;
    });

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'discount') {
      list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    } else if (sortBy === 'newest') {
      list.sort((a, b) => b.id - a.id);
    }

    return list;
  }, [products, filters, sortBy]);

  // Reset page when filter criteria change
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
    setLoadedCount(itemsPerPage);
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    setCurrentPage(1);
    setLoadedCount(itemsPerPage);
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Progressive "Load More" view when user clicks Load More, otherwise paginated view
  const displayedProducts = loadedCount > itemsPerPage
    ? filteredProducts.slice(0, loadedCount)
    : paginatedProducts;

  const handleLoadMore = () => {
    setLoadedCount(prev => Math.min(prev + itemsPerPage, filteredProducts.length));
  };

  // Human-readable title
  const pageTitle = useMemo(() => {
    if (location.pathname.includes('deals') || location.pathname.includes('offers')) {
      return "Today's Exclusive Deals & Offers";
    }
    if (location.pathname.includes('best-sellers')) {
      return "AVENZA Best Sellers";
    }
    if (location.pathname.includes('new-arrivals')) {
      return "New Luxury Arrivals";
    }
    if (filters.category !== 'All') {
      return filters.category;
    }
    return "All Luxury Marketplace Products";
  }, [location.pathname, filters.category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 text-left">
      <SEO
        title={`${pageTitle} | AVENZA Luxury Marketplace`}
        description={`Explore certified authentic ${pageTitle.toLowerCase()} products with tamper-evident packaging, insured air courier, and authenticity guarantee on AVENZA.`}
      />

      {/* BREADCRUMBS */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-4 flex-wrap">
        <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <Link to="/products" className="hover:text-stone-900 transition-colors">Products</Link>
        {filters.category !== 'All' && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-semibold text-stone-900">{filters.category}</span>
          </>
        )}
      </div>

      {/* PAGE TITLE & ACTION BAR */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            {pageTitle}
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Showing <strong className="text-stone-900">{filteredProducts.length}</strong> premium handpicked items across certified artisans & brand outlets
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Filter Trigger */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors min-h-[44px]"
            aria-label="Open filter options"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>

          {/* Sort Dropdown */}
          <SortDropdown value={sortBy} onChange={handleSortChange} />

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center ${
                viewMode === 'grid' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-500 hover:text-stone-900'
              }`}
              aria-label="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center ${
                viewMode === 'list' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-500 hover:text-stone-900'
              }`}
              aria-label="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT SPLIT */}
      <div className="flex gap-6 items-start">
        {/* SIDEBAR FILTERS */}
        <FilterSidebar
          filters={filters}
          onChange={handleFilterChange}
          availableBrands={availableBrands}
          isMobileOpen={isMobileFilterOpen}
          onCloseMobile={() => setIsMobileFilterOpen(false)}
        />

        {/* PRODUCTS GRID / LIST */}
        <div className="flex-1 min-w-0">
          {filteredProducts.length > 0 ? (
            <>
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                    : 'space-y-4'
                }
              >
                {displayedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* PAGINATION AND LOAD MORE CONTROLS */}
              <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col items-center gap-4">
                {/* Load More Option */}
                {loadedCount < filteredProducts.length && (
                  <button
                    onClick={handleLoadMore}
                    className="flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-md min-h-[44px]"
                  >
                    <ArrowDown className="w-4 h-4" />
                    <span>Load More Products ({filteredProducts.length - loadedCount} remaining)</span>
                  </button>
                )}

                {/* Numbered Page Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        setCurrentPage(p => Math.max(1, p - 1));
                        window.scrollTo({ top: 120, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 disabled:opacity-40 hover:bg-stone-100 transition-colors min-h-[40px]"
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                      <button
                        key={num}
                        onClick={() => {
                          setCurrentPage(num);
                          window.scrollTo({ top: 120, behavior: 'smooth' });
                        }}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all min-h-[36px] ${
                          currentPage === num
                            ? 'bg-stone-900 text-amber-400 shadow-md'
                            : 'border border-stone-300 hover:bg-stone-100 text-stone-800'
                        }`}
                      >
                        {num}
                      </button>
                    ))}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => {
                        setCurrentPage(p => Math.min(totalPages, p + 1));
                        window.scrollTo({ top: 120, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 disabled:opacity-40 hover:bg-stone-100 transition-colors min-h-[40px]"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 shadow-2xs">
              <Sparkles className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-stone-900 font-serif-luxury">No Products Found</h3>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                No items match your active filter criteria. Try resetting price range or clearing brand selections.
              </p>
              <button
                onClick={() =>
                  handleFilterChange({
                    category: 'All',
                    minPrice: 0,
                    maxPrice: 250000,
                    selectedBrands: [],
                    minRating: 0,
                    minDiscount: 0,
                    inStockOnly: false
                  })
                }
                className="mt-4 bg-stone-900 text-amber-400 font-bold px-6 py-3 rounded-xl text-xs hover:bg-amber-600 hover:text-stone-950 transition-colors shadow-sm min-h-[44px]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
