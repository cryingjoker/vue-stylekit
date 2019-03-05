<template>
  <div :class="annotationClasses" class="rt-annotation">
    <p class="rt-annotation__title rt-font-paragraph" @click="toggleOpen();">
      {{ label }}

      <svg
        class="rt-annotation__arrow"
        width="12px"
        height="7px"
        viewBox="0 0 12 7"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Page-1" stroke-width="1">
          <g transform="translate(-132.000000, -2341.000000)">
            <g
              id="Group-3-Copy-2"
              transform="translate(132.000000, 2332.000000)"
            >
              <polygon
                id="Shape-Copy"
                points="10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"
              />
            </g>
          </g>
        </g>
      </svg>
    </p>
    <div class="rt-annotation__content"><slot name="content" /></div>
  </div>
</template>

<script>
export default {
  name: "RtAnnotation",
  components: {},
  props: {
    open:{
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
    }
  }
};
</script>
