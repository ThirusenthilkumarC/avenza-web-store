import { Router } from 'express';
import { db } from '../db/index.js';
import { authRequired } from '../middleware/auth.js';
export const wishlistRouter = Router();
function getWishlistForUser(userId) {
    const stmt = db.prepare(`
    SELECT 
      w.id as wishlist_item_id,
      w.product_id,
      w.created_at as added_at,
      p.*
    FROM wishlist_items w
    JOIN products p ON w.product_id = p.id
    WHERE w.user_id = ?
    ORDER BY w.created_at DESC
  `);
    const rows = stmt.all(userId);
    return rows.map(r => ({
        id: r.wishlist_item_id,
        productId: r.product_id,
        addedAt: r.added_at,
        product: {
            id: r.id,
            name: r.name,
            brand: r.brand,
            category: r.category,
            subcategory: r.subcategory,
            price: r.price,
            originalPrice: r.original_price,
            discount: r.discount,
            rating: r.rating,
            reviews: r.reviews_count,
            images: r.images_json ? JSON.parse(r.images_json) : [],
            description: r.description,
            stock: r.stock,
            badge: r.badge,
            delivery: r.delivery,
            seller: r.seller
        }
    }));
}
// GET /api/wishlist
wishlistRouter.get('/', authRequired, (req, res) => {
    try {
        const userId = req.user.id;
        const items = getWishlistForUser(userId);
        res.json({ wishlist: items, items });
    }
    catch (err) {
        console.error('[Wishlist Get Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve wishlist' });
    }
});
// POST /api/wishlist/items
wishlistRouter.post('/items', authRequired, (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;
        if (!productId) {
            res.status(400).json({ error: 'Validation Error', message: 'productId is required' });
            return;
        }
        const id = `wsh-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
        const now = new Date().toISOString();
        const stmt = db.prepare(`
      INSERT OR IGNORE INTO wishlist_items (id, user_id, product_id, created_at)
      VALUES (?, ?, ?, ?)
    `);
        stmt.run(id, userId, Number(productId), now);
        const items = getWishlistForUser(userId);
        res.status(200).json({ message: 'Item saved to wishlist', wishlist: items, items });
    }
    catch (err) {
        console.error('[Wishlist Add Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to add item to wishlist' });
    }
});
// DELETE /api/wishlist/items/:productId
wishlistRouter.delete('/items/:productId', authRequired, (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.params;
        const delStmt = db.prepare('DELETE FROM wishlist_items WHERE user_id = ? AND product_id = ?');
        delStmt.run(userId, Number(productId));
        const items = getWishlistForUser(userId);
        res.json({ message: 'Item removed from wishlist', wishlist: items, items });
    }
    catch (err) {
        console.error('[Wishlist Delete Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to remove wishlist item' });
    }
});
