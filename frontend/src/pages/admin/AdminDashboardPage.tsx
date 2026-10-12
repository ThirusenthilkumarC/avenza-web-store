import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminApi } from '../../services/api';
import {
  DollarSign,
  ShoppingBag,
  Users,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  RefreshCw,
  Clock,
  Package
} from 'lucide-react';
import { SEO } from '../../components/SEO';

interface AdminStats {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  lowStockCount: number;
  recentOrders: Array<{
    id: string;
    finalAmount: number;
    status: string;
    date: string;
    customerName: string;
    customerEmail: string;
  }>;
}

export const AdminDashboardPage: React.FC = () => {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await adminApi.getStats();
      setStats(data);
    } catch (err: any) {
      console.error('[Admin Dashboard Fetch Error]', err);
      setError(err.message || 'Failed to load executive statistics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

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
        title="Admin Executive Dashboard | AVENZA Luxury Marketplace"
        description="Monitor luxury sales, platform revenue, order fulfillment, and stock status."
      />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-serif-luxury text-stone-900">
            Platform Executive Overview
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Real-time telemetry and order dispatch pipelines for AVENZA Luxury Marketplace.
          </p>
        </div>

        <button
          onClick={fetchStats}
          disabled={loading}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border border-stone-200 hover:bg-stone-50 text-stone-700 transition-colors self-start sm:self-auto disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Metrics</span>
        </button>
      </div>

      {error && (
        <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl p-4 text-xs font-medium">
          {error}
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Gross Platform Sales</p>
            <h3 className="text-2xl font-bold font-serif-luxury text-stone-900 mt-1">
              ₹{(stats?.totalRevenue || 0).toLocaleString('en-IN')}
            </h3>
            <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" /> Live Gross Volume
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Total Orders</p>
            <h3 className="text-2xl font-bold font-serif-luxury text-stone-900 mt-1">
              {(stats?.totalOrders || 0).toLocaleString()}
            </h3>
            <p className="text-[10px] text-stone-500 font-medium mt-1">
              Processed through database
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
        </div>

        {/* Total Customers */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Verified Customers</p>
            <h3 className="text-2xl font-bold font-serif-luxury text-stone-900 mt-1">
              {(stats?.totalCustomers || 0).toLocaleString()}
            </h3>
            <p className="text-[10px] text-stone-500 font-medium mt-1">
              Registered patron accounts
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Low Stock Inventory</p>
            <h3 className="text-2xl font-bold font-serif-luxury text-stone-900 mt-1">
              {(stats?.lowStockCount || 0).toLocaleString()}
            </h3>
            <p className="text-[10px] text-rose-600 font-bold flex items-center gap-1 mt-1">
              <AlertTriangle className="w-3 h-3" /> ≤ 5 Units Remaining
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
            <Package className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Recent Orders Feed */}
      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-stone-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-stone-900 font-serif-luxury">Recent Client Orders</h2>
            <p className="text-[11px] text-stone-500">Live order fulfillment stream across luxury departments</p>
          </div>
          <Link
            to="/admin/orders"
            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
          >
            <span>View All Orders</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 text-stone-500 font-semibold uppercase tracking-wider text-[10px] border-b border-stone-100">
              <tr>
                <th className="px-5 py-3">Order ID</th>
                <th className="px-5 py-3">Client</th>
                <th className="px-5 py-3">Timestamp</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-800">
              {stats?.recentOrders && stats.recentOrders.length > 0 ? (
                stats.recentOrders.map(order => (
                  <tr key={order.id} className="hover:bg-stone-50/60 transition-colors">
                    <td className="px-5 py-3.5 font-bold font-mono text-stone-900">
                      {order.id}
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="font-semibold text-stone-900">{order.customerName}</p>
                      <p className="text-[11px] text-stone-500">{order.customerEmail}</p>
                    </td>
                    <td className="px-5 py-3.5 text-stone-500 flex items-center gap-1.5 mt-2 sm:mt-0">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{new Date(order.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusBadge(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right font-bold text-stone-900 font-serif-luxury">
                      ₹{order.finalAmount.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-stone-400">
                    {loading ? 'Retrieving live orders...' : 'No orders recorded in system yet.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
