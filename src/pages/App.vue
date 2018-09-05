<template>
<div class="app d-flex flex-row" :class="{'app--hide-scroll' : this.showMenu, 'd-none': this.isPromo,'rt-container': !this.isPromo}">
    <div class="menu-trigger mb-d-block d-none" @click="menuTrigger">Menu</div>
    <keep-alive>
      <ul class="aside-menu rt-col-2 rt-col-md-3" :class="{'aside-menu--active' : this.showMenu,'d-none': this.isPromo}">
        <li class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="buttons">Buttons</router-link>
        </li>
        <li class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="typography">Typography</router-link>
        </li>
        <!--<li class="aside-menu__item" to="color">Color list</li>-->
        <li class="aside-menu__item"></li>
        <li class="aside-menu__item">
            <p class="aside-menu__submenu-title">Forms</p>
            <ul class="aside-menu">
                <li class="aside-menu__item">
                    <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="checkbox">Checkbox</router-link>
                </li>
                <li class="aside-menu__item">
                    <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="radiobutton">Radiobutton</router-link>
                </li>
                <li class="aside-menu__item">
                    <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="switch">Switch</router-link>
                </li>
                <li class="aside-menu__item">
                    <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="input">Input</router-link>
                </li>
                <li class="aside-menu__item">
                    <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="textarea">Textarea</router-link>
                </li>
                <li class="aside-menu__item">
                    <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="select">Select</router-link>
                </li>
                <li class="aside-menu__item">
                    <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="spinner">Spinner</router-link>
                </li>
                <li class="aside-menu__item">
                    <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="price">Price</router-link>
                </li>
            </ul>
        </li>
        <li class="aside-menu__item"></li>
      </ul>
    </keep-alive>

    <router-view></router-view>
    <rt-switch @change="switchTheme" class="dark-theme-switcher">Dark theme</rt-switch>

</div>
</template>

<script>
    import {Switch} from '@/Components/main-elements/Switch';
    const componentsList = {};
    componentsList[Switch.name] = Switch;

export default {
  name: "App",
    data:()=>({
        showMenu: false,
        isPromo: false,

    }),
  components: componentsList,
    watch: {
        '$route' (to, from) {
            this.showMenu = false;
        }
    },
  methods: {
      menuTrigger(){
          this.showMenu = true;
      },

      switchTheme(isChecked){
          const bodyClassList = document.body.classList.value.split(' ');
          if(isChecked){
              bodyClassList.push('rt-dark-theme');
          }else{
              bodyClassList.splice(bodyClassList.indexOf('rt-dark-theme'),1);
          }
          document.body.classList = bodyClassList.join(' ');
      }
  },
  mounted() {

  },
  created() {
      if(this.$route.path.search('promo')>=0){
          this.isPromo = true;
      }
  }
};
</script>
