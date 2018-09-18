<template>
  <div class="rt-tabs">
    <div class="rt-tabs-navigation" :style="navigationStyle">
      <slot name="navigation" />
    </div>
    <div class="rt-tabs-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
const componentsList = {};

export default {
  name: 'RtTabs',
  components: componentsList,
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    navigationHorizontalPadding: {
      type: Number,
      default: null
    }
  },
  data() {
    const dataObj = {
      RtTabs: {
        activeName: '',
        setActiveTabName: this.setActiveTabName,
        addTabName: this.addTabName,
        namesArray: []
      },
      activeTabIndex: 0
    };

    return dataObj;
  },
  provide() {
    const RtTabs = this.RtTabs;
    return { RtTabs };
  },
  computed: {
    navigationStyle() {
      const style = {};

      if (this.navigationHorizontalPadding) {
        style.paddingLeft = this.navigationHorizontalPadding + 'px';
        style.paddingRight = this.navigationHorizontalPadding + 'px';
      }

      return style;
    }
  },
  mounted: function() {},
  methods: {
    setActiveTabName(name) {
      this.RtTabs.activeName = name;
      window.dispatchEvent(new Event('resize'));
    },
    addTabName(name) {
      if (this.RtTabs.namesArray.length === 0) {
        this.setActiveTabName(name);
      }
      this.RtTabs.namesArray.push(name);
    }
  }
};
</script>
