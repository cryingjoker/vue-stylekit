<template>
  <button
    :class="{ 'rt-button--is-block': isBlock }"
    class="rt-button rt-button-with-ripple"
    @click="triggerClick($event)"
  >
    <rt-ripple-without-js> <slot /> </rt-ripple-without-js>
  </button>
</template>

<script>
import { default as RippleWihoutJsComponent } from "../Ripple/Ripple.vue";

const componentsList = {};
componentsList[RippleWihoutJsComponent.name] = RippleWihoutJsComponent;
export default {
  name: "RtButtonRippleWithoutJs",
  components: componentsList,
  props: {
    isBlock: Boolean
  },
  mounted: function() {},
  methods: {
    triggerClick($event) {
      this.$emit("click", $event);
    }
  }
};
</script>
