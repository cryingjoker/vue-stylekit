<template>
  <label class="switch">
    <input name="test" type="checkbox" :disabled="isDisabled" :checked="checked ? 'checked' : ''" class="switch-element" @change="inputHandler">
    <div class="switch-container">
      <div class="switch-container__circle">
        <rt-ripple ref="ripple" :not-render="isDisabled" />
      </div>
      <slot />

    </div>
  </label>
</template>

<script>
import { default as RippleComponent } from '../Ripple/Ripple.vue';
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;

export default {
  name: 'RtSwitch',
  components: componentsList,
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
  },
  mounted: function() {
    this.setValue();
  },
  methods: {
    setValue() {
      this.$el.querySelector('.switch-element').checked = Boolean(this.checked);
    },
    inputHandler() {
      this.$emit('change', this.$el.querySelector('.switch-element').checked);
      this.showWave();
    },
    showWave() {
      this.$refs.ripple.startRipple({
        offsetX: 10,
        offsetY: 10
      });
    }
  }
};
</script>
