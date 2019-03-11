<template>
  <div class="pc-navs">
    <div
      v-if="canAdvanceBackward"
      class="pc-navs__side pc-navs__side-left"
      :style="{
        width: `${$parent.hSpace}px`
      }"
      @click.prevent="triggerPageAdvance('prev')"
    />
    <div
      v-if="$parent.navsArrows"
      class="pc-navs__arrows"
      :class="[
        $parent.containerName,
        {
          'is-scrolled': isScrolled,
          'is-overlay': isOverlay
        }
      ]"
      :style="navStyles"
    >
      <a
        class="pc-navs__button"
        :class="linkClasses('prev')"
        @click.prevent="triggerPageAdvance('prev')"
        :style="{
          width: `${buttonsSize}px`,
          height: `${buttonsSize}px`
        }"
      >
        <i class="pc-navs__circle-nav"/>
      </a>

      <a
        class="pc-navs__button"
        :class="linkClasses('next')"
        @click.prevent="triggerPageAdvance('next')"
        :style="{
          width: `${buttonsSize}px`,
          height: `${buttonsSize}px`
        }"
      >
        <i class="pc-navs__circle-nav"/>
        <div v-if="showTipsNext" class="pc-navs-more" v-html="moreText"></div>
      </a>
    </div>
    <div
      v-if="canAdvanceForward"
      class="pc-navs__side pc-navs__side-right"
      :style="{
        width: `${$parent.hSpace}px`
      }"
      @click.prevent="triggerPageAdvance('next')"
    />
  </div>
</template>

<script>
export default {
  name: "RtNavigation",
  props: {
    navigationContainer: { // Контейнер, в который будет помещена навигация карусели. Если пусто, навигация перемещена не будет.
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isScrolled: false,
      isOverlay: false,
      topPos: null,
      bottomPos: null,
      buttonsSize: 53,
      nextCountTip: null, // Количество слайдов доступных к прокрутке
      position: 'absolute',
      showTipsNext: false,
      navContainerChanged: false
    }
  },
  mounted() {
    if (
      this.$parent.navsArrows &&
      this.$el.scrollHeight >
        this.$parent.navsPosStart + this.$parent.navsPosEnd
    ) {
      this.$nextTick(() => {
        window.addEventListener("scroll", this.stickNavs, { passive: true });
        window.addEventListener("resize", this.stickNavs, { passive: true });
      });
      this.stickNavs();
    } else if (this.$parent.navsArrows) {
      // Если заданная высота отступа выше зоны просмотра, то центрируем стрелочки
      this.topPos = "0px";
      this.bottomPos = "0px";
    }
  },
  updated() {
    if (!this.navContainerChanged && this.navigationContainer !== "") {
      let els = document.querySelectorAll(this.navigationContainer);
      if (els.length) {
        els[0].insertBefore(this.$el, els[0].firstChild);
      }
      this.navContainerChanged = true;
    }
  },
  computed: {
    cmpName() {
      return this.$parent.cmpName || "RtNavigation";
    },
    isPending() {
      return this.$parent.isPending;
    },
    canAdvanceForward() {
      return this.$parent.canAdvanceForward;
    },
    canAdvanceBackward() {
      return this.$parent.canAdvanceBackward;
    },
    moreText() {
      return `Ещё&nbsp;${this.nextCountTip}`;
    },
    navStyles() {
      return {
        height: `${this.buttonsSize}px`,
        position: this.position,
        top: this.topPos,
        bottom: this.bottomPos
      };
    }
  },
  destroyed() {
    if (this.$parent.navsArrows) {
      window.removeEventListener("scroll", this.stickNavs);
      window.removeEventListener("resize", this.stickNavs);
    }
  },
  methods: {
    triggerPageAdvance(direction) {
      if (direction) {
        this.$parent.advancePage(direction);
      } else {
        this.$parent.advancePage();
      }
    },
    stickNavs() {
      if (this.$parent.$refs.overlay) {
        let posY = window.pageYOffset + window.innerHeight / 2;
        let posStart =
          this.getTop(this.$parent.$refs.overlay) + this.$parent.navsPosStart;
        let posEnd =
          this.getTop(this.$parent.$refs.overlay) +
          this.$parent.$refs.overlay.clientHeight -
          this.$parent.navsPosEnd -
          this.buttonsSize;
        if (posY >= posStart && posY < posEnd) {
          // Scrolled
          this.position = "fixed";
          this.topPos = null;
          this.bottomPos = "auto";
        } else if (posY >= posEnd) {
          // After scrolling zone
          this.position = "absolute";
          this.topPos = "auto";
          this.bottomPos = `${this.$parent.navsPosEnd}px`;
        } else {
          // Before scrolling zone
          this.position = "absolute";
          this.topPos = `${this.$parent.navsPosStart}px`;
          this.bottomPos = "auto";
        }
      }
    },
    linkClasses(pos) {
      return [
        `pc-navs-${pos}`,
        {
          "pc-navs--disabled":
            pos === "next" ? !this.canAdvanceForward : !this.canAdvanceBackward,
          "pc-navs--pending": this.isPending
        }
      ];
    },
    getTop(el) {
      return (
        el.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop;
      );
    }
  }
};
</script>
