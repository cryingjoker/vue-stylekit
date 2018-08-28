<template>
<div class="app">
    <keep-alive>
      <ul class="aside-menu">
        <li class="aside-menu__item">
          <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="buttons">Buttons</router-link>
        </li>
        <!--<li class="aside-menu__item" to="color">Color list</li>-->
        <li class="aside-menu__item"></li>
        <li class="aside-menu__item">
            <p class="aside-menu__submenu-title">Forms</p>
            <ul class="aside-menu">
                <li class="aside-menu__item">
                    <router-link class="aside-menu__link" active-class="aside-menu__link--active" to="checkbox">Checkbox</router-link>
                </li>
            </ul>
        </li>
        <li class="aside-menu__item"></li>
      </ul>
    </keep-alive>

    <router-view></router-view>


</div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
  mounted() {},
  created() {}
};
</script>
