<!-- @touchmove.passive -->
<!-- @mousedown.passive -->
<!-- @touchstart.passive -->
<template>
  <div class="ripple" @mousedown="renderRipple">
    <slot />
  </div>
</template>

<script>
const componentsList = {};
export default {
  name: "RtRipple",
  components: componentsList,
  props: {
    notBindClick: {
      type: Boolean,
      default: false
    },
    notRender: {
      type: Boolean,
      default: false
    },
    twiceRender: {
      type: Boolean,
      default: false
    },
    waitParentClicked: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    ripplesList: []
  }),
  mounted: function () {
    if (this.waitParentClicked) {
      // For SEO-friendly click on buttons
      let startRipple = this.startRipple
      this.$el.style.pointerEvents = 'none';
      this.$parent.$on('click', function($event) {
        startRipple($event);
      })
    }
  },
  methods: {
    renderRipple($event) {
      if (!this.notBindClick) {
        this.startRipple($event);
      }
    },

    startRipple($event) {
      if (!this.notRender) {
        const size = this.getElementSize() * 1.5;
        const hitPosition = this.getHitPosition($event, size);
        const sizeNormalize = size + "px";
        const sizeOffsetNormalize = (-1 * size) / 2 + "px";
        const hash = Math.random()
          .toString(36)
          .slice(4);
        const style = {
          visability: "visible",
          transform: "scale(2)",
          width: sizeNormalize,
          height: sizeNormalize,
          marginTop: sizeOffsetNormalize,
          marginLeft: sizeOffsetNormalize,
          ...hitPosition
        };
        const el = document.createElement("div");
        el.className = "ripple-wave ripple-wave-active";
        this.$el.appendChild(el);
        setTimeout(() => {
          for (let i in style) {
            el.style[i] = style[i];
          }
          setTimeout(() => {
            el.remove()
          }, 400);
        }, 10);
      }
    },
    getElementSize() {
      const { offsetWidth, offsetHeight } = this.$el;
      return Math.round(Math.max(offsetWidth, offsetHeight, 20));
    },
    removeWave(hashKey) {
      this.ripplesList.splice(hashKey, 1);
    },
    getHitPosition($event) {
      return {
        left: $event.offsetX + "px",
        top: $event.offsetY + "px"
      };
    }
  }
};
</script>
