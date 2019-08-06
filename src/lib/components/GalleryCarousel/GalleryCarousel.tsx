import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import variables from "../../../lib/variables.json";

@Component
class GalleryCarousel extends Vue {

  stopAnimation: boolean = false;

  mounted() {
  }

  public $refs: {
    carousel: HTMLElement
  };

  nextSlide() {
    if (!this.stopAnimation) {
      this.stopAnimation = true;
      let corousel: HTMLElement = this.$refs.carousel;
      let corouselItems: NodeListOf<HTMLElement> = corousel.querySelectorAll(".rt-gallery-carousel-item");
      let firstItem: HTMLElement = corouselItems[0];
      let innerWidth: number = window.innerWidth;
      if (innerWidth <= parseInt(variables["mobile-upper-limit"])) {
        firstItem.style.marginLeft = "-47vw";
      } else if (innerWidth <= parseInt(variables["tablet-upper-limit"])) {
        firstItem.style.marginLeft = "-20%";
      } else {
        firstItem.style.marginLeft = "-12.5%";
      }
      setTimeout(() => {
        firstItem.removeAttribute("style");
        corousel.appendChild(firstItem);
        setTimeout(() => {
          this.stopAnimation = false;
        }, 10);
      }, 500);
    }
  }

  previousSlide() {
    if (!this.stopAnimation) {
      this.stopAnimation = true;
      let corousel: HTMLElement = this.$refs.carousel;
      let corouselItems: NodeListOf<HTMLElement> = corousel.querySelectorAll(".rt-gallery-carousel-item");
      let lastItem: HTMLElement = corouselItems[corouselItems.length - 1];
      let innerWidth: number = window.innerWidth;
      if (innerWidth <= parseInt(variables["mobile-upper-limit"])) {
        lastItem.style.marginLeft = "-47vw";
      } else if (innerWidth <= parseInt(variables["tablet-upper-limit"])) {
        lastItem.style.marginLeft = "-20%";
      } else {
        lastItem.style.marginLeft = "-12.5%";
      }

      corousel.prepend(lastItem);
      setTimeout(() => {
        lastItem.removeAttribute("style");
      },50)

      setTimeout(() => {

        setTimeout(() => {
          this.stopAnimation = false;
        }, 10);
      }, 500);
    }
  }

  render(h: CreateElement): VNode {
    return <div class="rt-gallery-carousel" ref="carousel">
      <div class="rt-gallery-carousel-arrow rt-gallery-carousel-arrow--left" ref="arrow-left"
           onClick={this.previousSlide}>
        <svg class="rt-gallery-carousel-arrow__icon" width="12px" height="20px" viewBox="0 0 12 20" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="200-LP_Igrovoi-magaz" transform="translate(-40.000000, -816.000000)" fill="#FF4F12">
              <polygon id="Fill-1-Copy-2"
                       points="49.7179106 816 40 825.998333 49.7179106 836 52 833.651667 52 833.648333 44.5836145 825.998333 52 818.351667 52 818.348333"></polygon>
            </g>
          </g>
        </svg>
      </div>
      <div class="rt-gallery-carousel-arrow rt-gallery-carousel-arrow--right" ref="arrow-right"
           onClick={this.nextSlide}>
        <svg class="rt-gallery-carousel-arrow__icon" width="12px" height="20px" viewBox="0 0 12 20" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="200-LP_Igrovoi-magaz" transform="translate(-1410.000000, -816.000000)" fill="#FF4F12">
              <polygon id="Fill-1-Copy"
                       transform="translate(1416.000000, 826.000000) scale(-1, 1) translate(-1416.000000, -826.000000) "
                       points="1419.71791 816 1410 825.998333 1419.71791 836 1422 833.651667 1422 833.648333 1414.58361 825.998333 1422 818.351667 1422 818.348333"></polygon>
            </g>
          </g>
        </svg>
      </div>
      {this.$slots.default}
    </div>;
  }
}

export default {
  component: GalleryCarousel,
  name: "RtGalleryCarousel"
};
