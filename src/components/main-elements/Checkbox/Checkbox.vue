<template>

    <label class="cheсkbox">
        <!--<rt-ripple :not-render="isDisabled">-->
        <!--</rt-ripple>-->
        <input type="checkbox" :disabled="isDisabled" class="checkbox-element">

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
        mounted: function () {
        }
    };
</script>
