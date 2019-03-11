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
      :value="value"
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
    },
    checked() {
      this.isChecked = this.checked;
    }
  },
  mounted() {
    this.checkModel();
  },
  methods: {
    changeFromParent(props) {
      if (props && this.name in props) {
        const propsForItem = props[this.name];
        if (this.value && propsForItem.indexOf(this.value) >= 0) {
          this.$refs.input.checked = true;
          this.isChecked = true;
          this.$emit("change-radiobutton", {
            name: this.name,
            value: this.value,
            checked: this.isChecked,
            _uid: this._uid
          });
          this.showWave();
        } else {
          this.$refs.input.checked = false;
          this.isChecked = false;
        }
      }
    },
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
      this.$emit("change-radiobutton", {
        name: this.name,
        value: this.value,
        checked: this.isChecked,
        _uid: this._uid
      });
      this.showWave();
    }
  }
};
</script>
