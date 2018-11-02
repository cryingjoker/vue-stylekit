<template>
  <div class="rt-container">
    <div class="app-content  rt-col-12 rt-col-md-3">
      <div class="color-block--dark-blue color-white rt-space-horizontal sticked app-sticked">
        <rt-scroll-tabs class="rt-contaner rt-scroll-tab-header" active-tabs-classname="rt-scroll-tab-header__item--active" tabs-classname="rt-scroll-tab-header__item">
          <div class="rt-scroll-tab-nav">
            <a class="rt-scroll-tab-header__item" href="#one">one</a>
            <a class="rt-scroll-tab-header__item" href="#two">two</a>
            <a class="rt-scroll-tab-header__item" href="#three">three</a>
            <a class="rt-scroll-tab-header__item" href="#four">four</a>
          </div>
        </rt-scroll-tabs>
      </div>
      <div id="one" class="color-block--orange" style="height: 100vh" />
      <div id="two" class="color-block--pink" style="height: 100vh; margin-top: 800px" />
      <div id="three" class="color-block--red" style="height: 100vh" />
      <div id="four" class="color-block--purple" style="height: 100vh" />
    </div>
  </div>
</template>
<script>
import componentsList from "../../componentsList";
// const componentsList = {};
export default {
  name: "AppTypography",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
