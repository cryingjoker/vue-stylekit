<template>
  <div class="rt-l-game color-block--game-promo-color">

    <rt-banner :sleep-time=30000 :is-fullscreen-image="true" content-height="470px" :is-background-banner="true"
               :has-custom-content="true">
      <rt-banner-item is-game-banner-item
                      contnent-height="470px"
                      background-video="/static/video/Trailer_Warface_Annoucement_20180628_4000.mp4"
                      :is-white-color="true" background-color="dark-state">
      </rt-banner-item>
    </rt-banner>

    <div class="rt-container rt-space-top2">
      <div class="flex-start-center">
        <rt-logo class="rt-layer-level-4 relative d-inline-block" width="56px" height="94px"></rt-logo>
        <div class="rt-layer-level-4 rt-logo-line"></div>
        <rt-logo class="rt-layer-level-4 relative d-inline-block" width="188px" height="90px"
                 type="warface"></rt-logo>
      </div>
      <div class="rt-space-top135 flex-end-center">
        <rt-logo class="rt-layer-level-4 relative d-inline-block promo-wargame-logo" width="300px" height="93px"
                 type="game-logo"></rt-logo>
      </div>
      <div class="rt-space-top25">
        <div class="d-flex">
          <div class="rt-col-6">
            <rt-color-line-text
              fill-color="orange"
              color-icon="white"
              :is-white-color="true"
            >
              <template slot="label">Тариф «Игровой»</template>
              <template slot="content">Подарки и интернет для настоящих <br> игроков Warface</template>
            </rt-color-line-text>
          </div>
          <div class="rt-col-6">
            <rt-price :for-game="true" class="color-white" :value="800" time-interval="сек" currency="Мбит"/>
            <rt-price :bold-option="true" class="color-orange" :for-game="true" :value="800" time-interval="мес."
                      currency="руб."/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="rt-col-5">
          <rt-tabs>
            <template slot="navigation">
              <rt-tabs-nav-item :remove-base-tag="true" class="rt-font-h4 rt-font-left"
                                name="new">Для новых <br>абонентов
              </rt-tabs-nav-item>
              <div class="rt-space-left2">
                <rt-tabs-nav-item :remove-base-tag="true" class="rt-font-h4 rt-font-left"
                                  name="old">Для абонентов <br>Ростелеком
                </rt-tabs-nav-item>
              </div>
            </template>
            <template slot="content">
              <rt-tabs-content-item
                name="new">

                <div class="rt-space-top15">
                  <rt-input placeholder="Как к Вам обращаться"></rt-input>
                </div>
                <div class="rt-space-top">
                  <rt-checkbox name="internet">Я являюсь клиентом Ростелеком</rt-checkbox>
                </div>
                <div class="rt-space-top">
                  <rt-input placeholder="Контактный номер телефона"></rt-input>
                </div>
                <div class="rt-space-top">
                  <rt-input placeholder="Электронная почта"></rt-input>
                </div>
                <div class="rt-space-top3">
                  <p class="rt-font-paragraph color-white07"> Адрес доставки</p>
                </div>
                <div class="rt-space-top">
                  <p class="color-white05 rt-font-small-paragraph">Если у Вас нет аккаунта в Ростелеком, его необходимо
                    <a href="#" class="rt-link">зарегистрировать</a>
                  </p>
                </div>
              </rt-tabs-content-item>
              <rt-tabs-content-item
                name="old">
                <div class="rt-space-top15">
                  <rt-input placeholder="Введите логин от личного кабинета"></rt-input>
                </div>
                <div class="rt-space-top">
                  <rt-input placeholder="Введите пароль от личного кабинета" type="password"></rt-input>
                </div>
                <div class="rt-space-top2">
                  <rt-button class="rt-button-orange">Подключить</rt-button>
                </div>
                <div class="rt-space-top">
                  <rt-checkbox name="internet">У меня уже есть интернет Ростелеком</rt-checkbox>
                </div>
                <div class="rt-space-top">
                  <p class="color-white05 rt-font-small-paragraph">Если у Вас нет аккаунта в Ростелеком, его необходимо
                    <a href="#" class="rt-link">зарегистрировать</a>
                  </p>
                </div>
              </rt-tabs-content-item>



            </template>
          </rt-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const componentsList = {};

  export default {
    name: "AppPromoGame",
    components: componentsList,
    mounted() {
      // document.querySelector('.mobile-checkbox input').addEventListener('change', function() {
      //   const icon = document.querySelector('.mobile-icon');
      //   if(document.querySelector('.mobile-checkbox input').checked){
      //    icon.classList.remove('rt-icon--not-active')
      //   }else{
      //     icon.classList.add('rt-icon--not-active')
      //   }
      // });
      // document.querySelector('.tv-checkbox input').addEventListener('change', function() {
      //   const icon = document.querySelector('.tv-icon');
      //   if(document.querySelector('.tv-checkbox input').checked){
      //     icon.classList.remove('rt-icon--not-active')
      //   }else{
      //     icon.classList.add('rt-icon--not-active')
      //   }
      // });
    },
    created() {
    },
    methods: {}

  };
