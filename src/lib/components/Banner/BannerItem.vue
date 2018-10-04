<template>
  <div class="rt-banner-content" :class="banerClass" :style="banerStyle">
    <div class="rt-banner-content__inner">
      <slot />
    </div>
  </div>


</template>

<script>
const componentsList = {};

export default {
  name: 'RtBannerItem',
  components: componentsList,
  props: {
    contentMinHeight: {
      type: [Number, String],
      default: null
    },
    contentHeight: {
      type: [Number, String],
      default: null
    },
    contentMinWidth: {
      type: [Number, String],
      default: null
    },
    contentMaxWidth: {
      type: [Number, String],
      default: null
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundImage: {
      type: String,
      default: null
    },
    isWhiteColor: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    RtBanners: {}
  },

  data() {
    return {
      id: this._uid
    };
  },

  computed: {
    banerStyle() {
      const styles = {};
      if (this.contentMinWidth) {
        if (typeof this.contentMinWidth === 'string') {
          styles.minWidth = this.contentMinWidth;
        } else {
          styles.minWidth = this.contentMinWidth + 'px';
        }
      }
      if (this.contentMaxWidth) {
        if (typeof this.contentMaxWidth === 'string') {
          styles.maxWidth = this.contentMaxWidth;
        } else {
          styles.maxWidth = this.contentMaxWidth + 'px';
        }
      }
      if (this.contentHeight) {
        if (typeof this.contentHeight === 'string') {
          styles.height = this.contentHeight;
        } else {
          styles.height = this.contentHeight + 'px';
        }
      }
      if (this.contentMinHeight) {
        if (typeof this.contentMinHeight === 'string') {
          styles.minHeight = this.contentMinHeight;
        } else {
          styles.minHeight = this.contentMinHeight + 'px';
        }
      }
      return styles;
    },
    banerClass() {
      const classArray = {};
      if (this.RtBanners && this.RtBanners.activeIndex === this.index) {
        classArray['rt-banner-content--active'] = true;
      }
      return classArray;
    },
    imageStyle() {
      const styles = {};
      if (this.backgroundImage) {
        styles.backgroundImage = 'url(' + this.backgroundImage + ')';
      }
      return styles;
    }
  },

  beforeMount: function() {
    if(this.RtBanners) {
      this.index = this.RtBanners.items.length;
      this.RtBanners.items.push({
        backgroundColor: this.backgroundColor,
        backgroundImage: this.backgroundImage,
        isWhiteColor: this.isWhiteColor,
        id: this.id
      });
      const preloadImage = new Image();
      preloadImage.src = this.backgroundImage;
    }
  }
};
</script>
