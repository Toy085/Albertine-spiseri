import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';

let db;

export async function getDB() {
    if (db) return db;

    // Vercel-specific path resolution
    const wasmPath = path.resolve(process.cwd(), 'src/lib/db/sql-wasm.wasm');
    const dbPath = path.resolve(process.cwd(), 'src/lib/db/database.db');

    const SQL = await initSqlJs({
        locateFile: () => wasmPath
    });

    try {
        if (fs.existsSync(dbPath)) {
            const filebuffer = fs.readFileSync(dbPath);
            db = new SQL.Database(filebuffer);
        } else {
            console.log("Database file not found, creating new in-memory instance.");
            db = new SQL.Database();
        }
    } catch (err) {
        console.error("Failed to load DB file:", err);
        db = new SQL.Database(); 
    }

    // Initialize table
    db.run(`
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