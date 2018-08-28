<template>
    <div class="app-content">
        <div class="app-title"></div>
        <div class="app-body">
            <div class="app-row">
                <p>Input</p>
            </div>
            <div class="app-row">
                <rt-input></rt-input>
            </div>

            <div class="app-row">
                <rt-input :has-error="true"></rt-input>
            </div>
        </div>
    </div>
</template>


<script>
    import {Input} from '../components/Input';
    const componentsList = {};
    componentsList[Input.name] = Input;
    export default {
        name: 'Input',
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }
    }
</script>

