<template>

    <label class="cheсkbox">
        <rt-ripple ref="ripple" :not-render="isDisabled">
        </rt-ripple>
        <input type="checkbox" :disabled="isDisabled" class="checkbox-element" @change="showWave">

        <div class="checkbox-container">
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
        components: componentsList,
        name: "rt-checkbox",
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
    };
</script>
