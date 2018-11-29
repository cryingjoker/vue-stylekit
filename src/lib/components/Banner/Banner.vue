<template>
  <div :class="banerClass" :style="bannerStyle" class="rt-banner">
    <div class="rt-container">
      <a
        v-if="
          RtBanners &&
            RtBanners.items &&
            RtBanners.items[RtBanners.activeIndex] &&
            RtBanners.items[RtBanners.activeIndex].link
        "
        :href="RtBanners.items[RtBanners.activeIndex].link"
        :target="RtBanners.items[RtBanners.activeIndex].linkTarget"
        class="rt-banner-content__link"
      />
      <div class="rt-col-12">
        <div class="row">
          <div class="rt-col-1 md-d-none td-d-none"/>
          <div class="rt-col-4 rt-col-md-3 height-fill rt-col-td-3 rt-td-space-left2">
            <slot />
          </div>
          <div class="rt-col-1 rt-col-td-3 md-d-none" />
        </div>
      </div>
    </div>
    <div class="circle-switcher">
      <div
        v-if="RtBanners.items && RtBanners.items.length > 1"
        class="circle-switcher-container"
      >
        <rt-banner-paginator-item
          v-for="(option, index) in RtBanners.items"
          :key="
            'paginator-index' +
              Math.random()
                .toString(5)
                .slice(4)
          "
          :is-stopped="isStopped"
          :sleep-time="option['slideTime'] || sleepTime"
          :is-pause="isPause"
          :index="index"
        />
      </div>
    </div>
    <div :style="imageStyle" class="rt-banner-image">
      <svg
        v-if="!isFullscreenImage"
        class="rt-banner-triangle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 185 500"
        style="transform: translate(-50% 0)"
      >
        <polygon points="0 0,0 500,185 0 " />
      </svg>

      <video
        v-if="backgroundVideo"
        ref="video"
        :src="backgroundVideo"
        autoplay
        muted
        class="rt-banner-video__content"
      />
      <svg
        v-if="!isFullscreenImage"
        class="rt-banner-right-triangle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 185 500"
      >
        <polygon points="0 500,185 0,0 0" />
      </svg>
    </div>
    <div v-if="bannerLogo" class="rt-banner-logo rt-container">
      <div class="rt-col-12">
        <img :src="bannerLogo" class="rt-banner-logo__image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import BannerPaginatorItem from "./BannerPaginatorItem.vue";
// import debounce from "debounce";
import variables from "../../variables.json";

const componentsList = {};

componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;

