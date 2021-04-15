<script>
    import { state, toggleMeasurement } from "../store";
    import { CircleButton } from "./";

    const { measurement } = state;
</script>

<div class="measurement">
    <CircleButton
        title="Celcius"
        icon="°C"
        spanClass="span-class"
        on:click={() => toggleMeasurement("C")}
        disabled={$measurement === "C"}
    />
    <div class="spacer" />
    <CircleButton
        title="Fahrenheit"
        icon="°F"
        spanClass="span-class"
        on:click={() => toggleMeasurement("F")}
        disabled={$measurement === "F"}
    />
</div>

<style>
    .measurement {
        display: flex;
        justify-content: flex-end;
    }

    .spacer {
        width: 20px;
    }

    @media screen and (max-width: 1024px) {
        .measurement {
            padding: 0;
        }

        .spacer {
            width: 0;
        }
    }
</style>
