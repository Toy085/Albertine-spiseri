import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';

let db;

export async function getDB() {
    if (db) return db;

    // IMPORTANT: This specific line tells Vercel's bundler 
    // to include this file in the 'NFT' trace.
    const wasmPath = path.join(process.cwd(), 'src/lib/db/sql-wasm.wasm');
    
    // We 'dummy read' the directory or file to ensure the bundler includes it
    if (!fs.existsSync(wasmPath)) {
        throw new Error(`WASM file not found at ${wasmPath}`);
    }

    const SQL = await initSqlJs({
        // We pass the absolute path string directly
        locateFile: () => wasmPath
    });

    const dbPath = path.join(process.cwd(), 'src/lib/db/database.db');

    try {
        if (fs.existsSync(dbPath)) {
            const filebuffer = fs.readFileSync(dbPath);
            db = new SQL.Database(filebuffer);
        } else {
            db = new SQL.Database();
        }
    } catch (err) {
        db = new SQL.Database(); 
    }

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