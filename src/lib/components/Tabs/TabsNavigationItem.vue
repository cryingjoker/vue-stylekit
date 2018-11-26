<template>
  <div :class="tabsItemClass" @click="setActiveTabName();">
    <button class="rt-tabs-navigation__item-name"><slot /></button>
  </div>
</template>

<script>
const componentsList = {};

export default {
  name: "RtTabsNavItem",
  components: componentsList,
  props: {
    anchor:{
     type: String,
     default: null
    },
    removeBaseTag:{
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    tabsItemClass() {
      return {
        "rt-tabs-navigation__item": true,
        "rt-tabs-navigation__item--is-active":
          this.name === this.RtTabs.activeName
      };
    }
  },
  mounted: function() {
    this.RtTabs.addTabName(this.name);
    if (this.removeBaseTag) {
      let baseNode = document.querySelector("base");
      if(baseNode) {
        baseNode.parentNode.removeChild(baseNode);
        let newBase = document.createElement("base");
        let url = location.href;
        url = url.split("#")[0];
        newBase.setAttribute("href", url);
        document.getElementsByTagName("head")[0].appendChild(newBase);
      }
    }
    if(this.anchor && document.location.hash){
      if(document.location.hash.replace(/^\#/,'') === this.anchor){
        this.RtTabs.setActiveTabName(this.name);
      }
    }
  },
  inject: {
    RtTabs: {}
  },
  methods: {
    setActiveTabName() {
      this.RtTabs.setActiveTabName(this.name, this.anchor);
    }

  }
};
</script>
