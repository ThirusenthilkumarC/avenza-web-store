import { Router, Request, Response } from 'express';
import { db } from '../db/index.js';

export const couponsRouter = Router();

// POST /api/coupons/validate
couponsRouter.post('/validate', (req: Request, res: Response): void => {
  try {
    const { code } = req.body;
    const total = Number(req.body.orderTotal ?? req.body.subtotal ?? 0);

    if (!code) {
      res.status(400).json({ valid: false, message: 'Coupon code is required' });
      return;
    }

    const cleanCode = String(code).trim().toUpperCase();

    const stmt = db.prepare('SELECT * FROM coupons WHERE code = ? AND active = 1');
    const coupon = stmt.get(cleanCode) as any;

    if (!coupon) {
      res.status(400).json({ valid: false, message: `Invalid voucher code "${cleanCode}"` });
      return;
    }

    if (total < coupon.min_order) {
      res.status(400).json({
        valid: false,
        message: `Code "${cleanCode}" requires a minimum purchase order of ₹${coupon.min_order.toLocaleString('en-IN')}`
      });
      return;
    }

    let discountAmount = 0;
    if (coupon.discount_type === 'fixed') {
      discountAmount = Math.min(total, coupon.discount_value);
    } else {
      discountAmount = Math.round((total * coupon.discount_value) / 100);
      if (coupon.max_discount && discountAmount > coupon.max_discount) {
        discountAmount = coupon.max_discount;
      }
    }

    res.json({
      valid: true,
      code: coupon.code,
      discountType: coupon.discount_type,
      discountValue: coupon.discount_value,
      discount: discountAmount,
      discountAmount,
      description: coupon.description,
      message: `Coupon "${coupon.code}" applied! You saved ₹${discountAmount.toLocaleString('en-IN')}.`
    });
  } catch (err: any) {
    console.error('[Coupon Validation Error]', err);
    res.status(500).json({ valid: false, message: 'Failed to validate coupon' });
  }
});
