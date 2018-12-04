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
      hasCustomContent: {
       type: Boolean,
       default: false
      },
      withoutEmptyColumn: {
        type: Boolean,
        default: false
      },
      showNavigationArray: {
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
      mobileImageHeight:{
        type: String,
        default: null
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
      switcherClass() {
        let className = "circle-switcher";
        if (this.paginatorPosition) {
          className += " circle-switcher--" + this.paginatorPosition;
        }
        return className;
      },
      banerClass() {
        let className = "rt-banner";
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
        if(this.mobileImageHeight && this.RtBanners.isMobile){
          styles.height = this.mobileImageHeight
        }
        console.info('mobileImageHeight',this.mobileImageHeight,this.RtBanners.isMobile)

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
        console.info('&&&&****  test this.mobileImageHeight ',this.mobileImageHeight )
        if (
          this.contentMobileHeight !== null ||
          this.contentMobileMinHeight !== null ||
          this.mobileImageHeight !== null
        ) {
          const isMobile =
            window.innerWidth <= parseInt(variables["mobile-step-size"]);
          console.info('calcul isMobile =',isMobile);
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
        this.RtBanners.activeIndex++;
        if (this.RtBanners.activeIndex >= this.RtBanners.items.length) {
          this.RtBanners.activeIndex = 0;
        }
      },
      getPreviousSlide() {
        this.RtBanners.activeIndex--;
        if (this.RtBanners.activeIndex < 0) {
          this.RtBanners.activeIndex = this.RtBanners.items.length - 1;
        }
      },
      setActiveItem(index) {
        this.RtBanners.activeIndex = index;
        this.setStartTimer();
      },
      setStartTimer() {
        const RtBanners = this.RtBanners;
        if (RtBanners && !this.isStopped && RtBanners.activeIndex >= 0) {
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
      const arrayLeft = () => {
        if (this.showNavigationArray) {
          return <div class="rt-banner-arrow rt-banner-arrow--preview"
                      onClick={this.getPreviousSlide}>
            <svg width="32px" height="63px" viewBox="0 0 32 63" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="553-LP_Igrovoi_arrow" transform="translate(-56.000000, -1242.000000)" fill="#D8D8D8"
                   fill-rule="nonzero">
                  <g id="Group-13" transform="translate(56.000000, 1060.000000)">
                    <g id="Group-3">
                      <polygon id="Path-2"
                               points="31.9599323 244.245909 31.9599323 241.51021 3.51635189 213 31.9599323 184.789828 31.9599323 182 0.854635865 213.122955"></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        } else {
          return null;
        }
      };
      const arrayRigth = () => {
        if (this.showNavigationArray) {
          return <div class="rt-banner-arrow rt-banner-arrow--next" onClick={this.getNextSlide}>
            <svg width="32px" height="63px" viewBox="0 0 32 63" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="553-LP_Igrovoi_arrow" transform="translate(-1370.000000, -1242.000000)" fill="#D8D8D8"
                   fill-rule="nonzero">
                  <g id="Group-13" transform="translate(56.000000, 1060.000000)">
                    <g id="Group-3">
                      <polygon id="Path-3"
                               points="1314.01741 241.442115 1314.01741 244.267161 1345.18352 213.139107 1314.21342 182 1314.21342 185.004306 1342.39241 213.13358"></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>;
        } else {
          return null;
        }
      };
      const paginatorItem = () => {
        return this.RtBanners.items.map((option, index) => {
          return <rt-banner-paginator-item
            key={"paginator-index" + Math.random().toString(5).slice(4)}
            is-stopped={this.isStopped}
            sleep-time={option["slideTime"] || this.sleepTime}
            is-pause={this.isPause}
            index={index}
          />;
        });
      };
      const paginator = () => {
        if (this.RtBanners.items && this.RtBanners.items.length > 1) {
         return <div class={this.switcherClass}>
            <div
              class="circle-switcher-container"
            >
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
            style="transform: translate(-50% 0)"
          >
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
      const logo = ()=>{
        if(this.bannerLogo){
          return <div class="rt-banner-logo rt-container">
            <div class="rt-col-12">
              <img src={this.bannerLogo} class="rt-banner-logo__image" alt=""/>
          </div>
          </div>
        }else{
            return null
        }
      }
      const emptyColumn = ()=>{
        if(!this.withoutEmptyColumn) {
          <div class="rt-col-1 md-d-none td-d-none"/>
        }else{
          return null
        }
      }
      const bannerContent = ()=>{
        if(this.hasCustomContent){
          return <div class="rt-col-12">
          {this.$slots.default}
          </div>
        }else{
          return <div class="rt-col-12">
            <div class="row">
              {emptyColumn()}
              <div class="rt-col-4 rt-col-md-3 height-fill rt-col-td-3 rt-td-space-left2">
                {this.$slots.default}
              </div>
              <div class="rt-col-1 rt-col-td-3 md-d-none"/>
            </div>
          </div>
        }

      }
      return <div class={this.banerClass} style={this.bannerStyle}>
        <div class="rt-container">
          {arrayLeft()}
          {arrayRigth()}
          {link()}
          {bannerContent()}
        </div>
        {paginator()}
        <div style={this.imageStyle} class="rt-banner-image">
          {leftTriangle()}
          {video()}
          {rightTriangle()}
        </div>
        {logo()}
    </div>
    }
  };
</script>
