<script>
    import { StateImage, Temperature } from "./";
    export let day;
</script>

<div class="day">
    <span class="title">Tomorrow</span>
    <StateImage image={day.weather_state_abbr} size="small" />
    <div class="temperature">
        <Temperature temperature={day.max_temp} size="small" />
        <Temperature temperature={day.min_temp} size="small" />
    </div>
</div>

<style>
    .day {
        width: 100%;
        height: 177px;
        background: #1e213a;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .title {
        width: 76px;
        height: 30px;
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #e7e7eb;
    }

    .temperature {
        height: 30px; 
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
</style>
