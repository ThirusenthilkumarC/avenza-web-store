import { DatabaseSync } from 'node:sqlite';
import fs from 'fs';
import path from 'path';
import { config } from '../config.js';
import { initSchemaSQL } from './schema.js';
const dbDir = path.dirname(config.dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}
export const db = new DatabaseSync(config.dbPath);
// Enable foreign keys and WAL mode for high concurrency
db.exec('PRAGMA foreign_keys = ON;');
db.exec('PRAGMA journal_mode = WAL;');
// Initialize tables and indexes
db.exec(initSchemaSQL);
console.log(`[Avenza Database] SQLite initialized successfully at: ${config.dbPath}`);
