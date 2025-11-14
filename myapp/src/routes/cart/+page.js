export async function load({ fetch }) {
    const res = await fetch('/dishes'); // fetch dishes from API
    const dishes = await res.json();
    return { dishes };
}
