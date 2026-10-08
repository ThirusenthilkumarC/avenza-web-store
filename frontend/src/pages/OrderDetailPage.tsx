import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ChevronRight, Package, MapPin, CreditCard, ShieldCheck, CheckCircle2, RotateCcw, ArrowLeft, ShoppingBag } from 'lucide-react';

export const OrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { orders, addToCart } = useShop();

  const order = orders.find(o => o.id === id) || orders[0];

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold font-serif-luxury text-stone-900">Order Not Found</h2>
        <p className="text-stone-500 text-sm">We couldn't locate an order with ID #{id}</p>
        <Link to="/orders" className="inline-block bg-stone-950 text-amber-400 font-bold px-6 py-3 rounded-xl text-xs">
          View All Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 text-left space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/orders" className="hover:text-stone-900">My Orders</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">Order #{order.id}</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 flex items-center gap-2">
            Order <span className="font-mono text-amber-900">#{order.id}</span>
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Placed on {new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        <Link
          to="/orders"
          className="flex items-center gap-1 text-xs font-bold text-stone-600 hover:text-stone-950 transition-colors bg-stone-100 px-3 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> All Orders
        </Link>
      </div>

      {/* Tracking Timeline Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-800" />
            <span className="font-bold text-stone-900 text-sm">Status:</span>
            <span className="bg-amber-100 text-amber-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {order.status}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[11px] text-stone-400 block font-medium">Tracking Number</span>
            <span className="font-mono font-bold text-stone-900 text-xs">{order.trackingNumber || 'TRK-IN982412'}</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pt-4 pb-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
            {order.timeline?.map((step, idx) => (
              <div key={idx} className="flex flex-col items-start space-y-2 text-left">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                  step.completed
                    ? 'bg-amber-600 text-white ring-4 ring-amber-100'
                    : 'bg-stone-200 text-stone-500'
                }`}>
                  {step.completed ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${step.completed ? 'text-stone-900' : 'text-stone-400'}`}>
                    {step.title}
                  </h4>
                  <span className="text-[10px] text-stone-400 font-mono">{step.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Items Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <h3 className="text-base font-bold font-serif-luxury text-stone-900 border-b border-stone-100 pb-3">
          Ordered Items ({order.items.length})
        </h3>

        <div className="divide-y divide-stone-100">
          {order.items.map((item, idx) => (
            <div key={idx} className="py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-contain bg-stone-50 border border-stone-200 p-1 shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest">{item.product.brand}</span>
                  <h4 className="text-xs font-bold text-stone-900 line-clamp-1">{item.product.name}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Qty: {item.quantity} × ₹{item.price.toLocaleString('en-IN')}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-bold text-stone-900 text-sm font-mono">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </span>
                <button
                  onClick={() => addToCart(item.product)}
                  className="bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold px-3 py-2 rounded-xl text-xs transition-colors flex items-center gap-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Buy Again
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Address & Payment Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 font-bold text-stone-900 text-xs uppercase tracking-wider text-amber-900">
            <MapPin className="w-4 h-4 text-amber-800" /> Delivery Address
          </div>
          <div className="text-xs text-stone-700 space-y-1">
            <p className="font-bold text-stone-900">{order.deliveryAddress.fullName}</p>
            <p>{order.deliveryAddress.street}</p>
            <p>{order.deliveryAddress.city}, {order.deliveryAddress.state} - {order.deliveryAddress.pincode}</p>
            <p className="text-stone-500">Phone: {order.deliveryAddress.phone}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 font-bold text-stone-900 text-xs uppercase tracking-wider text-amber-900">
            <CreditCard className="w-4 h-4 text-amber-800" /> Payment & Summary
          </div>
          <div className="space-y-1.5 text-xs text-stone-700">
            <div className="flex justify-between">
              <span className="text-stone-500">Payment Method:</span>
              <span className="font-bold">{order.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Items Total:</span>
              <span className="font-mono">₹{order.totalAmount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-emerald-700">
              <span>Savings / Discount:</span>
              <span className="font-mono">-₹{order.discountAmount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-stone-100 font-bold text-sm text-stone-950">
              <span>Final Paid Amount:</span>
              <span className="font-mono text-amber-900">₹{order.finalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Return & Invoice Actions */}
      <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-amber-800 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-amber-950">Need Help With This Order?</h4>
            <p className="text-[11px] text-amber-900">Eligible for 7-day doorstep return or exchange under Avenza Guarantee</p>
          </div>
        </div>

        <Link
          to="/returns"
          className="bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Return / Replace Request
        </Link>
      </div>
    </div>
  );
};
