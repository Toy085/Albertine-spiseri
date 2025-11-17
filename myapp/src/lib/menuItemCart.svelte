<script lang="ts">
   import { cart } from '$lib/stores/cart';
   let props = $props();
   
   let id = props.id
   function handleRemove() {
      cart.removeItem(id); // remove by id
}

</script>

<div class="card">
  <img class="card-img-top" alt={props.name} src={props.image}>

  <div class="card-body">
    <h5 class="card-title">{props.name} x {props.amount}</h5>
    <p class="card-text">{props.description}</p>
    <h6 class="card-subtitle mb-2">{props.price} kr</h6>
    <a onclick={handleRemove} type="button" class="btn btn-danger">Remove</a>
  </div>
</div>

<style>
   * {
      color: var(--bs-light-text-emphasis);
   }
   .card {
  display: flex;           /* makes children lay out in a row */
  flex-direction: row;     /* horizontal layout */
  align-items: center;     /* vertically center items */
  width: auto;
  max-width: 75%;
  background-color: var(--primary-color);
  border-radius: 5px;
  margin: 15px;
  padding: 10px;
  gap: 15px;               /* space between image and text */
}
   .card-img-top {
      border-radius: 12px;
      height: 5rem;
      width: auto;
      object-fit: cover;
      flex-shrink: 0;
   }
</style>