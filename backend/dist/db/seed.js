import bcrypt from 'bcryptjs';
import { db } from './index.js';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Relative path to frontend data files
const frontendDataDir = path.resolve(__dirname, '../../../frontend/src/data');
async function seed() {
    console.log('[Avenza Seed] Starting database seeding process...');
    // 1. Seed Users
    const customerPasswordHash = await bcrypt.hash('password123', 10);
    const adminPasswordHash = await bcrypt.hash('adminpassword123', 10);
    const insertUser = db.prepare(`
    INSERT OR REPLACE INTO users (id, email, password_hash, name, phone, role, membership_tier, avatar, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
    insertUser.run('usr-customer-1', 'vikram.roy@example.com', customerPasswordHash, 'Vikramaditya Roy', '+91 98765 43210', 'customer', 'Privilege Gold', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80', new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString());
    insertUser.run('usr-admin-1', 'admin@avenza.luxury', adminPasswordHash, 'AVENZA Master Administrator', '+91 1800 283 692', 'admin', 'Executive Patron', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80', new Date().toISOString());
    console.log('[Avenza Seed] Default users seeded (Customer: vikram.roy@example.com, Admin: admin@avenza.luxury)');
    // 2. Seed Categories
    const { categories } = await import(pathToFileURL(path.join(frontendDataDir, 'categories.ts')).href);
    const insertCategory = db.prepare(`
    INSERT OR REPLACE INTO categories (id, name, slug, icon_name, subtitle, count, image)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
    for (const cat of categories) {
        insertCategory.run(cat.id, cat.name, cat.slug, cat.iconName, cat.subtitle || '', cat.count || 0, cat.image);
    }
    console.log(`[Avenza Seed] Seeded ${categories.length} categories.`);
    // 3. Seed Products
    const { products } = await import(pathToFileURL(path.join(frontendDataDir, 'products.ts')).href);
    const insertProduct = db.prepare(`
    INSERT OR REPLACE INTO products (
      id, name, brand, category, subcategory, price, original_price, discount,
      rating, reviews_count, images_json, description, features_json, specs_json,
      stock, badge, delivery, seller, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
    for (const p of products) {
        insertProduct.run(p.id, p.name, p.brand, p.category, p.subcategory || '', p.price, p.originalPrice, p.discount, p.rating, p.reviews || 0, JSON.stringify(p.images || []), p.description, JSON.stringify(p.features || []), JSON.stringify(p.specs || {}), p.stock || 15, p.badge || (p.isDealOfDay ? 'Deal of the Day' : null), p.delivery || 'Free Express Delivery by Tomorrow', p.seller || 'Avenza Official Concierge', new Date().toISOString());
    }
    console.log(`[Avenza Seed] Seeded ${products.length} products.`);
    // 4. Seed Coupons
    const { coupons } = await import(pathToFileURL(path.join(frontendDataDir, 'coupons.ts')).href);
    const insertCoupon = db.prepare(`
    INSERT OR REPLACE INTO coupons (code, discount_type, discount_value, min_order, max_discount, description, active)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
    for (const c of coupons) {
        const isFlat = typeof c.flatDiscount === 'number';
        insertCoupon.run(c.code, isFlat ? 'fixed' : 'percent', isFlat ? c.flatDiscount : (c.discountPercent || 10), c.minOrderValue || 0, c.maxDiscount || null, c.description, 1);
    }
    // Also seed PRIVILEGE1000 and FESTIVAL20
    insertCoupon.run('PRIVILEGE1000', 'fixed', 1000, 4999, null, 'Private Circle exclusive ₹1,000 welcome voucher', 1);
    insertCoupon.run('FESTIVAL20', 'percent', 20, 2999, 2500, 'Festival celebration 20% instant discount', 1);
    console.log('[Avenza Seed] Coupons seeded.');
    // 5. Seed Customer Address
    const insertAddress = db.prepare(`
    INSERT OR REPLACE INTO addresses (id, user_id, full_name, phone, pincode, street, city, state, type, is_default, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
    insertAddress.run('addr-1', 'usr-customer-1', 'Vikramaditya Roy', '+91 98765 43210', '400001', 'Apartment 4B, Marine Drive Towers', 'Mumbai', 'Maharashtra', 'Home', 1, new Date().toISOString());
    insertAddress.run('addr-2', 'usr-customer-1', 'Vikramaditya Roy (Office)', '+91 98765 43210', '400051', 'Suite 1204, BKC Financial Tower', 'Mumbai', 'Maharashtra', 'Work', 0, new Date().toISOString());
    // 6. Seed Sample Orders
    const insertOrder = db.prepare(`
    INSERT OR REPLACE INTO orders (
      id, user_id, total_amount, discount_amount, delivery_charge, final_amount,
      status, payment_method, payment_status, delivery_address_json,
      tracking_number, estimated_delivery, timeline_json, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
    const sampleAddress = {
        id: 'addr-1',
        fullName: 'Vikramaditya Roy',
        phone: '+91 98765 43210',
        pincode: '400001',
        street: 'Apartment 4B, Marine Drive Towers',
        city: 'Mumbai',
        state: 'Maharashtra',
        type: 'Home',
        isDefault: true
    };
    const sampleTimeline = [
        { title: 'Order Placed', date: '3 days ago', completed: true },
        { title: 'Packed & Dispatched', date: '2 days ago', completed: true },
        { title: 'Out for Delivery', date: 'Today', completed: true },
        { title: 'Delivered', date: 'Pending', completed: false }
    ];
    insertOrder.run('ORD-89421', 'usr-customer-1', products[0].originalPrice, products[0].originalPrice - products[0].price, 0, products[0].price, 'Out for Delivery', 'UPI (Google Pay)', 'Paid', JSON.stringify(sampleAddress), 'TRK-IN987412356', 'Tomorrow by 6:00 PM', JSON.stringify(sampleTimeline), new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString());
    const insertOrderItem = db.prepare(`
    INSERT OR REPLACE INTO order_items (id, order_id, product_id, quantity, price, selected_size, selected_color)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
    insertOrderItem.run('item-1', 'ORD-89421', products[0].id, 1, products[0].price, 'Standard', 'Obsidian Black');
    console.log('[Avenza Seed] Sample order and order items seeded.');
    console.log('[Avenza Seed] Database seeding completed successfully! ✨');
}
seed().catch(err => {
    console.error('[Avenza Seed Error]', err);
    process.exit(1);
});
