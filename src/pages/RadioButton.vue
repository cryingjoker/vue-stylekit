<template>
    <div class="app-content col-10">
        <div class="app-title">
            <h1 class="rt-font-hero row">RadioButton</h1>
        </div>
        <div class="app-body">
            <div class="app-row">
                <p class="rt-font-h3 row">radiobutton</p>
            </div>
            <div class="app-row row">
                <div class="col">
                    <rt-radio-button>Интернет</rt-radio-button>
                </div>
            </div>
            <div class="app-row row">
                <p class="rt-font-h3 col">disabled radiobutton</p>
            </div>
            <div class="app-row row">
                <div class="col">
                    <rt-radio-button :is-disabled="true">Интернет</rt-radio-button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import {RadioButton} from '../components/RadioButton';

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

