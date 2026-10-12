import { Router, Response } from 'express';
import { db } from '../db/index.js';
import { authRequired, AuthenticatedRequest } from '../middleware/auth.js';

export const addressesRouter = Router();

// GET /api/addresses
addressesRouter.get('/', authRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.id;
    const stmt = db.prepare('SELECT * FROM addresses WHERE user_id = ? ORDER BY is_default DESC, created_at DESC');
    const rows = stmt.all(userId) as any[];

    const addresses = rows.map(r => ({
      id: r.id,
      fullName: r.full_name,
      phone: r.phone,
      pincode: r.pincode,
      postalCode: r.pincode,
      street: r.street,
      addressLine1: r.street,
      city: r.city,
      state: r.state,
      country: r.country || 'India',
      type: r.type,
      isDefault: Boolean(r.is_default)
    }));

    res.json({ addresses, total: addresses.length });
  } catch (err: any) {
    console.error('[Addresses Get Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve addresses' });
  }
});

// POST /api/addresses
addressesRouter.post('/', authRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.id;
    const {
      id,
      fullName,
      phone,
      city,
      state,
      type = 'Home',
      isDefault = false
    } = req.body;

    const street = (req.body.street || req.body.addressLine1 || '').trim();
    const addressLine2 = (req.body.addressLine2 || '').trim();
    const finalStreet = addressLine2 ? `${street}, ${addressLine2}` : street;
    const pincode = String(req.body.pincode || req.body.postalCode || '').trim();
    const country = (req.body.country || 'India').trim();

    if (!fullName || !phone || !pincode || !finalStreet || !city || !state) {
      res.status(400).json({ error: 'Validation Error', message: 'All address fields are required' });
      return;
    }

    if (isDefault) {
      // Clear other defaults
      db.prepare('UPDATE addresses SET is_default = 0 WHERE user_id = ?').run(userId);
    }

    const addrId = id || `addr-${Date.now()}`;
    const stmt = db.prepare(`
      INSERT OR REPLACE INTO addresses (id, user_id, full_name, phone, pincode, street, city, state, type, is_default, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      addrId,
      userId,
      fullName.trim(),
      phone.trim(),
      pincode,
      finalStreet,
      city.trim(),
      state.trim(),
      type,
      isDefault ? 1 : 0,
      new Date().toISOString()
    );

    res.status(201).json({
      message: 'Address saved successfully',
      address: {
        id: addrId,
        fullName: fullName.trim(),
        phone: phone.trim(),
        pincode,
        postalCode: pincode,
        street: finalStreet,
        addressLine1: street,
        city: city.trim(),
        state: state.trim(),
        country,
        type,
        isDefault: Boolean(isDefault)
      }
    });
  } catch (err: any) {
    console.error('[Address Save Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to save delivery address' });
  }
});

// DELETE /api/addresses/:id
addressesRouter.delete('/:id', authRequired, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.id;
    const { id } = req.params;

    const delStmt = db.prepare('DELETE FROM addresses WHERE id = ? AND user_id = ?');
    delStmt.run(String(id), userId);

    res.json({ message: 'Address removed successfully' });
  } catch (err: any) {
    console.error('[Address Delete Error]', err);
    res.status(500).json({ error: 'Internal Server Error', message: 'Failed to delete address' });
  }
});
