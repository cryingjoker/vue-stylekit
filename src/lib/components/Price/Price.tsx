import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
class Price extends Vue {

  @Prop({ default: 0 }) value: number | string;
  @Prop({ default: 0 }) oldValue: number | string;
  @Prop({ default: "от" }) optionLabel: string;
  @Prop({ default: false }) showFloat: boolean;
  @Prop({ default: null }) colorValue: string;
  @Prop({ default: "руб." }) currency: string;
  @Prop({ default: "мес." }) timeInterval: string;
  @Prop({ default: false }) isOption: boolean;
  @Prop({ default: false }) onlyPrice: boolean;
  @Prop({ default: false }) forGame: boolean;
  @Prop({ default: false }) boldOption: boolean;
  @Prop({ default: false }) b2bPrice: boolean;
  @Prop({ default: "" }) oldPriceColor: boolean;
  @Prop({ default: false }) isTimeIntervalBottom: boolean;
  @Prop({ default: false }) trimHundredth: boolean;
  @Prop({ default: false }) darkened: boolean;
  localValue: number = 0;
  cost: number = 0;
  //todo сделать проверку системного языка с заменой . , у double данных
  normalizeValue: string = this.showFloat ?
    parseFloat(this.cost.toString()).toString().split(".").map((item:any, index) => {
      if (index === 0) {
        item = item.replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          "$1 "
        );
      }else {
        item = parseInt(item).toFixed(2).toString()
        item = item[0]+item[1];
        item = item.replace('.','');
        if(item.length === 1 && !this.trimHundredth){
          item += '0';
        }
      }
      return item;
    }).join(",") : parseInt(this.value.toString(), 10).toString().replace(
      /(\d)(?=(\d\d\d)+([^\d]|$))/g,
      "$1 "
    ).trim();
  normalizeOldValue: string = this.showFloat ?
    parseFloat(this.oldValue.toString()).toString().split(".").map((item:any, index) => {
      if (index === 0) {
        item = item.replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          "$1 "
        );
      }else {
        item = parseInt(item).toFixed(2).toString();
        item = item[0]+item[1];
        item = item.replace('.','');
        if(item.length === 1 && !this.trimHundredth){
          item += '0';
        }
      }
      return item;
    }).join(",") : parseInt(this.oldValue.toString(), 10).toString().replace(
      /(\d)(?=(\d\d\d)+([^\d]|$))/g,
      "$1 "
    ).trim();

  priceType = "";
  normalizeCurrency = this.currency;
  normalizeTimeInterval = this.timeInterval;

  @Watch("value", { immediate: true, deep: true })
  onValueChanged(val: number | string) {
    this.$nextTick(() => {
      this.localValue = this.cost || parseFloat(val.toString());
      this.normalizeValue = this.showFloat ?
        parseFloat(this.localValue.toString()).toString().split(".").map((item: any, index) => {
          if (index === 0) {
            item = item.replace(
              /(\d)(?=(\d\d\d)+([^\d]|$))/g,
              "$1 "
            );
          } else {
            item = parseInt(item).toFixed(2).toString();
            item = item[0]+item[1];
            item = item.replace('.','');
            if(item.length === 1 && !this.trimHundredth){
              item += '0';
            }
          }
          return item;
        }).join(",") : parseInt(this.localValue.toString(), 10).toString().replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          "$1 "
        ).trim();
    });
  }

  @Watch("oldValue", { immediate: true, deep: true })
  onOldValueChanged(val: number | string) {

    this.normalizeOldValue = this.showFloat ?
      parseFloat(val.toString()).toString().split(".").map((item:any, index) => {
        if (index === 0) {
          item = item.replace(
            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
            "$1 "
          );
        } else {
          item = parseInt(item).toFixed(2).toString();
          item = item[0]+item[1];
          item = item.replace('.','');
          if(item.length === 1 && !this.trimHundredth){
            item += '0';
          }
        }

        return item;
      }).join(",") : parseInt(val.toString(), 10).toString().replace(
        /(\d)(?=(\d\d\d)+([^\d]|$))/g,
        "$1 "
      ).trim();
  }

  @Watch("currency", { immediate: true, deep: true })
  onCurrencyChanged(val: string) {
    this.normalizeCurrency = val;
  }

  @Watch("timeInterval", { immediate: true, deep: true })
  onTimeIntervalChanged(val: string) {
    this.normalizeTimeInterval = val;
  }

  mounted() {
    this.cost = this.value ? parseFloat(this.value.toString()) : 0;
  }

  render(h: CreateElement): VNode {

    const rtPriceClass = "rt-price" + (this.forGame ? " rt-price-game" : "");
    const rtPriceInfoClass = "rt-price__info" + (this.boldOption ? " rt-price__info--bold-font" : "");
    const timeIntervalRender = () => {
      if (this.normalizeTimeInterval && !this.onlyPrice) {
        return <div class="rt-price__info-item">
          {this.normalizeTimeInterval}
        </div>;
      } else {
        return null;
      }
    };
    const opinionRender = () => {
      if (this.isOption) {
        return <div class="rt-price__opinion">{this.optionLabel}</div>;
      } else {
        return null;
      }
    };
    const currencyRender = () => {
      if (this.normalizeCurrency) {
        {
          return <div class="rt-price__info-item">
            {this.normalizeCurrency}
          </div>;
        }
      } else {
        return null;
      }
    };
    const oldValueRender = () => {
      if (this.normalizeOldValue && parseFloat(this.normalizeOldValue) > 0) {
        return <div class="rt-price__old-value">{this.normalizeOldValue}</div>;
      } else {
        return null;
      }
    };
    const priceInfoRender = () => {
      if (this.isTimeIntervalBottom) {
        return <div>
          {opinionRender()}
          <div class={"rt-price__value rtb-price__value" + (this.colorValue ? " color-" + this.colorValue : "")}>
            {this.$slots.epcPrice ? this.$slots.epcPrice : this.normalizeValue}
          </div>
          <div class="rtb-price__info rt-price__info">{this.normalizeCurrency}</div>
          <div class="rt-font-small-paragraph rt-font-bold rtb-price__info-interval">{this.normalizeTimeInterval}</div>
        </div>;
      } else {
        return <div>
          {opinionRender()}
          <div class={"rt-price__value rtb-price__value" + (this.colorValue ? " color-" + this.colorValue : "")}>
            {this.$slots.epcPrice ? this.$slots.epcPrice : this.normalizeValue}
          </div>
          <div class="rt-price__info rtb-price__info">
            <div class="rt-price__info-item rtb-price__info-item">{this.normalizeCurrency}</div>
            <div class="rtb-price__info-item">{this.normalizeTimeInterval}</div>
          </div>
        </div>;
      }
    };
    if (this.b2bPrice) {
      const oldB2bPriceRender = () => {
        if (this.normalizeOldValue && parseFloat(this.normalizeOldValue) > 0) {
          return <div class={"rt-price__old-value rtb-price__old-value" + (this.oldPriceColor ? " color-" + this.oldPriceColor : "")}>{this.normalizeOldValue}
            <div class={"rt-price__info rtb-price__info-item"}>
            <span
              class={(this.oldPriceColor ? " color-" + this.oldPriceColor : "")}>{this.normalizeCurrency}</span>
            </div>
          </div>;
        } else {
          return null;
        }
      };
      return <div class={"rt-price rtb-price rt-price-without-space" + (this.darkened ? " rtb-price--darkened" : "")}>
        {oldB2bPriceRender()}
        {priceInfoRender()}
      </div>;
    } else {
      return <div class={`${rtPriceClass} rt-price-without-space`}>
        {opinionRender()}
        {oldValueRender()}
        <div
          class={"rt-price__option-value rt-price__value" + (this.colorValue ? " color-" + this.colorValue : "")}>{this.normalizeValue}</div>
        <div class={rtPriceInfoClass}>
          {currencyRender()}
          {timeIntervalRender()}
        </div>
      </div>;
    }
  }


}

export default {
  component: Price,
  name: "RtPrice"
};
