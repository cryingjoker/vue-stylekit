<script type="text/jsx">
import variables from "../../../lib/variables.json";
import debounce from "debounce";

export default {
  name: "RtResizeContentHeight",
  props: {
    querySelectorsNames: {
      type: Array,
      default: []
    },
    groupSize: {
      type: Number,
      default: null
    },
    tabletGroupSize: {
      type: Number,
      default: null
    },
    mobileGroupSize: {
      type: Number,
      default: null
    },
    desctopItem: {
      type: Number,
      default: null
    },
    tabletItem: {
      type: Number,
      default: null
    },
    mobileItem: {
      type: Number,
      default: null
    },
    mobileNotResize: {
      type: Boolean,
      default: false
    },
    reactive: {
      type: Boolean
    }
  },
  data: () => ({
    debounce: null,
    isMobile: false,
    isTablet: false
  }),
  updated() {
    if (this.querySelectorsNames.length > 0) {
      this.unbindResize();
      this.bindResize();
    }
  },
  beforeDestroy() {
    if (this.querySelectorsNames.length > 0) {
      this.unbindResize();
    }
  },
  mounted() {
    if (this.reactive) {
      this.initReactiveWaiter();
    } else {
      setTimeout(() => {
        if (this.querySelectorsNames.length > 0) {
          this.bindResize();
          this.calculateMaxHeight();
        }
      }, 0);
      setTimeout(() => {
        this.calculateMaxHeight();
      }, 500);
    }
  },
  methods: {
    bindResize() {
      window.addEventListener("resize", debounce(this.calculateMaxHeight, 1));
    },
    unbindResize() {
      window.removeEventListener("resize", debounce(this.calculateMaxHeight, 1));
    },
    calculateMaxHeight() {

      const isMobile =
        window.innerWidth <= parseInt(variables["mobile-step-size"]);
      const isTablet =
        window.innerWidth <= parseInt(variables["mobile-step-size"]);
      this.isMobile = isMobile;
      this.isTablet = isMobile;
      if (isMobile && this.mobileNotResize) {
        this.querySelectorsNames.forEach((selectorName) => {
          this.$el.querySelectorAll(`${selectorName}`).forEach((node, index) => {
            if (node.style.height) {
              node.style.height = null;
            }
          });
        });
      } else {
        if (this.groupSize && !isTablet  && !isMobile || isTablet && this.tabletGroupSize || isMobile && this.mobileGroupSize) {
          let gropSize = this.groupSize;
          if(isTablet && this.tabletGroupSize){
            gropSize = this.tabletGroupSize;
          }
          if(isMobile && this.mobileGroupSize){
            gropSize = this.mobileGroupSize;
          }

          this.querySelectorsNames.forEach((selectorName) => {
              let nodeList = [...this.$el.querySelectorAll(`${selectorName}`)];
              if(nodeList.length === 1){
                nodeList = [[nodeList]];
              }
              if(nodeList.length > 0) {

                nodeList.reduce((res, item) => {
                  if (!Array.isArray(res)) {
                    res = [[res]]
                  }
                  if (res[res.length - 1].length < gropSize) {
                    res[res.length - 1].push(item)
                  } else {
                    res.push([item])
                  }
                  return res
                }).forEach((nodeGroup) => {
                  let maxHeight = 0;
                  nodeGroup.forEach((node) => {
                    if (node.style.height) {
                      node.style.height = null;
                    }
                    maxHeight = maxHeight > node.clientHeight ? maxHeight : node.clientHeight;
                  });
                  nodeGroup.forEach((node) => {
                    node.style.height = `${maxHeight}px`;
                  });
                });
              }
          });

        } else {
          this.querySelectorsNames.forEach((selectorName) => {
            let maxHeight = 0;
            this.$el.querySelectorAll(`${selectorName}`).forEach((node) => {
              if (node.style.height) {
                node.style.height = null;
              }
              maxHeight = maxHeight > node.clientHeight ? maxHeight : node.clientHeight;
            });
            this.$el.querySelectorAll(`${selectorName}`).forEach((node) => {
              node.style.height = `${maxHeight}px`;
            });
          });
        }
      }
    },
    initReactiveWaiter() {
      let count = 0;
      let maxCount = this.$children.length;
      let wait = setInterval(() => {
        this.$children.forEach(cmp => {
          if (cmp.loaded) count++;
          if (count === maxCount) {
            clearInterval(wait);
            this.calculateMaxHeight();
          }
        });
      }, 50);
    }
  },
  render(h) {
    return <div>
      {this.$slots.default}
    </div>;
  }
};
</script>
