import Vue from 'vue';
import stylesReset from './dist/css/reset/index.styl';
import styles from './dist/css/styles.less';
import {
  Button,
  ButtonRippleWithoutJs,
  ButtonWithoutRipple,
  Checkbox,
  Input,
  InputWithoutJs,
  Price,
  RadioButton,
  Ripple,
  RippleWave,
  RippleWihoutJs,
  Select,
  SelectOption,
  SelectWithoutJs,
  Spinner,
  Switch,
  Textarea,
  TextareaStatic,
  TextareaWithoutJs,
  ScrollTabs,
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
  Annotation,
  ColorLineText
} from './dist/components/main-elements';

import { Card } from './dist/components/complex-elements';

import {
  Banner,
  BannerItem,
  BannerPaginatorItem
} from './dist/components/experimental-elements';

import {
  PreComponent
} from './dist/components/test-components';

const RtVue = {

  install(Vue, config) {
    if (RtVue.installed) return;
    Vue.component(Button.name, Button);
    Vue.component(ButtonRippleWithoutJs.name, ButtonRippleWithoutJs);
    Vue.component(ButtonWithoutRipple.name, ButtonWithoutRipple);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(Input.name, Input);
    Vue.component(InputWithoutJs.name, InputWithoutJs);
    Vue.component(Price.name, Price);
    Vue.component(RadioButton.name, RadioButton);
    Vue.component(Ripple.name, Ripple);
    Vue.component(RippleWave.name, RippleWave);
    Vue.component(RippleWihoutJs.name, RippleWihoutJs);
    Vue.component(Select.name, Select);
    Vue.component(SelectOption.name, SelectOption);
    Vue.component(SelectWithoutJs.name, SelectWithoutJs);
    Vue.component(Spinner.name, Spinner);
    Vue.component(Switch.name, Switch);
    Vue.component(Textarea.name, Textarea);
    Vue.component(TextareaStatic.name, TextareaStatic);
    Vue.component(TextareaWithoutJs.name, TextareaWithoutJs);
    Vue.component(ScrollTabs.name, ScrollTabs);
    Vue.component(Tabs.name, Tabs);
    Vue.component(TabsNavigationItem.name, TabsNavigationItem);
    Vue.component(TabsContentItem.name, TabsContentItem);
    Vue.component(Annotation.name, Annotation);
    Vue.component(ColorLineText.name, ColorLineText);
    Vue.component(Card.name, Card);
    Vue.component(Banner.name,Banner);
    Vue.component(BannerItem.name, BannerItem);
    Vue.component(BannerPaginatorItem.name, BannerPaginatorItem);


    Vue.component(PreComponent.name, PreComponent);
  }
};
const version = '0.0.2';
RtVue.version = version;

export default RtVue;





