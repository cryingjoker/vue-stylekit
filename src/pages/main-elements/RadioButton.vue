<template>
    <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
            <h1 class="rt-font-hero">RadioButton</h1>
        </div>
        <div class="app-body">
            <div class="app-row">
                <p class="rt-font-h3">radiobutton</p>
            </div>
            <div class="app-row row">
                <div class="rt-col">
                    <rt-radio-button>Интернет</rt-radio-button>
                </div>
            </div>
            <div class="app-row row">
                <p class="rt-font-h3 rt-col">disabled radiobutton</p>
            </div>
            <div class="app-row row">
                <div class="rt-col">
                    <rt-radio-button :is-disabled="true">Интернет</rt-radio-button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
    import {RadioButton} from '@/components/main-elements/RadioButton/index';

    const componentsList = {};
    componentsList[RadioButton.name] = RadioButton;
    export default {
        name: 'app-RadioButton',
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }
    }
</script>

