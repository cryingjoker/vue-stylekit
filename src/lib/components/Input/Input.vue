<script type="text/jsx">
import Vue from 'vue';
import VeeValidate from 'vee-validate';
export default {
  name: "RtInput",
  props: {
    insertLang: {
      type: String,// [ru, en]
      defaul: null
    },
    insertType: {
      type: String, //[number, string]
      defaul: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    hasError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: "",
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    validate: { },
    showNubmersButtons: {
      type: Boolean,
      default: false
    },
    label:{
      type: String,
      default: null
    }
  },
  data() {
    return {
      localLabel: this.label,
      localValue: this.value ? this.value : "",
      hasInputText: this.value ? this.value.length > 0 : false
    };
  },

  computed: {
    fieldName () {
      // Для всех полей ввода задаём атрибут name, даже дефолтный
      return this.name || 'input-field__'+this._uid;
    },
    isInvalid () {
      // Если есть внешний валидатор, то при изменении значения проверяем на ошибки
      if (this.validate || this.hasError) {
        return this.hasError || this.errors.has(this.fieldName);
      }
    }
  },
  watch: {
    localValue(val) {
      this.$emit("input", val);
    },
    label(){
      this.localLabel = this.label;
     }
  },

  mounted() {
    Vue.use(VeeValidate);
    this.setValue();
    this.setDisabled();
    this.bindEvents();
  },

  updated() {
    this.unbindEvents();
    this.bindEvents();
  },
  beforeDestroy() {
    this.unbindEvents();
  },
  methods: {
    bindEvents() {
      if (this["_events"]) {
        Object.keys(this["_events"]).map(eventName => {
          this.$refs.input.addEventListener(
            eventName,
            this["_events"][eventName]
          );
        });
      }
    },
    unbindEvents() {
      if (this["_events"]) {
        Object.keys(this["_events"]).map(eventName => {
          this.$refs.input.removeEventListener(
            eventName,
            this["_events"][eventName]
          );
        });
      }
    },
    addNumber(){
      this.localValue = typeof parseInt(this.localValue) === 'number' ? this.localValue - 0 + 1 : 1;
      this.updateInputValue();
    },
    subtractNumber(){
      this.localValue = typeof parseInt(this.localValue) === 'number' ? this.localValue - 1 : 0;
      this.localValue = this.localValue >= 0 ? this.localValue : 0;
      this.updateInputValue();
    },
    updateInputValue(){
      this.$el.querySelector(".input-element").value = this.localValue;
    },
    setValue() {
      this.$el.querySelector(".input-element").value = this.localValue;
      this.setValueLength();
    },
    setDisabled() {
      this.$el.querySelector(".input-element").disabled = Boolean(
        this.disabled
      );
    },
    setValueLength() {
      this.hasInputText = this.localValue ? this.localValue.length > 0 : false;
    },
    inputHandler($event) {
      this.localValue = this.$el.querySelector(".input-element").value;
      this.setValueLength();
    },
    clearInput() {
      this.localValue = "";
      this.setValue();
    },
    getChar(event){
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode);
      }
      if (event.which < 32) return null;
      return String.fromCharCode(event.which);
    },
    isSpecialCharacters(chr){
      return chr.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) !== null;
    },
    keyPress(event){

      let chr = this.getChar(event);
      if(this.insertType){
        switch (this.insertType) {
          case 'number':
            if(!chr.match(/[0-9]/)){
              event.preventDefault();
              event.stopPropagation();
              return null;
            }
            break;
          case 'string':
            if(chr.match(/[0-9]/)){
              event.preventDefault();
              event.stopPropagation();
              return null;
            }
            break;
        }
      }
      if(this.insertLang){

        if(isNaN(parseInt(chr)) && !this.isSpecialCharacters(chr)) {
          switch (this.insertLang) {
            case 'en':
              if(!chr.match(/[a-z]/i)){
                event.preventDefault();
                event.stopPropagation();
                return null;
              }
              break;
            case 'ru':
              if(!chr.match(/[а-я]/i)){
                event.preventDefault();
                event.stopPropagation();
                return null;
              }
              break;
          }
        }
      }

    }
  },
  render(){
    let inputClass = 'input text-field';
    if(this.isInvalid){
      inputClass += ' text-field--error';
    }
    if(this.showNubmersButtons && this.insertType && this.insertType === 'number'){
      inputClass += ' input--with-button';
    }
    if(this.isWhite){
      inputClass += ' rt-input--white';
    }

    const placehoder = (()=>{
      if(this.placeholder){
        let placeholderClassNames = 'floating-placeholder';
        if(this.hasInputText){
          placeholderClassNames+= ' floating-placeholder--go-top';
        }
        return <div  class={placeholderClassNames}>
          {this.placeholder}
        </div>;
      }
      return null;
    })();

    const clearButton = (()=>{
      if(!this.showNubmersButtons && !this.disabled && this.hasInputText){
        return <div class="input-clear" onClick={this.clearInput}>
          <svg class="input-clear__icon" viewBox="0 0 14 14" width="13" height="13" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z"
                  fill-rule="evenodd"/>
          </svg></div>;
      }
      return null;
    })();

    const errorMessage = (()=>{
      if(this.isInvalid){
        let errorMessageClass = 'text-field__error-message';
        if(this.label){
          errorMessageClass+=' text-field__error-message--has-label'
        }
        return <p class={errorMessageClass}>{this.errorMessage}</p>;
      }
    })();
    const arithmeticButtons = (()=>{
      if(this.showNubmersButtons && this.insertType && this.insertType === 'number'){
        return <div class="input-arithmetic">
          <button class="input-arithmetic__button input-arithmetic__minus" onClick={this.subtractNumber}>
            <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" class="input-arithmetic__button-icon">
              <g id="Symbols" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="inputs/number/icon/minus/black" transform="translate(1.000000, 1.000000)" stroke-width="1.5">
                  <path d="M0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 C4.5,0 0,4.5 0,10 Z" id="Path-Copy"></path>
                  <path d="M15,10 L5,10" id="Path-8"></path>
                </g>
              </g>
            </svg>
          </button>
          <button class="input-arithmetic__button input-arithmetic__plus" onClick={this.addNumber}>

            <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" class="input-arithmetic__button-icon">
              <g id="Symbols" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="inputs/number/icon/plus/black" transform="translate(1.000000, 1.000000)" stroke-width="1.5">
                  <path d="M0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 C4.5,0 0,4.5 0,10 Z" id="Path-Copy"></path>
                  <path d="M10,5 L10,15" id="Path-8"></path>
                  <path d="M15,10 L5,10" id="Path-8"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>;
      }
    })();

    const inputLabel = (()=>{
      if(this.localLabel)
      return <div class="input-label">{this.localLabel}</div>
    })()
    return <div class="input-wrapper">
      <div class="input text-field" class={inputClass}>
      <input
        onKeypress={this.keyPress}
        ref="input"
        autocomplete="off"
        autocapitalize="off"
        type="text"
        class="input-element"
        name={this.fieldName}
        onInput={this.inputHandler}
        v-validate={this.validate}
      />
      <div class="text-field__line" />
        {placehoder}
        {clearButton}
        {errorMessage}
        {arithmeticButtons}
  </div>
      {inputLabel}
    </div>;
  }
};
</script>
