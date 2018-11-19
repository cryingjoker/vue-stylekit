import Vue from "vue";
import styles from "./css/vue-rt-style.styl";
import Project from "../../package.json";

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
  RippleWihoutJs,
  Select,
  SelectOption,
  SelectWithoutJs,
  Spinner,
  Switch,
  Textarea,
  TextareaStatic,
  ScrollTabs,
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
  Annotation,
  ColorLineText,
  Banner,
  BannerItem,
  BannerPaginatorItem,
  Card,
  CardBuy,
  CardImage,
  CardImageList,
  FullscreenImage,
  RowList,
  RowListItem,
  Table,
  TableHeadItem,
  TableItem,
  TableRow,
  DownloadContent,
  InlineDropdown,
  InlineDropdownItem,
  Tag,
  TagsList,
  Filter,
  FilterWatcher,
  Youtube,
  FilterCaller
} from "./components";

import { SwipeLeft, SwipeRight } from "./directives/Swipe/swipe";
import { OutsideClickDirective } from "./directives/OudsideClick/OudsideClick";
// import { FilterCallerDirective } from "./directives/Filter/FilterCaller";

const VueRtStyle = {
  install(Vue, config) {
    if (!Vue.RtStyle) {
      Vue.component(Button.name, Button);
      Vue.component(ButtonRippleWithoutJs.name, ButtonRippleWithoutJs);
      Vue.component(ButtonWithoutRipple.name, ButtonWithoutRipple);
      Vue.component(Checkbox.name, Checkbox);
      Vue.component(Input.name, Input);
      Vue.component(InputWithoutJs.name, InputWithoutJs);
      Vue.component(Price.name, Price);
      Vue.component(RadioButton.name, RadioButton);
      Vue.component(Ripple.name, Ripple);
      Vue.component(RippleWihoutJs.name, RippleWihoutJs);
      Vue.component(Select.name, Select);
      Vue.component(SelectOption.name, SelectOption);
      Vue.component(SelectWithoutJs.name, SelectWithoutJs);
      Vue.component(Spinner.name, Spinner);
      Vue.component(Switch.name, Switch);
      Vue.component(Textarea.name, Textarea);
      Vue.component(TextareaStatic.name, TextareaStatic);
      Vue.component(ScrollTabs.name, ScrollTabs);
      Vue.component(Tabs.name, Tabs);
      Vue.component(TabsNavigationItem.name, TabsNavigationItem);
      Vue.component(TabsContentItem.name, TabsContentItem);
      Vue.component(Annotation.name, Annotation);
      Vue.component(ColorLineText.name, ColorLineText);
      Vue.component(Card.name, Card);
      Vue.component(CardBuy.name, CardBuy);
      Vue.component(CardImage.name, CardImage);
      Vue.component(CardImageList.name, CardImageList);
      Vue.component(Banner.name, Banner);
      Vue.component(BannerItem.name, BannerItem);
      Vue.component(BannerPaginatorItem.name, BannerPaginatorItem);
      Vue.component(FullscreenImage.name, FullscreenImage);
      Vue.component(RowList.name, RowList);
      Vue.component(RowListItem.name, RowListItem);
      Vue.component(Table.name, Table);
      Vue.component(TableHeadItem.name, TableHeadItem);
      Vue.component(TableItem.name, TableItem);
      Vue.component(TableRow.name, TableRow);
      Vue.component(DownloadContent.name, DownloadContent);
      Vue.component(InlineDropdown.name, InlineDropdown);
      Vue.component(InlineDropdownItem.name, InlineDropdownItem);
      Vue.component(Tag.name, Tag);
      Vue.component(TagsList.name, TagsList);
      Vue.component(Filter.name, Filter);
      Vue.component(FilterWatcher.name, FilterWatcher);
      Vue.component(FilterCaller.name, FilterCaller);

      // Vue.directive(FilterCallerDirective.name, FilterCallerDirective);

      Vue.component(Youtube.name, Youtube);

      Vue.directive(SwipeLeft.name, SwipeLeft);
      Vue.directive(SwipeRight.name, SwipeRight);
      Vue.directive(OutsideClickDirective.name, OutsideClickDirective);



      Vue.RtStyle = true;
      Vue.config.test = true;
    }
  }
};
// VueRtStyle.directives = { SwipeLeft, SwipeRight, OutsideClickDirective, FilterCallerDirective};
VueRtStyle.directives = { SwipeLeft, SwipeRight, OutsideClickDirective};

const version = Project.version;

// if(localStorage && localStorage.getItem('dev_mode')){
//   localStorage.setItem('dev_mode__version',version);
// }
window.RTK_STYLE_VER = version;
VueRtStyle.version = version;

export default VueRtStyle;
