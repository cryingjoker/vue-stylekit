<template>
  <transition name="ripple-wave" :duration="400">
    <div :style="style" class="ripple-wave ripple-wave-active" />
  </transition>
</template>

<script>
export default {
  name: 'RtRippleWave',
  props: {
    waveStyle: {
      type: Object,
      default: {}
    },
  },
  data: () => ({
    style: {},
  }),
  mounted: function() {
    setTimeout(() => {
      this.setElementStyle(this.$el);
    }, 10);
    setTimeout(() => {
      this.hideWive();
    }, 400);
  },
  methods: {
    setElementStyle() {
      const newStyle = {
        ...this.waveStyle,
        visability: 'visible',
        transform: 'scale(2)',
      };
      this.$el.style.cssText += this.getInlineStyle(newStyle);
    },
    getInlineStyle(styleObj) {
      let inlineStyle = [];
      Object.keys(styleObj).forEach(key => {
        inlineStyle.push(key + ':' + styleObj[key]);
      });
      return inlineStyle.join(';');
    },
    hideWive() {
      setTimeout(() => {
        this.end();
      }, 40);
    },
    end() {
      this.$emit('on-timer-end');
    },
  },
};
</script>
<style lang="css">
    .ripple-animation-enter {
        opacity: .26;
        transform: scale(.26) translateZ(0);
        transition: all 4000ms ease-out;
    }

    .ripple-animation-active {
        transition: all 4000ms ease-out;
    }
</style>
