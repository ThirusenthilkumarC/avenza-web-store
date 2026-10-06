import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShoppingBag,
  Heart,
  Share2,
  ShieldCheck,
  Truck,
  Check,
  Plus,
  Minus,
  ChevronRight,
  MapPin,
  CreditCard,
  Building2,
  MessageSquare
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { products, addToCart, toggleWishlist, isInWishlist, addRecentlyViewed, deliveryLocation, showToast } = useShop();

  const product = products.find(p => p.id === Number(id));

  const [selectedImg, setSelectedImg] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews' | 'qa'>('desc');
  const [checkPincode, setCheckPincode] = useState<string>(deliveryLocation.pincode);
  const [deliveryResult, setDeliveryResult] = useState<string>('Free Express Delivery by Tomorrow, 6 PM');
  const [newQuestion, setNewQuestion] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImg(product.images[0]);
      addRecentlyViewed(product);
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold font-serif-luxury text-stone-900">Product Not Found</h2>
        <p className="text-xs text-stone-500 mt-2">The requested product ID does not exist in our catalog.</p>
        <Link to="/products" className="inline-block mt-4 bg-stone-900 text-amber-400 px-6 py-2.5 rounded-xl font-bold text-xs">
          Browse Products Catalog
        </Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    showToast('Product link copied to clipboard!', 'info');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCheckDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkPincode.length === 6) {
      setDeliveryResult(`Guaranteed Express Delivery to Pincode ${checkPincode} by Tomorrow`);
      showToast(`Checked delivery for pincode ${checkPincode}`, 'info');
    }
  };

  // Related products in same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 text-left">
      {/* BREADCRUMBS */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-6 flex-wrap">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/products" className="hover:text-stone-900">Products</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/products/${product.category.toLowerCase()}`} className="hover:text-stone-900">{product.category}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900 truncate max-w-xs">{product.name}</span>
      </div>

      {/* TOP SECTION: GALLERY + DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs">
        
        {/* LEFT GALLERY */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="w-full h-80 sm:h-96 bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden flex items-center justify-center p-4 relative group">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-stone-900 text-amber-400 font-extrabold text-xs uppercase px-3 py-1 rounded-lg shadow-sm border border-stone-800 tracking-wider z-10">
                {product.badge}
              </span>
            )}
            <img
              src={selectedImg || product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 cursor-zoom-in"
            />
          </div>

          {/* Thumbnail list */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`w-16 h-16 rounded-xl border p-1 bg-stone-50 transition-all shrink-0 ${
                    selectedImg === img ? 'border-amber-600 ring-2 ring-amber-500/20 scale-105' : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT INFORMATION */}
        <div className="lg:col-span-6 flex flex-col justify-between text-left">
          <div>
            {/* Brand */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100/70 px-2.5 py-1 rounded-md border border-amber-200">
                {product.brand}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 p-1 rounded-lg"
              >
                <Share2 className="w-4 h-4" />
                <span>{isCopied ? 'Copied!' : 'Share'}</span>
              </button>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 mt-2 leading-snug">
              {product.name}
            </h1>

            {/* Rating Breakdown */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg text-xs font-bold border border-amber-200">
                <span>{product.rating}</span>
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 ml-1" />
              </div>
              <span className="text-xs text-stone-500">
                {product.reviews.toLocaleString()} Verified Customer Ratings & Reviews
              </span>
            </div>

            {/* Pricing Card */}
            <div className="mt-5 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-stone-900 font-mono">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-stone-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                      SAVE {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>

              <p className="text-[11px] text-stone-500 mt-1">Inclusive of all taxes & free shipping across India</p>

              {/* Offers tags */}
              <div className="mt-3 pt-3 border-t border-amber-200/60 space-y-1.5 text-xs text-stone-800">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-amber-700 shrink-0" />
                  <span><strong>Bank Offer:</strong> Extra 10% instant discount up to ₹1,500 with Coupon <code className="text-amber-900 font-bold bg-amber-200/80 px-1 rounded">WELCOME10</code></span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span><strong>No Cost EMI:</strong> Options starting from ₹{Math.round(product.price / 12)}/month</span>
                </div>
              </div>
            </div>

            {/* Pincode Delivery Checker */}
            <div className="mt-5 text-xs">
              <span className="font-bold text-stone-800 flex items-center gap-1.5 mb-1.5">
                <MapPin className="w-4 h-4 text-amber-700" /> Delivery & Stock Checker
              </span>
              <form onSubmit={handleCheckDelivery} className="flex gap-2 max-w-sm">
                <input
                  type="text"
                  value={checkPincode}
                  onChange={(e) => setCheckPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter 6-digit Pincode"
                  className="flex-1 p-2.5 border border-stone-300 rounded-xl outline-none font-mono focus:border-amber-600"
                />
                <button
                  type="submit"
                  className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0"
                >
                  Check Pincode
                </button>
              </form>
              <p className="text-[11px] text-emerald-700 font-medium mt-1.5 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> {deliveryResult}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mt-5 flex items-center gap-4">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">Quantity:</span>
              <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-2 hover:bg-stone-200 text-stone-700 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-xs font-bold font-mono text-stone-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  className="p-2 hover:bg-stone-200 text-stone-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <span className="text-xs text-stone-500 font-medium">
                ({product.stock} items left in stock)
              </span>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-8 pt-6 border-t border-stone-200 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm transition-all"
              >
                <ShoppingBag className="w-5 h-5" /> Add to Shopping Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-extrabold py-3.5 rounded-xl shadow-lg text-sm transition-all"
              >
                Buy Now (Instant Checkout)
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 rounded-xl border transition-all ${
                  inWishlist ? 'bg-rose-50 border-rose-300 text-rose-600' : 'border-stone-300 text-stone-700 hover:bg-stone-100'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-rose-600' : ''}`} />
              </button>
            </div>

            {/* Seller info */}
            <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-100">
              <span>Sold by: <strong>{product.seller}</strong></span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4" /> Verified Marketplace Merchant
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* LOWER TABBED SECTIONS (Description, Specs, Reviews, Q&A) */}
      <div className="mt-10 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs">
        <div className="flex items-center gap-4 border-b border-stone-200 overflow-x-auto pb-1 mb-6">
          {[
            { id: 'desc', label: 'Product Overview' },
            { id: 'specs', label: 'Technical Specifications' },
            { id: 'reviews', label: `Customer Reviews (${product.customerReviews?.length || 0})` },
            { id: 'qa', label: 'Questions & Answers' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 text-sm font-bold whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-amber-600 text-amber-900 font-serif-luxury text-base'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT: Overview */}
        {activeTab === 'desc' && (
          <div className="space-y-6 text-stone-800 leading-relaxed text-sm max-w-4xl">
            <div>
              <h3 className="text-lg font-bold font-serif-luxury text-stone-900 mb-2">Description</h3>
              <p>{product.description}</p>
            </div>

            <div>
              <h3 className="text-base font-bold font-serif-luxury text-stone-900 mb-2">Key Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB CONTENT: Specs */}
        {activeTab === 'specs' && (
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold font-serif-luxury text-stone-900 mb-4">Specifications Table</h3>
            <div className="border border-stone-200 rounded-2xl overflow-hidden divide-y divide-stone-200 text-xs">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex p-3.5 bg-white odd:bg-stone-50/50">
                  <span className="w-1/3 font-bold text-stone-600">{key}</span>
                  <span className="w-2/3 text-stone-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB CONTENT: Customer Reviews */}
        {activeTab === 'reviews' && (
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-stone-50 rounded-2xl border border-stone-200">
              <div className="text-center sm:text-left">
                <span className="text-4xl font-extrabold text-stone-900 font-mono">{product.rating}</span>
                <span className="text-sm text-stone-500"> / 5.0</span>
                <div className="flex items-center justify-center sm:justify-start gap-1 my-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-stone-300'}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-stone-500">{product.reviews} verified buyer ratings</p>
              </div>

              <div className="flex-1 w-full space-y-1.5 text-xs">
                {[5, 4, 3, 2, 1].map(stars => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="w-6 text-stone-600 font-bold">{stars}★</span>
                    <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${stars === 5 ? 78 : stars === 4 ? 18 : 4}%` }}
                      />
                    </div>
                    <span className="w-8 text-stone-400 font-mono text-[10px]">{stars === 5 ? '78%' : stars === 4 ? '18%' : '4%'}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-4 pt-4">
              {product.customerReviews && product.customerReviews.length > 0 ? (
                product.customerReviews.map(rev => (
                  <div key={rev.id} className="p-4 border border-stone-200 rounded-2xl bg-white space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-xs">
                          {rev.userName[0]}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-900">{rev.userName}</p>
                          <span className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Verified Purchase
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] text-stone-400">{rev.date}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < Math.floor(rev.rating) ? 'fill-amber-500 text-amber-500' : 'text-stone-300'}`}
                        />
                      ))}
                    </div>

                    <p className="text-xs text-stone-700 leading-relaxed">{rev.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-stone-500 italic">No detailed written reviews yet. Be the first to leave feedback!</p>
              )}
            </div>
          </div>
        )}

        {/* TAB CONTENT: Q&A */}
        {activeTab === 'qa' && (
          <div className="space-y-6 max-w-4xl">
            <div className="space-y-4">
              <div className="p-4 border border-stone-200 rounded-2xl bg-stone-50">
                <p className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-amber-700" /> Q: Is this covered under brand warranty?
                </p>
                <p className="text-xs text-stone-600 mt-1 pl-5">
                  A: Yes! All products come with a 1-year official brand replacement warranty card included in the box.
                </p>
              </div>

              <div className="p-4 border border-stone-200 rounded-2xl bg-stone-50">
                <p className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-amber-700" /> Q: How long does express shipping take?
                </p>
                <p className="text-xs text-stone-600 mt-1 pl-5">
                  A: Deliveries to tier-1 metro cities arrive within 24-48 hours. Regional locations take 2-3 business days.
                </p>
              </div>
            </div>

            {/* Ask Question Form */}
            <div className="pt-4 border-t border-stone-200">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">Ask a Question</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Have a question about this item? Ask our seller..."
                  className="flex-1 p-3 text-xs border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                />
                <button
                  onClick={() => {
                    if (newQuestion.trim()) {
                      showToast('Question submitted to seller!', 'success');
                      setNewQuestion('');
                    }
                  }}
                  className="bg-stone-900 text-amber-400 font-bold px-4 py-3 rounded-xl text-xs hover:bg-stone-800"
                >
                  Submit Question
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RELATED PRODUCTS GRID */}
      {relatedProducts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold font-serif-luxury text-stone-900 mb-6">
            Related Products in {product.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
