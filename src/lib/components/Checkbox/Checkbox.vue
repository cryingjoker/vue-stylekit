<template>
  <label
    :class="{
      active: isChecked,
      disabled: isDisabled,
      invalid: required && !isChecked
    }"
    class="checkbox"
  >
    <rt-ripple ref="ripple" :not-render="isDisabled" />
    <input
      :id="uid"
      ref="input"
      v-model="isChecked"
      v-validate="{ required: requiredRule }"
      :disabled="isDisabled"
      :name="name"
      type="checkbox"
      class="checkbox-element"
      @change="changeInput"
    />

    <div class="checkbox-container">
      <svg
        class="checkbox-container__angle"
        width="12px"
        height="10px"
        viewBox="0 0 12 10"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Symbols" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="controls/checkbox/active/mark/violet" stroke-width="3">
            <polyline
              id="Stroke-4"
              points="1 4 4.44815083 7 7.5882241 4.12440883 11 1"
            />
          </g>
        </g>
      </svg>

      <slot />
    </div>
  </label>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
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
    requiredRule: {
      type: Boolean,
      default: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: Boolean,
    uid: {
      type: String
    }
  },

  data() {
    return {
      isChecked: this.checked
    };
  },
  watch: {
    checked: function(newValue) {
      this.isChecked = newValue;
    }
  },
  mounted() {
    this.bindEvents();
  },

  // updated() {
  //   this.unbindEvents();
  //   this.bindEvents();
  //   console.info('updated')
  // },
  beforeDestroy() {
    this.unbindEvents();
  },
  methods: {
    changeFromParent(props) {
      if (props && this.name in props) {
        const propsForItem = props[this.name];
        if (this.value && propsForItem.indexOf(this.value) >= 0) {
          this.$refs.input.checked = true;
          this.isChecked = true;
          this.$emit("changecheckbox", {
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
      } else {
        if (this.$refs.input.checked) {
          this.$refs.input.checked = false;
          this.isChecked = false;
        }
      }
    },
    changeInput($event) {
      this.$emit("update:checked", this.isChecked);
      this.$emit("changecheckbox", {
        name: this.name,
        value: this.value,
        checked: this.isChecked,
        _uid: this._uid
      });

      this.showWave();
    },
    bindEvents() {
      if (this["_events"]) {
        Object.keys(this["_events"]).map(eventName => {
          this["_events"][eventName].forEach((fn)=>{
            this.$refs.input.addEventListener(
              eventName,
              fn
            );
          })

        });
      }
    },
    unbindEvents() {
      if (this["_events"]) {
        Object.keys(this["_events"]).map(eventName => {
          this["_events"][eventName].forEach((fn)=>{
            this.$refs.input.removeEventListener(
              eventName,
              fn
            );
          })

        });
      }
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
