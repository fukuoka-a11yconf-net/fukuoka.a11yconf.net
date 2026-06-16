<script>
	import Footer from '$lib/components/footer.svelte';
	import '../global.css';

	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	function reload() {
		if (browser) {
			// @ts-expect-error FONTPLUS is injected globally by an external script
			window.FONTPLUS?.reload(true);
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
