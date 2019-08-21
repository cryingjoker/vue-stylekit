import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import {tabsStore} from "./TabsStore.tsx";

@Component
class RtTabsContentItem extends Vue {

  @Prop({ default: '' }) name: string;
  isActive: boolean = false;
  render(h: CreateElement): VNode {
    if (this.name === tabsStore.activeName) {
      return <div class="rt-tabs-content__item">{this.$slots.default}</div>;
    }
    return null;
  }

}
export default {
  component: RtTabsContentItem,
  name: "RtTabsContentItem"
};



