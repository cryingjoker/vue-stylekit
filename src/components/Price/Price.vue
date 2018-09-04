<script type="text/jsx">
    export default {
        props: {
            value: Number,
            oldValue: Number,
            currency: String,
            timeInterval: String,
            isOption: Boolean
        },
        data() {
            return {
                normalizeValue: this.value ? parseInt(this.value) : this.value,
                normalizeOldValue: this.oldValue ? parseInt(this.oldValue) : this.oldValue,
                priceType: (() => {
                    if (typeof this.oldValue === 'number') {
                        return 'oldval-price'
                    }
                    console.info('this.isOption-->>',this.isOption);
                    if (this.isOption) {
                        return 'option-price'
                    }
                    return 'simple-price'

                })(),
                normalizeCurrency: this.currency || 'руб.',
                normalizeTimeInterval: this.timeInterval || 'мес.'
            }
        },
        name: "rt-price",
        watch: {
            value(val) {
                this.normalizeValue = this.value ? parseInt(this.value) : this.value;
            },
            oldValue(val) {
                this.normalizeOldValue = this.oldValue ? parseInt(this.oldValue) : this.oldValue;
            }
        },
        mounted: function () {
        },
        render: function (h) {

            switch (this.priceType) {
                case 'oldval-price':
                    return <div class="rt-price">
                        <div class="rt-price__old-value">{this.normalizeOldValue}</div>
                        <div class="rt-price__value">{this.normalizeValue}</div>
                        <div class="rt-price__info">
                            <div class="rt-price__info-item">{this.normalizeCurrency}</div>
                            <div class="rt-price__info-item">{this.normalizeTimeInterval}</div>
                        </div>
                    </div>
                case 'option-price':
                    return <div class="rt-price">
                        <div class="rt-price__opinion">от</div>
                        <div class="rt-price__value">{this.normalizeValue}</div>
                        <div class="rt-price__info">
                            <div class="rt-price__info-item">{this.normalizeCurrency}</div>
                            <div class="rt-price__info-item">{this.normalizeTimeInterval}</div>
                        </div>
                    </div>
                default:
                    return <div class="rt-price">
                        <div class="rt-price__option-value">{this.normalizeValue}</div>
                        <div class="rt-price__info">
                            <div class="rt-price__info-item">{this.normalizeCurrency}</div>
                            <div class="rt-price__info-item">{this.normalizeTimeInterval}</div>
                        </div>
                    </div>
            }
        }
    };
</script>
