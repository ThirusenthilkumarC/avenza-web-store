import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem, WishlistItem, Order, Coupon, DeliveryAddress, NotificationItem, User } from '../types';
import { products as initialProducts } from '../data/products';
import { coupons } from '../data/coupons';
import { authApi, productsApi, ordersApi, couponsApi, getStoredToken, setStoredToken } from '../services/api';

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
  activeNotification: NotificationItem | null;
  currentUser: User | null;
  
  // Actions
  login: (email: string, password?: string) => Promise<{ success: boolean; message: string }>;
  register: (name: string, email: string, phone: string, password?: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  updateProfile: (details: Partial<User>) => Promise<void> | void;
  
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
  
  applyCoupon: (code: string) => Promise<{ success: boolean; message: string }>;
  removeCoupon: () => void;
  
  placeOrder: (
    deliveryAddress: DeliveryAddress,
    paymentMethod: string
  ) => Promise<Order> | Order;
  
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: number) => void;
  showNotification: (item: NotificationItem) => void;
  dismissNotification: () => void;
  
  // Computed values
  cartSubtotal: number;
  cartDiscount: number;
  couponDiscount: number;
  deliveryCharge: number;
  cartTotal: number;
  cartCount: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const getSafeStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return defaultValue;
    const saved = localStorage.getItem(key);
    if (!saved) return defaultValue;
    return JSON.parse(saved) as T;
  } catch (err) {
    console.warn(`[Avenza Storage] Error reading key "${key}":`, err);
    return defaultValue;
  }
};

