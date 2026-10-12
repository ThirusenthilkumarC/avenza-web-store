import React, { useState, useEffect } from 'react';
import { categoriesApi } from '../../services/api';
import type { Category } from '../../types';
import { Plus, RefreshCw, X, Image as ImageIcon } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const AdminCategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    iconName: 'Sparkles',
    subtitle: 'Curated luxury craftsmanship',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
    count: 0
  });

  const loadCategories = async () => {
    try {
      setLoading(true);
      const res = await categoriesApi.getAll();
      setCategories(res.categories || []);
    } catch (err: any) {
      console.error('[Admin Categories Load Error]', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await categoriesApi.create(formData);
      setFeedback(`Category "${formData.name}" added successfully`);
      setIsModalOpen(false);
      loadCategories();
      setTimeout(() => setFeedback(null), 3000);
    } catch (err: any) {
      alert(`Failed to save category: ${err.message}`);
    }
  };

  return (
    <div className="space-y-6 text-left">
      <SEO
        title="Department Taxonomy | AVENZA Admin"
        description="Curate luxury departmental taxonomy and product categorization."
      />

      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-serif-luxury text-stone-900">
            Departments & Taxonomy
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Active luxury departments: <strong>{categories.length} departments</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadCategories}
            className="p-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-600 transition-colors"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>New Department</span>
          </button>
        </div>
      </div>

      {feedback && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-semibold">
          {feedback}
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl border border-stone-200/80 p-4 shadow-xs flex flex-col justify-between hover:border-amber-400/60 transition-colors"
          >
            <div>
              <div className="h-32 rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-200/60">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-400">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                )}
              </div>
              <h3 className="font-bold text-stone-900 text-sm font-serif-luxury">{cat.name}</h3>
              <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">{cat.subtitle}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
              <span className="font-mono text-stone-400">/{cat.slug}</span>
              <span className="bg-stone-100 font-bold px-2 py-0.5 rounded-full text-stone-700">
                {cat.count} items
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
              <h3 className="font-bold font-serif-luxury text-stone-900 text-base">New Category</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Department Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => {
                    const name = e.target.value;
                    const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
                    setFormData({ ...formData, name, slug });
                  }}
                  placeholder="e.g. Fine Jewelry"
                  className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Slug URL</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={e => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="fine-jewelry"
                  className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600 font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Artisanal gemstones and handcrafted gold"
                  className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Cover Image URL</label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={e => setFormData({ ...formData, image: e.target.value })}
                  className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 px-5 py-2.5 rounded-xl font-bold transition-colors"
                >
                  Add Department
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
