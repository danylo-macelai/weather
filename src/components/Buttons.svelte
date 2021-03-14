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

    @media screen and (max-width: 1024px) {
        .buttons {
            margin: 18px 11px;
        }
    }
</style>
