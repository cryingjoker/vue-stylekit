import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import color from "../../color.json";
import { IColor } from "../../colorInterface";

@Component
class SlideContentDottedContent extends Vue {
  // @Prop({ default: false }) isOpen: boolean;
  // @Prop({ default: 'left-right' }) arrowPosition: string;
  // @Prop({ default: true }) needBorder: boolean;
  // @Prop({ default: false }) dottedView: boolean;
  // isOpenLocal = false;
  //
  // toggleOpen(){
  //   this.isOpenLocal= !this.i2sOpenLocal;
  // }

  render(h: CreateElement): VNode {
    return <h1>header</h1>
  }
}

export default {
  component: SlideContentDottedContent,
  name: "RtSlideContentDottedContent"
};


