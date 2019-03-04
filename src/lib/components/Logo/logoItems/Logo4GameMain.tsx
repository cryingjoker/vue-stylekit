import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from "vue-property-decorator";
import {ILogoComponent} from "./logoItems.interface";

declare module 'vue/types/vue' {
  interface Vue {
    _uid: number
  }
}
@Component
class fourGameMainClass extends Vue{
  @Prop({ default: null }) width: string;
  @Prop({ default: null }) height: string;
  @Prop({ default: null }) centerColor: string;
  @Prop({ default: null }) color: string;
  @Prop({ default: null }) bottomColor: string;
  @Prop({ default: null }) background: string;

  render(h: CreateElement): VNode {
    return <div className="rt-logo">svg empty</div>

  }
}

export const fourGameMain:ILogoComponent = {
  name: 'fourGameMain',
  component: fourGameMainClass
}
