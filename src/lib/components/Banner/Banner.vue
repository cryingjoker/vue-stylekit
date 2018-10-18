<template>
  <div class="rt-banner" :class="banerClass" :style="bannerStyle">
    <div class="rt-container">
      <div class="rt-col-12">
        <div class="row">
          <div class="rt-col-1 md-d-none" />
          <div class="rt-col-4 rt-col-md-3">
            <div class="rt-space-right">
              <slot />
            </div>
          </div>
          <div class="rt-col-1 md-d-none" />
        </div>
      </div>
    </div>
    <div class="circle-switcher">
      <div v-if="RtBanners.items && RtBanners.items.length > 1" class="circle-switcher-container">
        <rt-banner-paginator-item :sleep-time="sleepTime" v-for="(option, index) in RtBanners.items" :key="'paginator-index'+Math.random().toString(5).slice(4)" :index="index" />
      </div>
    </div>
    <div class="rt-banner-image" :style="imageStyle"><svg v-if="!isFullscreenImage" class="rt-banner-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185 500" style='transform: translate(-50% 0)'>
        <polygon points="0 0,0 500,185 0 "/>
      </svg>
      <svg v-if="!isFullscreenImage" class="rt-banner-right-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185 500">
        <polygon points="0 500,185 0,0 0"/>
      </svg>
    </div>
    <div class="rt-banner-logo rt-container" v-if="bannerLogo">
      <div class="rt-col-12">
        <img class="rt-banner-logo__image" :src="bannerLogo" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import BannerPaginatorItem from './BannerPaginatorItem.vue';
const componentsList = {};

componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;

export default {
  name: 'RtBanner',
  components: componentsList,
  data: () => ({
    hasPause: false
  }),
  props: {
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
      default: 'none'
    },
    isWhiteColor: {
      type: Boolean,
      default: false
    },
    sleepTime: {
      type: Number,
      default: 5000
    },
    bannerLogo:{
      type: String,
      default: null
    }

  },
  data() {
    return {
      touchstartX: null,
      touchendX: null,
      RtBanners: {
        items: [],
        activeIndex: 0,
        setActiveItem: this.setActiveItem,
        setStartTimer: this.setStartTimer
      },
      isOpenListOnTop: false
    };
  },

  provide() {
    const RtBanners = this.RtBanners;
    return { RtBanners };
  },
  computed: {
    banerClass() {
      const classArray = {};
      const activeIndex = this.RtBanners.activeIndex;
      if (this.RtBanners.items[activeIndex]) {
        if (this.RtBanners.items[activeIndex].backgroundColor !== 'none') {
          classArray[
            'rt-banner--background-' +
              this.RtBanners.items[activeIndex].backgroundColor
          ] = true;
        }
        if (this.isFullscreenImage) {
          classArray['rt-banner--full-screen'] = true;
          if(this.justify){
            classArray['justify-'+this.justify] = true;
          }
        }

        if (this.RtBanners.items[activeIndex].isWhiteColor) {
          classArray['rt-banner--color-white'] = true;
        }
      }
      return classArray;
    },
    bannerStyle() {
      const styles = {};
      if (this.contentMinHeight) {
        if (typeof this.contentMinHeight === 'string') {
          styles.minHeight = this.contentMinHeight;
        } else {
          styles.minHeight = this.contentMinHeight + 'px';
        }
      }
      if (this.contentHeight) {
        if (typeof this.contentHeight === 'string') {
          styles.height = this.contentHeight;
        } else {
          styles.height = this.contentHeight + 'px';
        }
      }
      return styles;
    },
    imageStyle() {
      const styles = {};
      const activeIndex = this.RtBanners.activeIndex;
      if (this.RtBanners.items[activeIndex]) {
        styles.backgroundImage =
          'url(' + this.RtBanners.items[activeIndex].backgroundImage + ')';
      }
      return styles;
    }
  },
  mounted: function() {
    if (this.RtBanners.items.length > 0 && this.RtBanners.items[0].id) {
      this.setStartTimer();
    }
    this.addListners();
    this.calculateScroll();
  },
  beforeDestroy: function() {
    this.removeListners()
  },
  beforeUpdate: function(){
    this.removeListners()
  },
  updated: function(){
    this.addListners();
  },
  methods: {
    addListners(){
      this.$el.addEventListener("touchstart", this.setTouchStart);
      this.$el.addEventListener("touchend", this.setTouchEnd);
      window.addEventListener("scroll", this.debounceCalculateScroll);
      window.addEventListener("resize", this.debounceCalculateScroll);
    },
    removeListners(){
      this.$el.removeEventListener("touchstart", this.setTouchStart);
      this.$el.removeEventListener("touchend", this.setTouchEnd);
      window.removeEventListener("scroll", this.debounceCalculateScroll);
      window.removeEventListener("resize", this.debounceCalculateScroll);
    },
    debounceCalculateScroll: function() {
      this.calculateScroll();
      // need to understand why debounce not work
    },
    calculateScroll() {

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const el = this.$el;
      if (el.getBoundingClientRect().top  > window.innerHeight*1.5 || el.getBoundingClientRect().top < -0.5*window.innerHeight) {
        this.hasPause = true;
      } else {
        if (this.hasPause) {
          const index =
            (this.RtBanners.activeIndex + 1) % this.RtBanners.items.length;
          this.RtBanners.activeIndex = index;
        }
        this.hasPause = false;
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
    },
    setActiveItem(index) {

      if (!this.hasPause) {
        this.RtBanners.activeIndex = index;
        this.setStartTimer();
      }

    },
    setStartTimer() {
      if (this.RtBanners.timer) {
        clearTimeout(this.RtBanners.timer);
      }
      this.RtBanners.timer = setTimeout(() => {
        if (!this.hasPause) {
          const index =
            (this.RtBanners.activeIndex + 1) % this.RtBanners.items.length;
          this.RtBanners.activeIndex = index;
        }
        if(this.RtBanners.items.length > 1) {
          this.setStartTimer();
        }
      }, this.sleepTime);
    }
  }
};
</script>
