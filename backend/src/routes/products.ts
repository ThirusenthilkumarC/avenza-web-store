import { Router, Request, Response } from 'express';
import { db } from '../db/index.js';
import { authRequired, adminRequired, AuthenticatedRequest } from '../middleware/auth.js';

export const productsRouter = Router();

function formatProduct(row: any) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    brand: row.brand,
    category: row.category,
    subcategory: row.subcategory,
    price: row.price,
    originalPrice: row.original_price,
    discount: row.discount,
    rating: row.rating,
    reviews: row.reviews_count,
    images: row.images_json ? JSON.parse(row.images_json) : [],
    description: row.description,
    features: row.features_json ? JSON.parse(row.features_json) : [],
    specs: row.specs_json ? JSON.parse(row.specs_json) : {},
    stock: row.stock,
    badge: row.badge,
    delivery: row.delivery,
    seller: row.seller,
    createdAt: row.created_at
  };
}

// GET /api/products
productsRouter.get('/', (req: Request, res: Response): void => {
  try {
    const {
      category,
      subcategory,
      search,
      minPrice,
      maxPrice,
      minRating,
      brand,
      inStock,
      deal,
      sortBy,
      page = '1',
      limit = '250'
    } = req.query;

    let query = 'SELECT * FROM products WHERE 1=1';
    const params: any[] = [];

    if (category && category !== 'All') {
      const catStr = String(category).trim().toLowerCase().replace(/-/g, ' ').replace(/—/g, ' ');
      if (catStr.includes('smartphone') || catStr.includes('mobile') || catStr.includes('phone')) {
        query += " AND (LOWER(category) LIKE '%phone%' OR LOWER(category) LIKE '%mobile%' OR LOWER(subcategory) LIKE '%phone%')";
      } else if (catStr.includes('laptop') || catStr.includes('computer')) {
        query += " AND (LOWER(category) LIKE '%laptop%' OR LOWER(category) LIKE '%computer%' OR LOWER(subcategory) LIKE '%laptop%')";
      } else if (catStr.includes('gaming')) {
        query += " AND (LOWER(category) LIKE '%gaming%' OR LOWER(subcategory) LIKE '%gaming%')";
      } else if (catStr.includes('shoe') || catStr.includes('sneaker') || catStr === 'footwear') {
        query += " AND (LOWER(category) LIKE '%shoe%' OR LOWER(category) LIKE '%sneaker%' OR LOWER(category) = 'footwear' OR LOWER(subcategory) LIKE '%footwear%')";
      } else if (catStr.includes('furniture')) {
        query += " AND (LOWER(category) LIKE '%furniture%' OR LOWER(subcategory) LIKE '%furniture%')";
      } else if (catStr.includes('kitchen')) {
        query += " AND (LOWER(category) LIKE '%kitchen%' OR LOWER(subcategory) LIKE '%kitchen%')";
      } else if (catStr.includes('sport') || catStr.includes('fitness')) {
        query += " AND (LOWER(category) LIKE '%sport%' OR LOWER(category) LIKE '%fitness%')";
      } else if (catStr.includes('book') || catStr.includes('stationery')) {
        query += " AND (LOWER(category) LIKE '%book%' OR LOWER(category) LIKE '%stationery%')";
      } else if (catStr.includes('men') && !catStr.includes('women')) {
        query += " AND (LOWER(category) LIKE '%men%' OR (LOWER(category) = 'fashion' AND LOWER(subcategory) LIKE '%men%'))";
      } else if (catStr.includes('women')) {
        query += " AND (LOWER(category) LIKE '%women%' OR (LOWER(category) = 'fashion' AND LOWER(subcategory) LIKE '%women%'))";
      } else if (catStr === 'fashion') {
        query += " AND (LOWER(category) LIKE '%fashion%' OR LOWER(category) = 'footwear')";
      } else if (catStr.includes('home')) {
        query += " AND (LOWER(category) LIKE '%home%' OR LOWER(category) LIKE '%furniture%')";
      } else if (catStr.includes('bag') || catStr.includes('accessor')) {
        query += " AND (LOWER(category) LIKE '%bag%' OR LOWER(category) LIKE '%accessor%' OR LOWER(subcategory) LIKE '%bag%')";
      } else if (catStr.includes('beauty') || catStr.includes('care')) {
        query += " AND (LOWER(category) LIKE '%beauty%' OR LOWER(category) LIKE '%health%')";
      } else if (catStr.includes('watch')) {
        query += " AND (LOWER(category) LIKE '%watch%' OR LOWER(subcategory) LIKE '%watch%')";
      } else if (catStr.includes('electronic')) {
        query += " AND (LOWER(category) LIKE '%electronic%' OR LOWER(category) LIKE '%mobile%')";
      } else {
        query += ' AND (LOWER(category) = LOWER(?) OR LOWER(subcategory) = LOWER(?) OR LOWER(category) LIKE ?)';
        params.push(catStr, catStr, `%${catStr}%`);
      }
    }

    if (subcategory) {
      query += ' AND LOWER(subcategory) = LOWER(?)';
      params.push(String(subcategory));
    }

    if (search) {
      const term = `%${String(search).trim()}%`;
      query += ' AND (name LIKE ? OR brand LIKE ? OR category LIKE ? OR description LIKE ?)';
      params.push(term, term, term, term);
    }

    if (minPrice !== undefined && minPrice !== '') {
      query += ' AND price >= ?';
      params.push(Number(minPrice));
    }

    if (maxPrice !== undefined && maxPrice !== '') {
      query += ' AND price <= ?';
      params.push(Number(maxPrice));
    }

    if (minRating !== undefined && minRating !== '') {
      query += ' AND rating >= ?';
      params.push(Number(minRating));
    }

    if (brand) {
      const brands = String(brand).split(',').map(b => b.trim());
      const placeholders = brands.map(() => '?').join(',');
      query += ` AND brand IN (${placeholders})`;
      params.push(...brands);
    }

    if (inStock === 'true' || inStock === '1') {
      query += ' AND stock > 0';
    }

    if (deal === 'true' || deal === '1') {
      query += " AND (discount >= 30 OR badge = 'Deal of the Day')";
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        query += ' ORDER BY price ASC';
        break;
      case 'price-high':
        query += ' ORDER BY price DESC';
        break;
      case 'rating':
        query += ' ORDER BY rating DESC';
        break;
      case 'discount':
        query += ' ORDER BY discount DESC';
        break;
      case 'newest':
        query += ' ORDER BY id DESC';
        break;
      default:
        query += ' ORDER BY id ASC';
        break;
    }

    const pageNum = Math.max(1, parseInt(String(page), 10) || 1);
    const limitNum = Math.min(200, Math.max(1, parseInt(String(limit), 10) || 100));
    const offset = (pageNum - 1) * limitNum;

    query += ' LIMIT ? OFFSET ?';
    params.push(limitNum, offset);

    const stmt = db.prepare(query);
    const rows = stmt.all(...params) as any[];

    // Count total matching
    let countQuery = 'SELECT COUNT(*) as total FROM products WHERE 1=1';
    const countParams = params.slice(0, -2); // Remove LIMIT & OFFSET
    // Reconstruct without LIMIT/OFFSET
    if (category && category !== 'All') countQuery += ' AND LOWER(category) = LOWER(?)';
    if (subcategory) countQuery += ' AND LOWER(subcategory) = LOWER(?)';
    if (search) countQuery += ' AND (name LIKE ? OR brand LIKE ? OR category LIKE ? OR description LIKE ?)';
    if (minPrice !== undefined && minPrice !== '') countQuery += ' AND price >= ?';
    if (maxPrice !== undefined && maxPrice !== '') countQuery += ' AND price <= ?';
    if (minRating !== undefined && minRating !== '') countQuery += ' AND rating >= ?';
    if (brand) {
      const brands = String(brand).split(',').map(b => b.trim());
      const placeholders = brands.map(() => '?').join(',');
      countQuery += ` AND brand IN (${placeholders})`;
    }
    if (inStock === 'true' || inStock === '1') countQuery += ' AND stock > 0';
    if (deal === 'true' || deal === '1') countQuery += " AND (discount >= 30 OR badge = 'Deal of the Day')";

    const countStmt = db.prepare(countQuery);
    const countRow = countStmt.get(...countParams) as { total: number };

    res.json({
      products: rows.map(formatProduct),
      total: countRow.total,
      page: pageNum,
      totalPages: Math.ceil(countRow.total / limitNum)
    });
  } catch (err: any) {
    console.error('[Products List Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve products' });
  }
});

