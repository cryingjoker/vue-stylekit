<template>
    <div class="input text-field" :class="{'text-field--error':hasError,'rt-input--white':this.isWhite}">
        <input type="text" class="input-element" :placeholder="placeholder" >
        <div class="text-field__line"></div>
        <p class="text-field__error-message" v-if="!!hasError">{{errorMessage}}</p>
    </div>

</template>

<script>
    export default {
        props:{
            'disabled': Boolean,
            'placeholder': String,
            'hasError': Boolean,
            'errorMessage': String,
            'value': String,
            'isWhite': Boolean
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
