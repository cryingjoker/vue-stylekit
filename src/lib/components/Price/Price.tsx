import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
class Price extends Vue {

  @Prop({ default: 0}) value: number|string;
  @Prop({ default: 0}) oldValue: number|string;
  @Prop({ default: "от"}) optionLabel: string;
  @Prop({ default: null}) colorValue: string;
  @Prop({ default: 'руб.'}) currency: string;
  @Prop({ default: 'мес.'}) timeInterval: string;
  @Prop({ default: false}) isOption: boolean;
  @Prop({ default: false}) onlyPrice: boolean;
  @Prop({ default: false}) forGame: boolean;
  @Prop({ default: false}) boldOption: boolean;
  @Prop({ default: false}) b2bPrice: boolean;
  @Prop({ default: ""}) oldPriceColor: boolean;
  @Prop({ default: false}) isTimeIntervalBottom: boolean;


  normalizeValue: string = parseInt(this.value.toString(), 10).toString().replace(
    /(\d)(?=(\d\d\d)+([^\d]|$))/g,
    "$1 "
  );
  normalizeOldValue: string = parseInt(this.oldValue.toString(), 10).toString().replace(
    /(\d)(?=(\d\d\d)+([^\d]|$))/g,
    "$1 "
  );
  priceType = "";
  normalizeCurrency = this.currency;
  normalizeTimeInterval = this.timeInterval;

  @Watch('value', { immediate: true, deep: true })
  onValueChanged(val: number | string, oldVal: number|string) {
    this.normalizeValue = parseInt(val.toString(), 10).toString().replace(
      /(\d)(?=(\d\d\d)+([^\d]|$))/g,
      "$1 "
    );;
  }

  @Watch('oldValue', { immediate: true, deep: true })
  onOldValueChanged(val: number | string, oldVal: number|string) {
    this.normalizeOldValue = parseInt(val.toString(), 10).toString().replace(
      /(\d)(?=(\d\d\d)+([^\d]|$))/g,
      "$1 "
    );;
  }

  @Watch('currency', { immediate: true, deep: true })
  onCurrencyChanged(val: string, oldVal: string) {
    this.normalizeCurrency = val;
  }

  @Watch('timeInterval', { immediate: true, deep: true })
  onTimeIntervalChanged(val: string, oldVal: string) {
    this.normalizeTimeInterval = val;
  }

  mounted(){

  }

  render(h: CreateElement): VNode {
    const rtPriceClass = 'rt-price'+(this.forGame ? ' rt-price-game' : '');
    const rtPriceInfoClass = 'rt-price__info'+(this.boldOption ? ' rt-price__info--bold-font' : '');
    const timeIntervalRender = ()=>{
      if(this.normalizeTimeInterval && !this.onlyPrice) {
        {
          return <div class="rt-price__info-item">
            {this.normalizeTimeInterval}
          </div>
        }
      }else{
        return null
      }
    };
    const opinionRender = ()=>{
      if( this.isOption){
        return <div class="rt-price__opinion">{this.optionLabel}</div>
      }else{
        return null
      }
    };
    const currencyRender = ()=>{
      if(this.normalizeCurrency) {
        {
          return <div class="rt-price__info-item">
            {this.normalizeCurrency}
          </div>
        }
      }else{
        return null
      }
    }
    const oldValueRender = ()=>{
      if(this.normalizeOldValue && parseInt(this.normalizeOldValue) > 0) {
        return <div class="rt-price__old-value">{this.normalizeOldValue}</div>
      }else{
        return null
      }
    }
    const priceInfoRender = ()=>{
      if(this.isTimeIntervalBottom) {
        return  <div>
                  {opinionRender()}
                  <div class={"rt-price__value rtb-price__value" + (this.colorValue ? ' color-' + this.colorValue : '')}>
                    {this.normalizeValue}
                  </div>
                  <div class="rtb-price__info rt-price__info">{this.normalizeCurrency}</div>
                  <div class="rt-font-small-paragraph rt-font-bold rtb-price__info-interval">{this.normalizeTimeInterval}</div>
                </div>
      }else{
        return <div>
                  {opinionRender()}
                  <div class={"rt-price__value rtb-price__value" + (this.colorValue ? ' color-' + this.colorValue : '')}>
                    {this.normalizeValue}
                  </div>
                  <div class="rt-price__info">
                    <div class="rt-price__info rtb-price__info">
                      <div class="rt-price__info-item rtb-price__info-item">{this.normalizeCurrency}</div>
                      <div class="rtb-price__info-item rtb-price__info-item">{this.normalizeTimeInterval}</div>
                    </div>
                  </div>
                </div>
      }
    }
    if(this.b2bPrice) {
      const oldB2bPriceRender = ()=>{
        if(this.normalizeOldValue && parseInt(this.normalizeOldValue) > 0) {
          return <div class="rtb-price__old-value">
            <div
              class={"rt-price__old-value rtb-price__old-value" + (this.oldPriceColor ? ' color-' + this.oldPriceColor : '')}>{this.normalizeOldValue}
              <div class={"rt-price__info rtb-price__info-item"}>
              <span
                class={(this.oldPriceColor ? ' color-' + this.oldPriceColor : '')}>{this.normalizeCurrency}</span>
              </div>
            </div>
          </div>
        }else{
          return null
        }
      }
      return <div class="rt-price rtb-price rt-price-without-space">
          {oldB2bPriceRender()}
          {priceInfoRender()}
        </div>
    } else {
      return <div class={`${rtPriceClass} rt-price-without-space`}>
        {opinionRender()}
        {oldValueRender()}
        <div
          class={"rt-price__option-value rt-price__value" + (this.colorValue ? ' color-' + this.colorValue : '')}>{this.normalizeValue}</div>
        <div class={rtPriceInfoClass}>
          {currencyRender()}
          {timeIntervalRender()}
        </div>
      </div>
    }
  }



}
export default {
  component: Price,
  name: "RtPrice"
};
