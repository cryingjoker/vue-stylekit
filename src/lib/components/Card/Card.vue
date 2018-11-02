<template>
  <div class="rt-card" :class="cardClass" :style="cardStyle">
    <div v-if="backgroundImageStandAlone" class="rt-card__stand-alone-background" :style="standAloneBackgroundStyle" />
    <div class="rt-card__background" :style="cardBackgroundStyle" :class="cardBackgroundClass" />
    <div class="rt-card__content" :cardContentStyle="cardContentStyle" :class="cardContentClass">
      <div v-if="$slots.header" class="rt-card__header" :style="cardHeaderStyle">
        <slot name="header" />
      </div>
      <div class="rt-card__body" :class="cardBodyClass" :style="bodyStyle">
        <slot name="content" />
      </div>

      <div v-if="$slots['bottom-list']" class="rt-card__bottom-list">
        <slot name="bottom-list" />
      </div>
      <div class="rt-card__footer">
        <slot name="footer" />
      </div>

    </div>
  </div>
</template>

<script>
const componentsList = {};

export default {
  name: "RtCard",
  components: componentsList,
  props: {
    staticBodyHeight: {
      type: Boolean,
      default: false
    },
    hideBackgroundOnMobile: {
      type: Boolean,
      default: false
    },
    backgroundSizeWidth: {
      type: [Number, String],
      default: null
    },
    backgroundImageStandAlone: {
      type: Boolean,
      default: false
    },
    backgroundSizeHeight: {
      type: [Number, String],
      default: null
    },
    backgroundColorType: {
      type: String,
      default: null
    },
    backgroundImage: {
      type: String,
      default: null
    },
    backgroundCover: {
      type: Boolean,
      default: false
    },
    backgroundRepeat: {
      type: Boolean,
      default: false
    },
    backgroundBlur: {
      type: Number,
      default: null
    },
    backgroundSmoke: {
      type: Number,
      default: null
    },
    backgroundOpacity: {
      type: Number,
      default: null
    },
    isWhiteColor: {
      type: Boolean,
      default: false
    },
    backgroundPosition: {
      type: String, // [top, left, bottom, right, top-left, top-right, bottom-left, bottom-right]
      default: null
    },
    backgroundPositionTop: {
      type: [String, Number],
      default: null
    },
    backgroundPositionBottom: {
      type: [String, Number],
      default: null
    },
    backgroundPositionRight: {
      type: [String, Number],
      default: null
    },
    backgroundPositionLeft: {
      type: [String, Number],
      default: null
    },

    offsetTop: {
      type: Boolean,
      default: false
    },
    colSize: {
      type: Number,
      default: null
    },
    cardHeight: {
      type: Number,
      default: null
    },
    cardHeaderHeight: {
      type: Number,
      default: null
    },
    cardBodyHeight: {
      type: Number,
      default: null
    }
  },
  computed: {
    cardClass() {
      const classArray = {};

      if (this.backgroundCover) {
        classArray["rt-card--has-bg-cover"] = true;
      }
      if (this.isWhiteColor) {
        classArray["rt-card--has-white-color"] = true;
      }

      if (this.backgroundColorType) {
        classArray["rt-card-" + this.backgroundColorType] = true;
      }
      if (this.backgroundImage) {
        if (this.backgroundRepeat) {
          classArray["rt-card--has-bg-repeat"] = true;
        }

        if (this.backgroundSmoke === 0.5) {
          classArray["rt-card--has-smoke"] = true;
        }
        if (this.backgroundSmoke === 0.3) {
          classArray["rt-card--has-smoke03"] = true;
        }
        if (this.backgroundSmoke === 0.2) {
          classArray["rt-card--has-smoke02"] = true;
        }
      }
      if (this.hideBackgroundOnMobile) {
        classArray["rt-card--hide-background-on-mobile"] = true;
      }
      return classArray;
    },
    cardContentClass() {
      const classArray = {};
      if (this.cardHeight !== null) {
        classArray["rt-card__content--has-custom-height"] = true;
      }
      if (this.offsetTop) {
        classArray["rt-card__content--has-offset-top"] = true;
      }
      if (this.colSize) {
        if (this.colSize === 2) {
          classArray["rt-col-6 rt-col-md-3"] = true;
        }
      }
      return classArray;
    },
    cardBodyClass() {
      const classArray = {};
      if (this.cardBodyHeight !== null) {
        classArray["flex-center-center flex-fill"] = true;
      }
      if (!this.$slots.content) {
        classArray["rt-card__body--is-empty"] = true;
      }
      if (this.staticBodyHeight) {
        classArray["rt-card__body--is-static"] = true;
      }
      return classArray;
    },
    cardStyle() {
      const styles = {};
      if (this.cardHeight !== null) {
        styles.height = this.normalizeSize(this.cardHeight);
      }
      return styles;
    },
    cardContentStyle() {
      const styles = {};
      if (this.cardHeight !== null) {
        styles.height = this.normalizeSize(this.cardHeight);
      }
      return styles;
    },
    bodyStyle() {
      const styles = {};
      if (this.cardBodyHeight !== null) {
        styles.minHeight = this.normalizeSize(this.cardBodyHeight);
      }
      return styles;
    },
    cardHeaderStyle() {
      const styles = {};
      if (typeof this.cardHeaderHeight !== "undefined") {
        styles.maxHeight = this.normalizeSize(this.cardHeaderHeight);
      }
      return styles;
    },
    cardBackgroundClass() {
      const classArray = {};
      if (this.backgroundPosition) {
        if (
          this.backgroundPosition.search(
            /(top)|(left)|(bottom)|(right)|(bottom-left)|(top-right)|(bottom-left)|(bottom-right)/
          ) === 0
        ) {
          switch (this.backgroundPosition) {
            case "top":
              classArray["rt-card__background--position-background-top"] = true;
              break;
            case "right":
              classArray[
                "rt-card__background--position-background-right"
              ] = true;
              break;
            case "bottom":
              classArray[
                "rt-card__background--position-background-bottom"
              ] = true;
              break;
            case "left":
              classArray[
                "rt-card__background--position-background-left"
              ] = true;
              break;
            case "top-right":
              classArray[
                "rt-card__background--position-background-top-right"
              ] = true;
              break;
            case "bottom-right":
              classArray[
                "rt-card__background--position-background-bottom-right"
              ] = true;
              break;
            case "bottom-left":
              classArray[
                "rt-card__background--position-background-bottom-left"
              ] = true;
              break;
            case "top-left":
              classArray[
                "rt-card__background--position-background-top-left"
              ] = true;
              break;
          }
        }
      }
      return classArray;
    },
    cardBackgroundStyle() {
      const styles = {};
      if (this.backgroundImage && !this.backgroundImageStandAlone) {
        styles.backgroundImage = "url(" + this.backgroundImage + ")";
      }
      if (this.backgroundSizeWidth && this.backgroundSizeHeight) {
        const backgroundSizeWidth = this.normalizeSize(
          this.backgroundSizeWidth
        );
        const backgroundSizeHeight = this.normalizeSize(
          this.backgroundSizeHeight
        );
        styles.backgroundSize =
          backgroundSizeWidth + " " + backgroundSizeHeight;
      } else {
        if (this.backgroundSizeWidth) {
          const backgroundSizeWidth = this.normalizeSize(
            this.backgroundSizeWidth
          );
          styles.backgroundSize = backgroundSizeWidth;
        }
        if (this.backgroundSizeHeight) {
          const backgroundSizeHeight = this.normalizeSize(
            this.backgroundSizeHeight
          );
          styles.backgroundSize = backgroundSizeHeight;
        }
      }
      if (this.backgroundImage) {
        if (this.backgroundBlur) {
          styles.filter =
            "blur(" + this.normalizeSize(this.backgroundBlur) + ")";
        }
        if (this.backgroundOpacity) {
          styles.opacity = this.backgroundOpacity;
        }
      }
      return styles;
    },
    standAloneBackgroundStyle() {
      if (this.backgroundImageStandAlone && this.backgroundImage) {
        const styles = {};

        styles.backgroundImage = "url(" + this.backgroundImage + ")";
        styles.width =
          this.normalizeSize(this.backgroundSizeWidth) ||
          this.normalizeSize(this.backgroundSizeHeight);
        styles.height =
          this.normalizeSize(this.backgroundSizeHeight) ||
          this.normalizeSize(this.backgroundSizeWidth);
        styles.top = this.normalizeSize(this.backgroundPositionTop);
        styles.bottom = this.normalizeSize(this.backgroundPositionBottom);
        styles.right = this.normalizeSize(this.backgroundPositionRight);
        styles.left = this.normalizeSize(this.backgroundPositionLeft);

        return styles;
      }
      return {};
    }
  },

  mounted: function() {},
  methods: {
    normalizeSize(size) {
      if (typeof size === "number") {
        return size + "px";
      }
      if (typeof size === "string") {
        return size;
      }
      return size;
    }
  },
};
</script>
