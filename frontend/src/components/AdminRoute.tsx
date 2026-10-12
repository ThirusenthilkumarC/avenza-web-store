import React from 'react';
import { Navigate, Outlet, useLocation, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ShieldAlert, ArrowLeft, KeyRound } from 'lucide-react';

export const AdminRoute: React.FC = () => {
  const { currentUser } = useShop();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (currentUser.role !== 'admin') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-amber-200 shadow-xl text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold font-serif-luxury text-stone-900 mb-2">
            Administrator Access Required
          </h2>
          <p className="text-xs text-stone-600 mb-6 leading-relaxed">
            You are signed in as <strong>{currentUser.email}</strong> ({currentUser.role || 'customer'}). 
            Administrative clearance is required to view the management console.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              className="bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 text-xs font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" /> Sign In as Admin
            </Link>
            <Link
              to="/"
              className="border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Storefront
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
};
