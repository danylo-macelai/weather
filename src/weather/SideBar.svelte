<script>
    import { Position } from "../components";
</script>

<aside>
    <div class="sidebar__buttons">
        <button class="seach">
            <span> Seach for places </span>
        </button>
        <Position />
    </div>
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

    @media screen and (max-width: 1024px) {
        aside {
            height: 810px;
            width: 100%;
        }

        .sidebar__buttons {
            margin: 18px 11px;
        }

        aside::after {
            top: 58px;
            background-size: cover;
            height: 308px;
        }
    }
</style>
