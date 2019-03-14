<template>
  <div
    :class="[cmpName, {
      'is-touch-device': isTouch,
      'is-animating': isAnimating,
      'is-disabled-scrolling': disabledScrolling,
      'is-scrolling': !scrollingAutoEnd,
      'show-no-move-prev': !disabledScrolling && noMovesShown === 'prev',
      'show-no-move-next': !disabledScrolling && noMovesShown === 'next'
    }]"
    :style="{
      marginTop: `${-offsetTop}px`,
      marginBottom: `${-offsetBottom}px`,
      padding
    }"
  >
    <rt-navigation
      v-if="!isTouch"
      :class="`${cmpName}__navs`"
      :navigation-container="navigationContainer"
    ></rt-navigation>
    <div
      @scroll.passive="scrollNative"
      :class="`${cmpName}__overlay`"
      :style="{
        paddingTop: `${offsetTop}px`,
        paddingBottom: `${offsetBottom}px`
      }"
      ref="overlay"
    >
      <div
        :class="`${cmpName}__inner ${containerName}`"
        :draggable="isTouch"
        ref="slidedBlock"
      >
        <slot></slot>
        <div
          :class="`${cmpName}__spacer`"
          :style="{
            flex: `0 0 ${hSpace}px`
          }"
          ref="spacer"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

const autoScrollingTimeout = 100 // Длительность задержки автоскроллинга
// const swipeFriction = 0.95
const defaultTouch = {
  fingerCount: 0,
  time: null,
  direction: null,
  curX: null,
  curY: null,
  startX: null,
  startY: null,
  swipeLength: 0
}
const fps = 60
const slideSwipingMinDistance = 40 // Минимальное значение сдвига для автоскроллинга

let EaseIn = (power) => { return (t) => { return Math.pow(t, power) } }
let EaseOut = (power) => { return (t) => { return 1 - Math.abs(Math.pow(t - 1, power)) } }
let EaseInOut = (power) => { return (t) => { return t < 0.5 ? EaseIn(power)(t * 2) / 2 : EaseOut(power)(t * 2 - 1) / 2 + 0.5 } }
let timingFunctions = {
  linear: EaseInOut(1),
  easeInQuad: EaseIn(2),
  easeOutQuad: EaseOut(2),
  easeInOutQuad: EaseInOut(2),
  easeInCubic: EaseIn(3),
  easeOutCubic: EaseOut(3),
  easeInOutCubic: EaseInOut(3),
  easeInQuart: EaseIn(4),
  easeOutQuart: EaseOut(4),
  easeInOutQuart: EaseInOut(4),
  easeInQuint: EaseIn(5),
  easeOutQuint: EaseOut(5),
  easeInOutQuint: EaseInOut(5)
}

