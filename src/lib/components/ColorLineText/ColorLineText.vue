<script type="text/jsx">
  import variables from '../../variables.json';
export default {
  name: "RtColorLineText",
  props: {
    colorIcon: {
      type: String, //['purple','red','dark-blue','light-blue','yellow','pink','green'],
      default: "orange"
    },
    fillColor: {
      type: String, //['purple','red','dark-blue','light-blue','yellow','pink','green'],
      default: null
    },
    isWhiteColor: {
      type: Boolean,
      default: false
    },
    customType: {
      type: Boolean,
      default: false
    },
    hideArrow:{
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isMobile: false,
    isTablet: false,
    isSafari: /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))
  }),
  mounted(){
    const adjust = () => {
      setTimeout(() => {
        this.isMobile = window.innerWidth <= parseInt(variables['mobile-upper-limit']);
        this.isTablet = window.innerWidth <= parseInt(variables['tablet-upper-limit']) && window.innerWidth >= parseInt(variables['tablet-lower-limit']);
      },0);
    };
    window.addEventListener('resize', () => {
      adjust()
    });
    adjust();
  },
  computed: {
    colorLineIconClass() {
      let className = "";
      if (this.colorIcon !== "orange") {
        className +="color-line-paragraph-icon--" + this.colorIcon;
      }
      if (this.fillColor) {
        className += " color-line-paragraph-icon--fill-" + this.fillColor;
      }
      if(this.customType) {
        className += " color-line-wrapper--custom";
      }
      return className;
    },
    fillColorClass() {
      let className = "";
      this.isMobile = window.innerWidth <= parseInt(variables['mobile-upper-limit']);
      if (this.fillColor) {
        className += "color-line-text--" + this.fillColor;
      }
      if (this.isWhiteColor) {
        className += " color-white";
      }
      return className;
    },
    topPartTransform() {
      if(this.isMobile) {
        return null;
      } else if(this.isTablet) {
        return this.isSafari ? "translate(-.95, -.25)" : "translate(-.25, -.75)";
      } else {
        return this.isSafari ? "translate(.75, -.25)" : "translate(.25, -.75)";
      }

    },
    bottomPartTransform() {
      if(this.isMobile) {
        return null;
      } else if(this.isTablet) {
        return this.isSafari ? "translate(-.95, 1.25)" : "translate(0, 1)";
      } else {
        return this.isSafari ? "translate(.75, 1)" : "translate(0, 1)";
      }
    },
  },
  render(h){

    const icon = ()=>{
      if(this.hideArrow){
        return null
      }
      return <svg
          class={"color-line-paragraph-icon " + this.colorLineIconClass}
          width="38"
          height="23"
          viewBox="0 0 38 23"
        >
      <path
        class="color-line-paragraph-icon__background"
        d="M33-1.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-0.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
        fill="#FFF" transform={this.topPartTransform}
      />
      <path
        d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"
        transform={this.bottomPartTransform}
      />
      </svg>;
    };
    const label = ()=>{
      if(this.$slots.content && !this.isMobile) {
        return <p class="rt-font-banner-label color-line color-line-label">
          <span class={'color-line-text ' + this.fillColorClass}>{this.$slots.label}</span>
        </p>;
      }else {
        return <p class="rt-font-banner-label color-line color-line-label">
          <span class={'color-line-text ' + this.fillColorClass}>{this.$slots.label}{icon()}</span>
        </p>;
      }
    };
    const content = ()=>{
      if(!this.isMobile) {
        if(this.$slots.content) {
          return <p class="color-line color-line--is-paragraph rt-space-bottom">
            <span class={'color-line-text rt-font-paragraph ' + this.fillColorClass}>{this.$slots.content}{icon()}</span>
          </p>;
        }else{
          return null;
        }
      } else {
        if(this.$slots.content) {
          return <p class="color-line color-line--is-paragraph rt-space-bottom">
            <span class={'color-line-text rt-font-paragraph ' + this.fillColorClass}>{this.$slots.content}</span>
          </p>;
        }else{
          return null;
        }
      }
    };
    return <div class="color-line-wrapper">
      {label()}
      {content()}
  </div>;
  }
};
</script>
