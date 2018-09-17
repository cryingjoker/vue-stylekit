<template>
  <div class="rt-tabs">
    <div class="rt-tabs-navigation">
      <slot name="navigation"></slot>
    </div>
    <div class="rt-tabs-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
const componentsList = {}

export default {
  name: "RtTabs",
  components: componentsList,
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data(){
    const dataObj = {
      RtTabs: {
        activeName: '',
        setActiveTabName: this.setActiveTabName,
        addTabName: this.addTabName,
        namesArray: []
      },
      activeTabIndex: 0
    };

    return dataObj
  },
  provide() {
    const RtTabs = this.RtTabs
    return { RtTabs }
  },
  mounted: function() {
  },
  methods: {
    setActiveTabName(name){
      this.RtTabs.activeName = name;
      window.dispatchEvent(new Event("resize"));
    },
    addTabName(name){
      if(this.RtTabs.namesArray.length === 0){
        this.setActiveTabName(name);
      }
      this.RtTabs.namesArray.push(name);
    }
  }
}
</script>
