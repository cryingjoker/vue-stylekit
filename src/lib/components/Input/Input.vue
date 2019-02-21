<script type="text/jsx">
import Vue from "vue";
import VeeValidate from "vee-validate";

export default {
  name: "RtInput",
  props: {
    customRules: {
      type: Array,
      default: () => ([])
    },
    minNumber: {
      type: Number,
      default: null
    },
    maxLength: {
      type: Number,
      default: null
    },
    maxNumber: {
      type: Number,
      default: null
    },
    defaultValue: {
      type: [String, Number],
      default: null
    },
    insertLang: {
      type: String,// [ru, en]
      default: null
    },
    insertType: {
      type: String, //[number, string, password]
      default: null
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
    errorMessageFunc: {
      type: Function,
      default: null
    },
    errorMessage: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: ""
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    validate: {},
    showNumbersButtons: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    type:{
      type: String,
      default: 'text'
    },
    passwordVisibility: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      index: null,
      localLabel: this.label,
      localValue: this.value ? this.value : "",
      hasInputText: this.value ? this.value.length > 0 : false
    };
  },

  computed: {
    fieldName() {
      return this.name || "input-field__" + this._uid;
    },
    isInvalid() {
      if (this.validate || this.hasError) {
        return this.hasError || this.errors.has(this.fieldName);
      }
    }
  },
  watch: {
    localValue(val) {
      this.$emit("input", val);
    },
    label() {
      this.localLabel = this.label;
    }
  },

  mounted() {
    this.customRules.forEach(({nameRule, rule}) => VeeValidate.Validator.extend(nameRule, { validate: rule }))
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
    addNumber() {
      this.localValue = typeof parseInt(this.localValue) === "number" ? this.localValue - 0 + 1 : 1;
      if (this.maxNumber !== null && this.localValue > this.maxNumber) {
        this.localValue = this.maxNumber;
        event.target.value = this.maxNumber;
      }
      this.updateInputValue();
    },
    subtractNumber() {
      this.localValue = typeof parseInt(this.localValue) === "number" ? this.localValue - 1 : 0;
      if (this.minNumber !== null && this.localValue < this.minNumber) {
        this.localValue = this.minNumber;
        event.target.value = this.minNumber;
      }
      this.updateInputValue();
    },
    updateInputValue() {
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
    getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode);
      }
      if (event.which < 32) return null;
      return String.fromCharCode(event.which);
    },
    isSpecialCharacters(chr) {
      return chr.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) !== null;
    },
    keyPress(event) {

      let chr = this.getChar(event);
      if(this.maxLength && this.maxLength <= event.target.value.length){
        event.preventDefault();
        event.stopPropagation();
        return null;
      }
      if (this.insertType) {
        switch (this.insertType) {
          case "number":
            if (!chr.match(/[0-9]/)) {
              event.preventDefault();
              event.stopPropagation();
              return null;
            }
            break;
          case "string":
            if (chr.match(/[0-9]/)) {
              event.preventDefault();
              event.stopPropagation();
              return null;
            }
            break;

        }
      }
      if (this.insertLang) {

        if (isNaN(parseInt(chr)) && !this.isSpecialCharacters(chr)) {
          switch (this.insertLang) {
            case "en":
              if (!chr.match(/[a-z]/i)) {
                event.preventDefault();
                event.stopPropagation();
                return null;
              }
              break;
            case "ru":
              if (!chr.match(/[а-я]/i)) {
                event.preventDefault();
                event.stopPropagation();
                return null;
              }
              break;
          }
        }
      }
    },
    keyUp(event) {
      if (this.insertType) {
        switch (this.insertType) {
          case "number":
            let value = event.target.value - 0;
            if (this.maxNumber !== null && value > this.maxNumber) {
              this.localValue = this.maxNumber;
              event.target.value = this.maxNumber;
            }
            if (this.minNumber !== null && value < this.minNumber) {
              this.localValue = this.minNumber;
              event.target.value = this.minNumber;
            }
            break;
        }
      }
    },
    changeFromParent(props) {
      if (props && this.name in props) {
        const propsForItem = props[this.name];
        if ("0" in propsForItem) {
          this.$refs.input.value = propsForItem[0];
          this.inputHandler();
        }
      } else {
        if (this.insertType === "number") {
          if (this.minNumber) {
            this.$refs.input.value = this.minNumber;
          } else {
            this.$refs.input.value = 0;
          }
        }
      }
    },
    togglePasswordVisibility() {
      let inputElement = this.$el.getElementsByTagName('input')[0];
      if (inputElement.getAttribute('type') === 'password'){
        inputElement.setAttribute('type', 'text');
      } else if (inputElement.getAttribute('type') === 'text') {
        inputElement.setAttribute('type', 'password');
      }
      this.passwordVisibility = !this.passwordVisibility
    }
  },
  render() {
    let inputClass = "input text-field";
    if (this.isInvalid) {
      inputClass += " text-field--error";
    }
    if (this.showNumbersButtons && this.insertType && this.insertType === "number") {
      inputClass += " input--with-button";
    }
    if (this.isWhite) {
      inputClass += " rt-input--white";
    }
    if(this.type && this.type === "password") {
      inputClass += " rt-input--password"
    }

    const placeholder = (() => {
      if (this.placeholder) {
        let placeholderClassNames = "floating-placeholder";
        if (this.hasInputText) {
          placeholderClassNames += " floating-placeholder--go-top";
        }
        return <div class={placeholderClassNames}>
          {this.placeholder}
        </div>;
      }
      return null;
    })();

    const clearButton = (() => {
      if (!this.showNumbersButtons && !this.disabled && this.hasInputText && this.type != 'password') {
        return <div class="input-clear" onClick={this.clearInput}>
          <svg class="input-clear__icon" viewBox="0 0 14 14" width="13" height="13"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z"
                  fill-rule="evenodd"/>
          </svg>
        </div>;
      }
      return null;
    })();

    const passwordIcon = (() => {
      if(this.type === 'password') {
        if(!this.passwordVisibility){
          return <div class="password-icon password-hidden" onClick={this.togglePasswordVisibility}>
            <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#575D68" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round">
                <path d="M3.333 1C4.838 3.687 7.06 5.031 10 5.031S15.162 3.687 16.667 1M10 7.667v1.25M14.396 6.833l.572
              1.031M5.801 6.833L5.23 7.864M17.5 4.333l.833.834M2.5 4.333l-.833.834"/>
              </g>
            </svg>
          </div>;
        } else {
          return <div class="password-icon" onClick={this.togglePasswordVisibility}>
            <svg width="18" height="12" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(1 1)" stroke="#575D68" stroke-width="2" fill="none" fill-rule="evenodd">
                <path d="M0 5c1.805 3.225 4.472 4.837 8 4.837 3.528 0 6.195-1.612 8-4.837M0 4.837C1.805 1.612 4.472 0
                8 0c3.528 0 6.195 1.612 8 4.837" stroke-linecap="round"/>
                <circle cx="8" cy="5" r="2"/>
              </g>
            </svg>
          </div>
        }
      }
      return null;
    })();

    const errorMessage = (() => {
      if (this.isInvalid) {
        let errorMessageClass = "text-field__error-message";
        if (this.label) {
          errorMessageClass += " text-field__error-message--has-label";
        }

        if (Object.prototype.toString.call(this.errorMessageFunc) === '[object Function]') {
          return <p class={errorMessageClass}>{this.errorMessageFunc(this.localValue)}</p>;
        }

        return <p class={errorMessageClass}>{this.errorMessage}</p>;
      }
    })();
    const arithmeticButtons = (() => {
      if (this.showNumbersButtons && this.insertType && this.insertType === "number") {
        return <div class="input-arithmetic">
          <button class="input-arithmetic__button input-arithmetic__minus" onClick={this.subtractNumber}>
            <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 class="input-arithmetic__button-icon">
              <g id="Symbols" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="inputs/number/icon/minus/black" transform="translate(1.000000, 1.000000)" stroke-width="1.5">
                  <path d="M0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 C4.5,0 0,4.5 0,10 Z"
                        id="Path-Copy"></path>
                  <path d="M15,10 L5,10" id="Path-8"></path>
                </g>
              </g>
            </svg>
          </button>
          <button class="input-arithmetic__button input-arithmetic__plus" onClick={this.addNumber}>

            <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 class="input-arithmetic__button-icon">
              <g id="Symbols" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="inputs/number/icon/plus/black" transform="translate(1.000000, 1.000000)" stroke-width="1.5">
                  <path d="M0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 C4.5,0 0,4.5 0,10 Z"
                        id="Path-Copy"></path>
                  <path d="M10,5 L10,15" id="Path-8"></path>
                  <path d="M15,10 L5,10" id="Path-8"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>;
      }
    })();

    const inputLabel = (() => {
      if (this.localLabel)
        return <div class="input-label">{this.localLabel}</div>;
    })();
    return <div class="input-wrapper">
      <div class="input text-field" class={inputClass}>
        <input
          onKeypress={this.keyPress}
          onKeyup={this.keyUp}
          ref="input"
          autocomplete="off"
          autocapitalize="off"
          type={this.type}
          class="input-element"
          name={this.fieldName}
          onInput={this.inputHandler}
          v-validate={this.validate}
        />
        <div class="text-field__line"/>
        {placeholder}
        {clearButton}
        {passwordIcon}
        {errorMessage}
        {arithmeticButtons}
      </div>
      {inputLabel}
    </div>;
  }
};
</script>
