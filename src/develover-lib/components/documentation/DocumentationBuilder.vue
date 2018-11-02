<script type="text/jsx">
import {
  Table,
  TableItem,
  TableRow,
  TableCol,
  TableHeadItem
} from "../../../lib/components";
import {markdown} from 'markdown';
const componentsList = {};
componentsList[Table.name] = Table;
componentsList[TableItem.name] = TableItem;
componentsList[TableRow.name] = TableRow;
componentsList[TableCol.name] = TableCol;
componentsList[TableHeadItem.name] = TableHeadItem;

export default {
  name: "DocumentationBuilder",
  props: {
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "components"
    },
    labelsJson: {
      type: Object,
      default: null
    },
    json: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  data(){
    if (!this.labelsJson) {
      switch(this.type) {
        case 'classStyle':
          return {
            labels: [
              { name: "name", label: "class name" },
              { name: "version", label: "release version" },
              { name: "description", label: "description" },
            ]
          }
          break;
        default:
          return {
          labels: [
            { name: "name", label: "component name" },
            { name: "version", label: "release version" },
            { name: "proporty", label: "component proporty" },
            { name: "type", label: "proporty type" },
            { name: "description", label: "description" },
            { name: "value", label: "default value" }
          ]
        }
      }
    } else {
      return {
        labels: this.this.labelsJson
      }
    }
  },

  render(h) {
    if (!this.json["items"] || this.json["items"].length == 0) {
      return null;
    }

    const header = (() => {
      return this.labels.map(item => {
        return <rt-table-head-item>{item.label}</rt-table-head-item>;
      });
    })();
    const bodyItem = data => {
      return this.labels.map(labelItem => {
        if (labelItem.name === "version" && !data[labelItem.name]) {
          data[labelItem.name] = "<= 0.0.16";
        }
        let tableCellText;
        if(Array.isArray(data[labelItem.name])){
          tableCellText = data[labelItem.name].join(' ');
        }else{
          tableCellText = data[labelItem.name];
        }
        return <rt-table-item html={markdown.toHTML(tableCellText)}></rt-table-item>;
      });
    };

    const body = (() => {
      if (this["json"] && this["json"]["items"]) {
        return this["json"]["items"].map(row => {
          return <rt-table-row>{bodyItem(row)}</rt-table-row>;
        });
      } else {
        return null;
      }
    })();
    return (
      <div class="rt-space-top25 app-documentation">
        <rt-table>
          <template slot="label">{this.label ? this.label : this.type}</template>
          <template slot="header">{header}</template>
          <template slot="body">{body}</template>
        </rt-table>
      </div>
    );
  }
};
</script>
