import { Router } from 'express';
import { db } from '../db/index.js';
import { authRequired, adminRequired } from '../middleware/auth.js';
export const adminRouter = Router();
// All admin routes require authentication and admin role
adminRouter.use(authRequired, adminRequired);
// GET /api/admin/stats
adminRouter.get('/stats', (_req, res) => {
    try {
        const revStmt = db.prepare("SELECT COALESCE(SUM(final_amount), 0) as totalRevenue, COUNT(*) as totalOrders FROM orders WHERE status != 'Cancelled'");
        const rev = revStmt.get();
        const custStmt = db.prepare("SELECT COUNT(*) as totalCustomers FROM users WHERE role = 'customer'");
        const cust = custStmt.get();
        const stockStmt = db.prepare('SELECT COUNT(*) as lowStockCount FROM products WHERE stock <= 5');
        const stock = stockStmt.get();
        const recentStmt = db.prepare(`
      SELECT o.id, o.final_amount, o.status, o.created_at, u.name as customer_name, u.email as customer_email
      FROM orders o
      JOIN users u ON o.user_id = u.id
      ORDER BY o.created_at DESC
      LIMIT 6
    `);
        const recentOrders = recentStmt.all();
        const stats = {
            totalRevenue: rev.totalRevenue,
            totalOrders: rev.totalOrders,
            totalCustomers: cust.totalCustomers,
            lowStockCount: stock.lowStockCount,
            recentOrders: recentOrders.map(r => ({
                id: r.id,
                finalAmount: r.final_amount,
                status: r.status,
                date: r.created_at,
                customerName: r.customer_name,
                customerEmail: r.customer_email
            }))
        };
        res.json({
            stats,
            ...stats
        });
    }
    catch (err) {
        console.error('[Admin Stats Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve admin stats' });
    }
});
// GET /api/admin/orders
adminRouter.get('/orders', (_req, res) => {
    try {
        const stmt = db.prepare(`
      SELECT 
        o.*,
        u.name as customer_name,
        u.email as customer_email,
        u.phone as customer_phone
      FROM orders o
      JOIN users u ON o.user_id = u.id
      ORDER BY o.created_at DESC
    `);
        const rows = stmt.all();
        const getItemsStmt = db.prepare(`
      SELECT oi.*, p.name, p.brand, p.category 
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    `);
        const orders = rows.map(r => {
            const items = getItemsStmt.all(r.id);
            return {
                id: r.id,
                date: r.created_at,
                customerName: r.customer_name,
                customerEmail: r.customer_email,
                customerPhone: r.customer_phone,
                totalAmount: r.total_amount,
                discountAmount: r.discount_amount,
                finalAmount: r.final_amount,
                status: r.status,
                paymentMethod: r.payment_method,
                paymentStatus: r.payment_status,
                deliveryAddress: typeof r.delivery_address_json === 'string' ? JSON.parse(r.delivery_address_json) : r.delivery_address_json,
                trackingNumber: r.tracking_number,
                timeline: typeof r.timeline_json === 'string' ? JSON.parse(r.timeline_json) : r.timeline_json,
                items: items.map(i => ({
                    id: i.id,
                    name: i.name,
                    brand: i.brand,
                    price: i.price,
                    quantity: i.quantity,
                    selectedSize: i.selected_size,
                    selectedColor: i.selected_color
                }))
            };
        });
        res.json({ orders, total: orders.length });
    }
    catch (err) {
        console.error('[Admin Orders Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve orders' });
    }
});
// PATCH /api/admin/orders/:id/status
adminRouter.patch('/orders/:id/status', (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!status) {
            res.status(400).json({ error: 'Validation Error', message: 'Status is required' });
            return;
        }
        const orderStmt = db.prepare('SELECT timeline_json FROM orders WHERE id = ?');
        const order = orderStmt.get(String(id));
        if (!order) {
            res.status(404).json({ error: 'Not Found', message: 'Order not found' });
            return;
        }
        const timeline = typeof order.timeline_json === 'string' ? JSON.parse(order.timeline_json) : order.timeline_json;
        if (status === 'Packed & Dispatched' || status === 'Dispatched') {
            if (timeline[1]) {
                timeline[1].completed = true;
                timeline[1].date = 'Today';
            }
        }
        else if (status === 'Out for Delivery') {
            if (timeline[1]) {
                timeline[1].completed = true;
                timeline[1].date = 'Today';
            }
            if (timeline[2]) {
                timeline[2].completed = true;
                timeline[2].date = 'Today';
            }
        }
        else if (status === 'Delivered') {
            if (timeline[1]) {
                timeline[1].completed = true;
                timeline[1].date = 'Today';
            }
            if (timeline[2]) {
                timeline[2].completed = true;
                timeline[2].date = 'Today';
            }
            if (timeline[3]) {
                timeline[3].completed = true;
                timeline[3].date = 'Today';
            }
        }
        const updateStmt = db.prepare('UPDATE orders SET status = ?, timeline_json = ? WHERE id = ?');
        updateStmt.run(String(status), JSON.stringify(timeline), String(id));
        res.json({ message: 'Order status updated successfully', id, status });
    }
    catch (err) {
        console.error('[Admin Update Order Status Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to update order status' });
    }
});
// GET /api/admin/users
adminRouter.get('/users', (_req, res) => {
    try {
        const stmt = db.prepare('SELECT id, email, name, phone, role, membership_tier, created_at FROM users ORDER BY created_at DESC');
        const rows = stmt.all();
        const users = rows.map(r => ({
            id: r.id,
            email: r.email,
            name: r.name,
            phone: r.phone,
            role: r.role,
            membershipTier: r.membership_tier,
            joinedDate: new Date(r.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        }));
        res.json({ users, total: users.length });
    }
    catch (err) {
        console.error('[Admin Users Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve users' });
    }
});
