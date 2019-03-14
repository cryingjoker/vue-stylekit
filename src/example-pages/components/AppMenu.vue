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


export default {
  name: "AppMenu",

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
      menuIsDisabled: false

    }),

  watch: {
    showMenu: function(newVal, oldVal) {
      if(!this.menuIsDisabled) {
        this.showMenuLocal = newVal;
      }
    }
  },
  mounted() {
    this.preUrl = location.protocol.search("https") >= 0 ? "/vue-stylekit/docs" : "";
    document.querySelector(".aside-menu").addEventListener("mouseenter", (item) => {
      this.showMenuLocal = true;
    });
    document.querySelector(".aside-menu").addEventListener("mouseleave", (item) => {
      this.showMenuLocal = false;
    });
    document.querySelectorAll(".aside-menu__link").forEach((item) => {
      item.addEventListener("click", () => {
        this.disableMenu();
      });
    });

  },
  methods: {
    disableMenu() {
      this.showMenuLocal = false;
      this.menuIsDisabled = true;
      setTimeout(() => {
        this.menuIsDisabled = false;
      }, 500);
    }
  },
  render() {

    const renderList = (itemList) => itemList.map((item) => {
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


    return <div class={"aside-menu" + (this.showMenuLocal ? " aside-menu--active" : "")}>

      <div class="aside-menu__item">
        <div class="row">
          <div class="d-flex">
            <rt-switch
              checked={this.codeViewer}
              class="code-switcher"
              onChange={this.codeViewerToggle}
            >Show code viewer
            </rt-switch>
          </div>
          <div class="d-flex">
            <rt-switch
              checked={this.showGrid}
              class="grid-switcher"
              onChange={this.gridToggle}
            >Grid
            </rt-switch>
          </div>
        </div>
      </div>

      <div class="rt-space-top3">
        {renderList(componentsMenu.list)}
      </div>
    </div>;
  }
};
</script>
