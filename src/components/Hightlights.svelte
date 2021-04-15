<script>
    import { state } from "../store";
    import { Hightlight } from "./";

    const { today } = state;

    $: rotate = Math.round($today.wind_direction);
    $: humidity = Math.round($today.humidity);
</script>

<p>Today’s Hightlights</p>
<div class="hightlights clearfix">
    <Hightlight
        title="Wind status"
        value={Math.round($today.wind_speed)}
        type="mph"
        height="204"
    >
        <div class="navigation" style="--rotate: {rotate}deg">
            <span class="material-icons"> navigation </span>
        </div>
        <p class="direction">{$today.wind_direction_compass}</p>
    </Hightlight>
    <Hightlight title="Humidity" value={humidity} type="%" height="204">
        <div class="progress-bar">
            <div style="--progress: {humidity}%" />
            <span class="zero">0</span>
            <span class="fifty">50</span>
            <span class="hundred">100</span>
            <span class="percent">%</span>
        </div>
    </Hightlight>
    <Hightlight
        title="Visibility"
        value={$today.visibility.toFixed(1)}
        type="miles"
    />
    <Hightlight
        title="Air Pressure"
        value={Math.round($today.air_pressure)}
        type="mb"
    />
</div>

<style>
    p {
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;

        color: #e7e7eb;
    }

    .progress-bar {
        position: relative;
        width: 80%;
        height: 8px;
        background: #e7e7eb;
        border-radius: 80px;
    }

    .progress-bar span {
        position: absolute;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #a09fb1;
        top: -20px;
    }

    .progress-bar div {
        position: absolute;
        width: var(--progress);
        height: 8px;
        background: #ffec65;
        border-radius: 80px;
    }

    .zero {
        left: 0;
    }

    .fifty {
        left: 50%;
    }

    .hundred {
        right: 0;
    }

    .percent {
        top: 10px !important;
        right: 0;
    }

    .hightlights {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
        margin: 0 auto;
        width: 100%;
    }

    .navigation {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.3);
        transform: rotate(var(--rotate));
    }

    .direction {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        padding: 0 0 0 10px;
    }

    .material-icons {
        font-size: 14px;
    }
</style>
