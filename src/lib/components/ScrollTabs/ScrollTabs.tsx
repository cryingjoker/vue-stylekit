import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import { debounce } from 'ts-debounce';
import { scrollIt } from "../../utils";



@Component
class ScrollTabs extends Vue {

  @Prop({ default: null }) hasFixedJsNode: string;
  @Prop({ default: false }) removeBaseTag: boolean;
  @Prop({ default: null }) activeTabsClassname: string;
  @Prop({ default: false }) tabsClassname: string;
  @Prop({ default: 80 }) topPadding: number;
  @Prop({ default: false }) hideIfNotInViewport: boolean;

  activeKey = "";
  anchorObejects = [];
  fixedNode: HTMLElement = null;
  fixedNodeParent: HTMLElement = null;
  fixedNodeHeight: number = null;
  fixedNodeWidth: number = null;
  fixedNodeTop: number = null;


  getOffsetTop = (el) => {
    const position = el.getBoundingClientRect();
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    return scrollTop + position.top;
  };

  debounceCalculateScroll = debounce(() => {
    this.calculateScroll();
  }, 5);
  calculateScroll = () => {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const container: any = this.$refs.tabsContainer;
    const activeEl = container.querySelector("." + this.activeTabsClassname);
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
        if (this.$refs.tabsContainer) {
          const container: any = this.$refs.tabsContainer;
          const nextEl = container.querySelector("[href=\"#" + key + "\"]");
          if (nextEl && !nextEl.classList.contains(this.activeTabsClassname)) {
            nextEl.classList.add(this.activeTabsClassname);
          }
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
  };
  initAnchorsList = (notBindClick = false) => {
    if (this.$refs.tabsContainer) {
      const container: any = this.$refs.tabsContainer;
      container.querySelectorAll("." + this.tabsClassname).forEach(i => {
        const anchor = i.getAttribute("href").replace("#", "");
        const anchorEl: any = document.querySelector("[id=\"" + anchor + "\"]");

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
    }
    this.calculateScroll();
  };
  debounceInitAnchorsList = debounce(()=> {

    this.initAnchorsList(true);
  }, 150);
  scrollBind = (e) => {
    const anchor = e.target.getAttribute("href").replace("#", "");
    scrollIt(this.anchorObejects[anchor].y_start + 40);
    e.preventDefault();
  };

  removeFixedElementStyle(){
    this.fixedNode.style.removeProperty('position');
    this.fixedNode.style.removeProperty('width');
    this.fixedNode.style.removeProperty('top');
    this.fixedNode.style.height = '0px';
    this.fixedNode.style.overflow = 'hidden';

    this.fixedNodeParent.style.removeProperty('padding-top');
  }
  showElement(){
    this.fixedNode.style.opacity = '1';
    this.fixedNode.style.visibility = 'visible';
  }
  hideElement(){
    this.fixedNode.style.opacity = '0';
    this.fixedNode.style.visibility = 'hidden';
  }
  setFixedJsScroll() {

    if (!this.hasFixedJsNode) {

      return false;
    }
    const resizeSize = debounce(()=> {
      const parentNode:any= this.fixedNode.parentNode
      const fixedNodeTop =parentNode.getBoundingClientRect().top - this.fixedNode.offsetHeight + (window.pageYOffset || document.documentElement.scrollTop) - this.fixedNodeTop;
      if(window.pageYOffset || document.documentElement.scrollTop > fixedNodeTop){
        this.removeFixedElementStyle()
      }
      this.fixedNodeHeight = this.fixedNode.offsetHeight;
      if(this.fixedNodeParent.style.paddingTop){
        this.fixedNodeHeight += parseInt(this.fixedNodeParent.style.paddingTop)
      }
      this.fixedNodeWidth = this.fixedNode.offsetWidth;
      window.dispatchEvent(new CustomEvent('scroll'))

    },50)
    const getFixedJsScrollPosition = debounce(()=> {
      if(!this.fixedNode) {
        return false
      }
      const parentNode:any= this.fixedNode.parentNode;
      let fixedNodeTop;
      if(parentNode.getBoundingClientRect().top  + (window.pageYOffset || document.documentElement.scrollTop) < this.fixedNodeTop + this.fixedNode.offsetHeight){
        fixedNodeTop = this.fixedNode.offsetHeight;
      }else{
        fixedNodeTop =parentNode.getBoundingClientRect().top  + (window.pageYOffset || document.documentElement.scrollTop) - this.fixedNodeTop - this.fixedNode.offsetHeight;
      }

      if((window.pageYOffset || document.documentElement.scrollTop) > fixedNodeTop){
        if(this.hideIfNotInViewport){
          this.showElement();
        }
        this.fixedNode.style.position= 'fixed';
        this.fixedNode.style.top = this.topPadding + 'px'
        this.fixedNode.style.width = this.fixedNodeWidth + 'px'
        this.fixedNode.style.removeProperty('height');
        this.fixedNode.style.removeProperty('overflow');

        this.fixedNodeParent.style.paddingTop = (this.fixedNodeHeight) + 'px'
      }else{
        if(this.hideIfNotInViewport){
          this.hideElement();
        }
        this.removeFixedElementStyle()
      }
    }, 10)
    const container:any  = this.$refs.tabsContainer;

    this.fixedNode = container.parentNode;
    this.fixedNodeParent = container.parentNode.parentNode;
    this.fixedNodeHeight = this.fixedNode.offsetHeight;
    if(this.fixedNodeParent.style.paddingTop){
      this.fixedNodeHeight += parseInt(this.fixedNodeParent.style.paddingTop)
    }
    this.fixedNodeWidth = this.fixedNode.offsetWidth;

    // this.fixedNodeTop = parentNode.getBoundingClientRect().top - this.fixedNode.offsetHeight + (window.pageYOffset || document.documentElement.scrollTop) - this.fixedNodeTop;
    getFixedJsScrollPosition();
    setTimeout(()=>{

    window.addEventListener("scroll", getFixedJsScrollPosition, {
     passive: false
    })
    window.addEventListener("resize", resizeSize, {
     passive: false
    })
    },50)

  }

  mounted() {
    this.setFixedJsScroll();
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
  }

  beforeDestroy() {
    window.removeEventListener("scroll", this.debounceCalculateScroll);
    window.removeEventListener("resize", this.debounceInitAnchorsList);
    if (this.$refs.tabsContainer) {
      const container: any = this.$refs.tabsContainer;
      container.querySelectorAll("." + this.tabsClassname).forEach(i => {
        i.removeEventListener("click", this.scrollBind);
      });
    }
  }

  render(h: CreateElement): VNode {
    return <div ref="tabsContainer">{this.$slots.default}</div>;
  }
}

export default {
  component: ScrollTabs,
  name: "RtScrollTabs"
};


