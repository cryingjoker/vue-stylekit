<!--<template>-->
<!---->

<rt-switch
  :checked="isDarkTheme"
  class="dark-theme-switcher"
  @change="switchTheme">Dark theme
</rt-switch>
<!--</template>-->

<script type="text/jsx">
  import componentsMenu from "./componentsMenu.json";
  import VueRtStyle from "../../lib/index";
  import componentsList from "../componentsList";
  import RtInput from "../../lib/components/Input/Input.vue";

  export default {
    name: "AppMenu",
    components: { RtInput },
    props: {
      showMenu: {
        type: Boolean,
        default: false
      },
      showGrid: {
        type: Boolean,
        default: false
      },
      codeViewer: {
        type: Boolean,
        default: false
      },
      codeViewerToggle: {
        type: Function,
        default: () => {
        }
      },
      gridToggle: {
        type: Function,
        default: () => {
        }
      }
    },
    data: () => ({
      showMenuLocal: false,
      preUrl: "",
      menuIsDisabled: false,
      searchValue: ""
    }),
    watch: {
      showMenu: function(newVal, oldVal) {
        if (!this.menuIsDisabled) {
          this.showMenuLocal = newVal;
        }
      }
    },
    mounted() {
      this.preUrl = location.protocol.search("https") >= 0 ? "/vue-stylekit/docs" : "";
    },
    methods: {
      changeSearchParams(e) {
        this.searchValue = this.$refs.input.$refs.input.value;
      },
      checkKeydown(e){
        if(e.keyCode === 27){
          this.$refs.input.$refs.input.value = '';
          this.$refs.input.$refs.input.dispatchEvent(new Event('input'));
        }
      }
    },
    render() {

      const renderList = (itemList) => itemList.filter((item) => {
        const reg = new RegExp(this.searchValue, "gi");
        let hasFound = false;
        if(this.searchValue.length === 0){
          hasFound = true;
        }else {
          if (item.list_child && item.list_child.length > 0) {
            hasFound = item.list_child.filter(subitem => subitem.title.search(reg) >= 0).length > 0
          } else {
            hasFound = item.title.search(reg) >= 0
          }
        }
        return hasFound;
      }).map((item) => {
        const content = (item) => {

          if (item) {
            if (item["list_child"] && item["list_child"].length > 0) {
              return <div class="aside-menu__item">
                <p class="aside-menu__submenu-title">{item.title}</p>
                <div class="aside-sub-menu">
                  {renderList(item["list_child"])}
                </div>
              </div>;
            } else {
              return <router-link
                class="aside-menu__item"
                active-class="aside-menu__item--active"
                to={this.preUrl + item.url}>
                <span class="aside-menu__link">{item.title}</span>
              </router-link>;
            }
          }
        };
        return content(item);
      });


      return <div class="app-aside-menu rt-dark-theme">
        <div class="app-aside-menu__wrapper">
          <div class="app-aside-menu__inner">
            <div class="rt-space-horizontal rt-space-top05">
              <rt-logo
                width="18px"
                english-theme="true"
                show-text="true"
                color="#ffffff"
                height="32px"
              />
            </div>


            <div class="rt-space-top rt-md-space-top25">
              <div class="rt-space-horizontal rt-space-bottom app-aside-menu__search">
                <rt-input ref="input" placeholder="Seacrh" onInput={this.changeSearchParams} onKeydown={this.checkKeydown}></rt-input>
              </div>
            </div>
          </div>
        </div>
      </div>;
    }
  };
</script>
