import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-4 shadow-sm animate-pulse flex flex-col justify-between h-[380px]">
      <div>
        <div className="w-full h-48 bg-stone-200/70 rounded-xl mb-4" />
        <div className="h-3 bg-stone-200/70 rounded w-1/3 mb-2" />
        <div className="h-4 bg-stone-200/70 rounded w-3/4 mb-3" />
        <div className="h-3 bg-stone-200/70 rounded w-1/2 mb-4" />
      </div>
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
        <div className="h-5 bg-stone-200/70 rounded w-1/3" />
        <div className="h-9 bg-stone-200/70 rounded-lg w-24" />
      </div>
    </div>
  );
};
