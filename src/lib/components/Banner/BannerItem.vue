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
    lazyImage: {
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
    },
    isGameBannerItem:{
      type: Boolean,
      default: false
    },
    ga: {
      type: Object,
      default: null
    },
    patternBackground: {
      type: Boolean,
      default: false
    },
    patternTopColor: {
      type: String,
      default: ''
    },
    patternLeftColor: {
      type: String,
      default: ''
    },
    patternRightColor: {
      type: String,
      default: ''
    },
    patternType: {
      type: Number,
      default: 1
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

    bannerItemWrapperClass(){
      let bannerItemWrapperClass = "";
      if(this.isGameBannerItem){
        bannerItemWrapperClass += 'rt-banner__item-wrapper rt-banner__item-wrapper-game';
      }
      return bannerItemWrapperClass;
    },
    bannerStyle() {
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
      let className = " rt-banner__item-wrapper";
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
        isWhiteColor: this.isWhiteColor,
        id: this.id
      };
      if (this.backgroundImage) {
        bannerItemData.backgroundImage = this.lazyImage || this.backgroundImage;
        if (this.lazyImage) {
          this.loadImageAsync(this.backgroundImage, img => {
            bannerItemData.backgroundImage = this.backgroundImage;
          });
        }
      }
      if(this.backgroundColor){
        bannerItemData.backgroundColor = this.backgroundColor
      }
      if(this.patternBackground) {
        bannerItemData.patternBackground = this.patternBackground,
        bannerItemData.patternType = this.patternType,
        bannerItemData.patternTopColor = this.patternTopColor,
        bannerItemData.patternLeftColor = this.patternLeftColor,
        bannerItemData.patternRightColor = this.patternRightColor
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
      if(this.isGameBannerItem) {
        bannerItemData.isGameBannerItem = this.isGameBannerItem;
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
  mounted () {
    if (this.ga) {
      this.activateEventToLink();
    }
  },
  methods: {
    normalizeVariable(variable) {
      if (typeof variable === "number") {
        variable += "px";
      }
      return variable;
    },
    activateEventToLink () {
      if (this.$el.querySelector('a')) {
        let ga = this.ga;
        let parentId = this.RtBanners.id;
        let currentKey = this.index;
        this.$el.querySelector('a').addEventListener('click', function(e){
          if (!this.getAttribute('data-ga-pushed')) {
            e.preventDefault();
            if (!window.dataLayer) {
              window.dataLayer = [];
            }
            window.dataLayer.push({
              event: 'b2c',
              type: 'banner_click',
              banner_name: ga.name,
              banner_id: parentId,
              banner_place: currentKey + 1,
              banner_section: ga.section || window.location.pathname
            });
            this.setAttribute('data-ga-pushed', 'true');
            this.click();
          }
        }, false);
      }
    },
    loadImageAsync (src, resolve, reject) {
      let image = new Image();
      image.src = src;
      image.onload = function () {
        resolve({
          naturalHeight: image.naturalHeight,
          naturalWidth: image.naturalWidth,
          src: image.src
        });
      };
      image.onerror = function (e) {
        reject(e);
      };
    }
  },
  render(h){
    const content = () => {
      if(this.isGameBannerItem){
        return <rt-banner-video-game-contron></rt-banner-video-game-contron>;
      }
      return null;
    };
    //return <div style={this.bannerStyle} class={"rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : "")} >{this.$slots.default}</div>
    if (this.hasCustomContent) {
      let bannerClass = "rt-banner__item";
      if(this.RtBanners.activeIndex) {
        bannerClass += " rt-banner__item--is-active";
      }

      //return <div style={this.bannerStyle} class={"rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : "")} >{this.$slots.default}</div>
      return <div class={"rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : "")} style={this.bannerStyle}>
        {this.$slots.default}
        {content()}
        </div>;
    } else {

      return <div style={this.bannerStyle} class={"rt-banner-content" + this.bannerClass}>
          <div class="rt-banner-content__inner">
            {this.$slots.default}
            {content()}
            </div>
        </div>
    }
  }
};
</script>
