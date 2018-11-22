<script type="text/jsx">

export default {
  name: "RtFilter",
  data: () => ({
    selectedProps: {},
    listners: [],
  }),
  provide() {
    const RtFilter = {};
    RtFilter['selectedProps'] = this.selectedProps;
    RtFilter['setProps'] = this.setProps;
    RtFilter['removeProps'] = this.removeProps;
    RtFilter['addListener'] = this.addListener;
    return { RtFilter };
  },
  mounted: function() {},
  watch: {
    selectedProps(newProps, oldProps){
        this.setHistory();
    }
  },
  methods: {
    setHistory(){
      if(window.history){
        const history = Window.history;
        let getLine = '{';


        Object.keys(this.selectedProps).forEach((key)=>{
          if(this.selectedProps[key] && this.selectedProps[key][0].search('@')) {
            if(getLine.length > 1){
              getLine += ','
            }
            getLine += key + ':';
            getLine += JSON.stringify(this.selectedProps[key]);
          }
        })
        getLine+='}';

        const params = new URLSearchParams(location.search);
        params.set('filter', getLine);
        window.history.replaceState({}, "", decodeURIComponent(`${location.pathname}?${params}`));

      }
    },
    callListeners(){
      this.listners.forEach((fn)=>{
        fn.call(null,this.selectedProps);
      })
    },
    addListener(fn){
      this.listners.push(fn);
      return this.listners.length - 1;
    },
    setProps(option,value){
      if(value.length === 0){
        this.removeProps(option)
      }else {
        this.selectedProps = {...this.selectedProps};
        this.$set(this.selectedProps, option, value)
        this.callListeners();
      }
    },
    removeProps(option){
      this.selectedProps = {...this.selectedProps};
      delete this.selectedProps[option];
      this.$set(this, 'selectedProps', this.selectedProps)
      this.callListeners();
    }
  },
  render(){
    return <div class="d-static">
      {JSON.stringify(this.selectedProps)}
      {this.$slots.default}
      </div>;
  }
};
</script>
