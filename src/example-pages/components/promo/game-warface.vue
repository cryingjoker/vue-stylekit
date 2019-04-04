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
      <div class="flex-start-center rt-td-space-left rt-dark-theme">
        <div class="warface-logo">
          <rt-logo-co-branding>
            <template slot="firstLogo">
              <rt-logo
                class="rt-layer-level-4 relative d-inline-block"
                width="56px"
                height="94px"
                tablet-width="41.5px"
                mobile-width="33px"
              />
            </template>
            <template slot="secondLogo">
              <rt-logo
                class="rt-layer-level-4 relative d-inline-block"
                width="188px"
                height="90px"
                type="warface"
                tablet-width="141px" mobile-width="111px"
              />
            </template>
          </rt-logo-co-branding>


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
                Подарки и интернет для настоящих <br>
                игроков Warface
              </template>
            </rt-color-line-text>
          </div>
          <div class="rt-col-1 td-d-none"/>

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
                    <rt-input placeholder="Как к Вам обращаться"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-checkbox name="internet">
                      Я являюсь клиентом Ростелеком
                    </rt-checkbox>
                  </div>
                  <div class="rt-space-top">
                    <rt-input placeholder="Контактный номер телефона"/>
                  </div>

                  <div class="rt-space-top3">
                    <p class="rt-font-paragraph rt-font-bold color-white07">
                      Адрес доставки
                    </p>
                  </div>
                  <div class="rt-space-top">
                    <div class="row">
                      <div class="rt-col-6">
                        <rt-input placeholder="Улица"/>
                      </div>
                      <div class="rt-col-3">
                        <rt-input placeholder="Дом"/>
                      </div>
                      <div class="rt-col-3">
                        <rt-input placeholder="Квартира"/>
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
                      Терминал ONT без Wi-Fi <br>
                      +20₽ в месяц
                    </rt-switch>
                  </div>
                  <div class="rt-space-top">
                    <rt-switch class="switch--orange rt-font-control">
                      Терминал ONT без Wi-Fi <br>
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
                        Даю согласие на обработку персональных данных <br>в
                        соответствии с</span
                      >
                      условиями
                    </rt-checkbox>
                  </div>
                </rt-tabs-content-item>
                <rt-tabs-content-item name="old">
                  <div class="rt-space-top15">
                    <rt-input placeholder="Введите логин от личного кабинета"/>
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
        <div class="rt-col-1 td-d-none"/>
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
                  <div class="rt-space-top05">
                    <span class="rt-link open-popup-button" popup-name="warface-popup-today">Подробнее о пушках</span>
                  </div>
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
                  <div class="rt-space-top05">
                    <span class="rt-link open-popup-button" popup-name="warface-popup-all">Подробнее о пушках</span>
                  </div>
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
    <div class="warface-popup-wrapper warface-popup-today">
      <div class="warface-popup">
        <div class="warface-popup-close">
          <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.9">
              <g id="popup_1" transform="translate(-530.000000, -20.000000)" fill="#FFFFFF">
                <polygon id="Shape"
                         points="545 21.5 543.5 20 537.5 26 531.5 20 530 21.5 536 27.5 530 33.5 531.5 35 537.5 29 543.5 35 545 33.5 539 27.5"></polygon>
              </g>
            </g>
          </svg>
        </div>
        <p class="rt-font-h3 rt-font-bold">Оружие за дни РТК</p>
        <p class="rt-font-paragraph rt-space-top05 rt-space-bottom2">Оружие навсегда</p>
        <div class="warface-popup-slider ">
          <div class="warface-popup-slider__arrow warface-popup-slider__arrow-prev">
            <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="popup_1" transform="translate(-98.000000, -180.000000)" stroke="#FF4F12" stroke-width="2">
                  <g id="Group-10" transform="translate(100.000000, 163.000000)">
                    <polyline id="next"
                              transform="translate(3.500000, 25.000000) scale(-1, 1) translate(-3.500000, -25.000000) "
                              points="0 18 7 25 0 32"></polyline>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="warface-popup-slider__arrow warface-popup-slider__arrow-next">
            <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="popup_1" transform="translate(-457.000000, -180.000000)" stroke="#FF4F12" stroke-width="2">
                  <g id="Group-10" transform="translate(100.000000, 163.000000)">
                    <polyline id="next" points="358 18 365 25 358 32"></polyline>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="warface-popup-slider__space">
            <div class="warface-popup-slider__item warface-popup-slider__item--is-active">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/ACR_CQB.png" alt="">
              </div>
              <p class="rt-font-bold">Пистолет-пулемёт ACR CQB</p>
            </div>
            <div class="warface-popup-slider__item">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/DP-12.png" alt="">
              </div>
              <p class="rt-font-bold">Дробовик DP-12</p>
            </div>
            <div class="warface-popup-slider__item">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/HCAR.png" alt="">
              </div>
              <p class="rt-font-bold">Штурмовая винтовка HCAR</p>
            </div>
            <div class="warface-popup-slider__item">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/Steyr_Scout.png" alt="">
              </div>
              <p class="rt-font-bold">Снайперская винтовка Steyr Scout</p>
            </div>
          </div>
        </div>
        <p class="warface-popup-slider__count"><span class="warface-popup-slider__count-now">1</span> / <span
          class="warface-popup-slider__count-all">4</span></p>
        <p class="rt-space-top2 color-white07 rt-font-small-paragraph">Ассортимент пушек будет обновляться раз в полгода</p>
      </div>
    </div>
    <div class="warface-popup-wrapper warface-popup-all">
      <div class="warface-popup">
        <div class="warface-popup-close">
          <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.9">
              <g id="popup_1" transform="translate(-530.000000, -20.000000)" fill="#FFFFFF">
                <polygon id="Shape"
                         points="545 21.5 543.5 20 537.5 26 531.5 20 530 21.5 536 27.5 530 33.5 531.5 35 537.5 29 543.5 35 545 33.5 539 27.5"></polygon>
              </g>
            </g>
          </svg>
        </div>
        <p class="rt-font-h3 rt-font-bold">Оружие за дни РТК</p>
        <p class="rt-font-paragraph rt-space-top05 rt-space-bottom2">Оружие навсегда</p>
        <div class="warface-popup-slider ">
          <div class="warface-popup-slider__arrow warface-popup-slider__arrow-prev">
            <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="popup_1" transform="translate(-98.000000, -180.000000)" stroke="#FF4F12" stroke-width="2">
                  <g id="Group-10" transform="translate(100.000000, 163.000000)">
                    <polyline id="next"
                              transform="translate(3.500000, 25.000000) scale(-1, 1) translate(-3.500000, -25.000000) "
                              points="0 18 7 25 0 32"></polyline>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="warface-popup-slider__arrow warface-popup-slider__arrow-next">
            <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="popup_1" transform="translate(-457.000000, -180.000000)" stroke="#FF4F12" stroke-width="2">
                  <g id="Group-10" transform="translate(100.000000, 163.000000)">
                    <polyline id="next" points="358 18 365 25 358 32"></polyline>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="warface-popup-slider__space">
            <div class="warface-popup-slider__item warface-popup-slider__item--is-active">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/S&W_M&P_R8.png" alt="">
              </div>
              <p class="rt-font-bold">Револьвер S&W M&P R8</p>
            </div>
            <div class="warface-popup-slider__item">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/butterfly_knife.png" alt="">
              </div>
              <p class="rt-font-bold">Нож-бабочка</p>
            </div>
            <div class="warface-popup-slider__item">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/Enfield_L85A2_Custom.png" alt="">
              </div>
              <p class="rt-font-bold">Винтовка Enfield L85A2 Custom</p>
            </div>
            <div class="warface-popup-slider__item">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/Fabarm_STF_12_Compact.png" alt="">
              </div>
              <p class="rt-font-bold">Дробовик Fabarm STF 12 Compact</p>
            </div>
            <div class="warface-popup-slider__item">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/SCAR-L_PDW.png" alt="">
              </div>
              <p class="rt-font-bold">Пистолет-пулемёт SCAR-L PDW</p>
            </div>
            <div class="warface-popup-slider__item">
              <div class="warface-popup-slider__img">
                <img src="/static/images/game/wf/M14_Crazy_Horse.png" alt="">
              </div>
              <p class="rt-font-bold">Снайперская винтовка M14 Crazy Horse (класс Снайпер)</p>
            </div>

          </div>
        </div>
        <p class="warface-popup-slider__count color-white07 rt-font-small-paragraph"><span class="warface-popup-slider__count-now">1</span> / <span
          class="warface-popup-slider__count-all">6</span></p>
        <p class="rt-space-top2 color-white07 rt-font-small-paragraph">Ассортимент пушек будет обновляться раз в полгода</p>
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
      setTimeout(function(){
      document.addEventListener('keydown',function(e){
        if(document.querySelector('.warface-popup-wrapper--is-active')) {

          switch (e.keyCode) {
            case 37:
              document.querySelector('.warface-popup-wrapper--is-active').querySelector('.warface-popup-slider__arrow-prev').dispatchEvent(new Event('click'));
              break
            case 39:
              document.querySelector('.warface-popup-wrapper--is-active').querySelector('.warface-popup-slider__arrow-next').dispatchEvent(new Event('click'));
              break;
            case 27:
              document.querySelector('.warface-popup-wrapper--is-active').classList.remove('warface-popup-wrapper--is-active');
              break;
            case 32:
              document.querySelector('.warface-popup-wrapper--is-active').querySelector('.warface-popup-slider__arrow-next').dispatchEvent(new Event('click'));
              e.preventDefault();
              break;
          }
        }
      })
      document.querySelectorAll(".warface-popup-wrapper").forEach(function(wrapper) {
        wrapper.querySelector('.warface-popup-close').addEventListener('click',function() {
          wrapper.classList.remove('warface-popup-wrapper--is-active');
        });
        var popUpIsHover = false;
        var popup = wrapper.querySelector('.warface-popup');
        popup.addEventListener('mouseenter',function(){
          popUpIsHover = true
        })
        popup.addEventListener('mouseleave',function(){
          popUpIsHover = false
        })
        wrapper.addEventListener('click',function(e,a) {
          if(!popUpIsHover){
            wrapper.classList.remove('warface-popup-wrapper--is-active');
          }
        });
      })
      document.querySelectorAll('.open-popup-button').forEach(function(button){
        button.addEventListener('click',function(){
          var className = button.getAttribute('popup-name');
          document.querySelector('.'+className).classList.add('warface-popup-wrapper--is-active');
        })
      })
      document.querySelectorAll(".warface-popup").forEach(function(popup) {
        popup.querySelectorAll(".warface-popup-slider__arrow").forEach(function(arrow) {
          arrow.addEventListener("click", function() {
            var activeItem = popup.querySelector(".warface-popup-slider__item--is-active");
            var nodes = Array.prototype.slice.call(activeItem.parentNode.children);
            var activeIndex = nodes.indexOf(activeItem);
            var size = nodes.length;
            if (arrow.classList.contains("warface-popup-slider__arrow-prev")) {
              activeIndex = activeIndex - 1;
              if (activeIndex < 0) {
                activeIndex = size - 1;
              }
            } else {
              activeIndex = (activeIndex+1) % size;
            }
            activeItem.classList.remove("warface-popup-slider__item--is-active");
            nodes[activeIndex].classList.add("warface-popup-slider__item--is-active");
            popup.querySelector('.warface-popup-slider__count-now').innerHTML = (activeIndex+1)
          });
        });
      });
      },2000)
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
