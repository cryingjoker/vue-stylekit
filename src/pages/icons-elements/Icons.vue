<template>
    <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
            <div class="row">
                <h1 class="rt-font-hero rt-col">Icons</h1>
            </div>
        </div>
        <div class="app-body">
            <div class="row">

            </div>
        </div>
    </div>


</template>

<script>
    import {
        Icons
    } from "@/components/icons-elements/";


    const componentsList = {};

    componentsList[Icons.name] = Icons;


    export default {
        name: "app-icons",
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
