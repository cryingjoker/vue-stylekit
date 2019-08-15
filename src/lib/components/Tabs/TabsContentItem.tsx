import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop, Watch, Inject } from "vue-property-decorator";
import variables from "../../../lib/variables.json";

@Component
class RtTabsContentItem extends Vue {

  @Prop({ default: '' }) name: string;
  isActive: boolean = false;
  @Inject() readonly RtTabs!: any;
  render(h: CreateElement): VNode {
    if (this.name === this.RtTabs.activeName) {
      return <div class="rt-tabs-content__item">{this.$slots.default}</div>;
    }
    return null;
  }

}
export default {
  component: RtTabsContentItem,
  name: "RtTabsContentItem"
};



