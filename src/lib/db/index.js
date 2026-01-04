import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

let db;

export function getDB() {
    if (db) return db;

    // 1. Use the /tmp directory for production, or local path for development
    const isProd = process.env.NODE_ENV === 'production';
    const dbPath = isProd 
        ? '/tmp/database.db' 
        : path.resolve(process.cwd(), 'src/lib/db/database.db');

    try {
        // 2. Open the database
        db = new Database(dbPath);
        
        // 3. Performance optimization for SQLite
        db.pragma('journal_mode = WAL');
    } catch (err) {
        console.error("Failed to connect to SQLite:", err);
        db = new Database(':memory:'); // Fallback to memory
    }

    // 4. Always ensure the table exists
    db.exec(`
        CREATE TABLE IF NOT EXISTS dishes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            image TEXT NOT NULL,
            price REAL NOT NULL
        );
    `);

    return db;
}