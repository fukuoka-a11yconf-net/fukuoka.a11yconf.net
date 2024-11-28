<script>
	import Header from '$lib/components/header.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Main from '$lib/components/main.svelte';
	import Section from '$lib/components/section.svelte';
	import TextBody from '$lib/components/text-body.svelte';
</script>

<svelte:head>
	<title>タイムテーブル | アクセシビリティカンファレンス福岡2024</title>
</svelte:head>

<Header />

<Main>
	<Section width="narrow">
		<Heading level={1}>サウンドロゴ</Heading>
		<div class="sound-logo">
			<video controls>
				<track kind="captions" src="/media/sound-logo.vtt" />
				<source src="/media/sound-logo.mp4" type="video/mp4" />
			</video>
		</div>
	</Section>
</Main>

<style>
    .sound-logo {
        width: 100%;
        display: flex;
        justify-content: center;
				margin-bottom: 2rem;
    }

    .sound-logo video {
        width: 100%;
        border: 3px solid var(--color-border-primary);
    }
</style>
