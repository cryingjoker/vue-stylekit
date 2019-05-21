<template>
  <div :class="annotationClasses" class="rt-annotation">
    <p class="rt-annotation__title rt-font-paragraph" @click="toggleOpen()">
      {{ label }}

      <svg
        class="rt-annotation__arrow"
        width="12px"
        height="7px"
        viewBox="0 0 12 7"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-132.000000, -2341.000000)" stroke-width="1">
          <g
            transform="translate(132.000000, 2332.000000)"
          >
            <polygon
              points="10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"
            />
          </g>
        </g>
      </svg>
    </p>
    <div class="rt-annotation__content" :style="{maxHeight: allowHeight}">
      <div
        ref="contentHeightResolver"
        class="rt-annotation__content-height-resolver"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RtAnnotation",
  components: {},
  props: {
    open: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null,
      required: true
    },
    hasWhiteColor: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      allowHeight: null,
      isOpen: this.open
    };
  },
  computed: {
    annotationClasses() {
      return {
        "rt-annotation--white-color": this.hasWhiteColor,
        "rt-annotation--is-open": this.isOpen
      };
    }
  },
  mounted() {},
  created() {},
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
      this.allowHeight = this.isOpen ? `${parseInt(getComputedStyle(this.$refs.contentHeightResolver).height, 10) + 10}px` : null
    }
  }
};
</script>
