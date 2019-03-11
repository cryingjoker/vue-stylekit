<template>
  <div class="rt-l-game color-block--game-promo-color">
    <rt-banner
      :sleep-time="30000"
      :is-fullscreen-image="true"
      content-height="470px"
      :is-background-banner="true"
      :has-custom-content="true"
    >
      <rt-banner-item
        is-game-banner-item
        contnent-height="470px"
        background-video="/static/video/Trailer_Warface_Annoucement_20180628_4000.mp4"
        :is-white-color="true"
        background-color="dark-state"
      />
    </rt-banner>

    <div
      class="rt-container rt-space-top2 rt-dark-theme rt-dark-theme--transparent rt-space-bottom2"
    >
      <div class="flex-start-center rt-td-space-left ">
        <div class="warface-logo">
          <rt-logo
            class="rt-layer-level-4 relative d-inline-block"
            width="56px"
            height="94px"
          />
          <div class="rt-layer-level-4 rt-logo-line" />
          <rt-logo
            class="rt-layer-level-4 relative d-inline-block"
            width="188px"
            height="90px"
            type="warface"
          />
        </div>
      </div>
      <div class="rt-space-top135 flex-end-center">
        <rt-logo
          class="rt-layer-level-4 relative d-inline-block promo-wargame-logo"
          width="300px"
          height="93px"
          type="game-logo"
        />
      </div>
      <div class="rt-space-top25">
        <div class="d-flex row rt-td-space-horizontal">
          <div class="rt-col-5 rt-col-td-6">
            <rt-color-line-text
              fill-color="orange"
              color-icon="white"
              :is-white-color="true"
            >
              <template slot="label">
                Тариф «Игровой»
              </template>
              <template slot="content">
                Подарки и интернет для настоящих <br >
                игроков Warface
              </template>
            </rt-color-line-text>
          </div>
          <div class="rt-col-1 td-d-none" />

          <div
            class="rt-col-6 rt-col-td-6 rt-td-space-top15 rt-td-space-bottom15 rt-md-space-bottom3"
          >
            <div class="rt-space-bottom4 rt-td-space-bottom-none">
              <rt-price
                :for-game="true"
                class="color-white"
                :value="800"
                time-interval="сек"
                currency="Мбит"
              />
              <rt-price
                :bold-option="true"
                class="color-orange"
                :for-game="true"
                :value="800"
                time-interval="мес."
                currency="руб."
              />
            </div>
            <div class="d-none md-d-block rt-space-top2">
              <rt-button
                class="rt-button-orange rt-button-small rt-button--is-block"
              >
                Подключить
              </rt-button>
            </div>
          </div>
        </div>
      </div>

      <div class="row td-flex-column-reverse rt-td-space-horizontal">
        <div class="rt-col-5 rt-col-td-6">
          <div class="rt-space-top25">
            <rt-tabs>
              <template slot="navigation">
                <div class="d-flex md-space-between flex-fill flex-row">
                  <rt-tabs-nav-item
                    :remove-base-tag="true"
                    class="rt-font-h4 rt-font-left"
                    name="new"
                  >
                    Для новых <br>абонентов
                  </rt-tabs-nav-item>
                  <div class="rt-space-left2 td-d-inline-block">
                    <rt-tabs-nav-item
                      :remove-base-tag="true"
                      class="rt-font-h4 rt-font-left"
                      name="old"
                    >
                      Для абонентов <br>Ростелеком
                    </rt-tabs-nav-item>
                  </div>
                </div>
              </template>

              <template slot="content">
                <rt-tabs-content-item name="new">
                  <div class="rt-space-top15">
                    <rt-input placeholder="Как к Вам обращаться" />
                  </div>
                  <div class="rt-space-top">
                    <rt-checkbox name="internet">
                      Я являюсь клиентом Ростелеком
                    </rt-checkbox>
                  </div>
                  <div class="rt-space-top">
                    <rt-input placeholder="Контактный номер телефона" />
                  </div>

                  <div class="rt-space-top3">
                    <p class="rt-font-paragraph rt-font-bold color-white07">
                      Адрес доставки
                    </p>
                  </div>
                  <div class="rt-space-top">
                    <div class="row">
                      <div class="rt-col-6">
                        <rt-input placeholder="Улица" />
                      </div>
                      <div class="rt-col-3">
                        <rt-input placeholder="Дом" />
                      </div>
                      <div class="rt-col-3">
                        <rt-input placeholder="Квартира" />
                      </div>
                    </div>
                  </div>
                  <div class="rt-space-top3">
                    <p class="rt-font-paragraph rt-font-bold color-white07">
                      А еще я хочу подключить по выгодной
                    </p>
                  </div>
                  <div class="rt-space-top">
                    <rt-switch class="switch--orange rt-font-control">
                      Терминал ONT без Wi-Fi <br >
                      +20₽ в месяц
                    </rt-switch>
                  </div>
                  <div class="rt-space-top">
                    <rt-switch class="switch--orange rt-font-control">
                      Терминал ONT без Wi-Fi <br >
                      +20₽ в месяц
                    </rt-switch>
                  </div>
                  <div class="rt-space-top md-d-none">
                    <rt-button class="rt-button-orange">
                      Подключить
                    </rt-button>
                  </div>
                  <div class="rt-space-top">
                    <rt-checkbox name="internet">
                      Уведомлять о статусе по смс
                    </rt-checkbox>
                  </div>
                  <div class="rt-space-top">
                    <rt-checkbox name="internet">
                      <span class="color-white07">
                        Даю согласие на обработку персональных данных <br >в
                        соответствии с</span
                      >
                      условиями
                    </rt-checkbox>
                  </div>
                </rt-tabs-content-item>
                <rt-tabs-content-item name="old">
                  <div class="rt-space-top15">
                    <rt-input placeholder="Введите логин от личного кабинета" />
                  </div>
                  <div class="rt-space-top">
                    <rt-input
                      placeholder="Введите пароль от личного кабинета"
                      type="password"
                    />
                  </div>
                  <div class="rt-space-top2">
                    <rt-button class="rt-button-orange">
                      Подключить
                    </rt-button>
                  </div>
                  <div class="rt-space-top">
                    <rt-checkbox name="internet">
                      У меня уже есть интернет Ростелеком
                    </rt-checkbox>
                  </div>
                  <div class="rt-space-top rt-space-bottom2">
                    <p class="color-white05 rt-font-small-paragraph">
                      Если у Вас нет аккаунта в Ростелеком, его необходимо
                      <a href="#" class="rt-link">зарегистрировать</a>
                    </p>
                  </div>
                </rt-tabs-content-item>
              </template>
            </rt-tabs>
          </div>
        </div>
        <div class="rt-col-1 td-d-none" />
        <div class="rt-col-6 rt-col-td-6">
          <div class="rt-space-top4 rt-td-space-top">
            <p class="rt-font-h2 rt-font-medium">
              Игровая опция Warface
            </p>
            <div class="rt-space-top15 rt-td-space-top2">
              <div class="row rt-space-bottom3 rt-md-space-bottom-none">
                <div class="rt-col-6 rt-font-center rt-col-td-2 rt-col-md-3">
                  <img
                    style="max-height: 126px; max-width:100%"
                    src="/static/images/game/warface1.png"
                    alt=""
                  >
                </div>
                <div class="rt-col-6 rt-col-td-4 rt-md-space-top rt-col-md-3">
                  <p>Крутые пушки всем абонентам</p>
                  <p class="color-white05 rt-space-top05">
                    Пока подключена игровая опция Warface пользуйся любой из
                    четырех пушек. Тип оружия можно изменять каждые 24 часа в
                    личном кабинете на wf.mail.ru
                  </p>
                </div>
              </div>
              <div
                class="row rt-space-top2 rt-space-bottom3 rt-md-space-bottom-none"
              >
                <div class="rt-col-6 rt-font-center rt-col-td-2 rt-col-md-3">
                  <img
                    style="max-height: 126px; max-width:100%"
                    src="/static/images/game/warface2.png"
                    alt=""
                  >
                </div>
                <div class="rt-col-6 rt-col-td-4 rt-md-space-top rt-col-md-3">
                  <p>Кредиты каждый день</p>
                  <p class="color-white05 rt-space-top05">
                    Получай кредиты в подарок просто за то, что оплатил тариф
                    «Игровой» в этом месяце! Кредиты начисляются ежедневно, пока
                    активна игровая опция
                  </p>
                </div>
              </div>
              <div class="row rt-space-top2">
                <div class="rt-col-6 rt-font-center rt-col-td-2 rt-col-md-3">
                  <img
                    style="max-height: 126px; max-width:100%"
                    src="/static/images/game/warface3.png"
                    alt=""
                  >
                </div>
                <div class="rt-col-6 rt-col-td-4 rt-md-space-top rt-col-md-3">
                  <p>Оружие навсегда</p>
                  <p class="color-white05 rt-space-top05">
                    Мечтаешь об отличной пушке, которая навсегда останется на
                    твоем складе? Накопи дни РТК и обменяй их на постоянное
                    оружие!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block--white rt-space-top25 color-dark">
      <div class="rt-container">
        <p class="rt-font-h3 rt-font-bold">
          Примечания
        </p>
        <p class="rt-font-control rt-space-top05 color-main05 rt-font-light">
          Warface — игровая опция (Опция) Услуги «Домашний интернет» (Услуга),
          доступная абонентам при подключении тарифного плана «Игровой» (План).
          Опция Опция Опция предоставляется партнером — ООО «Мейл.Ру»,
          ответственность за предоставление опции несет партнер. Использование
          Опции возможно при наличии аккаунта Абонента на wf.mail.ru в рамках
          пользовательского соглашения между абонентом и партнером. Активация
          опции осуществляется в Едином личном кабинете Абонента. Стоимость
          опции включена в стоимость плана.
        </p>
        <div class="row">
          <div class="rt-col-8 rt-col-td-6">
            <rt-slide-content>
              <template slot="label">
                Зачем мне нужна регистрация в личном кабинете?
              </template>
              <template slot="content">
                <span class="color-main05 rt-font-small-paragraph rt-font-light">Услуги предоставляются при наличии технической возможности
                  Цены указаны в рублях с учетом НДС. Предоставление доступа к
                  сети интернет осуществляется по технологии FTTx или по
                  технологии PON. Максимально возможная скорость при подключении
                  по технологии FTTx составляет до 90 Мбит/с. Возможно
                  предоставление доступа к сети интернет по технологии xDSL.
                  Тарифы — в разделе</span
                >
              </template>
            </rt-slide-content>
            <rt-slide-content>
              <template slot="label">
                Зачем мне нужна регистрация в личном кабинете?
              </template>
              <template slot="content">
                <span class="color-main05 rt-font-small-paragraph rt-font-light">Услуги предоставляются при наличии технической возможности
                  Цены указаны в рублях с учетом НДС. Предоставление доступа к
                  сети интернет осуществляется по технологии FTTx или по
                  технологии PON. Максимально возможная скорость при подключении
                  по технологии FTTx составляет до 90 Мбит/с. Возможно
                  предоставление доступа к сети интернет по технологии xDSL.
                  Тарифы — в разделе</span>
              </template>
            </rt-slide-content>
          </div>
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
  created() {},
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
