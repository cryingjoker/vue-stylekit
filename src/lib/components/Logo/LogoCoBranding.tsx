import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import defaultValues from "../../defaultIconsSize.json";
import {listOfLogos} from "./logoItems/index.ts";

import colors from "../../color.json";

const componentList = listOfLogos;

@Component({
  components: componentList
})
class LogoCoBranding extends Vue {

  render(h: CreateElement): VNode {
    return <div class="rt-logo-co-branding">
      <div class="rt-logo-co-branding__item">{this.$slots.firstLogo}</div>
      <span class="rt-logo-co-branding__line"></span>
      <div class="rt-logo-co-branding__item">{this.$slots.secondLogo}</div>
    </div>
  }
}

export default {
  component: LogoCoBranding,
  name: "RtLogoCoBranding"
};
