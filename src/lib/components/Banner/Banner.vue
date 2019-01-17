<script type="text/jsx">
import BannerPaginatorItem from "./BannerPaginatorItem.vue";
// import debounce from "debounce";
import variables from "../../variables.json";

const componentsList = {};

componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;

export default {
  name: "RtBanner",
  components: componentsList,
  props: {
    scrollToNextImage: {
      type: Boolean,
      default: false
    },
    hasCustomContent: {
      type: Boolean,
      default: false
    },
    withoutEmptyColumn: {
      type: Boolean,
      default: false
    },

    contentMobileHeight: {
      type: [Number, String],
      default: null
    },
    contentMobileMinHeight: {
      type: [Number, String],
      default: null
    },
    paginatorPosition: {
      type: String,
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
    setStopOnClick: {
      type: Boolean,
      default: false
    },
    dontPauseOnHover: {
      type: Boolean,
      default: false
    },
    banerItemsWithCustomContent: {
      type: Boolean,
      default: false
    },
    mobileImageHeight: {
      type: String,
      default: null
    },
    mobileImageMaxHeight: {
      type: String,
      default: null
    },
  },
  data: () => ({
    isMobile: false,
    isPause: false,
    touchstartX: null,
    touchendX: null,
    stopAnimation: false,
    RtBanners: {
      id: null,
      isMobile: false,
      items: [],
      activeIndex: -1,
      setActiveItem: null,
      setStartTimer: null
    },
    isOpenListOnTop: false,
    isStopped: false,
    localSleepTime : 5000

  }),

  provide() {
    const RtBanners = this.RtBanners;
    return { RtBanners };
  },
  computed: {
    switcherClass() {
      let className = "circle-switcher";
      if (this.paginatorPosition) {
        className += " circle-switcher--" + this.paginatorPosition;
      }
      return className;
    },
    banerClass() {
      let className = "rt-banner rt-banner-id__" + this.RtBanners.id || this._uid;
      const activeIndex = this.RtBanners.activeIndex;
      if (this.RtBanners.items[activeIndex]) {
        if (this.RtBanners.items[activeIndex].backgroundColor !== "none") {
          className += " rt-banner--background-" + this.RtBanners.items[activeIndex].backgroundColor;

        }
        if (this.isFullscreenImage) {
          className += " rt-banner--full-screen";
          if (this.justify) {
            className += " justify-" + this.justify;
          }
        }

        if (this.RtBanners.items[activeIndex].isWhiteColor) {
          className += " rt-banner--color-white";
        }
      }
      return className;
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
      if (this.mobileImageHeight && this.RtBanners.isMobile) {
        styles.height = this.mobileImageHeight;
      }
      if (this.mobileImageMaxHeight && this.RtBanners.isMobile) {
        styles.maxHeight = this.mobileImageMaxHeight;
      }

      return styles;
    }
  },

  mounted: function() {
    this.setLocalSleepTime();
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
    this.RtBanners.id = this._uid || Math.random(Date.now() + 1)
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
  drawOrientation: null,
  nextImageIndex: null,
  methods: {
    setLocalSleepTime(){
      if (this.scrollToNextImage) {
        this.localSleepTime = this.sleepTime + 300;
      }else {
        this.localSleepTime = this.sleepTime;
      }
    },
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
      if (!this.dontPauseOnHover) {
        this.$el.addEventListener("mouseenter", this.setStopAnimation, {
          passive: true
        });
        this.$el.addEventListener("mouseleave", this.removeStopAnimation, {
          passive: true
        });
      }
      window.addEventListener("scroll", this.debounceCalculateScroll, {
        passive: false
      });
      window.addEventListener("resize", this.debounceCalculateResize, {
        passive: false
      });
      if (this.setStopOnClick) {
        this.$el.addEventListener("mousedown", this.stopPlaying, { passive: true });
      }
    },
    removeListener() {
      this.$el.removeEventListener("touchstart", this.setTouchStart);
      this.$el.removeEventListener("touchend", this.setTouchEnd);
      window.removeEventListener("scroll", this.debounceCalculateScroll);
      window.removeEventListener("resize", this.debounceCalculateResize);
      if (!this.dontPauseOnHover) {
        this.$el.removeEventListener("mouseenter", this.setStopAnimation);
        this.$el.removeEventListener("mouseleave", this.removeStopAnimation);
      }
      if (this.setStopOnClick) {
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
        this.contentMobileMinHeight !== null ||
        this.mobileImageHeight !== null,
        this.mobileImageMaxHeight !== null
      ) {

        const isMobile =
          window.innerWidth <= parseInt(variables["mobile-step-size"]);
        if (this.RtBanners.isMobile !== isMobile) {
          this.RtBanners.isMobile = isMobile;
          this.isMobile = isMobile;
        }
      }
    },
    calculateScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
          if (this.scrollToNextImage) {
            this.$options.nextImageIndex = index

            setTimeout(() => {
              this.RtBanners.activeIndex = index;
              this.$options.nextImageIndex = null
            }, 400);
          }
        }

        this.stopAnimation = false;
      }
      this.playVideo();
    },
    stopPlaying() {
      if (this.setStopOnClick) {
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
          this.getNextSlide();
        } else {
          this.getPreviousSlide();
        }
      }
    },
    getNextSlide() {
      if (!this.RtBanners.animation) {
        let index = this.RtBanners.activeIndex;
        index++;
        if (index >= this.RtBanners.items.length) {
          index = 0;
        }

        if (this.scrollToNextImage) {
          if(!this.$options.animationHasBeenStart) {
            this.$options.drawOrientation = "next";
            this.$options.animationHasBeenStart = true;

            this.setNextActiveIndex(index);
            this.createNewBannerImage().then(() => {
              this.moveBannerImages().then();
            });
          }
        } else {
          this.setActiveIndex(index);
        }
      }
    },
    getPreviousSlide() {
      let index = this.RtBanners.activeIndex;
      index--;
      if (index < 0) {
        index = this.RtBanners.items.length - 1;
      }
      if (this.scrollToNextImage) {
        if(!this.$options.animationHasBeenStart) {
          this.$options.drawOrientation = "previous";
          this.$options.animationHasBeenStart = true;

          this.setNextActiveIndex(index);
          this.createNewBannerImage().then(() => {
            this.moveBannerImages().then();
          });
        }
      } else {
        this.setActiveIndex(index);
      }
    },
    setActiveIndex(index) {
      this.$set(this.RtBanners, "activeIndex", index);
    },
    setNextActiveIndex(index) {
      this.$options.nextImageIndex = index
      setTimeout(() => {
        this.setActiveIndex(index);
        this.$options.nextImageIndex = null
      }, 350);
    },

    setActiveItem(index) {
      if (this.scrollToNextImage) {
        this.$options.nextImageIndex = index

        setTimeout(() => {
          this.$set(this.RtBanners, "activeIndex", index);
          this.$options.nextImageIndex = null
          this.setStartTimer();
        }, 400);
      } else {
        this.$set(this.RtBanners, "activeIndex", index);
        this.setStartTimer();
      }

    },
    createNewBannerImage() {
      return new Promise((resolve, reject) => {

        let nextBannerImage = document.createElement("div");
        nextBannerImage.classList.add("rt-banner-image", "rt-banner-image--next");
        if(this.isMobile && this.mobileImageMaxHeight) {

          nextBannerImage.style.height = this.mobileImageMaxHeight;
          nextBannerImage.style.maxHeight = this.mobileImageMaxHeight;
        }

        const nextImageIndex = this.$options.nextImageIndex;

        if(nextBannerImage) {
          if (this.$options.drawOrientation === "next") {
            nextBannerImage.style.left = "100vw";
          } else {
            nextBannerImage.style.left = "-100vw";
          }
          if (this.RtBanners.items[nextImageIndex]) {
            nextBannerImage.style.backgroundImage = "url(" + this.RtBanners.items[nextImageIndex].backgroundImage + ")";
          }
          this.$el.appendChild(nextBannerImage);
        }
        setTimeout(() => {
          resolve();
        }, 20);
      });
    },
    setStartTimer() {
      const RtBanners = this.RtBanners;
      if (RtBanners && !this.isStopped && RtBanners.activeIndex >= 0) {
        if (RtBanners.timer) {
          clearTimeout(RtBanners.timer);
        }
        let sleepTime = RtBanners.items[RtBanners.activeIndex].slideTime || this.sleepTime;
        if (this.scrollToNextImage) {
          sleepTime += 1000;
        }
        RtBanners.timer = setTimeout(() => {
          if (!this.stopAnimation && !this.isPause) {
            const index = (RtBanners.activeIndex + 1) % RtBanners.items.length;
            if (this.scrollToNextImage) {
              this.getNextSlide();
            } else {
              this.setActiveIndex(index);
            }
          }
          if (RtBanners.items.length > 1) {
            this.setStartTimer();
          }
        }, sleepTime);
      }
    },
    stopAnimationStart() {
      return new Promise((resolve, reject) => {
        const nextImage = this.$el.querySelector(".rt-banner-image--next");
        const mainImage = this.$el.querySelector(".rt-banner-image--main");
        if(nextImage) {
          nextImage.classList.add("rt-banner-image--stop-transition");
        }
        mainImage.classList.add("rt-banner-image--stop-transition");
        setTimeout(() => {
          resolve();
        }, 300);
      });


    },

    stopAnimationEnd() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const nextImage = this.$el.querySelector(".rt-banner-image--next");
          const mainImage = this.$el.querySelector(".rt-banner-image--main");
          if (nextImage) {
            nextImage.classList.remove("rt-banner-image--stop-transition");
          }
          mainImage.classList.remove("rt-banner-image--stop-transition");

          setTimeout(() => {
            resolve();
          }, 100);
          // });
        }, 10);
      })
    },
    moveBannerImages() {
      return new Promise((resolve, reject) => {
        const nextBannerImage = document.querySelector(".rt-banner-image--next");
        const mainBannerImage = document.querySelector(".rt-banner-image--main");

        const nextImageIndex = this.$options.nextImageIndex;
        const activeImageIndex = this.RtBanners.activeIndex;
        if(nextBannerImage) {
          nextBannerImage.style.left = 0;
        }
        this.$el.classList.add('rt-banner--hide-content')
        if (this.$options.drawOrientation === "next") {
          mainBannerImage.style.left = "-100vw";
          nextBannerImage.style.left = "0";
        } else {
          mainBannerImage.style.left = "100vw";
          nextBannerImage.style.left = "0";
        }
          setTimeout(() => {
            this.stopAnimationStart().then(() => {
              this.clearMovedBannerImages().then()
            })
          },450)



      });
    },
    clearStyleMainBanner() {
      return new Promise((resolve, reject) => {
        const mainBannerImage = document.querySelector(".rt-banner-image--main");
        this.$options.drawOrientation = null
        mainBannerImage.style.transitionDuration = 0
        setTimeout(()=>{
        mainBannerImage.style.left = "0";
          setTimeout(()=> {
            mainBannerImage.style.transitionDuration = null
            resolve();
          },10)
        },10)

      });
    },
    clearMovedBannerImages() {
      return new Promise((resolve) => {
        this.stopAnimationStart().then(() => {

          this.clearStyleMainBanner().then(() => {
              this.removeNewBannerImage().then(()=>{
                this.stopAnimationEnd().then(() => {
                  resolve();
                });
              });
          });
        });
      });
    },
    removeNewBannerImage() {
      return new Promise((resolve, reject) => {
        const nextBannerImage = document.querySelector(".rt-banner-image--next");
        this.$options.animationHasBeenStart = false;
        if(nextBannerImage) {
          nextBannerImage.parentNode.removeChild(nextBannerImage);
          this.$el.classList.remove('rt-banner--hide-content')
        }
        resolve();
      });
    }
  },
  render(h) {
    const link = () => {
      if (this.RtBanners &&
        this.RtBanners.items &&
        this.RtBanners.items[this.RtBanners.activeIndex] &&
        this.RtBanners.items[this.RtBanners.activeIndex].link) {
        return <a
          href={this.RtBanners.items[this.RtBanners.activeIndex].link}
          target={this.RtBanners.items[this.RtBanners.activeIndex].linkTarget}
          class="rt-banner-content__link"
        />;
      } else {
        return null;
      }
    };

    const paginatorItem = () => {
      return this.RtBanners.items.map((option, index) => {
        let sleepTime = this.localSleepTime;
        if(option["slideTime"]){
          sleepTime = option["slideTime"];
          if (this.scrollToNextImage) {
            sleepTime += 1000;
          }
        }
        return <rt-banner-paginator-item
          key={"paginator-index" + Math.random().toString(5).slice(4)}
          is-stopped={this.isStopped}
          sleep-time={sleepTime}
          is-pause={this.isPause}
          index={index}
        />;
      });
    };
    const paginator = () => {
      if (this.RtBanners.items && this.RtBanners.items.length > 1) {
        return <div class={this.switcherClass}>
          <div class="circle-switcher-container">
            {paginatorItem()}
          </div>
        </div>;
      } else {
        return null;
      }
    };
    const leftTriangle = () => {
      if (!this.isFullscreenImage) {
        return <svg
          class="rt-banner-triangle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185 500"
          style="transform: translate(-50% 0)">
          <polygon points="0 0,0 500,185 0 "/>
        </svg>;
      } else {
        return null;
      }
    };
    const rightTriangle = () => {
      if (!this.isFullscreenImage) {
        return <svg
          class="rt-banner-right-triangle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185 500"
        >
          <polygon points="0 500,185 0,0 0"/>
        </svg>;
      } else {
        return null;
      }

    };
    const video = () => {
      if (this.backgroundVideo) {
        <video
          ref="video"
          src={this.backgroundVideo}
          autoplay
          muted
          class="rt-banner-video__content"
        />;
      } else {
        return null;
      }
    };
    const logo = () => {
      if (this.bannerLogo) {
        return <div class="rt-banner-logo rt-container">
          <div class="rt-col-12">
            <img src={this.bannerLogo} class="rt-banner-logo__image" alt=""/>
          </div>
        </div>;
      } else {
        return null;
      }
    };
    const emptyColumn = () => {
      if (!this.withoutEmptyColumn) {
        return <div class="rt-col-1 md-d-none td-d-none"/>;
      } else {
        return null;
      }
    };
    const bannerContent = () => {
      if (this.hasCustomContent) {
        return <div class="row">
          <div class="rt-col-12 d-flex">
            {this.$slots.default}
          </div>
        </div>;
      } else {
        return <div class="rt-col-12">
          <div class="row">
            {emptyColumn()}
            <div class="rt-col-4 rt-col-md-3 height-fill rt-col-td-3 rt-td-space-left2">
              {this.$slots.default}
            </div>
            <div class="rt-col-1 rt-col-td-3 md-d-none"/>
          </div>
        </div>;
      }
    };

    return <div class={this.banerClass} style={this.bannerStyle}>
      <div class="rt-container rt-banner-container">
        {link()}
        {bannerContent()}
      </div>
      {paginator()}
      <div style={this.imageStyle} class={"rt-banner-image rt-banner-image--main"}>
        {leftTriangle()}
        {video()}
        {rightTriangle()}
      </div>
      {logo()}
    </div>;
  }
};
</script>
