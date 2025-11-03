<script lang="ts">
   let props = $props();
</script>

<style>
    div {
      background-color: var(--primary-color);
      border-radius: 5px;
      width: 500px;
      height: auto;
      max-height: 20vh;
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
      margin-left: 5px;
      border-radius: 10px;
      grid-column-start: 1;
      align-self: center;
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
      font-family: 'Ubuntu', sans-serif, system-ui, Arial, 'Times New Roman', Times, serif;
      height: auto;
      overflow: scroll;
      grid-column-start: 2;
   }
   .ItemRemoveButton {
      background-color: red;
      width: 100px;
      margin: 5px;
      text-align: center;
      grid-column-start: 3;
      place-self: end;
      
   }
</style>

<div>
    <img src={props.image} alt="Food" class="image">
    <h1 class="ItemName">{props.ItemName}</h1>
    <h1 class="ItemDes">{props.ItemDes}<a href="/" style="color: blue; text-decoration: underline;">read more.</a></h1>
    <h1 class="PRICE">{props.price} {props.currency}</h1>
    <md-filled-tonal-button class="ItemRemoveButton" on:click={addToCart}>Remove</md-filled-tonal-button>
</div>