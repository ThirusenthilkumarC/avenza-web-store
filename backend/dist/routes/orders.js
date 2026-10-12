import { Router } from 'express';
import { db } from '../db/index.js';
import { authRequired } from '../middleware/auth.js';
export const ordersRouter = Router();
// Helper to format order with items
function formatOrderWithItems(orderRow, itemsRows) {
    const deliveryAddress = typeof orderRow.delivery_address_json === 'string'
        ? JSON.parse(orderRow.delivery_address_json)
        : orderRow.delivery_address_json;
    const timeline = typeof orderRow.timeline_json === 'string'
        ? JSON.parse(orderRow.timeline_json)
        : orderRow.timeline_json;
    return {
        id: orderRow.id,
        orderCode: orderRow.id,
        date: orderRow.created_at,
        totalAmount: orderRow.total_amount,
        discountAmount: orderRow.discount_amount,
        deliveryCharge: orderRow.delivery_charge,
        finalAmount: orderRow.final_amount,
        status: orderRow.status,
        paymentMethod: orderRow.payment_method,
        paymentStatus: orderRow.payment_status,
        deliveryAddress,
        trackingNumber: orderRow.tracking_number,
        estimatedDelivery: orderRow.estimated_delivery,
        timeline,
        items: itemsRows.map(item => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price,
            selectedSize: item.selected_size,
            selectedColor: item.selected_color,
            product: {
                id: item.product_id,
                name: item.name,
                brand: item.brand,
                category: item.category,
                price: item.price,
                images: item.images_json ? JSON.parse(item.images_json) : []
            }
        }))
    };
}
// POST /api/orders (Create Order)
ordersRouter.post('/', authRequired, (req, res) => {
    const userId = req.user.id;
    const { items, deliveryAddress, addressId, paymentMethod = 'UPI (Google Pay)', couponCode } = req.body;
    let finalAddress = deliveryAddress;
    if (!finalAddress && addressId) {
        const addrRow = db.prepare('SELECT * FROM addresses WHERE id = ? AND user_id = ?').get(String(addressId), userId);
        if (addrRow) {
            finalAddress = {
                id: addrRow.id,
                fullName: addrRow.full_name,
                phone: addrRow.phone,
                street: addrRow.address_line_1 + (addrRow.address_line_2 ? ', ' + addrRow.address_line_2 : ''),
                city: addrRow.city,
                state: addrRow.state,
                pincode: addrRow.postal_code,
                country: addrRow.country,
                type: 'Home',
                isDefault: Boolean(addrRow.is_default)
            };
        }
    }
    if (!items || !Array.isArray(items) || items.length === 0) {
        res.status(400).json({ error: 'Validation Error', message: 'Cart items are required to create an order' });
        return;
    }
    if (!finalAddress || !finalAddress.fullName || (!finalAddress.street && !finalAddress.addressLine1)) {
        res.status(400).json({ error: 'Validation Error', message: 'Valid delivery address is required' });
        return;
    }
    try {
        // Start atomic transaction
        db.exec('BEGIN TRANSACTION;');
        let serverTotalAmount = 0;
        const validatedItems = [];
        // 1. Verify stock and recalculate prices from DB
        const getProductStmt = db.prepare('SELECT id, name, price, stock FROM products WHERE id = ?');
        const updateStockStmt = db.prepare('UPDATE products SET stock = stock - ? WHERE id = ?');
        for (const item of items) {
            const pId = Number(item.productId || (item.product && item.product.id));
            const qty = Math.max(1, parseInt(String(item.quantity || 1), 10));
            const product = getProductStmt.get(pId);
            if (!product) {
                db.exec('ROLLBACK;');
                res.status(400).json({ error: 'Invalid Product', message: `Product ID #${pId} not found` });
                return;
            }
            if (product.stock < qty) {
                db.exec('ROLLBACK;');
                res.status(400).json({
                    error: 'Insufficient Stock',
                    message: `Insufficient stock for "${product.name}". Available: ${product.stock}, requested: ${qty}`
                });
                return;
            }
            // Decrement stock
            updateStockStmt.run(qty, pId);
            const itemSubtotal = product.price * qty;
            serverTotalAmount += itemSubtotal;
            validatedItems.push({
                productId: pId,
                quantity: qty,
                serverPrice: product.price,
                selectedSize: item.selectedSize || null,
                selectedColor: item.selectedColor || null,
                productName: product.name
            });
        }
        // 2. Validate coupon if provided
        let serverDiscountAmount = 0;
        if (couponCode) {
            const couponStmt = db.prepare('SELECT * FROM coupons WHERE code = ? AND active = 1');
            const coupon = couponStmt.get(String(couponCode).trim().toUpperCase());
            if (coupon && serverTotalAmount >= coupon.min_order) {
                if (coupon.discount_type === 'fixed') {
                    serverDiscountAmount = Math.min(serverTotalAmount, coupon.discount_value);
                }
                else {
                    serverDiscountAmount = Math.round((serverTotalAmount * coupon.discount_value) / 100);
                    if (coupon.max_discount && serverDiscountAmount > coupon.max_discount) {
                        serverDiscountAmount = coupon.max_discount;
                    }
                }
            }
        }
        // Free delivery for luxury orders above 10,000, else 500
        const deliveryCharge = serverTotalAmount >= 10000 ? 0 : 500;
        const finalAmount = Math.max(0, serverTotalAmount - serverDiscountAmount + deliveryCharge);
        const orderId = `ORD-${Date.now().toString().slice(-6)}`;
        const trackingNumber = `TRK-IN${Math.floor(100000000 + Math.random() * 900000000)}`;
        const now = new Date().toISOString();
        const timeline = [
            { title: 'Order Placed', date: 'Just now', completed: true },
            { title: 'Packed & Dispatched', date: 'Pending', completed: false },
            { title: 'Out for Delivery', date: 'Pending', completed: false },
            { title: 'Delivered', date: 'Pending', completed: false }
        ];
        // 3. Insert order
        const insertOrderStmt = db.prepare(`
      INSERT INTO orders (
        id, user_id, total_amount, discount_amount, delivery_charge, final_amount,
        status, payment_method, payment_status, delivery_address_json,
        tracking_number, estimated_delivery, timeline_json, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, 'Processing', ?, 'Paid', ?, ?, '2-3 Business Days', ?, ?)
    `);
        insertOrderStmt.run(orderId, userId, serverTotalAmount, serverDiscountAmount, deliveryCharge, finalAmount, paymentMethod, JSON.stringify(finalAddress), trackingNumber, JSON.stringify(timeline), now);
        // 4. Insert order items
        const insertItemStmt = db.prepare(`
      INSERT INTO order_items (id, order_id, product_id, quantity, price, selected_size, selected_color)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
        for (const vItem of validatedItems) {
            const itemId = `item-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
            insertItemStmt.run(itemId, orderId, vItem.productId, vItem.quantity, vItem.serverPrice, vItem.selectedSize, vItem.selectedColor);
        }
        // 5. Clear user's cart in DB
        db.prepare('DELETE FROM cart_items WHERE user_id = ?').run(userId);
        // Commit transaction
        db.exec('COMMIT;');
        // Return created order
        const orderRow = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
        const itemsStmt = db.prepare(`
      SELECT oi.*, p.name, p.brand, p.category, p.images_json 
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    `);
        const itemsRows = itemsStmt.all(orderId);
        res.status(201).json({
            message: 'Order created successfully',
            order: formatOrderWithItems(orderRow, itemsRows)
        });
    }
    catch (err) {
        db.exec('ROLLBACK;');
        console.error('[Order Creation Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to process order' });
    }
});
// GET /api/orders/my-orders
ordersRouter.get('/my-orders', authRequired, (req, res) => {
    try {
        const userId = req.user.id;
        const ordersStmt = db.prepare('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC');
        const orderRows = ordersStmt.all(userId);
        const getItemsStmt = db.prepare(`
      SELECT oi.*, p.name, p.brand, p.category, p.images_json 
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    `);
        const result = orderRows.map(order => {
            const items = getItemsStmt.all(order.id);
            return formatOrderWithItems(order, items);
        });
        res.json({ orders: result, myOrders: result });
    }
    catch (err) {
        console.error('[My Orders Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve orders' });
    }
});
// GET /api/orders/:id
ordersRouter.get('/:id', authRequired, (req, res) => {
    try {
        const userId = req.user.id;
        const role = req.user.role;
        const { id } = req.params;
        const orderStmt = db.prepare('SELECT * FROM orders WHERE id = ?');
        const order = orderStmt.get(String(id));
        if (!order) {
            res.status(404).json({ error: 'Not Found', message: 'Order not found' });
            return;
        }
        // Security check: only order owner or admin can view
        if (order.user_id !== userId && role !== 'admin') {
            res.status(403).json({ error: 'Forbidden', message: 'Access denied to this order record' });
            return;
        }
        const itemsStmt = db.prepare(`
      SELECT oi.*, p.name, p.brand, p.category, p.images_json 
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    `);
        const items = itemsStmt.all(String(id));
        const formatted = formatOrderWithItems(order, items);
        res.json({ order: formatted, ...formatted });
    }
    catch (err) {
        console.error('[Order Detail Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve order details' });
    }
});
