import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

let db;

export function getDB() {
    if (db) return db;

    const isProd = process.env.NODE_ENV === 'production';
    
    const dbPath = isProd 
        ? '/data/database.db' 
        : path.resolve(process.cwd(), 'src/lib/db/database.db');

    const dbDir = path.dirname(dbPath);
    if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true });
    }

    try {
        db = new Database(dbPath);
        db.pragma('journal_mode = WAL');
    } catch (err) {
        console.error("Failed to connect to SQLite:", err);
        db = new Database(':memory:'); 
    }

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