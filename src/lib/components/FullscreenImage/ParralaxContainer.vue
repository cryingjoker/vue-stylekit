<script type="text/jsx">
const componentsList = {};

export default {
  name: "RtParallaxContainer",
  components: componentsList,
  props: {
    backgroundImage: {
      type: String,
      default: null,
      required: true
    }
  },
  data: () => ({
    isIos: false
  }),

  render(h) {
    return <div class={"rt-parallax-container"}>{this.$slots.default}</div>;
  }
};
</script>
