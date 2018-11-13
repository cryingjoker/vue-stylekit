<template>
  <div :class="spinnerClasses" class="spinner">
    <div class="spinner__big-circle">
      <svg
        class="spinner__icon"
        viewBox="0 0 82 82"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41 81c22.09139 0 40-17.90861 40-40S63.09139 1 41 1 1 18.90861 1 41"
          stroke="#70F"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <div class="spinner__small-circle">
      <svg
        class="spinner__icon"
        viewBox="0 0 42 42"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.15959713 1.20614758C3.78003905 4.98399778-1.57170089 16.46084948 2.20614758 26.84040287c3.77784848 10.37955338 15.2546972 15.73129973 25.63425529 11.95344955 10.37955808-3.7778502 15.73129802-15.2547019 11.95344955-25.63425529"
          stroke="#FF4F12"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "RtSpinner",
  props: {
    isFixed: Boolean,
    isAbsolute: Boolean,
    isSmall: Boolean,
    scale: Boolean,
    fill: Boolean
  },
  computed: {
    spinnerClasses() {
      return {
        "spinner--small-scale": this.scale,
        "spinner--small": this.isSmall,
        "spinner--fill": this.fill,
        "spinner--absolute": this.isAbsolute,
        "spinner--fixed": this.isFixed
      };
    }
  },
  mounted: function() {}
};
</script>