export default {
  name: 'RtSwiper',
  components: {
    [Navigation.name]: Navigation
  },
  data () {
    return {
      canAdvanceForward: false,
      canAdvanceBackward: false,
      cmpName: 'rtk-carousel',
      containerName: 'rt-container',
      currentWindowWidth: null,
      isAnimating: false,
      isFinalSlide: false,
      isLongTouch: false, // Позволяет на мобиле удерживать слайд на полпути
      isPending: null,
      isTouch: typeof window !== 'undefined' && 'ontouchstart' in window,
      hSpace: 0, // Горизонтальный отступ для центрирования зоны просмотра, складывается из отступов
      longTouchTimer: null,
      movesArr: [], // Для ускорения работы используется массив с широтами слайдов, а не vue-инстансы
      noMovesShown: null, // Отображает на мобиле что свайпить не куда
      requestId: null,
      scrollingAutoEnd: true, // Триггер для доводчика скроллинга
      scrollingTimer: null,
      swipingInProcess: false,
      swipingY: false,
      swipingPrevYPoint: null,
      swipingStartPoint: null, // Детектор направления свайпинга
      toggleSlidesTimer: null,
      touchObject: defaultTouch,
      verticalScrolling: true
    }
  },
  props: {
    autoScrolling: {
      type: Boolean,
      default: true
    },
    disabledScrolling: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 500
    },
    navsArrows: {
      type: Boolean,
      default: true
    },
    navsPosStart: {
      type: Number,
      default: 113
    },
    navsPosEnd: {
      type: Number,
      default: 200
    },
    offsetTop: {
      type: Number,
      default: 20
    },
    offsetBottom: {
      type: Number,
      default: 20
    },
    offsetHorizontal: {
      type: Number,
      default: 20
    },
    offsetSlide: {
      type: Number
    },
    padding: {
      type: String,
      default: '0'
    },
    slidesClasses: {
      type: String,
      default: 'rt-col-3 rt-col-md-3 rt-col-td-3'
    },
    transitionFunction: {
      type: String,
      default: 'easeInOutCubic'
    },
    navsOnlyLackOfWidth: {
      type: Boolean,
      default: false
    },
    navigationContainer: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.isPending = false
    this.createMoves()
    window.addEventListener('resize', this.createMoves, { passive: true })
    // if (this.isTouch && this.autoScrolling) {
    //   this.$refs.slidedBlock.addEventListener('touchstart', this.swipeHandler, false)
    //   this.$refs.slidedBlock.addEventListener('touchmove', this.swipeHandler, false)
    //   this.$refs.slidedBlock.addEventListener('touchend', this.swipeHandler, false)
    // }
  },
  destroyed () {
    this.isAnimating = false
    this.isPending = true
    window.removeEventListener('resize', this.createMoves)
    clearTimeout(this.scrollingTimer)
    clearTimeout(this.toggleSlidesTimer)
  },
  computed: {
    slides () {
      return (
        this.$children &&
        this.$children.filter(
          slide => slide.$vnode && slide.$vnode.tag && slide.$vnode.tag.indexOf('RtSlide') > -1
        )
      )
    }
  },
  methods: {
    /*
     * Простая навигация зоны просмотра по слайдам
     */
    advancePage (direction) {
      if (!this.isPending && !this.isAnimating) {
        let now = this.$refs.overlay.scrollLeft
        let distance = 0
        let wrapStyles = getComputedStyle(this.$refs.slidedBlock)
        let wrapperWidth = parseFloat(wrapStyles.width) - parseFloat(wrapStyles.paddingLeft) * 2
        if (direction === 'next') {
          this.movesArr.some(w => {
            distance += w.width
            if (Math.round(parseFloat(distance * 100) / 100) >= wrapperWidth) {
              distance = now + distance
              return true
            }
          })
        } else if (direction === 'prev') {
          void [...this.movesArr].reverse().some(w => {
            distance += w.width
            if (Math.round(parseFloat(distance * 100) / 100) >= wrapperWidth) {
              distance = now - distance
              return true
            }
          })
        }
        if (distance > this.$refs.overlay.scrollWidth) {
          distance = this.$refs.overlay.scrollWidth
        }
        if (distance < 0) {
          distance = 0
        }
        if (!this.swipingStartPoint) {
          this.swipingStartPoint = now
        }
        this.move(distance)
      }
    },
    /*
     * Доводчик позиции скролла до ближайшего слайда
     */
    autoScroller (delay = autoScrollingTimeout, to, mark) {
      if (this.autoScrolling && !this.isPending && !this.isAnimating) {
        let now = this.$refs.overlay.scrollLeft
        this.scrollingTimer = setTimeout(() => {
          if (
            (now === this.$refs.overlay.scrollLeft && now !== this.swipingStartPoint) &&
            (!this.isAnimating && !this.isPending)
          ) {
            this.scrollingAutoEnd = false
            // Определив что скроллинг окончен получаем ближайшую позицию для доводки скролла
            let distance = this.getNearbySlide()
            if (distance !== null && this.$refs.overlay.scrollLeft !== parseInt(distance)) {
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
    autoScrollerRemove () {
      clearTimeout(this.scrollingTimer)
      this.scrollingTimer = null
      this.scrollingAutoEnd = true
    },
    /**
     * Оптимизирует навигацию по слайдам, собирая диапозоны широт в виде массива
     */
    createMoves () {
      if (this.$refs.overlay && this.currentWindowWidth !== window.innerWidth) {
        this.currentWindowWidth = window.innerWidth
        let leftPadding = parseFloat(getComputedStyle(this.$refs.slidedBlock).paddingLeft)
        let leftOffset = this.$refs.slidedBlock.getBoundingClientRect().left
        this.hSpace = (leftPadding > 0 ? leftPadding : 0) + (leftOffset > 0 ? leftOffset : 0)
        this.movesArr = []
        this.slides.forEach((slide, i) => {
          this.movesArr.push({
            width: slide.width(),
            key: i
          })
        })
        setTimeout(() => {
          this.move()
          this.toggleSlides()
        }, 50)
      }
    },
    /**
     * Анимировние перехода зоны просмотра от точки к точке
     */
    startAnimating (opt) {
      let fpsInterval = 1000 / fps
      let lastDrawTime = performance.now()
      let startTime
      let animate = (timestamp) => {
        this.requestId = window.requestAnimationFrame(animate)
        let timeElapsed = timestamp - lastDrawTime
        if (timeElapsed > fpsInterval) {
          lastDrawTime = timestamp - (timeElapsed % fpsInterval)
          startTime = startTime || timestamp
          let timeElapsedSinceStart = timestamp - startTime
          let progress = timeElapsedSinceStart / this.duration
          let safeProgress = Math.min(progress.toFixed(2), 1)
          if (safeProgress >= 1) {
            opt.draw(opt.timing(1))
            window.cancelAnimationFrame(this.requestId)
            this.requestId = null
            opt.onLeave()
          } else {
            opt.draw(opt.timing(safeProgress))
          }
        }
      }
      animate()
    },
    getNearbySlide (to = this.$refs.overlay.scrollLeft) {
      if (this.swipingStartPoint !== to) {
        let nextNav = this.swipingStartPoint <= to
        let distance = nextNav ? 0 : this.$refs.overlay.scrollWidth - this.hSpace * 2
        if (nextNav) {
          this.movesArr.some(w => {
            if (distance + slideSwipingMinDistance >= to) {
              return true
            } else {
              distance += w.width
            }
          })
        } else {
          void [...this.movesArr].reverse().some(w => {
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
        // console.log(distance, nextNav, this.swipingStartPoint, to, this.isLongTouch)
        return distance
      } else {
        return null
      }
    },
    slidesWidth () {
      if (this.movesArr.length) {
        return this.movesArr.reduce((accum, curVal) => ((typeof accum === 'object' && accum.constructor === Object ? accum.width : accum) + curVal.width))
      }
      return 0
    },
    overlayContainerWidth () {
      return parseFloat(getComputedStyle(this.$refs.overlay).width)
    },
    move (to = 0) {
      return new Promise(resolve => {
        if (!this.$refs.overlay) {
          resolve()
        }
        to = parseInt(to)
        let from = parseInt(this.$refs.overlay.scrollLeft)
        let updateNavs = () => {
          if (!this.isTouch) {
            let navsOnlyLackOfWidth = !this.navsOnlyLackOfWidth || this.navsOnlyLackOfWidth && (this.overlayContainerWidth() < this.slidesWidth())
            this.canAdvanceBackward = to > 1
            this.isFinalSlide = this.$refs.overlay.scrollLeft + this.overlayContainerWidth() + 2 >= this.$refs.overlay.scrollWidth
            this.canAdvanceForward = !this.isFinalSlide && navsOnlyLackOfWidth
          }
        }
        if (from !== to && from !== to + 1) {
          // console.log('mc:start', from, to, this.isLongTouch)
          this.isAnimating = true
          this.$emit('onAnimatingStart', callback => { callback() })
          this.startAnimating({
            duration: this.duration,
            timing: timingFunctions[this.transitionFunction],
            draw: (progress) => {
              if (this.$refs.overlay) {
                this.$refs.overlay.scrollLeft = parseInt(from + (to - from) * progress)
              }
            },
            onLeave: () => {
              updateNavs()
              this.$emit('onAnimatingEnd', callback => { callback() })
              setTimeout(() => {
                this.isAnimating = false
                // console.log('mc:end', from, to)
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
    /**
     * Переносит зону просмотра к определенному слайду
     */
    moveToSlide (pos) {
      let distance = 0
      this.movesArr.some(w => {
        if (w.key === pos) {
          return true
        } else {
          distance += w.width
        }
      })
      this.move(distance)
    },
    scrollNative (e) {
      if (!this.disabledScrolling && !this.isTouch) {
        this.canAdvanceBackward = e.target.scrollLeft > 0
        this.isFinalSlide = e.target.scrollLeft + e.target.offsetWidth + 1 >= e.target.scrollWidth
        this.canAdvanceForward = !this.isFinalSlide
        this.autoScroller()
      }
      this.toggleSlides()
    },
    swipeHandler (e) {
      this.touchObject.fingerCount = e.changedTouches !== undefined ? e.changedTouches.length : 1
      switch (e.type) {
        case 'touchstart':
          this.swipeStart(e)
          break
        case 'touchmove':
          this.swipeMove(e)
          break
        case 'touchend':
          this.swipeEnd(e)
          break
      }
    },
    swipeStart (e) {
      if (this.touchObject.fingerCount === 1 && this.scrollingAutoEnd) {
        let touches = e.changedTouches[0]
        this.touchObject.startX = this.touchObject.curX = touches.clientX
        this.touchObject.startY = this.touchObject.curY = touches.clientY
      }
    },
    swipeMove (e) {
      if (!this.scrollingAutoEnd) {
        return false
      }
      let touches = e.changedTouches[0]
      let minScrollToActivate = 4
      if (this.swipingY || e.changedTouches.length !== 1) {
        return false
      }
      this.touchObject.curX = touches.clientX
      this.touchObject.curY = touches.clientY
      this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curX - this.touchObject.startX, 2)))
      let verticalLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curY - this.touchObject.startY, 2)))
      // Запрещаем свайпинг по оси X при достижении минимальной дистанции Н
      if (!this.swipingInProcess && verticalLength > minScrollToActivate) {
        this.swipingY = true
        return false
      }
      if (e.cancelable) {
        e.preventDefault()
        e.stopPropagation()
      }
      if (!this.swipingInProcess) {
        this.swipingInProcess = true
      }
      if (!this.swipingStartPoint) {
        this.swipingStartPoint = this.$refs.overlay.scrollLeft
      }
      this.touchObject.direction = (this.touchObject.startX !== this.touchObject.curX) ? ((this.touchObject.startX < this.touchObject.curX) ? 'prev' : 'next') : null
      // console.log('swipe:' + this.touchObject.direction, 'start:' + this.swipingStartPoint)
      if (!this.disabledScrolling && this.touchObject.direction !== null) {
        this.$refs.overlay.scrollLeft = this.swipingStartPoint + this.touchObject.swipeLength * (this.touchObject.direction === 'next' ? 1 : -1)
        this.longTouchTimer = setTimeout(() => {
          this.isLongTouch = true
        }, autoScrollingTimeout)
        this.touchObject.time = Date.now()
        // console.log(
        //   'x:start ' + this.touchObject.startX,
        //   '\nx:move  ' + this.touchObject.curX,
        //   '\ny:start ' + this.touchObject.startY,
        //   '\ny:move  ' + this.touchObject.curY,
        //   '\nLength: ' + this.touchObject.swipeLength,
        //   '\ndirect: ' + this.touchObject.direction,
        //   '\nstart:  ' + (this.swipingStartPoint || this.$refs.overlay.scrollLeft),
        //   '\nnow:    ' + this.$refs.overlay.scrollLeft,
        //   '\nisLong: ' + this.isLongTouch,
        //   '\ndecele: ' + this.touchObject.swipeLength,
        //   '\ndTime:  ' + this.touchObject.time
        // )
      }
    },
    swipeEnd (e) {
      clearTimeout(this.longTouchTimer)
      if (!this.swipingInProcess || this.swipingY || !this.scrollingAutoEnd) {
        this.swipingY = false
        return false
      }
      let swipingEndFunc = (notEnoughMoves) => {
        if (notEnoughMoves && !this.noMovesShown) {
          this.noMovesShown = this.touchObject.direction
          setTimeout(() => {
            this.noMovesShown = null
          }, 1000)
        }
        this.isLongTouch = false
        this.swipingStartPoint = null
        this.swipingInProcess = false
        this.touchObject = defaultTouch
        this.scrollingAutoEnd = true
      }
      let nearby = this.getNearbySlide()
      if (nearby !== null) {
        this.scrollingAutoEnd = false
        this.move(nearby).then(() => {
          swipingEndFunc()
        })
      } else {
        swipingEndFunc(true)
      }
    },
    toggleSlides () {
      if (!this.isTouch) {
        clearTimeout(this.toggleSlidesTimer)
        this.toggleSlidesTimer = setTimeout(() => {
          if (!this.$refs.overlay) {
            return
          }
          let startScrolling = this.$refs.overlay.scrollLeft
          let distance = 0
          let distanceLeft = 0
          let distanceRight = startScrolling + this.$refs.slidedBlock.clientWidth
          let hiddenSlides = []
          this.movesArr.forEach(w => {
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
            s.toggle(hiddenSlides.indexOf(k) === -1)
          })
        }, 15)
      }
    }
  }
}
</script>
