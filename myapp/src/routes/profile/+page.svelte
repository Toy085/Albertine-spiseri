<script lang="ts">
    let name = '';
    let description = '';
    let image = '';
    let price: number;
    let admin: boolean;
    admin = true;

    async function addDish() {
        const res = await fetch('/dishes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, description, image, price })
        });

        if (res.ok) {
            alert('Dish added!');
            location.reload(); // reload page to see new dish
        } else {
            const err = await res.json();
            alert('Error: ' + err.error);
        }
    }
</script>
<h1>Profile Page</h1>

{#if admin}
<form on:submit|preventDefault={addDish}>
    <input placeholder="Name" bind:value={name} required />
    <input placeholder="Description" bind:value={description} required />
    <input placeholder="Image URL" bind:value={image} required />
    <input placeholder="Price" type="number" bind:value={price} required />

    <button type="submit">Add Dish</button>
</form>
{/if}

<style>

</style>