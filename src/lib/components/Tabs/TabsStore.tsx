import Vue from "vue";

const setActiveTabName = (name: string, hashAnchor: string = null) => {
  tabsStore.activeName = name;
  window.dispatchEvent(new Event("resize"));
  if (hashAnchor) {
    window.history.replaceState(undefined, undefined, "#" + hashAnchor);
  }
};
const addTabName = (name: string) => {
  if (tabsStore.namesArray.length === 0) {
    setActiveTabName(name);
  }
  tabsStore.namesArray.push(name);
};

export const tabsStore = Vue.observable({
  activeName: "",
  setActiveTabName: setActiveTabName,
  addTabName: addTabName,
  namesArray: []
});
