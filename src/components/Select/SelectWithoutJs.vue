<template>
    <div class="select text-field" :class="{'select--error':hasError}">
        <label class="floating-placeholder floating-placeholder--go-top">{{label}}</label>
        <div class="select-value">
            <p class="select-input">{{localValue}}</p>
            <div class="select-arrow">
                <svg class="select-arrow__icon" width="10" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0l5 5 5-5z" fill-rule="evenodd"/>
                </svg>
            </div>
        </div>
        <div class="text-field__line"></div>
        <div class="select-list">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            'options': {},
            'hasError': Boolean,
            'label': String,
            'value': String
        },
        data() {
            return {
                localValue: this.value ? this.value : '' ,
            }
        },
        name: "rt-select-without-js",
        methods: {
            setValue() {
                this.localValue = this.value;
            },
        },
        watch:{
            localValue (val) {
                this.$emit('input', val)
            },
        },
        mounted () {
            this.setValue();
        }
    };
</script>
