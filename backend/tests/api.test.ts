import test, { describe, it, after } from 'node:test';
import assert from 'node:assert/strict';
import { server } from '../src/server.js';

const address = server.address();
const port = typeof address === 'object' && address ? address.port : 5000;
const BASE_URL = `http://localhost:${port}/api`;

after(() => {
  server.close();
});

describe('AVENZA Full-Stack API Test Suite', () => {
  let customerToken = '';
  let customerUser: any = null;
  let adminToken = '';
  let sampleProductId = '';
  let sampleCartItemId = '';
  let sampleAddressId = '';
  let testOrderCode = '';

  // 1. Health check
  it('GET /health - responds with healthy status', async () => {
    const res = await fetch(`${BASE_URL}/health`);
    assert.strictEqual(res.status, 200);
    const data = await res.json();
    assert.strictEqual(data.status, 'healthy');
    assert.strictEqual(data.service, 'avenza-backend');
  });

  // 2. Authentication
  describe('Authentication Flow', () => {
    const testEmail = `test.user.${Date.now()}@avenza.test`;

    it('POST /auth/register - registers a new customer', async () => {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Julian Vance',
          email: testEmail,
          password: 'Password123!',
          phone: '+91 98765 43210'
        })
      });

      assert.strictEqual(res.status, 201);
      const data = await res.json();
      assert.ok(data.token);
      assert.strictEqual(data.user.email, testEmail);
      assert.strictEqual(data.user.role, 'customer');
      customerToken = data.token;
      customerUser = data.user;
    });

    it('POST /auth/register - rejects duplicate email with 409', async () => {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Duplicate Vance',
          email: testEmail,
          password: 'Password123!'
        })
      });

      assert.strictEqual(res.status, 409);
      const data = await res.json();
      assert.ok(data.error);
    });

    it('POST /auth/login - rejects invalid credentials with 401', async () => {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: testEmail,
          password: 'WrongPassword999'
        })
      });

      assert.strictEqual(res.status, 401);
    });

    it('POST /auth/login - logs in admin successfully', async () => {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@avenza.luxury',
          password: 'adminpassword123'
        })
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(data.token);
      assert.strictEqual(data.user.role, 'admin');
      adminToken = data.token;
    });

    it('GET /auth/me - returns user profile with valid JWT', async () => {
      const res = await fetch(`${BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${customerToken}` }
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.strictEqual(data.user.email, testEmail);
    });

    it('GET /auth/me - rejects request without token with 401', async () => {
      const res = await fetch(`${BASE_URL}/auth/me`);
      assert.strictEqual(res.status, 401);
    });
  });

  // 3. Products & Categories
  describe('Products & Catalog Flow', () => {
    it('GET /categories - returns seeded luxury categories', async () => {
      const res = await fetch(`${BASE_URL}/categories`);
      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(Array.isArray(data.categories));
      assert.ok(data.categories.length > 0);
    });

    it('GET /products - returns paginated products catalog', async () => {
      const res = await fetch(`${BASE_URL}/products?limit=10&page=1`);
      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(Array.isArray(data.products));
      assert.ok(data.products.length > 0);
      assert.strictEqual(data.page, 1);
      assert.ok(data.total > 0);
      sampleProductId = data.products[0].id;
    });

    it('GET /products?search= - filters products by search keyword', async () => {
      const res = await fetch(`${BASE_URL}/products?search=Rolex`);
      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(Array.isArray(data.products));
      if (data.products.length > 0) {
        assert.ok(data.products.some((p: any) => p.name.includes('Rolex') || p.brand.includes('Rolex')));
      }
    });

    it('GET /products/:id - returns single product details', async () => {
      const res = await fetch(`${BASE_URL}/products/${sampleProductId}`);
      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.strictEqual(data.product.id, sampleProductId);
    });

    it('GET /products/:id - returns 404 for unknown product id', async () => {
      const res = await fetch(`${BASE_URL}/products/non-existent-product-id`);
      assert.strictEqual(res.status, 404);
    });
  });

  // 4. Addresses
  describe('Delivery Addresses Flow', () => {
    it('POST /addresses - creates a delivery address', async () => {
      const res = await fetch(`${BASE_URL}/addresses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${customerToken}`
        },
        body: JSON.stringify({
          fullName: 'Julian Vance',
          phone: '+91 98765 43210',
          addressLine1: 'Penthouse 4B, Signature Towers',
          addressLine2: 'Bandra West',
          city: 'Mumbai',
          state: 'Maharashtra',
          postalCode: '400050',
          country: 'India',
          isDefault: true
        })
      });

      assert.strictEqual(res.status, 201);
      const data = await res.json();
      assert.ok(data.address.id);
      sampleAddressId = data.address.id;
    });

    it('GET /addresses - lists user delivery addresses', async () => {
      const res = await fetch(`${BASE_URL}/addresses`, {
        headers: { Authorization: `Bearer ${customerToken}` }
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(Array.isArray(data.addresses));
      assert.ok(data.addresses.length >= 1);
    });
  });

  // 5. Cart
  describe('Shopping Cart Flow', () => {
    it('POST /cart/items - adds item to cart with stock validation', async () => {
      const res = await fetch(`${BASE_URL}/cart/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${customerToken}`
        },
        body: JSON.stringify({
          productId: sampleProductId,
          quantity: 1
        })
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(Array.isArray(data.cart.items));
      const item = data.cart.items.find((i: any) => i.productId === sampleProductId);
      assert.ok(item);
      sampleCartItemId = item.id;
    });

    it('POST /cart/items - rejects quantity higher than inventory', async () => {
      const res = await fetch(`${BASE_URL}/cart/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${customerToken}`
        },
        body: JSON.stringify({
          productId: sampleProductId,
          quantity: 99999
        })
      });

      assert.strictEqual(res.status, 400);
    });

    it('GET /cart - returns current user cart with computed total', async () => {
      const res = await fetch(`${BASE_URL}/cart`, {
        headers: { Authorization: `Bearer ${customerToken}` }
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(data.cart.subtotal > 0);
      assert.ok(data.cart.itemCount >= 1);
    });

    it('PATCH /cart/items/:id - updates item quantity', async () => {
      const res = await fetch(`${BASE_URL}/cart/items/${sampleCartItemId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${customerToken}`
        },
        body: JSON.stringify({ quantity: 2 })
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      const updated = data.cart.items.find((i: any) => i.id === sampleCartItemId);
      assert.strictEqual(updated.quantity, 2);
    });
  });

  // 6. Coupons
  describe('Coupons & Discounts Flow', () => {
    it('POST /coupons/validate - verifies valid coupon and calculates discount', async () => {
      const res = await fetch(`${BASE_URL}/coupons/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: 'WELCOME10',
          subtotal: 100000
        })
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.strictEqual(data.valid, true);
      assert.strictEqual(data.discount, 1000); // 10% of 100000 capped at maxDiscount 1000
    });

    it('POST /coupons/validate - rejects unknown coupon code', async () => {
      const res = await fetch(`${BASE_URL}/coupons/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: 'FAKECOUPON999',
          subtotal: 100000
        })
      });

      assert.strictEqual(res.status, 400);
      const data = await res.json();
      assert.strictEqual(data.valid, false);
    });
  });

  // 7. Wishlist
  describe('Wishlist Flow', () => {
    it('POST /wishlist/items - adds product to wishlist', async () => {
      const res = await fetch(`${BASE_URL}/wishlist/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${customerToken}`
        },
        body: JSON.stringify({ productId: sampleProductId })
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(data.wishlist.some((item: any) => item.productId === sampleProductId));
    });

    it('DELETE /wishlist/items/:productId - removes product from wishlist', async () => {
      const res = await fetch(`${BASE_URL}/wishlist/items/${sampleProductId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${customerToken}` }
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(!data.wishlist.some((item: any) => item.productId === sampleProductId));
    });
  });

  // 8. Orders & Server-Side Security
  describe('Orders Flow & Stock Deduction', () => {
    it('POST /orders - securely creates order with server price recalculation', async () => {
      const res = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${customerToken}`
        },
        body: JSON.stringify({
          addressId: sampleAddressId,
          paymentMethod: 'Credit Card (Razorpay)',
          couponCode: 'WELCOME10',
          items: [
            {
              productId: sampleProductId,
              quantity: 1,
              // Deliberately fake client-side price to test server recalculation
              price: 1
            }
          ]
        })
      });

      assert.strictEqual(res.status, 201);
      const data = await res.json();
      assert.ok(data.order.orderCode);
      assert.ok(data.order.totalAmount > 1000); // Server used real DB price, not 1
      testOrderCode = data.order.orderCode;
    });

    it('GET /orders/my-orders - retrieves customer order history', async () => {
      const res = await fetch(`${BASE_URL}/orders/my-orders`, {
        headers: { Authorization: `Bearer ${customerToken}` }
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(Array.isArray(data.orders));
      assert.ok(data.orders.some((o: any) => o.orderCode === testOrderCode));
    });
  });

  // 9. Admin Authorization & Operations
  describe('Admin Operations & Access Control', () => {
    it('GET /admin/stats - forbids customer from accessing admin stats (403)', async () => {
      const res = await fetch(`${BASE_URL}/admin/stats`, {
        headers: { Authorization: `Bearer ${customerToken}` }
      });

      assert.strictEqual(res.status, 403);
    });

    it('GET /admin/stats - allows admin to view dashboard statistics', async () => {
      const res = await fetch(`${BASE_URL}/admin/stats`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok('totalRevenue' in data.stats);
      assert.ok('totalOrders' in data.stats);
      assert.ok('totalCustomers' in data.stats);
      assert.ok('lowStockCount' in data.stats);
    });

    it('GET /admin/orders - allows admin to view all orders', async () => {
      const res = await fetch(`${BASE_URL}/admin/orders`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(Array.isArray(data.orders));
    });

    it('GET /admin/users - allows admin to view user directory', async () => {
      const res = await fetch(`${BASE_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.ok(Array.isArray(data.users));
    });

    it('POST /products - allows admin to create a new product', async () => {
      const res = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`
        },
        body: JSON.stringify({
          name: 'Patek Philippe Nautilus 5711/1R',
          tagline: 'Pure Haute Horlogerie',
          description: 'Rose gold case with brown dial and self-winding caliber.',
          category: 'Horology',
          brand: 'Patek Philippe',
          price: 9200000,
          originalPrice: 9800000,
          discountPercent: 6,
          stock: 3,
          images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
          rating: 5.0,
          reviewsCount: 12,
          isFeatured: true
        })
      });

      assert.strictEqual(res.status, 201);
      const data = await res.json();
      assert.strictEqual(data.product.name, 'Patek Philippe Nautilus 5711/1R');
      assert.strictEqual(data.product.stock, 3);
    });
  });
});
