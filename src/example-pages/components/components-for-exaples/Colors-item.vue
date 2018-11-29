
<script type="text/jsx">
const componentsList = {};
export default {
  name: "AppColorsItem",
  props:{
    colorName: {
      type: String,
      default: null,
    },
    colorValue:{
      type: String,
      default: null,
    }
  },
  data: () => ({
    hasCopy:  false
  }),

  methods:{
    copyName(){
      const el = document.createElement('textarea');
      el.value = this.colorName;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.hasCopy = true;
      setTimeout(()=>{
        this.hasCopy = false;
      },600)
    }
  },
  render(){

    const style = {
      backgroundColor : this.colorValue,
      height: '100px',
      cursor: 'pointer'
    };

    const textStyle = {
      color: this.colorName.search('white') < 0 && this.colorName != 'light-grey' ? '#fff' :  '#000'
    }
    const text = (()=>{
      if(this.hasCopy) {
        return <span style={textStyle}
                     className="rt-font-bold">copy done</span>
      }else{
        return <span style={textStyle}
                     className="rt-font-bold">{ this.colorName} <br/> {this.colorValue}</span>
      }
    })()
    return <div onClick={this.copyName} style={style} class="rt-col-1 rt-col-md-1 rt-col-td-1 d-flex flex-center-center">
      {text}
      </div>
  }
};
</script>
