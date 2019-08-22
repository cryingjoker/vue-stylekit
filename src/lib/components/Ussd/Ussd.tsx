import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
class Ussd extends Vue {
  tel: String = "";
  @Prop({ default: null }) phone: String;
  @Prop({ default: false }) withoutLeftSpace: Boolean;
  @Prop({ default: 0 }) checkAfterTime: number;
  private hasHtml: boolean = false;
  private telHtml: string = '';

  mounted() {
    setTimeout(() => {
      let tel = "";
      if (this.phone) {
        tel = "tel:" + this.phone;
      } else {
        if (this.$slots.default[0].text) {
          if (this.$slots.default[0].text.endsWith('#')) {
            tel = "tel:" + this.$slots.default[0].text.replace(/#$/gm, '%23')
          }else{
            tel = "tel:" + this.$slots.default[0].text;
          }

        } else {
          if (this.$el && this.$el.querySelector && this.$el.querySelector(".epc-options__value")) {
            this.telHtml = this.$el.querySelector(".epc-options__value").innerHTML;
            if(this.telHtml.endsWith('#')) {
              tel = "tel:" + this.telHtml.replace(/#$/gm, '%23');
            }else{
              tel = "tel:" + this.telHtml
            }
            this.tel = tel;
            this.hasHtml = true;
          }

        }
      }
      this.tel = tel;
    }, this.checkAfterTime);
  }


  render(h: CreateElement): VNode {
    let ussdClassName = "rt-ussd";
    if (this.withoutLeftSpace) {
      ussdClassName += " rt-ussd--stand-alone";
    }

    if (this.tel) {
      return <a class={ussdClassName} href={this.tel}>
        {this.hasHtml ? this.telHtml : this.$slots.default}
        <svg width="12px" height="13px" viewBox="0 0 12 13" version="1.1" xmlns="http://www.w3.org/2000/svg"
             class="rt-ussd__icon">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path
              d="M11.8728979,10.0876209 L9.73492403,7.75734982 C9.65551358,7.67251977 9.54556063,7.62346143 9.43051728,7.62346143 C9.31343776,7.62346143 9.20348482,7.67251977 9.12407436,7.75734982 L8.64557544,8.26837418 L8.1986371,8.73851659 C8.14671488,8.79677337 8.08868416,8.84889786 8.02454494,8.8918239 C7.52568437,9.39262778 7.40351444,9.40284826 7.40351444,9.40284826 C6.9443591,9.59192728 6.41902838,9.49994289 6.04946432,9.16777706 C5.59132707,8.74873708 5.16373229,8.29903564 4.74631835,7.83911372 C4.3289044,7.37919179 3.91149046,6.90904938 3.524619,6.41846599 C3.26908021,6.08425606 3.17134427,5.65499559 3.25991747,5.24310996 C3.30878544,5.04381045 3.39532248,4.85677554 3.51443817,4.69120364 C3.61828261,4.56140346 3.71296431,4.42444893 3.79950135,4.28238415 C3.84327891,4.21492894 3.89418305,4.15360602 3.95221377,4.09841538 L4.86848828,3.07636666 C5.03443578,2.89035379 5.03443578,2.60826834 4.86848828,2.42225548 L2.71015276,0.132866334 C2.63379655,0.04803629 2.52384361,0 2.40981834,0 C2.29579306,0 2.18685821,0.04803629 2.10948391,0.132866334 C1.41311528,0.731786887 0.797175193,1.41860363 0.276934886,2.17696378 C-0.0295080345,2.90772862 -0.0834664226,3.72127941 0.124222467,4.4867939 C0.213813753,5.02030333 0.363471924,5.54154818 0.572178896,6.04030796 C0.884730314,6.71179397 1.25938478,7.35159647 1.69206997,7.95153908 C2.10744775,8.53819504 2.56049459,9.09827774 3.04612008,9.62769898 C3.54498065,10.1540541 4.07947412,10.6456595 4.64451007,11.0994491 C5.17798545,11.5726577 5.75829264,11.9906756 6.3762689,12.3463486 C6.93112402,12.6447868 7.53382903,12.8451084 8.15791379,12.9391368 C8.6659371,13.0444079 9.1922859,13.0127244 9.68503798,12.8471525 C10.0484935,12.6601175 10.3732619,12.4025613 10.6410177,12.0908364 L11.4962073,11.222095 L11.8525362,10.8541575 C12.0408816,10.6364611 12.0500443,10.3155378 11.8728979,10.0876209 Z"
              id="Stroke-401-Copy-7" fill="#7700FF"></path>
          </g>
        </svg>
      </a>;
    } else {

      if (this.$slots && this.$slots.default && this.$slots.default[0]) {
        return <span class="d-none">{this.$slots.default[0]}</span>;
      }
      return null;
    }
  }
}

export default {
  component: Ussd,
  name: "RtUssd"
};


