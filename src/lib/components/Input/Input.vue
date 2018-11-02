<template>
  <div class="input text-field" :class="{'text-field--error':hasError,'rt-input--white':isWhite}">
    <input ref="input" autocomplete="off" autocapitalize="off" type="text" class="input-element" @input="inputHandler">
    <div class="text-field__line" />
    <div v-if="!!placeholder" class="floating-placeholder" :class="{'floating-placeholder--go-top':hasInputText }">
      {{ placeholder }}
    </div>
    <div v-if="!!hasInputText & !disabled" class="input-clear" @click="clearInput">
      <svg class="input-clear__icon" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z" fill-rule="evenodd" /></svg>
    </div>
    <p v-if="!!hasError" class="text-field__error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "RtInput",
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
  }
};
</script>
