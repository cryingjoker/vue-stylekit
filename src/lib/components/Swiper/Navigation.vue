<template>
  <div class="pc-navs">
    <div
      v-if="canAdvanceBackward"
      class="pc-navs__side pc-navs__side-left"
      @click.prevent="triggerPageAdvance('prev')"
      :style="{
        width: `${$parent.hSpace}px`
      }"
    ></div>
    <div
      v-if="$parent.navsArrows"
      class="pc-navs__arrows"
      :class="[$parent.containerName, {
        'is-scrolled':isScrolled,
        'is-overlay': isOverlay
      }]"
      :style="navStyles"
    >

      <a
        class="pc-navs__button"
        @click.prevent="triggerPageAdvance('prev')"
        :class="linkClasses('prev')"
        :style="{
          width: `${buttonsSize}px`,
          height: `${buttonsSize}px`
        }"
      >
        <i class="pc-navs__circle-nav"></i>
      </a>

      <a
        class="pc-navs__button"
        @click.prevent="triggerPageAdvance('next')"
        :class="linkClasses('next')"
        :style="{
          width: `${buttonsSize}px`,
          height: `${buttonsSize}px`
        }"
      >
        <i class="pc-navs__circle-nav"></i>
        <div
          v-if="showTipsNext"
          class="pc-navs-more"
          v-html="moreText"
        ></div>
      </a>

    </div>
    <div
      v-if="canAdvanceForward"
      class="pc-navs__side pc-navs__side-right"
      @click.prevent="triggerPageAdvance('next')"
      :style="{
        width: `${$parent.hSpace}px`
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'RtNavigation',
  data () {
    return {
      isScrolled: false,
      isOverlay: false,
      topPos: null,
      bottomPos: null,
      buttonsSize: 53,
      nextCountTip: null, // Количество слайдов доступных к прокрутке
      position: 'absolute',
      showTipsNext: false
    }
  },
  mounted () {
    if (this.$parent.navsArrows && this.$el.scrollHeight > (this.$parent.navsPosStart + this.$parent.navsPosEnd)) {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.stickNavs, { passive: true })
        window.addEventListener('resize', this.stickNavs, { passive: true })
      })
      this.stickNavs()
    } else if (this.$parent.navsArrows) {
      // Если заданная высота отступа выше зоны просмотра, то центрируем стрелочки
      this.topPos = '0px'
      this.bottomPos = '0px'
    }
  },
  computed: {
    cmpName () {
      return this.$parent.cmpName || 'RtNavigation'
    },
    isPending () {
      return this.$parent.isPending
    },
    canAdvanceForward () {
      return this.$parent.canAdvanceForward
    },
    canAdvanceBackward () {
      return this.$parent.canAdvanceBackward
    },
    moreText () {
      return `Ещё&nbsp;${this.nextCountTip}`
    },
    navStyles () {
      return {
        height: `${this.buttonsSize}px`,
        position: this.position,
        top: this.topPos,
        bottom: this.bottomPos
      }
    }
  },
  destroyed () {
    if (this.$parent.navsArrows) {
      window.removeEventListener('scroll', this.stickNavs)
      window.removeEventListener('resize', this.stickNavs)
    }
  },
  methods: {
    triggerPageAdvance (direction) {
      if (direction) {
        this.$parent.advancePage(direction)
      } else {
        this.$parent.advancePage()
      }
    },
    stickNavs () {
      if (this.$parent.$refs.overlay) {
        let posY = window.pageYOffset + window.innerHeight / 2
        let posStart = this.getTop(this.$parent.$refs.overlay) + this.$parent.navsPosStart
        let posEnd = this.getTop(this.$parent.$refs.overlay) + this.$parent.$refs.overlay.clientHeight - this.$parent.navsPosEnd - this.buttonsSize
        if ((posY >= posStart) && posY < posEnd) {
          // Scrolled
          this.position = 'fixed'
          this.topPos = null
          this.bottomPos = 'auto'
        } else if (posY >= posEnd) {
          // After scrolling zone
          this.position = 'absolute'
          this.topPos = 'auto'
          this.bottomPos = `${this.$parent.navsPosEnd}px`
        } else {
          // Before scrolling zone
          this.position = 'absolute'
          this.topPos = `${this.$parent.navsPosStart}px`
          this.bottomPos = 'auto'
        }
      }
    },
    linkClasses (pos) {
      return [
        `pc-navs-${pos}`, {
          'pc-navs--disabled': pos === 'next' ? !this.canAdvanceForward : !this.canAdvanceBackward,
          'pc-navs--pending': this.isPending
        }
      ]
    },
    getTop (el) {
      return el.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>

<style lang="less" scoped>

  .pc-navs {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;

    &__side {
      cursor: pointer;
      position: absolute;
      height: 100%;
      z-index: 3;
      &-left {
        left: 0;
      }
      &-right {
        right: 0;
      }
    }

    &__arrows {
      margin-top: 0px;
      margin-left: auto;
      margin-right: auto;
      pointer-events: none;
      position: absolute;
      width: 100%;
      bottom: auto;
      top: 50%;
      left: 0;
      right: 0;
      z-index: 4;
    }

    &__button {
      background-color: #ffffff;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      -webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, .1);
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, .1);
      box-sizing: border-box;
      color: transparent;
      cursor: pointer;
      padding: 15px 20px;
      pointer-events: auto;
      position: absolute;
      bottom: 0;
      top: 0;
      text-decoration: none;
      transform: scale(1);
      transition: all .25s ease;
      z-index: 5;
      &:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 16px;
        margin: auto;
        top: 1px;
        left: 0;
        right: 0;
        bottom: 0;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    &-prev {
      left: 40px;
      &:after {
        left: -5px;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEwIDE2Ij4gICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNiAxMikgcm90YXRlKDE4MCAyIDIpIiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjg5MiAwTDAgMS44NjcgNi4yMTYgOCAwIDE0LjEzMyAxLjg5MiAxNiAxMCA4eiIgb3BhY2l0eT0iLjciLz48L3N2Zz4=");
      }
      @media (max-width: 1024px) {
        left: 10px;
      }
    }
    &-next {
      right: 40px;
      &:after {
        right: -5px;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEwIDE2Ij4gICAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS44OTIgMEwwIDEuODY3IDYuMjE2IDggMCAxNC4xMzMgMS44OTIgMTYgMTAgOHoiIG9wYWNpdHk9Ii43Ii8+PC9zdmc+");
      }
      @media (max-width: 1024px) {
        right: 10px;
      }
    }
    &-more {
      color: rgba(0,0,0,.7);
      position: absolute;
      right: 0;
      margin-top: 30px;
      top: 50%;
      z-index: 3;
    }
    &--pending {
      pointer-events: none;
    }
    &--disabled {
      cursor: default;
      opacity: 0;
      pointer-events: none;
      transform: scale(0) !important;
    }
  }
</style>
