<template>

  <div>
    <div class="color-block--promo-dark-blue" >
      <rt-scroll-tabs class="rt-tab-header " active-tabs-classname="rt-tab-header__item--active" tabs-classname="rt-tab-header__item">
        <div class="rt-container color-white">
          <div class="rt-col-12">
          <div class="row">
            <div class="rt-col-8">
              <div class="rt-tab-nav">
                <a class="rt-tab-header__item" href="#about">О системе</a>
                <a class="rt-tab-header__item" href="#two">Устройства</a>
                <a class="rt-tab-header__item" href="#three">Подключение и управление</a>
              </div>
            </div>
            <div class="rt-col-4 flex-end-right">
              <rt-button class="rt-button-small rt-button-orange rt-space-horizontal">Купить</rt-button>
            </div>
          </div>
          </div>
        </div>
      </rt-scroll-tabs>
    </div>
    <rt-banner :is-fullscreen-image="true">
      <rt-banner-item background-image="/images/smartHouse/bg.png"
                      background-color="none"
      >
        <p class="rt-font-banner-label">
          <span class="rt-font-line-white rt-space-horizontal05 rt-space-vertical">Умный   дом</span>
        </p>
        <p class="">
          <span class="rt-space-top rt-space-bottom15 rt-font-line-white rt-space-horizontal ">
          Ваш дом всегда под контролем,  даже когда вы далеко.
          </span>
        </p>
        <rt-button class="rt-button-orange">Подключить</rt-button>
        <rt-button class="rt-button-orange">Войти</rt-button>
      </rt-banner-item>
    </rt-banner>
  </div>
</template>


<script>
import { Card } from "@/components/complex-elements"
import { Button, ScrollTabs } from "@/components/main-elements"
import {Banner, BannerItem} from "@/components/experimental-elements"

const componentsList = {}

componentsList[Card.name] = Card;
componentsList[Button.name] = Button;
componentsList[ScrollTabs.name] = ScrollTabs;
componentsList[Banner.name] = Banner;
componentsList[BannerItem.name] = BannerItem;


export default {
  name: "AppRadioButton",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
}
</script>
