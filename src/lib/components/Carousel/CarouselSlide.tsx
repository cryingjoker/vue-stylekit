import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

const cssSelector = 'rt-carousel__slide'
const name = 'RtCarouselSlide'

@Component
class CarouselSlide extends Vue {

  name: string = name

  @Prop({ default: '' }) slideClasses: string
  @Prop() loaded: undefined|boolean

  shown: boolean = this.loaded !== undefined ? this.loaded : true
  offsetSlide: number|string

  mounted () { }

  toggle (flag: boolean|undefined) {
    if (this.loaded === undefined || this.loaded)
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
  name: name
}
