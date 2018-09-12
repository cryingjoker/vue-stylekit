<script type="text/jsx">
export default {
  name: "RtPrice",
  props: {
    value: Number,
    oldValue: Number,
    currency: String,
    timeInterval: String,
    isOption: Boolean,
    onlyPrice: Boolean
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
          return "only-price"
        }
        if (typeof this.oldValue === "number") {
          return "oldval-price"
        }
        if (this.isOption) {
          return "option-price"
        }
        return "simple-price"
      })(),
      normalizeCurrency: this.currency || "руб.",
      normalizeTimeInterval: this.timeInterval || "мес."
    }
  },
  watch: {
    value(val) {
      this.normalizeValue = this.value ? parseInt(this.value) : this.value
    },
    oldValue(val) {
      this.normalizeOldValue = this.oldValue
        ? parseInt(this.oldValue)
        : this.oldValue
    }
  },
  mounted: function() {},
  render: function(h) {
    switch (this.priceType) {
      case "only-price":
        return (
          <div class="rt-price">
            <div class="rt-price__value">{this.normalizeValue}</div>
            <div class="rt-price__info">
              <div class="rt-price__info-item">{this.normalizeCurrency}</div>
            </div>
          </div>
        )
        break
      case "oldval-price":
        return (
          <div class="rt-price">
            <div class="rt-price__old-value">{this.normalizeOldValue}</div>
            <div class="rt-price__value">{this.normalizeValue}</div>
            <div class="rt-price__info">
              <div class="rt-price__info-item">{this.normalizeCurrency}</div>
              <div class="rt-price__info-item">
                {this.normalizeTimeInterval}
              </div>
            </div>
          </div>
        )
      case "option-price":
        return (
          <div class="rt-price">
            <div class="rt-price__opinion">от</div>
            <div class="rt-price__value">{this.normalizeValue}</div>
            <div class="rt-price__info">
              <div class="rt-price__info-item">{this.normalizeCurrency}</div>
              <div class="rt-price__info-item">
                {this.normalizeTimeInterval}
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div class="rt-price">
            <div class="rt-price__option-value">{this.normalizeValue}</div>
            <div class="rt-price__info">
              <div class="rt-price__info-item">{this.normalizeCurrency}</div>
              <div class="rt-price__info-item">
                {this.normalizeTimeInterval}
              </div>
            </div>
          </div>
        )
    }
  }
}
</script>
