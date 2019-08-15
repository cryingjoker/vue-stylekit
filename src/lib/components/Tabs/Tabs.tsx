import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop, Watch, Provide } from "vue-property-decorator";
import variables from "../../../lib/variables.json";

@Component
class RtTabs extends Vue {

  @Prop({default: false}) roundTabletView: boolean;
  @Prop({default: false}) fillContent: boolean;
  @Prop({default: false}) justifyAllWidth: boolean;

  @Prop({default: false}) dontUseAdaptive: boolean;
  @Prop({default: false}) isDisabled: boolean;
  @Prop({default: null}) navigationHorizontalPadding: number;
  @Prop({default: false}) vertical: boolean;
  @Prop({default: false}) positionCenter: boolean

  activeTabIndex: number = 0;
  tabletSize:  number  = null;
  mobileSize: number = null;
  deviceType: string = 'pc';
  @Provide('RtTabs') RtTabs  = {
    activeName: "",
    setActiveTabName: this.setActiveTabName,
    addTabName: this.addTabName,
    namesArray: []
  };

  checkDeviceType(){
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    const width = (iOS) ? screen.width : window.innerWidth;
    if(width <= this.mobileSize) {
      this.deviceType = 'mobile';
    }else{
      if (width <= this.tabletSize){
        this.deviceType = 'tablet';
      }else{
        this.deviceType = 'pc';
      }
    }
  }
  setActiveTabName(name, hashAnchor? ) {
    this.RtTabs.activeName = name;
    window.dispatchEvent(new Event("resize"));
    if (hashAnchor) {
      window.history.replaceState(undefined, undefined, "#" + hashAnchor);
    }
  }
  addTabName(name) {
    if (this.RtTabs.namesArray.length === 0) {
      this.setActiveTabName(name);
    }
    this.RtTabs.namesArray.push(name);
  }

  navigationStyle = ()=>{
    const style: any = {};
    if (this.navigationHorizontalPadding) {
      style.paddingLeft = this.navigationHorizontalPadding + "px";
      style.paddingRight = this.navigationHorizontalPadding + "px";
    }
    return style;
  }

  mounted() {
    if(!this.dontUseAdaptive) {
      this.tabletSize = parseInt(variables['tablet-upper-limit']);
      this.mobileSize = parseInt(variables['mobile-upper-limit']);
      window.addEventListener("resize", this.checkDeviceType);
      this.checkDeviceType();
    }
  }
  updated(){
    window.removeEventListener("resize", this.checkDeviceType);
    window.addEventListener("resize", this.checkDeviceType);
  }


  public $refs: {
    carousel: HTMLElement
  };


  render(h: CreateElement): VNode {
    let classNames = "rt-tabs";
    if(this.vertical && window.innerWidth <= this.mobileSize){
        classNames += " rt-tabs--vertical"
    }else{
      if(this.roundTabletView) {
        classNames += " rt-tabs--round-tablet-view"
      }
      if(this.deviceType && !this.dontUseAdaptive){
        classNames += " rt-tabs-"+this.deviceType
      }
    }
    if(this.fillContent){
      classNames += " rt-tabs--fill"
      if(this.justifyAllWidth){
        classNames += " rt-tabs--justify-all-width"
      }
    }
    // fillContent
    if(this.vertical && window.innerWidth <= this.mobileSize) {
      return <div class={classNames}>
        <div class="rt-tabs-navigation">
          {this.$slots.navigation}
        </div>
      </div>;
    } else {
      return <div class={classNames}>
        <div class="rt-tabs-navigation-wrapper">
          <div style={this.navigationStyle} class="rt-tabs-navigation">
            {this.$slots.navigation}
          </div>
        </div>
        <div class="rt-tabs-content">
          {this.$slots.content}
        </div>
      </div>;
    }
  }
}

export default {
  component: RtTabs,
  name: "RtTabs"
};
