<script type="text/jsx">
  /* eslint-disable vue/return-in-computed-property */
  import Vue from "vue";
  import VeeValidate from "vee-validate";
  import variables from "../../variables.json";

  export default {
    name: "RtInput",
    model: {
      prop: 'value',
      event: 'input'
    },
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
        type: String, //[number, string, password, tel]
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: String,
        default: 'disable,false,off,none'
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
      validate: {
        type: Object | String,
        default: null
      },
      showNumbersButtons: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: 'text'
      },
      passwordVisibility: {
        type: Boolean,
        default: false
      },
      isB2bInput: {
        type: Boolean,
        default: false
      },
      outlined: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: "purple"
      },
      technicalPossibilityHint: {
        type: String,
        default: ""
      },
      isHidden: {
        type: Boolean,
        default: false
      },
      approved: {
        type: Boolean,
        default: false
      },
      hasTimer: {
        type: Boolean,
        default: false
      },
      timerDuration: {
        type: String,
        default: ''
      },
      inputButton: {
        type: Boolean,
        default: false
      },
      inputButtonText: {
        type: String,
        default: ''
      },
      scope: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        index: null,
        localLabel: this.label,
        localValue: this.value ? this.value : "",
        hasInputText: this.value ? this.value.length > 0 : false,
        hintPosition: "right",
        passwordVisibilityLocal: this.passwordVisibility
      };
    },

    computed: {
      fieldName() {
        return this.name || "input-field__" + this._uid;
      },
      isInvalid() {
        if (this.validate || this.hasError) {
          return this.hasError || this.errors && this.errors.has(this.scope ? this.scope + '.' + this.fieldName : this.fieldName);
        }
      },
      inputClass() {
        let className = "input-wrapper";
        if (this.outlined) {
          className += " input-wrapper--outlined";
        }
        if (this.isB2bInput) {
          className += " rtb-input color-block--white";
        }
        if (this.isHidden) {
          className += " rtb-input--hidden";
        }
        if (this.approved) {
          className += " rtb-input--approved";
        }
        return className;
      }
    },
    watch: {
      value(val){
        this.localValue = this.value;
        this.setValue();
      },
      localValue(val) {
        this.$emit("input", val);
      },
      label() {
        this.localLabel = this.label;
      }
    },

    mounted() {
      this.customRules.forEach(({ nameRule, rule }) => VeeValidate.Validator.extend(nameRule, { validate: rule }));
      this.setValue();
      this.setDisabled();
      this.bindEvents();
      if (this.$el.getBoundingClientRect().left > window.innerWidth / 2) {
        this.hintPosition = "left";
      } else {
        this.hintPosition = "right";
      }
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
            const that = this;
            that["_events"][eventName].forEach((fn)=> {
              if(eventName != 'input' && window[variables.globalSettingsKey].segment != 'b2c') { // for work with v-model
                this.$refs.input.addEventListener(eventName, fn)
              } else if (eventName != 'input') {
                this.$refs.input.addEventListener(
                  eventName,
                  function() {
                    if (that["_events"] && that["_events"][eventName] && that["_events"][eventName][0] && typeof that["_events"][eventName][0] === 'function') {
                      that["_events"][eventName][0](arguments[0]);
                    }
                  }
                );
              }
            });
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
        this.setValueLength();
        this.$refs.input.focus();
      },
      subtractNumber() {
        this.localValue = typeof parseInt(this.localValue) === "number" ? this.localValue - 1 : 0;
        if (this.minNumber !== null && this.localValue < this.minNumber) {
          this.localValue = this.minNumber;
          event.target.value = this.minNumber;
        }
        this.updateInputValue();
        this.setValueLength();
        this.$refs.input.focus();
      },
      updateInputValue() {
        this.$el.querySelector(".input-element").value = this.localValue;
      },
      setValue() {
        this.$el.querySelector(".input-element").value = this.localValue;
        this.setValueLength();
      },
      setDisabled() {
        this.$el.querySelector(".input-element").disabled = Boolean(this.disabled);
      },
      setValueLength() {
        this.hasInputText = this.localValue.toString() ? this.localValue.toString().length > 0 : false;
      },
      inputHandler($event) {
        this.localValue = this.$el.querySelector(".input-element").value;
        this.setValueLength();
      },
      clearInput() {
        this.localValue = "";
        this.setValue();
        this.$emit('clearField');
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
        if (this.maxLength && this.maxLength <= event.target.value.length) {
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
            case "tel":
//              if (!chr.match(/[0-9]/)) {
//                event.preventDefault();
//                event.stopPropagation();
//                return null;
//              }
              this.enablePhoneMask();
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
        let inputElement = this.$el.getElementsByTagName("input")[0];
        if (inputElement.getAttribute("type") === "password") {
          inputElement.setAttribute("type", "text");
        } else if (inputElement.getAttribute("type") === "text") {
          inputElement.setAttribute("type", "password");
        }
        this.passwordVisibilityLocal = !this.passwordVisibilityLocal;
      },
      mask(e) {
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.$refs.input.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.$refs.input.value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
        if (e.type === "blur") {
          if (this.$refs.input.value.length == 2){
            this.$refs.input.value = "";
          }
        } else {
          this.setCursorPosition(this.$refs.input.value.length, this.$refs.input);
        }
        this.localValue = this.$refs.input.value;
        this.setValueLength();
      },
      setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange)
          elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
          let range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select();
        }
      },
      enablePhoneMask() {
        this.$refs.input.addEventListener("input", this.mask, false);
        this.$refs.input.addEventListener("focus", this.mask, false);
        this.$refs.input.addEventListener("blur", this.mask, false);
      },
      getCode() {
        this.$root.$emit('getCode', this.localValue);
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
      if (this.type && this.type === "password") {
        inputClass += " rt-input--password";
      }
      if (this.color === "orange") {
        inputClass += " text-field--orange";
      } else {
        inputClass += " text-field--purple";
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
        const buttonClass = (() => {
          let clearButtonClassNames = "input-clear";
          if (this.isB2bInput) {
            clearButtonClassNames += " rtb-input-clear";
          }
          return clearButtonClassNames;
        })();
        if (!this.showNumbersButtons && !this.disabled && this.hasInputText && this.type != "password") {
          return <div class={buttonClass} onClick={this.clearInput}>
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
        if (this.type === "password") {
          if (!this.passwordVisibilityLocal) {
            return <div class="password-icon password-hidden" onClick={this.togglePasswordVisibility}>
              <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg" class="password-icon__icon">
                <g stroke="#575D68" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <path d="M3.333 1C4.838 3.687 7.06 5.031 10 5.031S15.162 3.687 16.667 1M10 7.667v1.25M14.396 6.833l.572
              1.031M5.801 6.833L5.23 7.864M17.5 4.333l.833.834M2.5 4.333l-.833.834"/>
                </g>
              </svg>
            </div>;
          } else {
            return <div class="password-icon" onClick={this.togglePasswordVisibility}>
              <svg width="18" height="12" xmlns="http://www.w3.org/2000/svg" class="password-icon__icon password-icon__icon-show">
                <g transform="translate(1 1)" stroke="#101828" stroke-width="2" fill="none" fill-rule="evenodd">
                  <path d="M0 5c1.805 3.225 4.472 4.837 8 4.837 3.528 0 6.195-1.612 8-4.837M0 4.837C1.805 1.612 4.472 0
                8 0c3.528 0 6.195 1.612 8 4.837" stroke-linecap="round"/>
                  <circle cx="8" cy="5" r="2"/>
                </g>
              </svg>
            </div>;
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
          if (this.isB2bInput) {
            errorMessageClass += " rtb-text-field__error-message rt-col-rt-col-3";
          }
          if (this.hintPosition === "right") {
            errorMessageClass += " rtb-text-field__error-message--on-the-right";
          } else if (this.hintPosition === "left") {
            errorMessageClass += " rtb-text-field__error-message--on-the-left";
          }

          if (Object.prototype.toString.call(this.errorMessageFunc) === "[object Function]") {
            return <div class={errorMessageClass}>
              <span class="error-message-text-content rt-font-label">{this.errorMessageFunc(this.localValue)}</span>
            </div>;
          }

          return <div class={errorMessageClass}>
            <span class="error-message-text-content rt-font-label">{this.errorMessage}</span>
          </div>;
        }
      })();
      const arithmeticButtons = (() => {
        if (this.showNumbersButtons && this.insertType && this.insertType === "number") {
          return <div class="input-arithmetic">
            <button class="input-arithmetic__button input-arithmetic__minus" onClick={this.subtractNumber}>
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 10c0 5.5 4.5 10 10 10s10-4.5 10-10S15.5 0 10 0 0 4.5 0 10z" fill="#E3E8EC"/>
                  <path d="M15 10H5" stroke="#101828" stroke-width="2"/>
                </g>
              </svg>
            </button>
            <button class="input-arithmetic__button input-arithmetic__plus" onClick={this.addNumber}>
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 10c0 5.5 4.5 10 10 10s10-4.5 10-10S15.5 0 10 0 0 4.5 0 10z" fill="#E3E8EC"/>
                  <path d="M10 10V5v5h5-5zm0 0v5-5H5h5z" stroke="#101828" stroke-width="2"/>
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

      const inputElementByType = (() => {
        if(this.insertType !== 'tel' ) {
          return <input
            onKeypress={this.keyPress}
            onKeyup={this.keyUp}
            ref="input"
            autocomplete={this.autocomplete}
            autocapitalize="off"
            type={this.type}
            class="input-element"
            name={this.fieldName}
            onInput={this.inputHandler}
            v-validate={this.validate}
          />;
        } else {
          return <input
            onKeypress={this.keyPress}
            onKeyup={this.keyUp}
            ref="input"
            autocomplete={this.autocomplete}
            autocapitalize="off"
            type={this.type}
            class="input-element"
            name={this.fieldName}
            onInput={this.inputHandler}
            v-validate={this.validate}
            onFocus={this.mask}
            onBlur={this.mask}
          />;
        }
      })();

      return <div class={this.inputClass}>
        <div class="input text-field" class={inputClass}>
          {inputElementByType}
          {this.outlined ? <div class="text-field__border"/> : <div class="text-field__line"/>}
          {placeholder}
          {this.inputButton ? null : clearButton}
          {passwordIcon}
          {errorMessage}
          {arithmeticButtons}
          {this.$slots.default}
          {this.hasTimer ? <rt-countdown-timer duration={this.timerDuration}/> : null}
        </div>
        {inputLabel}
        {this.inputButton ? <rt-button class="rt-button-transparent-purple rt-button-small" onClick={this.getCode}>{this.inputButtonText}</rt-button> : null}
      </div>;
    }
  };
</script>
