<template>
    <div class="select-option" :class="optionClasses" @click="setSelection">
        <button class="select-option__inner">
            <slot></slot>
        </button>
    </div>
</template>

<script>

    export default {
        inject: {
            RtSelect : {},

        },
        props: {},
        data() {
            return {
                localValue: this.value ? this.value : '' ,
                isSelected: false
            }
        },
        name: "rt-select-option",
        computed: {
            selectedValue() {
                return this.RtSelect.selectedValue
            },
            optionClasses () {
                return {
                    'select-option--select': this.isSelected
                }
            }
        },
        methods: {
            setIsSelected(){
                this.isSelected = this.selectedValue === this.value;
            },
            setValue() {
                this.value = this.getTextContent()
            },
            setSelection(){
                this.RtSelect.setValue(this.value);
            },
            getTextContent() {
                if (this.$el) {
                    return this.$el.textContent.trim();
                }
                const slot = this.$slots.default;
                return slot ? slot[0].text.trim() : ''
            }
        },


        watch:{
            selectedValue(){
                this.setIsSelected()
            },

        },
        mounted () {
            this.setValue();
            this.setIsSelected();
        }
    };
</script>
