import React, { useState, useEffect } from 'react';
import { adminApi } from '../../services/api';
import type { User } from '../../types';
import { Search, ShieldCheck, Mail, Phone, RefreshCw } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const AdminUsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await adminApi.getUsers();
      setUsers(res.users || []);
    } catch (err: any) {
      console.error('[Admin Users Load Error]', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 text-left">
      <SEO
        title="Patron Directory | AVENZA Admin"
        description="View registered luxury patrons, membership tiers, and system administrators."
      />

      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-serif-luxury text-stone-900">
            Patron & Staff Directory
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Registered accounts: <strong>{users.length} accounts</strong>
          </p>
        </div>

        <button
          onClick={loadUsers}
          disabled={loading}
          className="p-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-600 transition-colors self-start sm:self-auto"
          title="Refresh"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by patron name or email address..."
            className="w-full pl-10 pr-4 py-2 text-xs border border-stone-200 rounded-xl outline-none focus:border-amber-600"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 text-stone-500 font-semibold uppercase tracking-wider text-[10px] border-b border-stone-100">
              <tr>
                <th className="px-5 py-3">User</th>
                <th className="px-5 py-3">Role</th>
                <th className="px-5 py-3">Privilege Tier</th>
                <th className="px-5 py-3">Contact</th>
                <th className="px-5 py-3 text-right">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredUsers.map(user => {
                const isAdmin = user.role === 'admin';
                return (
                  <tr key={user.id} className="hover:bg-stone-50/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                          isAdmin ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-stone-100 text-stone-700'
                        }`}>
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-stone-900">{user.name}</p>
                          <p className="text-[11px] text-stone-500 font-mono">{user.id}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-3.5">
                      {isAdmin ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                          <ShieldCheck className="w-3 h-3 text-amber-700" /> Administrator
                        </span>
                      ) : (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-stone-100 text-stone-700">
                          Customer
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-3.5">
                      <span className="font-semibold text-stone-800">
                        {user.membershipTier || 'Member'}
                      </span>
                    </td>

                    <td className="px-5 py-3.5 text-stone-600">
                      <p className="flex items-center gap-1.5 text-[11px]">
                        <Mail className="w-3 h-3 text-stone-400" /> {user.email}
                      </p>
                      {user.phone && (
                        <p className="flex items-center gap-1.5 text-[11px] text-stone-400 mt-0.5">
                          <Phone className="w-3 h-3" /> {user.phone}
                        </p>
                      )}
                    </td>

                    <td className="px-5 py-3.5 text-right text-stone-500 text-[11px]">
                      {user.joinedDate || 'Recently'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
