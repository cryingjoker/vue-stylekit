import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import { tabsStore } from "./TabsStore.tsx";

@Component
class RtTabsContentItem extends Vue {

  @Prop({ default: "" }) name: string;
  isActive: boolean = false;
  parentid: string = "";
  namesArray: any;
  activeName: string = "";


  onUpdateTabsStore(){
    this.$forceUpdate()
  }


  created() {
    tabsStore.addWatcher(this.onUpdateTabsStore);
  }



  render(h: CreateElement): VNode {
    if(tabsStore.tabsNames[this.name]) {
      const tabsParentUid = tabsStore.tabsNames[this.name]
      if (tabsStore.tabsParents[tabsParentUid] && tabsStore.tabsParents[tabsParentUid][this.name] && tabsStore.tabsParents[tabsParentUid][this.name].isActive) {
        return <div class="rt-tabs-content__item">{this.$slots.default}</div>;
      }
    }

    return null;
  }

}

export default {
  component: RtTabsContentItem,
  name: "RtTabsContentItem"
};



