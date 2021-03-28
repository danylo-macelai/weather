<script>
	import { findPlaceByQuery } from "../store";

	let query;
</script>

<div class="query">
	<div class="query-input">
		<span class="material-icons"> search </span>
		<input type="search" placeholder="search location" bind:value={query} />
	</div>
	<button
		class="query-button"
		type="submit"
		on:click={() => findPlaceByQuery(query)}>Search</button
	>
</div>

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
</style>
