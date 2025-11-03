<script lang="ts">
   let props = $props();
</script>

<style>
    div {
      background-color: var(--primary-color);
      border-radius: 5px;
      width: 500px;
      height: auto;
      display: grid;
      padding: 10px 5px;
      margin: 15px;
      grid-template-columns: 100px auto auto;
      justify-content: start;
   }
   .image {
      height: auto;
      width: 100px;
      margin: auto;
      border-radius: 10px;
      grid-column-start: 1;
   }
   .PRICE {
      text-align: left;
      font-size: 15px;
   }
   .ItemName {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      grid-column-start: 2;
   }
   .ItemDes {
      margin: 6px;
      margin-bottom: 2px;
      font-family: 'Ubuntu', sans-serif, system-ui, Arial, 'Times New Roman', Times, serif;
      max-height: 100px;
      height: auto;
      overflow: hidden;
      grid-column-start: 2;
   }
   .ItemRemoveButton {
      background-color: red;
      width: 100px;
      margin: 5px;
      text-align: center;
      grid-column-start: 3;
   }
</style>

<div>
    <img src={props.image} alt="Food" class="image">
    <h1 class="ItemName">{props.ItemName}</h1>
    <h1 class="ItemDes">{props.ItemDes}<a href="/">read more.</a></h1>
    <h1 class="PRICE">{props.price} {props.currency}</h1>
    <md-filled-tonal-button class="ItemRemoveButton" on:click={addToCart}>Remove</md-filled-tonal-button>
</div>