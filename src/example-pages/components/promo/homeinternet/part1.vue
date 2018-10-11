<template>
<div class="color-block--rule-color sticked sticked-block" style="top: 0;">
  <rt-scroll-tabs class="rt-scroll-tab-header " active-tabs-classname="rt-scroll-tab-header__item--active"
                  tabs-classname="rt-scroll-tab-header__item">
    <div class="rt-container color-white">
      <div class="rt-col-12">
        <div class="rt-scroll-tab-nav">
          <a class="rt-scroll-tab-header__item" href="#about">Игровой</a>
          <a class="rt-scroll-tab-header__item" href="#about">Wi-Fi</a>
          <a class="rt-scroll-tab-header__item" href="#about">Антивирусы</a>
          <a class="rt-scroll-tab-header__item" href="#about">Род контроль</a>
          <a class="rt-scroll-tab-header__item" href="#about">Офис 365</a>
          <a class="rt-scroll-tab-header__item" href="#about">Опции</a>
          <a class="rt-scroll-tab-header__item" href="#about">Тарифы</a>
          <a class="rt-scroll-tab-header__item" href="#connect">Подключить</a>
          <div class="rt-scroll-tab-header__item">
            <rt-button class="rt-button-small rt-button-orange rt-space-horizontal">Купить
            </rt-button>
          </div>
        </div>
      </div>
    </div>
  </rt-scroll-tabs>
</div>
</template>
<script>
  import componentsList from "../../../componentsList";
  // const componentsList = {};


  export default {
    name: "homeintehrnetPartScroll",
    components: componentsList,
    mounted() {
    },
    created() {
    },
    methods: {}
  };
</script>
