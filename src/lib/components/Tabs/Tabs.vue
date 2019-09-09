<script type="text/jsx">
  import variables from "../../../lib/variables.json";

  const componentsList = {};


  export default {
    name: "RtTabs",
    components: componentsList,
    props: {
      roundTabletView: {
        type: Boolean,
        default: false
      },
      roundTabletViewMaxWidth: {
        type: Boolean,
        default: false
      },
      fillContent: {
        type: Boolean,
        default: false
      },
      justifyAllWidth: {
        type: Boolean,
        default: false
      },
      dontUseAdaptive: {
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
      },
      positionCenter: {
        type: Boolean,
        default: false

      }
    },
    data: () => ({
      activeTabIndex: 0,
      tabletSize: null,
      mobileSize: null,
      deviceType: "pc"
    }),


    computed: {},

    mounted: function() {
      if (!this.dontUseAdaptive) {
        this.tabletSize = parseInt(variables["tablet-upper-limit"]);
        this.mobileSize = parseInt(variables["mobile-upper-limit"]);
        window.addEventListener("resize", this.checkDeviceType);
        this.checkDeviceType();
      }
    },

    updated() {
      window.removeEventListener("resize", this.checkDeviceType);
      window.addEventListener("resize", this.checkDeviceType);
    },
    beforeDestroy: function() {
    },
    methods: {
      checkDeviceType() {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
        const width = (iOS) ? screen.width : window.innerWidth;
        if (width <= this.mobileSize) {
          this.deviceType = "mobile";
        } else {
          if (width <= this.tabletSize) {
            this.deviceType = "tablet";
          } else {
            this.deviceType = "pc";
          }
        }
      },

      setActiveTabName(name, hashAnchor = false) {
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
      },

      navigationStyle() {
        const style = {};
        if (this.navigationHorizontalPadding) {
          style.paddingLeft = this.navigationHorizontalPadding + "px";
          style.paddingRight = this.navigationHorizontalPadding + "px";
        }
        return style;
      }
    },
    render(h){
      let classNames = "rt-tabs";
      if (this.vertical && window.innerWidth <= this.mobileSize) {
        classNames += " rt-tabs--vertical";
      } else {
        if (this.roundTabletView) {
          classNames += " rt-tabs--round-tablet-view";
        }
        if (this.deviceType && !this.dontUseAdaptive) {
          classNames += " rt-tabs-" + this.deviceType;
        }
      }
      if (this.positionCenter) {
        classNames += " rt-tabs--centered";
      }
      if (this.fillContent) {
        classNames += " rt-tabs--fill";
        if (this.justifyAllWidth) {
          classNames += " rt-tabs--justify-all-width";
        }
      }
      // fillContent
      if (this.vertical && window.innerWidth <= this.mobileSize) {
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
  };
</script>
