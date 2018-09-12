<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>

  const componentsList = {};

  function scrollIt(destination, duration = 200, easing = "linear", callback) {

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
        return (--t) * t * t + 1;
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      },
      easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
      }
    };

    const start = window.pageYOffset;
    const startTime = "now" in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
    const destinationOffset = typeof destination === "number" ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ("requestAnimationFrame" in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }

    function scroll() {
      const now = "now" in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }

      requestAnimationFrame(scroll);
    }

    scroll();
  }

  export default {
    data() {
      return {
        activeKey: "",
        anchorObejects: []
      };
    },
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
    name: "rt-scroll-tabs",
    components: componentsList,

    methods: {
      calculateScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const activeEl = this.$el.querySelector("." + this.activeTabsClassname);
        let hasFound = false;
        Object.keys(this.anchorObejects).forEach((key) => {
          if (scrollTop >= this.anchorObejects[key].x_start && scrollTop < this.anchorObejects[key].x_end) {
            hasFound = true;
            if (this.activeKey === key) {
              return false;
            }
            if (activeEl && !activeEl.classList.contains(key)) {
              activeEl.classList.remove(this.activeTabsClassname);
            }
            this.activeKey = key;
            const nextEl = this.$el.querySelector("[href=\"" + key + "\"]");
            if (nextEl && !nextEl.classList.contains(this.activeTabsClassname)) {
              this.$el.querySelector("[href=\"" + key + "\"]").classList.add(this.activeTabsClassname);
            }
            this.$router.replace({ hash: key.replace(/\#/, "") });
            return false;
          }
        });
        if (activeEl && !hasFound) {
          activeEl.classList.remove(this.activeTabsClassname);
          this.$router.replace({ hash: "" });
          this.activeKey = "";
        }
      },
      scrollBind(e) {
        const anchor = e.target.getAttribute('href');
        const anchorEl = document.querySelector(anchor);
        scrollIt(anchorEl);
        e.preventDefault();
      },
    },

    mounted() {
      if (this.tabsClassname) {
        this.$el.querySelectorAll("." + this.tabsClassname).forEach((i) => {

          const anchor = i.getAttribute("href");
          const anchorEl = document.querySelector(anchor);

          i.addEventListener("click", this.scrollBind);

          if (anchorEl) {
            this.anchorObejects[anchor] = {
              x_start: anchorEl.offsetTop,
              x_end: anchorEl.offsetTop + anchorEl.offsetHeight
            };
          }
        });
        this.calculateScroll();
        window.addEventListener('scroll', this.calculateScroll);
      }
    },
    beforeDestroy(){
      window.removeEventListener('scroll', this.calculateScroll);
      this.$el.querySelectorAll("." + this.tabsClassname).forEach((i) => {
        i.removeEventListener("click", this.scrollBind);
      })
    }
  };
</script>
