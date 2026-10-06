import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem, WishlistItem, Order, Coupon, DeliveryAddress } from '../types';
import { products as initialProducts } from '../data/products';
import { coupons } from '../data/coupons';

interface ToastState {
  id: number;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: WishlistItem[];
  recentlyViewed: Product[];
  orders: Order[];
  quickViewProduct: Product | null;
  searchQuery: string;
  deliveryLocation: { pincode: string; city: string };
  appliedCoupon: Coupon | null;
  toasts: ToastState[];
  
  // Actions
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
  moveToCartFromWishlist: (product: Product) => void;
  
  addRecentlyViewed: (product: Product) => void;
  setQuickViewProduct: (product: Product | null) => void;
  setSearchQuery: (query: string) => void;
  setDeliveryLocation: (location: { pincode: string; city: string }) => void;
  
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  
  placeOrder: (
    deliveryAddress: DeliveryAddress,
    paymentMethod: string
  ) => Order;
  
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: number) => void;
  
  // Computed values
  cartSubtotal: number;
  cartDiscount: number;
  couponDiscount: number;
  deliveryCharge: number;
  cartTotal: number;
  cartCount: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productsList] = useState<Product[]>(initialProducts);
  
  // LocalStorage state initialization
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('luxury_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    const saved = localStorage.getItem('luxury_wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('luxury_recently_viewed');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('luxury_orders');
    if (saved) return JSON.parse(saved);
    
    // Default mock initial order for realism
    return [
      {
        id: 'ORD-89421',
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        items: [
          { product: initialProducts[0], quantity: 1, price: initialProducts[0].price }
        ],
        totalAmount: initialProducts[0].originalPrice,
        discountAmount: initialProducts[0].originalPrice - initialProducts[0].price,
        deliveryCharge: 0,
        finalAmount: initialProducts[0].price,
        status: 'Out for Delivery',
        paymentMethod: 'UPI (Google Pay)',
        paymentStatus: 'Paid',
        deliveryAddress: {
          id: 'addr-1',
          fullName: 'Vikramaditya Roy',
          phone: '+91 98765 43210',
          pincode: '400001',
          street: 'Apartment 4B, Marine Drive Towers',
          city: 'Mumbai',
          state: 'Maharashtra',
          type: 'Home',
          isDefault: true
        },
        trackingNumber: 'TRK-IN987412356',
        estimatedDelivery: 'Tomorrow by 6:00 PM',
        timeline: [
          { title: 'Order Placed', date: '3 days ago', completed: true },
          { title: 'Packed & Dispatched', date: '2 days ago', completed: true },
          { title: 'Out for Delivery', date: 'Today', completed: true },
          { title: 'Delivered', date: 'Pending', completed: false }
        ]
      }
    ];
  });
  
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [deliveryLocation, setDeliveryLocationState] = useState<{ pincode: string; city: string }>(() => {
    const saved = localStorage.getItem('luxury_location');
    return saved ? JSON.parse(saved) : { pincode: '400001', city: 'Mumbai' };
  });
  
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('luxury_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('luxury_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('luxury_recently_viewed', JSON.stringify(recentlyViewedIds));
  }, [recentlyViewedIds]);

  useEffect(() => {
    localStorage.setItem('luxury_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('luxury_location', JSON.stringify(deliveryLocation));
  }, [deliveryLocation]);

  // Toast Handler
  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Cart Functions
  const addToCart = (product: Product, quantity = 1, selectedSize?: string, selectedColor?: string) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, selectedSize, selectedColor }];
    });
    showToast(`Added "${product.name.slice(0, 25)}..." to Shopping Cart`, 'success');
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Wishlist Functions
  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.product.id === product.id);
      if (exists) {
        showToast(`Removed from Wishlist`, 'info');
        return prev.filter(item => item.product.id !== product.id);
      } else {
        showToast(`Added to Wishlist`, 'success');
        return [...prev, { product, addedAt: new Date().toISOString() }];
      }
    });
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some(item => item.product.id === productId);
  };

  const moveToCartFromWishlist = (product: Product) => {
    addToCart(product);
    setWishlist(prev => prev.filter(item => item.product.id !== product.id));
  };

  // Recently Viewed Handler
  const addRecentlyViewed = (product: Product) => {
    setRecentlyViewedIds(prev => {
      const filtered = prev.filter(id => id !== product.id);
      return [product.id, ...filtered].slice(0, 12);
    });
  };

  const recentlyViewed = recentlyViewedIds
    .map(id => productsList.find(p => p.id === id))
    .filter((p): p is Product => p !== undefined);

  // Delivery Location Handler
  const setDeliveryLocation = (loc: { pincode: string; city: string }) => {
    setDeliveryLocationState(loc);
    showToast(`Delivery location updated to ${loc.city} (${loc.pincode})`, 'info');
  };

  // Coupon Handler
  const applyCoupon = (code: string) => {
    const found = coupons.find(c => c.code.toUpperCase() === code.trim().toUpperCase());
    if (!found) {
      return { success: false, message: 'Invalid coupon code. Try WELCOME10, SAVE500, or MEGA20.' };
    }
    
    if (cartSubtotal < found.minOrderValue) {
      return {
        success: false,
        message: `Coupon "${found.code}" requires a minimum order value of ₹${found.minOrderValue.toLocaleString('en-IN')}`
      };
    }

    setAppliedCoupon(found);
    showToast(`Coupon "${found.code}" applied successfully!`, 'success');
    return { success: true, message: `Coupon ${found.code} applied!` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon code removed', 'info');
  };

  // Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const cartOriginalTotal = cart.reduce((acc, item) => acc + item.product.originalPrice * item.quantity, 0);
  const cartDiscount = cartOriginalTotal - cartSubtotal;

  let couponDiscount = 0;
  if (appliedCoupon && cartSubtotal >= appliedCoupon.minOrderValue) {
    if (appliedCoupon.flatDiscount) {
      couponDiscount = appliedCoupon.flatDiscount;
    } else if (appliedCoupon.discountPercent) {
      const calc = (cartSubtotal * appliedCoupon.discountPercent) / 100;
      couponDiscount = appliedCoupon.maxDiscount ? Math.min(calc, appliedCoupon.maxDiscount) : calc;
    }
  }

  const deliveryCharge = cartSubtotal > 499 || cart.length === 0 ? 0 : 99;
  const cartTotal = Math.max(0, cartSubtotal - couponDiscount + deliveryCharge);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Order Placement
  const placeOrder = (deliveryAddress: DeliveryAddress, paymentMethod: string): Order => {
    const newOrder: Order = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString(),
      items: cart.map(item => ({
        product: item.product,
        quantity: item.quantity,
        price: item.product.price
      })),
      totalAmount: cartOriginalTotal,
      discountAmount: cartDiscount,
      deliveryCharge,
      finalAmount: cartTotal,
      status: 'Processing',
      paymentMethod,
      paymentStatus: 'Paid',
      deliveryAddress,
      trackingNumber: `TRK-IN${Math.floor(100000000 + Math.random() * 900000000)}`,
      estimatedDelivery: 'Delivery in 2-3 Business Days',
      timeline: [
        { title: 'Order Placed', date: 'Just now', completed: true },
        { title: 'Packed & Dispatched', date: 'Expected Tomorrow', completed: false },
        { title: 'Out for Delivery', date: 'Pending', completed: false },
        { title: 'Delivered', date: 'Pending', completed: false }
      ]
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    showToast(`Order #${newOrder.id} placed successfully!`, 'success');
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        products: productsList,
        cart,
        wishlist,
        recentlyViewed,
        orders,
        quickViewProduct,
        searchQuery,
        deliveryLocation,
        appliedCoupon,
        toasts,
        
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        
        toggleWishlist,
        isInWishlist,
        moveToCartFromWishlist,
        
        addRecentlyViewed,
        setQuickViewProduct,
        setSearchQuery,
        setDeliveryLocation,
        
        applyCoupon,
        removeCoupon,
        placeOrder,
        
        showToast,
        removeToast,
        
        cartSubtotal,
        cartDiscount,
        couponDiscount,
        deliveryCharge,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
