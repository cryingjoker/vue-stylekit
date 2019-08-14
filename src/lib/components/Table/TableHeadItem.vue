<script type="text/jsx">
export default {
  name: "RtTableHeadItem",
  components: {},
  inject: ["tableLabels"],
  props: {
    fill: {
      type: Boolean,
      default: false
    },
    colspan: {
      type: Number, String,
      default: 1
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
    }
  },
  created() {
  },
  mounted: function() {
    const name = this.$el.innerText.trim();
    this.tableLabels.push(name);
    if(this.tableLabels.length === 1 && this.tableLabels[0] === name){
      this.tableLabels.push(name);
    }
    for(let i = 0; i < parseInt(this.colspan) - 1; i++ ){
      this.tableLabels.push('');
    }
  },
  render: function(h) {
    const style = {};
    if (this.verticalAlign) {
      style.verticalAlign = this.verticalAlign;
    }
    if (this.align) {
      style.textAlign = this.align;
    }

    return (
      <th class="rt-table-head__item" colspan={this.colspan} style={style}>
        {this.$slots.default}
      </th>
    );
  }
};
</script>
