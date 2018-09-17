<template>
  <div :class="tabsItemClass" @click="setActiveTabName()">
    <button class="rt-tabs-navigation__item-name">
      <slot></slot>
    </button>
  </div>
</template>

<script>
const componentsList = {}

export default {
  name: "RtTabsNavItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: componentsList,
  mounted: function() {
    this.RtTabs.addTabName(this.name)
  },
  computed: {
    tabsItemClass() {
      return {
        "rt-tabs-navigation__item"            : true,
        "rt-tabs-navigation__item--is-active" : this.name === this.RtTabs.activeName,
      }
    }
  },
  inject: {
    RtTabs: {}
  },
  methods: {
    setActiveTabName(){
      this.RtTabs.setActiveTabName(this.name);
    }

  }
}
</script>
