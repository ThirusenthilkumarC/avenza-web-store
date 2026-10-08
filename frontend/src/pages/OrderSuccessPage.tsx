import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, Package, ArrowRight, ShoppingBag, ShieldCheck, MapPin } from 'lucide-react';
import type { Order } from '../types';

export const OrderSuccessPage: React.FC = () => {
  const location = useLocation();
  const order = location.state?.order as Order | undefined;

  const mockOrder: Order = {
    id: 'ORD-89421',
    date: new Date().toISOString(),
    items: [],
    totalAmount: 14999,
    discountAmount: 2000,
    deliveryCharge: 0,
    finalAmount: 12999,
    status: 'Processing',
    paymentMethod: 'UPI (Google Pay)',
    paymentStatus: 'Paid',
    deliveryAddress: {
      id: 'addr-1',
      fullName: 'Valued Customer',
      phone: '+91 98765 43210',
      pincode: '400001',
      street: 'Marine Drive Towers',
      city: 'Mumbai',
      state: 'Maharashtra',
      type: 'Home',
      isDefault: true
    },
    trackingNumber: 'TRK-IN987412356',
    estimatedDelivery: '2-3 Business Days',
    timeline: [
      { title: 'Order Placed', date: 'Just now', completed: true },
      { title: 'Packed & Dispatched', date: 'Pending', completed: false },
      { title: 'Out for Delivery', date: 'Pending', completed: false },
      { title: 'Delivered', date: 'Pending', completed: false }
    ]
  };

  const displayOrder = order || mockOrder;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 my-10 text-left space-y-8">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-lg text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-300 shadow-xs">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            Payment Confirmed
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900">
            Order Placed Successfully!
          </h1>
          <p className="text-stone-600 text-sm max-w-md mx-auto">
            Thank you for shopping with Avenza. Your order <strong className="text-stone-950 font-mono">#{displayOrder.id}</strong> has been received and is being prepared with precision.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-stone-500 block text-[11px] font-semibold uppercase">Order Number</span>
            <span className="font-mono font-bold text-stone-900 text-sm">{displayOrder.id}</span>
          </div>

          <div>
            <span className="text-stone-500 block text-[11px] font-semibold uppercase">Tracking Reference</span>
            <span className="font-mono font-bold text-stone-900 text-sm">{displayOrder.trackingNumber || 'TRK-AV98231'}</span>
          </div>

          <div>
            <span className="text-stone-500 block text-[11px] font-semibold uppercase">Estimated Delivery</span>
            <span className="font-bold text-stone-900">{displayOrder.estimatedDelivery || 'Within 2-3 Business Days'}</span>
          </div>

          <div>
            <span className="text-stone-500 block text-[11px] font-semibold uppercase">Payment Method</span>
            <span className="font-bold text-stone-900">{displayOrder.paymentMethod} (Paid)</span>
          </div>

          {displayOrder.deliveryAddress && (
            <div className="sm:col-span-2 pt-3 border-t border-stone-200/80 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900">{displayOrder.deliveryAddress.fullName}</span>
                <p className="text-stone-600 text-[11px]">
                  {displayOrder.deliveryAddress.street}, {displayOrder.deliveryAddress.city}, {displayOrder.deliveryAddress.state} - {displayOrder.deliveryAddress.pincode}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`/orders/${displayOrder.id}`}
            className="bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold px-7 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs shadow-md min-h-[44px]"
          >
            <Package className="w-4 h-4" /> Track Order Status
          </Link>
          <Link
            to="/products"
            className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold px-7 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs border border-stone-300 min-h-[44px]"
          >
            <ShoppingBag className="w-4 h-4" /> Continue Shopping <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Trust Note */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-center gap-2 text-stone-500 text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>A order confirmation email and SMS tracking link have been dispatched.</span>
        </div>
      </div>
    </div>
  );
};
