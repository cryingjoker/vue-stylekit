<script type="text/jsx">
const componentsList = {};
import variables from "../../variables.json";
import colors from "../../color.json";


export default {
  name: "RtCard",
  components: componentsList,
  props: {
    resetMinHeight:{
      type: Boolean,
      default: false
    },
    staticBodyHeight: {
      type: Boolean,
      default: false
    },
    hideBackgroundOnMobile: {
      type: Boolean,
      default: false
    },
    backgroundSizeWidth: {
      type: [Number, String],
      default: null
    },
    backgroundImageStandAlone: {
      type: Boolean,
      default: false
    },
    backgroundSizeHeight: {
      type: [Number, String],
      default: null
    },
    backgroundColorType: {
      type: String,
      default: null
    },
    backgroundImage: {
      type: String,
      default: null
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    lazyBackgroundImage: {
      type: String,
      default: null
    },
    backgroundCover: {
      type: Boolean,
      default: false
    },
    backgroundRepeat: {
      type: Boolean,
      default: false
    },
    backgroundBlur: {
      type: Number,
      default: null
    },
    backgroundSmoke: {
      type: Number,
      default: null
    },
    backgroundOpacity: {
      type: Number,
      default: null
    },
    isWhiteColor: {
      type: Boolean,
      default: false
    },
    backgroundPosition: {
      type: String, // [top, left, bottom, right, top-left, top-right, bottom-left, bottom-right]
      default: null
    },
    backgroundPositionTop: {
      type: [String, Number],
      default: null
    },
    backgroundPositionBottom: {
      type: [String, Number],
      default: null
    },
    backgroundPositionRight: {
      type: [String, Number],
      default: null
    },
    backgroundPositionLeft: {
      type: [String, Number],
      default: null
    },
    offsetTop: {
      type: Boolean,
      default: false
    },
    colSize: {
      type: Number,
      default: null
    },
    cardHeight: {
      type: Number,
      default: null
    },
    cardHeaderHeight: {
      type: Number,
      default: null
    },
    cardBodyHeight: {
      type: Number,
      default: null
    },
    equalPadding: {
      type: Boolean,
      default: false
    },
    hasDiscount: {
      type: Boolean,
      default: false
    },
    discountLines: {
      type: Number,
      default: null
    },
    isB2bPackage: {
      type: Boolean,
      default: false
    },
    isB2bCategory: {
      type: Boolean,
      default: false
    },
    categoryCardSize: {
      type: Number,
      default: 1
    },
    categoryIconMobile: {
      type: String,
      default: null
    },
    hasLabel: {
      type: Boolean,
      default: false
    },
    showLabelWhenHover: {
      type: Boolean,
      default: false
    },
    productCard: {
      type: Boolean,
      default: false
    },
    doubleSided: {
      type: Boolean,
      default: false
    },
    productIcon: {
      type: String,
      default: ''
    },
    labelMainColor: {
      type: String,
      default: 'b2c-red'
    },
    labelAdditionalColor: {
      type: String,
      default: 'b2c-yellow'
    },
    labelFontSize: {
      type: String,
      default: ''
    },
//    backgroundPosition: {
//      type: String,
//      default: ''
//    },
    discountText: {
      type: String,
      default: ''
    },
    inTabsWImage: {
      type: Boolean,
      default: false
    },
    unfoldButtonText: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    index: null,
    mobileLayout: window.innerWidth <= parseInt(variables["mobile-upper-limit"]),
    tabletLayout: window.innerWidth <= parseInt(variables["tablet-upper-limit"]),
    localBackgroundImage: null,
    localProductIcon: null,
    localCategoryIconMobile: null,
    mobileSvgWidth: window.innerWidth - 40
  }),
  computed: {
    cardClass() {
      let cardClass = "";

      if (this.backgroundCover) {
        cardClass += " rt-card--has-bg-cover";
      }
      if (this.isWhiteColor) {
        cardClass += " rt-card--has-white-color";
      }

      if (this.backgroundColorType) {
        cardClass += " rt-card-" + this.backgroundColorType;
      }
      if (this.backgroundImage) {
        if (this.backgroundRepeat) {
          cardClass += " rt-card--has-bg-repeat";
        }
        if(!this.backgroundColorType) {
          if (this.backgroundSmoke === 0.5) {
            cardClass += " rt-card--has-smoke";
          }
          if (this.backgroundSmoke === 0.3) {
            cardClass += " rt-card--has-smoke03";
          }
          if (this.backgroundSmoke === 0.2) {
            cardClass += " rt-card--has-smoke02";
          }
        }
      }
      if (this.hideBackgroundOnMobile) {
        cardClass += " rt-card--hide-background-on-mobile";
      }
      if(this.resetMinHeight){
        cardClass += " rt-card--custom-height";
      }
      if(this.equalPadding){
        cardClass += " rtb-card";
      }
      if(this.isB2bPackage){
        cardClass += " rtb-card--package";
      }
      if(this.isB2bCategory){
        if(this.categoryCardSize === 1){
          cardClass += " rtb-category--small";
        }
        if(this.categoryCardSize === 2){
          cardClass += " rtb-category--medium";
        }
        if(this.categoryCardSize === 3){
          cardClass += " rtb-category--large";
        }
        cardClass += " rtb-category";
      }
      if(this.productCard){
        cardClass += " rtb-card--product";
      }
      if(this.doubleSided) {
        cardClass += " rtb-card--double-sided"
      }
      if(this.backgroundPosition) {
        if(this.backgroundPosition === 'left'){
          cardClass += " rtb-card--bgp-left"
        } else {
          cardClass += " rtb-card--bgp-right"
        }
      }
      if(this.inTabsWImage) {
        cardClass += " rt-card--half-white-plus-image"
      }
      return cardClass;
    },
    cardContentClass() {
      let cardContentClass = "";
      if (this.cardHeight !== null) {
        cardContentClass += " rt-card__content--has-custom-height";
      }
      if (this.offsetTop) {
        cardContentClass += " rt-card__content--has-offset-top";
      }
      if (this.colSize) {
        if (this.colSize === 2) {
          cardContentClass += " rt-col-6 rt-col-md-3";
        }
      }
      if(this.backgroundColorType && this.productCard) {
        cardContentClass += " color-block color-block--" + this.backgroundColorType;
      }
      return cardContentClass;
    },
    cardBodyClass() {
      let cardBodyClass = "";
      if (this.cardBodyHeight !== null) {
        cardBodyClass += " flex-center-center flex-fill";
      }
      if (!this.$slots.content) {
        cardBodyClass += " rt-card__body--is-empty";
      }
      if (this.staticBodyHeight) {
        cardBodyClass += " rt-card__body--is-static";
      }
      return cardBodyClass;
    },
    cardStyle() {
      const styles = {};
      if (this.cardHeight !== null) {
        styles.height = this.normalizeSize(this.cardHeight);
        styles.minHeight = "auto";
      }
      return styles;
    },
    cardContentStyle() {
      const styles = {};
      if (this.cardHeight !== null) {
        styles.height = this.normalizeSize(this.cardHeight);
        styles.minHeight = "auto";
      }
      return styles;
    },
    bodyStyle() {
      const styles = {};
      if (this.cardBodyHeight !== null) {
        styles.minHeight = this.normalizeSize(this.cardBodyHeight);
      }
      return styles;
    },
    cardHeaderStyle() {
      const styles = {};
      if (typeof this.cardHeaderHeight !== "undefined") {
        styles.maxHeight = this.normalizeSize(this.cardHeaderHeight);
      }
      return styles;
    },
    cardBackgroundClass() {
      let cardBackgroundClass = "";
      if (this.backgroundPosition) {
        if (
          this.backgroundPosition.search(
            /(top)|(left)|(bottom)|(right)|(bottom-left)|(top-right)|(bottom-left)|(bottom-right)/
          ) === 0
        ) {
          switch (this.backgroundPosition) {
            case "top":
              cardBackgroundClass += " rt-card__background--position-background-top";
              break;
            case "right":
              cardBackgroundClass += " rt-card__background--position-background-right";
              break;
            case "bottom":
              cardBackgroundClass += " rt-card__background--position-background-bottom";
              break;
            case "left":
              cardBackgroundClass += " rt-card__background--position-background-left";
              break;
            case "top-right":
              cardBackgroundClass += " rt-card__background--position-background-top-right";
              break;
            case "bottom-right":
              cardBackgroundClass += " rt-card__background--position-background-bottom-right";
              break;
            case "bottom-left":
              cardBackgroundClass += " rt-card__background--position-background-bottom-left";
              break;
            case "top-left":
              cardBackgroundClass += " rt-card__background--position-background-top-left";
              break;
          }
        }
      }
      if(this.productCard) {
        cardBackgroundClass += " rtb-card__product-image"
      }
      if(this.productIcon) {
        cardBackgroundClass += " rtb-card__product-icon"
      }
      return cardBackgroundClass;
    },
    cardBackgroundStyle() {
      const styles = {};
      if (this.backgroundImage && !this.backgroundImageStandAlone) {
        styles.backgroundImage = "url(" + this.localBackgroundImage + ")";
      }
      if (this.productIcon) {
        styles.backgroundImage = "url(" + this.localProductIcon + ")";
      }
      if (this.backgroundSizeWidth && this.backgroundSizeHeight) {
        const backgroundSizeWidth = this.normalizeSize(
          this.backgroundSizeWidth
        );
        const backgroundSizeHeight = this.normalizeSize(
          this.backgroundSizeHeight
        );
        styles.backgroundSize =
          backgroundSizeWidth + " " + backgroundSizeHeight;
      } else {
        if (this.backgroundSizeWidth) {
          const backgroundSizeWidth = this.normalizeSize(
            this.backgroundSizeWidth
          );
          styles.backgroundSize = backgroundSizeWidth;
        }
        if (this.backgroundSizeHeight) {
          const backgroundSizeHeight = this.normalizeSize(
            this.backgroundSizeHeight
          );
          styles.backgroundSize = backgroundSizeHeight;
        }
      }
      if (this.backgroundImage) {
        if (this.backgroundBlur) {
          styles.filter =
            "blur(" + this.normalizeSize(this.backgroundBlur) + ")";
        }
        if (this.backgroundOpacity) {
          styles.opacity = this.backgroundOpacity;
        }
      }
      return styles;
    },
    standAloneBackgroundStyle() {
      if (this.backgroundImageStandAlone && this.backgroundImage) {
        const styles = {};

        styles.backgroundImage = "url(" + this.localBackgroundImage + ")";
        styles.width =
          this.normalizeSize(this.backgroundSizeWidth) ||
          this.normalizeSize(this.backgroundSizeHeight);
        styles.height =
          this.normalizeSize(this.backgroundSizeHeight) ||
          this.normalizeSize(this.backgroundSizeWidth);
        styles.top = this.normalizeSize(this.backgroundPositionTop);
        styles.bottom = this.normalizeSize(this.backgroundPositionBottom);
        styles.right = this.normalizeSize(this.backgroundPositionRight);
        styles.left = this.normalizeSize(this.backgroundPositionLeft);

        return styles;
      }
      return {};
    },
    categoryImage() {
      const styles = {};

      if(this.backgroundImage) {
        styles.backgroundImage = "url(" + this.localBackgroundImage + ")";
      }
      return styles;
    },
    categoryIcon() {
      const styles = {};

      if(this.categoryIconMobile) {
        styles.backgroundImage = "url(" + this.localCategoryIconMobile + ")";
      }
      return styles;
    },
    categoryBackgroundColor() {
      const styles = {};
      if (this.isB2bCategory) {
        styles.backgroundColor = this.backgroundColorType;
      }
      return styles;
    }
  },

  mounted: function() {
    window.addEventListener('resize', () => {
      this.mobileLayout = window.innerWidth <= parseInt(variables["mobile-upper-limit"]);
      this.tabletLayout = window.innerWidth <= parseInt(variables["tablet-upper-limit"]) && window.innerWidth >= parseInt(variables["mobile-upper-limit"]);
      this.redrawSvg();
    });
    this.mobileLayout = window.innerWidth <= parseInt(variables["mobile-upper-limit"]);
    this.tabletLayout = window.innerWidth <= parseInt(variables["tablet-upper-limit"]) && window.innerWidth >= parseInt(variables["mobile-upper-limit"]);
    this.checkLazy();
    this.redrawSvg();
  },
  methods: {
    loadImageAsync (src, resolve, reject) {
      let image = new Image();
      image.src = src;
      image.onload = function () {
        resolve({
          naturalHeight: image.naturalHeight,
          naturalWidth: image.naturalWidth,
          src: image.src
        });
      };
      image.onerror = function (e) {
        reject(e);
      };
    },
    checkLazy(){

        if (this.lazyLoad) {

          if(this.backgroundImage) {
            if(this.lazyBackgroundImage){
              this.localBackgroundImage = this.lazyBackgroundImage;
            }
            this.loadImageAsync(this.backgroundImage, img => {
              this.localBackgroundImage = this.backgroundImage;
            },err=>{
//              console.error(err)
            });
          }
          if(this.productIcon) {
            this.loadImageAsync(this.productIcon, img => {
              this.localProductIcon = this.productIcon;
            });
          }
          if(this.categoryIconMobile) {
            this.loadImageAsync(this.categoryIconMobile, img => {
              this.localCategoryIconMobile = this.categoryIconMobile;
            });
          }

        } else {
          if(this.backgroundImage) {
            this.localBackgroundImage = this.backgroundImage;
          }
          if(this.productIcon) {
            this.localProductIcon = this.productIcon;
          }
          if(this.categoryIconMobile) {
            this.localCategoryIconMobile = this.categoryIconMobile;
          }
        }

    },
    normalizeSize(size) {
      if (typeof size === "number") {
        return size + "px";
      }
      if (typeof size === "string") {
        return size;
      }
      return size;
    },
    flipCard() {
      if(this.$el.classList.contains('rtb-card--double-sided')){
        if(this.$el.classList.contains('is-flipped')){
          this.$el.classList.toggle('is-flipped');
        } else {
          for(let i = 0; i < this.$parent.$children.length; i++){
            this.$parent.$children[i].$el.classList.remove('is-flipped');
          }
          this.$el.classList.toggle('is-flipped');
        }
        if(this.tabletLayout && document.querySelector('.popup-content')) {

          document.querySelector('.popup-content').innerHTML = this.$el.querySelector('.rtb-card__reverse').innerHTML;
          setTimeout(()=>{
            document.querySelector('.rtb-popup-wrapper').classList.add('rtb-popup-wrapper--active');
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
          },300)
        }
      }
    },
    unfoldFeatures() {
      this.$el.querySelector('.equipment__full-description').classList.contains('equipment__full-description--shown') ?
        this.$el.querySelector('.equipment__full-description').classList.remove('equipment__full-description--shown') :
        this.$el.querySelector('.equipment__full-description').classList.add('equipment__full-description--shown')
    },
    redrawSvg() {
      if(this.$el.querySelector('.rt-card__content')) {
        this.mobileSvgWidth = +(getComputedStyle(this.$el.querySelector('.rt-card__content')).width.slice(0, -2));
      }
    }
  },
  render(h) {
    const categoryCard = (() => {
      if(this.isB2bCategory) {
        if(this.categoryCardSize === 3){
          return <div class="rtb-category__content" >
            <div class="rtb-category__text-content">
              <div class="rtb-category__content-top">
                {this.$slots.content}
              </div>
              <div class="rtb-category__content-bottom">
                {this.$slots.footer}
              </div>
            </div>
            <div class="rtb-category__triangle">
              <svg class="rtb-category-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 364">
                <polygon points="0 364,76 0,0 0"/>
              </svg>
            </div>
            <div class="rtb-category__image" style={this.categoryImage}></div>
          </div>;
        }
        if(this.categoryCardSize === 2){
          return <div class="rtb-category__content" >
            <div class="rtb-category__text-content">
              <div class="rtb-category__content-top">
                <div class="rtb-category__mobile-header" style={this.categoryIcon}></div>
                {this.$slots.content}
              </div>
              <div class="rtb-category__content-bottom">
                {this.$slots.footer}
              </div>
            </div>
            <div class="rtb-category__triangle">
              <svg class="rtb-category__triangle-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 364">
                <polygon points="0 364,76 0,0 0"/>
              </svg>
            </div>
            <div class="rtb-category__image" style={this.categoryImage}></div>
          </div>;
        }
        if(this.categoryCardSize === 1){
          return <div class="rtb-category__content" >
            <div class="rtb-category__text-content">
              <div class="rtb-category__content-top">
                <div class="rtb-category__mobile-header" style={this.categoryIcon}></div>
                {this.$slots.content}
              </div>
              <div class="rtb-category__content-bottom">
                {this.$slots.footer}
              </div>
            </div>
          </div>;
        }
      } else {
        return null;
      }
    })();
    const label =(() => {
      if (this.hasLabel){
        return <div class={this.showLabelWhenHover ? 'rtb-card__label-hover rtb-card__label' : 'rtb-card__label'}>
          <div class="rtb-card__label-content" style={"font-size:" + this.labelFontSize}>
            <p class={"rtb-card__label-text color-block--" + this.labelMainColor.replace(/^(b2b\-)|(b2c\-)/i,'')} style={"background-color:" + this.labelMainColor}>
              {this.$slots.label}
            </p>
          </div>
          <svg width="80" height="48" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path class={"svg-fill--" + this.labelAdditionalColor} d="M79.153 35.741l-.007.012a2.955 2.955 0 0 1-.373.538c-.02.024-.039.05-.06.072l-.041.047-11.426 11.196V31.304h9.118a3.251 3.251 0 0 1 .438.033h.005a2.977 2.977 0 0 1 .253.046c.152.035.302.08.448.137l.017.006c.07.028.14.058.207.091l.03.015c.069.033.137.07.203.108l.004.003c.065.038.128.08.19.122l.03.021a2.99 2.99 0 0 1 .21.164 2.962 2.962 0 0 1 .341.335l.026.028c.05.06.098.12.143.182l.022.03c.046.065.09.13.13.197l.004.008c.042.07.08.14.116.213l.004.008a3.082 3.082 0 0 1 .104.237 3.014 3.014 0 0 1 .202.99v.03c.004.159-.005.318-.027.475l-.006.03c-.02.138-.05.275-.091.41l-.007.019a2.765 2.765 0 0 1-.086.241l-.011.025a2.93 2.93 0 0 1-.11.233z"/>
              <path class={"svg-fill--" + this.labelMainColor} d="M79.777 14.674v11.41l-.001 7.415c-.004.071-.013.141-.02.212l-.018.174c-.129 1.016-.596 1.921-1.268 2.638l.087-.103a2.919 2.919 0 0 0 .627-2.206 3.018 3.018 0 0 0-.895-1.799 3.335 3.335 0 0 0-.604-.463 3.145 3.145 0 0 0-.446-.216 3.185 3.185 0 0 0-1.16-.222h-5.73L0 31.512V0h74.962c2.661-.008 4.812 2.167 4.813 4.788l.002 9.886zm-1.665 22.214c.044-.038.082-.083.125-.123l-.125.123z"/>
            </g>
          </svg>
        </div>;
      }
    })();
    const discount = (() => {
      if(this.hasDiscount){
        if(this.discountLines === 1){
          return <div class="rtb-card__discount">
            <div class="rtb-card__discount-line rtb-card__discount-line-1">
              <span class="rtb-card__discount-line__flag-text">{this.discountText}</span>
              <div class="rtb-card__discount-line__flag">
                <svg width="30" height="29" viewBox="0 0 83 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h83v80l-41.45-6.884L0 80z" fill="#FCD500" fill-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>;
        }
        if(this.discountLines === 2){
          return <div class="rtb-card__discount">
            <div class="rtb-card__discount-line rtb-card__discount-line-1">
              <span class="rtb-card__discount-line__flag-text">{this.discountText}</span>
              <div class="rtb-card__discount-line__flag">
                <svg width="30" height="29" viewBox="0 0 83 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h83v80l-41.45-6.884L0 80z" fill="#54D3B1" fill-rule="evenodd"/>
                </svg>
              </div>
            </div>
            <div class="rtb-card__discount-line rtb-card__discount-line-2" ></div>
          </div>;
        }
        if(this.discountLines === 3){
          return <div class="rtb-card__discount triple">
            <div class="rtb-card__discount-line rtb-card__discount-line-1">
              <span class="rtb-card__discount-line__flag-text">{this.discountText}</span>
              <div class="rtb-card__discount-line__flag">
                <svg width="30" height="29" viewBox="0 0 83 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h83v80l-41.45-6.884L0 80z" fill="#64DDEC" fill-rule="evenodd"/>
                </svg>
              </div>
            </div>
            <div class="rtb-card__discount-line rtb-card__discount-line-2"></div>
            <div class="rtb-card__discount-line rtb-card__discount-line-3"></div>
          </div>;
        }
      } else {
        return null;
      }
    })();
    const header = (() => {
      if (this.$slots.header) {
        return <div style={this.cardHeaderStyle} class="rt-card__header">
          {this.$slots["header"]}
        </div>;
      } else {
        return null;
      }
    })();
    const bottomList = (() => {
      if (this.$slots["bottom-list"]) {
        return <div class="rt-card__bottom-list">
          {this.$slots["bottom-list"]}
        </div>;
      } else {
        return null;
      }
    })();
    const contentWithoutWrapper = (()=>{
      if(this.$slots['content-without-wrapper']){
        return this.$slots['content-without-wrapper'];
      }else{
        return null;
      }
    })();
    const productTriangle = (() => {
      if(this.productCard && !this.productIcon) {
        return <div class="rtb-product__triangle">
          <svg class="rtb-product__triangle-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364 38">
            <polygon points="0 38,364 38,364 0"/>
          </svg>
        </div>
      }
    })();
    const doubleSided = (() => {
      if(this.doubleSided) {
        return <div class="rtb-card__reverse">
            <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" class="rtb-card-close" viewBox="-10 -10 35 35">
              <path d="M15 1.5L13.5 0l-6 6-6-6L0 1.5l6 6-6 6L1.5 15l6-6 6 6 1.5-1.5-6-6z" fill="#101828" fill-rule="evenodd" fill-opacity=".5"/>
            </svg>
            {this.$slots.reverse}
          </div>
        }
    })();
    const hiddenPopupBenefits = (()=>{
      if(this.$slots['popup-special-benefits']){
        return <div class="rt-card__popup-benefits">{this.$slots['popup-special-benefits']}</div>;
      }else{
        return null;
      }
    })();
    const hiddenPopupCosts = (()=>{
      if(this.$slots['popup-special-costs']){
        return <div class="rt-card__popup-costs">{this.$slots['popup-special-costs']}</div>;
      }else{
        return null;
      }
    })();
    const triangle = (()=>{
      if(this.inTabsWImage) {
        if(this.tabletLayout || this.mobileLayout) {
          return <svg width="100%" height="100" class="rt-card__content-triangle">
            <polygon points={"0,100 " + this.mobileSvgWidth + ",0 " + this.mobileSvgWidth + ",100"} fill="rgb(255, 255, 255)"/>
          </svg>
        } else {
          return <svg width="100" height="490" class="rt-card__content-triangle">
            <polygon points="0,0 100,0 0,490" fill="rgb(255, 255, 255)"/>
          </svg>
        }
      }
    })();
    const unfoldButton = (()=> {
      if(this.mobileLayout) {
        return <div class="equipment__unfold-button color-purple" onClick={this.unfoldFeatures}>{this.unfoldButtonText}</div>
      }
    })();
    if(this.doubleSided){
      return <div class={"rt-card " + this.cardClass} style={this.cardStyle} onClick={this.flipCard}>
        <div class={"rt-card__content" + this.cardContentClass} style={this.cardBackgroundStyle}>
          <div class={"rt-card__body" + this.cardBodyClass} style={this.bodyStyle}>
            {this.$slots["content"]}
          </div>
          <div class="rt-card__footer">
            {this.$slots["footer"]}
          </div>
        </div>
        {doubleSided}
      </div>;
    }else if(!this.isB2bCategory) {
      return <div class={"rt-card" + this.cardClass} style={this.cardStyle}>
        {this.backgroundImageStandAlone ? <div style={this.standAloneBackgroundStyle} class="rt-card__stand-alone-background"/> : null}
        {discount}
        {label}
        <div style={this.cardBackgroundStyle} class={"rt-card__background" + this.cardBackgroundClass}/>
        <div class={"rt-card__content" + this.cardContentClass}>
          {header}
          {productTriangle}
          <div class={"rt-card__body" + this.cardBodyClass} style={this.bodyStyle}>
            {unfoldButton}
            {this.$slots["content"]}
          </div>
          {bottomList}
          {contentWithoutWrapper}
          <div class="rt-card__footer">
            {this.$slots["footer"]}
          </div>
          {hiddenPopupBenefits}
          {hiddenPopupCosts}
          {triangle}
        </div>
      </div>;
    } else {
      return <div class={"rt-card" + this.cardClass} style={this.cardStyle}>
        {categoryCard}
      </div>;
    }
  }
};
</script>
