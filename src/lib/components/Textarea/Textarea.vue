<template>
  <div :class="textareaClasses" class="text-field textarea">
    <textarea
      class="textarea-element"
      rows="1"
      @change="inputHandler"
      @keyup="calculateHeight"
      @input="calculateHeight"
      :id="fieldId"
    />
    <div v-if="outlined" class="text-field__border"></div>
    <div v-else class="text-field__line"></div>
    <div
      v-if="!!placeholder"
      :class="placeholderClasses"
      class="floating-placeholder"
    >
      {{ placeholder }}
    </div>
    <p class="text-field__error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "RtTextarea",
  props: {
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
      default: String,
      default: ""
    },
    value: {
      type: String,
      default: null
    },
    isB2bTextarea: {
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
    textareaClasses() {
      return {
        "textarea--disabled": this.disabled,
        "textarea--not-empty": this.hasInputText,
        "text-field--error": this.hasError,
        "rtb-textarea": this.isB2bTextarea,
        "rtb-textarea--outlined": this.outlined,
        "text-field--orange": this.color === "orange",
        "text-field--purple": this.color === "purple"
      };
    },
    placeholderClasses() {
      return {
        "floating-placeholder--go-top": this.hasInputText
      };
    }
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
      this.$el.querySelector(".textarea-element").value = this.localValue || "";
      this.setValueLength();
    },
    setDisabled() {
      this.$el.querySelector(".textarea-element").disabled = Boolean(
        this.disabled
      );
    },
    setValueLength() {
      this.hasInputText = this.localValue ? this.localValue.length > 0 : false;
    },
    inputHandler($event) {
      this.localValue = this.$el.querySelector(".textarea-element").value;
      this.setValueLength();
    },
    calculateHeight() {
      const textarea = this.$el.querySelector(".textarea-element");
      textarea.style.height = "";
      textarea.style.height = textarea.scrollHeight + 'px';
    },
    clearInput() {
      this.localValue = "";
      this.setValue();
    }
  }
};
</script>
