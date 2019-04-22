<script type="text/jsx">
const componentsList = {};
import variables from "../../variables.json";

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
    productCard: {
      type: Boolean,
      default: false
    },
    doubleSided: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    index: null,
    mobileLayout: window.innerWidth <= parseInt(variables["tablet-upper-limit"])
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
      return cardBackgroundClass;
    },
    cardBackgroundStyle() {
      const styles = {};
      if (this.backgroundImage && !this.backgroundImageStandAlone) {
        styles.backgroundImage = "url(" + this.backgroundImage + ")";
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

        styles.backgroundImage = "url(" + this.backgroundImage + ")";
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
        styles.backgroundImage = "url(" + this.backgroundImage + ")";
      }
      return styles;
    },
    categoryIcon() {
      const styles = {};

      if(this.categoryIconMobile) {
        styles.backgroundImage = "url(" + this.categoryIconMobile + ")";
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
      this.mobileLayout = window.innerWidth <= parseInt(variables["tablet-upper-limit"]);
      this.setCardHeight();
    });
    this.setCardHeight();
  },
  methods: {
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
      console.log(this.mobileLayout);
      if(this.$el.classList.contains('rtb-card--double-sided')){
        if(this.$el.classList.contains('is-flipped')){
          this.$el.classList.toggle('is-flipped');
        } else {
          for(let i = 0; i < this.$parent.$children.length; i++){
            this.$parent.$children[i].$el.classList.remove('is-flipped');
          }
          this.$el.classList.toggle('is-flipped');
        }
        if(this.mobileLayout) {
          document.querySelector('.popup-content').innerHTML = this.$el.querySelector('.rtb-card__reverse').innerHTML;
          setTimeout(()=>{
            document.querySelector('.rtb-popup-wrapper').classList.add('rtb-popup-wrapper--active');
//            document.body.style.overflow = 'hidden';
          },300)
        }
      }
    },
    setCardHeight() {
      if(this.doubleSided && !this.mobileLayout) {
        setTimeout(()=>{
          for(let i = 0; i < this.$parent.$children.length; i++) {
            this.$parent.$children[i].$el.style.height = document.querySelector('.rtb-card__reverse').scrollHeight + 'px'
          }
        },0);
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
              <svg class="rtb-category-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 364">
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
        return <div class="rtb-card__label">
          {this.$slots.label}
        </div>;
      }
    })();
    const discount = (() => {
      if(this.hasDiscount){
        if(this.discountLines === 1){
          return <div class="rtb-card__discount">
            <div class="rtb-card__discount-line rtb-card__discount-line-1">
              <div class="rtb-card__discount-line__flag">
                <svg width="83" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h83v80l-41.45-6.884L0 80z" fill="#FCD500" fill-rule="evenodd"/></svg></div>
                <span class="rtb-card__discount-line__flag-text">1 услуга со скидкой 50%</span>
            </div>
          </div>;
        }
        if(this.discountLines === 2){
          return <div class="rtb-card__discount">
            <div class="rtb-card__discount-line rtb-card__discount-line-1">
              <div class="rtb-card__discount-line__flag">
                <svg width="83" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h83v80l-41.45-6.884L0 80z" fill="#54D3B1" fill-rule="evenodd"/></svg>
                <span class="rtb-card__discount-line__flag-text rtb-card__discount-line__flag-text-2">2 услуги со скидкой 50%</span>
              </div>
            </div>
            <div class="rtb-card__discount-line rtb-card__discount-line-2" ></div>
          </div>;
        }
        if(this.discountLines === 3){
          return <div class="rtb-card__discount triple">
            <div class="rtb-card__discount-line rtb-card__discount-line-1">
              <div class="rtb-card__discount-line__flag">
                <svg width="83" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h83v80l-41.45-6.884L0 80z" fill="#64DDEC" fill-rule="evenodd"/></svg></div>
                <span class="rtb-card__discount-line__flag-text">3 услуги со скидкой 50%</span>
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
      if(this.productCard) {
        return <div class="rtb-product__triangle">
          <svg class="rtb-product-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364 38">
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
    if(!this.isB2bCategory) {
      return <div class={"rt-card" + this.cardClass} style={this.cardStyle} onClick={this.flipCard}>
        {this.backgroundImageStandAlone ? <div style={this.standAloneBackgroundStyle} class="rt-card__stand-alone-background"/> : null}
        {discount}
        {label}
        <div style={this.cardBackgroundStyle} class={"rt-card__background" + this.cardBackgroundClass}/>
        <div class={"rt-card__content" + this.cardContentClass}>
          {header}
          {productTriangle}
          <div class={"rt-card__body" + this.cardBodyClass} style={this.bodyStyle}>
            {this.$slots["content"]}
          </div>
          {bottomList}
          {contentWithoutWrapper}
          <div class="rt-card__footer">
            {this.$slots["footer"]}
          </div>
        </div>
        {doubleSided}
      </div>;
    } else {
      return <div class={"rt-card" + this.cardClass} style={this.cardStyle}>
        {categoryCard}
      </div>;
    }
  }
};
</script>
