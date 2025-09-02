<script>
	import Header from '$lib/components/header.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Main from '$lib/components/main.svelte';
	import Section from '$lib/components/section.svelte';
	import TextBody from '$lib/components/text-body.svelte';
	import pictStaff03 from '$lib/img/pict-staff-analogtan.jpg';
	import Staff from '$lib/components/staff.svelte';
	import ClusterItem from '$lib/components/cluster-item.svelte';
	import ClusterContainer from '$lib/components/cluster-container.svelte';
</script>

<svelte:head>
	<title>運営について | アクセシビリティカンファレンス福岡2025</title>
</svelte:head>

<Header />

<Main>
	<Heading level={1}>運営について</Heading>
	<Section width="narrow">
		<Heading level={2} id="summary">開催概要</Heading>
		<dl>
			<div>
				<dt>団体名称</dt>
				<dd>一般社団法人アクセシビリティカンファレンス福岡</dd>
			</div>
			<div>
				<dt>設立</dt>
				<dd>2025年8月6日</dd>
			</div>
			<div>
				<dt>代表者</dt>
				<dd>代表理事 中村 祐貴子</dd>
			</div>
			<div>
				<dt>所在地</dt>
				<dd>〒810-0004 福岡県福岡市中央区渡辺通5丁目23−8<br/>サンライトビル 3F</dd>
			</div>
			<div>
				<dt>お問い合わせ</dt>
				<dd>fukuokaa11yconf@googlegroups.com</dd>
			</div>
		</dl>
	</Section>

	<Section width="narrow">
		<Heading level={2}>ロゴ紹介</Heading>
		<ClusterContainer --col={2} --align="center">
			<ClusterItem>
				<figure>
					<img
						src="/img/logo.svg"
						alt="アクセシビリティカンファレンス福岡"
						width="100%"
					/>
				</figure>
			</ClusterItem>
			<ClusterItem>
				<TextBody fit>
					<p>ヒトの五感を、色と福岡県の県花である「梅」になぞらえて5枚の花びらの形で表現しました。</p>
					<p>梅は花の色、香り、味、手触り、和歌と五感でそれぞれの楽しみを得ることができます。</p>
					<p>アクセシビリティカンファレンスを通して、アクセシビリティへの普及に取り組むことで、皆さんの日常がよりアクセシブルであることが当たり前になるよう、願いを込めています。</p>
				</TextBody>
			</ClusterItem>
		</ClusterContainer>
	</Section>
</Main>

<style>
	a {
		color: inherit;
		text-decoration: underline dashed;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 1px;
		word-break: break-all;
	}

	a:link:hover {
		background-color: var(--color-link-hover-bg);
	}

  dl {
      font-size: 1.5rem;
      margin-block: 0;
      margin-inline: auto;
      max-width: fit-content;
      display: grid;
      gap: 0;
      grid-template-columns: auto 1fr;
  }

  @media (max-width: 40rem) {
      dl {
          display: block;
          font-size: 1rem;
      }
  }

  dl > div {
      display: contents;
  }

  dt {
      margin: 0;
      padding-block: 0.5rem;
      padding-inline: 1rem;
      border-block-end: 3px solid var(--color-border-primary);
  }

  @media (max-width: 40rem) {
      dt {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-block-start: 2rem;
          padding-inline: 0;
          border-block-end: none;
          gap: 1rem;
      }
  }

  dd {
      margin: 0;
      padding-block: 0.5rem;
      padding-inline: 1rem;
      border-block-end: 1px solid var(--color-border-primary);
      word-break: break-all;
  }

  @media (max-width: 40rem) {
      dd {
          margin-inline-start: 1rem;
          padding-inline-start: 1rem;
          border-inline-start: 1px solid var(--color-border-primary);
          border-block-end: none;
      }
  }
</style>
