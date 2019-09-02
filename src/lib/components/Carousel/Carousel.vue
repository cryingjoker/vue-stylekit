<script type="text/jsx">
/**
 * @TODO :
 * + Оптимизировать работу с ускорителем
 * - Отрефакторить калькулятор навигатора (ms:0.053s[@1280x920,17slides])
 * - "Подглядывание" карточек
 * - Более гладкая работа с различными габаритами слайдов
 */

import Navigation from './CarouselNavi.vue'
import Mobile from '../../utils/mobile'
import Animate from '../../utils/animate'

const name = 'RtCarousel'
const cssSelector = 'rt-carousel'
const cssContainer = 'rt-container'
const autoScrollingTimeout = 100 // Длительность задержки автоскроллинга
const slideSwipingMinDistance = 40 // Минимальное значение сдвига для автоскроллинга

// Используется для отладки
let perfStart
let perfResult = 0

let boostedIndex = 0

export default {
  name: name,
  components: {
    [Navigation.name]: Navigation
  },
  props: {
    debug: {
      type: Boolean,
      default: false
    },
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
      innerBlockOffset: 0,
      hSpace: 0,
      movesArr: [], // Для ускорения работы используется массив с широтами слайдов, а не vue-инстансы
      pages: [], // Набор слайдов с позицией для ускорителя
      activeMCId: null,
      activePage: 0,
      MCEndPos: null,
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
      if (!this.isPending && this.pages.length > 0) {
        perfStart = performance.now()

        let currPage = this.activePage + (direction === 'next' ? 1 : -1)

        if (!this.pages[currPage])
          return

        // Ускоритель, когда несколько раз щелкнуть на навигатор
        if (this.isAnimating) {
          boostedIndex++
          let boostedPageId = this.activePage + (direction === 'next' ? boostedIndex : -boostedIndex)
          if (this.pages[boostedPageId]) {
            this.activePage = boostedPageId
            Animate.stop(this.activeMCId)
            this.move(this.pages[boostedPageId].slides[0].move).then(() => { boostedIndex = 0 })
          }
        }

        if (!this.isAnimating) {
          this.pages[this.activePage].active = false
          this.pages[currPage].active = true
          this.activePage = currPage
          this.move(this.pages[currPage].slides[0].move).then(() => { boostedIndex = 0 })
        }
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
            perfStart = performance.now()
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
      if (!this.slidedEl || !this.overlayEl)
        return

      clearTimeout(this.scrollingTimer)
      clearTimeout(this.toggleSlidesTimer)

      this.isPending = true
      this.movesArr = []
      this.pages = []

      this.overlayEl.scrollLeft = 0

      if (this.isInnerBlock)
        this.innerBlockOffset = this.$el.parentElement.getBoundingClientRect().left
      this.isPending = false

      let wrapStyles = getComputedStyle(this.slidedEl)
      let leftPadding = parseFloat(wrapStyles.paddingLeft)
      let innerWrapDiffPadding = this.innerBlockOffset - leftPadding
      let innerWrapPadding = innerWrapDiffPadding > 0 ? innerWrapDiffPadding : 0 // @TMP
      let wrapperWidth
      let maxMoveDist

      if (this.isInnerBlock) {
        this.hSpace = this.innerBlockOffset - innerWrapPadding
      } else {
        let leftOffset = this.slidedEl.getBoundingClientRect().left
        this.hSpace = (leftPadding > 0 ? leftPadding : 0) + (leftOffset > 0 ? leftOffset : 0)
      }

      this.$nextTick(() => {
        wrapperWidth = parseFloat(wrapStyles.width) - this.hSpace * 2
        maxMoveDist = this.overlayEl.scrollWidth - wrapperWidth - this.hSpace * 2

        let currPage = 0
        let pageWidth = 0
        let distance = 0

        this.slides.forEach((slide, i) => {
          if (typeof slide.width === 'function') {
            let isNextPage = false
            let slideWidth = slide.width()
            if (Math.round(distance * 100) / 100 >= wrapperWidth) {
              isNextPage = true
              currPage++
              distance = 0
            }
            if (!this.pages[currPage])
              this.pages[currPage] = {
                active: false,
                slides: []
              }
            this.pages[currPage].slides.push({
              key: i,
              move: pageWidth,
              page: currPage,
              slide: i + 1,
              width: slideWidth
            })
            this.movesArr.push({
              key: i,
              page: currPage,
              width: slideWidth
            })
            distance += slideWidth
            pageWidth += slideWidth
            // Не меньше ширины следующего слайда
            // Не может быть больше inner.srollLeft-innerWrap+leftPadding
            if (pageWidth > maxMoveDist)
              pageWidth = maxMoveDist
            // @TODO - не может быть меньше зоны предпросмотра
          }
        })

        if (this.pages[0]) {
          this.pages[0].active = true
          this.move()
          this.toggleSlides()
        }

        // @try:1 - create pages when mounted
        //  s1  s2  s3  s4
        // [285,285,285,285]=1140
        // [======1140=====]
        // [0,1140,2280,3420,3705]

        // if (maxMoveDist > 0)
        //   console.log(
        //     'Instance ', this,
        //     '\n pages ', this.pages,
        //     // '\n maxMoveDist ', maxMoveDist,
        //     // '\n oldWrapperWidth ', this.overlayEl.scrollWidth - this.hSpace * 2,
        //     // '\n naturalWidth ', getComputedStyle(this.slidedEl).width,
        //     // '\n wrapperWidth ', wrapperWidth,
        //     // '\n innerWrapPadding ', innerWrapPadding,
        //     // '\n leftPadding ', leftPadding,
        //     // '\n hSpace ', this.hSpace,
        //     '\n isInnerBlock ', this.isInnerBlock
        //   )
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
        return Number(distance.toFixed());
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
        // let overlayContainerWidth = parseFloat(getComputedStyle(this.overlayEl).width)
        // let slidesWidth = () => {
        //   if (this.movesArr.length) {
        //     return this.movesArr.reduce(
        //       (accum, curVal) => (
        //         typeof accum === "object" && accum.constructor === Object
        //           ? accum.width
        //           : accum
        //       ) + curVal.width + this.hSpace
        //     )
        //   }
        //   return 0
        // }
        let updateNavs = () => {
          if (!this.isTouch) {
            // this.canAdvanceBackward = to > 1
            // this.isFinalSlide = this.overlayEl.scrollLeft + overlayContainerWidth + slideSwipingMinDistance >= this.overlayEl.scrollWidth
            // let navsOnlyLackOfWidth = overlayContainerWidth < slidesWidth()
            // this.canAdvanceForward = !this.isFinalSlide && navsOnlyLackOfWidth
            if (this.pages.length > 0) {
              this.canAdvanceBackward = this.activePage !== 0
              this.canAdvanceForward = !this.pages[this.pages.length - 1].active
              this.isFinalSlide = this.canAdvanceForward
            }
          }
        }
        if (from !== to && from !== to + 1) {
          // this.MCEndPos = to
          this.isAnimating = true
          this.$emit('onAnimatingStart', callback => callback())
          Animate.start({
            duration: this.duration,
            timing: Animate.timingFunctions[this.transitionFunction],
            draw: (progress, rId) => {
              if (this.overlayEl) {
                this.overlayEl.scrollLeft = from + (to - from) * progress
                this.activeMCId = rId
              }
            },
            onLeave: () => {
              this.activeMCId = null
              // this.MCEndPos = null
              updateNavs()
              this.$emit('onAnimatingEnd', callback => callback())
              setTimeout(() => {
                this.isAnimating = false
                perfResult = performance.now() - perfStart // @TMP
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
      // this.toggleSlides()
    },
    toggleSlides () {
      if (!this.isTouch) {
        clearTimeout(this.toggleSlidesTimer)
        this.toggleSlidesTimer = setTimeout(() => {
          if (!this.overlayEl && !this.$refs.overlay) {
            return
          }
          if (!this.overlayEl || !this.slidedEl)
            return
          // let startScrolling = this.overlayEl.scrollLeft
          // let distance = 0
          // let distanceLeft = 0
          // let distanceRight = startScrolling + this.slidedEl.clientWidth
          // let hiddenSlides = []
          // this.movesArr.forEach((w) => {
          //   distance += w.width
          //   if (startScrolling - slideSwipingMinDistance > distanceLeft) {
          //     if (this.canAdvanceBackward) {
          //       hiddenSlides.push(w.key)
          //     }
          //     distanceLeft += w.width
          //   }
          //   if (distance - slideSwipingMinDistance > distanceRight) {
          //     hiddenSlides.push(w.key)
          //     distanceRight += w.width
          //   }
          // })
          // this.slides.forEach((s, k) => {
          //   if (typeof s.toggle === 'function')
          //     s.toggle(hiddenSlides.indexOf(k) === -1)
          // })
        }, 15)
      }
    }
  },
  render (h) {
    const debugBlock = () => {
      if (this.debug) {
        return (
          <div
            style="
              background: black;
              color: #3fa;
              font-size: 10px;
              padding: 5px;
              position: absolute;
              height: 100px;
              width: 100px;
              bottom: 0;
              right: 0;
              z-index: 12;
            "
          >
            <p>offset: { this.innerBlockOffset }</p>
            <p>mc: { this.activeMCId } { this.isAnimating ? 'run' : 'stopped' }</p>
            <p>mcEndPos: { this.MCEndPos }</p>
            <p>page: { this.activePage }</p>
            <p>perf: { parseInt(Math.floor(perfResult/10)) }ms</p>
            <p>scrollLeft: { this.$refs && this.$refs.overlay ? this.$refs.overlay.scrollLeft : '' }</p>
          </div>
        )
      }
    }
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
      { debugBlock() }
      { navsBlock() }
      { desktopBlock() }
      { mobileBlock() }
    </div>
  }
}
</script>
