<template>
    <div class="text-field textarea" :class="textareaClasses">
        <textarea class="textarea-element" rows="1" @change="inputHandler" @keyup="calculateHelght" @input="calculateHelght"></textarea>
        <div class="text-field__line"></div>
        <div v-if="!!placeholder" class="floating-placeholder" :class="placeholderClasses">
            {{placeholder}}
        </div>
        <p class="text-field__error-message">{{errorMessage}}</p>
    </div>

</template>

<script>
    export default {
        props:{
            'disabled': Boolean,
            'placeholder': String,
            'hasError': Boolean,
            'errorMessage': String,
            'value': String
        },
        data:()=>({
            inputText: '',
            hasInputText: false
        }),
        computed: {
            textareaClasses() {
                return {
                    'textarea--disabled': this.disabled,
                    'textarea--not-empty': this.hasInputText,
                    'text-field--error': this.hasError
                }
            },
            placeholderClasses(){
                return {
                    'floating-placeholder--go-top':this.hasInputText
                }
            }
        },
        name: "rt-textarea",
        methods:{
            setValue() {
                this.$el.querySelector('.textarea-element').value = this.localValue || ''
                this.setValueLength();
            },
            setDisabled(){
                this.$el.querySelector('.textarea-element').disabled = Boolean(this.disabled);
            },
            setValueLength(){
                this.hasInputText = this.localValue ? this.localValue.length > 0 : false;
            },
            inputHandler($event) {
                this.localValue = this.$el.querySelector('.textarea-element').value;
                this.setValueLength();
            },
            calculateHelght(){
                const textarea = this.$el.querySelector('.textarea-element');
                textarea.style.height = '';
                textarea.style.height = textarea.scrollHeight;
            },
            clearInput(){
                this.localValue = '';
                this.setValue();
            }
        },
        watch:{
            localValue (val) {
                this.$emit('change', val)
            },
        },
        mounted: function () {
            this.setValue();
            this.setDisabled()
        }
    };
</script>
