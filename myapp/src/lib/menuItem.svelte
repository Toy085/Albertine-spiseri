<script lang="ts">
   import { cart } from '$lib/stores/cart';
   import image from './assets/white.jpg';
   import { toast } from '@zerodevx/svelte-toast';
   let props = $props();

   function addToCart() {
      cart.addItem({
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            image: props.image
        }, 1);
        toast.push({
         msg: `${props.name} added to cart!`, 
         duration: 2500
      });
   }
</script>

{#if props.loading}
   <div class="card" aria-hidden="true">
  <img src={image} class="card-img-top" alt="loading...">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true">Add to cart</a>
  </div>
</div>
{:else}
   <div class="card">
  <img class="card-img-top" alt={props.name} src={props.image}>

  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.description}</p>
    <h6 class="card-subtitle mb-2">{props.price} kr</h6>
    <a on:click={addToCart} class="btn btn-primary">Add to cart</a>
  </div>
</div>
{/if}

<style>
   * {
      color: var(--bs-light-text-emphasis);
   }
   .card {
      width: 16rem;
      height: auto;
      background-color: var(--primary-color);
      border-radius: 5px;
      margin: 15px;
      padding: 10px;
   }
   .card-img-top {
      border-radius: 12px;
   }
</style>