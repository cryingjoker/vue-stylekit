<template>
    <div
      :class="carouselClassesState"
      :data-uid="_uid"
      :style="carouselStylesState"
    >
      <div
        v-if="debug"
        style="
          background: black;
          color: #3fa;
          font-size: 10px;
          padding: 5px;
          position: absolute;
          height: 150px;
          width: 100px;
          bottom: 0;
          right: 0;
          z-index: 12;
        "
      >
        <p>offset: {{ innerBlockOffset }}</p>
        <p>mc: {{ activeMCId }} {{ isAnimating ? 'run' : 'stopped' }}</p>
        <p>page: {{ activePage }}</p>
        <p>perf: {{ parseInt(Math.floor(perfResult/10)) }}ms</p>
        <p>scrollLeft: {{ $refs && $refs.overlay ? $refs.overlay.scrollLeft : '' }}</p>
        <p>canBack: {{ canAdvanceBackward }}</p>
        <p>canForward: {{ canAdvanceForward }}</p>
      </div>

      <RtCarouselNavi
        v-if="!hideNavigation && !isTouch && !disabledScrolling"
        :hSpace="isInnerBlock && innerBlockOffset > 10 ? innerBlockOffset - 10 : hSpace"
        :isPending="isPending"
        :hideArrows="hideArrows"
        :showTipsNext="showTipsNext"
        :containerName="cssContainer"
        :overlayEl="$refs.overlay"
        :advancePage="advancePage"
        :canAdvanceForward="canAdvanceForward"
        :canAdvanceBackward="canAdvanceBackward"
        :navsPosStart="navsPosStart"
        :navsPosEnd="navsPosEnd"
      />

      <div
        ref="overlay"
        v-if="!isTouch"
        :class="cssSelector + '__overlay'"
      >
        <div
          ref="inner"
          :class="cssSelector + '__inner ' + cssContainer"
          :style="innerStylesState"
        >
          <slot></slot>
          <div
            :class="cssSelector + '__spacer'"
            :style="spacerStylesState"
          >
          </div>
        </div>
      </div>

      <div
        v-else
        ref="overlay"
        :class="cssSelector + '__overlay ' + cssSelector + '__inner ' + cssContainer"
        :style="overlayStyleState"
      >
        <slot></slot>
        <div
          :class="cssSelector + '__spacer'"
          :style="spacerStylesState"
        >
        </div>
      </div>
    </div>
</template>

<script>
/**
 * @TODO :
 * - "Подглядывание" карточек
 */

import Navigation from './CarouselNavi.vue'
import Mobile from '../../utils/mobile'
import Animate from '../../utils/animate'

