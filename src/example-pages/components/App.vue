<template>
  <div
    v-rt-swipe-left="closeMenu"
    v-rt-swipe-right="openMenu"
    :class="{ 'app--hide-scroll': showMenu }"
    class="app"
  >
    <div class="menu-trigger md-d-block d-none" @click="openMenu">Menu</div>

    <div :class="{ 'grid--active': showGrid }" class="grid">
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
    <keep-alive>
      <app-menu :show-menu="showMenu"
                :code-viewer-toggle="codeViewerToggle"
                :code-viewer="codeViewer"
                :show-grid="showGrid"
                :grid-toggle="gridToggle"
      >

      </app-menu>
      <div class="aside-menu">

        <div class="row">
          <div class="d-flex">
            <rt-switch
              :checked="codeViewer"
              class="code-switcher"
              @change="codeViewerToggle"
            >Show code viewer
            </rt-switch>
          </div>
          <div class="d-flex">
            <rt-switch
              :checked="showGrid"
              class="grid-switcher"
              @change="gridToggle"
            >Grid
            </rt-switch>
          </div>
        </div>

        <div class="aside-menu__item rt-space-top3">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/colors"
          >
            Colors
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/logo"
          >
            Logo
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/buttons"
          >
            Buttons
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/typography"
          >
            Typography
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/grid"
          >
            Grid class elements
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/space"
          >
            Space class elements
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/row-list"
          >
            Row list
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/inline-dropdown"
          >
            Inline dropdown
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/annotation"
          >
            Annotation
          </router-link>
        </div>
        <!-- <div class="aside-menu__item" to="/color">Color list</div> -->
        <div class="aside-menu__item">
          <p class="aside-menu__submenu-title">Forms</p>
          <div class="aside-sub-menu">
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/checkbox"
              >Checkbox
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/radiobutton"
              >Radiobutton
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/switch"
              >
                Switch
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/input"
              >
                Input
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/textarea"
              >Textarea
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/select"
              >
                Select
              </router-link>
            </div>

          </div>
          <div class="aside-menu__item">
            <router-link
              class="aside-menu__link"
              active-class="aside-menu__link--active"
              to="/list"
            >List elements
            </router-link>
          </div>
          <div class="aside-menu__item">
            <router-link
              class="aside-menu__link"
              active-class="aside-menu__link--active"
              to="/scroll-tabs"
            >Scroll Tabs
            </router-link>
          </div>
        </div>
        <div class="aside-menu__item">
          <div class="aside-menu__item">
            <router-link
              class="aside-menu__link"
              active-class="aside-menu__link--active"
              to="/tags"
            >Tags
            </router-link>
          </div>
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/color-line-text"
          >Color Line Text
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/spinner"
          >
            Spinner
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/price"
          >Price
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/tabs"
          >Tabs
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/table"
          >Table
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/fullscreen"
          >Fullscreen Image
          </router-link>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/download-content"
          >Download content
          </router-link>
        </div>
        <div class="aside-menu__item">
          <p class="aside-menu__submenu-title">Complex elements</p>
          <div class="aside-sub-menu">
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/cards"
              >
                Card
              </router-link>
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/cards-with-forms"
              >
                Cards with forms
              </router-link>
            </div>
          </div>
        </div>
        <div class="aside-menu__item">
          <p class="aside-menu__submenu-title">Experiment elements</p>
          <div class="aside-sub-menu">
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/youtube"
              >
                Youtube player
              </router-link>
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/filter"
              >
                Filters
              </router-link>
            </div>
          </div>
        </div>
        <div class="aside-menu__item">
          <router-link
            class="aside-menu__link"
            active-class="aside-menu__link--active"
            to="/banners"
          >
            Banners
          </router-link>
        </div>
        <div class="aside-menu__item">
          <p class="aside-menu__submenu-title">Promo pages</p>
          <div class="aside-sub-menu">
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/promo/tv"
              >
                Tv
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/promo/homeinternet"
              >
                Home Internet
              </router-link>
            </div>
            <div class="aside-menu__item">
              <router-link
                class="aside-menu__link"
                active-class="aside-menu__link--active"
                to="/promo/game"
              >
                Game
              </router-link>
            </div>
          </div>
        </div>
        <!-- <div class="aside-menu__item"> -->
        <!--
          <router-link class="aside-menu__link" active-class="aside-menu__link&#45;&#45;active" to="/icons">Icons
        -->
        <!-- </router-link> -->
        <!-- </div> -->
      </div>
    </keep-alive>

    <router-view/>
    <div class="section-switcher">
      <rt-radio-button name="b-section" value="b2b" @change="changeSection">B2B</rt-radio-button>
      <rt-radio-button name="b-section" value="b2c" @change="changeSection">B2C</rt-radio-button>
      <rt-radio-button name="b-section" value="joint" @change="changeSection">Joint</rt-radio-button>
    </div>
    <rt-switch
      :checked="isDarkTheme"
      class="dark-theme-switcher"
      @change="switchTheme"
    >Dark theme
    </rt-switch>

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
      codeViewer: false
    }),
    watch: {
      $route(to, from) {
        this.showMenu = false;
        setTimeout(function() {
          fixSectionChange();
        },50);
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
        const isChecked = event.target.checked;

        if(isChecked){
          localStorage.setItem("rt-code-viewer", 1);
          document.body.classList.add("rt-code-viewer");
        }else{
          localStorage.setItem("rt-code-viewer", 0);
          document.body.classList.remove("rt-code-viewer");
        }
        this.codeViewer = isChecked;
      },

      switchTheme(event) {
        const isChecked = event.target.checked;
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

      changeSection(value) {
        switch(value) {
          case 'b2b':
            document.body.classList.remove('show-b2c');
            document.body.classList.add('show-b2b');
            break;
          case 'b2c':
            document.body.classList.remove('show-b2b');
            document.body.classList.add('show-b2c');
            break;
          case 'joint':
            document.body.classList.add('show-b2c','show-b2b');
            break;
        }
      }
    }
  };

  window.onload = function(){
    let buttons = document.querySelector('.section-switcher').getElementsByClassName('radio-button-element');
    for(let i = 0; i < buttons.length; i++) {
      if(buttons[i].getAttribute('value') === 'joint') {
        buttons[i].click();
      }
    }
  };

  function fixSectionChange() {
    let buttons = document.querySelector('.section-switcher').getElementsByClassName('radio-button-element');
    if(document.body.classList.contains('show-b2b')) {
      if(document.body.classList.contains('show-b2c')){
        let searchedValue = 'joint';
        detectButtons(searchedValue);
      } else {
        let searchedValue = 'b2b';
        detectButtons(searchedValue);
      }
    } else if(document.body.classList.contains('show-b2c')) {
      let searchedValue = 'b2c';
      detectButtons(searchedValue);
    }

    function detectButtons(value) {
      for(let i = 0; i < buttons.length; i++) {
        if(buttons[i].getAttribute('value') === value) {
          buttons[i].click();
        }
      }
    }
  }


</script>
