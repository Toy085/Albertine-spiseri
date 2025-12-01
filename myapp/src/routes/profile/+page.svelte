<script lang="ts">
    let name = '';
    let description = '';
    let image = '';
    let price: number;
    let userType = 'admin'; // This would typically come from user session data

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
    
    userType = 'admin'; // Change this value to 'admin', 'customer', 'restaurant', or '' to test different views
</script>
<h1>Profile Page</h1>

{#if userType === 'admin'}
<form on:submit|preventDefault={addDish} class="dishAddForm">
    <div class="form-floating mb-3">
        <input class="form-control" id="name" placeholder="Burger" bind:value={name} required />
        <label for="name" class="form-label">Name of dish</label>
    </div>
    <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Description" id="description" bind:value={description} required></textarea>
        <label for="description" class="form-label">Description of dish</label>
    </div>
    <div class="form-floating mb-3">
        <input class="form-control" placeholder="Image URL" id="imageURL" bind:value={image} required />
        <label for="imageURL" class="form-label">Image URL of dish</label>
    </div>
    <div class="form-floating mb-3">
    <input class="form-control" placeholder="Price" type="number" id="price" bind:value={price} required />
    <label for="price" class="form-label">Price of dish</label>
    </div>

    <button class="btn btn-primary" type="submit">Add Dish</button>
</form>
{:else if userType === 'customer'}
    <p>Customer profile page will come soon, under work</p>
{:else if userType === 'restaurant'}
    <p>Will come soon, under work</p>
{:else}
    <p>Please <a href="/login">login</a></p>
{/if}

<style>
    .dishAddForm {
        max-width: 600px;
        margin-top: 20px;
        margin: 0 auto;
        margin-bottom: 5px;
    }
</style>