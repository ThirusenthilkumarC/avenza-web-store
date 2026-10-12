import { Router, Response } from 'express';
import { db } from '../db/index.js';
import { authRequired, AuthenticatedRequest } from '../middleware/auth.js';

export const cartRouter = Router();

function getUserCart(userId: string) {
  const stmt = db.prepare(`
    SELECT 
      c.id as cart_item_id,
      c.quantity,
      c.selected_size,
      c.selected_color,
      p.*
    FROM cart_items c
    JOIN products p ON c.product_id = p.id
    WHERE c.user_id = ?
    ORDER BY c.created_at DESC
  `);

  const rows = stmt.all(userId) as any[];

  const items = rows.map(r => ({
    id: r.cart_item_id,
    productId: r.id,
    quantity: r.quantity,
    selectedSize: r.selected_size,
    selectedColor: r.selected_color,
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

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    subtotal,
    itemCount
  };
}

// GET /api/cart
cartRouter.get('/', authRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.id;
    const cart = getUserCart(userId);
    res.json({ cart, ...cart });
  } catch (err: any) {
    console.error('[Cart Get Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve shopping cart' });
  }
});

// POST /api/cart/items
cartRouter.post('/items', authRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.id;
    const { productId, quantity = 1, selectedSize = null, selectedColor = null } = req.body;

    if (!productId) {
      res.status(400).json({ error: 'Validation Error', message: 'productId is required' });
      return;
    }

    // Verify product exists and has stock
    const pStmt = db.prepare('SELECT id, name, stock, price FROM products WHERE id = ?');
    const product = pStmt.get(Number(productId)) as any;

    if (!product) {
      res.status(404).json({ error: 'Not Found', message: 'Product does not exist' });
      return;
    }

    if (product.stock <= 0) {
      res.status(400).json({ error: 'Out of Stock', message: `"${product.name}" is currently out of stock` });
      return;
    }

    const requestedQty = Number(quantity);
    if (requestedQty > product.stock) {
      res.status(400).json({
        error: 'Insufficient Stock',
        message: `Requested quantity (${requestedQty}) exceeds available inventory (${product.stock} available)`
      });
      return;
    }

    // Check if variant already in cart
    const findExisting = db.prepare(`
      SELECT id, quantity FROM cart_items 
      WHERE user_id = ? AND product_id = ? 
        AND (selected_size = ? OR (selected_size IS NULL AND ? IS NULL))
        AND (selected_color = ? OR (selected_color IS NULL AND ? IS NULL))
    `);

    const existing = findExisting.get(
      userId,
      product.id,
      selectedSize,
      selectedSize,
      selectedColor,
      selectedColor
    ) as any;

    const now = new Date().toISOString();

    if (existing) {
      const newQty = existing.quantity + requestedQty;
      if (newQty > product.stock) {
        res.status(400).json({
          error: 'Insufficient Stock',
          message: `Cannot add ${requestedQty} more. Stock limit of ${product.stock} reached.`
        });
        return;
      }
      const updateStmt = db.prepare('UPDATE cart_items SET quantity = ?, updated_at = ? WHERE id = ?');
      updateStmt.run(newQty, now, existing.id);
      const cart = getUserCart(userId);
      res.json({ message: 'Cart item quantity updated', cartItemId: existing.id, quantity: newQty, cart, ...cart });
      return;
    }

    const initialQty = Math.max(1, requestedQty);
    const cartItemId = `cart-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const insertStmt = db.prepare(`
      INSERT INTO cart_items (id, user_id, product_id, quantity, selected_size, selected_color, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertStmt.run(cartItemId, userId, product.id, initialQty, selectedSize, selectedColor, now, now);

    const cart = getUserCart(userId);
    res.status(200).json({
      message: 'Item added to cart',
      cartItemId,
      quantity: initialQty,
      cart,
      ...cart
    });
  } catch (err: any) {
    console.error('[Cart Add Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to add item to cart' });
  }
});

// PATCH /api/cart/items/:id
cartRouter.patch('/items/:id', authRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.id;
    const { id } = req.params;
    const { quantity } = req.body;

    if (quantity === undefined || Number(quantity) < 1) {
      const delStmt = db.prepare('DELETE FROM cart_items WHERE id = ? AND user_id = ?');
      delStmt.run(String(id), userId);
      const cart = getUserCart(userId);
      res.json({ message: 'Item removed from cart', cart, ...cart });
      return;
    }

    // Verify stock
    const itemStmt = db.prepare(`
      SELECT c.id, p.stock 
      FROM cart_items c 
      JOIN products p ON c.product_id = p.id 
      WHERE c.id = ? AND c.user_id = ?
    `);
    const item = itemStmt.get(String(id), userId) as any;

    if (!item) {
      res.status(404).json({ error: 'Not Found', message: 'Cart item not found' });
      return;
    }

    const requestedQty = Number(quantity);
    if (requestedQty > item.stock) {
      res.status(400).json({
        error: 'Insufficient Stock',
        message: `Requested quantity exceeds available inventory (${item.stock} in stock)`
      });
      return;
    }

    const updateStmt = db.prepare('UPDATE cart_items SET quantity = ?, updated_at = ? WHERE id = ?');
    updateStmt.run(requestedQty, new Date().toISOString(), String(id));

    const cart = getUserCart(userId);
    res.json({ message: 'Quantity updated', quantity: requestedQty, cart, ...cart });
  } catch (err: any) {
    console.error('[Cart Update Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to update cart item' });
  }
});

// DELETE /api/cart/items/:id
cartRouter.delete('/items/:id', authRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.id;
    const { id } = req.params;

    const delStmt = db.prepare('DELETE FROM cart_items WHERE id = ? AND user_id = ?');
    const result = delStmt.run(String(id), userId);

    if (result.changes === 0) {
      res.status(404).json({ error: 'Not Found', message: 'Cart item not found' });
      return;
    }

    const cart = getUserCart(userId);
    res.json({ message: 'Item removed from cart', cart, ...cart });
  } catch (err: any) {
    console.error('[Cart Delete Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to remove cart item' });
  }
});

// DELETE /api/cart
cartRouter.delete('/', authRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.id;
    const delStmt = db.prepare('DELETE FROM cart_items WHERE user_id = ?');
    delStmt.run(userId);
    res.json({ message: 'Shopping cart cleared', cart: { items: [], subtotal: 0, itemCount: 0 }, items: [] });
  } catch (err: any) {
    console.error('[Cart Clear Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to clear cart' });
  }
});
