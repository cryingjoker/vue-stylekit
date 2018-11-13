<template>
  <label class="switch">
    <input
      ref="input"
      :disabled="isDisabled"
      :checked="checked ? 'checked' : ''"
      name="test"
      type="checkbox"
      class="switch-element"
      @change="inputHandler"
    />
    <div class="switch-container">
      <div class="switch-container__circle">
        <rt-ripple
          ref="ripple"
          :not-bind-click="true"
          :not-render="isDisabled"
        />
      </div>
      <slot />
    </div>
  </label>
</template>

<script>
import { default as RippleComponent } from "../Ripple/Ripple.vue";
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;

export default {
  name: "RtSwitch",
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
  mounted: function() {
    this.setValue();
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
      this.$el.querySelector(".switch-element").checked = Boolean(this.checked);
    },
    inputHandler() {
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
