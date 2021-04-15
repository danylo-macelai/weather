<script>
    import { state } from "../store";
    import { Day } from "./";

    const { weathers } = state;
</script>

<div class="next-days clearfix">
    {#each $weathers as day, i}
        <Day tomorrow={i === 0} {day} />
    {/each}
</div>

<style>
    .next-days {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
        margin: 0 auto;
        width: 100%;
    }
</style>
