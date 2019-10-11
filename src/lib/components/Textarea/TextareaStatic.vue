<script type="text/jsx">
export default {
  name: "RtTextareaStatic",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
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
      default: null
    },
    fieldId: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    inputText: "",
    hasInputText: false
  }),
  computed: {
  },
  watch: {
    localValue(val) {
      this.$emit("change", val);
    }
  },
  mounted: function() {
    this.setValue();
    this.setDisabled();
  },
  methods: {
    setValue() {
      if(this.$refs.textarea) {
        this.$refs.textarea.value = this.localValue || "";
        this.setValueLength();
      }
    },
    setDisabled() {
      if(this.$refs.textarea) {
        this.$refs.textarea.disabled = Boolean(
          this.disabled
        );
      }
    },
    setValueLength() {
      this.hasInputText = this.localValue ? this.localValue.length > 0 : false;
    },
    inputHandler($event) {
      this.localValue = this.$refs.textarea.value;
      this.setValueLength();
    },
    clearInput() {
      this.localValue = "";
      this.setValue();
    }
  },
  render(h){
    // <!--<div-->
    // <!--v-if="!!placeholder"-->
    // <!--:class="placeholderClasses"-->
    // <!--class="static-placeholder"-->
    // <!--&gt;-->
    // <!--{{ placeholder }}-->
    // <!--</div>-->
    let textareaClasses = 'text-field textarea textarea--static';
    if(this.hasInputText){
      textareaClasses+=" textarea--not-empty";
    }
    if(this.disabled){
      textareaClasses+=" textarea--disabled";
    }
    if(this.hasError){
      textareaClasses+=" text-field--error";
    }
    const label = (()=>{
      if(this.label) {
        return <div class="textarea-label">{this.label}</div>;
      }else{
        return null;
      }
    })();

    return <div class={textareaClasses}>
            {label}
            <textarea class="textarea-element" ref="textarea" onInput={this.inputHandler} id={this.fieldId}/>
            <div class="textarea-border" />
            <p class="text-field__error-message">{this.errorMessage }</p>
          </div>;
  }
};
</script>
