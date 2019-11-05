<template>
  <div class="rt-space-top4">
    <div class="rt-game-banner">
      <div class="rt-game-banner__paginator">
        <div class="rt-game-banner__paginator-item rt-game-banner__paginator-item--is-active">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" class="rt-game-banner__paginator-item__icon md-d-none">
            <circle r="4" cx="4.5" cy="4.5" fill="transparent"></circle>
          </svg>
          <div class="rt-game-banner__paginator-item__span">Wargaming</div>
        </div>
        <div class="rt-game-banner__paginator-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" class="rt-game-banner__paginator-item__icon md-d-none">
            <circle r="4" cx="4.5" cy="4.5" fill="transparent"></circle>
          </svg>
          <div class="rt-game-banner__paginator-item__span">Warface</div>
        </div>
        <div class="rt-game-banner__paginator-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" class="rt-game-banner__paginator-item__icon md-d-none">
            <circle r="4" cx="4.5" cy="4.5" fill="transparent"></circle>
          </svg>
          <div class="rt-game-banner__paginator-item__span">4Game</div>
        </div>

      </div>
      <div class="rt-game-banner__content">
        <div class="rt-game-arrow-contaner rt-container td-d-none">
          <div class="rt-game-arrow rt-game-arrow-prew">
            <svg width="27px" height="52px" viewBox="0 0 27 52" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="328-LP_Igrovoy_UPD-2nd-page" transform="translate(-359.000000, -633.000000)">

                  <g id="Group-19" transform="translate(257.000000, 242.000000)" fill-rule="nonzero" opacity="0.9"
                     stroke="#FFFFFF" stroke-width="2">
                    <g id="Group-6">
                      <g id="Group-2" transform="translate(102.232300, 40.232300)">
                        <g id="Rectangle-6-Copy"
                           transform="translate(25.767700, 376.767700) rotate(90.000000) translate(-25.767700, -376.767700) translate(0.767700, 351.767700)">
                          <polyline
                            transform="translate(24.692618, 24.692618) rotate(45.000000) translate(-24.692618, -24.692618) "
                            points="42.1529352 7.2323003 42.1529352 42.1529352 7.2323003 42.1529352"></polyline>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="rt-game-arrow rt-game-arrow-next td-d-none">
            <svg width="27px" height="52px" viewBox="0 0 27 52" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="328-LP_Igrovoy_UPD-2nd-page" transform="translate(-1654.000000, -633.000000)" fill-rule="nonzero"
                   stroke="#FFFFFF" stroke-width="2">
                  <g id="Group-19" transform="translate(257.000000, 242.000000)">
                    <g id="Group-6">
                      <g id="Group-2" transform="translate(102.232300, 40.232300)">
                        <polyline id="Rectangle-6-Copy"
                                  transform="translate(1295.460317, 376.460317) scale(-1, 1) rotate(135.000000) translate(-1295.460317, -376.460317) "
                                  points="1312.92063 359 1312.92063 393.920635 1278 393.920635"></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="rt-game-banner__item rt-game-banner__item--is-active">
          <div class="rt-game-banner-image" style="background-image: url('https://spb.rt.ru/sites/default/files/img/game/slide3.jpg')"></div>

          <div class="rt-container">
            <div class="rt-game-banner__icons">
              <div class="rt-game-banner__icons__item">
                <img class="rt-game-banner__icons__item-img"
                     src="https://spb.rt.ru/sites/default/files/img/game/logo-word-of-tanks.svg" alt="">
              </div>
              <div class="rt-game-banner__icons__item">
                <img class="rt-game-banner__icons__item-img"
                     src="https://spb.rt.ru/sites/default/files/img/game/logo-word-of-warship.svg" alt="">
              </div>
              <div class="rt-game-banner__icons__item">
                <img class="rt-game-banner__icons__item-img"
                     src="https://spb.rt.ru/sites/default/files/img/game/logo-world-of-warplanes.svg" alt="">
              </div>
            </div>
            <rt-color-line-text :is-white-color="true" fill-color="orange" :hide-arrow="true">
              <template slot="label">Сражайся <br>по всем фронтам</template>
            </rt-color-line-text>
            <div class="rt-space-top2 rt-md-space-top-none rt-md-space-bottom05 relative">
              <rt-button class="md-d-none rt-button-full-white">Подключить</rt-button>
              <rt-button class="rt-button-white color-white rt-game-more-info">Подробнее&nbsp;<span class="d-none md-d-inline-block">&nbsp;об игре</span>
                <svg width="9px" height="15px" viewBox="0 0 9 15" version="1.1" xmlns="http://www.w3.org/2000/svg" class="rt-game-more-info__icon">
                  <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="328-LP_Igrovoy_UPD-2nd-page" transform="translate(-3143.000000, -621.000000)" fill-rule="nonzero" stroke="#FF4F12" stroke-width="2">
                      <polyline id="Rectangle-6-Copy" transform="translate(3144.121320, 628.656854) rotate(315.000000) translate(-3144.121320, -628.656854) " points="3148.62132 624.156854 3148.62132 633.156854 3139.62132 633.156854"></polyline>
                    </g>
                  </g>
                </svg></rt-button>
            </div>
            <div class="row rt-md-space-top-none rt-space-top3-half">
              <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical js-game-bonus md-d-flex">
                <div class="rt-md-space-right">
                  <img src="https://spb.rt.ru/sites/default/files/img/game/game-icon2.png" alt=""
                       class="rt-game-banner-round-icon js-game-icon--weapon1" style="width: auto;"/>
                </div>
                <div class="rt-font-md-left md-flex-center-start flex-column"><p
                  class="js-game-text color-white rt-space-bottom rt-space-top rt-md-space-bottom-none rt-md-space-top-none">
                  Экслюзивная техника <br> и слот в
                  ангаре</p>
                  <p class="js-game-text color-white05 rt-font-small-paragraph">Танк Т-44-100 (Р), крейсер <br>
                    "Адмирал
                    Макаров", самолет "ЯК-3Т"</p></div>
              </div>
              <div
                class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical js-game-bonus md-d-flex rt-md-space-top">
                <div class="rt-md-space-right">
                  <img src="https://spb.rt.ru/sites/default/files/img/game/game-icon11.png" alt="" height="100"
                       class="rt-game-banner-round-icon js-game-icon-wf-k "/></div>
                <div class="rt-font-md-left md-flex-center-start flex-column"><p
                  class="js-game-text color-white rt-space-bottom rt-space-top rt-md-space-bottom-none rt-md-space-top-none">
                  Полная
                  боевая готовность</p>
                  <p class="color-white05 rt-font-small-paragraph js-game-text">Прокачанный экипаж</p></div>
              </div>
              <div
                class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-top js-game-bonus md-d-flex rt-md-space-top">
                <div class="rt-md-space-right"><img
                  src="https://spb.rt.ru/sites/default/files/img/game/WF-weapon%20Copy%202.png" alt=""
                  height="100" class="rt-game-banner-round-icon" style="width: auto;"/></div>
                <div class="rt-font-md-left md-flex-center-start flex-column"><p
                  class="color-white rt-space-bottom rt-space-top js-game-text rt-md-space-top-none rt-md-space-bottom-none">
                  Премиум
                  аккаунт</p>
                  <p class="color-white05 rt-font-small-paragraph js-game-text">Предоставляется на весь срок <br
                    class="md-d-none">
                    пользования опцией
                  </p></div>
              </div>
            </div>
          </div>
        </div>


        <div class="rt-game-banner__item">
          <div class="rt-game-banner-image" style="background-image: url('https://spb.rt.ru/sites/default/files/img/game/slide1.jpg')"></div>

          <div class="rt-container">
            <div class="rt-game-banner__icons">
              <div class="rt-game-banner__icons__item">
                <img class="rt-game-banner__icons__item-img"
                     src="https://spb.rt.ru/sites/default/files/img/game/WF-Standard-Logo_White.png" alt="">
              </div>
            </div>
            <rt-color-line-text :is-white-color="true" fill-color="orange" :hide-arrow="true">
              <template slot="label">Подарки и интернет <br>
                для настоящих бойцов
              </template>
            </rt-color-line-text>
            <div class="rt-space-top2 rt-md-space-top-none rt-md-space-bottom05 relative">
              <rt-button class="md-d-none rt-button-full-white">Подключить</rt-button>
              <rt-button class="rt-button-white color-white rt-game-more-info">Подробнее&nbsp;<span class="d-none md-d-inline-block">&nbsp;об игре</span>
                <svg width="9px" height="15px" viewBox="0 0 9 15" version="1.1" xmlns="http://www.w3.org/2000/svg" class="rt-game-more-info__icon">
                  <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="328-LP_Igrovoy_UPD-2nd-page" transform="translate(-3143.000000, -621.000000)" fill-rule="nonzero" stroke="#FF4F12" stroke-width="2">
                      <polyline id="Rectangle-6-Copy" transform="translate(3144.121320, 628.656854) rotate(315.000000) translate(-3144.121320, -628.656854) " points="3148.62132 624.156854 3148.62132 633.156854 3139.62132 633.156854"></polyline>
                    </g>
                  </g>
                </svg></rt-button>
            </div>
            <div class="row rt-md-space-top-none rt-space-top3-half">
              <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical js-game-bonus md-d-flex">
                <div class="rt-md-space-right">
                  <img src="https://spb.rt.ru/sites/default/files/img/game/WF-weapon_0.png" alt=""
                       class="rt-game-banner-round-icon js-game-icon--weapon1" style="width: auto;"/>
                </div>
                <div class="rt-font-md-left md-flex-center-start flex-column"><p
                  class="js-game-text color-white rt-space-bottom rt-space-top rt-md-space-bottom-none rt-md-space-top-none">
                  Крутые
                  пушки</p>
                  <p class="js-game-text color-white05 rt-font-small-paragraph">Пользуйся любой из&nbsp;4&nbsp;крутых
                    игровых пушек, пока подключена игровая опция</p></div>
              </div>
              <div
                class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical js-game-bonus md-d-flex rt-md-space-top">
                <div class="rt-md-space-right">
                  <img src="https://spb.rt.ru/sites/default/files/img/game/WF-K_0.png" alt="" height="100"
                       class="rt-game-banner-round-icon js-game-icon-wf-k "/></div>
                <div class="rt-font-md-left md-flex-center-start flex-column"><p
                  class="js-game-text color-white rt-space-bottom rt-space-top rt-md-space-bottom-none rt-md-space-top-none">
                  Кредиты
                  каждый день</p>
                  <p class="js-game-text color-white05 rt-font-small-paragraph">Кредиты начисляются ежедневно, <br>
                    пока активна
                    игровая опция</p></div>
              </div>
              <div
                class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-top js-game-bonus md-d-flex rt-md-space-top">
                <div class="rt-md-space-right"><img
                  src="https://spb.rt.ru/sites/default/files/img/game/WF-weapon%20Copy.png" alt=""
                  height="100" class="rt-game-banner-round-icon" style="width: auto;"/></div>
                <div class="rt-font-md-left md-flex-center-start flex-column"><p
                  class="color-white rt-space-bottom rt-space-top js-game-text rt-md-space-top-none rt-md-space-bottom-none">
                  Оружие
                  навсегда</p>
                  <p class="color-white05 rt-font-small-paragraph js-game-text">Копи дни РТК и обменивай их <br
                    class="md-d-none">
                    на постоянное оружие</p></div>
              </div>
            </div>
          </div>
        </div>


        <div class="rt-game-banner__item">
          <div class="rt-game-banner-image" style="background-image: url('https://spb.rt.ru/sites/default/files/img/game/slide2.jpg')"></div>

          <div class="rt-container">
            <div class="rt-game-banner__icons">
              <div class="rt-game-banner__icons__item">
                <img class="rt-game-banner__icons__item-img"
                     src="https://spb.rt.ru/sites/default/files/img/game/L2_black.svg" alt="">
              </div>
              <div class="rt-game-banner__icons__item">
                <img class="rt-game-banner__icons__item-img"
                     src="https://spb.rt.ru/sites/default/files/img/game/PB_black.svg" alt="">
              </div>
              <div class="rt-game-banner__icons__item">
                <img class="rt-game-banner__icons__item-img"
                     src="https://spb.rt.ru/sites/default/files/img/game/Aion_black.svg" alt="">
              </div>
              <div class="rt-game-banner__icons__item">
                <img class="rt-game-banner__icons__item-img"
                     src="https://spb.rt.ru/sites/default/files/img/game/BNS_black.svg" alt="">
              </div>
            </div>
            <rt-color-line-text :is-white-color="true" fill-color="orange" :hide-arrow="true">
              <template slot="label">Получай подарки <br>
                в лучших играх
              </template>
            </rt-color-line-text>
            <div class="rt-space-top2 rt-md-space-top-none rt-md-space-bottom05 relative">
              <rt-button class="md-d-none rt-button-full-white">Подключить</rt-button>
              <rt-button class="rt-button-white color-white rt-game-more-info">Подробнее&nbsp;<span class="d-none md-d-inline-block">&nbsp;об игре</span>
                <svg width="9px" height="15px" viewBox="0 0 9 15" version="1.1" xmlns="http://www.w3.org/2000/svg" class="rt-game-more-info__icon">
                  <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="328-LP_Igrovoy_UPD-2nd-page" transform="translate(-3143.000000, -621.000000)" fill-rule="nonzero" stroke="#FF4F12" stroke-width="2">
                      <polyline id="Rectangle-6-Copy" transform="translate(3144.121320, 628.656854) rotate(315.000000) translate(-3144.121320, -628.656854) " points="3148.62132 624.156854 3148.62132 633.156854 3139.62132 633.156854"></polyline>
                    </g>
                  </g>
                </svg></rt-button>
            </div>
            <div class="row rt-md-space-top-none rt-space-top3-half">
              <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical js-game-bonus md-d-flex">
                <div class="rt-md-space-right">
                  <img src="https://spb.rt.ru/sites/default/files/img/game/4G-bonus.png" alt=""
                       class="rt-game-banner-round-icon js-game-icon--weapon1" style="width: auto;"/>
                </div>
                <div class="rt-font-md-left md-flex-center-start flex-column"><p
                  class="js-game-text color-white rt-space-bottom rt-space-top rt-md-space-bottom-none rt-md-space-top-none">
                  Бонусы за
                  стаж</p>
                  <p class="color-white05 rt-font-small-paragraph js-game-text">Чем дольше подключен к опции, тем
                    круче
                    бонусы в каждой из игр</p></div>
              </div>
              <div
                class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical js-game-bonus md-d-flex rt-md-space-top">
                <div class="rt-md-space-right">
                  <img src="https://spb.rt.ru/sites/default/files/img/game/4G-gift.png" alt="" height="100"
                       class="rt-game-banner-round-icon js-game-icon-wf-k "/></div>
                <div class="rt-font-md-left md-flex-center-start flex-column"><p
                  class="js-game-text color-white rt-space-bottom rt-space-top rt-md-space-bottom-none rt-md-space-top-none">
                  Подарки
                  при подключении</p>
                  <p class="color-white05 rt-font-small-paragraph js-game-text">Для погружения в игровой мир</p></div>
              </div>
              <div
                class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-top js-game-bonus md-d-flex rt-md-space-top">
                <div class="rt-md-space-right"><img
                  src="https://spb.rt.ru/sites/default/files/img/game/4G-baff.png" alt=""
                  height="100" class="rt-game-banner-round-icon" style="width: auto;"/></div>
                <div class="rt-font-md-left md-flex-center-start flex-column"><p
                  class="color-white rt-space-bottom rt-space-top js-game-text rt-md-space-top-none rt-md-space-bottom-none">
                  Ежедневные
                  баффы</p>
                  <p class="color-white05 rt-font-small-paragraph js-game-text">Для быстрой прокачки</p></div>
              </div>
            </div>
          </div>
        </div>
        <div v-rt-scroll-to-on-click='{"scrollToId": "rt-game-banner"}'>
          <rt-game-arrow></rt-game-arrow>
        </div>
      </div>
    </div>
    <div class="rt-space-top8">
      <div id="rt-game-banner">123123</div>
    </div>
  </div>
  <!-- Описание -->

  <!-- Тарифы -->
