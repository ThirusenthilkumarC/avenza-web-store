import type { Product } from '../types';

/**
 * Normalizes category names and aliases across AVENZA.
 * Supports standard categories:
 * - Electronics
 * - Smartphones
 * - Laptops & Computers
 * - Fashion — Men
 * - Fashion — Women
 * - Shoes & Sneakers
 * - Watches
 * - Bags & Accessories
 * - Beauty & Personal Care
 * - Home & Living
 * - Kitchen Appliances
 * - Furniture
 * - Sports & Fitness
 * - Books & Stationery
 * - Gaming Accessories
 */
export function getCanonicalCategoryName(slugOrName: string): string {
  if (!slugOrName || slugOrName === 'All') return 'All';
  const clean = slugOrName.trim().toLowerCase().replace(/-/g, ' ').replace(/—/g, ' ').replace(/&/g, 'and');

  // Smartphones
  if (clean.includes('smartphone') || clean.includes('mobile') || clean.includes('phone') || clean.includes('tablet')) {
    return 'Smartphones';
  }

  // Laptops & Computers
  if (clean.includes('laptop') || clean.includes('computer') || clean.includes('pc') || clean.includes('desktop')) {
    return 'Laptops & Computers';
  }

  // Gaming Accessories
  if (clean.includes('gaming') || clean.includes('console')) {
    return 'Gaming Accessories';
  }

  // Men's Fashion
  if (clean.includes('men') && !clean.includes('women')) {
    return 'Fashion — Men';
  }

  // Women's Fashion
  if (clean.includes('women')) {
    return 'Fashion — Women';
  }

  // Shoes & Sneakers / Footwear
  if (clean.includes('shoe') || clean.includes('sneaker') || clean.includes('footwear') || clean.includes('boot')) {
    return 'Shoes & Sneakers';
  }

  // Watches
  if (clean.includes('watch') || clean.includes('horology') || clean.includes('timepiece')) {
    return 'Watches';
  }

  // Bags & Accessories
  if (clean.includes('bag') || clean.includes('luggage') || clean.includes('backpack') || clean.includes('accessory') || clean.includes('accessories')) {
    return 'Bags & Accessories';
  }

  // Beauty & Personal Care
  if (clean.includes('beauty') || clean.includes('skincare') || clean.includes('cosmetic') || clean.includes('personal care') || clean.includes('care')) {
    return 'Beauty & Personal Care';
  }

  // Kitchen Appliances
  if (clean.includes('kitchen') || clean.includes('cookware') || clean.includes('appliance')) {
    return 'Kitchen Appliances';
  }

  // Furniture
  if (clean.includes('furniture') || clean.includes('sofa') || clean.includes('chair') || clean.includes('desk')) {
    return 'Furniture';
  }

  // Home & Living
  if (clean.includes('home') || clean.includes('living') || clean.includes('decor') || clean.includes('bedding') || clean.includes('rug')) {
    return 'Home & Living';
  }

  // Sports & Fitness
  if (clean.includes('sport') || clean.includes('fitness') || clean.includes('gym') || clean.includes('workout')) {
    return 'Sports & Fitness';
  }

  // Books & Stationery
  if (clean.includes('book') || clean.includes('stationery') || clean.includes('art') || clean.includes('journal')) {
    return 'Books & Stationery';
  }

  // General Electronics
  if (clean.includes('electronic') || clean.includes('audio') || clean.includes('gadget') || clean.includes('headphone')) {
    return 'Electronics';
  }

  if (clean.includes('fashion') || clean.includes('apparel') || clean.includes('clothing')) {
    return 'Fashion — Men';
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
  const prodName = (product.name || '').toLowerCase();

  // Smartphones
  if (target === 'smartphones') {
    return (
      prodCat === 'smartphones' ||
      prodCat === 'mobiles' ||
      prodSubcat.includes('phone') ||
      prodSubcat.includes('smartphone') ||
      prodSubcat.includes('mobile') ||
      prodSubcat.includes('tablet')
    );
  }

  // Laptops & Computers
  if (target === 'laptops & computers') {
    return (
      prodCat === 'laptops & computers' ||
      prodCat === 'laptops' ||
      prodSubcat.includes('laptop') ||
      prodSubcat.includes('computer') ||
      prodSubcat.includes('ultrabook') ||
      prodSubcat.includes('desktop')
    );
  }

  // Gaming Accessories
  if (target === 'gaming accessories') {
    return (
      prodCat === 'gaming accessories' ||
      prodCat === 'gaming' ||
      prodSubcat.includes('gaming') ||
      prodSubcat.includes('controller') ||
      prodSubcat.includes('gamepad')
    );
  }

  // Fashion — Men
  if (target === 'fashion — men' || target === "men's fashion" || target === 'men fashion') {
    return (
      prodCat === 'fashion — men' ||
      prodCat === "men's fashion" ||
      (prodCat.includes('men') && !prodCat.includes('women')) ||
      (prodCat === 'fashion' && (prodSubcat.includes('men') || prodName.includes('men') || !prodSubcat.includes('women')))
    );
  }

  // Fashion — Women
  if (target === 'fashion — women' || target === "women's fashion" || target === 'women fashion') {
    return (
      prodCat === 'fashion — women' ||
      prodCat === "women's fashion" ||
      prodCat.includes('women') ||
      (prodCat === 'fashion' && (prodSubcat.includes('women') || prodName.includes('women') || prodSubcat.includes('saree') || prodSubcat.includes('lehenga')))
    );
  }

  // Shoes & Sneakers / Footwear
  if (target === 'shoes & sneakers' || target === 'footwear') {
    return (
      prodCat === 'shoes & sneakers' ||
      prodCat === 'footwear' ||
      prodSubcat.includes('shoe') ||
      prodSubcat.includes('sneaker') ||
      prodSubcat.includes('boot') ||
      prodSubcat.includes('oxford') ||
      prodSubcat.includes('mojari')
    );
  }

  // Watches
  if (target === 'watches') {
    return (
      prodCat === 'watches' ||
      prodSubcat.includes('watch') ||
      prodSubcat.includes('horology') ||
      prodSubcat.includes('timepiece')
    );
  }

  // Bags & Accessories
  if (target === 'bags & accessories' || target === 'bags' || target === 'accessories') {
    return (
      prodCat === 'bags & accessories' ||
      prodCat === 'bags' ||
      prodCat === 'accessories' ||
      prodSubcat.includes('bag') ||
      prodSubcat.includes('luggage') ||
      prodSubcat.includes('wallet') ||
      prodSubcat.includes('backpack') ||
      prodSubcat.includes('briefcase')
    );
  }

  // Beauty & Personal Care
  if (target === 'beauty & personal care' || target === 'beauty') {
    return (
      prodCat === 'beauty & personal care' ||
      prodCat === 'beauty' ||
      prodCat.includes('health') ||
      prodSubcat.includes('skincare') ||
      prodSubcat.includes('fragrance') ||
      prodSubcat.includes('perfume') ||
      prodSubcat.includes('serum') ||
      prodSubcat.includes('grooming')
    );
  }

  // Kitchen Appliances
  if (target === 'kitchen appliances' || target === 'kitchen') {
    return (
      prodCat === 'kitchen appliances' ||
      prodCat === 'kitchen' ||
      prodSubcat.includes('kitchen') ||
      prodSubcat.includes('appliance') ||
      prodSubcat.includes('espresso') ||
      prodSubcat.includes('blender') ||
      prodSubcat.includes('cookware')
    );
  }

  // Furniture
  if (target === 'furniture') {
    return (
      prodCat === 'furniture' ||
      prodSubcat.includes('furniture') ||
      prodSubcat.includes('sofa') ||
      prodSubcat.includes('chair') ||
      prodSubcat.includes('desk') ||
      prodSubcat.includes('table')
    );
  }

  // Home & Living
  if (target === 'home & living' || target === 'home') {
    return (
      prodCat === 'home & living' ||
      prodCat === 'home' ||
      prodCat === 'furniture' ||
      prodSubcat.includes('home') ||
      prodSubcat.includes('bedding') ||
      prodSubcat.includes('carpet') ||
      prodSubcat.includes('rug') ||
      prodSubcat.includes('decor') ||
      prodSubcat.includes('living')
    );
  }

  // Sports & Fitness
  if (target === 'sports & fitness' || target === 'sports') {
    return (
      prodCat === 'sports & fitness' ||
      prodCat === 'sports' ||
      prodSubcat.includes('sport') ||
      prodSubcat.includes('fitness') ||
      prodSubcat.includes('gym') ||
      prodSubcat.includes('workout') ||
      prodSubcat.includes('cycle')
    );
  }

  // Books & Stationery
  if (target === 'books & stationery' || target === 'books & art') {
    return (
      prodCat === 'books & stationery' ||
      prodCat === 'books & art' ||
      prodSubcat.includes('book') ||
      prodSubcat.includes('stationery') ||
      prodSubcat.includes('pen') ||
      prodSubcat.includes('journal')
    );
  }

  // General Electronics
  if (target === 'electronics') {
    return (
      prodCat === 'electronics' ||
      prodCat === 'audio' ||
      prodSubcat.includes('audio') ||
      prodSubcat.includes('speaker') ||
      prodSubcat.includes('headphone') ||
      prodSubcat.includes('camera')
    );
  }

  // Fallback direct match or substring
  return prodCat === target || prodCat.includes(target) || target.includes(prodCat);
}
