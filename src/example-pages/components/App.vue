<!--<rt-switch-->
  <!--:checked="isDarkTheme"-->
  <!--class="dark-theme-switcher"-->
  <!--@change="switchTheme"-->
<!--&gt;-->
  <!--Dark theme-->
<!--</rt-switch>-->
<template>

  <div
    v-rt-swipe-left="closeMenu"
    v-rt-swipe-right="openMenu"
    :class="{ 'app--hide-scroll': showMenu }"
    class="app"
  >

    <div class="app-wrapper" :class="{'show-b2c': siteStatus === 'b2c','show-b2b': siteStatus === 'b2b', 'show-b2c show-b2b': siteStatus === 'joint'}">
      <keep-alive>
        <app-menu
          :show-menu="showMenu"
          :code-viewer-toggle="codeViewerToggle"
          :code-viewer="codeViewer"
          :show-grid="showGrid"
          :grid-toggle="gridToggle"
        />
      </keep-alive>

      <div class="app__content">

        <div :class="{ 'grid--active': showGrid }" class="grid app-container rt-container">
          <div class="rt-col-12">
          <div class="row">
            <div class="rt-col-1 rt-col-td-1 rt-col-md-1 demo-col"/>
            <div class="rt-col-1 rt-col-td-1 rt-col-md-1 demo-col"/>
            <div class="rt-col-1 rt-col-td-1 rt-col-md-1 demo-col"/>
            <div class="rt-col-1 rt-col-td-1 demo-col md-d-none"/>
            <div class="rt-col-1 rt-col-td-1 demo-col md-d-none"/>
            <div class="rt-col-1 rt-col-td-1 demo-col md-d-none"/>
            <div class="rt-col-1 demo-col md-d-none td-d-none"/>
            <div class="rt-col-1 demo-col md-d-none td-d-none"/>
            <div class="rt-col-1 demo-col md-d-none td-d-none"/>
            <div class="rt-col-1 demo-col md-d-none td-d-none"/>
            <div class="rt-col-1 demo-col md-d-none td-d-none"/>
            <div class="rt-col-1 demo-col md-d-none td-d-none"/>
          </div>
          </div>
        </div>
        <header class="app-header">
          <div class="app-header__left-panel">
            <div class="app-menu-trigger" @click="openMenu">
              <div class="app-menu-trigger__line"></div>
            </div>
            <div class="rt-tabs-navigation">
            <div class="rt-tabs-navigation__item" :class="{'rt-tabs-navigation__item--is-active':siteStatus === 'joint'}"><button @click="setJoinStatus()" class="rt-tabs-navigation__item-name">Joint</button></div>
            <div class="rt-tabs-navigation__item" :class="{'rt-tabs-navigation__item--is-active':siteStatus === 'b2b'}"><button @click="setB2BStatus()" class="rt-tabs-navigation__item-name">B2B</button></div>
            <div class="rt-tabs-navigation__item" :class="{'rt-tabs-navigation__item--is-active':siteStatus === 'b2c'}"><button @click="setB2CStatus()" class="rt-tabs-navigation__item-name">B2C</button></div>
            </div>
          </div>
          <div class="app-header__right-panel d-flex rt-dark-theme">
            <div :class="{'rt-tag--is-active' : showGrid}" class="rt-tag" @click="gridToggle">Grid</div>
            <div :class="{'rt-tag--is-active' : isDarkTheme}" class="rt-tag" @click="switchTheme">Dark mode</div>
            <div :class="{'rt-tag--is-active' : codeViewer}" class="rt-tag" @click="codeViewerToggle">Edit</div>
          </div>
        </header>



        <router-view/>

      </div>
    </div>
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
      isDarkTheme: false,
      codeViewer: false,
      siteStatus: "joint"
    }),
    watch: {
      $route(to, from) {
        setTimeout(function() {
          fixSectionChange();
        }, 50);
      }
    },
    created() {
      if (this.$route.path.search("promo") >= 0) {
        this.isPromo = true;
      }
    },
    mounted() {
      if (!!+localStorage.getItem("rt-dark")) {
        document.body.classList.add("rt-dark-theme");

        this.isDarkTheme = true;
      }
      if (!!+localStorage.getItem("rt-code-viewer")) {
        document.body.classList.add("rt-code-viewer");
        this.codeViewer = true;
      }
      const menuTrigger = document.querySelector(".app-menu-trigger");
      const appWrapper = document.querySelector(".app");
      ;
      menuTrigger.addEventListener("click", () => {
        if (appWrapper.classList.contains("app--has-open-menu")) {
          appWrapper.classList.remove("app--has-open-menu");
        } else {
          appWrapper.classList.add("app--has-open-menu");
        }
      });
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
      codeViewerToggle(event) {
        const isChecked = !this.codeViewer;

        if (isChecked) {
          localStorage.setItem("rt-code-viewer", 1);
          document.body.classList.add("rt-code-viewer");
        } else {
          localStorage.setItem("rt-code-viewer", 0);
          document.body.classList.remove("rt-code-viewer");
        }
        this.codeViewer = isChecked;
      },

      switchTheme(event) {
        const isChecked = !this.isDarkTheme;
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
      },
      setB2BStatus(){
        this.siteStatus = 'b2b'
      },
      setB2CStatus(){
        this.siteStatus = 'b2c'
      },
      setJoinStatus(){
        this.siteStatus = 'joint'
      },

    }
  };

</script>
