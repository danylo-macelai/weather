<script>
    import { Position } from "./";
    export let open = false;
</script>

<div class="buttons">
    <button class:open on:click={() => (open = !open)}>
        <span> Seach for places </span>
    </button>
    <Position />
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
