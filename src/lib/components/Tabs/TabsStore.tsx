import Vue from "vue";

const setActiveTabName = (tabsName:string, tabAnchore:string = '', dontResize:boolean = false) => {
  const parentId = tabsStore.tabsNames[tabsName];
  const parentArray = tabsStore.tabsParents[parentId];
  for(let key in parentArray){
    parentArray[key].isActive = false;
  }
  parentArray[tabsName].isActive = true;
  if(!dontResize) {
    window.dispatchEvent(new Event("resize"));
  }
  if (tabAnchore.length > 0) {
    window.history.replaceState(undefined, undefined, "#" + tabAnchore);
  }
  runWatchers();
};
const runWatchers = ()=>{
  for (let fnIndex in tabsStore.watcherFunction) {
    tabsStore.watcherFunction[fnIndex]();
  }
}
const addTabUuid = (tabsContainerId: number, tabsName: string) => {


  if (!tabsStore.tabsParents[tabsContainerId]) {
    tabsStore.tabsParents[tabsContainerId] = {};
    if(tabsStore.tabsParents[tabsContainerId][tabsName]){
      console.error('tabs name must be unique')
    }else {
      tabsStore.tabsParents[tabsContainerId][tabsName] = { isActive: true };
    }
  } else {
    tabsStore.tabsParents[tabsContainerId][tabsName] = { isActive: false };
  }
  tabsStore.tabsNames[tabsName] = tabsContainerId;
  runWatchers();
};
const addWatcher = (fn) => {
  tabsStore.watcherFunction.push(fn);
};
export const tabsStore = Vue.observable({
  setActiveTabName: setActiveTabName,
  addTabUuid: addTabUuid,
  tabsParents: {},
  tabsNames: {},
  addWatcher: addWatcher,
  watcherFunction: []

});
