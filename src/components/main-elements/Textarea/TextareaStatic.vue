<template>
  <div class="text-field textarea textarea--static" :class="textareaClasses">
    <textarea class="textarea-element" @change="inputHandler" />
    <div v-if="!!placeholder" class="floating-placeholder" :class="placeholderClasses">
      {{ placeholder }}
    </div>
    <div class="textarea-border" />

    <p class="text-field__error-message">{{ errorMessage }}</p>
  </div>

</template>

<script>
export default {
  name: "RtTextareaStatic",
  props: {
    disabled: Boolean,
    placeholder: String,
    hasError: Boolean,
    errorMessage: String,
    value: String
  },
  data: () => ({
    inputText: "",
    hasInputText: false
  }),
  computed: {
    textareaClasses() {
      return {
        "textarea--not-empty": this.hasInputText,
        "textarea--disabled": this.disabled,
        "text-field--error": this.hasError
      }
    },
    placeholderClasses() {
      return {
        "floating-placeholder--go-top": this.hasInputText
      }
    }
  },
  watch: {
    localValue(val) {
      this.$emit("change", val)
    }
  },
  mounted: function() {
    this.setValue()
    this.setDisabled()
  },
  methods: {
    setValue() {
      this.$el.querySelector(".textarea-element").value = this.localValue || ""
      this.setValueLength()
    },
    setDisabled() {
      this.$el.querySelector(".textarea-element").disabled = Boolean(
        this.disabled
      )
    },
    setValueLength() {
      this.hasInputText = this.localValue ? this.localValue.length > 0 : false
    },
    inputHandler($event) {
      this.localValue = this.$el.querySelector(".textarea-element").value
      this.setValueLength()
    },
    clearInput() {
      this.localValue = ""
      this.setValue()
    }
  }
}
</script>
