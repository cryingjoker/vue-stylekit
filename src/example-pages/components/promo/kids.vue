<template>
  <div>
    <div class="wc-inline">
      <rt-banner :is-fullscreen-image="true" class="rt-banner--fill-height" content-min-height="500px" content-height="40vh" :without-empty-column="true">
        <rt-banner-item background-image="/sites/default/files/img/my_children/my_children_1920x500.jpg" content-min-height="500px"
                        content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <p class="rt-font-label-uppercase color-white">Сервис «Где мои дети»</p>
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Ваши дети под&nbsp;присмотром&nbsp;— в&nbsp;школе и&nbsp;на&nbsp;прогулках</template>
                  <template slot="content">Отслеживайте местоположение ребёнка онлайн в&nbsp;мобильном приложении</template>
                </rt-color-line-text>
              </div>
            </div>
            <div class="rt-md-space-top color-white">
              <a href="/my_children#tariff">
                <rt-button class="rt-button-orange">Подробнее</rt-button>
              </a>
            </div>
          </div>
        </rt-banner-item>
      </rt-banner>
    </div>

    <!-- О сервисе -->
    <div class="rt-container">
      <div class="rt-col">
        <div class="row">
          <div class="rt-col-6 md-d-none flex-center-bottom">
            <img src="/sites/default/files/img/my_children/about.png">
          </div>
          <div class="rt-col-6 rt-col-md-3 flex-center-center">
            <div class="rt-space-vertical2">
              <h2 class="rt-font-h2 rt-font-bold">О сервисе</h2>
              <p class="rt-font-paragraph rt-space-top">Сервис «Где мои дети»&nbsp;— определяет местоположение вашего
                ребенка
                на&nbsp;карте. Вы&nbsp;всегда будете знать, где он: в&nbsp;школе, на&nbsp;прогулке или&nbsp;в&nbsp;гостях.
                Чтобы смотреть за&nbsp;его&nbsp;перемещениями в&nbsp;режиме онлайн, <a href="/my_children#step" class="color-purple">установите
                  мобильное приложение</a> на&nbsp;ваш&nbsp;смартфон и&nbsp;смартфон ребенка. Если у&nbsp;ребенка
                ещё&nbsp;нет смартфона&nbsp;— приобретите GPS-часы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Преимущества -->
    <section class="color-block--white">
      <div class="rt-container">
        <div class="rt-col">
          <div class="row rt-space-vertical35 rt-td-space-vertical2">
            <div class="rt-col-3 rt-col-td-3 rt-col-md-3">
              <img src="/sites/default/files/img/my_children/019-BIG.svg">
              <p class="rt-space-top color-main05 rt-space-right2">Смотрите местоположение ребенка на&nbsp;карте
                и&nbsp;историю его&nbsp;перемещений за&nbsp;день</p>
            </div>
            <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-md-space-top">
              <img src="/sites/default/files/img/my_children/137-BIG.svg">
              <p class="rt-space-top color-main05 rt-space-right2">Устанавливайте «зеленые зоны» и&nbsp;получайте
                оповещения, если ребенок выходит за&nbsp;них</p>
            </div>
            <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-td-space-top">
              <img src="/sites/default/files/img/my_children/183-BIG.svg">
              <p class="rt-space-top color-main05 rt-space-right2">Звоните с&nbsp;громким сигналом в&nbsp;приложение, даже
                если ребёнок включил бесшумный режим</p>
            </div>
            <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-td-space-top">
              <img src="/sites/default/files/img/my_children/138-BIG.svg">
              <p class="rt-space-top color-main05 rt-space-right2">Контролируйте заряд батареи на&nbsp;устройстве ребенка,
                чтобы он не&nbsp;остался без&nbsp;связи вдали от&nbsp;дома</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Спец.предложение -->
    <section class="color-block--purple color-white">
      <div class="wc-inline">
        <div class="rt-container">
          <div class="rt-col">
            <div class="row rt-space-vertical25">
              <div class="rt-col-6 rt-col-td-6 flex-start-center">
                <div>
                  <p class="rt-font-h3">Бесплатный период:</p>
                  <p class="rt-font-h2 rt-font-bold rt-space-top">7 дней*</p>
                </div>
              </div>
              <div class="rt-col-6 rt-col-td-6 rt-td-space-top">
                <div class="row">
                  <div class="rt-col-7 rt-col-md-3">
                    <p class="rt-font-h3">Специальная цена<br>для&nbsp;клиентов Ростелекома:</p>
                    <p class="rt-font-h2 rt-font-bold rt-space-top">99 руб./мес.</p>
                  </div>
                  <div class="rt-col-5 rt-col-md-3 rt-md-space-top flex-start-center">
                    <a href="/my_children#tariff">
                      <rt-button class="rt-button-orange">Подключить</rt-button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Слайдер -->
    <div class="wc-inline">
      <rt-banner :is-fullscreen-image="true" class="rt-banner--fill-height" content-min-height="500px" content-height="40vh" :without-empty-column="true">
        <rt-banner-item background-image="/sites/default/files/img/my_children/karusel_1_1920x500.png" content-min-height="500px" content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Мобильное приложение «Где мои дети»</template>
                  <template slot="content">Определяйте местоположение ребенка в&nbsp;режиме реального времени
                    и&nbsp;смотрите историю его&nbsp;перемещений.</template>
                </rt-color-line-text>
              </div>
            </div>
          </div>
        </rt-banner-item>
        <rt-banner-item background-image="/sites/default/files/img/my_children/karusel_2_1920x500.png" content-min-height="500px"
                        content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Мобильное приложение «Где мои дети»</template>
                  <template slot="content">Если его телефон выключится, вы&nbsp;получите моментальное уведомление
                    на&nbsp;смартфон.</template>
                </rt-color-line-text>
              </div>
            </div>
          </div>
        </rt-banner-item>
        <rt-banner-item background-image="/sites/default/files/img/my_children/karusel_3_1920x500.png" content-min-height="500px"
                        content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Детские GPS-часы</template>
                  <template slot="content">Звоните и&nbsp;отправляйте сообщения на&nbsp;часы со&nbsp;своего смартфона.
                    Заряда батареи
                    хватит на&nbsp;весь день в&nbsp;школе и&nbsp;после уроков.</template>
                </rt-color-line-text>
              </div>
            </div>
          </div>
        </rt-banner-item>
        <rt-banner-item background-image="/sites/default/files/img/my_children/karusel_4_1920x500.png" content-min-height="500px"
                        content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Детские GPS-часы</template>
                  <template slot="content">Если ребёнок снимет часы, вы&nbsp;получите моментальное уведомление. Часы
                    доступны в&nbsp;нескольких цветах — выберите модель, которая больше всего понравится вашему ребенку.</template>
                </rt-color-line-text>
              </div>
            </div>
          </div>
        </rt-banner-item>
      </rt-banner>
    </div>

    <!-- Карточки с тарифами -->
    <div class="wc-inline">
      <div class="rt-container" id="tariff">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-8 rt-col-td-6">
              <div class="rt-space-vertical2">
                <h2 class="rt-font-h2 rt-font-bold">Подключение</h2>
                <p class="rt-font-paragraph rt-space-top">Подключите домашний интернет от&nbsp;Ростелекома, чтобы
                  пользоваться
                  сервисом по&nbsp;специальной цене. Выберите подходящий вариант:</p>
                <ul class="rt-ordered-list">
                  <li class="rt-ordered-list__item rt-font-paragraph rt-space-top">мобильное приложение для&nbsp;телефонов
                    родителя
                    и&nbsp;ребенка;</li>
                  <li class="rt-ordered-list__item rt-font-paragraph rt-space-top">мобильное приложение для&nbsp;телефона
                    родителя и&nbsp;GPS-часы с&nbsp;сим-картой для&nbsp;ребенка. Для часов потребуется отдельная SIM-карта.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row rt-space-bottom2">
            <div class="rt-col-4 rt-col-md-3 d-stretch">
              <rt-card-image card-image="/sites/default/files/img/my_children/podkluchenie-1.png">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">Сервис</p>
                  <div class="d-flex rt-space-top">
                    <img src="/sites/default/files/img/my_children/019-C.svg">
                    <p class="rt-font-paragraph rt-font-bold rt-space-left">Мобильное приложение<br>99 руб./мес.</p>
                  </div>
                </template>
                <template slot="footer">
                  <div class="row">
                    <div class="rt-col-12">
                      <a href="#" class="d-block">
                        <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                      </a>
                    </div>
                  </div>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-4 rt-col-md-3 d-stretch rt-md-space-top">
              <rt-card-image card-image="/sites/default/files/img/my_children/podkluchenie-2.png">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">Сервис + часы Q50/SBW</p>
                  <div class="d-flex rt-space-top">
                    <img src="/sites/default/files/img/my_children/019-C.svg">
                    <p class="rt-font-paragraph rt-font-bold rt-space-left">Мобильное приложение<br>99 руб./мес.</p>
                  </div>
                  <div class="d-flex rt-space-top">
                    <img src="/sites/default/files/img/my_children/177-C.svg">
                    <p class="rt-font-paragraph rt-font-bold rt-space-left">Часы-телефон с GPS<br>геолокацией Q50/SBW</p>
                  </div>
                </template>
                <template slot="footer">
                  <div class="row">
                    <div class="rt-col-12">
                      <a href="#" class="d-block">
                        <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                      </a>
                    </div>
                  </div>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-4 rt-col-md-3 d-stretch rt-md-space-top">
              <rt-card-image card-image="/sites/default/files/img/my_children/podkluchenie-3.png">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">Сервис + часы Q80/SBW</p>
                  <div class="d-flex rt-space-top">
                    <img src="/sites/default/files/img/my_children/019-C.svg">
                    <p class="rt-font-paragraph rt-font-bold rt-space-left">Мобильное приложение<br>99 руб./мес.</p>
                  </div>
                  <div class="d-flex rt-space-top">
                    <img src="/sites/default/files/img/my_children/177-C.svg">
                    <p class="rt-font-paragraph rt-font-bold rt-space-left">Часы-телефон с GPS<br>геолокацией Q80/SBW</p>
                  </div>
                </template>
                <template slot="footer">
                  <div class="row">
                    <div class="rt-col-12">
                      <a href="#" class="d-block">
                        <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                      </a>
                    </div>
                  </div>
                </template>
              </rt-card-image>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Как подключить сервис -->
    <section class="color-block--white">
      <div class="wc-inline">
        <div class="rt-container" id="step">
          <div class="rt-col">
            <div class="row rt-space-vertical25">
              <div class="rt-col-12">
                <h2 class="rt-font-h2 rt-font-bold">Как подключить сервис</h2>
              </div>
              <div class="rt-col-4 rt-col-td-3 rt-col-md-3">
                <p class="rt-font-h1 rt-font-bold rt-space-top color-orange">1</p>
                <p class="rt-font-paragraph rt-space-top color-main05">Войдите в <a href="https://lk.rt.ru" target="blank"
                                                                                    class="color-purple">Личный кабинет</a>.</p>
              </div>
              <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-md-space-top">
                <p class="rt-font-h1 rt-font-bold rt-space-top color-orange">2</p>
                <p class="rt-font-paragraph rt-space-top color-main05">Найдите блок «Домашний интернет» и выберите опцию
                  «Управлять услугой».</p>
              </div>
              <div class="rt-col-4 rt-col-td-3 rt-td-space-top rt-col-md-3 rt-md-space-top">
                <p class="rt-font-h1 rt-font-bold rt-space-top color-orange">3</p>
                <p class="rt-font-paragraph rt-space-top color-main05">В блоке с дополнительными подписками откройте
                  вкладку
                  «Где мои дети». Выберите опцию «Активировать за 99 руб./мес».</p>
              </div>
              <div class="rt-col-4 rt-space-top rt-col-td-3 rt-td-space-top rt-col-md-3 rt-md-space-top">
                <p class="rt-font-h1 rt-font-bold rt-space-top color-orange">4</p>
                <p class="rt-font-paragraph rt-space-top color-main05">Скачайте приложение «Где мои дети» на свой смартфон
                  и
                  смартфон ребенка. Если у ребенка GPS-часы, подключите их, следуя инструкции в приложении на вашем
                  устройстве.</p>
                <div class="row rt-space-top">
                  <div class="rt-col-6">
                    <a href="/" target="_blank" class="rt-space-horizontal05"><img src="/themes/rt_ru/images/store_apple.svg"
                                                                                   class="rt-img" /></a>
                  </div>
                  <div class="rt-col-6">
                    <a href="/" target="_blank" class="rt-space-horizontal05"><img src="/themes/rt_ru/images/store_google.svg"
                                                                                   class="rt-img" /></a>
                  </div>
                </div>
              </div>
              <div class="rt-col-4 rt-space-top rt-col-td-3 rt-td-space-top rt-col-md-3 rt-md-space-top">
                <p class="rt-font-h1 rt-font-bold rt-space-top color-orange">5</p>
                <p class="rt-font-paragraph rt-space-top color-main05">В Личном кабинете во вкладке «Где мои дети» нажмите кнопку «Привязать
                  ID». Введите ID в открывшемся окне.</p>
              </div>
              <div class="rt-col-4 rt-space-top rt-col-td-3 rt-td-space-top rt-col-md-3 rt-md-space-top">
                <p class="rt-font-h1 rt-font-bold rt-space-top color-orange">6</p>
                <p class="rt-font-paragraph rt-space-top color-main05">Каждый месяц подписка будет продлеваться
                  автоматически. Приостановить подписку или привязать ее к другому устройству можно в разделе Личного
                  кабинета «Управление
                  подпиской».</p>
                <a href="/sites/default/files/doc/my_children.pdf" class="rt-space-top d-inline-block">
                  <rt-download-content file-Size="~7.9 Мб" expansion="pdf" class="attach">Инструкция</rt-download-content>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Примечания -->
    <div class="wc-inline">
      <div class="rt-container rt-space-vertical2 color-main07">
        <div class="rt-col">
          <rt-annotation label="Примечание">
            <template slot="content">
              <p class="rt-annotation-item">Сервис «Где мои дети» доступен для подключения по цене 99 руб./мес. только абонентам услуги «Домашний интернет» на всех тарифных планах (в том числе архивных). Абонент подключает сервис «Где мои дети» через личный кабинет абонента. Подробная инструкция по активации сервиса на сайте findmykids.org/rtmanual. В месяце подключения/отключения сервиса «Где мои дети» начисления за сервис осуществляются за фактическое количество дней использования сервиса в данном месяце. При приостановлении доступа к услуге «Домашний интернет» сервис «Где мои дети» не предоставляется.</p>
              <p class="rt-annotation-item">*Бесплатный период предоставляется для мобильного приложения.</p>
            </template>
          </rt-annotation>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .rtk-footer {
    background-color: #101828 !important;
  }

  .rtk-footer__phone-number,
  .rtk-footer__copyright,
  .rtk-date {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .rt-annotation-item {
    color: rgba(255, 255, 255, 0.5);
  }
</style>
<script>
  const componentsList = {};

  export default {
    name: "AppPromoVip",
    components: componentsList,
    mounted() {
      var height  = document.querySelector(".vip-iphone-wrapper").getBoundingClientRect().height;
      const step = height * 0.8 / 4;
      var slideIndexBefore = null;
      var needToScroll = false;
      var setHeight = function() {
        var cols = document.querySelectorAll(".vip-tariff-wrapper .rt-col-4");
        var colsWidht = cols[0].clientWidth;
        var colsSize = cols.length;
        var wWidth = document.body.clientWidth;
        console.info("colsWidht * colsSize > wWidth", colsWidht * colsSize > wWidth);
        if (colsWidht * colsSize > wWidth) {
          needToScroll = true;
          // var containerHeight = document.querySelector(".tariff-scroller-sticky").clientHeight;
          // document.querySelector(".tariff-scroller").style.height = containerHeight - wWidth + colsWidht * colsSize;
        } else {
          // if(document.querySelector(".tariff-scroller").style.height){
          //   document.querySelector(".tariff-scroller").style.height = null;
          // }
          needToScroll = false;
        }
      };

      setHeight();
      document.querySelectorAll(".animate-scroller-sticky-wrapper").forEach(function(scroller) {

        var offsetTop = 0;
        scroller.querySelectorAll(".animate-scroller-sticky-show").forEach(function(item) {
          offsetTop += item.clientHeight;
        });
        var scrollerItems = scroller.querySelectorAll(".animate-scroller-sticky__item");
        var stickyItem = scroller.querySelector(".animate-scroller-sticky-scroll");
        var setScrollerHeight = function() {
          var containerWidth = document.querySelector(".rt-container").clientWidth;
          var scrollerWidth = 40;
          var wWidth = document.body.clientWidth;
          scrollerItems.forEach(function(item) {
            scrollerWidth += item.clientWidth;
          });
          scrollerWidth = scrollerWidth - wWidth;
          if (scrollerWidth > 0) {
            scroller.style.height = scrollerWidth + stickyItem.clientHeight + 300;
            scroller.classList.add("animate-scroller-sticky-wrapper--is-active");
          } else {
            if (scroller.classList.contains("animate-scroller-sticky-wrapper--is-active"))
              scroller.style.height = null;
            scroller.classList.remove("animate-scroller-sticky-wrapper--is-active");
          }
        };
        window.addEventListener("resize", function(e) {
          setScrollerHeight();
        });
        setScrollerHeight();

        document.addEventListener("scroll", function(e) {
          if (scroller.classList.contains("animate-scroller-sticky-wrapper--is-active")) {
            var top = stickyItem.getBoundingClientRect().top - 0;

            if (top >= (offsetTop * -1) && top <= offsetTop) {
              stickyItem.style.transform = "translateX(" + (scroller.getBoundingClientRect().y + offsetTop) + "px)";
            } else {
              if (top > 0) {
                stickyItem.style.transform = "translateX(0px)";
              }
            }
          }
        });

      });
      document.addEventListener("scroll", function(e) {
        var iphoneWrapperTop = document.querySelector(".vip-iphone-wrapper").getBoundingClientRect().top;
        var iphoneWrapperHeight = document.querySelector(".vip-iphone-wrapper").getBoundingClientRect().height;
        var tariffWrapperTop = document.querySelector(".vip-tariff-wrapper").getBoundingClientRect().top;
        var tariffWrapperOffsetTop = document.querySelector(".vip-tariff-wrapper").offsetTop;
        var tariffWrapperHeight = document.querySelector(".vip-tariff-wrapper").getBoundingClientRect().height;
        var tariffWrapperWidth = document.querySelector(".vip-tariff-wrapper").getBoundingClientRect().width;
        var tariffWrapper = document.querySelector(".vip-tariff-wrapper");
        if (needToScroll && tariffWrapperTop - 20 <= tariffWrapperOffsetTop && Math.abs(tariffWrapperTop) - 140 < tariffWrapperHeight) {
          if (tariffWrapperTop - 40 <= tariffWrapperOffsetTop && tariffWrapperTop + 60 >= tariffWrapperOffsetTop) {
            tariffWrapper.style.transform = "translateX(" + (document.querySelector(".vip-iphone-wrapper").getBoundingClientRect().top - document.querySelector(".tariff-scroller").getBoundingClientRect().height) + "px)";
          } else {
            if (tariffWrapper.style.transform) {
              tariffWrapper.style.transform = 0;
            }
          }
        } else {
          // console.info("tariffWrapperTop", tariffWrapperTop);
        }
        if (iphoneWrapperTop < 0 && Math.abs(iphoneWrapperTop) < iphoneWrapperHeight) {
          var slideIndex = parseInt(Math.abs(iphoneWrapperTop) / step) + 1;

          if (slideIndex > 4) {
            slideIndex = 4;
          }

          if (slideIndexBefore !== slideIndex) {
            if (slideIndexBefore != null) {
              document.querySelector(".vip-iphone-wrapper").classList.remove("vip-iphone--step-" + slideIndexBefore);
            }
            slideIndexBefore = slideIndex;
            document.querySelector(".vip-iphone-wrapper").classList.add("vip-iphone--step-" + slideIndex);
            document.querySelector(".vip-iphone-count__value").innerHTML = slideIndex;
          }

        }

      });
    },
    created() {
    },
    methods: {}
  };
</script>
