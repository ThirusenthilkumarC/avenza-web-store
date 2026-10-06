export interface ProductReview {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface ProductQA {
  id: string;
  question: string;
  answer: string;
  askedBy: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  features: string[];
  specs: Record<string, string>;
  stock: number;
  badge?: 'Best Seller' | 'Deal of the Day' | 'Hot Trend' | 'Limited Stock' | 'Exclusive' | 'New Arrival';
  delivery: string;
  seller: string;
  customerReviews?: ProductReview[];
  questions?: ProductQA[];
  isDealOfDay?: boolean;
  dealEndsAt?: string; // ISO string
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  subtitle: string;
  count: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface DeliveryAddress {
  id: string;
  fullName: string;
  phone: string;
  pincode: string;
  street: string;
  city: string;
  state: string;
  landmark?: string;
  type: 'Home' | 'Work' | 'Other';
  isDefault: boolean;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  totalAmount: number;
  discountAmount: number;
  deliveryCharge: number;
  finalAmount: number;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  paymentMethod: string;
  paymentStatus: 'Paid' | 'Pending';
  deliveryAddress: DeliveryAddress;
  trackingNumber: string;
  estimatedDelivery: string;
  timeline: { title: string; date: string; completed: boolean }[];
}

export interface Coupon {
  code: string;
  discountPercent?: number;
  flatDiscount?: number;
  maxDiscount?: number;
  minOrderValue: number;
  description: string;
  expiresAt: string;
}
