import type { Product } from '../types';

/**
 * Normalizes category names and aliases across AVENZA.
 * Handles: 'men', 'women', 'fashion', 'electronics', 'beauty', 'accessories',
 * 'home-living', 'footwear', 'watches', etc.
 */
export function getCanonicalCategoryName(slugOrName: string): string {
  if (!slugOrName || slugOrName === 'All') return 'All';
  const clean = slugOrName.trim().toLowerCase().replace(/-/g, ' ');

  if (clean === 'men' || clean === 'mens' || clean === 'men fashion' || clean === "men's fashion" || clean === 'mens fashion') {
    return "Men's Fashion";
  }
  if (clean === 'women' || clean === 'womens' || clean === 'women fashion' || clean === "women's fashion" || clean === 'womens fashion') {
    return "Women's Fashion";
  }
  if (clean === 'fashion' || clean === 'apparel' || clean === 'clothing') {
    return 'Fashion';
  }
  if (clean === 'footwear' || clean === 'shoes') {
    return 'Footwear';
  }
  if (clean === 'electronics' || clean === 'tech' || clean === 'gadgets') {
    return 'Electronics';
  }
  if (clean === 'mobiles' || clean === 'mobile' || clean === 'smartphones' || clean === 'tablets' || clean === 'mobiles & tablets') {
    return 'Mobiles & Tablets';
  }
  if (clean === 'watches' || clean === 'watch' || clean === 'horology') {
    return 'Watches';
  }
  if (clean === 'beauty' || clean === 'beauty & care' || clean === 'beauty and care' || clean === 'beauty and personal care' || clean === 'skincare') {
    return 'Beauty & Care';
  }
  if (clean === 'bags' || clean === 'bags & luggage' || clean === 'bags and luggage' || clean === 'luggage') {
    return 'Bags & Luggage';
  }
  if (clean === 'accessories' || clean === 'accessories & lifestyle' || clean === 'bags and accessories') {
    return 'Accessories';
  }
  if (clean === 'home' || clean === 'home & living' || clean === 'home and living' || clean === 'home living' || clean === 'decor') {
    return 'Home & Living';
  }
  if (clean === 'kitchen' || clean === 'kitchen & dining' || clean === 'kitchen and dining' || clean === 'cookware') {
    return 'Kitchen & Dining';
  }
  if (clean === 'sports' || clean === 'sports & fitness' || clean === 'sports and fitness' || clean === 'fitness') {
    return 'Sports & Fitness';
  }
  if (clean === 'gourmet' || clean === 'gourmet food' || clean === 'food') {
    return 'Gourmet Food';
  }
  if (clean === 'books' || clean === 'art' || clean === 'books & art' || clean === 'books and art') {
    return 'Books & Art';
  }
  if (clean === 'automotive' || clean === 'car') {
    return 'Automotive';
  }
  if (clean === 'pet supplies' || clean === 'pets' || clean === 'pet') {
    return 'Pet Supplies';
  }
  if (clean === 'health' || clean === 'health & wellness' || clean === 'health and wellness') {
    return 'Health & Wellness';
  }
  if (clean === 'toys' || clean === 'toys & kids' || clean === 'toys and kids') {
    return 'Toys & Kids';
  }

  return slugOrName;
}

/**
 * Checks if a given product matches the selected category filter/slug.
 */
export function matchesProductCategory(product: Product, filterCategory: string): boolean {
  if (!filterCategory || filterCategory === 'All') return true;

  const target = getCanonicalCategoryName(filterCategory).toLowerCase();
  const prodCat = (product.category || '').toLowerCase();
  const prodSubcat = (product.subcategory || '').toLowerCase();

  // Men's Fashion
  if (target === "men's fashion") {
    return prodCat.includes('men') || (prodCat === 'fashion' && prodSubcat.includes('men'));
  }

  // Women's Fashion
  if (target === "women's fashion") {
    return prodCat.includes('women') || (prodCat === 'fashion' && prodSubcat.includes('women'));
  }

  // General Fashion (encompasses Men's, Women's, and Footwear)
  if (target === 'fashion') {
    return prodCat.includes('fashion') || prodCat === 'footwear';
  }

  // Footwear
  if (target === 'footwear') {
    return prodCat === 'footwear' || prodSubcat.includes('footwear') || prodSubcat.includes('shoe');
  }

  // Electronics (encompasses electronics & audio/video)
  if (target === 'electronics') {
    return prodCat === 'electronics' || prodCat === 'mobiles';
  }

  // Mobiles & Tablets
  if (target === 'mobiles & tablets' || target === 'mobiles') {
    return prodCat === 'mobiles' || prodSubcat.includes('smartphone') || prodSubcat.includes('tablet');
  }

  // Watches
  if (target === 'watches') {
    return prodCat === 'watches' || prodSubcat.includes('watch') || prodSubcat.includes('horology');
  }

  // Beauty & Care
  if (target === 'beauty & care' || target === 'beauty') {
    return prodCat === 'beauty' || prodCat.includes('health') || prodSubcat.includes('skincare') || prodSubcat.includes('fragrance');
  }

  // Bags & Luggage
  if (target === 'bags & luggage' || target === 'bags') {
    return prodCat === 'bags' || prodSubcat.includes('bag') || prodSubcat.includes('luggage');
  }

  // Accessories
  if (target === 'accessories') {
    return prodCat === 'accessories' || prodCat === 'bags' || prodSubcat.includes('wallet') || prodSubcat.includes('eyewear');
  }

  // Home & Living
  if (target === 'home & living' || target === 'home') {
    return prodCat === 'home' || prodCat === 'kitchen' || prodSubcat.includes('decor') || prodSubcat.includes('bedding') || prodSubcat.includes('furniture');
  }

  // Kitchen & Dining
  if (target === 'kitchen & dining' || target === 'kitchen') {
    return prodCat === 'kitchen' || prodSubcat.includes('cookware') || prodSubcat.includes('appliance');
  }

  // Sports & Fitness
  if (target === 'sports & fitness' || target === 'sports') {
    return prodCat === 'sports' || prodSubcat.includes('fitness') || prodSubcat.includes('gym');
  }

  // Gourmet Food
  if (target === 'gourmet food') {
    return prodCat.includes('gourmet') || prodSubcat.includes('pantry');
  }

  // Books & Art
  if (target === 'books & art') {
    return prodCat.includes('book') || prodCat.includes('art');
  }

  // Automotive
  if (target === 'automotive') {
    return prodCat === 'automotive';
  }

  // Pet Supplies
  if (target === 'pet supplies') {
    return prodCat.includes('pet');
  }

  // Health & Wellness
  if (target === 'health & wellness') {
    return prodCat.includes('health') || prodCat === 'beauty';
  }

  // Toys & Kids
  if (target === 'toys & kids') {
    return prodCat.includes('toy') || prodSubcat.includes('kid');
  }

  // Fallback direct match or substring
  return prodCat === target || prodCat.includes(target) || target.includes(prodCat);
}
