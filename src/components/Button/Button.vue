<template>
    <button class="rt-button rt-button-with-ripple">
        <rt-ripple :not-render="isDisabled">
            <slot></slot>
        </rt-ripple>
    </button>
</template>

<script>
    import {RippleComponent} from '../Ripple'
    const componentsList = {};
    componentsList[RippleComponent.name] = RippleComponent;

    export default {
        props: [],
        data: ()=>({
            isDisabled : true
        }),
        components: componentsList,
        name: "rt-button",
        mounted: function () {
            this.isDisabled = this.$el.disabled;
        }

    }
</script>
