<script>
    import { state } from "../store";
    import { Day } from "./";

    const { weathers } = state;
</script>

<div class="next-days clearfix">
    {#each $weathers as day, i}
        <div class="day">
            <Day tomorrow={i === 0} {day} />
        </div>
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

    .day {
        box-sizing: border-box;
        width: calc(20% - 20px);
        margin-top: 10px;
        margin: 20px 0;
    }

    @media screen and (max-width: 1024px) {
        .day {
            width: calc(50% - 20px);
            margin: 10px 10px;
        }
    }
</style>
