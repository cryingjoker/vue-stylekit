<template>
  <label class="radio-button">
    <rt-ripple ref="ripple" :not-render="isDisabled" />
    <input :name="name"  type="radio" :disabled="isDisabled" class="radio-button-element" @change="showWave">
    <div class="radio-button-container">
      <slot />
    </div>
  </label>
</template>

<script>
import { RippleComponent } from '../Ripple/index';
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;
export default {
  name: 'RtRadioButton',
  components: componentsList,
  props: {
    name: {
      type: String,
      default: null
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  mounted: function() {},
  methods: {
    showWave() {
      this.$refs.ripple.startRipple({
        offsetX: 10,
        offsetY: 10
      });
    }
  }
};
</script>
