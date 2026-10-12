import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../db/index.js';
import { config } from '../config.js';
import { authRequired } from '../middleware/auth.js';
export const authRouter = Router();
// POST /api/auth/register
authRouter.post('/register', async (req, res) => {
    try {
        const { email, password, name, phone } = req.body;
        if (!email || !password || !name) {
            res.status(400).json({ error: 'Validation Error', message: 'Email, password, and name are required' });
            return;
        }
        if (password.length < 6) {
            res.status(400).json({ error: 'Validation Error', message: 'Password must be at least 6 characters long' });
            return;
        }
        const cleanEmail = email.trim().toLowerCase();
        // Check duplicate
        const checkStmt = db.prepare('SELECT id FROM users WHERE email = ?');
        const existing = checkStmt.get(cleanEmail);
        if (existing) {
            res.status(409).json({ error: 'Conflict', message: 'An account with this email address already exists' });
            return;
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const userId = `usr-${Date.now().toString().slice(-6)}`;
        const now = new Date().toISOString();
        const insertStmt = db.prepare(`
      INSERT INTO users (id, email, password_hash, name, phone, role, membership_tier, created_at)
      VALUES (?, ?, ?, ?, ?, 'customer', 'Privilege Gold', ?)
    `);
        insertStmt.run(userId, cleanEmail, passwordHash, name.trim(), phone ? phone.trim() : null, now);
        const token = jwt.sign({ id: userId, email: cleanEmail, name: name.trim(), role: 'customer' }, config.jwtSecret, { expiresIn: '7d' });
        res.status(201).json({
            message: 'Account created successfully',
            token,
            user: {
                id: userId,
                email: cleanEmail,
                name: name.trim(),
                phone: phone ? phone.trim() : null,
                role: 'customer',
                membershipTier: 'Privilege Gold',
                joinedDate: 'Member since 2026'
            }
        });
    }
    catch (err) {
        console.error('[Auth Register Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Registration failed' });
    }
});
// POST /api/auth/login
authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: 'Validation Error', message: 'Email and password are required' });
            return;
        }
        const cleanEmail = email.trim().toLowerCase();
        const findStmt = db.prepare('SELECT * FROM users WHERE email = ?');
        const user = findStmt.get(cleanEmail);
        if (!user) {
            res.status(401).json({ error: 'Unauthorized', message: 'Invalid email or password' });
            return;
        }
        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
            res.status(401).json({ error: 'Unauthorized', message: 'Invalid email or password' });
            return;
        }
        const token = jwt.sign({ id: user.id, email: user.email, name: user.name, role: user.role }, config.jwtSecret, { expiresIn: '7d' });
        res.json({
            message: 'Signed in successfully',
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                phone: user.phone,
                role: user.role,
                membershipTier: user.membership_tier,
                avatar: user.avatar,
                joinedDate: `Member since ${new Date(user.created_at).getFullYear()}`
            }
        });
    }
    catch (err) {
        console.error('[Auth Login Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Login failed' });
    }
});
// GET /api/auth/me
authRouter.get('/me', authRequired, (req, res) => {
    try {
        const findStmt = db.prepare('SELECT id, email, name, phone, role, membership_tier, avatar, created_at FROM users WHERE id = ?');
        const user = findStmt.get(req.user.id);
        if (!user) {
            res.status(404).json({ error: 'Not Found', message: 'User account not found' });
            return;
        }
        res.json({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                phone: user.phone,
                role: user.role,
                membershipTier: user.membership_tier,
                avatar: user.avatar,
                joinedDate: `Member since ${new Date(user.created_at).getFullYear()}`
            }
        });
    }
    catch (err) {
        console.error('[Auth Me Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to fetch user profile' });
    }
});
// PATCH /api/auth/profile
authRouter.patch('/profile', authRequired, (req, res) => {
    try {
        const { name, phone } = req.body;
        if (!name) {
            res.status(400).json({ error: 'Validation Error', message: 'Name is required' });
            return;
        }
        const updateStmt = db.prepare('UPDATE users SET name = ?, phone = ? WHERE id = ?');
        updateStmt.run(name.trim(), phone ? phone.trim() : null, req.user.id);
        res.json({
            message: 'Profile updated successfully',
            user: {
                id: req.user.id,
                email: req.user.email,
                name: name.trim(),
                phone: phone ? phone.trim() : null,
                role: req.user.role
            }
        });
    }
    catch (err) {
        console.error('[Auth Update Profile Error]', err);
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to update profile' });
    }
});
