import React, { useState } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { Logo } from '../../components/Logo';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Layers,
  Users,
  Store,
  LogOut,
  Menu,
  X,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { currentUser, logout } = useShop();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const navItems = [
    { to: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
    { to: '/admin/products', label: 'Products & Inventory', icon: Package },
    { to: '/admin/orders', label: 'Order Management', icon: ShoppingBag },
    { to: '/admin/categories', label: 'Categories', icon: Layers },
    { to: '/admin/users', label: 'User Directory', icon: Users }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 flex flex-col">
      {/* Top Admin Header Bar */}
      <header className="bg-stone-950 text-white border-b border-stone-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-2 text-stone-400 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
              <Logo />
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full ml-2">
                Executive Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/"
              className="hidden sm:flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
            >
              <Store className="w-4 h-4" />
              <span>Back to Storefront</span>
            </Link>

            <div className="h-4 w-px bg-stone-800 hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-xs">
                {currentUser?.name?.charAt(0) || 'A'}
              </div>
              <div className="hidden md:block text-left leading-tight">
                <p className="font-bold text-stone-100 text-xs">{currentUser?.name || 'Administrator'}</p>
                <p className="text-[10px] text-amber-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Master Admin
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 text-stone-400 hover:text-rose-400 transition-colors"
              title="Sign Out"
              aria-label="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 gap-6">
        {/* Desktop Sidebar */}
        <aside className="w-64 shrink-0 hidden lg:block">
          <div className="bg-white rounded-2xl border border-stone-200/80 p-4 shadow-sm sticky top-22">
            <div className="text-[10px] uppercase tracking-wider font-bold text-stone-400 px-3 pb-2 border-b border-stone-100 mb-2">
              Management Console
            </div>

            <nav className="space-y-1">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-stone-950 text-amber-400 shadow-sm'
                          : 'text-stone-600 hover:bg-stone-100 hover:text-stone-950'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-500'}`} />
                          <span>{item.label}</span>
                        </div>
                        {isActive && <ChevronRight className="w-3.5 h-3.5 text-amber-400" />}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            <div className="mt-8 pt-4 border-t border-stone-100">
              <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-left">
                <p className="text-[11px] font-bold text-amber-950">System Status</p>
                <p className="text-[10px] text-amber-800 mt-0.5">SQLite Active • WAL Mode • Server Verified</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-72 bg-white p-5 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                  <Logo />
                  <button onClick={() => setMobileSidebarOpen(false)} className="p-1 text-stone-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navItems.map(item => {
                    const Icon = item.icon;
                    return (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        onClick={() => setMobileSidebarOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold ${
                            isActive ? 'bg-stone-950 text-amber-400' : 'text-stone-700 hover:bg-stone-100'
                          }`
                        }
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </NavLink>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <Link
                  to="/"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-950 py-2"
                >
                  <Store className="w-4 h-4" /> Storefront
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Content Outlet */}
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