</script>
<!-- <rt-banner-item -->
<!-- content-mobile-min-height="0" -->
<!-- has-custom-content={true} -->
<!-- background-image="/static/images/game/slide2.jpg" -->
<!-- background-color="dark-state"> -->
<!--
  <div class="flex-fill md-flex-fill-none flex-start-center  md-flex-start-top  md-d-block">
-->
<!-- <div class="row"> -->
<!-- <div class="rt-col-12 "> -->
<!-- <div class="row "> -->
<!--
  <div class="rt-col-5  rt-col-td-6 flex-start-center md-height-fill md-flex-start-top">
-->
<!-- <div class="rt-md-space-top6"> -->
<!-- <rt-color-line-text -->
<!-- class="rt-l-game-main-text" -->
<!-- color-icon="orange" -->
<!-- fill-color="white"> -->
<!-- <template slot="label">Сражайся -->
<!-- по всем фронтам -->
<!-- </template> -->
<!--
  <template slot="content">и получай бонусы в играх World of tanks, b/r Word of ships, World of
-->
<!-- Warplanes -->
<!-- </template> -->
<!-- </rt-color-line-t
.rowext> - rt-space-left05->
<!-- <rt-button class="rt-button-orange">Подробнее</rt-button>
 a#--Подробнее об игре>
<!-- </div flex-start-center> - rt-space-left2->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div> -->
<!-- <div class="rt-col-12 align-end"> -->
<!-- <div class="row row&#45;&#45;tablet-only-scroll"> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon1.png" alt="" width="100"/> -->
<!-- <p class="color-white rt-space-bottom rt-space-top">Премиум аккаунт</p> -->
<!--
  <p class="color-white05 rt-font-small-paragraph">Предоставляется на весь срок <br/> пользования
-->
<!-- опцией -->
<!-- </p> -->
<!-- </div> -->

<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </rt-banner-item> -->
<!-- <rt-banner-item -->
<!-- content-mobile-min-height="0" -->
<!-- has-custom-content={true} -->
<!-- content-height="100vh" -->
<!-- background-image="/static/images/game/slide1.jpg" -->
<!-- background-color="dark-state"> -->
<!--
  <div class="flex-fill md-flex-fill-none flex-start-center  md-flex-start-top  md-d-block">
-->
<!-- <div class="row"> -->
<!-- <div class="rt-col-12"> -->
<!-- <div class="row "> -->
<!--
  <div class="rt-col-5 flex-start-center md-flex-start-top rt-col-td-6 md-height-fill">
-->
<!-- <div class="rt-md-space-top6"> -->
<!-- <rt-color-line-text -->
<!-- class="rt-l-game-main-text" -->

<!-- color-icon="orange" -->
<!-- fill-color="white"> -->
<!-- <template slot="label">Сражайся -->
<!-- по всем фронтам -->
<!-- </template> -->
<!--
  <template slot="content">и получай бонусы в играх World of tanks, b/r Word of ships, World of
-->
<!-- Warplanes -->
<!-- </template> -->
<!-- </rt-color-line-t
.rowext> - rt-space-left05->
<!-- <rt-button class="rt-button-orange">Подробнее</rt-button>
 a#--Подробнее об игре>
<!-- </div flex-start-center> - rt-space-left2->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div> -->
<!-- <div class="rt-col-12 align-end"> -->
<!-- <div class="row row&#45;&#45;tablet-only-scroll"> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon1.png" alt="" width="100"/> -->
<!-- <p class="color-white rt-space-bottom rt-space-top">Премиум аккаунт</p> -->
<!--
  <p class="color-white05 rt-font-small-paragraph">Предоставляется на весь срок <br/> пользования
-->
<!-- опцией -->
<!-- </p> -->
<!-- </div> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon2.png" alt="" width="100"/> -->
<!--
  <p class="color-white rt-space-bottom rt-space-top">Эксклюзивный <br/> премиум Танк Т-44-100 (Р)
-->
<!-- </p> -->
<!--
  <p class="color-white05 rt-font-small-paragraph">Танк VIII уровня и слот <br/> в ангаре</p>
-->
<!-- </div> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon3.png" alt="" width="100"/> -->
<!--
  <p class="color-white rt-space-bottom rt-space-top">Эксклюзивный премиум <br/> крейсер «Адмирал
-->
<!-- Макаров»</p> -->
<!--
  <p class="color-white05 rt-font-small-paragraph">Крейсер VI уровня и слот в порту</p>
-->
<!-- </div> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon4.png" alt="" width="100"/> -->
<!--
  <p class="color-white rt-space-bottom rt-space-top">Полная боевая готовность</p>
-->
<!--
  <p class="color-white05 rt-font-small-paragraph">На 100% обученный танковый экипаж <br/> с
-->
<!-- прокачанным -->
<!-- «Боевым братством» -->
<!-- <br/> и командир корабля с тремя навыками</p> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </rt-banner-item> -->
