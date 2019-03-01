import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import defaultValues from "../../defaultIconsSize.json";
import {listOfLogos} from "./logoItems/index.ts";

import colors from "../../color.json";

const componentList = listOfLogos;

@Component({
  components: componentList
})
class Logo extends Vue {
  name: String = "RtLogo";
  @Prop({ default: "default" }) type: string;
  @Prop({ default: null }) width: string;
  @Prop({ default: null }) height: string;
  @Prop({ default: null }) background: string;
  @Prop({ default: null }) color: string;
  @Prop({ default: null }) centerColor: string;
  @Prop({ default: null }) bottomColor: string;
  @Prop({ default: "b2c-purple" }) topFillColor: string;
  @Prop({ default: "b2c-orange" }) bottomFillColor: string;
  @Prop({default: "b2c-purple"}) defaultTopColor : string
  @Prop({default: "b2c-orange"}) defaultBottomColor : string

  render(h: CreateElement): VNode {
    let color: String;
    let background: String;

    let width:string = '0';
    let height:string = '0';

    color = this.color ? this.color : defaultValues[this.type].color;
    background = this.background ? this.background : defaultValues[this.type].background;
    if (defaultValues[this.type]) {
      width = this.width ? this.width : defaultValues[this.type].width;
      height = this.height ? this.height : defaultValues[this.type].height;
    }


    switch (this.type) {

      case "dr-web":
        return <dr-web width={width} height={height} color={this.color} background={this.background}/>;
        break;
      case "eset":
        return <eset width={width} height={height} color={color} background={background}/>;
        break;
      case "wargaming":
        return <wargaming width={width} height={height} color={color} background={background}/>;
        break;
      case "world-of-tanks":
        return <world-of-tanks width={width} height={height} color={color} background={background}/>;
        break;
      case "world-of-warships":
        return <world-of-warships width={width} height={height} color={color} background={background}/>;
        break;
      case "world-of-warplanets":
        return <world-of-warplanets width={width} height={height} color={color} background={background}/>;
        break;
      case "warface":
        return <warface width={width} height={height} color={color} background={background}/>;
        break;
      case "game-logo":
        return <logo-game width={width} height={height} color={color} background={background}/>;
        break;
      case "4-game-main":
        return <four-game-main width={width} height={height} color={color} background={background}/>;
        break;
      default:

        const topFillColor = this.topFillColor in colors ? colors[this.topFillColor] : colors[this.defaultTopColor];
        const bottomFillColor = this.bottomFillColor in colors ? colors[this.bottomFillColor] : colors[this.defaultBottomColor];
        console.log('topFillColor',topFillColor)
        console.log('bottomFillColor',bottomFillColor)
        return <logo-rt width={width} height={height} color={color} background={background} topFillColor={topFillColor} bottomFillColor={bottomFillColor}/>
    }
    return <h1>fuck logo!!</h1>;
  }
}

export default {
  component: Logo,
  name: "RtLogo"
};
