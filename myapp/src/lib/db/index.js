import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';

let db;

export async function getDB() {
    if (db) return db;

    const SQL = await initSqlJs();

    const dbPath = path.join(process.cwd(), 'src/lib/db/database.db');

    // Load existing DB or create new
    let filebuffer;
    try {
        filebuffer = fs.readFileSync(dbPath);
        db = new SQL.Database(filebuffer);
    } catch {
        db = new SQL.Database();
    }

    // Create table
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
