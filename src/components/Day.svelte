<script>
    import { Date, StateImage, Temperature } from "./";
    export let day;
    export let tomorrow = true;
</script>

<div class="day">
    {#if tomorrow}
        <Date text="Tomorrow" size="small" />
    {:else}
        <Date date={day.applicable_date} size="small" />
    {/if}
    <StateImage image={day.weather_state_abbr} size="small" />
    <div class="temperature">
        <Temperature temperature={day.max_temp} size="small" />
        <Temperature temperature={day.min_temp} size="small" />
    </div>
</div>

<style>
    .day {
        height: 177px;
        background: #1e213a;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        width: calc(20% - 20px);
        margin: 20px 0;
    }

    .temperature {
        height: 30px;
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        .day {
            width: calc(50% - 20px);
            margin: 10px 10px;
        }
    }
</style>
