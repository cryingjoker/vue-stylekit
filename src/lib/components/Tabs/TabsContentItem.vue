<script type="text/jsx">
  import { tabsStore } from "./TabsStore.tsx";

  export default {
    name: "RtTabsContentItem",
    props: {
      name: {
        type: String,
        default: ""
      }
    },
    data: () => ({
      isActive: false,
      parentid: "",
      namesArray: [],
      activeName: ""
    }),
    created() {
      tabsStore.addWatcher(this.onUpdateTabsStore);
    },
    methods: {
      onUpdateTabsStore() {
        this.$forceUpdate();
      }
    },
    render() {
      if (tabsStore.tabsNames[this.name]) {
        const tabsParentUid = tabsStore.tabsNames[this.name];
        if (tabsStore.tabsParents[tabsParentUid] && tabsStore.tabsParents[tabsParentUid][this.name] && tabsStore.tabsParents[tabsParentUid][this.name].isActive) {
          return <div class="rt-tabs-content__item">{this.$slots.default}</div>;
        }
      }

      return null;
    }


  };
</script>





