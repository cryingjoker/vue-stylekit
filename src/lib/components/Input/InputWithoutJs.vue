<template>
  <div
    :class="{ 'text-field--error': hasError, 'rt-input--white': isWhite }"
    class="input text-field"
  >
    <input :placeholder="placeholder" type="text" class="input-element">
    <div class="text-field__line" />
    <p v-if="!!hasError" class="text-field__error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "RtInputWithoutJs",
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
      default: "",
      required: true
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    inputText: ""
  }),
  mounted: function() {
    this.setDisabled();
  },
  methods: {
    setDisabled() {
      this.$el.querySelector(".input-element").disabled = Boolean(
        this.disabled
      );
    }
  }
};
</script>
