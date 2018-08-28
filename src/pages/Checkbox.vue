<template>
    <div class="app-content">

        <div class="app-title"></div>
        <div class="app-body">
            <div class="app-row">
                <p>checkbox</p>
            </div>
            <div class="app-row">
                <rt-checkbox>Интернет</rt-checkbox>
            </div>
            <div class="app-row">
                <p>disabled checkbox</p>
            </div>
            <div class="app-row">
                <rt-checkbox :is-disabled="true">Интернет</rt-checkbox>
            </div>
        </div>
    </div>


</template>


<script>
    import {Checkbox} from '../components/Checkbox';
    const componentsList = {};
    componentsList[Checkbox.name] = Checkbox;
    export default {
        name: 'Checkbox',
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
