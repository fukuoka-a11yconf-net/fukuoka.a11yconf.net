<script lang="ts">
	export let id: string;
	export let img: string;
	export let name: string;
	export let role: string | null = null;
	export let org: string | null = null;
	export let snsX: string | null = null;
	export let snsFB: string | null = null;
	export let snsGH: string | null = null;

	let nameTokens = name.split(/\s+/g);
</script>

<div {id} class="staff">
	<div class="avatar">
		<div class="avatar-inner">
			<img src={img} alt="" width="1" height="1" loading="lazy" />
		</div>
	</div>
	<div>
		<div class="name">
			{#each nameTokens as token}
				<span>{token}</span>
			{/each}
		</div>
		{#if role}
			<div class="role">{role}</div>
		{/if}
		{#if org}
			<div class="org">{org}</div>
		{/if}
		{#if snsX || snsFB || snsGH}
			<ul class="sns">
				{#if snsX}
					<li class="sns-x">
						<a href={`https://x.com/${snsX}`} target="_blank">
							<img src="/2023/img/icon-x.svg" width="24" height="24" alt={`${name}のX`} />
						</a>
					</li>
				{/if}
				{#if snsFB}
					<li>
						<a href={`https://facebook.com/${snsFB}`} title={snsFB}>
							<img
								src="/2023/img/icon-facebook.svg"
								width="1024"
								height="1024"
								alt={`${name}のFacebook`}
							/>
						</a>
					</li>
				{/if}
				{#if snsGH}
					<li>
						<a href={`https://github.com/${snsGH}`} title={`@${snsGH}`}>
							<img
								src="/2023/img/icon-github.svg"
								width="1024"
								height="1024"
								alt={`${name}のGitHub`}
							/>
						</a>
					</li>
				{/if}
			</ul>
		{/if}
	</div>
</div>

<style>
	.staff {
		text-align: center;
	}

	.avatar {
		padding-inline: 2rem;
	}

	.avatar-inner {
		width: 100%;
		height: auto;
		aspect-ratio: 1 / 1;
		border-radius: 100%;
		overflow: hidden;
		border: 3px solid var(--color-border-primary);
	}

	.avatar img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.name {
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 0 0.5rem;
		margin-block: 0.5rem;
		margin: 1rem 0;
		height: 2.75rem;
	}

	.org {
		margin-block: 0.5rem;
	}

	.org,
	.sns-x {
		font-size: 0.7em;
		opacity: 0.9;
	}

	.sns {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-block: 0.5rem;
		margin-inline: 0;
		padding: 0;
		list-style: none;
	}

	.sns li {
		margin: 0;
		padding: 0;
	}

	.sns a {
		width: 1.7rem;
		height: 1.7rem;
		display: block;
		border-radius: 10rem;
	}

	.sns img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.sns .sns-x a {
		padding: 0.4em;
		background-color: #000;
	}
</style>
