<script type="text/jsx">

const componentsList = {};


export default {
  name: 'RtFullscreenImage',
  components: componentsList,
  data: () => ({
    isIos: false,
  }),
  props: {
    backgroundImage: {
      type: String,
      default: null,
      required: true
    }
  },

  mounted() {
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)){
      this.isIos = true;
    }
  },

  render(h) {
    const styleObject = {};
          styleObject.backgroundImage = 'url('+this.backgroundImage+')';

    return <div class={"rt-fullscreen-image"+(this.isIos ? "rt-fullscreen-image--ios" : "")}>
      <div class="rt-fullscreen-image__element" image-url={this.backgroundImage} style={styleObject}>
        {this.$slots.default}
      </div>
    </div>;
  }
};
</script>
