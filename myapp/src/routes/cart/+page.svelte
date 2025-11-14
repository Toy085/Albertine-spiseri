<script lang="ts">
    import { cart } from '$lib/stores/cart';
    import MenuItem from '$lib/menuItemCart.svelte';
    export let data;
    const dishes = data.dishes;

    import image from '$lib/assets/2_18A_FL_FastFood_400x400.webp';
    let price = 2;
    let ItemName = "ItemName";
    let ItemDes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nisl consequat risus aliquet efficitur. Sed cursus metus non neque congue, ut fermentum leo imperdiet";
    let loading = false;
    let amount = 1;
    $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>
<h1>Your Cart</h1>

{#if $cart.length === 0}
    <p>Cart is empty</p>
{:else}
    <ul>
    {#each $cart as item (item.name)}
        <MenuItem 
        id={item.id}
    price={item.price} 
    image={item.image} 
    name={item.name} 
    description={item.description} 
    {loading} 
    amount={item.quantity}/>
    {/each}
    </ul>

    <p><strong>Total: {total} kr</strong></p>
    <button class="btn btn-danger" on:click={() => cart.clear()}>Clear Cart</button>
    <button class="btn btn-primary" on:click={() => alert(`Total price: ${total} kr`)}>Checkout</button>
{/if}