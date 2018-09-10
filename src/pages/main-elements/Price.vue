<template>
    <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-mb-3">
        <div class="app-title row"><h1 class="col rt-font-hero">Price</h1></div>
        <div class="app-body">
            <div class="row">
                <div class="rt-col-4 rt-col-mb-3"><rt-price :value="750.231" :old-value="123.2" :currency="'$'"></rt-price></div>
                <div class="rt-col-4 rt-col-mb-3 rt-mb-space-top"><rt-price :value="750.231" :old-value="123.2"></rt-price></div>
                <div class="rt-col-4 rt-col-mb-3 rt-mb-space-top"><rt-price :value="750.231"></rt-price></div>
            </div>

            <div class="row rt-space-top">
                <div class="rt-col-4 rt-col-mb-3"><rt-price :value="69" :is-option="true" :currency="'€'" ></rt-price></div>
                <div class="rt-col-4 rt-col-mb-3 rt-mb-space-top"><rt-price :value="750.231" :time-interval="'час.'"></rt-price></div>
            </div>
            <div class="row rt-space-top">
                <div class="rt-col-16 rt-col-mb-3"><rt-price :value="1231223169" :is-option="true" :currency="'€'" ></rt-price></div>
            </div>
            <div class="row rt-space-top">
                <div class="rt-col-16 rt-col-mb-3"><rt-price :value="1231223169" :only-price="true" :currency="'€'" ></rt-price></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import {Price} from '@/components/main-elements/Price/index';

    const componentsList = {};
    componentsList[Price.name] = Price;
    export default {
        name: "app-typography",
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }
    };
</script>
