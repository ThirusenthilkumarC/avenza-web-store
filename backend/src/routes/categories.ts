import { Router, Request, Response } from 'express';
import { db } from '../db/index.js';
import { authRequired, adminRequired, AuthenticatedRequest } from '../middleware/auth.js';

export const categoriesRouter = Router();

// GET /api/categories
categoriesRouter.get('/', (_req: Request, res: Response): void => {
  try {
    const stmt = db.prepare('SELECT * FROM categories ORDER BY name ASC');
    const rows = stmt.all() as any[];

    const categories = rows.map(r => ({
      id: r.id,
      name: r.name,
      slug: r.slug,
      iconName: r.icon_name,
      subtitle: r.subtitle,
      count: r.count,
      image: r.image
    }));

    res.json({ categories, total: categories.length });
  } catch (err: any) {
    console.error('[Categories List Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve categories' });
  }
});

// POST /api/categories (Admin Only)
categoriesRouter.post('/', authRequired, adminRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const { id, name, slug, iconName, subtitle = '', image, count = 0 } = req.body;

    if (!name || !slug || !iconName || !image) {
      res.status(400).json({ error: 'Validation Error', message: 'Name, slug, iconName, and image are required' });
      return;
    }

    const catId = id || slug.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const stmt = db.prepare(`
      INSERT OR REPLACE INTO categories (id, name, slug, icon_name, subtitle, count, image)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(catId, name.trim(), slug.trim().toLowerCase(), iconName.trim(), subtitle.trim(), Number(count), image.trim());

    res.status(201).json({
      message: 'Category saved successfully',
      category: { id: catId, name, slug, iconName, subtitle, count, image }
    });
  } catch (err: any) {
    console.error('[Admin Save Category Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to save category' });
  }
});
