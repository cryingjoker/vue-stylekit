<template>
  <label class="radio-button">
    <rt-ripple :not-bind-click="true" ref="ripple" :not-render="isDisabled" />
    <input :name="name" ref="input" type="radio" :disabled="isDisabled" :checked="isChecked" class="radio-button-element" @change="changeModel">
    <div class="radio-button-container">
      <slot />
    </div>
  </label>
</template>

<script>
import { default as RippleComponent } from "../Ripple/Ripple.vue";
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;
export default {
  name: "RtRadioButton",
  components: componentsList,
  data() {
    return {
      isChecked: this.checked
    };
  },
  props: {
    name: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: null
    },
    model: {
      type: [String, Number],
      default: null
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    model() {
      this.checkModel();
    }
  },
  mounted() {
    this.checkModel();
  },
  watch: {
    model() {
      this.checkModel();
    }
  },
  methods: {
    checkModel() {
      if (this.model !== null) {
        this.isChecked = this.model === this.value;
      }
    },
    showWave() {
      this.$refs.ripple.startRipple({
        offsetX: 10,
        offsetY: 10
      });
    },
    changeModel($event) {
      this.isChecked = $event.target.checked;

      this.$emit("input", this.value);
      this.$emit("change", this.value);
      this.showWave();
    }
  }
};
</script>
