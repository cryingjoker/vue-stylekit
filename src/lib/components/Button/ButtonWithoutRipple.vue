<template>
  <button
    :class="{ 'rt-button--is-block': isBlock }"
    class="rt-button rt-button-no-wive"
    @click="triggerClick($event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "RtButtonWithoutRipple",
  props: {
    isBlock: Boolean
  },
  methods: {
    triggerClick($event) {
      this.$emit("click", $event);
    }
  }
};
</script>
