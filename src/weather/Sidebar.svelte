<script>
	import { displayPlaceByQuery } from "../store";

	let query;
	export let open = false;
</script>

<aside class:open>
	<div class="buttons">
		<button class:open on:click={() => (open = !open)}>
			<span class="material-icons"> close </span>
		</button>
	</div>

	<div class="query">
		<div class="query-input">
			<span class="material-icons"> search </span>
			<input
				type="search"
				placeholder="search location"
				bind:value={query}
			/>
		</div>
		<button
			class="query-button"
			type="submit"
			on:click={() => displayPlaceByQuery(query)}>Search</button
		>
	</div>
</aside>

<style>
	.query {
		display: flex;
	}

	.query-input {
		position: relative;
		width: 268px;
		height: 48px;
		border: 1px solid #e7e7eb;
		box-sizing: border-box;
		margin: 0 8px 0 0;
	}

	.query-input .material-icons {
		position: absolute;
		top: 50%;
		transform: translateY(-60%);
		left: 10px;
		color: #616475;
	}

	.query-input input {
		width: 100%;
		height: 100%;
		background-color: transparent;
		padding: 0 8px 0 40px;
		border: none;
		font-family: Raleway;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		color: #616475;
	}

	.query-button {
		width: 86px;
		height: 48px;
		border: none;
		background: #3c47e9;
		font-family: Raleway;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 19px;
		color: #e7e7eb;
	}

	.buttons {
		justify-content: end;
	}

	.buttons button {
		background-color: transparent;
		box-shadow: none;
		padding: 10px 0 0 0;
	}

	.buttons .material-icons {
		font-size: 36px;
	}

	@media screen and (max-width: 1024px) {
		.buttons {
			margin: 18px 0;
		}
		.buttons button {
			margin: 0 11px;
		}
	}

	aside {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 459px;
		position: absolute;
		background-color: #1e213a;
		left: -100%;
		transition: left 0.2s ease-in-out;
		height: 100%;
	}

	.open {
		left: 0;
	}

	@media screen and (max-width: 1024px) {
		aside {
			height: 720px;
			width: 100%;
		}

		aside::after {
			top: 58px;
			background-size: cover;
			height: 308px;
		}
	}
</style>
