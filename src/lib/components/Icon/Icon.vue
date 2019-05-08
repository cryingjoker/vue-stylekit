<script type="text/jsx">
import Vue from "vue";
import colors from "../../color.json";
import defaultValues from '../../defaultIconsSize.json';

import * as svgicon from 'vue-svgicon'
require('./generator/js')

Vue.use(svgicon)

export default {
  name: "RtIcon",
  props: {
    type: {
      type: String,
      default: "default"
    },
    image: {
      type: String,
      default: null
    },
    candy: {
      type: Boolean,
      default: false
    },
    caption: {
      type: String
    },
    size: {
      type: Number,
      default: 55
    },
    width: {
      type: String,
      default: '55px'
    },
    height: {
      type: String,
      default: '55px'
    },
    bg: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    }
  },
  computed: {
    classSize() {
      return ' rt-icon_w' + this.size + ' '
    },
    classCandy() {
      return this.candy ? ' wc-icon wc-candy-icon' : ''
    },
    iconClassName() {
      return 'rt-icon ' + 'rt-icon__' + this.type + this.classSize + this.classCandy
    },
    iconStyle() {
      const styles = {}
      styles.background = this.bg ? this.bg : (defaultValues[this.type] ? defaultValues[this.type].bg : null)
      styles.fill = this.fill ? this.fill : (defaultValues[this.type] ? defaultValues[this.type].fill : null)
      styles.stroke = this.color ? this.color : (defaultValues[this.type] ? defaultValues[this.type].color : null)
      styles.width = this.width ? this.width : (defaultValues[this.type] ? defaultValues[this.type].width : null)
      styles.height = this.height ? this.height : (defaultValues[this.type] ? defaultValues[this.type].height : null)
      return styles
    },
    isSpeedIcon() {
      return [
        'icon_403',
        'icon_404',
        'icon_405',
        'icon_406',
        'INTERNET_SPEED_0'
      ].indexOf(this.type) > -1 && !isNaN(parseInt(this.caption, 10))
    },
    speedProgress() {
      if (this.isSpeedIcon) {
        let val = parseInt(this.caption, 10)
        let maxSpeed = 300
        // Извлекаем процентное отношение шкалы скорости
        let proc = (val > maxSpeed) ? 100 : (val * 100 / maxSpeed)

        // Собираем диапозоны позиций для круга и стрелки
        // @TODO - При увеличении размера иконки необходимо расчитать другие координаты
        let pos = {
          circle: {
            min: 20,
            max: 280
          },
          arrow: { // Для стрелочки инвертированное значение позиции
            min: -134,
            max: 165
          }
        }
        return {
          arrowPos: pos.arrow.min + ((pos.arrow.max - pos.arrow.min) / 100 * proc),
          circlePos: pos.circle.max - ((pos.circle.max - pos.circle.min) / 100 * proc)
        }
      }
    }
  },
  mounted() {},
  render(h) {
    const generatedRender = () => {
      if (!this.image && this.type !== 'default') {
        return <div
            class={this.iconClassName}
            style={this.iconStyle}
          >
            <svgicon
              name={this.type}
            ></svgicon>
            {speedIconRender()}
            {captionRender()}
          </div>
      }
    }
    const speedIconRender = () => {
      if (this.isSpeedIcon) {
        const innerRender = () => {
          if (this.speedProgress && this.speedProgress.circlePos) {
            const styleInner = { padding: '8px', transform: 'rotateZ(-70deg)' }
            return <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="spinned-circle"
              transform-origin="center"
              style={styleInner}
            >
              <circle
                stroke-dashoffset={this.speedProgress.circlePos + '%'}
                stroke-dasharray="300%"
                r="50%"
                cx="50%"
                cy="50%"
                fill="transparent"
              ></circle>
            </svg>
          }
        }
        const outerRender = () => {
          if (this.speedProgress && this.speedProgress.arrowPos) {
            const styleOuter = { padding: '1px', transform: `rotateZ(${this.speedProgress.arrowPos}deg)` }
            return <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="spinned-arrow"
              transform-origin="center"
              style={styleOuter}
            >
              <path
                stroke-width="1"
                fill="none"
                d="M29.9 50.3l-4.5-4 4-4.5"
              ></path>
            </svg>
          }
        }
        return <div
            class="icon-speed__spinned-arrow"
          >
            {innerRender()}
            {outerRender()}
          </div>
      }
    }
    const captionRender = () => {
      if (this.caption) {
        return <span class="caption top">{this.caption}</span>
      }
    }
    const imgRender = () => {
      if (this.image) {
        return <div
          class={'rt-icon' + this.classSize}
        >
          <img src={this.image} width="100%" height="100%" style="border: none;" />
        </div>
      }
    }

    return (
      <div class="widget-inline">
        {generatedRender()}
        {imgRender()}
      </div>
    );
  }
};
</script>
