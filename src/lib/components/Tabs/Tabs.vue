<script type="text/jsx">
  import variables from '../../variables.json';
  const componentsList = {};

export default {
  name: "RtTabs",
  components: componentsList,
  props: {
    roundTabletView:{
      type: Boolean,
      default: false
    },
    dontUseAdaptive:{
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    navigationHorizontalPadding: {
      type: Number,
      default: null
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const dataObj = {
      RtTabs: {
        activeName: "",
        setActiveTabName: this.setActiveTabName,
        addTabName: this.addTabName,
        namesArray: []
      },
      activeTabIndex: 0,
      tabletSize: null,
      mobileSize: null,
      deviceType: 'pc'
    };

    return dataObj;
  },
  provide() {
    const RtTabs = this.RtTabs;
    return { RtTabs };
  },
  computed: {
    navigationStyle() {
      const style = {};
      if (this.navigationHorizontalPadding) {
        style.paddingLeft = this.navigationHorizontalPadding + "px";
        style.paddingRight = this.navigationHorizontalPadding + "px";
      }

      return style;
    }
  },
  mounted: function() {
    if(!this.dontUseAdaptive) {
      this.tabletSize = parseInt(variables['tablet-upper-limit']);
      this.mobileSize = parseInt(variables['mobile-upper-limit']);
      window.addEventListener("resize", this.checkDeviceType);
      this.checkDeviceType();
    }
  },
  updated: function(){
    window.removeEventListener("resize", this.checkDeviceType);
    window.addEventListener("resize", this.checkDeviceType);
  },

  methods: {
    checkDeviceType(){
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
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
    },
    setActiveTabName(name, hashAnchor) {
      this.RtTabs.activeName = name;
      window.dispatchEvent(new Event("resize"));
      if (hashAnchor) {
        window.history.replaceState(undefined, undefined, "#" + hashAnchor);
      }
    },
    addTabName(name) {
      if (this.RtTabs.namesArray.length === 0) {
        this.setActiveTabName(name);
      }
      this.RtTabs.namesArray.push(name);
    }
  },
  render(){

    if(this.vertical && window.innerWidth <= this.mobileSize) {
      return <div class="rt-tabs rt-tabs--vertical">
        <div class="rt-tabs-navigation">
          {this.$slots.navigation}
        </div>
      </div>;
    } else {
      return <div class={"rt-tabs " +
      (this.roundTabletView ? "rt-tabs--round-tablet-view " : "") +
      (this.deviceType && !this.dontUseAdaptive ? "rt-tabs-"+this.deviceType : '') +
      (this.vertical ? " rt-tabs--vertical" : "")}>
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
};
</script>
