import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'cartItems';

export type CartItem = {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
};

function createCart() {
    const { subscribe, update } = writable<CartItem[]>([]);

    return {
        subscribe,
        addItem: (item: Omit<CartItem, 'quantity'>, qty = 1) => {
            update((items) => {
                const idx = items.findIndex(i => i.name === item.name);
                if (idx > -1) {
                    // Item exists → increment quantity
                    const copy = [...items];
                    copy[idx].quantity += qty;
                    return copy;
                }
                return [...items, { ...item, quantity: qty }];
            });
        },
        removeItem: (name: string) => {
            update(items => items.filter(i => i.name !== name));
        },
        clear: () => update(() => [])
    };
}

export const cart = createCart();