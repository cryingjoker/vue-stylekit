<template>
  <div class="text-field textarea textarea--static textarea--not-empty" :class="textareaClasses">
    <textarea class="textarea-element" @change="inputHandler" />
    <div v-if="!!placeholder" class="floating-placeholder floating-placeholder--go-top">
      {{ placeholder }}
    </div>
    <div class="textarea-border" />

    <p class="text-field__error-message">{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  name: "RtTextareaWithoutJs",
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
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
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
        "text-field--error": this.hasError
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
    clearInput() {
      this.localValue = "";
      this.setValue();
    }
  }
};
</script>
