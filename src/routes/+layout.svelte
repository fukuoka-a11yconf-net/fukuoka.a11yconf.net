<script>
	import Footer from '$lib/components/footer.svelte';
	import '../global.css';
</script>

<slot />
<footer>
	<Footer />
</footer>

<style>
	footer {
		grid-area: footer;
	}
</style>
