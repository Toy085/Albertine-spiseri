<script lang="ts">
    import MenuItem from '$lib/menuItem.svelte';
    import image from '$lib/assets/2_18A_FL_FastFood_400x400.webp';
    export let data;
    const dishes = data.dishes;

    let price = 2;
    let ItemName = "ItemName";
    let ItemDes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nisl consequat risus aliquet efficitur. Sed cursus metus non neque congue, ut fermentum leo imperdiet";
    let loading = dishes.length === 0;
</script>
<h1>Order smt!</h1>

<div class="menu-container">
{#each dishes as dish}
    <MenuItem 
    id={dish.id}
    price={dish.price}
    image={dish.image}
    name={dish.name}
    description={dish.description}
    {loading}
    />
{/each}
</div>


<style>
    .menu-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; 
    }
</style>