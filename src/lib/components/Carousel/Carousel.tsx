import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

// @ts-ignore
import CarouselNavi from './CarouselNavi.tsx'

import Mobile from '../../utils/mobile'
import Animate from '../../utils/animate'

const cssSelector = 'rt-carousel'
const cssContainer = 'rt-container'
const autoScrollingTimeout = 100; // Длительность задержки автоскроллинга
const slideSwipingMinDistance = 40 // Минимальное значение сдвига для автоскроллинга

let listOfChilds = {}
listOfChilds[CarouselNavi.name] = CarouselNavi.component

@Component({
  components: listOfChilds
})
class Carousel extends Vue {

  @Prop({ default: false }) hideArrows: boolean
  @Prop({ default: false }) hideNavigation: boolean
  @Prop({ default: false }) disabledScrolling: boolean
  @Prop({ default: true }) autoScrolling: boolean
  @Prop({ default: 500 }) duration: number
  @Prop({ default: 20 }) offsetTop: number
  @Prop({ default: 20 }) offsetBottom: number
  @Prop({ default: 113 }) navsPosStart: number
  @Prop({ default: 200 }) navsPosEnd: number
  @Prop({ default: 'rt-col-3 rt-col-md-2 rt-col-td-3' }) slidesClasses: string
  @Prop({ default: 'easeInOutCubic' }) transitionFunction: string

  isAnimating: boolean = false
  isFinalSlide: boolean = false
  isPending: boolean = true
  isTouch: boolean = Mobile.isTouch
  hSpace: number = 0
  movesArr: any = [] // Для ускорения работы используется массив с широтами слайдов, а не vue-инстансы
  toggleSlidesTimer = null
  scrollingTimer = null

  canAdvanceForward: boolean = false
  canAdvanceBackward: boolean = false

  scrollingAutoEnd: boolean = true
  swipingStartPoint: null|number = null // Детектор направления свайпинга

  get overlayEl () {
    return this.$refs.overlay as HTMLElement
  }

  get slidedEl () {
    return this.$refs.inner as HTMLElement
  }

  get slides () {
    return (
      this.$children && this.$children.filter(
        slide => slide.$vnode && slide.$vnode.tag && slide.$vnode.tag.indexOf('CarouselSlide') > -1
      )
    )
  }

  mounted () {
    if (!this.isTouch) {
      this.createMoves()
      window.addEventListener('resize', this.createMoves, { passive: true })
      if (this.overlayEl)
        this.overlayEl.addEventListener('scroll', this.scrollNative, { passive: true })
    }
  }

  destroyed () {
    this.isAnimating = false
    this.isPending = true
    if (!this.isTouch) {
      window.removeEventListener("resize", this.createMoves)
      clearTimeout(this.scrollingTimer)
      clearTimeout(this.toggleSlidesTimer)
    }
  }

  /**
   * Простая навигация зоны просмотра по слайдам
   */
  advancePage (direction: null|string) {
    if (!this.isPending && !this.isAnimating) {
      let now: number = this.overlayEl.scrollLeft
      let distance: number = 0
      let wrapStyles = getComputedStyle(this.slidedEl)
      let wrapperWidth = parseFloat(wrapStyles.width) - parseFloat(wrapStyles.paddingLeft) * 2
      if (direction === "next") {
        this.movesArr.some((w: any) => {
          distance += w.width
          if (Math.round((distance * 100) / 100) >= wrapperWidth) {
            distance = now + distance
            return true
          }
        })
      } else if (direction === "prev") {
        void [...this.movesArr].reverse().some(w => {
          distance += w.width
          if (Math.round((distance * 100) / 100) >= wrapperWidth) {
            distance = now - distance
            return true
          }
        })
      }
      if (distance > this.overlayEl.scrollWidth)
        distance = this.overlayEl.scrollWidth
      if (distance < 0)
        distance = 0
      if (!this.swipingStartPoint)
        this.swipingStartPoint = now
      this.move(distance)
    }
  }

