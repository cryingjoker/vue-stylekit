<script type="text/jsx">
const componentsList = {};

export default {
  name: "RtParallaxContainer",
  components: componentsList,
  data: () => ({
    isIos: false
  }),
  props: {
    backgroundImage: {
      type: String,
      default: null,
      required: true
    }
  },

  render(h) {
    return <div class={"rt-parallax-container"}>{this.$slots.default}</div>;
  }
};
</script>
