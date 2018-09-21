<template>
  <button class="rt-button rt-button-with-ripple" :class="{'rt-button--is-block' : isBlock,'rt-button--is-fitched' : isFetched}" @click="triggerClick($event)">
    <rt-ripple :not-render="isDisabled">
      <rt-spinner v-if="isFetched" :fill="true" :is-absolute="true" />
      <slot />
    </rt-ripple>
  </button>
</template>

<script>
import {  Spinner } from '@/main-elements/Spinner';
import { RippleComponent } from '../Ripple/index';
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;
componentsList[Spinner.name] = Spinner;

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
      this.$emit('click', $event);
    }
  }
};
</script>
