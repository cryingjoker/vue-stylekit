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
        <rt-banner-paginator-item v-for="(option, index) in RtBanners.items" :key="'paginator-index'+Math.random().toString(5).slice(4)" :index="index" />

      </div>
    </div>
    <div class="rt-banner-image" :style="imageStyle">
      <svg v-if="!isFullscreenImage" class="rt-banner-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185 500" transform='translate(-50% 0)'>
        <polygon points="0 0,0 500,185 0 "/>
      </svg>
      <svg v-if="!isFullscreenImage" class="rt-banner-right-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185 500">
        <polygon points="0 500,185 0,0 0"/>
      </svg>
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
  props: {
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
    }
  },
  data() {
    return {
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
    const RtBanners = this.RtBanners || {};
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
  },
  methods: {
    setActiveItem(index) {
      this.RtBanners.activeIndex = index;
      this.setStartTimer();
    },
    setStartTimer() {
      if (this.RtBanners.timer) {
        clearTimeout(this.RtBanners.timer);
      }
      this.RtBanners.timer = setTimeout(() => {
        const index =
          (this.RtBanners.activeIndex + 1) % this.RtBanners.items.length;
        this.RtBanners.activeIndex = index;
        this.setStartTimer();
      }, this.sleepTime);
    }
  }
};
</script>
