<template>
    <label class="radio-button">
        <input type="checkbox" :disabled="isDisabled" class="radio-button-element">
        <div class="radio-button-container">
            <slot></slot>
        </div>
    </label>
</template>

<script>
    const componentsList = {};

    export default {
        props:['isDisabled'],
        name: "rt-radio-button",
        mounted: function () {
        }
    };
</script>
