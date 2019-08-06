import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
class GalleryCarouselItem extends Vue {


  mounted() {

  }

  render(h: CreateElement): VNode {
    return <div class="rt-gallery-carousel-item">{this.$slots.default}</div>;
  }
}


export default {
  component: GalleryCarouselItem,
  name: "RtGalleryCarouselItem"
};
