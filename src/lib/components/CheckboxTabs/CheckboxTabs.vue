<script type="text/jsx">
  import { tabsStore } from "../Tabs/TabsStore.tsx";
  import variables from "../../variables.json";


  export default {
    name: "RtCheckboxTabs",

    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      hideNotActive:{
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      deviceType: "pc",
      isActiveLocal: false
    }),


    mounted: function() {

    },

    updated() {

    },
    beforeDestroy: function() {
    },
    methods: {
      onChange(event) {
        this.isActiveLocal = event.target.checked;
      },
      setActiveTabName(name, hashAnchor = false) {
        tabsStore.setActiveTabName(name, hashAnchor);
        window.dispatchEvent(new Event("resize"));
        if (hashAnchor) {
          window.history.replaceState(undefined, undefined, "#" + hashAnchor);
        }
      },

      addTabName(name) {
        if (this.RtTabs.namesArray.length === 0) {
          this.setActiveTabName(name);
        }
        this.RtTabs.namesArray.push(name);
      }


    },
    render(h) {
      const content = ()=>{
        if(this.hideNotActive){
          if(this.isActiveLocal) {
            return <div class="rt-tabs-checklist-content">
              <div class="rt-tabs-checklist-content__item">{this.$slots.content[1]}</div>
            </div>
          }else{
            return <div class="rt-tabs-checklist-content">
              <div class="rt-tabs-checklist-content__item">{this.$slots.content[0]}</div>
            </div>
          }
        }else{
          return <div class="rt-tabs-checklist-content">
            <div class="rt-tabs-checklist-content__item">{this.$slots.content[0]}</div>
            <div class="rt-tabs-checklist-content__item">{this.$slots.content[1]}</div>
          </div>
        }
      }
      return <div class={"rt-tabs-checklist" + (this.isActiveLocal && !this.hideNotActive ? " rt-tabs-checklist--is-active" : "")}>
        <div class="rt-tabs-checklist-input">
          <rt-checkbox onChange={this.onChange} model={this.isActiveLocal}
                       name={"rt-checkbox-" + this._uid}>{this.$slots.label}</rt-checkbox>
        </div>
        {content()}

      </div>;


    }
  };
</script>
