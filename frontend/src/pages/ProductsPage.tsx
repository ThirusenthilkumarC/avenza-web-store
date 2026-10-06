import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { FilterSidebar } from '../components/FilterSidebar';
import type { FilterState } from '../components/FilterSidebar';
import { SortDropdown } from '../components/SortDropdown';
import { categories } from '../data/categories';
import { Grid, List, ChevronRight, SlidersHorizontal, Sparkles } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { category: urlCategory } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const searchDeal = searchParams.get('deal');
  const searchSort = searchParams.get('sort');

  const { products } = useShop();

  // Find active category label from slug
  const matchedCategory = categories.find(c => c.slug === urlCategory)?.name || 'All';

  const [filters, setFilters] = useState<FilterState>({
    category: matchedCategory,
    minPrice: 0,
    maxPrice: 100000,
    selectedBrands: [],
    minRating: 0,
    minDiscount: searchDeal ? 30 : 0,
    inStockOnly: false
  });

  const [sortBy, setSortBy] = useState<string>(searchSort || 'relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Extract available brands for filter
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    products.forEach(p => {
      if (filters.category === 'All' || p.category.toLowerCase() === filters.category.toLowerCase()) {
        brandsSet.add(p.brand);
      }
    });
    return Array.from(brandsSet);
  }, [products, filters.category]);

  // Filter & Sort products logic
  const filteredProducts = useMemo(() => {
    let list = products.filter(p => {
      // Category match
      if (filters.category !== 'All' && p.category.toLowerCase() !== filters.category.toLowerCase()) {
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
      // In stock
      if (filters.inStockOnly && p.stock <= 0) {
        return false;
      }
      return true;
    });

    // Sort
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'discount') {
      list.sort((a, b) => b.discount - a.discount);
    } else if (sortBy === 'newest') {
      list.sort((a, b) => b.id - a.id);
    }

    return list;
  }, [products, filters, sortBy]);

  // Pagination slice
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 text-left">
      {/* BREADCRUMBS */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/products" className="hover:text-stone-900">Products</Link>
        {filters.category !== 'All' && (
          <>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-stone-900">{filters.category}</span>
          </>
        )}
      </div>

      {/* PAGE TITLE & ACTION BAR */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            {filters.category === 'All' ? 'All Luxury Marketplace Products' : filters.category}
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Showing <strong>{filteredProducts.length}</strong> premium handpicked items
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Filter Trigger */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden bg-stone-900 text-amber-400 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>

          {/* Sort Dropdown */}
          <SortDropdown value={sortBy} onChange={setSortBy} />

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-500 hover:text-stone-900'
              }`}
              aria-label="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-colors ${
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
      <div className="flex gap-6">
        {/* SIDEBAR FILTERS */}
        <FilterSidebar
          filters={filters}
          onChange={setFilters}
          availableBrands={availableBrands}
          isMobileOpen={isMobileFilterOpen}
          onCloseMobile={() => setIsMobileFilterOpen(false)}
        />

        {/* PRODUCTS GRID / LIST */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <>
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                    : 'space-y-4'
                }
              >
                {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                    className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 disabled:opacity-40 hover:bg-stone-100 transition-colors"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                    <button
                      key={num}
                      onClick={() => setCurrentPage(num)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
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
                    onClick={() => setCurrentPage(p => p + 1)}
                    className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 disabled:opacity-40 hover:bg-stone-100 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
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
                  setFilters({
                    category: 'All',
                    minPrice: 0,
                    maxPrice: 100000,
                    selectedBrands: [],
                    minRating: 0,
                    minDiscount: 0,
                    inStockOnly: false
                  })
                }
                className="mt-4 bg-stone-900 text-amber-400 font-bold px-5 py-2.5 rounded-xl text-xs hover:bg-amber-600 hover:text-stone-950 transition-colors"
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
