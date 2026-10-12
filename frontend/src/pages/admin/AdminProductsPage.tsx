import React, { useState, useEffect } from 'react';
import { productsApi, categoriesApi } from '../../services/api';
import type { Product, Category } from '../../types';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  AlertTriangle,
  X,
  RefreshCw,
  Image as ImageIcon
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export const AdminProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: 'Horology',
    price: 0,
    originalPrice: 0,
    stock: 10,
    description: '',
    images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
    delivery: 'Free Express Delivery in 2-3 Days',
    seller: 'AVENZA Atelier'
  });

  const loadData = async () => {
    try {
      setLoading(true);
      const [prodRes, catRes] = await Promise.all([
        productsApi.getAll({ limit: 100 }),
        categoriesApi.getAll().catch(() => ({ categories: [] }))
      ]);
      setProducts(prodRes.products || []);
      setCategories(catRes.categories || []);
    } catch (err: any) {
      console.error('[Admin Products Load Error]', err);
      setStatusMessage({ text: err.message || 'Failed to load catalog', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const openCreateModal = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      brand: '',
      category: categories[0]?.name || 'Horology',
      price: 15000,
      originalPrice: 18000,
      stock: 10,
      description: 'Handcrafted luxury piece curated exclusively for AVENZA patrons.',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      delivery: 'Free Express Delivery in 2-3 Days',
      seller: 'AVENZA Atelier'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (p: Product) => {
    setEditingProduct(p);
    setFormData({
      name: p.name,
      brand: p.brand,
      category: p.category,
      price: p.price,
      originalPrice: p.originalPrice,
      stock: p.stock,
      description: p.description,
      images: p.images && p.images.length > 0 ? p.images : ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      delivery: p.delivery || 'Free Express Delivery in 2-3 Days',
      seller: p.seller || 'AVENZA Atelier'
    });
    setIsModalOpen(true);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await productsApi.update(editingProduct.id, formData);
        setStatusMessage({ text: `Updated "${formData.name}" successfully`, type: 'success' });
      } else {
        await productsApi.create(formData);
        setStatusMessage({ text: `Created "${formData.name}" successfully`, type: 'success' });
      }
      setIsModalOpen(false);
      loadData();
    } catch (err: any) {
      setStatusMessage({ text: err.message || 'Failed to save product', type: 'error' });
    }
  };

  const handleDeleteProduct = async (id: number, name: string) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;
    try {
      await productsApi.delete(id);
      setStatusMessage({ text: `Deleted "${name}"`, type: 'success' });
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err: any) {
      setStatusMessage({ text: err.message || 'Failed to delete product', type: 'error' });
    }
  };

  const handleUpdateStock = async (p: Product, newStock: number) => {
    const clamped = Math.max(0, newStock);
    try {
      await productsApi.update(p.id, { stock: clamped });
      setProducts(prev => prev.map(item => item.id === p.id ? { ...item, stock: clamped } : item));
    } catch (err: any) {
      alert(`Failed to update stock: ${err.message}`);
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    const matchesCat = categoryFilter === 'All' || p.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6 text-left">
      <SEO
        title="Inventory & Catalog Management | AVENZA Admin"
        description="Oversee luxury merchandise, update stock allocations, and manage product catalog."
      />

      {/* Top Action Bar */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-serif-luxury text-stone-900">
            Merchandise & Stock Allocation
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Total active catalog: <strong>{products.length} luxury products</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            className="p-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-600 transition-colors"
            title="Reload Products"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={openCreateModal}
            className="bg-stone-950 hover:bg-amber-600 text-amber-400 hover:text-stone-950 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Luxury Item</span>
          </button>
        </div>
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold flex items-center justify-between ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border border-rose-200 text-rose-900'
          }`}
        >
          <span>{statusMessage.text}</span>
          <button onClick={() => setStatusMessage(null)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by product name or brand..."
            className="w-full pl-10 pr-4 py-2 text-xs border border-stone-200 rounded-xl outline-none focus:border-amber-600"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="text-xs p-2 border border-stone-200 rounded-xl outline-none focus:border-amber-600 bg-white w-full sm:w-auto"
        >
          <option value="All">All Categories</option>
          {categories.map(c => (
            <option key={c.id} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 text-stone-500 font-semibold uppercase tracking-wider text-[10px] border-b border-stone-100">
              <tr>
                <th className="px-5 py-3">Item</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">Stock Units</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredProducts.map(p => {
                const isLow = p.stock <= 5;
                const isOut = p.stock <= 0;
                return (
                  <tr key={p.id} className="hover:bg-stone-50/50 transition-colors">
                    <td className="px-5 py-3.5 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-stone-100 overflow-hidden shrink-0 border border-stone-200/60">
                        {p.images && p.images[0] ? (
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-stone-400">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-stone-900 truncate max-w-[220px]">{p.name}</p>
                        <p className="text-[11px] text-amber-700 font-semibold">{p.brand}</p>
                      </div>
                    </td>

                    <td className="px-5 py-3.5 text-stone-600 font-medium">
                      {p.category}
                    </td>

                    <td className="px-5 py-3.5 font-bold font-serif-luxury text-stone-900">
                      ₹{p.price.toLocaleString('en-IN')}
                    </td>

                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="0"
                          value={p.stock}
                          onChange={e => handleUpdateStock(p, parseInt(e.target.value, 10) || 0)}
                          className="w-16 px-2 py-1 text-xs border border-stone-200 rounded-lg text-center font-bold"
                        />
                        {isOut ? (
                          <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">
                            Sold Out
                          </span>
                        ) : isLow ? (
                          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Low ({p.stock})
                          </span>
                        ) : (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                            Healthy
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="px-5 py-3.5 text-right space-x-2">
                      <button
                        onClick={() => openEditModal(p)}
                        className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
                        title="Edit product"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(p.id, p.name)}
                        className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Delete product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
              <h3 className="font-bold font-serif-luxury text-stone-900 text-lg">
                {editingProduct ? 'Edit Luxury Item' : 'New Luxury Item'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Royal Oak Selfwinding Chronograph"
                  className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Maison / Brand</label>
                  <input
                    type="text"
                    required
                    value={formData.brand}
                    onChange={e => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="e.g. Audemars Piguet"
                    className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600 bg-white"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Selling Price (₹)</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.price}
                    onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">MSRP (₹)</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.originalPrice}
                    onChange={e => setFormData({ ...formData, originalPrice: Number(e.target.value) })}
                    className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Initial Stock</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={formData.stock}
                    onChange={e => setFormData({ ...formData, stock: Number(e.target.value) })}
                    className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Image URL</label>
                <input
                  type="url"
                  required
                  value={formData.images[0] || ''}
                  onChange={e => setFormData({ ...formData, images: [e.target.value] })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2.5 border border-stone-200 rounded-xl outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detailed product story and craftsmanship..."
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
                  {editingProduct ? 'Update Product' : 'Create Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
