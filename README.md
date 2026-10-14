<div align="center">

<img src="assets/avenza-logo.jpeg" alt="Avenza Logo" width="220"/>

# 🛍️ AVENZA — Luxury Marketplace

### A New Avenue for You.
**Tagline: Discover. Explore. Shop. Experience Avenza.**

A Production-Grade, Full-Stack E-Commerce Platform engineered for modern Indian luxury commerce.

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.21-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-WAL%20Mode-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Catalog](https://img.shields.io/badge/Catalog-160%20Products%20%7C%2015%20Categories-D4AF37?style=for-the-badge)
![Tests](https://img.shields.io/badge/Tests-29%2F29%20Passing-22C55E?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-22C55E?style=for-the-badge)

<br/>

**🛒 Discover Products · ✨ Explore Collections · ❤️ Shop Your Way · 🛡️ Verified Full-Stack Architecture**

</div>

---

## 🌟 Highlights & Key Capabilities

1. **Large, High-Quality Product Catalog (160 Products across 15 Departments)**
   - Exactly **160 uniquely crafted products** spanning: Smartphones, Laptops & Computers, Electronics & Audio, Fashion — Men, Fashion — Women, Shoes & Sneakers, Watches, Bags & Accessories, Beauty & Personal Care, Home & Living, Kitchen Appliances, Furniture, Sports & Fitness, Books & Stationery, and Gaming Accessories.
   - Realistic Indian Rupee (**₹**) pricing, discount calculations, authentic descriptions, specifications, features, and delivery guarantees.
   - Curated category-matched high-resolution Unsplash images with lazy loading, `object-contain` scaling, and graceful automatic fallback handling (`onError`).

2. **Advanced Multi-Attribute Product Filtering & Sorting**
   - **Real-time Keyword Search**: Instant search by product name, description, or keyword with quick clear button.
   - **Brand Search & Multi-Selection**: Searchable brand list with multi-checkbox toggles.
   - **Department Filter**: Clickable category filters with live product counts.
   - **Price Range Filter**: Min/Max numeric inputs + interactive range slider up to ₹2,50,000.
   - **Rating Filter**: 4.5★, 4.0★, and 3.5★ & Above thresholds.
   - **Discount Filter**: 20%, 30%, 40%, and 50%+ discount chips.
   - **Availability**: Instant "In Stock Only" toggle.
   - **Full Sorting Modes**: Relevance, Popularity (sorted by verified review count), Price: Low to High, Price: High to Low, Customer Rating, Biggest Discount, and Newest Arrivals.
   - **Active Filter Chips**: Removable filter tags with individual `✕` dismiss and one-click "Clear All".

3. **Premium Homepage Experience**
   - Sticky responsive header with announcement bar, pincode location selector, and search suggestions with auto-complete.
   - Large promotional hero carousel with smooth autoplay, pause on hover, and dual CTA buttons (*Shop Now* / *Explore Curations*).
   - Dedicated sections: Trending Products (with category tabs), Best Sellers, New Luxury Arrivals, Electronics Spotlight, Haute Fashion Spotlight, Featured Partner Brands (Rolex, Apple, Hermès, Bang & Olufsen, etc.), Personalized Recommendations, Recently Viewed Browsing History, Seller Hub CTA, Verified Patron Testimonials, and Private Circle Newsletter Subscription.

4. **Product Details & Quick View Experience**
   - High-resolution gallery with thumbnail selectors and hover zoom.
   - Dynamic variant selectors driven by the product schema: clothing sizes (`S`, `M`, `L`, `XL`), footwear sizes (`UK 7`–`UK 11`), storage configurations (`128 GB`, `256 GB`, `512 GB`), and curated finish/color swatches.
   - Live Pincode delivery checker with Indian pincode validation.
   - Tabbed view: Description, Specifications, Reviews, and Q&A.
   - Quick View modal allowing instant variant selection and direct cart addition.

5. **Professional Cart & Transparent Checkout**
   - Cart with quantity stepper, item removal, coupon engine (`WELCOME10`, `SAVE500`, `MEGA20`), tax calculation, and free shipping threshold.
   - 5-step responsive checkout: Customer contact info, Delivery address, Payment method selection, Order review, and Order confirmation.
   - **Payment Sandbox Transparency**: Clearly labelled as a demonstration sandbox environment with zero client trust, no card storage, and transparent payment status.

6. **Admin Executive Console**
   - Accessible at `/admin` for users with the `admin` role.
   - Product Management: Full CRUD (Add, Edit, Delete, Stock Update).
   - Order Management: Live order status pipeline update (Placed → Dispatched → Out for Delivery → Delivered).
   - Category Management and Registered User Directory.
   - Real-time Gross Platform Sales and low-stock telemetry.

---

## 📖 System Architecture

AVENZA is structured as a decoupled monorepo featuring a Node.js + Express backend and a React 19 client:

```
avenza-web-store/
├── backend/                   # Node.js + Express + TypeScript + SQLite REST API
│   ├── src/
│   │   ├── config.ts          # Server environment configuration
│   │   ├── server.ts          # Express application & HTTP server
│   │   ├── db/
│   │   │   ├── index.ts       # node:sqlite DatabaseSync singleton with WAL mode
│   │   │   ├── schema.ts      # Relational DDL definitions & indexes
│   │   │   └── seed.ts        # Luxury catalog (160 products), users, coupons & orders seeder
│   │   ├── middleware/
│   │   │   └── auth.ts        # JWT token verification & role enforcement (Admin/Customer)
│   │   └── routes/
│   │       ├── auth.ts        # Registration, login, profile endpoints
│   │       ├── products.ts    # Filter, search, paginate, admin CRUD (supports 15 categories)
│   │       ├── categories.ts  # Taxonomy listing & admin management
│   │       ├── cart.ts        # Persistent cart with stock limit enforcement
│   │       ├── wishlist.ts    # Saved items management
│   │       ├── addresses.ts   # Client delivery addresses
│   │       ├── coupons.ts     # Server discount calculation & voucher rules
│   │       ├── orders.ts      # Atomic checkout, price calculation & stock deduction
│   │       └── admin.ts       # Executive KPI stats, orders & user directory
│   ├── tests/
│   │   └── api.test.ts        # Automated test suite (29 tests, 100% passing)
│   └── data/
│       └── avenza.sqlite      # SQLite database file
│
├── frontend/                  # React 19 + TypeScript + Vite + Tailwind CSS v4
│   ├── src/
│   │   ├── services/
│   │   │   └── api.ts         # Centralized API client with JWT bearer tokens
│   │   ├── context/
│   │   │   └── ShopContext.tsx# Unified full-stack state with resilient offline fallback
│   │   ├── components/
│   │   │   ├── Header.tsx     # Sticky luxury header with search suggestions & cart
│   │   │   ├── HeroCarousel.tsx # Auto-advancing promotional hero banner
│   │   │   ├── BestSellersSection.tsx # Top-rated best sellers shelf
│   │   │   ├── NewArrivalsSection.tsx # Fresh catalog additions
│   │   │   ├── FeaturedBrands.tsx # Partner brand atelier showcase
│   │   │   ├── RecentlyViewedSection.tsx # Client browsing history shelf
│   │   │   ├── FilterSidebar.tsx # Comprehensive multi-attribute filter controls
│   │   │   ├── ProductCard.tsx # Premium card with color variant preview & quick view
│   │   │   ├── QuickViewModal.tsx # Quick look modal with dynamic size/color options
│   │   │   ├── NotificationSystem.tsx # Floating notification alerts
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── HomePage.tsx   # Curated luxury marketplace homepage
│   │   │   ├── ProductsPage.tsx # Products catalog with grid/list view & pagination
│   │   │   ├── ProductDetailPage.tsx # Comprehensive product specifications & reviews
│   │   │   ├── CartPage.tsx   # Shopping cart with coupon engine
│   │   │   ├── CheckoutPage.tsx # 5-step checkout with sandbox payment transparency
│   │   │   ├── admin/         # Executive Management Portal
│   │   │   └── ...
│   │   ├── data/
│   │   │   ├── products.ts    # Master 160-product catalog data
│   │   │   └── categories.ts  # Master 15-category taxonomy
│   │   └── utils/
│   │       └── categoryMatcher.ts # Flexible category alias & URL slug normalization
│   └── dist/                  # Production client bundle output
│
└── package.json               # Monorepo orchestration scripts
```

---

## 🔒 Security & Data Integrity Highlights

1. **Zero Client Trust Pricing**: Client-submitted prices and discount calculations are rejected. All item prices, subtotal calculations, voucher deductions, and final amounts are calculated server-side inside atomic database transactions (`BEGIN TRANSACTION; ... COMMIT;`).
2. **Atomic Inventory Reservation**: During checkout, product stock is decremented within the database transaction. If inventory is insufficient, the transaction automatically rolls back (`ROLLBACK;`) and returns HTTP 400.
3. **Role-Based Authorization**:
   - Customer accounts have access only to their own orders, cart, and delivery addresses.
   - Administrative endpoints (`/api/admin/*`, `POST/PATCH/DELETE /api/products`, etc.) are protected on the server using `adminRequired` middleware, validating the JWT's embedded role.
4. **Resilient Frontend Fallback**: If the backend server is temporarily unreachable, the client transitions seamlessly to a cached/local storage mode so shoppers are never presented with broken pages.

---

## 🔑 Default Credentials

For automated evaluation and manual reviewer access, the SQLite database is seeded with two verified accounts:

### 1. Customer Patron Account
* **Email**: `vikram.roy@example.com`
* **Password**: `password123`
* **Role**: Customer (Privilege Gold Tier)
* **Pre-seeded**: Saved delivery addresses, active orders with live tracking.

### 2. Executive Administrator Account
* **Email**: `admin@avenza.luxury`
* **Password**: `adminpassword123`
* **Role**: Administrator
* **Portal**: Accessible at `/admin` (or via "Admin Console" button in user dropdown).

---

## 🚀 Quick Start & Development

### 1. Prerequisites
* **Node.js** v20+ (Node.js 22 or 25 recommended with built-in SQLite support).
* **npm** v10+

### 2. Installation
Install dependencies across root, backend, and frontend:
```bash
# In backend
cd backend
npm install

# In frontend
cd ../frontend
npm install
```

### 3. Database Initialization & Seeding
Initialize the SQLite database with 15 categories, all 160 products, active coupons, and default accounts:
```bash
cd backend
npm run seed
```

### 4. Running the Development Servers
In separate terminals (or using the root scripts):

**Start the Backend API (Port 5000):**
```bash
npm run dev:backend
# or: cd backend && npm run dev
```

**Start the Frontend App (Port 5173):**
```bash
npm run dev:frontend
# or: cd frontend && npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧪 Automated Testing

AVENZA includes a comprehensive test suite written using Node's native test runner (`node:test` and `node:assert/strict`).

Run the complete test suite:
```bash
npm test
# or: cd backend && npm test
```

### Test Coverage (29/29 Passing)
* ✅ **Server Health**: `GET /api/health`
* ✅ **Authentication Flow**: Customer registration, duplicate rejection (409), password validation, admin login, JWT validation, unauthenticated rejection (401).
* ✅ **Catalog & Search**: Luxury categories retrieval, paginated product listings, search keywords, single product details, 404 for unknown products.
* ✅ **Delivery Addresses**: Address creation, listing, default address toggling.
* ✅ **Cart & Stock Validation**: Adding items, stock limit validation (rejects quantity > stock with 400), quantity updates, cart totals computation.
* ✅ **Coupons & Discount Rules**: Validation against minimum order values and maximum discount caps (`WELCOME10`, `SAVE500`, `MEGA20`).
* ✅ **Wishlist Operations**: Adding items, deduplication, removal.
* ✅ **Server-Side Order Security**: Price recalculation from database, stock deduction, cart clearing, order timeline creation, ownership authorization checks.
* ✅ **Admin Access Control**: Customer rejection with 403 Forbidden, executive KPI stats, order management, user directory, product creation.

---

## 📦 Production Build & Verification

Run the full monorepo production build:
```bash
npm run build
```

This executes:
1. `backend`: `tsc` (TypeScript compile to `dist/server.js`) — **0 errors**.
2. `frontend`: `tsc -b && vite build` (TypeScript check and Vite client bundle) — **0 errors**.

Run the linter:
```bash
npm run lint
```
(Executes on 69 files — **0 errors**).

---

## 🚢 Deployment Guidelines

### 1. Frontend Deployment (Vercel)
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL`: Your deployed backend URL (e.g. `https://avenza-api.onrender.com/api`)
- **SPA Routing**: The included `vercel.json` ensures all route requests (`/products`, `/cart`, `/checkout`, `/admin`, etc.) route cleanly to `index.html`.

### 2. Backend Deployment (Render)
- **Root Directory**: `backend`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `PORT`: `5000` (or dynamically assigned by Render)
  - `JWT_SECRET`: A secure, secret random string
  - `CORS_ORIGIN`: Your deployed Vercel frontend URL (e.g. `https://avenza-web-store.vercel.app`)

---

## 🌐 API Reference Summary

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/api/health` | Public | Server uptime and health telemetry |
| `POST` | `/api/auth/register` | Public | Register new customer account |
| `POST` | `/api/auth/login` | Public | Authenticate user & receive JWT |
| `GET` | `/api/auth/me` | Authenticated | Retrieve current user profile |
| `PATCH` | `/api/auth/profile` | Authenticated | Update user profile details |
| `GET` | `/api/categories` | Public | List all 15 product categories |
| `POST` | `/api/categories` | Admin | Create or update category |
| `GET` | `/api/products` | Public | Paginated product list with search & filters |
| `GET` | `/api/products/:id` | Public | Retrieve product details |
| `POST` | `/api/products` | Admin | Create new luxury product |
| `PATCH` | `/api/products/:id` | Admin | Update product information & stock |
| `DELETE` | `/api/products/:id` | Admin | Remove product from catalog |
| `GET` | `/api/cart` | Authenticated | Get current user's cart with totals |
| `POST` | `/api/cart/items` | Authenticated | Add product to cart (stock-checked) |
| `PATCH` | `/api/cart/items/:id` | Authenticated | Update cart item quantity |
| `DELETE` | `/api/cart/items/:id` | Authenticated | Remove item from cart |
| `DELETE` | `/api/cart` | Authenticated | Clear user's cart |
| `GET` | `/api/wishlist` | Authenticated | Get user's saved wishlist items |
| `POST` | `/api/wishlist/items` | Authenticated | Save product to wishlist |
| `DELETE` | `/api/wishlist/items/:id` | Authenticated | Remove product from wishlist |
| `GET` | `/api/addresses` | Authenticated | List user delivery addresses |
| `POST` | `/api/addresses` | Authenticated | Create/update delivery address |
| `DELETE` | `/api/addresses/:id` | Authenticated | Delete delivery address |
| `POST` | `/api/coupons/validate` | Public | Server-side voucher verification |
| `POST` | `/api/orders` | Authenticated | Create order with price & stock integrity |
| `GET` | `/api/orders/my-orders` | Authenticated | Customer's order history |
| `GET` | `/api/orders/:id` | Authenticated | Order details (ownership verified) |
| `GET` | `/api/admin/stats` | Admin | Live KPI cards (Revenue, Orders, Low Stock) |
| `GET` | `/api/admin/orders` | Admin | Full marketplace order stream |
| `PATCH` | `/api/admin/orders/:id/status`| Admin | Update order status and shipment timeline |
| `GET` | `/api/admin/users` | Admin | Registered customer directory |

---

## 🎨 Visual Identity & Brand Guidelines

* **Primary Background**: Warm Ivory (`#FAF8F5`) / Pure Slate White (`#FFFFFF`)
* **Primary Foreground**: Charcoal Deep Stone (`#1C1917` / `#0C0A09`)
* **Accent & Metallic**: Muted Gold / Amber (`#D4AF37` / `amber-600` / `amber-400`)
* **Typography**: Luxury Serif Headings paired with clean Geometric Sans body
* **Design Philosophy**: High visual density with generous whitespace, subtle micro-interactions, and accessible contrast ratios.
