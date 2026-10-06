import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Package, Truck, ChevronRight, Eye } from 'lucide-react';
import type { Order } from '../types';

export const OrdersPage: React.FC = () => {
  const { orders } = useShop();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 text-left">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/account" className="hover:text-stone-900">Account</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-stone-900">My Orders</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
            Order History & Tracking
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Track real-time shipment updates, view invoices and manage returns
          </p>
        </div>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map(order => (
            <div
              key={order.id}
              className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-4"
            >
              {/* Order Header bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100 text-xs">
                <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider block">Order ID</span>
                    <span className="font-mono font-bold text-stone-900">{order.id}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider block">Date Placed</span>
                    <span className="text-stone-700 font-medium">
                      {new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider block">Total Amount</span>
                    <span className="font-mono font-extrabold text-stone-900">₹{order.finalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 ${
                    order.status === 'Delivered'
                      ? 'bg-emerald-100 text-emerald-800'
                      : order.status === 'Cancelled'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    <Truck className="w-3.5 h-3.5" /> {order.status}
                  </span>

                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" /> Track Details
                  </button>
                </div>
              </div>

              {/* Items in order */}
              <div className="divide-y divide-stone-100">
                {order.items.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-12 object-contain rounded-xl border border-stone-200 p-1 bg-stone-50 shrink-0"
                      />
                      <div>
                        <p className="font-bold text-stone-900 line-clamp-1">{item.product.name}</p>
                        <p className="text-stone-500 text-[11px]">
                          Brand: <strong>{item.product.brand}</strong> • Qty: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono font-bold text-stone-900">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-2xs">
          <Package className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-900 font-serif-luxury">No Orders Placed Yet</h3>
          <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
            Once you complete a purchase, your real-time tracking details will appear here.
          </p>
          <Link
            to="/products"
            className="inline-block mt-4 bg-stone-900 text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs"
          >
            Start Shopping
          </Link>
        </div>
      )}

      {/* TRACKING TIMELINE MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 animate-fade-in relative text-left">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1 font-bold text-xs"
            >
              ✕ Close
            </button>

            <h3 className="text-lg font-bold font-serif-luxury text-stone-900 mb-1">
              Order Timeline #{selectedOrder.id}
            </h3>
            <p className="text-xs text-stone-500 mb-4">Tracking Code: <strong className="font-mono text-stone-900">{selectedOrder.trackingNumber}</strong></p>

            {/* TIMELINE LIST */}
            <div className="space-y-4 relative pl-6 border-l-2 border-amber-300 my-4 text-xs">
              {selectedOrder.timeline.map((stepItem, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-2 border-white ${
                    stepItem.completed ? 'bg-amber-600' : 'bg-stone-300'
                  }`} />
                  <p className={`font-bold ${stepItem.completed ? 'text-stone-900' : 'text-stone-400'}`}>
                    {stepItem.title}
                  </p>
                  <p className="text-[10px] text-stone-500">{stepItem.date}</p>
                </div>
              ))}
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 mt-4">
              <span className="font-bold text-stone-900 block mb-1">Delivery Address:</span>
              <p>{selectedOrder.deliveryAddress.street}, {selectedOrder.deliveryAddress.city} - {selectedOrder.deliveryAddress.pincode}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
