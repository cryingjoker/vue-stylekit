import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import {tabsStore} from "./TabsStore.tsx";
@Component
class RtTabsNavItem extends Vue {

  @Prop({ default: null }) anchor: string;
  @Prop({ default: false }) removeBaseTag: boolean;
  @Prop({ default: null }) name: string;


  isActive: boolean = false;

  setActiveTabName() {
    tabsStore.setActiveTabName(this.name, this.anchor);
    const $el: any = this.$el;
    var currentScrollLeft = $el.parentNode.scrollLeft;
    $el.parentNode.scrollBy({
      top: 0,
      left: ($el.offsetLeft - ((window.innerWidth - $el.offsetWidth) / 2)) - currentScrollLeft,
      behavior: "smooth"
    });
  }

  mounted() {
    tabsStore.addTabName(this.name)
    if (this.removeBaseTag) {
      let baseNode = document.querySelector("base");
      if (baseNode) {
        baseNode.parentNode.removeChild(baseNode);
        let newBase = document.createElement("base");
        let url = location.href;
        url = url.split("#")[0];
        newBase.setAttribute("href", url);
        document.getElementsByTagName("head")[0].appendChild(newBase);
      }
    }
    if (this.anchor && document.location.hash) {
      if (document.location.hash.replace(/^\#/, "") === this.anchor) {
        tabsStore.setActiveTabName(this.name);
      }
    }
  }

  render(h: CreateElement): VNode {
    let tabsItemClass = "rt-tabs-navigation__item";
    if (this.name === tabsStore.activeName) {
      tabsItemClass += " rt-tabs-navigation__item--is-active";
    }

    return <div class={tabsItemClass} on-click={this.setActiveTabName}>
      <button class="rt-tabs-navigation__item-name">
        {this.$slots.default}
      </button>
    </div>;
  }

}

export default {
  component: RtTabsNavItem,
  name: "RtTabsNavItem"
};

