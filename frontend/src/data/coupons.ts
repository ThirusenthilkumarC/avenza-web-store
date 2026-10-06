import type { Coupon } from '../types';

export const coupons: Coupon[] = [
  {
    code: 'WELCOME10',
    discountPercent: 10,
    maxDiscount: 1000,
    minOrderValue: 999,
    description: 'Get 10% instant discount on your first purchase above ₹999 (Max ₹1,000)',
    expiresAt: '2026-12-31'
  },
  {
    code: 'SAVE500',
    flatDiscount: 500,
    minOrderValue: 2499,
    description: 'Flat ₹500 discount on orders over ₹2,499',
    expiresAt: '2026-12-31'
  },
  {
    code: 'MEGA20',
    discountPercent: 20,
    maxDiscount: 2000,
    minOrderValue: 4999,
    description: '20% Mega Shopping Discount on purchases over ₹4,999 (Max ₹2,000)',
    expiresAt: '2026-12-31'
  }
];
