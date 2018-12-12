<script type="text/jsx">

  export default {
    name: "RtFilterWatcher",
    inject: ["RtFilter"],
    props: {
      options: {
        type: Array,
        default: null
      },
      values: {
        type: Array,
        default: null
      }
    },
    data: () => ({
      index: null,
      selectedProps: {},
      isActive: true,
      valuesList: []
    }),
    created() {
      setTimeout(() => {
        this.setPropsToChildren();
      }, 0);
    },
    mounted() {
      this.setValuesList();
      this.RtFilter.addListener(this.onUpdateProps);
    },
    methods: {
      setValuesList() {
        this.values.forEach((value_item, index) => {
          if (Array.isArray(value_item)) {
            this.valuesList[index] = value_item;
          } else {
            this.valuesList[index] = [value_item];
          }
        });
      },
      checkValue(watcherValue, filterValue) {
        let res = false;
        let typeOfCheck = 0;

        if (watcherValue.search("less than") === 0) {
          typeOfCheck = 1;
        }
        if (watcherValue.search("more than") === 0) {
          typeOfCheck = 2;
        }
        switch (typeOfCheck) {
          case 1:
            res = filterValue - 0 < (watcherValue.replace("less than", "") - 0);
            break;
          case 2:
            res = filterValue - 0 > (watcherValue.replace("less than", "") - 0);
            break;
          default:
            res = filterValue === watcherValue;
            break;
        }
        return res;
      },
      onUpdateProps(props) {
        const importantOptionsMap = {};
        const simpleOptionsMap = {};
        let hasOnlyOption = false;
        this.options.forEach((optionName, optionIndex) => {
          if (this.valuesList[optionIndex]) {
            this.valuesList[optionIndex].forEach((value, valueIndex) => {

              if (value.search(/(only )|(not )/) === 0) {

                importantOptionsMap[optionName] = value;
                if (this.valuesList[optionIndex][valueIndex].search(/(only )/) === 0) {
                  hasOnlyOption = true;
                }
              } else {
                simpleOptionsMap[optionName] = value;
                if (!Array.isArray(simpleOptionsMap[optionName])) {
                  simpleOptionsMap[optionName] = [simpleOptionsMap[optionName]];
                }
              }
            });
          }
        });

        let sendedProps = { ...props };
        let needToBreakFilter = false;

        if (Object.keys(importantOptionsMap).length > 0) {
          this.isActive = true;

          Object.keys(importantOptionsMap).forEach((key) => {
            if (importantOptionsMap[key].search("only ") === 0) {
              if (!sendedProps[key]) {
                needToBreakFilter = true;
                this.isActive = false;
                return false;
              } else {
                const onlyOption = importantOptionsMap[key].replace("only ", "");
                if (sendedProps[key].findIndex((i) => {
                  return i === onlyOption;
                }) < 0) {
                  needToBreakFilter = true;
                  this.isActive = false;
                  return false;
                }
              }
            } else {
              if (importantOptionsMap[key].search("not ") === 0) {
                if (sendedProps[key]) {
                  const notOption = importantOptionsMap[key].replace("not ", "");
                  if (sendedProps[key].findIndex((i) => {
                    return i === notOption;
                  }) >= 0) {
                    needToBreakFilter = true;
                    this.isActive = false;
                    return false;
                  }
                }
              }
            }
            if (needToBreakFilter) {
              return false;
            }
          });
          if (needToBreakFilter) {
            return false;
          }
        }
        if (Object.keys(simpleOptionsMap).length > 0 && this.isActive) {

          Object.keys(simpleOptionsMap).forEach((key) => {
            let hasFound = false;
            if (sendedProps[key]) {
              const sendedPropsValues = Array.isArray(sendedProps[key]) ? sendedProps[key] : [sendedProps[key]];
              hasFound = sendedPropsValues.findIndex((sendedPropsValuesItem) => {
                return simpleOptionsMap[key].findIndex((simpleOptionsMapItem) => {
                  return this.checkValue(simpleOptionsMapItem, sendedPropsValuesItem);
                }) >= 0;
              }) >= 0;

              if (!hasFound) {
                this.isActive = false;
                return false;
              }
            }
            if (needToBreakFilter) {
              return false;
            }
          });
        }
      },
      setPropsToChildren() {
        this.$children.forEach((vNode) => {
          if (vNode && vNode.index !== "undefinded") {
            vNode.$set(vNode, "index", this.index);
          }
        });
      }
    },
    render() {
      if (this.isActive) {
        return <div class="d-static">{this.$slots.default}</div>;
      } else {
        return null;
      }
    }
  };
</script>
