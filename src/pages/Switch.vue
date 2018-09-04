<template>
    <div class="app-content rt-col-10  rt-col-md-3">

        <div class="app-title">
            <h1 class="rt-font-hero row">Switch</h1>
        </div>
        <div class="app-body">
            <div class="app-row row">
                <p class="rt-font-h3 rt-col">switch</p>
            </div>
            <div class="app-row row">
                <div class="rt-col">
                    <rt-switch>Интернет</rt-switch>
                </div>
            </div>
            <div class="app-row row">
                <p class="rt-font-h3 rt-col">disabled switch</p>
            </div>
            <div class="app-row row">
                <div class="rt-col">
                    <rt-switch :is-disabled="true">Интернет</rt-switch>
                </div>
            </div>
        </div>
    </div>


</template>


<script>
    import {Switch} from '../components/Switch';
    const componentsList = {};
    componentsList[Switch.name] = Switch;
    export default {
        name: 'app-switch',
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }
    }
</script>

<style scoped lang="scss">
</style>