const name = 'RtCarousel'
const autoScrollingTimeout = 100 // Длительность задержки автоскроллинга
const slideSwipingMinDistance = 40 // Минимальное значение сдвига для автоскроллинга

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
    },
    scrollOnClick: {
      type: Boolean,
      default: false
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
      pages: [], // Набор слайдов с позицией для ускорителя
      activeMCId: null,
      activePage: 0,
      toggleSlidesTimer: null,
      scrollingTimer: null,
      canAdvanceForward: false,
      canAdvanceBackward: false,
      scrollingAutoEnd: true,
      swipingStartPoint: null, // Детектор направления свайпинга

      cssSelector: 'rt-carousel',
      cssContainer: 'rt-container',
      // Используется для отладки
      perfStart: 0,
      perfResult: 0
    }
  },
  computed: {
    carouselClassesState () {
      return [
        this.cssSelector,
        {
          'is-touch-device': this.isTouch,
          'is-inner-block': this.isInnerBlock,
          'is-pending': this.isPending,
          'is-animating': this.isAnimating,
          'is-hide-navs': this.hideNavigation,
          'is-scrolling' : !this.scrollingAutoEnd,
          'is-disabled-scrolling': this.disabledScrolling
        }
      ]
    },
    carouselStylesState () {
      return {
        marginTop: -this.offsetTop + 'px',
        marginBottom: -this.offsetBottom + 'px',
        width: this.isInnerBlock && !this.isTouch ? `${document.body.clientWidth}px` : null,
        marginLeft: this.isInnerBlock && !this.isTouch ? `-${this.innerBlockOffset}px` : null
      }
    },
    innerStylesState () {
      return {
        paddingTop: this.offsetTop + 'px',
        paddingBottom: this.offsetBottom + 'px'
      }
    },
    overlayStyleState () {
      return {
        paddingTop: this.offsetTop + 'px',
        paddingBottom: this.offsetBottom + 'px'
      }
    },
    spacerStylesState () {
      return `flex: 0 0 ${this.isInnerBlock ? (this.innerBlockOffset - 10) : this.hSpace}px`
    },
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
    this.isInnerBlock = document.querySelector(`.${this.cssContainer} .${this.cssSelector}[data-uid="${this._uid}"]`) !== null
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
     * Основной метод для навигации по слайдам
     * + Формирует постраничную навигацию
     * + Собирает диапозоны широт в виде массива
     */
    createMoves () {
      if (!this.slidedEl || !this.overlayEl)
        return

      this.autoScrollerRemove()
      clearTimeout(this.toggleSlidesTimer)

      this.isPending = true

      if (this.isInnerBlock)
        this.innerBlockOffset = this.$el.parentElement.getBoundingClientRect().left

      this.activePage = 0
      this.pages = []

      this.overlayEl.scrollLeft = 0
      this.isPending = false

      let wrapStyles = getComputedStyle(this.slidedEl)
      let leftPadding = parseFloat(wrapStyles.paddingLeft)
      let innerWrapDiffPadding = this.innerBlockOffset - leftPadding
      let innerWrapPadding = innerWrapDiffPadding > 0 ? innerWrapDiffPadding : 0
      let wrapperWidth
      let maxMoveDist

      if (this.isInnerBlock) {
        this.hSpace = this.innerBlockOffset - innerWrapPadding
      } else {
        let leftOffset = this.slidedEl.getBoundingClientRect().left
        this.hSpace = (leftPadding > 0 ? leftPadding : 0) + (leftOffset > 0 ? leftOffset : 0)
      }

      this.$nextTick(() => {
        // Calculate wrapper after move slidedEl
        if (this.isInnerBlock) {
          wrapperWidth = parseFloat(wrapStyles.width) - this.hSpace * 2
          maxMoveDist = this.overlayEl.scrollWidth - wrapperWidth - this.hSpace * 2
        } else {
          wrapperWidth = parseFloat(wrapStyles.width)
          maxMoveDist = this.overlayEl.scrollWidth
        }


        let currPage = 0
        let pageWidth = 0
        let distance = 0
        let distanceAfter = 0

        this.slides.forEach((slide, i) => {
          if (typeof slide.width === 'function') {
            let slideWidth = slide.width()
            let nextResolveWidth = distanceAfter + slideWidth
            distance += slideWidth

            if (Math.round(distance * 100) / 100 > wrapperWidth || nextResolveWidth > wrapperWidth) {
              currPage++
              distance = 0
              distanceAfter = 0
            }
            if (!this.pages[currPage]) {
              this.pages[currPage] = {
                active: false,
                slides: []
              }
            }
            this.slides[i].page = currPage
            this.slides[i].move = pageWidth
            this.pages[currPage].slides.push({
              key: i,
              move: pageWidth,
              page: currPage,
              slide: i + 1,
              width: slideWidth
            })
            pageWidth += slideWidth
            // Не может быть больше inner.srollLeft-innerWrap+leftPadding
            if (pageWidth > maxMoveDist)
              pageWidth = maxMoveDist
            distanceAfter += slideWidth
          }
        })

        if (this.pages[0]) {
          this.pages[0].active = true
          this.move().then(() => { this.updateNavs() })
          this.toggleSlides()
        }

        if (this.debug && maxMoveDist > 0)
          console.log(
            'Instance ', this,
            '\n left', this.slidedEl.getBoundingClientRect().left,
            '\n hSpace', this.hSpace,
            '\n wrapperWidth', wrapperWidth,
            '\n pages ', this.pages,
            '\n isInnerBlock ', this.isInnerBlock
          )
      })
    },

    /**
     * Простая навигация зоны просмотра по слайдам (Навигаторы, стрелочки)
     */
    advancePage(direction) {
      if (!this.isPending && this.pages.length > 0) {
        this.perfStart = performance.now()

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
            this.move(this.pages[boostedPageId].slides[0].move).then(() => {
              boostedIndex = 0
              this.autoScrollerRemove()
              this.updateNavs()
            })
          }
        }

        if (!this.isAnimating) {
          this.pages[this.activePage].active = false
          this.pages[currPage].active = true
          this.activePage = currPage
          this.move(this.pages[currPage].slides[0].move).then(() => {
            boostedIndex = 0
            this.autoScrollerRemove()
            this.updateNavs()
          })
        }

        if (!this.swipingStartPoint)
          this.swipingStartPoint = this.overlayEl.scrollLeft
      }
    },

    /**
     * Анимированный скроллинг к указанной позиции
     */
    move (to = 0) {
      return new Promise(resolve => {
        if (!this.overlayEl) {
          resolve()
        }
        let from = this.overlayEl.scrollLeft
        if (from !== to && from !== to + 1) {
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
              this.$emit('onAnimatingEnd', callback => callback())
              setTimeout(() => {
                this.isAnimating = false
                this.perfResult = performance.now() - this.perfStart // @TMP
                resolve()
              }, 1) // В FF скроллинг быстрее отрабатывает, чем триггер isAnimating
            }
          })
        } else {
          resolve()
        }
      })
    },

    /**
     * Скроллит к указанному слайду
     * @param {Number} slideId
     */
    moveTo (slideId) {
      if (slideId !== undefined && this.slides[slideId])
        this.move(this.slides[slideId].move).then(() => { this.updateNavs() })
    },

    /**
     * Нативное событие скроллинга
     */
    scrollNative (e) {
      if (!this.disabledScrolling && !this.isTouch) {
        this.autoScroller()
        this.$nextTick(() => {
          this.updateNavs()
        })
      }
      this.toggleSlides()
    },

    /**
     * Доводчик позиции скролла до ближайшего слайда
     */
    autoScroller(delay = autoScrollingTimeout) {
      if (this.autoScrolling && !this.isPending && !this.isAnimating) {
        if (!this.swipingStartPoint)
          this.swipingStartPoint = this.overlayEl.scrollLeft
        let now = this.overlayEl.scrollLeft
        this.scrollingTimer = setTimeout(() => {
          if (
            (now === this.overlayEl.scrollLeft && now !== this.swipingStartPoint) &&
            (!this.isAnimating && !this.isPending)
          ) {
            this.perfStart = performance.now()
            this.scrollingAutoEnd = false
            // Определив что скроллинг окончен получаем ближайшую позицию для доводки скролла
            let distance = this.getNearbySlide()
            if (distance !== null && this.overlayEl.scrollLeft !== distance) {
              this.move(distance).then(() => {
                this.toggleSlides()
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
      this.swipingStartPoint = this.overlayEl.scrollLeft
      clearTimeout(this.scrollingTimer)
      this.scrollingTimer = null
      this.scrollingAutoEnd = true
    },

    /**
     * Определяет ближайший слайд для автоскролла и сэттит страницу
     */
    getNearbySlide (to = Number(this.overlayEl.scrollLeft.toFixed())) {
      if (this.swipingStartPoint !== to) {

        let nextNav = this.swipingStartPoint <= to
        let findedSlide
        let distance = 0

        if (nextNav) {
          let prevMove = 0
          this.slides.some(slide => {
            if (prevMove + slideSwipingMinDistance > to) {
              findedSlide = slide
              distance = slide.move
              this.pages[this.activePage].active = false
              this.activePage = findedSlide.page
              this.pages[this.activePage].active = true
              return true
            }
            prevMove += slide.width()
          })
        } else {
          let prevMove = this.overlayEl.scrollWidth - this.hSpace * 2
          void [...this.slides].reverse().some(slide => {
            if (prevMove - slideSwipingMinDistance <= to) {
              findedSlide = slide
              distance = slide.move
              this.pages[this.activePage].active = false
              this.activePage = findedSlide.page
              this.pages[this.activePage].active = true
              return true
            }
            prevMove -= slide.width()
          })
        }
        if (this.debug)
          console.log(
            '\n distance', distance,
            '\n findedSlide', findedSlide
          )
        return Number(distance.toFixed())
      } else {
        return null;
      }
    },

    /**
     * Меняет состояние слайдов
     */
    toggleSlides () {
      if (!this.isTouch) {
        clearTimeout(this.toggleSlidesTimer)
        // Throttle for scroll event
        this.toggleSlidesTimer = setTimeout(() => {

          if (!this.overlayEl && !this.$refs.overlay) {
            return
          }
          if (!this.overlayEl || !this.slidedEl)
            return

          let startScrolling = this.overlayEl.scrollLeft
          let distance = 0
          let distanceLeft = 0
          let distanceRight = startScrolling + this.slidedEl.clientWidth

          this.slides.forEach((slide, key) => {
            distance += slide.width()
            let flag = true
            if (startScrolling - slideSwipingMinDistance > distanceLeft) {
              distanceLeft += slide.width()
              flag = false
            }
            if (distance - slideSwipingMinDistance > distanceRight) {
              distanceRight += slide.width()
              flag = false
            }
            slide.toggle(flag)
          })
        }, 15)
      }
    },
    updateNavs () {
      if (!this.isTouch && this.overlayEl) {
        let el = this.overlayEl
        this.canAdvanceBackward = el.scrollLeft > 0
        this.isFinalSlide = el.scrollLeft + el.offsetWidth + slideSwipingMinDistance >= el.scrollWidth
        this.canAdvanceForward = !this.isFinalSlide
      }
    }
  }
}
</script>