export default {
  name: "RtBanner",
  components: componentsList,
  props: {
    contentMobileHeight: {
      type: [Number, String],
      default: null
    },
    contentMobileMinHeight: {
      type: [Number, String],
      default: null
    },
    justify: {
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
    isFullscreenImage: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: "none"
    },
    isWhiteColor: {
      type: Boolean,
      default: false
    },
    sleepTime: {
      type: Number,
      default: 5000
    },
    bannerLogo: {
      type: String,
      default: null
    },
    setStopOnClick:{
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isMobile: false,
    isPause: false,
    touchstartX: null,
    touchendX: null,
    stopAnimation: false,
    RtBanners: {
      isMobile: false,
      items: [],
      activeIndex: -1,
      setActiveItem: null,
      setStartTimer: null
    },
    isOpenListOnTop: false,
    isStopped: false

  }),

  provide() {
    const RtBanners = this.RtBanners;
    return { RtBanners };
  },
  computed: {
    banerClass() {
      const classArray = {};
      const activeIndex = this.RtBanners.activeIndex;
      if (this.RtBanners.items[activeIndex]) {
        if (this.RtBanners.items[activeIndex].backgroundColor !== "none") {
          classArray[
            "rt-banner--background-" +
              this.RtBanners.items[activeIndex].backgroundColor
          ] = true;
        }
        if (this.isFullscreenImage) {
          classArray["rt-banner--full-screen"] = true;
          if (this.justify) {
            classArray["justify-" + this.justify] = true;
          }
        }

        if (this.RtBanners.items[activeIndex].isWhiteColor) {
          classArray["rt-banner--color-white"] = true;
        }
      }
      return classArray;
    },
    bannerStyle() {
      const styles = {};

      if (!this.RtBanners.isMobile) {
        if (this.contentMinHeight !== null) {
          styles.minHeight = this.normalizeVariable(this.contentMinHeight);
        }
        if (this.contentHeight) {
          styles.height = this.normalizeVariable(this.contentHeight);
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
    imageStyle() {
      const styles = {};
      const activeIndex = this.RtBanners.activeIndex;
      if (
        this.RtBanners.items[activeIndex] &&
        this.RtBanners.items[activeIndex].backgroundImage
      ) {
        styles.backgroundImage =
          "url(" + this.RtBanners.items[activeIndex].backgroundImage + ")";
      } else {
        styles.backgroundImage = "none";
      }
      if (
        this.RtBanners.items[activeIndex] &&
        this.RtBanners.items[activeIndex].backgroundVideo
      ) {
        this.backgroundVideo = this.RtBanners.items[
          activeIndex
        ].backgroundVideo;
      } else {
        this.backgroundVideo = null;
      }

      return styles;
    }
  },
  mounted: function() {
    if (this.RtBanners.items.length > 0 && this.RtBanners.items[0].id) {
      if (this.RtBanners.activeIndex < 0) {
        this.RtBanners.activeIndex = 0;
      }
      this.setStartTimer();
    }
    this.addListener();
    this.calculateScroll();
    this.calculateMobileOptions();
  },
  beforeMount() {
    this.RtBanners.setActiveItem = this.setActiveItem;
    this.RtBanners.setStartTimer = this.setStartTimer;
  },
  beforeUpdate() {
    this.removeListener();
  },
  updated() {
    this.addListener();
    this.calculateScroll();
  },
  beforeDestroy: function() {
    this.RtBanners.items = [];
    this.removeListener();
  },
  methods: {
    normalizeVariable(variable) {
      if (typeof variable === "number") {
        variable += "px";
      }
      return variable;
    },
    setStopAnimation() {
      this.isPause = true;
    },
    removeStopAnimation() {
      this.isPause = false;
      this.setStartTimer();
    },
    addListener() {
      this.$el.addEventListener("touchstart", this.setTouchStart, {
        passive: true
      });
      this.$el.addEventListener("touchend", this.setTouchEnd, {
        passive: true
      });
      this.$el.addEventListener("mouseenter", this.setStopAnimation, {
        passive: true
      });
      this.$el.addEventListener("mouseleave", this.removeStopAnimation, {
        passive: true
      });
      window.addEventListener("scroll", this.debounceCalculateScroll, {
        passive: false
      });
      window.addEventListener("resize", this.debounceCalculateResize, {
        passive: false
      });
      if(this.setStopOnClick) {
        this.$el.addEventListener("mousedown", this.stopPlaying, { passive: true });
      }
    },
    removeListener() {
      this.$el.removeEventListener("touchstart", this.setTouchStart);
      this.$el.removeEventListener("touchend", this.setTouchEnd);
      window.removeEventListener("scroll", this.debounceCalculateScroll);
      window.removeEventListener("resize", this.debounceCalculateResize);
      this.$el.removeEventListener("mouseenter", this.setStopAnimation);
      this.$el.removeEventListener("mouseleave", this.removeStopAnimation);
      if(this.setStopOnClick) {
        this.$el.removeEventListener("mousedown", this.stopPlaying);
      }
    },
    stopVideo() {
      if (this.$refs.video) {
        this.$refs.video.pause();
      }
    },
    playVideo() {
      if (this.backgroundVideo) {
        if (this.$refs.video) {
          this.$refs.video.play();
        } else {
          setTimeout(() => {
            this.playVideo();
          }, 100);
        }
      }
    },
    debounceCalculateScroll: function() {
      this.calculateScroll();
    },
    debounceCalculateResize: function() {
      this.calculateScroll();
      this.calculateMobileOptions();
    },
    calculateMobileOptions() {
      if (
        this.contentMobileHeight !== null ||
        this.contentMobileMinHeight !== null
      ) {
        const isMobile =
          window.innerWidth <= parseInt(variables["mobile-step-size"]);
        if (this.RtBanners.isMobile !== isMobile) {
          this.RtBanners.isMobile = isMobile;
        }
      }
    },
    calculateScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const el = this.$el;
      const deltaY = Math.max(window.innerHeight, el.offsetHeight);

      if (
        el.getBoundingClientRect().top > deltaY ||
        el.getBoundingClientRect().top < -1 * deltaY
      ) {
        if (!this.stopAnimation) {
          this.stopVideo();
        }
        this.stopAnimation = true;
      } else {
        if (this.stopAnimation) {
          const index =
            (this.RtBanners.activeIndex + 1) % this.RtBanners.items.length;
          this.RtBanners.activeIndex = index;
        }

        this.stopAnimation = false;
      }
      this.playVideo();
    },
    stopPlaying(){
      if(this.setStopOnClick) {
        this.isStopped = true;
      }
    },
    setTouchStart(e) {
      this.touchstartX = e.changedTouches[0].screenX;
    },
    setTouchEnd(e) {
      this.touchendX = e.changedTouches[0].screenX;
      this.calculateSwipe();
    },
    calculateSwipe() {
      if (Math.abs(this.touchendX - this.touchstartX) > 50) {
        if (this.touchendX > this.touchstartX) {
          this.RtBanners.activeIndex++;
          if (this.RtBanners.activeIndex >= this.RtBanners.items.length) {
            this.RtBanners.activeIndex = 0;
          }
        } else {
          this.RtBanners.activeIndex--;
          if (this.RtBanners.activeIndex < 0) {
            this.RtBanners.activeIndex = this.RtBanners.items.length - 1;
          }
        }
      }
    },
    setActiveItem(index) {
      this.RtBanners.activeIndex = index;
      this.setStartTimer();
    },
    setStartTimer() {
      const RtBanners = this.RtBanners;
      if (RtBanners && !this.isStopped) {
        if (RtBanners.timer) {
          clearTimeout(RtBanners.timer);
        }
        RtBanners.timer = setTimeout(() => {
          if (!this.stopAnimation && !this.isPause) {
            const index = (RtBanners.activeIndex + 1) % RtBanners.items.length;
            RtBanners.activeIndex = index;
          }
          if (RtBanners.items.length > 1) {
            this.setStartTimer();
          }
        }, RtBanners.items[RtBanners.activeIndex].slideTime || this.sleepTime);
      }
    }
  }
};
</script>
