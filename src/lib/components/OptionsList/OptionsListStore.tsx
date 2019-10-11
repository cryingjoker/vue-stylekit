import Vue from "vue";

const optionsListArray = [];
const optionsListStatuses = {};
let hasHash: boolean = false;
const setOptionsListArray = (id: number | string, hash?: string, needSave?: boolean, closeOther?: boolean) => {

  if (optionsListArray.indexOf(id) < 0) {
    optionsListArray.push(optionsListArray);
    optionsListStatuses[id] = {
      isActive: false,
      watchers: [],
      hash: hash,
      needSave: needSave,
      closeOther: closeOther
    };
    if (hash) {
      if(!hasHash) {
        hasHash = true;
      }
    }

  }
};


const addWatcher = (id: number | string, fn: void) => {
  optionsListStatuses[id].watchers.push(fn);
  const needSave = optionsListStatuses[id].needSave
  if (needSave) {
    getLocalStatus(id);
  }
  if(optionsListStatuses[id].hash){
    if(optionsListStatuses[id].hash === document.location.hash.replace('#','')){
      optionsListStatuses[id].isActive = true;
      runWatcher(id);
    }
  }
};

const runWatcher = (id: number | string) => {

  const watchers = optionsListStatuses[id].watchers;
  for (let wKey in watchers) {
    console.info('runWatcher',id,optionsListStatuses[id])
    watchers[wKey]();
  }
};

const saveToLocalStorage = (id: number | string, status: boolean) => {

  let rtSettings: any = localStorage.getItem("rt-settings");
  if(!rtSettings){
    rtSettings = {}
  }else {
    rtSettings = JSON.parse(rtSettings);
  }
  if (!rtSettings.optionContent) {
    rtSettings.optionContent = {};
  }
  rtSettings.optionContent[id] = status;
  localStorage.setItem("rt-settings", JSON.stringify( rtSettings));
};

const getLocalStatus = (id: number | string) => {

  let rtSettings: any = localStorage.getItem("rt-settings");
  if (rtSettings) {
    rtSettings = JSON.parse(rtSettings);
    if (rtSettings.optionContent) {
      if (rtSettings.optionContent[id]) {
        optionsListStatuses[id].isActive = rtSettings.optionContent[id];
        runWatcher(id);
      }
    }
  }
};

const changeStatus = (id: number | string, status?: boolean) => {

  const closeOther = optionsListStatuses[id].closeOther;
  const needSave = optionsListStatuses[id].needSave;
  if (typeof status === "boolean") {
    optionsListStatuses[id].isActive = status;
  } else {
    optionsListStatuses[id].isActive = !optionsListStatuses[id].isActive;
  }

  console.info('optionsListStatuses',id,optionsListStatuses[id]);

  if (needSave) {
    saveToLocalStorage(id, optionsListStatuses[id].isActive);
  }
  if (hasHash) {
    if (optionsListStatuses[id].hash) {
      document.location.hash = optionsListStatuses[id].hash;
    } else {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }
  if(closeOther && optionsListStatuses[id].isActive){
    const keys = Object.keys(optionsListStatuses);
    for(let indexKey in keys){
      if(keys[indexKey] !== id && optionsListStatuses[keys[indexKey]] && optionsListStatuses[keys[indexKey]].isActive) {
        optionsListStatuses[keys[indexKey]].isActive = false;
        if(optionsListStatuses[keys[indexKey]].needSave){
          saveToLocalStorage(keys[indexKey], optionsListStatuses[keys[indexKey]].isActive);
        }
        runWatcher(keys[indexKey]);
      }
    }
  }
  runWatcher(id);
};

const getOptionStatus = (id: number | string) => {

  return optionsListStatuses[id];
};

export const optionsListStore = Vue.observable({

  addInListArray: setOptionsListArray,
  getStatus: getOptionStatus,
  changeStatus: changeStatus,
  addWatcher: addWatcher

});
