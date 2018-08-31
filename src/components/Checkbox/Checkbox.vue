<template>
    <label class="cheсkbox">
        <input type="checkbox" :disabled="isDisabled" class="checkbox-element">
        <div class="checkbox-container">
            <slot></slot>
        </div>
    </label>
</template>

<script>
    const componentsList = {};

    export default {
        props:['isDisabled'],
        name: "rt-checkbox",
        mounted: function () {
        }
    };
</script>
