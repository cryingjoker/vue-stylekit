
<script type="text/jsx">
  import variables from '../../variables.json'
  const componentsList = {};

export default {
  name: "RtTabs",
  components: componentsList,
  props: {
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
      this.tabletSize = parseInt(variables['tablet-step-size']);
      this.mobileSize = parseInt(variables['mobile-step-size']);
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
    return <div class={"rt-tabs "+(this.deviceType && !this.dontUseAdaptive ? "rt-tabs-"+this.deviceType : '')}>
      <div class="rt-tabs-navigation-wrapper">
        <div style={this.navigationStyle} class="rt-tabs-navigation">

          {this.$slots.navigation}
      </div>
    </div>
    <div class="rt-tabs-content">
      {this.$slots.content}
    </div>
  </div>
  }
};
</script>
