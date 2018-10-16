<script type="text/jsx">


  export default {
    name: 'RtTableHeadItem',
    components: {},
    props: {
      verticalAlign: {
        type: String,
        default: null
      },
      align: {
        type: String,
        default: null
      },
      width: {
        type: [String, Number],
        default: null
      },

    },
    mounted: function() {
    },
    render: function(h) {
      const style = {};
      if(this.verticalAlign){
        style.verticalAlign = this.verticalAlign;
      }
      if(this.align){
        style.textAlign = this.align;
      }
      if(this.width){
        style.width = String(this.width).replace(/[0-9]/gi).length === 0 ? String(this.width) + 'px' : this.width;
      }
      return <div class="rt-table-head__item" style={style}>{this.$slots.default}</div>
    }
  };
</script>
