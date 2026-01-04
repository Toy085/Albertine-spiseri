import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

let db;

export function getDB() {
    if (db) return db;

    // Define the path to your database file
    // In SvelteKit/Vercel, we target the root-level src folder
    const dbPath = path.resolve(process.cwd(), 'src/lib/db/database.db');

    // Ensure the directory exists (useful for local dev)
    const dbDir = path.dirname(dbPath);
    if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true });
    }

    try {
        // This opens the file directly. No WASM needed!
        db = new Database(dbPath, { verbose: console.log });
        
        // Optimize for performance
        db.pragma('journal_mode = WAL');
    } catch (err) {
        console.error("Failed to connect to SQLite:", err);
        // Fallback to in-memory if file fails
        db = new Database(':memory:');
    }

    // Initialize the table
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