<script>
    import {
        Buttons,
        Date,
        Place,
        StateImage,
        StateName,
        Temperature,
    } from "../components";
    import { state } from "../store";

    const { place, today } = state;

    export let sidebar = false;
</script>

<aside
    style="--position: {sidebar
        ? 'inherit'
        : 'relative'}; --position-after: {sidebar ? 'inherit' : 'absolute'}"
>
    <Buttons bind:open={sidebar} />
    <StateImage image={$today.weather_state_abbr} />
    <Temperature temperature={$today.the_temp} />
    <StateName name={$today.weather_state_name} />
    <Date text="Today" date={$today.applicable_date} />
    <Place place={$place} />
</aside>

<style>
    aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 459px;
        position: var(--position);
        background-color: #1e213a;
    }

    aside::after {
        content: "";
        position: var(--position-after);
        top: 104px;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url("../assets/images/Cloud-background.png");
        background-repeat: no-repeat;
        background-position: top;
        opacity: 0.2;
    }

    @media screen and (max-width: 1024px) {
        aside {
            height: 720px;
            width: 100%;
        }

        aside::after {
            top: 58px;
            background-size: cover;
            height: 308px;
        }
    }
</style>
