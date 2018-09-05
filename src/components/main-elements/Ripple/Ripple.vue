<!--@touchmove.passive-->
<!--@mousedown.passive-->
<!--@touchstart.passive-->
<template>
    <div class="ripple"
         @mousedown.passive="startRipple">
        <rt-ripple-wave v-for="ripple in ripplesList" :key="ripple.key" :wave-style="ripple.waveStyles" @on-timer-end="removeWave(ripple.key)"></rt-ripple-wave>
        <slot></slot>
    </div>
</template>

<script>
import RippleWave from "./RippleWave.vue";
const componentsList = {};
componentsList[RippleWave.name] = RippleWave;
export default {
  props: ["notRender"],
  name: "rt-ripple",
  components: componentsList,
  mounted: function() {},
  data: () => ({
      ripplesList: []
  }),
  methods: {
    startRipple($event) {
      if (!this.notRender) {
        const size = this.getElementSize();
        const hitPosition = this.getHitPosition($event, size);
        const sizeNormalize = size + "px";
        const sizeOffsetNormalize = -1*size/2+"px";
        const hash = Math.random()
          .toString(36)
          .slice(4);
        this.ripplesList.push({
          waveStyles: {
            width: sizeNormalize,
            height: sizeNormalize,
            'margin-top': sizeOffsetNormalize,
            'margin-left': sizeOffsetNormalize,
            ...hitPosition
          },
          key: hash
        });

      }
    },
    getElementSize() {
      const { offsetWidth, offsetHeight } = this.$el;
      return Math.round(Math.max(offsetWidth, offsetHeight));
    },
    removeWave(hashKey) {
      const index = this.ripplesList.findIndex((item)=>{
          return item.id === hashKey;
      })
      this.ripplesList.splice(hashKey, 1);
    },
    getHitPosition($event, elementSize) {
      return {
        left:$event.offsetX,
        top: $event.offsetY
      };
    }
  }
};
</script>
