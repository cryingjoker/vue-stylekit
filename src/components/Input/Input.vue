<template>
    <div class="input" :class="{'input--error':hasError}">
        <input type="text" class="input-element" @input="inputHandler">
        <div class="input-hover-line"></div>
        <div v-if="!!placeholder" class="input-placeholder" :class="{'input-placeholder--hidden':hasInputText }">
            {{placeholder}}
        </div>
        <div class="input-clear" v-if="!!hasInputText & !disabled" @click="clearInput">
            <svg class="input-clear__icon" width="14px" height="14px" viewBox="0 0 14 14" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="new" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Elements" transform="translate(-246.000000, -2777.000000)" fill="#000000">
                        <g id="clear" transform="translate(246.000000, 2777.000000)">
                            <polygon id="Shape"
                                     points="14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4 12.6 14 14 12.6 8.4 7"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <p class="input-error-message" v-if="!!hasError">{{errorMessage}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            'disabled': Boolean,
            'placeholder': String,
            'hasError': Boolean,
            'errorMessage': String,
            'value': String
        },
        data() {
            return {
                localValue: this.value ? this.value : '' ,
                hasInputText: this.value ? this.value.length > 0 : false
            }

        },
        name: "rt-input",
        methods: {
            setValue() {
                this.$el.querySelector('.input-element').value = this.localValue
                this.setValueLength();
            },
            setDisabled(){
                this.$el.querySelector('.input-element').disabled = Boolean(this.disabled);
            },
            setValueLength(){
                this.hasInputText = this.localValue ? this.localValue.length > 0 : false;
            },
            inputHandler($event) {
                this.localValue = this.$el.querySelector('.input-element').value;
                this.setValueLength();
            },
            clearInput(){
                this.localValue = '';
                this.setValue();
            }

        },
        watch:{
            localValue (val) {
                this.$emit('input', val)
            },
        },
        mounted () {
            this.setValue();
            this.setDisabled();
        }
    };
</script>
