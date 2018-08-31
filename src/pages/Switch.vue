<template>
    <div class="app-content">

        <div class="app-title">
            <h1 class="rt-font-hero">Switch</h1>
        </div>
        <div class="app-body">
            <div class="app-row">
                <p class="rt-font-h3">switch</p>
            </div>
            <div class="app-row">
                <rt-switch>Интернет</rt-switch>
            </div>
            <div class="app-row">
                <p class="rt-font-h3">disabled switch</p>
            </div>
            <div class="app-row">
                <rt-switch :is-disabled="true">Интернет</rt-switch>
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
