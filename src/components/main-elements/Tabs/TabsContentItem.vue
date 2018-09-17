<script type="text/jsx">
const componentsList = {}

export default {
  name: "RtTabsContentItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      isActive: false
    }
  },
  components: componentsList,

  inject: {
    RtTabs: {}
  },
  methods: {
  },
  render(h){
    if(this.name === this.RtTabs.activeName){
      return (
        <div className="rt-tabs-content__item">
          { this.$slots.default }
        </div>
      )
    }
    return null
  }
}
</script>
