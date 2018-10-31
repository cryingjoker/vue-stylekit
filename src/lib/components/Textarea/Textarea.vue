<template>
  <div class="text-field textarea" :class="textareaClasses">
    <textarea class="textarea-element" ref="textarea" rows="1" @change="inputHandler" @keyup="calculateHelght"
              @input="calculateHelght"
    />
    <div class="text-field__line" />
    <div v-if="!!placeholder" class="floating-placeholder" :class="placeholderClasses">
      {{ placeholder }}
    </div>
    <p class="text-field__error-message">{{ errorMessage }}</p>
  </div>

</template>

<script>
export default {
  name: 'RtTextarea',
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
      default: ''
    },
    value: {
      type: String,
      default: null
    }
  },
  data: () => ({
    inputText: '',
    hasInputText: false
  }),
  computed: {
    textareaClasses() {
      return {
        'textarea--disabled': this.disabled,
        'textarea--not-empty': this.hasInputText,
        'text-field--error': this.hasError
      };
    },
    placeholderClasses() {
      return {
        'floating-placeholder--go-top': this.hasInputText
      };
    }
  },
  watch: {
    localValue(val) {
      this.$emit('change', val);
    }
  },
  mounted: function() {
    this.setValue();
    this.setDisabled();
  },
  methods: {
    bindEvents(){
      if(this['_events']) {
        Object.keys(this['_events']).map((eventName) => {
          this.$refs.input.addEventListener(eventName,this['_events'][eventName]);
        })
      }
    },
    unbindEvents(){
      if(this['_events']) {
        Object.keys(this['_events']).map((eventName) => {
          this.$refs.input.removeEventListener(eventName,this['_events'][eventName]);
        })
      }
    },
    setValue() {
      this.$el.querySelector('.textarea-element').value = this.localValue || '';
      this.setValueLength();
    },
    setDisabled() {
      this.$el.querySelector('.textarea-element').disabled = Boolean(
        this.disabled
      );
    },
    setValueLength() {
      this.hasInputText = this.localValue ? this.localValue.length > 0 : false;
    },
    inputHandler($event) {
      this.localValue = this.$el.querySelector('.textarea-element').value;
      this.setValueLength();
    },
    calculateHelght() {
      const textarea = this.$el.querySelector('.textarea-element');
      textarea.style.height = '';
      textarea.style.height = textarea.scrollHeight;
    },
    clearInput() {
      this.localValue = '';
      this.setValue();
    }
  }
};
</script>
