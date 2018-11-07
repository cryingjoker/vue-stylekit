


<script type="text/jsx">
export default {
  name: "RtInput",
  props: {
    insertType: {
      type: String,
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
      required: true
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localValue: this.value ? this.value : "",
      hasInputText: this.value ? this.value.length > 0 : false
    };
  },
  watch: {
    localValue(val) {
      this.$emit("input", val);
    }
  },
  mounted() {
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
    }
  },
  render(){
    let inputClass = 'input text-field';
    if(this.hasError){
      inputClass += ' text-field--error';
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
        </div>
      }
      return null
    })();

    const clearButton = (()=>{
      if(!this.disabled && this.hasInputText){
        return <div class="input-clear" onClick={this.clearInput}>
          <svg className="input-clear__icon" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z"
                  fill-rule="evenodd"/>
          </svg></div>
      }
      return null
    })();

    const errorMessage = (()=>{
      if(this.hasError){
        return <p class="text-field__error-message">{this.errorMessage}</p>
      }
    })();

    return <div class="input text-field" class={inputClass}>
      <input ref="input" autocomplete="off" autocapitalize="off" type="text" class="input-element" onInput={this.inputHandler}/>
      <div class="text-field__line" />
        {placehoder}
        {clearButton}
        {errorMessage}
  </div>
  }
};
</script>
