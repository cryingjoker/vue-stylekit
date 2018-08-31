<template>
    <label class="switch" @input="inputHandler">
        <input type="checkbox" :disabled="isDisabled" class="switch-element">
        <div class="switch-container">
            <slot></slot>
        </div>
    </label>
</template>

<script>
    const componentsList = {};

    export default {
        props:['isDisabled','checked'],
        name: "rt-switch",
        methods: {
            setValue() {
                this.$el.querySelector('.switch-element').checked = Boolean(this.checked);
            },
            inputHandler(){
                this.$emit('input',this.$el.querySelector('.switch-element').checked)
            }
        },
        mounted: function () {
            this.setValue();
        }
    };
</script>
