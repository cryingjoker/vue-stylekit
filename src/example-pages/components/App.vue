<template>
  <div class="app" :class="{'app--hide-scroll' : showMenu}">
    <div class="menu-trigger md-d-block d-none" @click="menuTrigger">Menu</div>

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
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/fullscreen">Fullscreen Image
          </router-link>
        </div>
        <div class="aside-menu__item">
          <p class="aside-menu__submenu-title">Complex elements</p>
          <div class="aside-sub-menu">
            <div class="aside-menu__item">
              <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/cards">
                Card
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
                           to="/promo/smart-house"
              >
                Smart House
              </router-link>
            </div>
          </div>
        </div>
        <div class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/icons">Icons
          </router-link>
        </div>
      </div>

    </keep-alive>

    <router-view />
    <rt-switch class="dark-theme-switcher" :checked="isDarkTheme" @change="switchTheme" >Dark theme</rt-switch>

  </div>
</template>

<script>


import componentsList from '../componentsList'
// componentsList[Switch.name] = Switch;

export default {
  name: 'App',
  components: componentsList,
  data: () => ({
    showMenu: false,
    isPromo: false,
    showGrid: false,
    isDarkTheme: false,
  }),
  watch: {
    $route(to, from) {
      this.showMenu = false;
    },
  },
  mounted() {},
  created() {
    if (this.$route.path.search('promo') >= 0) {
      this.isPromo = true;
    }
  },
  methods: {
    menuTrigger() {
      this.showMenu = true;
    },
    gridToggle() {
      this.showGrid = !this.showGrid;
    },

    switchTheme(isChecked) {

      const bodyClassList = document.body.classList.value.split(' ');
      if (isChecked) {
        bodyClassList.push('rt-dark-theme');
        localStorage.setItem('rt-dark',1)
        this.isDarkTheme = true;
      } else {
        bodyClassList.splice(bodyClassList.indexOf('rt-dark-theme'), 1);
        localStorage.setItem('rt-dark',0)
        this.isDarkTheme = false;
      }
      document.body.classList = bodyClassList.join(' ');
    },
  },
  mounted(){
    if(!!+localStorage.getItem('rt-dark')){
      const bodyClassList = document.body.classList.value.split(' ');
      bodyClassList.push('rt-dark-theme');
      document.body.classList = bodyClassList.join(' ');

      this.isDarkTheme = true;
    }
  }
};
</script>
