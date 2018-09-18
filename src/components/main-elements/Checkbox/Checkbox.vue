<template>

  <label class="checkbox">
    <rt-ripple ref="ripple" :not-render="isDisabled" />
    <input type="checkbox" :disabled="isDisabled" class="checkbox-element" @change="showWave">

    <div class="checkbox-container">
      <slot />
    </div>
  </label>
</template>

<script>
import { RippleComponent } from '../Ripple/index';
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;
export default {
  name: 'RtCheckbox',
  components: componentsList,

  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
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
