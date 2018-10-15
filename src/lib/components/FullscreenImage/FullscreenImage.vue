<script type="text/jsx">

const componentsList = {};


export default {
  name: 'RtFullscreenImage',
  components: componentsList,
  props: {
    backgroundImage: {
      type: String,
      default: null,
      required: true
    },
    backgroundPosition: {
      type: String,
      default: null,
    }

  },

  mounted() {

  },

  render(h) {
    const styleObject = {};
          styleObject.backgroundImage = 'url('+this.backgroundImage+')';
    if(this.backgroundPosition){
      styleObject.backgroundPosition = this.backgroundPosition;
    }

    return <div class={"rt-fullscreen-image"}>
      <div class="rt-fullscreen-image__element" image-url={this.backgroundImage} style={styleObject}>
        {this.$slots.default}
      </div>
    </div>;
  }
};
</script>
