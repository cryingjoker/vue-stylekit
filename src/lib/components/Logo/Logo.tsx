import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import defaultValues from "../../defaultIconsSize.json";
import { listOfLogos } from "./logoItems/index.ts";
import variables from "../../../lib/variables.json";

import colors from "../../color.json";

const componentList = listOfLogos;

@Component({
  components: componentList
})
class Logo extends Vue {
  name: String = "RtLogo";
  localWidth = null;
  localHeight = null;

  @Prop({ default: "default" }) type: string;
  @Prop({ default: null }) width: string;
  @Prop({ default: null }) tabletWidth: string;
  @Prop({ default: "auto" }) tabletHeight: string;
  @Prop({ default: null }) mobileWidth: string;
  @Prop({ default: "auto" }) mobileHeight: string;
  @Prop({ default: null }) height: string;
  @Prop({ default: null }) background: string;
  @Prop({ default: null }) color: string;
  @Prop({ default: null }) centerColor: string;
  @Prop({ default: null }) bottomColor: string;
  @Prop({ default: false }) showText: boolean;
  @Prop({ default: false }) onlyText: boolean;
  @Prop({ default: false }) englishTheme: boolean;
  @Prop({ default: "b2c-purple" }) topFillColor: string;
  @Prop({ default: "b2c-orange" }) bottomFillColor: string;
  @Prop({ default: "b2c-purple" }) defaultTopColor: string;
  @Prop({ default: "b2c-orange" }) defaultBottomColor: string;

  mounted() {
    this.localWidth = this.width || defaultValues[this.type].width;
    this.localHeight = this.height || defaultValues[this.type].height;
    if (this.tabletWidth || this.mobileWidth) {
      window.addEventListener("resize", () => {
        const width = document.body.clientWidth;
        if (width <= parseInt(variables["tablet-upper-limit"])) {
          if (width <= parseInt(variables["mobile-upper-limit"])) {
            if (this.mobileWidth) {
              this.localWidth = this.mobileWidth;
              this.localHeight = this.mobileHeight;
            } else {
              if (this.tabletWidth) {
                this.localWidth = this.tabletWidth;
                this.localHeight = this.tabletHeight;
              }
            }
          } else {
            if (this.tabletWidth) {
              this.localWidth = this.tabletWidth;
              this.localHeight = this.tabletHeight;
            }
          }
        } else {
          this.localWidth = this.width || defaultValues[this.type].width;
          this.localHeight = this.height || defaultValues[this.type].height;
        }
        // console.info('--this.localWidth>>>',this.type,this.localWidth)
      });
    }
  }

  bindResize() {

  }

  detectDeviceType() {

  }

  render(h: CreateElement): VNode {
    let color: String;
    let background: String;
    let width: string = this.localWidth;
    let height: string = this.localHeight;

    color = this.color ? this.color : defaultValues[this.type].color;
    background = this.background ? this.background : defaultValues[this.type].background;


    switch (this.type) {

      case "dr-web":
        return <dr-web width={width} style={{ height: height }} color={this.color} background={this.background}/>;
        break;
      case "eset":
        return <eset width={width} style={{ height: height }} color={color} background={background}/>;
        break;
      case "wargaming":
        return <wargaming width={width} style={{ height: height }} color={color} background={background}/>;
        break;
      case "world-of-tanks":
        return <world-of-tanks width={width} style={{ height: height }} color={color} background={background}/>;
        break;
      case "world-of-warships":
        return <world-of-warships width={width} style={{ height: height }} color={color} background={background}/>;
        break;
      case "world-of-warplanets":
        return <world-of-warplanets width={width} style={{ height: height }} color={color} background={background}/>;
        break;
      case "warface":
        return <warface width={width} style={{ height: height }} color={color} background={background}/>;
        break;
      case "game-logo":
        return <logo-game width={width} style={{ height: height }} color={color} background={background}/>;
        break;
      case "4-game-main":
        return <four-game-main width={width} style={{ height: height }} color={color} background={background}/>;
        break;
      default:

        const topFillColor = this.topFillColor in colors ? colors[this.topFillColor] : colors[this.defaultTopColor];
        const bottomFillColor = this.bottomFillColor in colors ? colors[this.bottomFillColor] : colors[this.defaultBottomColor];
        if(this.englishTheme){
          if(this.onlyText){
            return <logo-rt-english-only-text width={width} style={{ height: height }} color={color} background={background}
                                      topFillColor={topFillColor} bottomFillColor={bottomFillColor}/>;
          }else {
            if (this.showText) {
              return <logo-rt-english-with-text width={width} style={{ height: height }} color={color}
                                                background={background}
                                                topFillColor={topFillColor} bottomFillColor={bottomFillColor}/>;
            } else {
              return <logo-rt-english width={width} style={{ height: height }} color={color} background={background}
                                      topFillColor={topFillColor} bottomFillColor={bottomFillColor}/>;
            }
          }
        }else{
          if(this.onlyText){
            return <logo-rt-only-text width={width} style={{ height: height }} color={color} background={background}
                                      topFillColor={topFillColor} bottomFillColor={bottomFillColor}/>;
          }else {
            if (this.showText) {
              return <logo-rt-with-text width={width} style={{ height: height }} color={color} background={background}
                                        topFillColor={topFillColor} bottomFillColor={bottomFillColor}/>;
            } else {
              return <logo-rt width={width} style={{ height: height }} color={color} background={background}
                              topFillColor={topFillColor} bottomFillColor={bottomFillColor}/>;
            }
          }
        }

    }
  }
}

export default {
  component: Logo,
  name: "RtLogo"
};
