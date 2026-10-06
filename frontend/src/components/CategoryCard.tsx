import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Category } from '../types';
import {
  Smartphone,
  Laptop,
  Shirt,
  Sparkles,
  Home,
  Coffee,
  Dumbbell,
  Gamepad2,
  BookOpen,
  Car,
  Dog,
  HeartPulse,
  Watch,
  ShoppingBag,
  Utensils,
  Glasses
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Smartphone,
  Laptop,
  Shirt,
  Sparkles,
  Home,
  Coffee,
  Dumbbell,
  Gamepad2,
  BookOpen,
  Car,
  Dog,
  HeartPulse,
  Watch,
  ShoppingBag,
  Utensils,
  Glasses
};

export const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  const navigate = useNavigate();
  const IconComponent = iconMap[category.iconName] || ShoppingBag;

  return (
    <div
      onClick={() => navigate(`/products/${category.slug}`)}
      className="group bg-white rounded-2xl p-4 border border-stone-200/90 shadow-2xs hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col items-center text-center transform hover:-translate-y-1"
    >
      {/* Circle Icon Badge */}
      <div className="w-14 h-14 rounded-2xl bg-stone-100 group-hover:bg-amber-100 text-stone-700 group-hover:text-amber-900 flex items-center justify-center mb-3 transition-colors shadow-xs">
        <IconComponent className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </div>

      {/* Title */}
      <h3 className="text-xs font-bold text-stone-900 group-hover:text-amber-950 transition-colors line-clamp-1">
        {category.name}
      </h3>

      {/* Subtitle */}
      <p className="text-[11px] text-stone-500 mt-1 line-clamp-1 font-light">
        {category.subtitle}
      </p>

      {/* Count pill */}
      <span className="mt-2 text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md font-semibold group-hover:bg-amber-200/70 group-hover:text-amber-900 transition-colors">
        {category.count}+ items
      </span>
    </div>
  );
};
