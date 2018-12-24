<script type="text/jsx">
const componentsList = {};

export default {
  name: "RtBannerItem",
  components: componentsList,
  props: {
    hasCustomContent: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: null
    },
    mobileImageMaxHeight:{
      type: String,
      default: null
    },
    linkTarget: {
      type: String,
      default: null
    },
    ancorHashLink: {
      type: String,
      default: null
    },
    ancorGetParamsLink: {
      type: String,
      default: null
    },
    contentMinHeight: {
      type: [Number, String],
      default: null
    },
    contentHeight: {
      type: [Number, String],
      default: null
    },
    contentMobileMinHeight: {
      type: [Number, String],
      default: null
    },
    contentMobileHeight: {
      type: [Number, String],
      default: null
    },
    contentMinWidth: {
      type: [Number, String],
      default: null
    },
    contentMaxWidth: {
      type: [Number, String],
      default: null
    },
    backgroundVideo: {
      type: String,
      default: null
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundImage: {
      type: String,
      default: null
    },
    isWhiteColor: {
      type: Boolean,
      default: false
    },
    backgroundPosition: {
      type: String,
      default: null
    },
    slideTime: {
      type: [String, Number],
      default: null
    }
  },
  inject: {
    RtBanners: {}
  },

  data() {
    return {
      id: this._uid
    };
  },

  computed: {
    banerStyle() {
      const styles = {};

      if (this.contentMinWidth !== null) {
        styles.minWidth = this.normalizeVariable(this.contentMinWidth);
      }
      if (this.contentMaxWidth !== null) {
        styles.maxWidth = this.normalizeVariable(this.contentMaxWidth);
      }

      if (!this.RtBanners.isMobile) {
        if (this.contentMinHeight) {
          styles.minHeight = this.normalizeVariable(this.contentMinHeight);
        }
        if (this.contentHeight) {
          styles.height = this.normalizeVariable(this.contentHeight);
        }
        if (this.mobileImageMaxHeight) {
          styles.maxHeight = this.mobileImageMaxHeight;
        }
      } else {
        if (this.contentMobileMinHeight !== null) {
          styles.minHeight = this.normalizeVariable(
            this.contentMobileMinHeight
          );
        }
        if (this.contentMobileHeight !== null) {
          styles.height = this.normalizeVariable(this.contentMobileHeight);
        }
      }

      return styles;
    },
    bannerClass() {
      let className = "";
      if (this.RtBanners && this.RtBanners.activeIndex === this.index) {
        className += " rt-banner-content--active";
      }

      return className;
    }
  },
  beforeMount: function() {
    if (this.RtBanners) {
      this.index = this.RtBanners.items.length;
      const bannerItemData = {
        backgroundColor: this.backgroundColor,
        isWhiteColor: this.isWhiteColor,
        id: this.id
      };
      if (this.backgroundImage) {
        bannerItemData.backgroundImage = this.backgroundImage;
      }
      if (this.backgroundVideo) {
        bannerItemData.backgroundVideo = this.backgroundVideo;
      }
      if (this.slideTime) {
        bannerItemData.slideTime = this.slideTime;
      }
      if (this.ancorHashLink) {
        bannerItemData.ancorHashLink = this.ancorHashLink;
      }
      if (this.ancorGetParamsLink) {
        bannerItemData.ancorGetParamsLink = this.ancorGetParamsLink;
      }
      if (this.link) {
        bannerItemData.link = this.link;
      }
      if (this.linkTarget) {
        bannerItemData.linkTarget = this.linkTarget;
      }

      this.RtBanners.items.push(bannerItemData);
      if (this.ancorHashLink && location.hash) {
        if (location.hash.replace(/#/, "") === this.ancorHashLink) {
          this.RtBanners.activeIndex = this.RtBanners.items.length - 1;
        }
      }
      if (this.ancorGetParamsLink) {
        let getParams = location.href.split("?");
        if (getParams.length > 1) {
          if (getParams[1].search(this.ancorGetParamsLink) >= 0) {
            this.RtBanners.activeIndex = this.RtBanners.items.length - 1;
          }
        }
      }
      const preloadImage = new Image();
      preloadImage.src = this.backgroundImage;
    }
  },
  methods: {
    normalizeVariable(variable) {
      if (typeof variable === "number") {
        variable += "px";
      }
      return variable;
    }
  },
  render(h){
    if(this.hasCustomContent){
      return <div class={"rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : "")} >{this.$slots.default}</div>
    }else {
      return <div>
        <div style={this.banerStyle} class={"rt-banner-content" + this.bannerClass}>
          <div class="rt-banner-content__inner">{this.$slots.default}</div>
        </div>
      </div>
    }
  }
};
</script>