</template>


<script>
  const componentsList = {};

  export default {
    name: "AppPromoVip",
    components: componentsList,
    mounted() {

      var $$ = document.querySelectorAll.bind(document);
      var $ = document.querySelector.bind(document);
      var activeSlideIndex = 0;
      var slideCount = $$(".rt-game-banner__item").length;
      var sleepTime = 5000;
      var timer = function() {
        return setTimeout(function(){
          nextSlide();
          localTimer = timer()
        },sleepTime)
      };
      var localTimer = timer()
      var clearTimer = function() {
        clearTimeout(localTimer);
        localTimer = timer();
      };
      var updatePaginator = function() {
        $(".rt-game-banner__paginator-item--is-active").classList.remove("rt-game-banner__paginator-item--is-active");
        $$(".rt-game-banner__paginator-item")[activeSlideIndex].classList.add("rt-game-banner__paginator-item--is-active");
      };

      var prewSlide = function() {
        $(".rt-game-banner__item--is-active").classList.remove("rt-game-banner__item--is-active");
        activeSlideIndex -= 1;
        if (activeSlideIndex < 0) {
          activeSlideIndex = slideCount - 1;
        }
        $$(".rt-game-banner__item")[activeSlideIndex].classList.add("rt-game-banner__item--is-active");
        updatePaginator();
        clearTimer();
      };

      var nextSlide = function() {
        $(".rt-game-banner__item--is-active").classList.remove("rt-game-banner__item--is-active");
        activeSlideIndex += 1;
        activeSlideIndex = activeSlideIndex % slideCount;
        $$(".rt-game-banner__item")[activeSlideIndex].classList.add("rt-game-banner__item--is-active");
        updatePaginator();
        clearTimer();
      };

      $(".rt-game-arrow-prew").addEventListener("click", prewSlide);
      $(".rt-game-arrow-next").addEventListener("click", nextSlide);
      $$(".rt-game-banner__paginator-item").forEach(function(item, index) {
        item.addEventListener("click", function() {
          if (activeSlideIndex != index) {
            $(".rt-game-banner__item--is-active").classList.remove("rt-game-banner__item--is-active");
            activeSlideIndex = index;
            $$(".rt-game-banner__item")[activeSlideIndex].classList.add("rt-game-banner__item--is-active");
            clearTimer();
            updatePaginator();
          }
        });
      });
    },
    created() {
    },
    methods: {}
  };
</script>
