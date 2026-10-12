import type { Product, Category, CartItem, WishlistItem, Order, DeliveryAddress, User } from '../types';

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000/api';

class ApiError extends Error {
  status: number;
  data: any;
  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export const getStoredToken = (): string | null => {
  try {
    return localStorage.getItem('avenza_token');
  } catch {
    return null;
  }
};

export const setStoredToken = (token: string | null): void => {
  try {
    if (token) {
      localStorage.setItem('avenza_token', token);
    } else {
      localStorage.removeItem('avenza_token');
    }
  } catch (err) {
    console.warn('[Avenza API] Error storing token:', err);
  }
};

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getStoredToken();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {})
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers
  });

  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.includes('application/json');
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const errorMsg = data && typeof data === 'object' && (data.message || data.error)
      ? (data.message || data.error)
      : `Request failed with status ${response.status}`;
    throw new ApiError(errorMsg, response.status, data);
  }

  return data as T;
}

// 1. Authentication API
export const authApi = {
  async register(payload: { name: string; email: string; password?: string; phone: string }): Promise<{ token: string; user: User }> {
    return request<{ token: string; user: User }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },

  async login(payload: { email: string; password?: string }): Promise<{ token: string; user: User }> {
    return request<{ token: string; user: User }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },

  async getMe(): Promise<{ user: User }> {
    return request<{ user: User }>('/auth/me');
  },

  async updateProfile(details: Partial<User>): Promise<{ user: User }> {
    return request<{ user: User }>('/auth/profile', {
      method: 'PATCH',
      body: JSON.stringify(details)
    });
  }
};

// 2. Catalog Products API
export const productsApi = {
  async getAll(params?: {
    category?: string;
    subcategory?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    minRating?: number;
    brand?: string;
    inStock?: boolean;
    deal?: boolean;
    sortBy?: string;
    page?: number;
    limit?: number;
  }): Promise<{ products: Product[]; total: number; page: number; totalPages: number }> {
    const query = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          query.set(key, String(val));
        }
      });
    }
    const queryStr = query.toString();
    return request<{ products: Product[]; total: number; page: number; totalPages: number }>(
      `/products${queryStr ? `?${queryStr}` : ''}`
    );
  },

  async getById(id: string | number): Promise<{ product: Product }> {
    return request<{ product: Product }>(`/products/${id}`);
  },

  async create(product: Partial<Product>): Promise<{ message: string; product: Product }> {
    return request<{ message: string; product: Product }>('/products', {
      method: 'POST',
      body: JSON.stringify(product)
    });
  },

  async update(id: string | number, product: Partial<Product>): Promise<{ message: string; product: Product }> {
    return request<{ message: string; product: Product }>(`/products/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(product)
    });
  },

  async delete(id: string | number): Promise<{ message: string }> {
    return request<{ message: string }>(`/products/${id}`, {
      method: 'DELETE'
    });
  }
};

// 3. Categories API
export const categoriesApi = {
  async getAll(): Promise<{ categories: Category[] }> {
    return request<{ categories: Category[] }>('/categories');
  },

  async create(category: Partial<Category>): Promise<{ category: Category }> {
    return request<{ category: Category }>('/categories', {
      method: 'POST',
      body: JSON.stringify(category)
    });
  }
};

// 4. Shopping Cart API
export const cartApi = {
  async get(): Promise<{ items: CartItem[]; subtotal: number; itemCount: number }> {
    return request<{ items: CartItem[]; subtotal: number; itemCount: number }>('/cart');
  },

  async addItem(productId: number, quantity: number = 1, selectedSize?: string, selectedColor?: string) {
    return request<{ message: string; cart: { items: CartItem[]; subtotal: number; itemCount: number } }>('/cart/items', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity, selectedSize, selectedColor })
    });
  },

  async updateQuantity(cartItemId: string, quantity: number) {
    return request<{ message: string; cart: { items: CartItem[]; subtotal: number; itemCount: number } }>(`/cart/items/${cartItemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity })
    });
  },

  async removeItem(cartItemId: string) {
    return request<{ message: string; cart: { items: CartItem[]; subtotal: number; itemCount: number } }>(`/cart/items/${cartItemId}`, {
      method: 'DELETE'
    });
  },

  async clear() {
    return request<{ message: string }>('/cart', {
      method: 'DELETE'
    });
  }
};

// 5. Wishlist API
export const wishlistApi = {
  async get(): Promise<{ wishlist: WishlistItem[] }> {
    return request<{ wishlist: WishlistItem[] }>('/wishlist');
  },

  async addItem(productId: number): Promise<{ message: string; wishlist: WishlistItem[] }> {
    return request<{ message: string; wishlist: WishlistItem[] }>('/wishlist/items', {
      method: 'POST',
      body: JSON.stringify({ productId })
    });
  },

  async removeItem(productId: number): Promise<{ message: string; wishlist: WishlistItem[] }> {
    return request<{ message: string; wishlist: WishlistItem[] }>(`/wishlist/items/${productId}`, {
      method: 'DELETE'
    });
  }
};

// 6. Coupons API
export const couponsApi = {
  async validate(code: string, subtotal: number): Promise<{
    valid: boolean;
    code: string;
    discountType: string;
    discountValue: number;
    discount: number;
    discountAmount: number;
    description: string;
    message: string;
  }> {
    return request('/coupons/validate', {
      method: 'POST',
      body: JSON.stringify({ code, subtotal })
    });
  }
};

// 7. Delivery Addresses API
export const addressesApi = {
  async getAll(): Promise<{ addresses: DeliveryAddress[] }> {
    return request<{ addresses: DeliveryAddress[] }>('/addresses');
  },

  async save(address: Partial<DeliveryAddress>): Promise<{ message: string; address: DeliveryAddress }> {
    return request<{ message: string; address: DeliveryAddress }>('/addresses', {
      method: 'POST',
      body: JSON.stringify(address)
    });
  },

  async delete(id: string): Promise<{ message: string }> {
    return request<{ message: string }>(`/addresses/${id}`, {
      method: 'DELETE'
    });
  }
};

// 8. Orders API
export const ordersApi = {
  async create(orderData: {
    items: Array<{ productId: number; quantity: number; selectedSize?: string; selectedColor?: string }>;
    deliveryAddress?: DeliveryAddress;
    addressId?: string;
    paymentMethod: string;
    couponCode?: string;
  }): Promise<{ message: string; order: Order }> {
    return request<{ message: string; order: Order }>('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  },

  async getMyOrders(): Promise<{ orders: Order[] }> {
    return request<{ orders: Order[] }>('/orders/my-orders');
  },

  async getById(id: string): Promise<{ order: Order }> {
    return request<{ order: Order }>(`/orders/${id}`);
  }
};

// 9. Admin API
export const adminApi = {
  async getStats(): Promise<{
    totalRevenue: number;
    totalOrders: number;
    totalCustomers: number;
    lowStockCount: number;
    recentOrders: Array<{
      id: string;
      finalAmount: number;
      status: string;
      date: string;
      customerName: string;
      customerEmail: string;
    }>;
  }> {
    return request('/admin/stats');
  },

  async getOrders(): Promise<{ orders: any[] }> {
    return request('/admin/orders');
  },

  async updateOrderStatus(orderId: string, status: string): Promise<{ message: string }> {
    return request(`/admin/orders/${orderId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    });
  },

  async getUsers(): Promise<{ users: User[] }> {
    return request('/admin/users');
  }
};
