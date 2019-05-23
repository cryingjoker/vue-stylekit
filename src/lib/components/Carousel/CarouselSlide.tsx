import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

const cssSelector = 'rt-carousel__slide'

@Component
class CarouselSlide extends Vue {

  @Prop({ default: '' }) slideClasses: string

  shown: boolean = true
  offsetSlide: number|string

  mounted () { }

  toggle (flag: boolean|undefined) {
    this.shown = flag !== undefined ? flag : !this.shown
  }

  width (): number {
    return this.$el.clientWidth
  }

  getCustomClass () {
    return this.slideClasses ? this.slideClasses : this.$parent['slidesClasses']
  }

  render (): VNode {
    return <div
        class={ cssSelector + (this.shown ? '' : ' not-shown') + ' ' + this.getCustomClass() }
        style={{ paddingRight: this.offsetSlide + 'px' }}
      >{ this.$slots.default }</div>
  }
}

export default {
  component: CarouselSlide,
  name: 'RtCarouselSlide'
}
