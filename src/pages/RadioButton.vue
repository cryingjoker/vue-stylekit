<template>
    <div class="app-content">
        <div class="app-title">
            <h1 class="rt-font-hero">RadioButton</h1>
        </div>
        <div class="app-body">
            <div class="app-row">
                <p class="rt-font-h3">radiobutton</p>
            </div>
            <div class="app-row">
                <rt-radio-button>Интернет</rt-radio-button>
            </div>
            <div class="app-row">
                <p class="rt-font-h3">disabled radiobutton</p>
            </div>
            <div class="app-row">
                <rt-radio-button :is-disabled="true">Интернет</rt-radio-button>
            </div>
        </div>
    </div>
</template>


<script>
    import {RadioButton} from '../components/RadioButton';

    const componentsList = {};
    componentsList[RadioButton.name] = RadioButton;
    export default {
        name: 'RadioButton',
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }
    }
</script>

