<template>
    <div class="app-content">

        <div class="app-title"></div>
        <div class="app-body">
            <div class="app-row">
                <p>simple buttons</p>
            </div>
            <div class="app-row">
                <rt-button-without-ripple class="button-purple">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple class="button-orange">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple class="button-purple-border">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple class="button-orange-border">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple class="button-transparent">Подключить</rt-button-without-ripple>
            </div>
            <div class="app-row">
                <rt-button-without-ripple disabled class="button-purple">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple disabled class="button-orange">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple disabled class="button-purple-border">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple disabled class="button-orange-border">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple disabled class="button-transparent">Подключить</rt-button-without-ripple>
            </div>
            <div class="app-row">
                <rt-button-without-ripple class="button-small button-purple">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple class="button-small button-orange">Подключить</rt-button-without-ripple>
                <rt-button-without-ripple class="button-small button-purple-border">Подключить
                </rt-button-without-ripple>
                <rt-button-without-ripple class="button-small button-orange-border">Подключить
                </rt-button-without-ripple>
                <rt-button-without-ripple class="button-small button-transparent">Подключить</rt-button-without-ripple>
            </div>
            <div class="app-row">
                <rt-button-without-ripple class="button-small button-purple" disabled>Подключить
                </rt-button-without-ripple>
                <rt-button-without-ripple class="button-small button-orange" disabled>Подключить
                </rt-button-without-ripple>
                <rt-button-without-ripple class="button-small button-purple-border" disabled>Подключить
                </rt-button-without-ripple>
                <rt-button-without-ripple class="button-small button-orange-border" disabled>Подключить
                </rt-button-without-ripple>
            </div>
            <div class="app-row">
                <p>buttons with js ripple</p>
            </div>
            <div class="app-row">
                <rt-button class="button-purple">Подключить</rt-button>
                <rt-button class="button-orange">Подключить</rt-button>
                <rt-button class="button-purple-border">Подключить</rt-button>
                <rt-button class="button-orange-border">Подключить</rt-button>
                <rt-button>Подключить</rt-button>
                <rt-button class="button-transparent" disabled>Подключить</rt-button>
            </div>
            <div class="app-row">
                <rt-button class="button-small button-purple">Подключить</rt-button>
                <rt-button class="button-small button-orange">Подключить</rt-button>
                <rt-button class="button-small button-purple-border">Подключить</rt-button>
                <rt-button class="button-small button-orange-border">Подключить</rt-button>
                <rt-button class="button-small">Подключить</rt-button>
                <rt-button class="button-small button-transparent" disabled>Подключить</rt-button>
            </div>


            <div class="app-row">
                <p> Horizontal buttons</p>
            </div>
            <div class="app-row">

                <rt-button class="button-purple">Подключить</rt-button>
                <rt-button class="button-purple">Подключить</rt-button>
            </div>
            <div class="app-row">
                <p> Vertical buttons</p>
            </div>
            <div class="app-row">
                <rt-button class="button-vertical button-purple">Подключить</rt-button>
                <rt-button class="button-vertical button-purple">Подключить</rt-button>
            </div>
        </div>
    </div>


</template>

<script>
    import {
        ButtonComponent,
        ButtonWithoutRippleComponent
    } from "../components/Button";

    const componentsList = {};

    componentsList[ButtonComponent.name] = ButtonComponent;
    componentsList[
        ButtonWithoutRippleComponent.name
        ] = ButtonWithoutRippleComponent;
    console.info("componentsList", componentsList);

    export default {
        name: "app-buttons",
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }
    };
</script>

<style scoped lang="scss">
</style>
