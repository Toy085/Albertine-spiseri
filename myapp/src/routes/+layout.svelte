<script lang="ts">
	import '../app.css';
	import faviconTest from '$lib/assets/albertine-logo-flower.png';
	
	let { children } = $props();
	// @ts-ignore
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/footer.svelte';
	//material ui
	import '@material/web/button/filled-button.js';
	import '@material/web/button/outlined-button.js';
	import '@material/web/checkbox/checkbox.js';
	import '@material/web/button/filled-tonal-button.js'	
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { onMount } from 'svelte';
	onMount(async () => {
		await import('bootstrap/dist/js/bootstrap.bundle.min.js');
	});
</script>

<Nav />



<svelte:head>
	<link rel="icon" href={faviconTest} />
</svelte:head>

{@render children?.()}

<Footer />