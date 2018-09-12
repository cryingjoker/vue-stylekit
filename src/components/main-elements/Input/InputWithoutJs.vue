<template>
  <div class="input text-field" :class="{'text-field--error':hasError,'rt-input--white':this.isWhite}">
    <input type="text" class="input-element" :placeholder="placeholder">
    <div class="text-field__line" />
    <p v-if="!!hasError" class="text-field__error-message">{{ errorMessage }}</p>
  </div>

</template>

<script>
export default {
  name: "RtInputWithoutJs",
  props: {
    disabled: Boolean,
    placeholder: String,
    hasError: Boolean,
    errorMessage: String,
    value: String,
    isWhite: Boolean
  },
  data: () => ({
    inputText: ""
  }),
  mounted: function() {
    this.setDisabled()
  },
  methods: {
    setDisabled() {
      this.$el.querySelector(".input-element").disabled = Boolean(this.disabled)
    }
  }
}
</script>