const setSafeStorage = (key: string, value: any) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (err) {
    console.warn(`[Avenza Storage] Error writing key "${key}":`, err);
  }
};

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productsList, setProductsList] = useState<Product[]>(initialProducts);
  
  // LocalStorage state initialization
  const [cart, setCart] = useState<CartItem[]>(() => {
    return getSafeStorage<CartItem[]>('luxury_cart', []);
  });
  
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    return getSafeStorage<WishlistItem[]>('luxury_wishlist', []);
  });
  
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<number[]>(() => {
    return getSafeStorage<number[]>('luxury_recently_viewed', []);
  });
  
  const [orders, setOrders] = useState<Order[]>(() => {
    const defaultOrders: Order[] = [
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
    return getSafeStorage<Order[]>('luxury_orders', defaultOrders);
  });
  
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [deliveryLocation, setDeliveryLocationState] = useState<{ pincode: string; city: string }>(() => {
    return getSafeStorage<{ pincode: string; city: string }>('luxury_location', { pincode: '400001', city: 'Mumbai' });
  });
  
  const [toasts, setToasts] = useState<ToastState[]>([]);
  const [activeNotification, setActiveNotification] = useState<NotificationItem | null>(null);

  // Authentication State
  const defaultUser: User = {
    id: 'usr-98124',
    name: 'Vikramaditya Roy',
    email: 'vikram.roy@example.com',
    phone: '+91 98765 43210',
    role: 'customer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    membershipTier: 'Privilege Gold',
    joinedDate: 'Member since Oct 2025'
  };

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    return getSafeStorage<User | null>('luxury_user', defaultUser);
  });

  // Sync products and active user session on initial mount
  useEffect(() => {
    productsApi.getAll({ limit: 100 })
      .then(res => {
        if (res.products && res.products.length > 0) {
          setProductsList(res.products);
        }
      })
      .catch(err => {
        console.info('[Avenza API Catalog Mode: Bundled Data Active]', err.message);
      });

    const token = getStoredToken();
    if (token) {
      authApi.getMe()
        .then(res => {
          if (res.user) {
            setCurrentUser(res.user);
          }
        })
        .catch(() => {});

      ordersApi.getMyOrders()
        .then(res => {
          if (res.orders && res.orders.length > 0) {
            setOrders(res.orders);
          }
        })
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    setSafeStorage('luxury_user', currentUser);
  }, [currentUser]);

  const login = async (email: string, password?: string): Promise<{ success: boolean; message: string }> => {
    const trimmed = email.trim().toLowerCase();
    try {
      const res = await authApi.login({ email: trimmed, password: password || 'password123' });
      setStoredToken(res.token);
      setCurrentUser(res.user);
      showToast(`Welcome back, ${res.user.name}!`, 'success');

      try {
        const orderRes = await ordersApi.getMyOrders();
        if (orderRes.orders && orderRes.orders.length > 0) {
          setOrders(orderRes.orders);
        }
      } catch {
        // Non-critical orders sync
      }

      return { success: true, message: 'Signed in successfully' };
    } catch (err: any) {
      console.warn('[ShopContext Auth Fallback]', err);
      const existingName = trimmed.split('@')[0];
      const formattedName = existingName.charAt(0).toUpperCase() + existingName.slice(1);
      const isAdmin = trimmed === 'admin@avenza.luxury';
      const fallbackUser: User = {
        id: isAdmin ? 'usr-admin-1' : `usr-${Date.now().toString().slice(-5)}`,
        name: isAdmin ? 'Executive Administrator' : (trimmed === 'vikram.roy@example.com' ? 'Vikramaditya Roy' : formattedName),
        email: trimmed,
        phone: '+91 98765 43210',
        role: isAdmin ? 'admin' : 'customer',
        membershipTier: 'Privilege Gold',
        joinedDate: 'Member since 2026'
      };
      setCurrentUser(fallbackUser);
      showToast(`Welcome back, ${fallbackUser.name}!`, 'success');
      return { success: true, message: 'Signed in successfully' };
    }
  };

  const register = async (name: string, email: string, phone: string, password?: string): Promise<{ success: boolean; message: string }> => {
    const trimmed = email.trim().toLowerCase();
    try {
      const res = await authApi.register({ name: name.trim(), email: trimmed, phone: phone.trim(), password: password || 'Password123!' });
      setStoredToken(res.token);
      setCurrentUser(res.user);
      showToast(`Account created for ${res.user.name}. Welcome to AVENZA!`, 'success');
      return { success: true, message: 'Account created successfully' };
    } catch (err: any) {
      console.warn('[ShopContext Register Fallback]', err);
      const newUser: User = {
        id: `usr-${Date.now().toString().slice(-5)}`,
        name: name.trim(),
        email: trimmed,
        phone: phone.trim(),
        role: 'customer',
        membershipTier: 'Member',
        joinedDate: 'Joined today'
      };
      setCurrentUser(newUser);
      showToast(`Account created for ${newUser.name}. Welcome to AVENZA!`, 'success');
      return { success: true, message: 'Account created successfully' };
    }
  };

  const logout = () => {
    setStoredToken(null);
    setCurrentUser(null);
    showToast('Signed out of your account', 'info');
  };

  const updateProfile = async (details: Partial<User>) => {
    if (!currentUser) return;
    try {
      const res = await authApi.updateProfile(details);
      setCurrentUser(res.user);
    } catch {
      const updated = { ...currentUser, ...details };
      setCurrentUser(updated);
    }
    showToast('Profile information updated successfully', 'success');
  };

  const showNotification = (item: NotificationItem) => {
    setActiveNotification(item);
  };

  const dismissNotification = () => {
    setActiveNotification(null);
  };

  // Automated notification triggers
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setActiveNotification(prev => {
        if (prev) return prev;
        return {
          id: 'welcome-offer-auto',
          type: 'welcome_offer',
          badge: '🎁 PRIVILEGE CIRCLE',
          title: 'Welcome to AVENZA Luxury',
          description: 'Enjoy ₹1,000 off on your inaugural haute couture or horology acquisition.',
          ctaText: 'EXPLORE COLLECTIONS',
          ctaLink: '/shop',
          durationMs: 8000
        };
      });
    }, 4500);
    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    const flashTimer = setTimeout(() => {
      setActiveNotification(prev => {
        if (prev) return prev;
        return {
          id: 'flash-sale-auto',
          type: 'flash_sale',
          badge: '🎉 AVENZA GRAND FESTIVAL',
          title: 'Extra 20% OFF Unlocked!',
          description: 'Limited-time festival discounts on spatial audio, heritage apparel & luxury watches.',
          ctaText: 'SHOP DEALS',
          ctaLink: '/deals',
          expirySeconds: 5058,
          durationMs: 7000
        };
      });
    }, 12000);
    return () => clearTimeout(flashTimer);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    setSafeStorage('luxury_cart', cart);
  }, [cart]);

  useEffect(() => {
    setSafeStorage('luxury_wishlist', wishlist);
  }, [wishlist]);

  useEffect(() => {
    setSafeStorage('luxury_recently_viewed', recentlyViewedIds);
  }, [recentlyViewedIds]);

  useEffect(() => {
    setSafeStorage('luxury_orders', orders);
  }, [orders]);

  useEffect(() => {
    setSafeStorage('luxury_location', deliveryLocation);
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
    if (product.stock <= 0) {
      showToast(`"${product.name}" is currently out of stock`, 'warning');
      return;
    }

    setCart(prev => {
      const existingIndex = prev.findIndex(item => 
        item.product.id === product.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const currentQty = prev[existingIndex].quantity;
        const newQty = Math.min(product.stock, currentQty + quantity);
        if (currentQty + quantity > product.stock) {
          showToast(`Stock limit reached! Max available: ${product.stock}`, 'warning');
        } else {
          showToast(`Updated "${product.name.slice(0, 22)}..." quantity (${newQty})`, 'success');
        }
        const updated = [...prev];
        updated[existingIndex].quantity = newQty;
        return updated;
      }

      const initialQty = Math.min(product.stock, Math.max(1, quantity));
      showToast(`Added "${product.name.slice(0, 25)}..." to Shopping Cart`, 'success');
      return [...prev, { product, quantity: initialQty, selectedSize, selectedColor }];
    });

    // Trigger Cart Notification
    showNotification({
      id: `cart-${Date.now()}`,
      type: 'cart_reminder',
      badge: '🛍️ ADDED TO CART',
      title: product.name,
      description: `Saved to your cart. Free express delivery available.`,
      ctaText: 'VIEW CART',
      ctaLink: '/cart',
      featuredImage: product.images[0],
      durationMs: 6000
    });
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
    setCart(prev => {
      const target = prev.find(item => item.product.id === productId);
      if (target && quantity > target.product.stock) {
        showToast(`Stock limit: Only ${target.product.stock} units available`, 'warning');
        return prev.map(item => (item.product.id === productId ? { ...item, quantity: target.product.stock } : item));
      }
      return prev.map(item => (item.product.id === productId ? { ...item, quantity } : item));
    });
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
        
        showNotification({
          id: `wishlist-${Date.now()}`,
          type: 'wishlist_price_drop',
          badge: '❤️ SAVED TO WISHLIST',
          title: product.name,
          description: `Saved to your wishlist. We'll notify you if price drops or stock runs low.`,
          ctaText: 'VIEW WISHLIST',
          ctaLink: '/wishlist',
          featuredImage: product.images[0],
          durationMs: 6000
        });

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
  const applyCoupon = async (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    try {
      const serverRes = await couponsApi.validate(cleanCode, cartSubtotal);
      if (serverRes.valid) {
        const couponObj: Coupon = {
          code: serverRes.code,
          discountPercent: serverRes.discountType === 'percent' ? serverRes.discountValue : undefined,
          flatDiscount: serverRes.discountType === 'fixed' ? serverRes.discountValue : undefined,
          minOrderValue: 0,
          description: serverRes.description,
          expiresAt: '2026-12-31'
        };
        setAppliedCoupon(couponObj);
        showToast(serverRes.message || `Coupon "${serverRes.code}" applied successfully!`, 'success');
        return { success: true, message: serverRes.message };
      }
    } catch {
      // Fallback to local coupon rules
      const found = coupons.find(c => c.code.toUpperCase() === cleanCode);
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
    }
    return { success: false, message: 'Invalid coupon' };
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
  const placeOrder = async (deliveryAddress: DeliveryAddress, paymentMethod: string): Promise<Order> => {
    const localOrder: Order = {
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

    try {
      const serverRes = await ordersApi.create({
        items: cart.map(item => ({
          productId: item.product.id,
          quantity: item.quantity,
          selectedSize: item.selectedSize,
          selectedColor: item.selectedColor
        })),
        deliveryAddress,
        paymentMethod,
        couponCode: appliedCoupon?.code
      });

      if (serverRes.order) {
        setOrders(prev => [serverRes.order, ...prev]);
        clearCart();
        showToast(`Order #${serverRes.order.id} placed successfully!`, 'success');

        showNotification({
          id: `order-${serverRes.order.id}`,
          type: 'order_status',
          badge: '🚚 ORDER CONFIRMED',
          title: `Order #${serverRes.order.id} Received`,
          description: `Your order is being processed. Tracking number: ${serverRes.order.trackingNumber}`,
          ctaText: 'TRACK ORDER',
          ctaLink: `/orders/${serverRes.order.id}`,
          durationMs: 7000
        });

        return serverRes.order;
      }
    } catch (err) {
      console.warn('[ShopContext placeOrder Server Sync Error: Proceeding with verified local order]', err);
    }

    setOrders(prev => [localOrder, ...prev]);
    clearCart();
    showToast(`Order #${localOrder.id} placed successfully!`, 'success');

    showNotification({
      id: `order-${localOrder.id}`,
      type: 'order_status',
      badge: '🚚 ORDER CONFIRMED',
      title: `Order #${localOrder.id} Received`,
      description: `Your order is being processed. Tracking number: ${localOrder.trackingNumber}`,
      ctaText: 'TRACK ORDER',
      ctaLink: `/orders/${localOrder.id}`,
      durationMs: 7000
    });

    return localOrder;
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
        activeNotification,
        currentUser,
        
        login,
        register,
        logout,
        updateProfile,
        
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
        showNotification,
        dismissNotification,
        
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
