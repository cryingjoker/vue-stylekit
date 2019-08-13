<script type="text/jsx">
export default {
  name: "RtTable",
  components: {},
  props: {
    tabletListType: {
      type: Boolean,
      default: false
    },
    noBorders: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    tableLabels: []
  }),
  provide() {
    const tableLabels = this["tableLabels"];
    return { tableLabels };
  },

  render: function(h) {
    const columns = () => {
      if (!this.$slots.columns) {
        return null;
      }
      return <div class="rt-table-colgroup">{this.$slots.columns}</div>;
    };
    const renderBodyFn = () => {
      if (!this.$slots.body) {
        return null;
      }
      return this.$slots.body.map(slotVNode => {
        if (slotVNode.tag && slotVNode.tag.search(/RtTableRow/gi) >= 0) {
          slotVNode.componentOptions = slotVNode.componentOptions || {};
          slotVNode.componentOptions.propsData = slotVNode.componentOptions.propsData || {};
          slotVNode.componentOptions.propsData.tableLabels = JSON.stringify(
            this.tableLabels
          );
        }
        return slotVNode;
      });
    };

    if (this.$slots.label) {
      return (
        <div>
          <p class="rt-table-title rt-space-bottom rt-td-space-bottom">
            {this.$slots.label}
          </p>
          {this.$slots.description}
          <table class={"rt-table" + (this.tabletListType ? " rt-table--list" : "") + (this.noBorders ? " rt-table--no-borders" : "")}>
            {columns()}
            <thead class="rt-table-head" ref="head">
              {this.$slots.header}
            </thead>
            {renderBodyFn()}
          </table>
        </div>
      );
    } else {
      return (
        <table class={"rt-table" + (this.tabletListType ? " rt-table--list" : "") + (this.noBorders ? " rt-table--no-borders" : "")}>
          {columns()}
          <thead class="rt-table-head" ref="head">
            {this.$slots.header}
          </thead>

          {renderBodyFn()}
        </table>
      );
    }
  }
};
</script>
