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
		<Heading level={4}>実行委員長（ゆうてん）よりコメント</Heading>
		<TextBody>
			<p>
				ロゴはすごく象徴になるものなのに、視覚情報だけのことがほとんどです。
				アクセシビリティカンファレンス福岡のロゴも、視覚だけでしか知覚できないのはなんだか寂しくて、聴覚でも感じてほしい、楽しんでほしい、そんな思いが伝わってほしい。ということで、サウンドロゴに挑戦してみました。
				手探りだけど、イベントとしてできることはやってみる。 ぼくらの考える「つぎ」のひとつです。
			</p>
		</TextBody>
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
		margin: 2rem 0;
	}

	.sound-logo video {
		width: 100%;
		border: 3px solid var(--color-border-primary);
	}
</style>
