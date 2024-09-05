<script>
	import Footer from '$lib/components/footer.svelte';
	import '../global.css';

	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	function reload() {
		if (browser) {
			// @ts-ignore
			window.FONTPLUS.reload(true);
		}
	}

	$: {
		console.log('Transition to:', $page.url.pathname);
		reload();
	}
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
