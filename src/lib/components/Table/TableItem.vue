<script type="text/jsx">


  export default {
    name: "RtTableItem",
    components: {},
    inject: {
      tableLabels: {}
    },
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
        type: [Number, String],
        default: null
      },
      colspan: {
        type: [Number, String],
        default: 1
      },
      slotIndex: {
        type: Number,
        default: null
      },

    },
    render: function(h) {
      const style = {};
      if(this.width !== null){
        style.width = String(this.width).replace(/[0-9]/gi,'').length === 0 ? style.width+'px' : style.width;
      }
      if(this.verticalAlign){
        style.verticalAlign = this.verticalAlign;
      }
      if(this.align){
        style.textAlign = this.align;
      }
      return <td style={style} colspan={this.colspan} class="rt-table-body__item" label={this.tableLabels[this.slotIndex]}>{this.$slots.default}</td>;
    }
  };
</script>
