<template>
    <div class="app" :class="{'app--hide-scroll' : this.showMenu}">
        <div class="menu-trigger md-d-block d-none" @click="menuTrigger">Menu</div>

        <div class="grid" :class="{'grid--active': this.showGrid}">
            <div class="row">
                <div class="rt-col-1 rt-col-md-1 demo-col"/>
                <div class="rt-col-1 rt-col-md-1 demo-col"/>
                <div class="rt-col-1 rt-col-md-1 demo-col"/>
                <div class="rt-col-1 demo-col md-d-none"/>
                <div class="rt-col-1 demo-col md-d-none"/>
                <div class="rt-col-1 demo-col md-d-none"/>
                <div class="rt-col-1 demo-col md-d-none"/>
                <div class="rt-col-1 demo-col md-d-none"/>
                <div class="rt-col-1 demo-col md-d-none"/>
                <div class="rt-col-1 demo-col md-d-none"/>
                <div class="rt-col-1 demo-col md-d-none"/>
                <div class="rt-col-1 demo-col md-d-none"/>
            </div>
        </div>
        <keep-alive>

            <div class="aside-menu" :class="{'aside-menu--active' : this.showMenu}">
                <rt-switch class="grid-switcher" @change="gridToggle">Grid</rt-switch>
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
                <!--<div class="aside-menu__item" to="/color">Color list</div>-->
                <div class="aside-menu__item"/>
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
                    <p class="aside-menu__submenu-title">Complex elements</p>
                    <div class="aside-sub-menu">
                        <div class="aside-menu__item">
                            <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="/cards">
                                Card
                            </router-link>
                        </div>
                        <!--<div class="aside-menu__item">-->
                            <!--<router-link class="aside-menu__link" active-class="aside-menu__link&#45;&#45;active" to="/tariffs">-->
                                <!--Tariff-->
                            <!--</router-link>-->
                        <!--</div>-->
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
                                         to="/promo/tv">
                                Tv
                            </router-link>
                        </div>
                        <div class="aside-menu__item">
                            <router-link class="aside-menu__link" active-class="aside-menu__link--active"
                                         to="/promo/smart-house">
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

        <router-view/>
        <rt-switch class="dark-theme-switcher" @change="switchTheme">Dark theme</rt-switch>

    </div>
</template>

<script>
  import { Switch } from "@/Components/main-elements/Switch";

  const componentsList = {};
  componentsList[Switch.name] = Switch;

  export default {
    name: "App",
    components: componentsList,
    data: () => ({
      showMenu: false,
      isPromo: false,
      showGrid: false
    }),
    watch: {
      $route(to, from) {
        this.showMenu = false;
      }
    },
    mounted() {
    },
    created() {
      if (this.$route.path.search("promo") >= 0) {
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
        const bodyClassList = document.body.classList.value.split(" ");
        if (isChecked) {
          bodyClassList.push("rt-dark-theme");
        } else {
          bodyClassList.splice(bodyClassList.indexOf("rt-dark-theme"), 1);
        }
        document.body.classList = bodyClassList.join(" ");
      }
    }
  };
</script>
