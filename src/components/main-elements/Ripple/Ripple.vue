<!--@touchmove.passive-->
<!--@mousedown.passive-->
<!--@touchstart.passive-->
<template>
  <div class="ripple"
       @mousedown.passive="startRipple"
  >
    <rt-ripple-wave v-for="ripple in ripplesList" :key="ripple.key" :wave-style="ripple.waveStyles" @on-timer-end="removeWave(ripple.key)" />
    <slot />
  </div>
</template>

<script>
import RippleWave from "./RippleWave.vue"
const componentsList = {}
componentsList[RippleWave.name] = RippleWave
export default {
  name: "RtRipple",
  components: componentsList,
  props: {
    notRender: {
      type: Boolean,
      default : false
    }
  },
  data: () => ({
    ripplesList: []
  }),
  mounted: function() {},
  methods: {
    startRipple($event) {
      if (!this.notRender) {
        const size = this.getElementSize()
        const hitPosition = this.getHitPosition($event, size)
        const sizeNormalize = size + "px"
        const sizeOffsetNormalize = (-1 * size) / 2 + "px"
        const hash = Math.random()
          .toString(36)
          .slice(4)
        this.ripplesList.push({
          waveStyles: {
            width: sizeNormalize,
            height: sizeNormalize,
            "margin-top": sizeOffsetNormalize,
            "margin-left": sizeOffsetNormalize,
            ...hitPosition
          },
          key: hash
        })
      }
    },
    getElementSize() {
      const { offsetWidth, offsetHeight } = this.$el
      return Math.round(Math.max(offsetWidth, offsetHeight, 20))
    },
    removeWave(hashKey) {
      const index = this.ripplesList.findIndex(item => {
        return item.id === hashKey
      })
      this.ripplesList.splice(hashKey, 1)
    },
    getHitPosition($event, elementSize) {
      return {
        left: $event.offsetX + "px",
        top: $event.offsetY + "px"
      }
    }
  }
}
</script>
