import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

const cssSelector = 'rt-carousel__navi'
const name = 'RtCarouselNavi'
let navContainerChanged = false

@Component({ name })
class CarouselNavi extends Vue {

  name: string = name

  @Prop() overlayEl: HTMLElement
  @Prop({ default: 0 }) hSpace: number
  @Prop({ default: '' }) containerName: string
  @Prop({ default: 53 }) buttonSize: number
  @Prop({ default: false }) isPending: boolean
  @Prop({ default: false }) showTipsNext: boolean
  @Prop({ default: false }) hideArrows: boolean
  @Prop({ default: 0 }) nextCount: number
  @Prop({ default: 0 }) navsPosStart: number
  @Prop({ default: 0 }) navsPosEnd: number
  @Prop({ default: '' }) navigationContainer: string // Контейнер, в который будет помещена навигация карусели. Если пусто, навигация перемещена не будет
  @Prop({ default: false }) canAdvanceForward: boolean
  @Prop({ default: false }) canAdvanceBackward: boolean
  @Prop({ default: () => {} }) advancePage: CallableFunction

  position: string = 'absolute'
  topPos: string|null = null
  bottomPos: string|null = null

  mounted () {
    if (this.$el.scrollHeight > (this.navsPosStart + this.navsPosEnd)) {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.stickNavs, { passive: true })
        window.addEventListener('resize', this.stickNavs, { passive: true })
      })
      this.stickNavs()
    } else {
      // Если заданная высота отступа выше зоны просмотра, то центрируем стрелочки
      this.topPos = '0px'
      this.bottomPos = '0px'
    }
  }

  updated () {
    if (!navContainerChanged && this.navigationContainer !== '') {
      let els = document.querySelectorAll(this.navigationContainer)
      if (els.length) {
        els[0].insertBefore(this.$el, els[0].firstChild)
      }
      navContainerChanged = true
    }
  }

  destroyed () {
    window.removeEventListener('scroll', this.stickNavs)
    window.removeEventListener('resize', this.stickNavs)
  }

  stickNavs () {
    if (this.overlayEl) {
      const getTop = (this.overlayEl.getBoundingClientRect().top + window.pageYOffset) || document.documentElement.scrollTop
      let posY = window.pageYOffset + window.innerHeight / 2
      let posStart = getTop + this.navsPosStart
      let posEnd = getTop + this.overlayEl.clientHeight - this.navsPosEnd - this.buttonSize
      if ((posY >= posStart) && posY < posEnd) {
        // Scrolled
        this.position = 'fixed'
        this.topPos = null
        this.bottomPos = 'auto'
      } else if (posY >= posEnd) {
        // After scrolling zone
        this.position = 'absolute'
        this.topPos = 'auto'
        this.bottomPos = `${this.navsPosEnd}px`
      } else {
        // Before scrolling zone
        this.position = 'absolute'
        this.topPos = `${this.navsPosStart}px`
        this.bottomPos = 'auto'
      }
    }
  }

  triggerPageAdvance (e: Event) {
    let el = e && e.target ? e.target as HTMLElement : null
    if (el && el.getAttribute('data-pos'))
      this.advancePage(el.getAttribute('data-pos'))
  }

  render (): VNode {

    const sideRender = (pos: string): VNode => {
      let n = cssSelector + '-side'
      let className = n + ' ' + n + '-' + pos
      return <div
        class={ className }
        data-pos={ pos }
        onClick={ this.triggerPageAdvance }
        style={{ width: this.hSpace + 'px' }}
      />
    }
    const sideLeftBlock = (): VNode => {
      if (this.canAdvanceBackward)
        return sideRender('prev')
    }
    const sideRightBlock = (): VNode => {
      if (this.canAdvanceForward)
        return sideRender('next')
    }
    const moreTextBlock = () => {
      if (this.showTipsNext && this.nextCount > 0)
        return <div
          class={ cssSelector + '-more-text' }
        >Ещё&nbsp;{this.nextCount}</div>
    }
    const btnRender = (pos: string): VNode => {
      if (!this.hideArrows)
        return <a
          class={[
            cssSelector + '-btn',
            cssSelector + '-btn-' + pos,
            {
              'is-disabled' : pos === 'next' ? !this.canAdvanceForward : !this.canAdvanceBackward,
              'is-pending' : this.isPending
            }
          ]}
          data-pos={ pos }
          onClick={ this.triggerPageAdvance }
          style={{
            width: this.buttonSize + 'px',
            height: this.buttonSize + 'px'
          }}
        >
          <i class={ cssSelector + '-circle-icon' } />
          { pos === 'next' ? moreTextBlock() : null }
        </a>
    }

    return <div
        class={cssSelector}
      >
        { sideLeftBlock() }
        <div
          class={[
            cssSelector + '-arrows',
            this.containerName
          ]}
          style={{
            position: this.position,
            height: this.buttonSize + 'px',
            top: this.topPos,
            bottom: this.bottomPos
          }}
        >
          { btnRender('prev') }
          { btnRender('next') }
        </div>
        { sideRightBlock() }
      </div>
  }
}

export default {
  component: CarouselNavi,
  name: name
}
