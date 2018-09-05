<template>
    <button class="rt-button rt-button-with-ripple" :class="{'rt-button--is-block' : this.isBlock}">
        <rt-ripple-without-js>
            <slot></slot>
        </rt-ripple-without-js>
    </button>
</template>

<script>
    import {RippleWihoutJsComponent} from '../Ripple/index'
    const componentsList = {};
    componentsList[RippleWihoutJsComponent.name] = RippleWihoutJsComponent;
    export default {
        props: {
            isBlock: Boolean
        },
        components: componentsList,
        name: "rt-button-ripple-without-js",
        mounted: function () {}

    }
</script>
