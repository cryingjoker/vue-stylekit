<template>
  <label class="radio-button">
    <rt-ripple ref="ripple" :not-bind-click="true" :not-render="isDisabled" />
    <input
      ref="input"
      :name="name"
      :disabled="isDisabled"
      :checked="isChecked"
      type="radio"
      class="radio-button-element"
      @change="changeModel"
    />
    <div class="radio-button-container"><slot /></div>
  </label>
</template>

<script>
import { default as RippleComponent } from "../Ripple/Ripple.vue";
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;
export default {
  name: "RtRadioButton",
  components: componentsList,
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
  data() {
    return {
      isChecked: this.checked
    };
  },
  watch: {
    model() {
      this.checkModel();
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
