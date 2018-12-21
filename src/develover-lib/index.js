import Vue from "vue";
// import styles from './css/vue-rt-style-develop.less';
// import mainStyles from './css/vue-rt-style-develop.less';
import {
  PreComponent,
  PreComponentEditor,
  DocumentationBuilder
} from "./components";

// import VueRtStyle from '../lib'

const VueRtDevStyle = {
  install(Vue, config) {
    Vue.component(PreComponent.name, PreComponent);
    Vue.component(PreComponentEditor.name, PreComponentEditor);
    Vue.component(DocumentationBuilder.name, DocumentationBuilder);
    Vue.directive("validate", DocumentationBuilder);
  }
};

const version = "0.0.33";
VueRtDevStyle.version = version;

export default VueRtDevStyle;
