<script lang="ts">
   import image from './assets/white.jpg';
   let props = $props();
   let loading = props.loading || false;
   //import image from '$lib/assets/2_18A_FL_FastFood_400x400.webp'
   function addToCart() {
      alert("Sorry, can't add to cart")
   }
</script>

{#if loading}
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
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true">Order</a>
  </div>
</div>
{:else}
   <div class="card">
  <img class="card-img-top" alt={props.ItemName} src={props.image}>

  <div class="card-body">
    <h5 class="card-title">{props.ItemName}</h5>
    <p class="card-text">{props.ItemDes}</p>
    <a on:click={addToCart} class="btn btn-primary">Order</a>
  </div>
</div>
{/if}

<style>
   .card {
      width: 18rem;
      background-color: var(--primary-color);
      border-radius: 5px;
      margin: 15px;
      padding: 10px;
   }
   .card-img-top {
      border-radius: 10px;
   }
</style>




<!-- OLD -->
<!--<div>
    <img src={props.image} alt="Food" class="image">
    <h1 class="ItemName">{props.ItemName}</h1>
    <h6 class="ItemDes">{props.ItemDes}<a href="/">read more.</a></h6>
    <h5 class="PRICE">{props.price} {props.currency}</h5>
    <md-filled-tonal-button class="ItemOrderButton" on:click={addToCart}>Add to Cart</md-filled-tonal-button>
 </div>   

<style>
   div {
      background-color: var(--primary-color);
      border-radius: 5px;
      max-width: 200px;
      min-width: 12%;
      width: auto;
      min-height: 12%;
      max-height: 375px;
      height: auto;
      padding: 10px 5px;
      margin: 15px;
   }
   .image {
      width: 100px;
      height: auto;
      margin: auto;
      border-radius: 10px;
   }
   .PRICE {
      text-align: left;
      font-size: 15px;
   }
   .ItemName {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
   }
   .ItemDes {
      margin: 6px;
      margin-bottom: 2px;
      font-family: 'Ubuntu', sans-serif, system-ui, Arial, 'Times New Roman', Times, serif;
      max-height: 100px;
      height: auto;
      overflow: scroll;
      font-size: small;
   }
   .ItemOrderButton {
      background-color: var(--secondary-color);
      width: 100px;
      margin: 5px;
      text-align: center;
   }
</style>-->
