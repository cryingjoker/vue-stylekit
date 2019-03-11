<template>
  <div class="rtb-card__hint">
    <div
      class="rtb-card__hint__icon"
      @mouseover="this.showHint"
      @mouseleave="this.hideHint"
    >
      ?
    </div>
    <div v-show="active" class="rtb-card__hint__text">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hint",
  data() {
    return {
      active: false
    };
  },
  computed: {},
  mounted() {},
  created() {},

  methods: {
    showHint() {
      let hint = this.$el;
      hint.closest(".higher-z").style.zIndex = "2";
      this.active = true;
    },
    hideHint() {
      let hint = this.$el;
      hint.closest(".higher-z").style.zIndex = "1";
      this.active = false;
    }
  }
};
</script>
