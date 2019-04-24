import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import variables from "../../../lib/variables.json";

@Component
class Ussd extends Vue {
  @Prop({ default: "" }) status: String;
  @Prop({ default: "" }) hintText: String;
  @Prop({ default: "right" }) hintOrient: String;
  @Prop({ default: null }) mobileHintOrient: String;
  hintOrientLocal: String = this.hintOrient;
  mobileHintOrientLocal: String = this.mobileHintOrient;
  type: String;

  checkResize() :void{
    const width = document.body.clientWidth;
    if (width <= parseInt(variables["tablet-upper-limit"])) {
      if (width <= parseInt(variables["mobile-upper-limit"])) {
        if(this.type != 'mobile') {
          this.type = 'mobile'
        }
      }else{
        if(this.type != 'mobile') {
          this.type = 'mobile'
        }
      }
    } else {
      if(this.type != 'desktop') {
        this.type = 'desktop'
      }
    }
  }

  mounted() {
    // window.addEventListener("resize", this.checkResize);
    this.mobileHintOrientLocal = this.mobileHintOrient;
    this.hintOrientLocal = this.hintOrient;
    if(!this.mobileHintOrient){
      this.mobileHintOrientLocal = this.hintOrientLocal
    }
  }

  render(h: CreateElement): VNode {
    let iconClassName = "rt-validation-icon";


    if(this.status.length > 0){
      iconClassName += " rt-validation-icon--"+this.status
    }
    if(this.hintText.length > 0){
      iconClassName += " rt-hint"
      iconClassName += ` rt-hint--${this.hintOrientLocal}-orient rt-md-hint--${this.mobileHintOrientLocal}-orient`
    }
    switch (this.status) {
      case 'error':
        return <figure class={iconClassName} hint-content={this.hintText}>
          <svg width="12px" height="11px" viewBox="0 0 12 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Inputs" transform="translate(-596.000000, -1732.000000)" stroke="#FFFFFF" stroke-width="2">
                <g id="Group-2" transform="translate(592.000000, 1727.000000)">
                  <g id="Group-3" transform="translate(5.000000, 6.000000)">
                    <path d="M5,4.20703408 L0.490934482,8.7160996 L5,4.20703408 L9.50906552,8.7160996 L5,4.20703408 Z M5,4.20703408 L9.20703408,0 L5,4.20703408 L0.792965917,0 L5,4.20703408 Z" id="Combined-Shape"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </figure>
        break;

      case 'success':
        return <figure class={iconClassName} hint-content={this.hintText}>
          <svg width="13px" height="9px" viewBox="0 0 13 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Inputs" transform="translate(-596.000000, -1625.000000)" stroke="#FFFFFF" stroke-width="2">
                <g id="Group-4" transform="translate(592.000000, 1619.000000)">
                  <polyline id="Stroke-4-Copy-3" points="5 10 8.79296592 13 16 7"></polyline>
                </g>
              </g>
            </g>
          </svg>
        </figure>
        break;


      default:
        return <i class={iconClassName} hint-content={this.hintText}/>

    }

  }
}
export default {
  component: Ussd,
  name: "RtValidationIcon"
};


