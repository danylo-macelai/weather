<script>
    import { Position } from "./";
</script>

<div class="buttons">
    <button class="seach">
        <span> Seach for places </span>
    </button>
    <Position />
</div>

<style>
    .seach {
        width: 161px;
        height: 40px;
    }

    .seach span {
        font-family: "Raleway";
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
