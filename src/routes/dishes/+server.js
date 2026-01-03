import { getDB } from '$lib/db/index.js';

export async function GET() {
    const db = await getDB();
    const result = db.exec('SELECT * FROM dishes');

    const dishes = result.length
        ? result[0].values.map(row => ({
            id: row[0],
            name: row[1],
            description: row[2],
            image: row[3],
            price: row[4]
        }))
        : [];

    return new Response(JSON.stringify(dishes), {
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST({ request }) {
    const db = await getDB();
    const { name, description, image, price } = await request.json();

    const stmt = db.prepare('INSERT INTO dishes (name, description, image, price) VALUES (?, ?, ?, ?)');
    stmt.run([name, description, image, price]);

    return new Response(JSON.stringify({ success: true }));
}
