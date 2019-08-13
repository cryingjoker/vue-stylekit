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
    this.tableLabels.push(this.$el.innerText.trim());
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
