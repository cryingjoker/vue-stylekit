<template>
    <button class="rt-button rt-button-with-ripple" :class="{'rt-button--is-block' : this.isBlock}">
        <rt-ripple :not-render="isDisabled">
            <slot></slot>
        </rt-ripple>
    </button>
</template>

<script>
    import {RippleComponent} from '../Ripple/index'
    const componentsList = {};
    componentsList[RippleComponent.name] = RippleComponent;

    export default {
        props: {
            isBlock: Boolean,
        },
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
