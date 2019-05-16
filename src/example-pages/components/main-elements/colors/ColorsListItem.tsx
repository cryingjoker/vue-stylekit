import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop, Watch} from "vue-property-decorator";
import {IColorListItem} from "./IColorList";



@Component
class ColorsListItem extends Vue {
  @Prop({ default: {} }) color: IColorListItem;
  @Prop({ default: [] }) colorsIndexArray: any;
  @Prop({ default: {} }) settings: any;


  render(h: CreateElement): VNode {

     const renderItems = this.colorsIndexArray.map((key)=>{
       switch(key){
         case 'hex':
           return <rt-table-item>
             <p>#{this.color.hex}</p>
           </rt-table-item>;
             break
         case 'rgba':
           return <rt-table-item>{this.color.rgba.red} {this.color.rgba.blue} {this.color.rgba.green} {this.color.rgba.alpha*100}</rt-table-item>;
           break
         case 'icon': return <rt-table-item>
           <div class="app-color-cube" style={{ backgroundColor: `#${this.color.hex}` }}></div>
         </rt-table-item>;
           break
         case 'code_variable_name': return <rt-table-item>
           <p>{this.color.code_variable_name}</p>
         </rt-table-item>;
           break
         case 'label': return <rt-table-item>
           <p>{this.color.label}</p>
         </rt-table-item>;
           break
         default:
           return <rt-table-item></rt-table-item>
       }
     })
    return <rt-table-row>
      {renderItems}
    </rt-table-row>
  }
}

export default {
  component: ColorsListItem,
  name: "AppColorsItem"
};

