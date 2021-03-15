<script>
    import {
        Buttons,
        StateImage,
        Temperature,
        Date,
        StateName,
        Place,
    } from "../components";
    import { place, today } from "../store";

    export let sidebar = false;
</script>

<aside
    style="--position: {sidebar
        ? 'inherit'
        : 'relative'}; --position-after: {sidebar ? 'inherit' : 'absolute'}"
>
    <Buttons bind:open={sidebar} />
    <StateImage image={$today.weatherStateAbbr} />
    <Temperature temperature={$today.theTemp} />
    <StateName name={$today.weatherStateName} />
    <Date text="Today" date={$today.applicableDate} />
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
            height: 810px;
            width: 100%;
        }

        aside::after {
            top: 58px;
            background-size: cover;
            height: 308px;
        }
    }
</style>