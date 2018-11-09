<template>
  <button :class="{'rt-button--is-block' : isBlock,'rt-button--is-fitched' : isFetched}" class="rt-button rt-button-with-ripple" @click="triggerClick()">
    <rt-ripple :not-render="isDisabled" :twice-render="true">
      <rt-spinner v-if="isFetched" :fill="true" :is-absolute="true" />
      <slot />
    </rt-ripple>
  </button>
</template>
<script>
import { default as Spinner } from "../Spinner/Spinner.vue";
import { default as RippleComponent } from "../Ripple/Ripple.vue";
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;
componentsList[Spinner.name] = Spinner;

export default {
  name: "RtButton",
  components: componentsList,
  props: {
    isBlock: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isFetched: {
      type: Boolean,
      default: false
    }
  },
  mounted: function() {
    this.isDisabled = this.$el.disabled;
  },
  methods: {
    triggerClick($event) {
      this.$emit("click", $event);
    }
  }
};
</script>
