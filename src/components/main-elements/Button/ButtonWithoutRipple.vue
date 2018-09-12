<template>
    <button class="rt-button rt-button-no-wive" :class="{'rt-button--is-block' : this.isBlock}"
            @click="triggerClick($event)">
        <slot></slot>
    </button>
</template>

<script>
  export default {
    props: {
      isBlock: Boolean
    },
    methods: {
      triggerClick($event) {
        this.$emit("click", $event);
      }
    },
    name: "rt-button-without-ripple"
  };
</script>
