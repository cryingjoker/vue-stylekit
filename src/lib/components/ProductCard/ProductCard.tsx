import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import variables from "../../variables.json";

@Component
class ProductCard extends Vue {
  tel: String = "";
  type: String = "desktop";
  @Prop({ default: false }) fixedImageHeight: Boolean;
  @Prop({ default: null }) backgroundImage: String;
  @Prop({ default: null }) tabletBackgroundImage: String;
  @Prop({ default: null }) mobileBackgroundImage: String;

  checkWidth(){
    const w = window.innerWidth;


    if(w <= parseInt(variables["tablet-upper-limit"])) {
      if (w < parseInt(variables["mobile-upper-limit"])){
        this.type = 'mobile'
      }else{
        this.type = 'tablet'
      }
    }else{
      this.type = 'desktop'
    }
  }

  mounted() {
    this.checkWidth();
    if(this.tabletBackgroundImage || this.mobileBackgroundImage) {
      window.addEventListener("resize", this.checkWidth, {
        passive: false
      });
    }
  }



  render(h: CreateElement): VNode {
    let productCardClass = (() => {
      let className = "rt-product-card";
      if (this.fixedImageHeight) {
        className += " rt-product-card--has-fixed-heigth";
      }
      return className;
    })();
    const productImageStyle = (() => {
      const styleObj = {};
      if (this.backgroundImage) {
        if(this.type === 'tablet' && this.tabletBackgroundImage){
          styleObj["backgroundImage"] = "url(" + this.tabletBackgroundImage + ")";
        }else if(this.type === 'mobile' && this.mobileBackgroundImage){
          styleObj["backgroundImage"] = "url(" + this.mobileBackgroundImage + ")";
        }else {
          styleObj["backgroundImage"] = "url(" + this.backgroundImage + ")";
        }
      }
      return styleObj;
    })();

    if (this.$slots.footer && this.$slots.content) {
      return <div class={productCardClass}>
        <div class="rt-product-card__body">
          <div class="rt-product-card__content">
            {this.$slots.content}
          </div>
          <div class="rt-product-card__footer">
            {this.$slots.footer}
          </div>
        </div>
        <div class="rt-product-card__image"></div>
      </div>;
    }
    return <div class={productCardClass}>
      <div class="rt-product-card__body">
        {this.$slots.default}
      </div>
      <div class="rt-product-card__image" style={productImageStyle}>

      </div>
    </div>;
  }
}

export default {
  component: ProductCard,
  name: "RtProductCard"
};


