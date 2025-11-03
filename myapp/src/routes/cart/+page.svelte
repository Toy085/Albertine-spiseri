<script lang="ts">
    import MenuItemCart from "$lib/menuItemCart.svelte";
    import image from '$lib/assets/2_18A_FL_FastFood_400x400.webp';
    let price = 2;
    let ItemName = "ItemName";
    let ItemDes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nisl consequat risus aliquet efficitur. Sed cursus metus non neque congue, ut fermentum leo imperdiet"
    let currency = "kr"
</script>

<MenuItemCart {price} {image} {ItemName} {ItemDes} {currency}/>