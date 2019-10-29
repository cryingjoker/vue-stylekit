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
      autoNextOnlyOnDesktop: {
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
      withoutSecondEmptyColumn: {
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
      noTriangle: {
        type: Boolean,
        default: false
      },
      roundAngles: {
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
      bannerItemsWithCustomContent: {
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
      isBackgroundBanner: {
        type: Boolean,
        default: false
      },
      hasCustomHeight: {
        type: String,
        default: null
      },
      hidePaginatorOnMobile: {
        type: Boolean,
        default: false
      },
      hidePaginatorOnTablet: {
        type: Boolean,
        default: false
      },
//      categoryBanner: {
//        type: Boolean,
//        default: null
//      },
      hasImageOnMobile: {
        type: Boolean,
        default: false
      },
      fixedImage: {
        type: Boolean,
        default: false
      },
      transparentBackgroundImage: {
        type: Boolean,
        default: false
      },
      mobileImageOnTop: {
        type: Boolean,
        default: false
      },
      switchOffTimer: {
        type: Boolean,
        default: false
      },
      backgroundImageLeft: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      deviceType: 2,
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
        setStartTimer: null,
        imageOnMobile: false,
        colorFillOnMobile: false
      },
      isOpenListOnTop: false,
      isStopped: false,
      localSleepTime: 5000,
      showNoTriangle: false

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
        if(this.hidePaginatorOnMobile){
          className += " md-d-none";
        }
        if(this.hidePaginatorOnTablet){
          className += " td-d-none";
        }
        return className;
      },
      bannerClass() {
        let className = "rt-banner rt-banner-id__" + this.RtBanners.id || this._uid;
        if (this.fixedImage) {
          className += " rt-banner--fixed-image";
        }
        const activeIndex = this.RtBanners.activeIndex;
        if (this.RtBanners.items[activeIndex]) {
          if (this.isBackgroundBanner) {
            className += " rt-banner--has-absolute-position";
          }
          if (this.RtBanners.items[activeIndex].backgroundColor) {
            className += " rt-banner--background-" + this.RtBanners.items[activeIndex].backgroundColor;
          }
          if (this.RtBanners.items[activeIndex].patternBackground) {
            let bgColor = this.RtBanners.items[activeIndex].patternLeftColor.replace(/^(b2b\-)|(b2c\-)/i, "");
            className += " rt-banner--background-" + bgColor;
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
          if (this.roundAngles) {
            className += " rtb-banner";
          }
          if (this.RtBanners.items[this.RtBanners.activeIndex].isGameBannerItem) {
            className += " rt-banner--for-game";
          }
//          if (this.categoryBanner) {
//            className += " rtb-banner--category";
//          }
          if (this.mobileImageOnTop) {
            className += " rt-banner--image-ontop";
          }
          if (this.RtBanners.items[activeIndex].patternType && this.RtBanners.items[activeIndex].patternType === 3) {
            className += " rt-banner--full-screen";
          }
          if(this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].halfHeightImage) {
            className += " rt-banner--image-half-top"
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
        if (this.hasCustomHeight) {
          styles.height = this.normalizeVariable(this.hasCustomHeight);
        }

        return styles;
      },
      imageClass() {
        let className = "rt-banner-image rt-banner-image--main";
        const activeIndex = this.RtBanners.activeIndex;
        if (this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].patternBackground) {
          this.backgroundPattern = this.RtBanners.items[
            activeIndex
            ].patternBackground;
          this.showNoTriangle = true;
          let bgColor = "";
          bgColor = this.RtBanners.items[activeIndex].patternTopColor.replace(/^(b2b\-)|(b2c\-)/i, "");
          className += " color-block--" + bgColor + "";
        } else {
          this.showNoTriangle = false;
        }
        if (this.transparentBackgroundImage) {
          className += " rt-banner-image--contain";
        }
        if (this.backgroundImageLeft) {
          className += " rt-banner-image--left";
        }
        if (this.hasImageOnMobile || (!!this.RtBanners.items[activeIndex] && !!this.RtBanners.items[activeIndex].imageOnMobile)) {
          className += " rt-banner-image--mobile-visible";
        }
        if (this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].colorFillOnMobile) {
          className += " rt-banner-image--color-fill";
        }
        return className;
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
        this.RtBanners.$el = this.$el;
      }
      this.addListener();
      this.calculateScroll();
      this.calculateMobileOptions();
      this.setDeviceType();
      this.changePatternType();
      this.changePatternTypeOnResize();
    },
    beforeMount() {
      this.RtBanners.id = this._uid || Math.random(Date.now() + 1);
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
      setLocalSleepTime() {
        if (this.scrollToNextImage) {
          this.localSleepTime = this.sleepTime + 300;
        } else {
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
            const playPromise = this.$refs.video.play();
            playPromise.catch(function(error) {

            });
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
          this.mobileImageHeight !== null ||
          this.mobileImageMaxHeight !== null
        ) {
          const isMobile =
            window.innerWidth <= parseInt(variables["mobile-upper-limit"]);
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
          el && typeof el.getBoundingClientRect === "function" && (
            el.getBoundingClientRect().top > deltaY ||
            el.getBoundingClientRect().top < -1 * deltaY
          )
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
              this.$options.nextImageIndex = index;

              setTimeout(() => {
                this.RtBanners.activeIndex = index;
                this.$options.nextImageIndex = null;
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
          if (this.touchendX < this.touchstartX) {
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
            if (!this.$options.animationHasBeenStart) {
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
          if (!this.$options.animationHasBeenStart) {
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
        this.$options.nextImageIndex = index;
        setTimeout(() => {
          this.setActiveIndex(index);
          this.$options.nextImageIndex = null;
        }, 350);
      },

      setActiveItem(index) {
        if (this.scrollToNextImage) {
          this.$options.nextImageIndex = index;

          setTimeout(() => {
            this.$set(this.RtBanners, "activeIndex", index);
            this.$options.nextImageIndex = null;
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
          if (this.isMobile && this.mobileImageMaxHeight) {

            nextBannerImage.style.height = this.mobileImageMaxHeight;
            nextBannerImage.style.maxHeight = this.mobileImageMaxHeight;
          }

          const nextImageIndex = this.$options.nextImageIndex;

          if (nextBannerImage) {
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

        if (!this.switchOffTimer) {
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
              if (!this.autoNextOnlyOnDesktop || this.deviceType === 1) {
                if (!this.stopAnimation && !this.isPause) {
                  const index = (RtBanners.activeIndex + 1) % RtBanners.items.length;
                  if (this.scrollToNextImage) {
                    this.getNextSlide();
                  } else {
                    this.setActiveIndex(index);
                  }
                }
              }
              if (RtBanners.items.length > 1) {
                this.setStartTimer();
              }
            }, sleepTime);
          }
        }
      },
      stopAnimationStart() {
        return new Promise((resolve, reject) => {
          const nextImage = this.$el.querySelector(".rt-banner-image--next");
          const mainImage = this.$el.querySelector(".rt-banner-image--main");
          if (nextImage) {
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
          }, 10);
        });
      },
      moveBannerImages() {
        return new Promise((resolve, reject) => {
          const nextBannerImage = document.querySelector(".rt-banner-image--next");
          const mainBannerImage = document.querySelector(".rt-banner-image--main");

          const nextImageIndex = this.$options.nextImageIndex;
          const activeImageIndex = this.RtBanners.activeIndex;
          if (nextBannerImage) {
            nextBannerImage.style.left = 0;
          }
          this.$el.classList.add("rt-banner--hide-content");
          if (this.$options.drawOrientation === "next") {
            mainBannerImage.style.left = "-100vw";
            nextBannerImage.style.left = "0";
          } else {
            mainBannerImage.style.left = "100vw";
            nextBannerImage.style.left = "0";
          }
          setTimeout(() => {
            this.stopAnimationStart().then(() => {
              this.clearMovedBannerImages().then();
            });
          }, 450);
        });
      },
      clearStyleMainBanner() {
        return new Promise((resolve, reject) => {
          const mainBannerImage = document.querySelector(".rt-banner-image--main");
          this.$options.drawOrientation = null;
          mainBannerImage.style.transitionDuration = 0;
          setTimeout(() => {
            mainBannerImage.style.left = "0";
            setTimeout(() => {
              mainBannerImage.style.transitionDuration = null;
              resolve();
            }, 10);
          }, 10);

        });
      },
      clearMovedBannerImages() {
        return new Promise((resolve) => {
          this.stopAnimationStart().then(() => {

            this.clearStyleMainBanner().then(() => {
              this.removeNewBannerImage().then(() => {
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
          if (nextBannerImage) {
            nextBannerImage.parentNode.removeChild(nextBannerImage);
            this.$el.classList.remove("rt-banner--hide-content");
          }
          resolve();
        });
      },
      changePatternTypeOnResize() {
        window.addEventListener("resize", () => {
          this.setDeviceType();
          this.changePatternType();
        });
      },
      setDeviceType() {
        if (window.innerWidth < parseInt(variables["mobile-upper-limit"])) {
          this.deviceType = 3;
        } else if (window.innerWidth < parseInt(variables["tablet-upper-limit"])) {
          this.deviceType = 2;
        } else {
          this.deviceType = 1;
        }
      },
      changePatternType() {
        if (this.RtBanners.items[this.RtBanners.activeIndex] !== undefined &&
          this.RtBanners.items[this.RtBanners.activeIndex].imageOnMobile !== undefined) {
          if (window.innerWidth <= parseInt(variables["mobile-upper-limit"])) {
            this.RtBanners.items[this.RtBanners.activeIndex].patternType = 1;
          } else {
            this.RtBanners.items[this.RtBanners.activeIndex].patternType = 2;
          }
        }
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

      const gradient = () => {
        if (!!this.RtBanners.items[this.RtBanners.activeIndex] && !!this.RtBanners.items[this.RtBanners.activeIndex].backgroundImage) {
          return <div class="rt-banner-image--mobile-gradient"></div>;
        }
      };

      const paginatorItem = () => {
        return this.RtBanners.items.map((option, index) => {
          let sleepTime = this.localSleepTime;
          if (option["slideTime"]) {
            sleepTime = option["slideTime"];
            if (this.scrollToNextImage) {
              sleepTime += 1000;
            }
          }
          if (!this.autoNextOnlyOnDesktop && this.deviceType > 1) {
            sleepTime = 0;
          }
          return <rt-banner-paginator-item
            key={"paginator-index" + Math.random().toString(5).slice(4)}
            is-stopped={this.isStopped}
            sleep-time={this.isMobile ? null : sleepTime}
            is-pause={this.isMobile ? false : this.isPause}
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
        if (!this.isFullscreenImage && !this.noTriangle && !this.showNoTriangle) {
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
        if (!this.isFullscreenImage && !this.noTriangle && !this.showNoTriangle) {
          return <svg
            class="rt-banner-right-triangle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 185 500">
            <polygon points="0 500,185 0,0 0"/>
          </svg>;
        } else {
          return null;
        }

      };
      const video = () => {
        if (this.backgroundVideo) {
          return <video
            ref="video"
            src={this.backgroundVideo}

            muted
            class="rt-banner-video__content"
          />;
        } else {
          return null;
        }
      };
      const pattern = (() => {
        if (this.backgroundPattern && !!this.RtBanners.items[this.RtBanners.activeIndex].patternTopColor) {
          return <rt-pattern pattern-type={Number(this.RtBanners.items[this.RtBanners.activeIndex].patternType)}
                             top-color={this.RtBanners.items[this.RtBanners.activeIndex].patternTopColor}
                             left-color={this.RtBanners.items[this.RtBanners.activeIndex].patternLeftColor}
                             right-color={this.RtBanners.items[this.RtBanners.activeIndex].patternRightColor}/>;
        } else {
          return null;
        }
      })();
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

      const secondEmptyColumn = () => {
        if (!this.withoutSecondEmptyColumn) {
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
        } else if (this.withoutEmptyColumn && this.withoutSecondEmptyColumn) {
          return <div class="rt-col-12">
            <div class="row">
              <div class="rt-col-6 rt-col-md-3 rt-col-td-3">
                {this.$slots.default}
              </div>
            </div>
          </div>;
        } else {
          return <div class="rt-col-12">
            <div class="row">
              {emptyColumn()}
              <div class="rt-col-4 rt-col-md-3 height-fill rt-col-td-3">
                {this.$slots.default}
              </div>
              {secondEmptyColumn()}
            </div>
          </div>;
        }
      };

      return <div class={this.bannerClass} style={this.bannerStyle}>
        <div class="rt-container rt-banner-container">
          {link()}
          {bannerContent()}
        </div>
        {paginator()}
        <div style={this.imageStyle}
             class={this.imageClass + (this.imageOnMobile ? " rt-banner-image--mobile-visible" : "")}>
          {leftTriangle()}
          {video()}
          {rightTriangle()}
          {pattern}
          {gradient()}
        </div>
        {logo()}
      </div>;

    }
  };
</script>
