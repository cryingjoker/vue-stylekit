
  <script type="text/jsx">

const componentsList = {};

export default {
  name: "DocumentationCreater",
  props: {
    json: {
      type: Object,
      default: ()=>{
        return {}
      }
    }
  },

  data: () => ({
    component: null,
    localCode: '',
    showCodeEditor: false
  }),

  watch: {
    text(value) {
      this.localCode = this.changeComponentCode(this.text);
    }
  },

  mounted(){
    this.localCode = this.text;
    this.getTextAsVue();
  },
  components: componentsList,
  render(){
    return <h1>Documentation</h1>
  }
};
</script>
