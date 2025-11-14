import { writable } from 'svelte/store';

type Dish = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
};

type CartItem = Dish & { quantity: number };

function createCart() {
    const { subscribe, update, set } = writable<CartItem[]>([]);

    return {
        subscribe,
        addItem: (dish: Dish, qty = 1) =>
    update(items => {
        const existing = items.find(i => i.id === dish.id); // use id, not name
        if (existing) {
            existing.quantity += qty;
            return [...items];
        }
        return [...items, { ...dish, quantity: qty }];
    }),
    removeItem: (id: number) => update(items => items.filter(i => i.id !== id)), 
        clear: () => set([])
    };
}

export const cart = createCart();
