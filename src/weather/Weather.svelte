<script>
	import { onMount } from "svelte";
	import { Measurement, NextDays, Preloader } from "../components";
	import { Today, Sidebar } from "./";
	import { state, getCurrentPosition } from "../store";

	let open = false;
	const { loading, position } = state;

	onMount(() => getCurrentPosition($position));
</script>

<main class="home__content">
	{#if $loading}
		<Preloader />
	{/if}
	{#if $position.confirm}
		<Sidebar bind:open />
		<Today bind:sidebar={open} />
		<article>
			<Measurement />
			<NextDays />
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
		padding: 42px 154px;
	}

	@media screen and (max-width: 1024px) {
		.home__content {
			flex-direction: column;
		}

		article {
			height: 100%;
			width: 100%;
			padding: 8px;
		}
	}
</style>
