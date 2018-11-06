<template>

  <label class="checkbox">
    <rt-ripple ref="ripple" :not-render="isDisabled" />
    <input type="checkbox" :disabled="isDisabled" class="checkbox-element" :checked="checked" @change="changeInput">

    <div class="checkbox-container">

      <svg class="checkbox-container__angle" width="12px" height="10px" viewBox="0 0 12 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Symbols" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="controls/checkbox/active/mark/violet" stroke-width="3">
            <polyline id="Stroke-4" points="1 4 4.44815083 7 7.5882241 4.12440883 11 1"></polyline>
          </g>
        </g>
      </svg>

      <slot />
    </div>
  </label>
</template>

<script>
import { default as RippleComponent } from "../Ripple/Ripple.vue";
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;
export default {
  name: "RtCheckbox",
  components: componentsList,

  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeInput($event) {
      this.$emit("input", $event.target.checked);
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
