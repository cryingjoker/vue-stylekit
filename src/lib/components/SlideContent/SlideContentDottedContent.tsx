import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
class SlideContentDottedContent extends Vue {
  @Prop({ default: false }) isOpen: boolean;
  render(h: CreateElement): VNode {
    let slideContentClass = 'rt-slide-content-dotted-content';
    if(this.isOpen){
      slideContentClass += ' rt-slide-content-dotted-content--is-active';
    }
    return <div class={slideContentClass} ref="header">{this.$slots.default}</div>
  }
}

export default {
  component: SlideContentDottedContent,
  name: "RtSlideContentDottedContent"
};


