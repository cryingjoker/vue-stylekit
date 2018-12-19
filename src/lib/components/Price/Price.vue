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
        if (this.onlyPrice) {
          return "only-price";
        }
        if (this.oldValue) {
          return "oldval-price";
        }
        if (this.isOption) {
          return "option-price";
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
    switch (this.priceType) {
      case "only-price":
        return (
          <div class="rt-price rt-price-without-space">
            <div class="rt-price__value">{this.normalizeValue}</div>
            <div class="rt-price__info">
              <div class="rt-price__info-item">{this.normalizeCurrency}</div>
            </div>
          </div>
        );
        break;
      case "oldval-price":
        return (
          <div class="rt-price rt-price-without-space">
            <div class="rt-price__old-value">{this.normalizeOldValue}</div>
            <div class="rt-price__value">{this.normalizeValue}</div>
            <div class="rt-price__info">
              <div class="rt-price__info-item">{this.normalizeCurrency}</div>
              <div class="rt-price__info-item">
                {this.normalizeTimeInterval}
              </div>
            </div>
          </div>
        );
      case "option-price":
        return (
          <div class="rt-price rt-price-without-space">
            <div class="rt-price__opinion">{this.optionLabel ? this.optionLabel : 'от'} </div>
            <div class="rt-price__value">{this.normalizeValue}</div>
            <div class="rt-price__info">
              <div class="rt-price__info-item">{this.normalizeCurrency}</div>
              <div class="rt-price__info-item">
                {this.normalizeTimeInterval}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div class="rt-price rt-price-without-space">
            <div class="rt-price__option-value">{this.normalizeValue}</div>
            <div class="rt-price__info">
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
