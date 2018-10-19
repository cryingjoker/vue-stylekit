<template>
  <div class="rt-banner" :class="banerClass" :style="bannerStyle">
    <div class="rt-container">
      <div class="rt-col-12">
        <div class="row">
          <div class="rt-col-1 md-d-none"/>
          <div class="rt-col-4 rt-col-md-3">
            <div class="rt-space-right">
              <slot/>
            </div>
          </div>
          <div class="rt-col-1 md-d-none"/>
        </div>
      </div>
    </div>
    <div class="circle-switcher">
      <div v-if="RtBanners.items && RtBanners.items.length > 1" class="circle-switcher-container">
        <rt-banner-paginator-item :sleep-time="sleepTime" v-for="(option, index) in RtBanners.items"
                                  :key="'paginator-index'+Math.random().toString(5).slice(4)" :index="index"/>
      </div>
    </div>
    <div class="rt-banner-image" :style="imageStyle">
      <svg v-if="!isFullscreenImage" class="rt-banner-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185 500"
           style='transform: translate(-50% 0)'>
        <polygon points="0 0,0 500,185 0 "/>
      </svg>

      <!--http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4-->
      <video v-if="backgroundVideo"
             autoplay
             muted
             class="rt-banner-video__content"
             ref="video"
             :src="backgroundVideo"></video>
      <!--<video autoplay class="rt-banner-video__content"-->
      <!--ref="video"-->
      <!--src="https://04-lvl3-pdl.vimeocdn.com/01/1850/1/34254547/78068179.mp4?expires=1539878512&amp;token=09afbb94eb179c5a53067"></video>-->
      <!--src="https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4"></video>-->
      <svg v-if="!isFullscreenImage" class="rt-banner-right-triangle" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 185 500">
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
  import BannerPaginatorItem from "./BannerPaginatorItem.vue";
  // import debounce from "debounce";

  const componentsList = {};

  componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;

  export default {
    name: "RtBanner",
    components: componentsList,
    data: () => ({
      backgroundVideo: null,
      activeVideoSrc: null,
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
        if (this.contentMinHeight) {
          if (typeof this.contentMinHeight === "string") {
            styles.minHeight = this.contentMinHeight;
          } else {
            styles.minHeight = this.contentMinHeight + "px";
          }
        }
        if (this.contentHeight) {
          if (typeof this.contentHeight === "string") {
            styles.height = this.contentHeight;
          } else {
            styles.height = this.contentHeight + "px";
          }
        }
        return styles;
      },
      imageStyle() {
        const styles = {};
        const activeIndex = this.RtBanners.activeIndex;
        if (this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].backgroundImage) {
          styles.backgroundImage =
            "url(" + this.RtBanners.items[activeIndex].backgroundImage + ")";
        }else{
          styles.backgroundImage = 'none'
        }
        if (this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].backgroundVideo) {
          this.backgroundVideo = this.RtBanners.items[activeIndex].backgroundVideo;
        }else{
          this.backgroundVideo = null;
        }

        return styles;
      }
    },
    mounted: function() {
      if (this.RtBanners.items.length > 0 && this.RtBanners.items[0].id) {
        this.setStartTimer();
      }
      this.addListener();
      this.calculateScroll();
    },
    beforeUpdate(){
      this.removeListener();
    },
    updated(){
      this.addListener();
      this.calculateScroll();
    },
    beforeDestroy: function() {
      this.removeListener();
    },
    methods: {
      addListener(){
        this.$el.addEventListener("touchstart", this.setTouchStart);
        this.$el.addEventListener("touchend", this.setTouchEnd);
        window.addEventListener("scroll", this.debounceCalculateScroll);
        window.addEventListener("resize", this.debounceCalculateScroll);
      },
      removeListener(){
        this.$el.removeEventListener("touchstart", this.setTouchStart);
        this.$el.removeEventListener("touchend", this.setTouchEnd);
        window.removeEventListener("scroll", this.debounceCalculateScroll);
        window.removeEventListener("resize", this.debounceCalculateScroll);
      },
      stopVideo() {
        if(this.$refs.video) {
          this.$refs.video.pause();
        }
      },
      playVideo() {
        if(this.backgroundVideo) {
          if (this.$refs.video) {
            this.$refs.video.play();
          } else {
            setTimeout(() => {
              this.playVideo();
            }, 100)
          }
        }
      },
      debounceCalculateScroll: function() {
        this.calculateScroll();
      },
      calculateScroll() {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const el = this.$el;
        const deltaY = Math.max(window.innerHeight, el.offsetHeight);

        if (el.getBoundingClientRect().top > deltaY || el.getBoundingClientRect().top < -1 * deltaY) {
          if (!this.hasPause) {
            this.stopVideo();
          }
          this.hasPause = true;
        } else {
          if (this.hasPause) {
            const index =
              (this.RtBanners.activeIndex + 1) % this.RtBanners.items.length;
            this.RtBanners.activeIndex = index;
          }

          this.hasPause = false;
        }
        this.playVideo();

      },
      setTouchStart(e) {
        this.touchstartX = e.changedTouches[0].screenX;
      },
      setTouchEnd(e) {
        this.touchendX = e.changedTouches[0].screenX;
        this.calculateSwipe();
      },
      calculateSwipe() {
        console.info(Math.abs(this.touchendX - this.touchstartX));
        if(Math.abs(this.touchendX - this.touchstartX) > 50) {
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
          if (this.RtBanners.items.length > 1) {
            this.setStartTimer();
          }
        }, this.sleepTime);
      }
    }
  };
</script>
