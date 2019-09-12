import Vue from "vue";

const optionsListArray = [];
const optionsListStatuses = {};

const setOptionsListArray = (id:number)=>{
  if(optionsListArray.indexOf(id) < 0){
    optionsListArray.push(optionsListArray);
    optionsListStatuses[id] = {
      isActive: false,
      watchers: []
    }
  }
};
const addWatcher = (id: number, fn:void)=>{
  optionsListStatuses[id].watchers.push(fn);
}
const runWatcher = (id: number)=>{
  const watchers = optionsListStatuses[id].watchers;
  for(let wKey in watchers){
    watchers[wKey]();
  }
}
const changeStatus = (id:number, status?: boolean)=>{
  if(typeof status === 'boolean'){
    optionsListStatuses[id].isActive = status;
  }else{
    optionsListStatuses[id].isActive = !optionsListStatuses[id].isActive;
  }
  runWatcher(id);
}

const getOptionStatus = (id:number)=>{
  return optionsListStatuses[id];
}
export const optionsListStore = Vue.observable({

  addInListArray: setOptionsListArray,
  getStatus: getOptionStatus,
  changeStatus: changeStatus,
  addWatcher: addWatcher

});
