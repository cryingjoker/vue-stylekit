import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import variables from "../../variables.json";

@Component
class ProductCard extends Vue {
  tel: String = "";
  type: String = "desktop";
  @Prop({ default: false }) fixedImageHeight: Boolean;
  @Prop({ default: null }) backgroundImage: String;
  @Prop({ default: null }) color: String;
  @Prop({ default: null }) tabletBackgroundImage: String;
  @Prop({ default: null }) mobileBackgroundImage: String;
  @Prop({ default: false }) safeImageRate: Boolean;

  @Prop({ default: 'top' }) contentOrientation: String;

  checkWidth() {
    const w = window.innerWidth;

    const image: any = this.$refs.image;
    if (w <= parseInt(variables["tablet-upper-limit"])) {

      if (w < parseInt(variables["mobile-upper-limit"])) {
        if (this.type != "mobile") {
          image.classList.add("rt-product-card__image--hide-animate");
          setTimeout(() => {
            image.classList.remove("rt-product-card__image--hide-animate");
            this.type = "mobile";
            image.classList.add("rt-product-card__image--show-animate");
            setTimeout(() => {
              image.classList.remove("rt-product-card__image--show-animate");
            }, 400);
          }, 400);
        }

      } else {
        if (this.type != "tablet") {
          image.classList.add("rt-product-card__image--hide-animate");
          setTimeout(() => {
            image.classList.remove("rt-product-card__image--hide-animate");
            this.type = "tablet";
            image.classList.add("rt-product-card__image--show-animate");

            setTimeout(() => {
              image.classList.remove("rt-product-card__image--show-animate");
            }, 400);
          }, 400);
        }
      }
    } else {
      if (this.type != "desktop") {
        image.classList.add("rt-product-card__image--hide-animate");
        setTimeout(() => {
          image.classList.remove("rt-product-card__image--hide-animate");
          this.type = "desktop";
          image.classList.add("rt-product-card__image--show-animate");

          setTimeout(() => {
            image.classList.remove("rt-product-card__image--show-animate");
          }, 400);
        }, 400);
      }

    }
  }

  mounted() {
    this.checkWidth();
    if (this.tabletBackgroundImage || this.mobileBackgroundImage) {
      window.addEventListener("resize", this.checkWidth, {
        passive: false
      });
    }
  }


  render(h: CreateElement): VNode {
    let productCardClass = (() => {
      let className = "rt-product-card";
      if (this.fixedImageHeight && !this.safeImageRate) {
        className += " rt-product-card--has-fixed-height";
      }
      if (this.fixedImageHeight && this.safeImageRate) {
        className += " rt-product-card--has-static-image-with-fix-height";
      }
      if(this.contentOrientation === 'bottom'){
        className += ' rt-product-card--has-bottom-orient'
      }
      if(this.color){
        className += ` rt-product-card--${this.color}`
      }
      return className;
    })();
    const productImageStyle = (() => {
        const styleObj = {};
        if (this.safeImageRate && this.type === "mobile") {
          if (this.type === "tablet" && this.tabletBackgroundImage) {
            return this.tabletBackgroundImage;
          } else if (this.type === "mobile" && this.mobileBackgroundImage) {
            return this.mobileBackgroundImage;
          } else {
            return this.backgroundImage;
          }
        } else {
          if (this.backgroundImage) {
            if (this.type === "tablet" && this.tabletBackgroundImage) {
              styleObj["backgroundImage"] = "url(" + this.tabletBackgroundImage + ")";
            } else if (this.type === "mobile" && this.mobileBackgroundImage) {
              styleObj["backgroundImage"] = "url(" + this.mobileBackgroundImage + ")";
            } else {
              styleObj["backgroundImage"] = "url(" + this.backgroundImage + ")";
            }
          }
        }
        return styleObj;
      }

    )();

    if (this.$slots.footer && this.$slots.content)
    {
      return<div class={productCardClass}>
        <div class="rt-product-card__body">
          <div class="rt-product-card__content">
            {this.$slots.content}
          </div>
          <div class="rt-product-card__footer">
            {this.$slots.footer}
          </div>
        </div>
        <div ref="image" class="rt-product-card__image"></div>
      </div>;
    }

    if (this.safeImageRate && this.type === "mobile") {
      return <div class={productCardClass}>
        <div class="rt-product-card__body">
          {this.$slots.default}
        </div>
        <div class="rt-product-card__image rt-product-card__image-tag">
          <img ref="image" class="rt-product-card__image-tag" src={productImageStyle}/>
        </div>
      </div>;
    }
    return <div class={productCardClass}>
      <div class="rt-product-card__body">
        {this.$slots.default}
      </div>
      <div ref="image" class="rt-product-card__image" style={productImageStyle}>

      </div>
    </div>;
  }
}

export default {
  component: ProductCard,
  name: "RtProductCard"
};


