<template>
    <button class="rt-button rt-button-with-ripple">
        <rt-ripple-without-js>
            <slot></slot>
        </rt-ripple-without-js>
    </button>
</template>

<script>
    import {RippleWihoutJsComponent} from '../Ripple'
    const componentsList = {};
    componentsList[RippleWihoutJsComponent.name] = RippleWihoutJsComponent;
    export default {
        props: [],
        components: componentsList,
        name: "rt-button-ripple-without-js",
        mounted: function () {}

    }
</script>
