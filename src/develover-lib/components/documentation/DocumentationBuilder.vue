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
      type: {
        type: String,
        default: "components"
      },
      json: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },

    data: () => ({
      labels: [
        { name: "version", label: "release version" },
        { name: "name", label: "component name" },
        { name: "proporty", label: "component proporty" },
        { name: "type", label: "proporty type" },
        { name: "about", label: "about" },
        { name: "value", label: "default value" }
      ]
    }),

    render(h) {
      if (!this.json["items"] || this.json["items"].length == 0) {
        return null;
      }

      const header = (() => {
        return this.labels.map((item) => {
          return <rt-table-head-item>{item.name}</rt-table-head-item>;
        });
      })();
      const bodyItem = (data) => {
        return this.labels.map((labelItem) => {
          if (labelItem.name === "version" && !data[labelItem.name]) {
            data[labelItem.name] = "<= 0.0.15";
          }
          console.info("data[labelItem.name]", data[labelItem.name]);
          return <rt-table-item>{data[labelItem.name]}</rt-table-item>;
        });
      };


      const body = (() => {
        if (this["json"] && this["json"]["items"]) {
          return this["json"]["items"].map((row) => {
            return <rt-table-row>{bodyItem(row)}</rt-table-row>;
          });
        } else {
          return null;
        }
      })();
      return <div class="rt-space-top25">
        <rt-table>
          <template slot="label">
            {this.type}
          </template>
          <template slot="header">
            {header}
          </template>
          <template slot="body">
            {body}
          </template>
        </rt-table>
      </div>;
    }
  };
</script>
