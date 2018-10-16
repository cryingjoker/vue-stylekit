<script type="text/jsx">


  export default {
    name: "RtTableItem",
    components: {},
    inject: {
      tableLabels: {}
    },
    props: {
      slotIndex: {
        type: Number,
        default: null
      },

    },
    render: function(h) {
      return <td class="rt-table-body__item" label={this.tableLabels[this.slotIndex]}>{this.$slots.default}</td>;
    }
  };
</script>
