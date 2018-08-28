<template>
    <div class="input">
        <input type="text" class="input-element" v-model="inputText">
        <div class="input-hover-line"></div>
        <div class="input-clear" v-if="inputText && inputText.length> 0"></div>
    </div>
</template>

<script>
    const componentsList = {};

    export default {
        props:['isDisabled'],
        data:()=>({
            inputText: ''
        }),
        name: "rt-input",
        mounted: function () {
        }
    };
</script>
