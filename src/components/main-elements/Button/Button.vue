<template>
  <button class="rt-button rt-button-with-ripple" :class="{'rt-button--is-block' : isBlock}" @click="triggerClick($event)">
    <rt-ripple :not-render="isDisabled">
      <slot />
    </rt-ripple>
  </button>
</template>

<script>
import { RippleComponent } from '../Ripple/index';
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;

export default {
  name: 'RtButton',
  components: componentsList,
  props: {
    isBlock: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  mounted: function() {
    this.isDisabled = this.$el.disabled;
  },
  methods: {
    triggerClick($event) {
      this.$emit('click', $event);
    }
  }
};
</script>
