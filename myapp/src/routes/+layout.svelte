<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
	// @ts-ignore
	import Nav from '$lib/Nav.svelte';
	//material ui
	import '@material/web/button/filled-button.js';
	import '@material/web/button/outlined-button.js';
	import '@material/web/checkbox/checkbox.js';
	import '@material/web/button/filled-tonal-button.js'
</script>

<Nav />



<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
