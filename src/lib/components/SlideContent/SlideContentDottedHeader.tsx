import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import color from "../../color.json";
import { IColor } from "../../colorInterface";

@Component
class SlideContentDottedHeader extends Vue {
  @Prop({ default: false }) isOpen: boolean;

  render(h: CreateElement): VNode {
    let headerClass = 'rt-slide-content-dotted-header';
    if(this.isOpen){
      headerClass += ' rt-slide-content-dotted-header--is-active';
    }
    return <div class={headerClass} ref="header">{this.$slots.default}</div>
  }
}

export default {
  component: SlideContentDottedHeader,
  name: "RtSlideContentDottedHeader"
};