  autoScroller (delay = autoScrollingTimeout) {
    if (this.autoScrolling && !this.isPending && !this.isAnimating) {
      let now = this.overlayEl.scrollLeft
      this.scrollingTimer = setTimeout(() => {
        if (
          (now === this.overlayEl.scrollLeft && now !== this.swipingStartPoint) &&
          (!this.isAnimating && !this.isPending)
        ) {
          this.scrollingAutoEnd = false
          // Определив что скроллинг окончен получаем ближайшую позицию для доводки скролла
          let distance: null|number = this.getNearbySlide()
          if (distance !== null && this.overlayEl.scrollLeft !== distance) {
            this.move(distance).then(() => {
              this.autoScrollerRemove()
            })
          } else {
            this.autoScrollerRemove()
          }
        }
      }, delay)
    }
  }

  autoScrollerRemove () {
    clearTimeout(this.scrollingTimer)
    this.scrollingTimer = null
    this.scrollingAutoEnd = true
  }

  /**
   * Оптимизирует навигацию по слайдам, собирая диапозоны широт в виде массива
   */
  createMoves () {
    // Пересчитываем ширину контейнера
    this.isPending = true
    this.movesArr = []
    this.isPending = false
    let leftPadding = parseFloat(getComputedStyle(this.slidedEl).paddingLeft)
    let leftOffset = this.slidedEl.getBoundingClientRect().left
    this.hSpace = (leftPadding > 0 ? leftPadding : 0) + (leftOffset > 0 ? leftOffset : 0)
    this.slides.forEach((slide: any, i) => {
      if (slide.width()) {
        this.movesArr.push({
          width: slide.width(),
          key: i
        })
      }
    })
    setTimeout(() => {
      this.move()
      this.toggleSlides()
    }, 50)
  }

  getNearbySlide (to = this.overlayEl.scrollLeft): null|number {
    if (this.swipingStartPoint !== to) {
      let nextNav = this.swipingStartPoint <= to
      let distance: number = nextNav ? 0 : this.overlayEl.scrollWidth - this.hSpace * 2
      if (nextNav) {
        this.movesArr.some((w: any) => {
          if (distance + slideSwipingMinDistance >= to) {
            return true
          } else {
            distance += w.width
          }
        })
      } else {
        void [...this.movesArr].reverse().some((w: any) => {
          if (distance - slideSwipingMinDistance <= to) {
            return true
          } else {
            distance -= w.width
          }
          if (distance < 0) {
            distance = 0
          }
        })
      }
      return distance;
    } else {
      return null;
    }
  }

  move (to: number = 0) {
    return new Promise(resolve => {
      if (!this.overlayEl) {
        resolve()
      }
      let from = this.overlayEl.scrollLeft
      let overlayContainerWidth = parseFloat(getComputedStyle(this.overlayEl).width)
      let slidesWidth = () => {
        if (this.movesArr.length) {
          return this.movesArr.reduce(
            (accum, curVal) => (
              typeof accum === "object" && accum.constructor === Object
                ? accum.width
                : accum
            ) + curVal.width + this.hSpace
          )
        }
        return 0
      }
      let updateNavs = () => {
        if (!this.isTouch) {
          this.canAdvanceBackward = to > 1
          this.isFinalSlide = this.overlayEl.scrollLeft + overlayContainerWidth + 2 >= this.overlayEl.scrollWidth
          let navsOnlyLackOfWidth = overlayContainerWidth < slidesWidth()
          this.canAdvanceForward = !this.isFinalSlide && navsOnlyLackOfWidth
        }
      }
      if (from !== to && from !== to + 1) {
        this.isAnimating = true
        this.$emit('onAnimatingStart', callback => callback())
        Animate.start({
          duration: this.duration,
          timing: Animate.timingFunctions[this.transitionFunction],
          draw: (progress) => {
            if (this.overlayEl) {
              this.overlayEl.scrollLeft = from + (to - from) * progress
            }
          },
          onLeave: () => {
            updateNavs()
            this.$emit('onAnimatingEnd', callback => callback())
            setTimeout(() => {
              this.isAnimating = false
              resolve()
            }, 1) // В FF скроллинг быстрее отрабатывает, чем триггер isAnimating
          }
        })
      } else {
        updateNavs()
        resolve()
      }
    })
  }

