<template>
  <div v-rt-swipe-left="closeMenu" v-rt-swipe-right="openMenu" class="app" :class="{'app--hide-scroll' : showMenu}">
    <div class="menu-trigger md-d-block d-none" @click="openMenu">Menu</div>

    <div class="grid" :class="{'grid--active': showGrid}">
      <div class="row">
        <div class="rt-col-1 rt-col-md-1 demo-col" />
        <div class="rt-col-1 rt-col-md-1 demo-col" />
        <div class="rt-col-1 rt-col-md-1 demo-col" />
        <div class="rt-col-1 demo-col md-d-none" />
        <div class="rt-col-1 demo-col md-d-none" />
        <div class="rt-col-1 demo-col md-d-none" />
        <div class="rt-col-1 demo-col md-d-none" />
        <div class="rt-col-1 demo-col md-d-none" />
        <div class="rt-col-1 demo-col md-d-none" />
        <div class="rt-col-1 demo-col md-d-none" />
        <div class="rt-col-1 demo-col md-d-none" />
        <div class="rt-col-1 demo-col md-d-none" />
      </div>
    </div>
    <keep-alive>

      <div class="aside-menu" :class="{'aside-menu--active' : showMenu}">
        <rt-switch class="grid-switcher" :checked="showGrid" @change="gridToggle">Grid</rt-switch>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/buttons">
            Buttons
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/typography">
            Typography
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/grid">
            Grid class elements
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/space">
            Space class elements
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/row-list">
            Row list
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/inline-dropdown">
            Inline dropdown
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/annotation">
            Annotation
          </router-link>
        </div>
        <!--<div class="aside-menu__item" to="/color">Color list</div>-->
        <div class="aside-menu__item">
          <p class="aside-menu__submenu-title">Forms</p>
          <div class="aside-sub-menu">
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active"
                           to="/checkbox"
              >Checkbox
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active"
                           to="/radiobutton"
              >Radiobutton
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/switch">
                Switch
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/input">
                Input
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active"
                           to="/textarea"
              >Textarea
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/select">
                Select
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active"
                           to="/scroll-tabs"
              >Scroll Tabs
              </router-link>
            </div>

          </div>
        </div>
        <div class="aside-menu__item">
          <div class="aside-menu__item">
            <router-link class="aside-menu__link" active-class="aside-menu__link--active"
                         to="/tags"
            >Tags
            </router-link>
          </div>
          <router-link class="aside-menu__link" active-class="aside-menu__link--active"
                       to="/color-line-text"
          >Color Line Text
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/spinner">
            Spinner
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/price">Price
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/tabs">Tabs
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/table">Table
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/fullscreen">Fullscreen Image
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/download-content">Download content
          </router-link>
        </div>
        <div class="aside-menu__item">
          <p class="aside-menu__submenu-title">Complex elements</p>
          <div class="aside-sub-menu">
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/cards">
                Card
              </router-link>
              <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/cards-with-forms">
                Cards with forms
              </router-link>
            </div>
          </div>
        </div>
        <div class="aside-menu__item">
          <p class="aside-menu__submenu-title">Experiment elements</p>
          <div class="aside-sub-menu">
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/banners">
                Banners
              </router-link>
            </div>
          </div>
        </div>
        <div class="aside-menu__item">
          <p class="aside-menu__submenu-title">Promo pages</p>
          <div class="aside-sub-menu">
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active"
                           to="/promo/tv"
              >
                Tv
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active"
                           to="/promo/homeinternet"
              >
                Home Internet
              </router-link>
            </div>
          </div>
        </div>
        <!--<div class="aside-menu__item">-->
        <!--<router-link class="aside-menu__link" active-class="aside-menu__link&#45;&#45;active" to="/icons">Icons-->
        <!--</router-link>-->
        <!--</div>-->
      </div>

    </keep-alive>

    <router-view />
    <rt-switch class="dark-theme-switcher" :checked="isDarkTheme" @change="switchTheme">Dark theme</rt-switch>

  </div>
</template>

<script>
import VueRtStyle from "../../lib/index";
import componentsList from "../componentsList";
if (window) {
  window.VueRtStyle = {};
  window.VueRtStyle.version = VueRtStyle.version;
}

const componentDirectives = {};

componentDirectives[VueRtStyle.directives.SwipeRight.name] =
  VueRtStyle.directives.SwipeRight;
componentDirectives[VueRtStyle.directives.SwipeLeft.name] =
  VueRtStyle.directives.SwipeLeft;
componentDirectives[VueRtStyle.directives.OutsideClickDirective.name] =
  VueRtStyle.directives.OutsideClickDirective;

export default {
  name: "App",
  components: componentsList,
  directives: componentDirectives,
  data: () => ({
    showMenu: false,
    isPromo: false,
    showGrid: false,
    isDarkTheme: false
  }),
  watch: {
    $route(to, from) {
      this.showMenu = false;
    }
  },
  created() {
    if (this.$route.path.search("promo") >= 0) {
      this.isPromo = true;
    }
  },
  mounted() {
    if (!!+localStorage.getItem("rt-dark")) {
      const bodyClassList = document.body.classList.value.split(" ");
      bodyClassList.push("rt-dark-theme");
      document.body.classList = bodyClassList.join(" ");

      this.isDarkTheme = true;
    }
  },
  methods: {
    openMenu() {
      this.showMenu = true;
    },
    closeMenu() {
      this.showMenu = false;
    },
    gridToggle() {
      this.showGrid = !this.showGrid;
    },

    switchTheme(isChecked) {
      const bodyClassList = document.body.classList.value.split(" ");
      if (isChecked) {
        bodyClassList.push("rt-dark-theme");
        localStorage.setItem("rt-dark", 1);
        this.isDarkTheme = true;
      } else {
        bodyClassList.splice(bodyClassList.indexOf("rt-dark-theme"), 1);
        localStorage.setItem("rt-dark", 0);
        this.isDarkTheme = false;
      }
      document.body.classList = bodyClassList.join(" ");
    }
  },
};
</script>
