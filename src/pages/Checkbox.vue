<template>
    <!--<div class="app-content">-->

        <!--<div class="app-title"></div>-->
        <!--<div class="app-body">-->
            <!--<div class="app-row">-->
                <!--<rt-checkbox v-model="array" value="1">Array</rt-checkbox>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->


</template>


<script>
    import {Checkbox} from '../components/Checkbox';
    const componentsList = {};
    componentsList[Checkbox.name] = Checkbox;
    export default {
        name: 'Checkbox',
        components: {componentsList},

        methods: {},
        mounted() {
        },
        created() {
        }
    }
</script>

<style scoped lang="scss">
</style>
