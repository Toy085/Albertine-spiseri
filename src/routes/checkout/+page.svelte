<script>
    import { goto } from '$app/navigation';
    import { cart } from '$lib/stores/cart';
    import MenuItem from '$lib/menuItemCart.svelte';
    export let data;
    const dishes = data.dishes;

    let formData = {
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        CVC: 0,
        date: ''
    };

    $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    function handleSubmit() {
        alert('Order placed successfully!');
        goto('/');
    }

    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0!
    const yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    // This variable is reactive and used directly in the HTML template
    const todayFormatted = `${yyyy}-${mm}-${dd}`;
</script>

<div class="checkout-container">
    <h1>Checkout</h1>

    <div class="checkout-content">
        <div class="order-summary">
            <h2>Order Summary</h2>
            {#each $cart as item (item.name)}
                <div class="cart-item">
                    <span>{item.name} x {item.quantity}</span>
                    <span>{(item.price * item.quantity).toFixed(2)}kr</span>
                </div>
            {/each}
            <div class="total">
                <strong>Total: {total.toFixed(2)}kr</strong>
            </div>
        </div>

        <form on:submit|preventDefault={handleSubmit}>
            <h2>Information</h2>
            <input type="email" placeholder="Email" bind:value={formData.email} required />
            <input type="text" placeholder="First Name" bind:value={formData.firstName} required />
            <input type="text" placeholder="Last Name" bind:value={formData.lastName} required />

            <h2>Payment Information</h2>
            <input type="text" placeholder="Card Number" aria-label="Disabled" bind:value={formData.cardNumber} disabled />
            <input type="text" placeholder="CVV/CVC" aria-label="Disabled" bind:value={formData.CVC} disabled />
            <input type="month" id="myDateInput" placeholder="Card Expiry Date" aria-label="Disabled" min={todayFormatted} bind:value={formData.date} disabled />

            <button type="submit">Complete Purchase</button>
            <button type="submit" class="vippsButton" on:click={() => alert('Vipps not available')}>VIPPS</button>
        </form>
    </div>
</div>

<style>
    .checkout-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
    }

    .checkout-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .order-summary {
        background: #f5f5f5;
        padding: 1.5rem;
        border-radius: 8px;
    }

    .cart-item {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px solid #ddd;
    }

    .total {
        padding-top: 1rem;
        font-size: 1.2rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    button {
        padding: 0.75rem;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
    }
    .vippsButton {
        background: orange;
    }
    .vippsButton:hover {
        background: rgb(154, 100, 0);
    }

    button:hover {
        background: #0056b3;
    }

    @media (max-width: 768px) {
        .checkout-content {
            grid-template-columns: 1fr;
        }
    }
</style>