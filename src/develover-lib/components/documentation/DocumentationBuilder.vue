<script type="text/jsx">
  import { Table, TableItem, TableRow, TableCol, TableHeadItem } from "../../../lib/components";

  const componentsList = {};
  componentsList[Table.name] = Table;
  componentsList[TableItem.name] = TableItem;
  componentsList[TableRow.name] = TableRow;
  componentsList[TableCol.name] = TableCol;
  componentsList[TableHeadItem.name] = TableHeadItem;


  export default {
    name: "DocumentationBuilder",
    props: {
      json: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },

    data: () => ({
      component: null,
      localCode: "",
      showCodeEditor: false,
      labels: [
        { name: "name", label: "component name" },
        { name: "proporty", label: "component proporty" },
        { name: "type", label: "proporty type" },
        { name: "about", label: "about" },
        { name: "value", label: "default value" }
      ]
    }),

    watch: {
      text(value) {
        this.localCode = this.changeComponentCode(this.text);
      }
    },

    mounted() {
    },
    components: componentsList,
    render() {
      const header = (() => {
        return this.labels.map((item) => {
          return <rt-table-head-item>{item.name}</rt-table-head-item>;
        });
      })();
      return <rt-table>
        <template slot="header">
          {header}
        </template>
      </rt-table>;
    }
  };
</script>
