<template>
    <div class="chekbox">
        <input type="checkbox" class="checkbox-input">
        <div class="checkbox-container">
            <svg class="checkbox-icon" width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4.17l3.30782609 3.17L10.5930435 1" stroke="#70F" stroke-width="3" fill="none"
                      fill-rule="evenodd"/>
            </svg>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    const componentsList = {};

    export default {
        name: "rt-checkbox",
        mounted: function () {}
    };
</script>
