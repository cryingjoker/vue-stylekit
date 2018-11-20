<template>
  <label class="switch">
    <input
      ref="input"
      :disabled="isDisabled"
      :checked="checked ? 'checked' : ''"
      :name="fieldName"
      type="checkbox"
      class="switch-element"
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
    checkIdAllChecked:{
      type:Boolean,
      default: false
    },
    value:{
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
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
  computed:{
    fieldName () {
      return this.name || 'input-field__'+this._uid;
    },
  },
  methods: {

    bindEvents() {
      if (this["_events"]) {
        Object.keys(this["$listeners"]).map(eventName => {
          this.$refs.input.addEventListener(
            eventName,
            this["$listeners"][eventName]
          );
        });
      }
      this.$on('emittoswitcher',(data)=>{
        if (data && data[this._uid]){
          console.info('!!!',this.$el.querySelector(".switch-element").checked,data[this._uid]['checked'])
          this.$el.querySelector(".switch-element").checked = data[this._uid]['checked'];
        }
      })
      this.$refs.input.addEventListener('change',
      ()=>{
        setTimeout(()=>{
          const isChecked = Boolean(this.$refs.input.checked);
          this.$emit('changeswitcher', {
            name: this.fieldName,
            value: this.value,
            checked: isChecked,
            _uid: this._uid
          })
        },0)
      })
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
      const isChecked = Boolean(this.checked);
      this.$el.querySelector(".switch-element").checked = isChecked;
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
