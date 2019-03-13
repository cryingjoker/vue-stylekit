import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import ColorItem from "./ColorsListItem.tsx";
import colors from "../../../../lib/colorFullDocs.json";

import { IColorListItem, IColorList, IRGBA } from "./IColorList";
import colorListSettings from "./colorListSettings.json";

const componentsList = {};

componentsList[ColorItem.name] = ColorItem.component;

@Component({
  components: componentsList
})

class ColorsList extends Vue {
  colors: IColorList = colors;
  colorsSettingsArray: string[] = [];

  mounted() {
    Object.keys(colorListSettings).map((key) => {
      const item = colorListSettings[key];
      this.colorsSettingsArray[item.index] = key;
    });
    this.colorsSettingsArray[1] = "icon";
    Object.keys(this.colors).map((key) => {
      const color = this.colors[key];
      this.createColorsParams(color);
    });
    this.$set(this, "colors", { ...this.colors });
  }

  private createColorsParams(color): void {
    if (color.value[0] === "#") {
      color.hex = color.value.substr(1);
      color.rgba = this.convertHexToRGBA(color.hex);
    } else {
      if (color.value.search(/^rgba/) === 0) {
        color.hex = this.convertToRGBAToHex(color.value);
        color.rgba = this.rgbaToObject(color.value);
      }
    }
  }

  private convertToRGBAToHex(rgba): string {
    const color: string[] = rgba.replace(/(rgba\()|(\))|( )/g, "").split(",").map((number) => {
      number = number - 0;
      if (number % 1 === 0) {
        number = number.toString(16).toUpperCase();
        return number.toString(16).toUpperCase();
      } else {
        number = ((Math.round(number * 255)) + 0x10000).toString(16).substr(-2).toUpperCase();
      }
      if (number.length === 1) {
        number += number;
      }
      return number;
    });
    return color.join("");
  }

  private rgbaToObject(rgba): object {
    const colors = rgba.replace(/(rgba\()|(\))/g, "").split(",").map(i => i - 0);
    return {
      red: colors[0],
      blue: colors[1],
      green: colors[2],
      alpha: colors[3]
    };
  }

  private convertHexToRGBA(hex): object {
    let colors = hex.match(/([a-z0-9][a-z0-9])/gi).map((number) => parseInt(number, 16));
    if (colors.length > 3) {
      colors[3] = (colors[3] / 255);
      colors[3] = parseInt(colors[3]);
    }
    return {
      red: colors[0],
      blue: colors[1],
      green: colors[2],
      alpha: colors[3] !== undefined ? colors[3] : 1
    };
  }


  render(h: CreateElement): VNode {
    const colorMap = Object.keys(this.colors).map((key) => {
      const colorItem = this.colors[key];
      if (colorItem.hex) {
        return <app-colors-item colorsIndexArray={this.colorsSettingsArray} settings={colorListSettings}
                                color={colorItem}/>;
      } else {
        return null;
      }
    });
    // const header = (() => {
    //   return this.labels.map(item => {
    //     return <rt-table-head-item>{item.label}</rt-table-head-item>;
    //   });
    // })();
    const header = (() => {
      return this.colorsSettingsArray.map((key) => {

        if (colorListSettings[key]) {
          return <rt-table-head-item>{colorListSettings[key].name}</rt-table-head-item>;
        } else {
          return <rt-table-head-item>Цвет</rt-table-head-item>;
        }
      });
    })();
    if (header.length > 0) {
      return <div class="rt-container">
        <div class="app-content rt-col-12 rt-col-md-3">
          <div class="app-title"><h1 class="rt-font-hero">Colors</h1></div>
          <div class="app-body">
            <div class="row">

              <rt-table>
                <template slot="header">
                  {header}
                </template>
                <template slot="body">
                  {colorMap}
                </template>
              </rt-table>

            </div>
          </div>
        </div>
      </div>;
    }
    return null;
  }
}

export default {
  component: ColorsList,
  name: "AppColors"
};

