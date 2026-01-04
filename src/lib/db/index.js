import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';

let db;

export async function getDB() {
    if (db) return db;

    // 1. Configure the WASM locator
    const SQL = await initSqlJs({
        locateFile: file => {
            // This points the library to look for the .wasm file 
            // in the same directory as this script.
            return path.join(process.cwd(), 'node_modules/sql.js/dist/', file);
        }
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
        console.error("Database initialization failed:", err);
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