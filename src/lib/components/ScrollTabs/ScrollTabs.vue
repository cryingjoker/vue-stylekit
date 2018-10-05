<template>
  <div>
    <slot/>
  </div>
</template>
<script>
  import debounce from "debounce";

  const componentsList = {};

  export default {
    name: "RtScrollTabs",
    components: componentsList,
    props: {
      activeTabsClassname: {
        type: String,
        default: null
      },
      tabsClassname: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        topPadding: 80,
        activeKey: "",
        anchorObejects: []
      };
    },

    mounted() {
      if (this.tabsClassname) {
        setTimeout(() => {
          this.initAnchorsList();
          window.addEventListener("scroll", this.debounceCalculateScroll);
          window.addEventListener("resize", this.debounceInitAnchorsList);
        }, 300);
      }
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.debounceCalculateScroll);
      window.removeEventListener("resize", this.debounceInitAnchorsList);
      this.$el.querySelectorAll("." + this.tabsClassname).forEach(i => {
        i.removeEventListener("click", this.scrollBind);
      });
    },

    methods: {
      getOffsetTop(el) {
        const position = el.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        return scrollTop + position.top;
      },
      scrollIt(destination, duration = 200, easing = "linear", callback) {
        const easings = {
          linear(t) {
            return t;
          },
          easeInQuad(t) {
            return t * t;
          },
          easeOutQuad(t) {
            return t * (2 - t);
          },
          easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          },
          easeInCubic(t) {
            return t * t * t;
          },
          easeOutCubic(t) {
            return --t * t * t + 1;
          },
          easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          },
          easeInQuart(t) {
            return t * t * t * t;
          },
          easeOutQuart(t) {
            return 1 - --t * t * t * t;
          },
          easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
          },
          easeInQuint(t) {
            return t * t * t * t * t;
          },
          easeOutQuint(t) {
            return 1 + --t * t * t * t * t;
          },
          easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
          }
        };

        const start = window.pageYOffset;
        const startTime =
          "now" in window.performance ? performance.now() : new Date().getTime();

        const documentHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
        const windowHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.getElementsByTagName("body")[0].clientHeight;
        const destinationOffset =
          typeof destination === "number" ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(
          documentHeight - destinationOffset < windowHeight
            ? documentHeight - windowHeight
            : destinationOffset
        );

        if ("requestAnimationFrame" in window === false) {
          window.scroll(0, destinationOffsetToScroll);
          if (callback) {
            callback();
          }
          return;
        }

        function scroll() {
          const now =
            "now" in window.performance ? performance.now() : new Date().getTime();
          const time = Math.min(1, (now - startTime) / duration);
          const timeFunction = easings[easing](time);
          window.scroll(
            0,
            Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)
          );
          const top = window.pageYOffset || document.documentElement.scrollTop;

          if (Math.abs(top - destinationOffsetToScroll) <= 20) {
            if (callback) {
              callback();
            }
            return;
          }

          requestAnimationFrame(scroll);
        }

        scroll();
      },
      debounceCalculateScroll: debounce(function() {
        this.calculateScroll();
      }, 5),
      calculateScroll() {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const activeEl = this.$el.querySelector("." + this.activeTabsClassname);
        let hasFound = false;
        Object.keys(this.anchorObejects).forEach(key => {
          if (
            scrollTop >= this.anchorObejects[key].x_start - this.topPadding - 10 &&
            scrollTop < this.anchorObejects[key].x_end &&
            !hasFound
          ) {
            hasFound = true;
            if (
              activeEl &&
              activeEl.getAttribute("href").replace("#", "") !== key
            ) {
              activeEl.classList.remove(this.activeTabsClassname);
            }
            if (this.activeKey === key) {
              return false;
            }
            this.activeKey = key;
            const nextEl = this.$el.querySelector("[href=\"#" + key + "\"]");
            if (nextEl && !nextEl.classList.contains(this.activeTabsClassname)) {
              nextEl.classList.add(this.activeTabsClassname);
            }
            window.history.replaceState(undefined, undefined, "#" + key);
            return false;
          }
        });
        const url = window.location.toString();
        if (url.indexOf("#") > 0 && !hasFound) {
          if (activeEl) {
            activeEl.classList.remove(this.activeTabsClassname);
            this.activeKey = "";
          }
          const clean_url = url.substring(0, url.indexOf("#"));
          window.history.replaceState({}, document.title, clean_url);
        }
      },
      scrollBind(e) {
        const anchor = e.target.getAttribute("href").replace("#", "");
        this.scrollIt(this.anchorObejects[anchor].x_start);
        e.preventDefault();
      },
      initAnchorsList(notBindClick) {
        this.$el.querySelectorAll("." + this.tabsClassname).forEach(i => {
          const anchor = i.getAttribute("href").replace("#", "");
          const anchorEl = document.querySelector("[id=\"" + anchor + "\"]");

          if (!notBindClick) {
            i.addEventListener("click", this.scrollBind);
          }

          if (anchorEl) {
            this.anchorObejects[anchor] = {
              x_start: this.getOffsetTop(anchorEl) - this.topPadding,
              x_end: this.getOffsetTop(anchorEl) + anchorEl.offsetHeight - this.topPadding
            };

          }
        });
        this.calculateScroll();
      },
      debounceInitAnchorsList: debounce(function() {
        this.initAnchorsList(true);
      }, 150)
    }

  };
</script>
