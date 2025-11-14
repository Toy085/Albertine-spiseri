import { getDB } from '$lib/db/index.js';

export async function POST({ request }) {
    try {
        const db = await getDB();
        const { name, description, image, price } = await request.json();

        if (!name || !description || !image || price === undefined) {
            return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
        }

        const stmt = db.prepare(
            'INSERT INTO dishes (name, description, image, price) VALUES (?, ?, ?, ?)'
        );
        stmt.run([name, description, image, price]);

        return new Response(JSON.stringify({ success: true }));
    } catch (err) {
        console.error('POST /dishes error:', err);
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
