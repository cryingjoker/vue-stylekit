<template>
  <div><slot /></div>
</template>
<script>
import debounce from "debounce";
import { scrollIt } from "../../utils";
const componentsList = {};

export default {
  name: "RtScrollTabs",
  components: componentsList,
  props: {
    mainFixedNodeClass: {
      type: String,
      default: null
    },
    removeBaseTag: {
      type: Boolean,
      default: false
    },
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
      anchorObejects: [],
      fixedNode: null,
      fixedNodeHeight: null
    };
  },

  mounted() {
    if (this.mainFixedNodeClass) {
      this.fixedNode = document.querySelector(".main-navigation");
      if (this.fixedNode) {
        this.fixedNodeHeight = this.fixedNode.offsetHeight;
      }
    }
    if (this.tabsClassname) {
      setTimeout(() => {
        this.initAnchorsList();
        window.addEventListener("scroll", this.debounceCalculateScroll, {
          passive: true
        });
        window.addEventListener("resize", this.debounceInitAnchorsList, {
          passive: true
        });
      }, 300);
    }
    if (this.removeBaseTag) {
      let baseNode = document.querySelector("base");
      baseNode.parentNode.removeChild(baseNode);
      let newBase = document.createElement("base");
      let url = location.href;
      url = url.split("#")[0];
      newBase.setAttribute("href", url);
      document.getElementsByTagName("head")[0].appendChild(newBase);
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
          scrollTop >=
            this.anchorObejects[key].y_start - this.topPadding - 10 &&
          scrollTop < this.anchorObejects[key].y_end &&
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
          const nextEl = this.$el.querySelector('[href="#' + key + '"]');
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
      scrollIt(this.anchorObejects[anchor].y_start);
      e.preventDefault();
    },
    initAnchorsList(notBindClick) {
      this.$el.querySelectorAll("." + this.tabsClassname).forEach(i => {
        const anchor = i.getAttribute("href").replace("#", "");
        const anchorEl = document.querySelector('[id="' + anchor + '"]');

        if (!notBindClick) {
          i.addEventListener("click", this.scrollBind, { passive: true });
        }

        if (anchorEl) {
          this.anchorObejects[anchor] = {
            y_start: this.getOffsetTop(anchorEl) - this.topPadding,
            y_end:
              this.getOffsetTop(anchorEl) +
              anchorEl.offsetHeight -
              this.topPadding
          };
          if (this.fixedNode && this.fixedNodeHeight) {
            this.anchorObejects[anchor].y_start -= this.fixedNodeHeight;
          }
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
