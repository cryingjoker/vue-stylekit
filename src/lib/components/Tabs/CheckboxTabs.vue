<script type="text/jsx">
  import { tabsStore } from "./TabsStore.tsx";
  import variables from "../../../lib/variables.json";




  export default {
    name: "RtCheckboxTabs",

    props: {
      label: {
        type: String,
        default: ""
      },
      isActive:{
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
      onChange(event){
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
      },


    },
    render(h){

      if(this.label.length === 0){
        return null;
      }


        return <div>
          <div class="rt-tabs-checklist">
            <rt-checkbox onChange={this.onChange} model={this.isActiveLocal} name={"rt-checkbox-"+this._uid}>{this.label}</rt-checkbox>
            {this.isActiveLocal ? '+1': '-1'}
          </div>
          <div class="rt-tabs-checklist-content">
            {this.$slots.content}
          </div>
        </div>

    }
  };
</script>
