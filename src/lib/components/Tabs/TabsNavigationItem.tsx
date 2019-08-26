import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import { tabsStore } from "./TabsStore.tsx";

@Component
class RtTabsNavItem extends Vue {

  @Prop({ default: null }) anchor: string;
  @Prop({ default: false }) removeBaseTag: boolean;
  @Prop({ default: null }) name: string;

  parentid: string = "";
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
    tabsStore.addTabUuid(this.$parent._uid, this.name);
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
        this.setActiveTabName();
      }
    }
    setTimeout(()=>{
      if(this.$parent['roundTabletView'] && this.$parent['roundTabletViewMaxWidth']){
        tabsStore.setTabWidth(this.$parent._uid,this.$el['offsetWidth']+2)
      }
    },2000)

  }
  onUpdateTabsStore(){
    this.$forceUpdate()
  }


  created() {
    tabsStore.addWatcher(this.onUpdateTabsStore);
  }


  render(h: CreateElement): VNode {
    let tabsItemClass = "rt-tabs-navigation__item";
    if (tabsStore.tabsParents[this.$parent._uid] && tabsStore.tabsParents[this.$parent._uid][this.name].isActive) {
      tabsItemClass += " rt-tabs-navigation__item--is-active";
    }

    if(tabsStore.tabsParents[this.$parent._uid] && tabsStore.tabsParents[this.$parent._uid].width){
      return <div class={tabsItemClass} on-click={this.setActiveTabName} style={{ 'width': (tabsStore.tabsParents[this.$parent._uid].width+'px') }}  >
        <button class="rt-tabs-navigation__item-name"  >
          {this.$slots.default}
        </button>
      </div>;
    }else {
      return <div class={tabsItemClass} on-click={this.setActiveTabName}>
        <button class="rt-tabs-navigation__item-name">
          {this.$slots.default}
        </button>
      </div>;
    }
  }

}

export default {
  component: RtTabsNavItem,
  name: "RtTabsNavItem"
};

