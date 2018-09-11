<template>
    <label class="radio-button">
        <rt-ripple ref="ripple" :not-render="isDisabled">
        </rt-ripple>
        <input type="checkbox" :disabled="isDisabled" class="radio-button-element" @change="showWave">
        <div class="radio-button-container">
            <slot></slot>
        </div>
    </label>
</template>

<script>
    import {RippleComponent} from '../Ripple/index'
    const componentsList = {};
    componentsList[RippleComponent.name] = RippleComponent;
    export default {
        props:['isDisabled'],
        name: "rt-radio-button",
        components: componentsList,
        methods: {
            showWave(){
                this.$refs.ripple.startRipple(
                    {
                        offsetX:10,
                        offsetY:10
                    }
                );
            }
        },
        mounted: function () {
        }
    };
</script>
