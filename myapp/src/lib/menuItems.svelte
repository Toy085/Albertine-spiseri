<script lang="ts">
   let props = $props();
   //import image from '$lib/assets/2_18A_FL_FastFood_400x400.webp'
   function addToCart() {
      alert("Sorry, can't add to cart")
   }
</script>

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
</style>

<div>
    <img src={props.image} alt="Food" class="image">
    <h1 class="ItemName">{props.ItemName}</h1>
    <h6 class="ItemDes">{props.ItemDes}<a href="/">read more.</a></h6>
    <h5 class="PRICE">{props.price} {props.currency}</h5>
    <md-filled-tonal-button class="ItemOrderButton" on:click={addToCart}>Add to Cart</md-filled-tonal-button>
 </div>   
