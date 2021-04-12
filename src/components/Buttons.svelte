<script>
    import { state, getCurrentPosition } from "../store";
    import { CircleButton } from "./";

    const { position } = state;
    export let open = false;
</script>

<div class="buttons">
    <button class:open on:click={() => (open = !open)}>
        <span> Seach for places </span>
    </button>
    <CircleButton
        disabled={$position.disabled}
        on:click={() => getCurrentPosition($position)}
        title={`latitude: ${$position.coords.latitude}, longitude: ${$position.coords.longitude}`}
        icon="my_location"
    />
</div>

<style>
    .buttons .open span {
        transform: scale(0.7);
    }

    .buttons button {
        width: 161px;
        height: 40px;
    }

    .buttons button span {
        font-family: "Raleway";
        min-height: 24px;
        transition: transform 0.3s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        .buttons {
            margin: 18px 0;
        }

        .buttons button {
            margin: 0 11px;
        }
    }
</style>
