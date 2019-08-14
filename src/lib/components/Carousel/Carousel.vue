<script type="text/jsx">
import Navigation from './CarouselNavi.vue'
import Mobile from '../../utils/mobile'
import Animate from '../../utils/animate'

const name = 'RtCarousel'
const cssSelector = 'rt-carousel'
const cssContainer = 'rt-container'
const autoScrollingTimeout = 100 // Длительность задержки автоскроллинга
const slideSwipingMinDistance = 40 // Минимальное значение сдвига для автоскроллинга

export default {
  name: name,
  components: {
    [Navigation.name]: Navigation
  },
  props: {
    decorated: {
      type: Boolean // Технический параметр для обворачивания карусели в другой компонент
    },
    hideArrows: {
      type: Boolean,
      default: false
    },
    hideNavigation: {
      type: Boolean,
      default: false
    },
    disabledScrolling: {
      type: Boolean,
      default: false
    },
    autoScrolling: {
      type: Boolean,
      default: true
    },
    showTipsNext: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 500
    },
    offsetTop: {
      type: Number,
      default: 20
    },
    offsetBottom: {
      type: Number,
      default: 20
    },
    navsPosStart: {
      type: Number,
      default: 113
    },
    navsPosEnd: {
      type: Number,
      default: 200
    },
    slidesClasses: {
      type: String,
      default: 'rt-col-3 rt-col-md-2 rt-col-td-3'
    },
    transitionFunction: {
      type: String,
      default: 'easeInOutCubic'
    }
  },
  data() {
    return {
      isAnimating: false,
      isFinalSlide: false,
      isPending: true,
      isTouch: Mobile.isTouch,
      isInnerBlock: false, // Позволяет вынести блок карусели за контейнер
      innerBlockOffset: null,
      hSpace: 0,
      movesArr: [], // Для ускорения работы используется массив с широтами слайдов, а не vue-инстансы
      toggleSlidesTimer: null,
      scrollingTimer: null,
      canAdvanceForward: false,
      canAdvanceBackward: false,
      scrollingAutoEnd: true,
      swipingStartPoint: null // Детектор направления свайпинга
    }
  },
  computed: {
    overlayEl () {
      return this.$refs.overlay
    },
    slidedEl () {
      return this.$refs.inner
    },
    slides () {
      let slideName = 'CarouselSlide'
      if (this.decorated) {
        let list = []
        this.$children
          .filter(vn => vn.$vnode && vn.$vnode.tag && vn.$vnode.tag.indexOf('slide') > -1)
          .forEach(ch => {
            if (ch.$children && ch.$children.length > 0) {
              ch.$children.forEach((child) => {
                if (child.$vnode && child.$vnode.tag && child.$vnode.tag.indexOf(slideName) > -1)
                  list.push(child)
              })
            }
          })
        return list
      } else {
        return this.$children.filter(
          slide => slide.$vnode && slide.$vnode.tag && slide.$vnode.tag.indexOf(slideName) > -1
        )
      }
    }
  },
  mounted() {
    this.isInnerBlock = document.querySelector(`.${cssContainer} .${cssSelector}[data-uid="${this._uid}"]`) !== null
    if (!this.isTouch) {
      this.createMoves()
      window.addEventListener('resize', this.createMoves, { passive: true })
      if (this.overlayEl)
        this.overlayEl.addEventListener('scroll', this.scrollNative, { passive: true })
    }
  },
  destroyed() {
    this.isAnimating = false
    this.isPending = true
    if (!this.isTouch) {
      window.removeEventListener("resize", this.createMoves)
      clearTimeout(this.scrollingTimer)
      clearTimeout(this.toggleSlidesTimer)
    }
  },
  methods: {
    /**
     * Простая навигация зоны просмотра по слайдам
     */
    advancePage(direction) {
      if (!this.isPending && !this.isAnimating) {
        let now = this.overlayEl.scrollLeft
        let distance = 0
        let wrapStyles = getComputedStyle(this.slidedEl)
        let wrapperWidth = parseFloat(wrapStyles.width) - parseFloat(wrapStyles.paddingLeft) * 2
        if (direction === "next") {
          this.movesArr.some((w) => {
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
        if (distance < 0)
          distance = 0
        if (!this.swipingStartPoint)
          this.swipingStartPoint = now
        this.move(distance)
      }
    },
    /**
     * Доводчик позиции скролла до ближайшего слайда
     */
    autoScroller(delay = autoScrollingTimeout) {
      if (this.autoScrolling && !this.isPending && !this.isAnimating) {
        let now = this.overlayEl.scrollLeft
        this.scrollingTimer = setTimeout(() => {
          if (
            (now === this.overlayEl.scrollLeft && now !== this.swipingStartPoint) &&
            (!this.isAnimating && !this.isPending)
          ) {
            this.scrollingAutoEnd = false
            // Определив что скроллинг окончен получаем ближайшую позицию для доводки скролла
            let distance = this.getNearbySlide()
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
    },
    autoScrollerRemove() {
      clearTimeout(this.scrollingTimer)
      this.scrollingTimer = null
      this.scrollingAutoEnd = true
    },
    /**
     * Оптимизирует навигацию по слайдам, собирая диапозоны широт в виде массива
     */
    createMoves () {
      this.isPending = true
      this.movesArr = []
      if (this.isInnerBlock) {
        this.innerBlockOffset = this.$el.parentElement.getBoundingClientRect().left
      }
      this.isPending = false

      if (this.isInnerBlock) {
        this.hSpace = this.innerBlockOffset
      } else {
        let leftPadding = parseFloat(getComputedStyle(this.slidedEl).paddingLeft)
        let leftOffset = this.slidedEl.getBoundingClientRect().left
        this.hSpace = (leftPadding > 0 ? leftPadding : 0) + (leftOffset > 0 ? leftOffset : 0)
      }

      this.$nextTick(() => {
        this.slides.forEach((slide, i) => {
          if (typeof slide.width === 'function') {
            this.movesArr.push({
              width: slide.width(),
              key: i
            })
          }
        })
        this.move()
        this.toggleSlides()
      })
    },
    getNearbySlide (to = this.overlayEl.scrollLeft) {
      if (this.swipingStartPoint !== to) {
        let nextNav = this.swipingStartPoint <= to
        let distance = nextNav ? 0 : this.overlayEl.scrollWidth - this.hSpace * 2
        if (nextNav) {
          this.movesArr.some(w => {
            if (distance + slideSwipingMinDistance > to) {
              return true
            } else {
              distance += w.width
            }
          })
        } else {
          void [...this.movesArr].reverse().some((w) => {
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
    },
    slidesWidth() {
      if (this.movesArr.length) {
        return this.movesArr.reduce(
          (accum, curVal) =>
            (typeof accum === "object" && accum.constructor === Object
              ? accum.width
              : accum) + curVal.width
        );
      }
      return 0
    },
    move (to = 0) {
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
            this.isFinalSlide = this.overlayEl.scrollLeft + overlayContainerWidth + slideSwipingMinDistance >= this.overlayEl.scrollWidth
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
    },
    scrollNative (e) {
      if (!this.disabledScrolling && !this.isTouch) {
        let el = e.target
        this.canAdvanceBackward = el.scrollLeft > 0
        this.isFinalSlide = el.scrollLeft + el.offsetWidth + slideSwipingMinDistance >= el.scrollWidth
        this.canAdvanceForward = !this.isFinalSlide
        this.autoScroller()
      }
      this.toggleSlides()
    },
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
          this.movesArr.forEach((w) => {
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
          this.slides.forEach((s, k) => {
            if (typeof s.toggle === 'function')
              s.toggle(hiddenSlides.indexOf(k) === -1)
          })
        }, 15)
      }
    }
  },
  render (h) {
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
      if (!this.hideNavigation && !this.isTouch && !this.disabledScrolling)
        return <rt-carousel-navi
            hSpace={ this.hSpace }
            isPending={ this.isPending }
            hideArrows={ this.hideArrows }
            showTipsNext={ this.showTipsNext }
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
      data-uid={ this._uid }
      style={{
        marginTop: -this.offsetTop + 'px',
        marginBottom: -this.offsetBottom + 'px',
        width: this.isInnerBlock ? `${document.body.clientWidth}px` : null,
        marginLeft: this.isInnerBlock ? `-${this.innerBlockOffset}px` : null
      }}
    >
      { navsBlock() }
      { desktopBlock() }
      { mobileBlock() }
    </div>
  }
}
</script>
