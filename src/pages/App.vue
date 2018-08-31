<template>
<div class="app container d-flex flex-row">
    <keep-alive>
      <ul class="aside-menu col-2">
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
            </ul>
        </li>
        <li class="aside-menu__item"></li>
      </ul>
    </keep-alive>

    <router-view></router-view>
    <rt-switch @input="switchTheme" class="dark-theme-switcher">Dark theme</rt-switch>

</div>
</template>

<script>
    import {Switch} from '../components/Switch';
    const componentsList = {};
    componentsList[Switch.name] = Switch;

export default {
  name: "App",
  components: componentsList,
  methods: {
      switchTheme(isChecked){
          const bodyClassList = document.body.classList.value.split(' ');
          console.info('bodyClassList',bodyClassList)
          if(isChecked){
              bodyClassList.push('rt-dark-theme');
          }else{
              bodyClassList.splice(bodyClassList.indexOf('rt-dark-theme'),1);
          }
          document.body.classList = bodyClassList.join(' ');
      }
  },
  mounted() {},
  created() {}
};
</script>