// GET /api/products/:id
productsRouter.get('/:id', (req: Request, res: Response): void => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) {
      res.status(404).json({ error: 'Not Found', message: 'Product not found' });
      return;
    }

    const stmt = db.prepare('SELECT * FROM products WHERE id = ?');
    const row = stmt.get(id);

    if (!row) {
      res.status(404).json({ error: 'Not Found', message: 'Product not found' });
      return;
    }

    const formatted = formatProduct(row);
    res.json({ product: formatted, ...formatted });
  } catch (err: any) {
    console.error('[Product Detail Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve product' });
  }
});

// POST /api/products (Admin Only)
productsRouter.post('/', authRequired, adminRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const {
      name,
      brand,
      category,
      subcategory = '',
      price,
      originalPrice,
      discount = 0,
      stock = 10,
      description = '',
      images = [],
      features = [],
      specs = {},
      badge = null,
      delivery = 'Free Express Delivery by Tomorrow',
      seller = 'Avenza Official Concierge'
    } = req.body;

    if (!name || !brand || !category || price === undefined || originalPrice === undefined) {
      res.status(400).json({ error: 'Validation Error', message: 'Name, brand, category, price, and originalPrice are required' });
      return;
    }

    const calculatedDiscount = discount || Math.max(0, Math.round(((originalPrice - price) / originalPrice) * 100));

    const insertStmt = db.prepare(`
      INSERT INTO products (
        name, brand, category, subcategory, price, original_price, discount,
        rating, reviews_count, images_json, description, features_json, specs_json,
        stock, badge, delivery, seller, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, 5.0, 0, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insertStmt.run(
      name.trim(),
      brand.trim(),
      category.trim(),
      subcategory ? subcategory.trim() : '',
      Number(price),
      Number(originalPrice),
      calculatedDiscount,
      JSON.stringify(images),
      description.trim(),
      JSON.stringify(features),
      JSON.stringify(specs),
      Number(stock),
      badge,
      delivery,
      seller,
      new Date().toISOString()
    );

    const newId = Number(result.lastInsertRowid);
    const getStmt = db.prepare('SELECT * FROM products WHERE id = ?');
    const newProduct = getStmt.get(newId);

    res.status(201).json({
      message: 'Product created successfully',
      product: formatProduct(newProduct)
    });
  } catch (err: any) {
    console.error('[Admin Create Product Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to create product' });
  }
});

// PATCH /api/products/:id (Admin Only)
productsRouter.patch('/:id', authRequired, adminRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) {
      res.status(400).json({ error: 'Bad Request', message: 'Invalid product ID' });
      return;
    }

    const getStmt = db.prepare('SELECT * FROM products WHERE id = ?');
    const existing = getStmt.get(id) as any;

    if (!existing) {
      res.status(404).json({ error: 'Not Found', message: 'Product not found' });
      return;
    }

    const {
      name = existing.name,
      brand = existing.brand,
      category = existing.category,
      price = existing.price,
      originalPrice = existing.original_price,
      stock = existing.stock,
      description = existing.description,
      badge = existing.badge
    } = req.body;

    const discount = Math.max(0, Math.round(((Number(originalPrice) - Number(price)) / Number(originalPrice)) * 100));

    const updateStmt = db.prepare(`
      UPDATE products
      SET name = ?, brand = ?, category = ?, price = ?, original_price = ?, discount = ?, stock = ?, description = ?, badge = ?
      WHERE id = ?
    `);

    updateStmt.run(
      String(name).trim(),
      String(brand).trim(),
      String(category).trim(),
      Number(price),
      Number(originalPrice),
      discount,
      Number(stock),
      String(description).trim(),
      badge,
      id
    );

    const updated = getStmt.get(id);
    res.json({
      message: 'Product updated successfully',
      product: formatProduct(updated)
    });
  } catch (err: any) {
    console.error('[Admin Update Product Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to update product' });
  }
});

// DELETE /api/products/:id (Admin Only)
productsRouter.delete('/:id', authRequired, adminRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) {
      res.status(400).json({ error: 'Bad Request', message: 'Invalid product ID' });
      return;
    }

    const delStmt = db.prepare('DELETE FROM products WHERE id = ?');
    const result = delStmt.run(id);

    if (result.changes === 0) {
      res.status(404).json({ error: 'Not Found', message: 'Product not found' });
      return;
    }

    res.json({ message: 'Product removed successfully' });
  } catch (err: any) {
    console.error('[Admin Delete Product Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to delete product' });
  }
});