  scrollNative (e: Event) {
    if (!this.disabledScrolling && !this.isTouch) {
      let el = e.target as HTMLElement
      this.canAdvanceBackward = el.scrollLeft > 0
      this.isFinalSlide = el.scrollLeft + el.offsetWidth + 1 >= el.scrollWidth
      this.canAdvanceForward = !this.isFinalSlide
      this.autoScroller()
    }
    this.toggleSlides()
  }

  toggleSlides () {
    if (!this.isTouch) {
      clearTimeout(this.toggleSlidesTimer)
      this.toggleSlidesTimer = setTimeout(() => {
        if (!this.overlayEl && !this.$refs.overlay) {
          return
        }
        if (!this.overlayEl)
          return
        let startScrolling = this.overlayEl.scrollLeft
        let distance = 0
        let distanceLeft = 0
        let distanceRight = startScrolling + this.slidedEl.clientWidth
        let hiddenSlides = []
        this.movesArr.forEach((w: any) => {
          distance += w.width
          if (startScrolling - slideSwipingMinDistance > distanceLeft) {
            if (this.canAdvanceBackward) {
              hiddenSlides.push(w.key)
            }
            distanceLeft += w.width
          }
          if (distance - slideSwipingMinDistance > distanceRight) {
            hiddenSlides.push(w.key)
            distanceRight += w.width
          }
        })
        this.slides.forEach((s: any, k) => {
          s.toggle(hiddenSlides.indexOf(k) === -1)
        })
      }, 15)
    }
  }

  render () {

    const desktopBlock = () => {
      if (!this.isTouch)
        return <div
          ref="overlay"
          class={ cssSelector + '__overlay' }
        >
          <div
            ref="inner"
            class={ cssSelector + '__inner ' + cssContainer }
            style={{
              paddingTop: this.offsetTop + 'px',
              paddingBottom: this.offsetBottom + 'px'
            }}
          >
            { this.$slots.default }
            { spacerBlock() }
          </div>
        </div>
    }
    const mobileBlock = () => {
      if (this.isTouch)
        return <div
          ref="overlay"
          class={ cssSelector + '__overlay ' + cssSelector + '__inner ' + cssContainer }
          style={{
            paddingTop: this.offsetTop + 'px',
            paddingBottom: this.offsetBottom + 'px'
          }}
        >
          { this.$slots.default }
          { spacerBlock() }
        </div>
    }
    const navsBlock = () => {
      if (!this.hideNavigation && !this.isTouch)
        return <rt-carousel-navi
            h-space={ this.hSpace }
            isPending={ this.isPending }
            hideArrows={ this.hideArrows }
            containerName={ cssContainer }
            overlayEl={ this.$refs.overlay } // Не используй HTMLElement (this.overlayEl), т.к будет перезаписана переменная геттера
            advancePage={ this.advancePage }
            canAdvanceForward={ this.canAdvanceForward }
            canAdvanceBackward={ this.canAdvanceBackward }
            navsPosStart={ this.navsPosStart }
            navsPosEnd={ this.navsPosEnd }
          />
    }
    const spacerBlock = () => {
      return <div
          class={ cssSelector + '__spacer' }
          style={{ flex: '0 0 ' + this.hSpace + 'px' }}
        >
        </div>
    }

    return <div
      class={[
        cssSelector,
        {
          'is-touch-device': this.isTouch,
          'is-pending': this.isPending,
          'is-animating': this.isAnimating,
          'is-hide-navs': this.hideNavigation,
          'is-scrolling' : !this.scrollingAutoEnd,
          'is-disabled-scrolling': this.disabledScrolling
        }
      ]}
      style={{
        marginTop: -this.offsetTop + 'px',
        marginBottom: -this.offsetBottom + 'px'
      }}
    >
      { navsBlock() }
      { desktopBlock() }
      { mobileBlock() }
    </div>
  }
}

export default {
  component: Carousel,
  name:'RtCarousel'
}
