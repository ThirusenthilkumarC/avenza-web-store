import React, { useState, useEffect } from 'react';
import { adminApi } from '../../services/api';
import {
  Search,
  RefreshCw,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Truck,
  ShoppingBag
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export const AdminOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const res = await adminApi.getOrders();
      setOrders(res.orders || []);
    } catch (err: any) {
      console.error('[Admin Orders Load Error]', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      await adminApi.updateOrderStatus(orderId, newStatus);
      setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
      setFeedback(`Order #${orderId} status set to "${newStatus}"`);
      setTimeout(() => setFeedback(null), 3000);
    } catch (err: any) {
      alert(`Failed to update status: ${err.message}`);
    }
  };

  const filteredOrders = orders.filter(o => {
    const matchesStatus = statusFilter === 'All' || o.status === statusFilter;
    const matchesSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      (o.customerName && o.customerName.toLowerCase().includes(search.toLowerCase())) ||
      (o.customerEmail && o.customerEmail.toLowerCase().includes(search.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Out for Delivery':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Packed & Dispatched':
      case 'Dispatched':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  return (
    <div className="space-y-6 text-left">
      <SEO
        title="Order Dispatch & Fulfillment | AVENZA Admin"
        description="Fulfill, track, and update shipment progression for luxury client orders."
      />

      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-serif-luxury text-stone-900">
            Order Fulfillment & Logistics
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Tracking and shipment orchestration across luxury couriers.
          </p>
        </div>

        <button
          onClick={loadOrders}
          disabled={loading}
          className="p-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-600 transition-colors self-start sm:self-auto"
          title="Refresh orders"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {feedback && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-semibold">
          {feedback}
        </div>
      )}

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by Order ID, client name, or email..."
            className="w-full pl-10 pr-4 py-2 text-xs border border-stone-200 rounded-xl outline-none focus:border-amber-600"
          />
        </div>

        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="text-xs p-2 border border-stone-200 rounded-xl outline-none focus:border-amber-600 bg-white w-full sm:w-auto font-medium"
        >
          <option value="All">All Statuses</option>
          <option value="Processing">Processing</option>
          <option value="Packed & Dispatched">Packed & Dispatched</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Orders List */}
      <div className="space-y-3">
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => {
            const isExpanded = expandedOrderId === order.id;
            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden transition-all"
              >
                <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-stone-900 text-sm">{order.id}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600">
                      Client: <strong>{order.customerName}</strong> ({order.customerEmail})
                    </p>
                    <p className="text-[11px] text-stone-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Placed on {new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-bold text-stone-400">Total Charged</p>
                      <p className="text-base font-bold font-serif-luxury text-stone-900">
                        ₹{order.finalAmount.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Status Dropdown */}
                      <select
                        value={order.status}
                        onChange={e => handleStatusChange(order.id, e.target.value)}
                        className="text-xs p-2 rounded-xl border border-stone-200 bg-stone-50 font-bold focus:border-amber-600 outline-none"
                      >
                        <option value="Processing">Processing</option>
                        <option value="Packed & Dispatched">Packed & Dispatched</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>

                      <button
                        onClick={() => setExpandedOrderId(isExpanded ? null : order.id)}
                        className="p-2 border border-stone-200 hover:bg-stone-50 rounded-xl text-stone-600 transition-colors"
                        title={isExpanded ? 'Collapse' : 'Expand'}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-stone-100 bg-stone-50/50 p-4 sm:p-5 space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Delivery Address */}
                      <div className="bg-white p-3.5 rounded-xl border border-stone-200/60">
                        <p className="font-bold text-stone-900 flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wider text-stone-500">
                          <MapPin className="w-3.5 h-3.5 text-amber-700" /> Delivery Address
                        </p>
                        <p className="font-semibold text-stone-900">{order.deliveryAddress?.fullName}</p>
                        <p className="text-stone-600 mt-0.5">{order.deliveryAddress?.street}</p>
                        <p className="text-stone-600">
                          {order.deliveryAddress?.city}, {order.deliveryAddress?.state} — {order.deliveryAddress?.pincode}
                        </p>
                        <p className="text-stone-500 text-[11px] mt-1">Phone: {order.deliveryAddress?.phone}</p>
                      </div>

                      {/* Payment & Tracking */}
                      <div className="bg-white p-3.5 rounded-xl border border-stone-200/60">
                        <p className="font-bold text-stone-900 flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wider text-stone-500">
                          <Truck className="w-3.5 h-3.5 text-amber-700" /> Dispatch Telemetry
                        </p>
                        <p className="text-stone-700">
                          Tracking ID: <strong className="font-mono text-stone-900">{order.trackingNumber || 'Pending'}</strong>
                        </p>
                        <p className="text-stone-700 mt-1">
                          Payment Gateway: <strong>{order.paymentMethod}</strong>
                        </p>
                        <p className="text-stone-700 mt-1">
                          Settlement Status: <strong className="text-emerald-700">{order.paymentStatus || 'Paid'}</strong>
                        </p>
                      </div>
                    </div>

                    {/* Ordered Items */}
                    <div>
                      <p className="font-bold text-stone-900 mb-2 text-[11px] uppercase tracking-wider text-stone-500">
                        Ordered Items ({order.items?.length || 0})
                      </p>
                      <div className="divide-y divide-stone-200/60 bg-white rounded-xl border border-stone-200/60 overflow-hidden">
                        {order.items?.map((item: any) => (
                          <div key={item.id} className="p-3 flex items-center justify-between">
                            <div>
                              <p className="font-bold text-stone-900">{item.name}</p>
                              <p className="text-[11px] text-stone-500">
                                {item.brand} • Qty: <strong>{item.quantity}</strong>
                                {item.selectedSize ? ` • Size: ${item.selectedSize}` : ''}
                                {item.selectedColor ? ` • Color: ${item.selectedColor}` : ''}
                              </p>
                            </div>
                            <p className="font-bold text-stone-900 font-serif-luxury">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-2xl border border-stone-200/80 p-12 text-center text-stone-400">
            <ShoppingBag className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-xs">No orders match the current criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};
