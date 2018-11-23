<script type="text/jsx">

export default {
  name: "RtFilter",
  data: () => ({
    selectedProps: {},
    listners: [],
    listnersCaller: [],
  }),
  provide() {
    const RtFilter = {};
    RtFilter['selectedProps'] = this.selectedProps;
    RtFilter['setProps'] = this.setProps;
    RtFilter['removeProps'] = this.removeProps;
    RtFilter['addListener'] = this.addListener;
    RtFilter['addListenerForCaller'] = this.addListenerForCaller;
    return { RtFilter };
  },
  mounted: function() {
    this.getFromHistory()
  },
  watch: {
    selectedProps(newProps, oldProps){
      if(JSON.stringify(newProps) !== JSON.stringify(oldProps)) {
        this.setHistory();
      }
    }
  },
  methods: {
    setHistory(){
      if(window.history){
        const history = Window.history;
        let getLine = '';
        console.info('this.selectedProps',this.selectedProps);
        Object.keys(this.selectedProps).forEach((key)=>{
          if(this.selectedProps[key] && this.selectedProps[key].length > 0 && this.selectedProps[key][0].search('@') !== 0) {
            if(getLine.length > 1){
              getLine += ','
            }
            getLine += key + ':';
            getLine += this.selectedProps[key].join('+');
          }
        });
        const params = new URLSearchParams(location.search);
        if(getLine.length > 0) {
          params.set('filter', getLine);
        }else{
        }

        if(params.toString().length > 0) {
          if(location.search !== encodeURIComponent(params)) {
            window.history.replaceState({}, "", decodeURIComponent(`${location.pathname}?${encodeURIComponent(params)}`));
          }
        }else{
          window.history.replaceState({}, "", decodeURIComponent(`${location.pathname}`));
        }

      }
    },
    getFromHistory(){
      const params = new URLSearchParams(location.search);
      const filter = params.get('filter');
      const json = {}
      if(filter) {
        filter.split(',').map((i) => {
          const item = i.split(':');
          json[item[0]] = item[1].split('+')
        })
        this.$set(this, 'selectedProps', json)
        this.callListenersCallers();
      }


    },
    callListeners(){
      this.listners.forEach((fn)=>{
        fn.call(null,this.selectedProps);
      })
    },
    callListenersCallers(){
      this.listnersCaller.forEach((fn)=>{
        console.info('this.selectedProps',this.selectedProps);
        fn.call(null,this.selectedProps);
      })
    },

    addListener(fn){
      this.listners.push(fn);
      return this.listners.length - 1;
    },
    addListenerForCaller(fn){

      this.listnersCaller.push(fn);
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
