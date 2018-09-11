<template>
    <button class="rt-button rt-button-no-wive" :class="{'rt-button--is-block' : this.isBlock}">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            isBlock: Boolean
        },

        name: "rt-button-without-ripple",
    }
</script>
