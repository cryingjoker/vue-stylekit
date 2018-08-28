<template>
    <label class="chekbox">
        <input type="checkbox" :disabled="isDisabled" class="checkbox-element">
        <div class="checkbox-container">
            <svg class="checkbox-icon" width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4.17l3.30782609 3.17L10.5930435 1" stroke-width="3" fill="none"
                      fill-rule="evenodd"/>
            </svg>
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
