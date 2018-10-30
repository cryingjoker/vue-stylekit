<script type="text/jsx">


  export default {
    name: 'RtTableHeadItem',
    components: {},
    props: {
      fill: {
        type: Boolean,
        default: false
      },
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

      return <div class="rt-table-head__item" style={style}>{this.$slots.default}</div>
    }
  };
</script>
