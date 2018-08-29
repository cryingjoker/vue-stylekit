<template>
    <div class="input text-field" :class="{'input--error':hasError}">
        <input type="text" class="input-element" :placeholder="placeholder" >
        <div class="text-field__line"></div>
        <p class="input-error-message">{{errorMessage}}</p>
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
            inputText: ''
        }),
        name: "rt-input-without-js",
        methods:{
            setDisabled(){
                this.$el.querySelector('.input-element').disabled = Boolean(this.disabled);
            },
        },
        mounted: function () {
            this.setDisabled()
        }
    };
</script>
