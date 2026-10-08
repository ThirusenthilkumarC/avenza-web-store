import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MobileBottomNav } from '../components/MobileBottomNav';
import { Toast } from '../components/Toast';
import { NotificationSystem } from '../components/NotificationSystem';
import { QuickViewModal } from '../components/QuickViewModal';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-200 selection:text-stone-900">
      <div>
        <Header />
        <main className="pb-12">
          <Outlet />
        </main>
      </div>

      <Footer />
      
      {/* Fixed UI Overlays */}
      <MobileBottomNav />
      <Toast />
      <NotificationSystem />
      <QuickViewModal />
    </div>
  );
};
