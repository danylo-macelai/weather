<script>
    import { Position, State, Temperature } from "../components";
    import { state } from "../store";

    const { weathers } = state;

    $: weather = $weathers[0];
</script>

<aside>
    <div class="sidebar__buttons">
        <button class="seach">
            <span> Seach for places </span>
        </button>
        <Position />
    </div>
    <State image={weather.weatherStateAbbr} />
    <Temperature temperature={weather.theTemp} />
    <p class="state-name">{weather.weatherStateName}</p>
</aside>

<style>
    aside {
        display: flex;
        justify-content: center;
        width: 459px;
        position: relative;
        background-color: #1e213a;
    }

    aside::after {
        content: "";
        position: absolute;
        top: 103px;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url("../assets/images/Cloud-background.png");
        background-repeat: no-repeat;
        background-position: top;
        opacity: 0.2;
    }

    .seach {
        width: 161px;
        height: 40px;
    }
    
    .state-name {
        position: absolute;
        top: 668px;
        font-family: Raleway;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 42px;
        text-align: center;
        color: #a09fb1;
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

        .sidebar__buttons {
            margin: 18px 11px;
        }
    }
</style>
