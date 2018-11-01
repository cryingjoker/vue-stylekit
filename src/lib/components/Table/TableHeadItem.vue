<script type="text/jsx">


  export default {
    name: 'RtTableHeadItem',
    components: {},
    inject: ['tableLabels'],
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
    created(){
      console.info('created')
    },
    mounted: function() {
      this.tableLabels.push(this.$el.innerText.trim());
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
