<script type="text/jsx">
export default {
  name: "RtPrice",
  props: {
    value: {
      type: Number,
      default: 0,
      required: true
    },
    optionLabel: {
      type: String,
      default: null
    },
    colorValue: {
      type: String,
      default: null
    },
    oldValue: {
      type: Number,
      default: null
    },
    currency: {
      type: String,
      default: "руб."
    },
    timeInterval: {
      type: String,
      default: "мес."
    },
    isOption: {
      type: Boolean,
      default: false
    },
    onlyPrice: {
      type: Boolean,
      default: false
    },
    forGame:{
      type: Boolean,
      default: false
    },
    boldOption:{
      type: Boolean,
      default: false
    },
    b2bPrice: {
      type: Boolean,
      default: false
    },
    oldPriceColor: {
      type: String,
      default: ""
    }

  },
  data() {
    return {
      normalizeValue: this.value
        ? (parseInt(this.value) + "").replace(
            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
            "$1 "
          )
        : this.value,
      normalizeOldValue: this.oldValue
        ? (parseInt(this.oldValue) + "").replace(
            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
            "$1 "
          )
        : this.oldValue,
      priceType: (() => {
        if(this.b2bPrice === true) {
          if(this.isOption) {
            return "b2b-price--option";
          }
          if(this.oldValue) {
            return "b2b-price--old-value";
          }
          return "b2b-price";
        }
        if(!this.b2bPrice){
          if (this.onlyPrice) {
            return "only-price";
          }
          if (this.oldValue) {
            return "oldval-price";
          }
          if (this.isOption) {
            return "option-price";
          }
        }
        return "simple-price";
      })(),
      normalizeCurrency: this.currency,
      normalizeTimeInterval: this.timeInterval
    };
  },
  watch: {
    value(val) {
      this.normalizeValue = this.value ? parseInt(this.value) : this.value;
    },
    oldValue(val) {
      this.normalizeOldValue = this.oldValue
        ? parseInt(this.oldValue)
        : this.oldValue;
    }
  },
  mounted: function() {},
  render: function(h) {
      const rtPriceClass = 'rt-price'+(this.forGame ? ' rt-price-game' : '');
      const rtPriceInfoClass = 'rt-price__info'+(this.boldOption ? ' rt-price__info--bold-font' : '');


      switch (this.priceType) {
        case "only-price":
          return (
            <div class={`${rtPriceClass} rt-price-without-space`}>
              <div
                class={"rt-price__value" + (this.colorValue ? 'color-' + this.colorValue : '')}>{this.normalizeValue}</div>
              <div class={rtPriceInfoClass}>
                <div class="rt-price__info-item">{this.normalizeCurrency}</div>
              </div>
            </div>
          );
          break;
        case "oldval-price":
          return (
            <div class={`${rtPriceClass} rt-price-without-space`}>
              <div class="rt-price__old-value">{this.normalizeOldValue}</div>
              <div
                class={"rt-price__value" + (this.colorValue ? ' color-' + this.colorValue : '')}>{this.normalizeValue}</div>
              <div class={rtPriceInfoClass}>
                <div class="rt-price__info-item">{this.normalizeCurrency}</div>
                <div class="rt-price__info-item">
                  {this.normalizeTimeInterval}
                </div>
              </div>
            </div>
          );
        case "option-price":
          return (
            <div class={`${rtPriceClass} rt-price-without-space`}>
              <div class="rt-price__opinion">{this.optionLabel ? this.optionLabel : 'от'} </div>
              <div
                class={"rt-price__value" + (this.colorValue ? ' color-' + this.colorValue : '')}>{this.normalizeValue}</div>
              <div class={rtPriceInfoClass}>
                <div class="rt-price__info-item">{this.normalizeCurrency}</div>
                <div class="rt-price__info-item">
                  {this.normalizeTimeInterval}
                </div>
              </div>
            </div>
          );
        case "b2b-price":
          return (
            <div class="rt-price rtb-price rt-price-without-space">
              <div class={"rt-price__value rtb-price__value"+ (this.colorValue ? 'color-'+this.colorValue : '')}>{this.normalizeValue}</div>
              <div class="rt-price__info rtb-price__info">
                <div class="rt-price__info-item rtb-price__info-item">{this.normalizeCurrency}</div>
                <div class="rtb-price__info-item">{this.normalizeTimeInterval}</div>
              </div>
            </div>
          );
        case "b2b-price--option":
          return (
            <div class="rt-price rtb-price rt-price-without-space">
              <div class="rt-price__opinion">{this.optionLabel ? this.optionLabel : 'от'} </div>
              <div class={"rt-price__value rtb-price__value"+ (this.colorValue ? 'color-'+this.colorValue : '')}>{this.normalizeValue}</div>
              <div class="rt-price__info rtb-price__info">
                <div class="rt-price__info-item rtb-price__info-item">{this.normalizeCurrency}</div>
                <div class="rtb-price__info-item">{this.normalizeTimeInterval}</div>
              </div>
            </div>
          );
        case "b2b-price--old-value":
          return (
            <div class="rt-price  rtb-price rt-price-without-space">
              <div class="rtb-price__old-value">
                <div class={"rt-price__old-value rtb-price__old-value" + (this.oldPriceColor ? ' color-'+this.oldPriceColor : '')}>{this.normalizeOldValue}
                  <div class="rt-price__info rtb-price__info-item">{this.normalizeCurrency}</div>
                </div>
              </div>
              <div class={"rt-price__value rtb-price__value"+ (this.colorValue ? ' color-'+this.colorValue : '')}>{this.normalizeValue}</div>
              <div class="rt-price__info">
                <div class="rt-price__info rtb-price__info">
                  <div class="rt-price__info-item rtb-price__info-item">{this.normalizeCurrency}</div>
                  <div class="rtb-price__info-item rtb-price__info-item">{this.normalizeTimeInterval}</div>
                </div>
              </div>
            </div>
          );
        default:
          return (
            <div class={`${rtPriceClass} rt-price-without-space`}>
              <div
                class={"rt-price__option-value" + (this.colorValue ? ' color-' + this.colorValue : '')}>{this.normalizeValue}</div>
              <div class={rtPriceInfoClass}>
                <div class="rt-price__info-item">{this.normalizeCurrency}</div>
                <div class="rt-price__info-item">
                  {this.normalizeTimeInterval}
                </div>
              </div>
            </div>
          );
      }
  }
};
</script>
