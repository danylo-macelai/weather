<script>
	import { onMount } from "svelte";
	import { Preloader } from "../components";
	import { Today, Sidebar } from "./";
	import { state, displayPositionInfo } from "../store";

	let open = false;
	const { loading, position } = state;
	$: render = $position.latitude !== undefined;

	onMount(() => displayPositionInfo());
</script>

<main class="home__content">
	{#if $loading}
		<Preloader />
	{/if}
	{#if render}
		<Sidebar bind:open />
		<Today bind:sidebar={open} />
		<article>
			// Content Heading
			<section>// Content Area</section>
		</article>
	{/if}
</main>

<style>
	main {
		display: flex;
		line-height: 19px;
		height: 100vh;
	}

	article {
		float: left;
		flex: 1 1 auto;
		background-color: #100e1d;
	}

	@media screen and (max-width: 1024px) {
		.home__content {
			flex-direction: column;
		}

		article {
			height: 100%;
			width: 100%;
		}
	}
</style>
