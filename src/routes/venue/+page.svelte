<script>
	import Header from '$lib/components/header.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Main from '$lib/components/main.svelte';
	import Section from '$lib/components/section.svelte';
	import TextBody from '$lib/components/text-body.svelte';
</script>

<svelte:head>
	<title>会場と配信について | アクセシビリティカンファレンス福岡2024</title>
</svelte:head>

<Header />

<Main>
	<Section width="narrow">
		<Heading level={1}>会場と配信について</Heading>
		<Heading level={2}>開催場所</Heading>
		<TextBody>
			<p>
				<em><a href="https://kegojinja.or.jp/saikan/">警固神社 社務所ビル</a></em>
			</p>
			<p>
				〒810-0001 福岡県福岡市中央区天神2-2-20 (<a
					href="https://www.google.com/maps/place/%E8%AD%A6%E5%9B%BA%E7%A5%9E%E7%A4%BE/@33.587788,130.399921,17z/data=!4m6!3m5!1s0x354191855856aaab:0x1a1ab9a2c3e2cfa5!8m2!3d33.5877882!4d130.3999212!16s%2Fg%2F122wnbn2?hl=ja&entry=ttu"
					>Google Maps</a
				>)
			</p>
		</TextBody>
		<Heading level={2}>施設情報</Heading>
		<Heading level={3}>会場地図</Heading>
		<TextBody>
			<p>準備中</p>
		</TextBody>
		<Heading level={3}>お手洗い</Heading>
		<TextBody>
			<p>確認中</p>
		</TextBody>
		<Heading level={3}>喫煙所</Heading>
		<TextBody>
			<p>確認中</p>
		</TextBody>
		<Heading level={3}>託児所</Heading>
		<TextBody>
			<p>準備中</p>
		</TextBody>
		<Heading level={2}>ライブ配信</Heading>
		<TextBody>
			<p>
				YouTube<a href="https://www.youtube.com/channel/UCWOjmrFPaaBowsur5VMHaew"
					>アクセシビリティカンファレンス福岡チャンネル</a
				>から以下の2つの配信を行います。
			</p>
			<ul>
				<li>通常版</li>
				<li>情報保障版</li>
			</ul>
			<p>
				配信URLは<a href="https://fukuoka-a11yconf.connpass.com/event/322934/" target="_blank"
					>connpassイベントページ</a
				>の「<em>参加者への情報</em
				>」欄に記載しています。connpassのログイン、事前の参加登録が必要です。
			</p>
			<p>
				アーカイブは予定していますが、なんらかのトラブルにより収録が失敗する場合があり、保証はできませんのでご了承ください。
			</p>
		</TextBody>
		<Heading level={3}>情報保障版とは</Heading>
		<TextBody>
			<p>通常版の映像に、以下の情報および映像を加えたものを配信します。</p>
			<ul>
				<li>ライブ字幕（<a href="https://udtalk.jp">UDトーク</a>）</li>
				<li>手話通訳</li>
			</ul>
			<p>
				字幕・手話映像が画面を大きく占めるため、セッションのスライドや映像が通常版よりも小さく表示されることになります。予めご了承ください。
			</p>
			<p>
				UDトークのウェブ版も同時に公開します。URLは<a
					href="https://fukuoka-a11yconf.connpass.com/event/322934/"
					target="_blank">connpassイベントページ</a
				>の「<em>参加者への情報</em
				>」欄に記載しています。connpassのログイン、事前の参加登録が必要です。
			</p>
		</TextBody>
	</Section>
</Main>

<style>
	em {
		font-weight: bold;
		font-style: normal;
	}

	em:first-child:last-child {
		font-size: 1.4em;
	}

	a {
		color: inherit;
		text-decoration: underline dashed;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 1px;
	}

	a:link:hover {
		background-color: var(--color-link-hover-bg);
	}
</style>
