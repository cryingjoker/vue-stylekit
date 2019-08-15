import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop, Watch, Inject } from "vue-property-decorator";
import variables from "../../../lib/variables.json";

@Component
class RtTabsNavItem extends Vue {

  @Prop({ default: null }) anchor: string;
  @Prop({ default: false }) removeBaseTag: boolean;
  @Prop({ default: null }) name: string;


  isActive: boolean = false;
  @Inject() readonly RtTabs!: any;

  setActiveTabName() {
    this.RtTabs.setActiveTabName(this.name, this.anchor);
    const $el: any = this.$el;
    var currentScrollLeft = $el.parentNode.scrollLeft;
    $el.parentNode.scrollBy({
      top: 0,
      left: ($el.offsetLeft - ((window.innerWidth - $el.offsetWidth) / 2)) - currentScrollLeft,
      behavior: "smooth"
    });
  }

  mounted() {
    this.RtTabs.addTabName(this.name);
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
        this.RtTabs.setActiveTabName(this.name);
      }
    }
  }

  render(h: CreateElement): VNode {
    let tabsItemClass = "rt-tabs-navigation__item";
    if (this.name === this.RtTabs.activeName) {
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

