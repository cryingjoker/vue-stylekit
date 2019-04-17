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
      changeSearchParams(searchValue) {
        this.searchValue = searchValue;
      }
    },
    render() {

      const renderList = (itemList) => itemList.filter((item) => {
        const reg = new RegExp(this.searchValue, "gi");
        return this.searchValue.length === 0 || item.title.search(reg) >= 0;
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
              return <div class="aside-menu__item">
                <router-link
                  class="aside-menu__link"
                  active-class="aside-menu__link--active"
                  to={this.preUrl + item.url}
                >
                  {item.title}
                </router-link>
              </div>;
            }
          }
        };
        return content(item);
      });


      return <div class="app-aside-menu rt-dark-theme">
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


        <div class="rt-space-top">
          <div class="rt-space-horizontal rt-space-bottom">
            <rt-input placeholder="Seacrh" onInput={this.changeSearchParams}></rt-input>
          </div>
          {renderList(componentsMenu.list)}
        </div>
        </div>
      </div>;
    }
  };
</script>
