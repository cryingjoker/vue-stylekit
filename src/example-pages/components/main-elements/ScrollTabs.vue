<template>
  <div class="rt-container">
    <div class="app-content">

      <div class="rt-col-12 rt-col-td-6 rt-col-md-3">
        <div class="app-title"><h1 class="rt-font-hero">Scroll tabs</h1></div>
      </div>

    </div>
    <div class="app-content  rt-col-12 rt-col-md-3">

      <pre-code
        text='<div>
      <div
        class="color-block--red color-white rt-space-horizontal sticked app-sticked"
      >
        <rt-scroll-tabs
          :has-fixed-js-node="true"
          class="rt-contaner rt-scroll-tab-header"
          active-tabs-classname="rt-scroll-tab-header__item--active"
          tabs-classname="rt-scroll-tab-header__item"
          :top-padding="40"
        >
          <div class="rt-scroll-tab-nav">
            <a class="rt-scroll-tab-header__item" href="#one">один</a>
            <a class="rt-scroll-tab-header__item" href="#two">два</a>
            <a class="rt-scroll-tab-header__item" href="#three">три</a>
            <a class="rt-scroll-tab-header__item" href="#four">четыре</a>
          </div>
        </rt-scroll-tabs>
      </div>
      <div id="one" class="color-block--orange" style="height: 100vh" >
      </div>
      <div
        id="two"
        class="color-block--pink"
        style="height: 100vh; margin-top: 800px"
      >
        <div
          class="color-block--yellow rt-animate-opacity rt-space-horizontal sticked app-sticked"
        >
          <rt-scroll-tabs
            :hide-if-not-in-viewport="true"
            :has-fixed-js-node="true"
            class="rt-contaner rt-scroll-tab-header"
            active-tabs-classname="rt-scroll-tab-header__item--active"
            tabs-classname="rt-scroll-tab-header__item"
            :top-padding="40"
          >
            <div class="rt-scroll-tab-nav">
              <a class="rt-scroll-tab-header__item" href="#one">one</a>
              <a class="rt-scroll-tab-header__item" href="#two">two</a>
              <a class="rt-scroll-tab-header__item" href="#three">three</a>
              <a class="rt-scroll-tab-header__item" href="#four">four</a>
            </div>
          </rt-scroll-tabs>
        </div>
      </div>
      <div id="three" class="color-block--red" style="height: 100vh" >
        <div
          class="color-block--dark-blue color-white rt-space-horizontal rt-animate-opacity sticked app-sticked"
        >
        <rt-scroll-tabs
          :hide-if-not-in-viewport="true"
          :has-fixed-js-node="true"
          class="rt-contaner rt-scroll-tab-header"
          active-tabs-classname="rt-scroll-tab-header__item--active"
          tabs-classname="rt-scroll-tab-header__item"
          :top-padding="40"
        >
          <div class="rt-scroll-tab-nav">
            <a class="rt-scroll-tab-header__item" href="#one">1</a>
            <a class="rt-scroll-tab-header__item" href="#two">2</a>
            <a class="rt-scroll-tab-header__item" href="#three">3</a>
            <a class="rt-scroll-tab-header__item" href="#four">4</a>
          </div>
        </rt-scroll-tabs>
        </div>
      </div>
      <div id="four" class="color-block--purple" style="height: 100vh" >
        <div
          class="color-block--white rt-space-horizontal rt-animate-opacity sticked app-sticked"
        >
          <rt-scroll-tabs
            :hide-if-not-in-viewport="true"
            :has-fixed-js-node="true"
            class="rt-contaner rt-scroll-tab-header"
            active-tabs-classname="rt-scroll-tab-header__item--active"
            tabs-classname="rt-scroll-tab-header__item"
            :top-padding="40"
          >
            <div class="rt-scroll-tab-nav">
              <a class="rt-scroll-tab-header__item" href="#one">one</a>
              <a class="rt-scroll-tab-header__item" href="#two">two</a>
              <a class="rt-scroll-tab-header__item" href="#three">three</a>
              <a class="rt-scroll-tab-header__item" href="#four">four</a>
            </div>
          </rt-scroll-tabs>
        </div>
      </div>
      </div>'></pre-code>
      <div class="rt-space-top25">
        <documentation-builder :json="documentation" type="components"/>
      </div>
    </div>
  </div>
</template>
<script>
  import documentation from "../../../lib/components/ScrollTabs/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};
  export default {
    name: "AppTypography",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {}
  };
</script>
