<template>
  <div
    :class="[`${cmpName}-slide`, { 'not-shown': !shown }, getCustomClass]"
    :style="
      `
      padding-right: ${offsetSlide}px;
    `
    "
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "RtSlide",
  props: {
    slideClasses: {
      type: String
    },
    loaded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      shown: true
    };
  },
  computed: {
    cmpName() {
      return this.$parent.cmpName || "RtSlide";
    },
    left() {
      return this.$el.getBoundingClientRect().left;
    },
    right() {
      return this.left + this.width;
    },
    offsetSlide() {
      return this.$parent.offsetSlide;
    },
    getCustomClass() {
      return this.slideClasses || this.$parent.slidesClasses;
    }
  },
  methods: {
    /**
     * Делает видимым слайд или скрывает его
     * @param flag - Принудительно назначить статус видимости
     */
    toggle(flag) {
      this.shown = flag !== undefined ? flag : !this.shown;
    },
    width() {
      return this.$el.clientWidth;
    }
  }
};
</script>
