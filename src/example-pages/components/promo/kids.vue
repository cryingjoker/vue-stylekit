<template>
  <div class="kids">
    <div class="wc-inline">
      <rt-banner :is-fullscreen-image="true" class="rt-banner--fill-height" content-min-height="500px"
                 content-height="40vh" :without-empty-column="true">
        <rt-banner-item
          background-image="https://belgorod.rt.ru/sites/default/files/img/my_children/my_children_1920x500.jpg"
          content-min-height="500px"
          content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <p class="rt-font-label-uppercase color-white">Сервис «Где мои дети»</p>
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Ваши дети под&nbsp;присмотром&nbsp;— в&nbsp;школе и&nbsp;на&nbsp;прогулках
                  </template>
                  <template slot="content">Отслеживайте местоположение ребёнка онлайн в&nbsp;мобильном приложении
                  </template>
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
            <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/about.png">
          </div>
          <div class="rt-col-6 rt-col-md-3 flex-center-center">
            <div class="rt-space-vertical2">
              <h2 class="rt-font-h2 rt-font-bold">О сервисе</h2>
              <p class="rt-font-paragraph rt-space-top">Сервис «Где мои дети»&nbsp;— определяет местоположение вашего
                ребенка
                на&nbsp;карте. Вы&nbsp;всегда будете знать, где он: в&nbsp;школе, на&nbsp;прогулке или&nbsp;в&nbsp;гостях.
                Чтобы смотреть за&nbsp;его&nbsp;перемещениями в&nbsp;режиме онлайн, <a href="/my_children#step"
                                                                                       class="color-purple">установите
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
              <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/019-BIG.svg">
              <p class="rt-space-top color-main05 rt-space-right2">Смотрите местоположение ребенка на&nbsp;карте
                и&nbsp;историю его&nbsp;перемещений за&nbsp;день</p>
            </div>
            <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-md-space-top">
              <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/137-BIG.svg">
              <p class="rt-space-top color-main05 rt-space-right2">Устанавливайте «зеленые зоны» и&nbsp;получайте
                оповещения, если ребенок выходит за&nbsp;них</p>
            </div>
            <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-td-space-top">
              <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/183-BIG.svg">
              <p class="rt-space-top color-main05 rt-space-right2">Звоните с&nbsp;громким сигналом в&nbsp;приложение,
                даже
                если ребёнок включил бесшумный режим</p>
            </div>
            <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-td-space-top">
              <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/138-BIG.svg">
              <p class="rt-space-top color-main05 rt-space-right2">Контролируйте заряд батареи на&nbsp;устройстве
                ребенка,
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
      <rt-banner :is-fullscreen-image="true" class="rt-banner--fill-height" content-min-height="500px"
                 content-height="40vh" :without-empty-column="true">
        <rt-banner-item
          background-image="https://belgorod.rt.ru/sites/default/files/img/my_children/karusel_1_1920x500.png"
          content-min-height="500px" content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Мобильное приложение «Где мои дети»</template>
                  <template slot="content">Определяйте местоположение ребенка в&nbsp;режиме реального времени
                    и&nbsp;смотрите историю его&nbsp;перемещений.
                  </template>
                </rt-color-line-text>
              </div>
            </div>
          </div>
        </rt-banner-item>
        <rt-banner-item
          background-image="https://belgorod.rt.ru/sites/default/files/img/my_children/karusel_2_1920x500.png"
          content-min-height="500px"
          content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Мобильное приложение «Где мои дети»</template>
                  <template slot="content">Если его телефон выключится, вы&nbsp;получите моментальное уведомление
                    на&nbsp;смартфон.
                  </template>
                </rt-color-line-text>
              </div>
            </div>
          </div>
        </rt-banner-item>
        <rt-banner-item
          background-image="https://belgorod.rt.ru/sites/default/files/img/my_children/karusel_3_1920x500.png"
          content-min-height="500px"
          content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Детские GPS-часы</template>
                  <template slot="content">Звоните и&nbsp;отправляйте сообщения на&nbsp;часы со&nbsp;своего смартфона.
                    Заряда батареи
                    хватит на&nbsp;весь день в&nbsp;школе и&nbsp;после уроков.
                  </template>
                </rt-color-line-text>
              </div>
            </div>
          </div>
        </rt-banner-item>
        <rt-banner-item
          background-image="https://belgorod.rt.ru/sites/default/files/img/my_children/karusel_4_1920x500.png"
          content-min-height="500px"
          content-height="40vh">
          <div class="rt-md-space-right2">
            <div class="rt-col row">
              <div class="rt-space-vertical">
                <rt-color-line-text class="rt-space-top">
                  <template slot="label">Детские GPS-часы</template>
                  <template slot="content">Если ребёнок снимет часы, вы&nbsp;получите моментальное уведомление. Часы
                    доступны в&nbsp;нескольких цветах — выберите модель, которая больше всего понравится вашему ребенку.
                  </template>
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
                    и&nbsp;ребенка;
                  </li>
                  <li class="rt-ordered-list__item rt-font-paragraph rt-space-top">мобильное приложение для&nbsp;телефона
                    родителя и&nbsp;GPS-часы с&nbsp;сим-картой для&nbsp;ребенка. Для часов потребуется отдельная
                    SIM-карта.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row rt-space-bottom2">
            <rt-card-buy
              class="rt-col-4 rt-col-md-3 d-stretch rt-md-space-top"
              v-rt-slide-content-vertical="{
                scrollWhenActive: true,
                triggerClassName: 'rt-link',
                containerClassName: 'rt-slide-content-vertical-content',
                activeContainerClassName:
                  'rt-slide-content-vertical-content--is-active'
              }"
              :static-body-height="true"
              :has-custom-button="true"
              :is-horizontal-card="true"
              custom-button-class="rt-button-submit"
            >

              <template slot="content">
                <div class="rt-space-horizontal">
                  <div class="d-flex flex-column">
                    <div class="flex-fill">
                      <div class="rt-card-image__figure"
                           style="background-image: url(&quot;https://belgorod.rt.ru/sites/default/files/img/my_children/podkluchenie-1.png&quot;);"></div>
                      <div class="rt-card__body rt-space-top rt-space-bottom">
                        <p class="rt-font-paragraph rt-font-bold">Сервис</p>
                        <div class="d-flex rt-space-top">
                          <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/019-C.svg">
                          <p class="rt-font-paragraph rt-font-bold rt-space-left">Мобильное приложение<br>99 руб./мес.
                          </p>
                        </div>
                      </div>
                      <div class="rt-space-horizontal">
                        <rt-button
                          class="rt-button-orange rt-button--is-block rt-button-submit"
                        >
                          Подключить
                        </rt-button>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template slot="form">
                <div class="rt-space-horizontal">

                  <form class="rt-col-12">

                    <p class="rt-font-paragraph rt-font-bold">
                      Заявка на подключение
                    </p>
                    <div class="row">
                      <div class="rt-col-persent-10">
                        <rt-input value="" placeholder="Как вас зовут ?"/>
                      </div>
                    </div>
                    <div class="row rt-space-top05">
                      <div class="rt-col-persent-5">
                        <rt-input value="" placeholder="Телефон"/>
                      </div>
                      <div class="rt-col-persent-5">
                        <rt-input value="" placeholder="E-mail"/>
                      </div>
                    </div>

                    <div class="rt-space-top">
                      <rt-select label="Удобное время доставки" value="0">
                        <rt-select-option>
                          c 9:00 до 14:00
                        </rt-select-option>
                        <rt-select-option>
                          c 9:30 до 14:30
                        </rt-select-option>
                        <rt-select-option>
                          c 10:00 до 15:00
                        </rt-select-option>
                        <rt-select-option>
                          c 10:30 до 15:30
                        </rt-select-option>
                        <rt-select-option>
                          c 11:00 до 16:00
                        </rt-select-option>
                      </rt-select>
                    </div>

                    <div class="rt-space-top rt-font-control">
                      <rt-checkbox name="sms">Уведомлять о статусе по СМС</rt-checkbox>
                    </div>
                    <div class="rt-space-top rt-font-control">
                      <rt-checkbox name="email">Уведомлять о статусе по E-mail</rt-checkbox>
                      <p class="rt-font-label rt-space-top05 color-main03 rt-space-left15">На E-mail будет выслана инструкция</p>
                    </div>
                    <div class="rt-space-top">
                      <rt-switch>
                            <span class="rt-font-control">
                            У меня есть интернет и/или
                            мобильная связь от Ростелекома
                            </span>
                      </rt-switch>
                    </div>
                    <div class="rt-space-top">
                      <rt-switch>
                            <span class="rt-font-control">
                            Подключить интернет
                            </span>
                      </rt-switch>
                    </div>
                    <div class="rt-space-top">
                      <rt-switch>
                            <span class="rt-font-control">
                            Подключить мобильную связь
                            </span>
                      </rt-switch>
                    </div>
                    <div class="rt-space-top2 rt-space-bottom rt-font-control">
                      <div class="rt-card__border-content rt-reverse-horizontal">
                        <div class="rt-card-image-list rt-card-image-list--without-top-border rt-reverse-horizontal">
                          <div class="rt-card-image-list__content d-flex">
                            <div class="flex-fill flex-start-center">
                              Сервис
                            </div>
                            <p>
                              <span class="rt-font-h4 rt-font-bold">99</span> <span class="color-main07 rt-font-light">руб.</span>
                            </p>
                          </div>

                        </div>
                        <div class="rt-card-image-list rt-card-image-list--without-top-border rt-font-control rt-reverse-horizontal">
                          <div class="rt-card-image-list__content rt-space-top">
                            <div>
                              Часы Q80/SBW
                            </div>
                            <div class="rt-space-top rt-space-bottom">
                              <div class="d-flex">
                                <rt-radio-button name="card2" value="0"  class="flex-fill">
                                  <div class="d-flex">
                                    <div class="flex-fill">
                                      Единовременная  плата
                                    </div>
                                    <div>
                                      <span class="rt-font-bold rt-font-h4">2990</span>&nbsp;<span class="color-main07">руб.</span>
                                    </div>
                                  </div>
                                </rt-radio-button>
                              </div>
                            </div>
                            <div class="rt-space-top rt-font-control">
                              <div class="d-flex">
                                <rt-radio-button name="card2" value="0"  class="flex-fill">
                                  <div class="d-flex">
                                    <div class="flex-fill">
                                      Ежемесячная плата
                                    </div>
                                    <div>
                                      <span class="rt-font-bold rt-font-h4">270</span>&nbsp;<span class="color-main07">руб.</span></div>
                                  </div>
                                </rt-radio-button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="rt-space-top">

                          Ежемесячная плата
                          <div class="d-flex flex-end-bottom">
                            <rt-price :value='99' color-value="orange"/>
                          </div>
                        </div>


                      </div>
                      <div class="rt-space-top">
                        <rt-button
                          class="rt-button-orange rt-button--is-block rt-button-send"
                        >
                          Подключить
                        </rt-button>
                      </div>
                      <p class="rt-space-top flex-center-center rt-font-control">
                        <span class="color-main07">Всего к оплате:</span>&nbsp;3089 руб.
                      </p>
                      <div class="rt-space-top rt-font-control">
                        <rt-checkbox name="sms">Согласен на обработку персоональных <br/> данных в соответсвии с условиями</rt-checkbox>
                      </div>
                    </div>
                    <!--</div>-->

                    <!--<div-->
                    <!--class="rt-col-3 flex-end-bottom rt-col-md-3 rt-space-top2 flex-md-start"-->
                    <!--&gt;-->
                    <!--<div class="rt-space-right">-->
                    <!--<rt-price :value="750.231" :only-price="true"/>-->
                    <!--</div>-->
                    <!--</div>-->
                  </form>
                </div>
              </template>

            </rt-card-buy>
            <rt-card-buy
              class="rt-col-4 rt-col-md-3 d-stretch rt-md-space-top"
              v-rt-slide-content-vertical="{
                scrollWhenActive: true,
                triggerClassName: 'rt-link',
                containerClassName: 'rt-slide-content-vertical-content',
                activeContainerClassName:
                  'rt-slide-content-vertical-content--is-active'
              }"
              :static-body-height="true"
              :has-custom-button="true"
              :is-horizontal-card="true"
              custom-button-class="rt-button-submit"
            >
              <template slot="content">
                <div class="d-flex flex-column">
                  <div class="flex-fill">
                    <div class="rt-card-image__figure"
                         style="background-image: url(&quot;https://belgorod.rt.ru/sites/default/files/img/my_children/podkluchenie-2.png&quot;);"></div>
                    <!--card-image="https://belgorod.rt.ru/sites/default/files/img/my_children/podkluchenie-2.png"-->
                    <!--<template slot="body">-->
                    <div class="rt-card__body rt-space-top rt-space-bottom">
                      <p class="rt-font-paragraph rt-font-bold">Сервис + часы Q50/SBW</p>
                      <div class="d-flex rt-space-top">
                        <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/019-C.svg">
                        <p class="rt-font-paragraph rt-font-bold rt-space-left">Мобильное приложение<br>99 руб./мес.</p>
                      </div>
                      <div class="d-flex rt-space-top">
                        <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/177-C.svg">
                        <p class="rt-font-paragraph rt-font-bold rt-space-left">Часы-телефон с GPS<br>геолокацией
                          Q50/SBW
                        </p>
                      </div>
                      <div class="rt-space-top rt-space-left35">
                        <rt-radio-button name="card2" value="0">
                          Купить часы сразу
                          <br>
                          <div class="rt-font-bold">1990 руб.</div>
                        </rt-radio-button>
                      </div>
                      <div class="rt-space-top rt-space-left35">
                        <rt-radio-button name="card2" value="1">
                          Купить часы в рассрочку
                          <br>
                          <div class="rt-font-bold">180 руб./мес.</div>
                        </rt-radio-button>
                      </div>
                    </div>
                  </div>
                  <div class="rt-space-horizontal rt-space-bottom">
                    <rt-button
                      class="rt-button-orange rt-button--is-block rt-button-submit"
                    >
                      Подключить
                    </rt-button>
                    <div class="rt-space-top">
                      <rt-annotation label="Характеристики">
                        <template slot="content">
                          <p class="rt-font-label rt-font-label-uppercase color-main03 rt-space-top05">ЦВЕТОВЫЕ
                            РЕШЕНИЯ</p>
                          <div class="rt-space-top d-flex">
                            <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="DSGN-1222_2-harakteristiki" transform="translate(-580.000000, -3272.000000)"
                                   fill="#101828" fill-rule="nonzero">
                                  <g id="6" transform="translate(161.000000, 2223.000000)">
                                    <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                      <g id="Group-6" transform="translate(0.000000, -0.000000)">
                                        <g id="icon">
                                          <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                   ry="15.0176263"></ellipse>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                            <div class="rt-space-left">
                              <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-624.000000, -3271.000000)"
                                     fill="#FFFFFF" fill-rule="nonzero" stroke="#979799">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy" transform="translate(45.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left">
                              <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-670.000000, -3272.000000)"
                                     fill="#BC104B" fill-rule="nonzero">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy-2" transform="translate(90.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left">
                              <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-715.000000, -3272.000000)"
                                     fill="#273A64" fill-rule="nonzero">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy-3" transform="translate(135.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left">

                              <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-760.000000, -3272.000000)"
                                     fill="#65BBDF" fill-rule="nonzero">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy-4" transform="translate(180.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left">
                              <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-805.000000, -3272.000000)"
                                     fill="#57D9B7" fill-rule="nonzero">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy-5" transform="translate(225.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <p class="color-main07 rt-space-top2">Часы-телефон с GPS геолокацией Q50/SBW</p>
                          <div class="rt-space-top05 color-main">
                            <span class="color-main07"> Экран: 0.96”</span> OLED 128x64

                            <div class="rt-space-top05"><span class="color-main07">Определение местонахождения:</span>
                              GPS, LBS
                            </div>
                            <div class="rt-space-top05"><span class="color-main07">Камера:</span> нет</div>
                            <div class="rt-space-top05"><span class="color-main07">Виброзвонок:</span> нет</div>
                            <div class="rt-space-top05"><span class="color-main07">Датчик снятия с руки:</span> есть
                            </div>
                            <div class="rt-space-top05"><span class="color-main07">Поддержка 3G:</span> нет</div>
                            <div class="rt-space-top05"><span class="color-main07">Передача данных:</span> 2G</div>
                            <div class="rt-space-top05"><span class="color-main07">Товар сертифицирован:</span> да</div>
                          </div>
                        </template>
                      </rt-annotation>
                    </div>
                  </div>
                </div>
              </template>
            </rt-card-buy>

            <rt-card-buy
              class="rt-col-4 rt-col-md-3 d-stretch rt-md-space-top"
              v-rt-slide-content-vertical="{
                scrollWhenActive: true,
                triggerClassName: 'rt-link',
                containerClassName: 'rt-slide-content-vertical-content',
                activeContainerClassName:
                  'rt-slide-content-vertical-content--is-active'
              }"
              :static-body-height="true"
              :has-custom-button="true"
              :is-horizontal-card="true"
              custom-button-class="rt-button-submit"
            >
              <template slot="content">
                <div class="rt-space-horizontal">
                  <div class="d-flex flex-column">
                    <div class="flex-fill">
                      <div class="rt-card-image__figure"
                           style="background-image: url(&quot;https://belgorod.rt.ru/sites/default/files/img/my_children/podkluchenie-3.png&quot;);"></div>
                      <div class="rt-card__body rt-space-top rt-space-bottom">
                        <p class="rt-font-paragraph rt-font-bold">Сервис + часы Q80/SBW</p>
                        <div class="d-flex rt-space-top">
                          <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/019-C.svg">
                          <p class="rt-font-paragraph rt-font-bold rt-space-left">Мобильное приложение<br>99 руб./мес.
                          </p>
                        </div>
                        <div class="d-flex rt-space-top">
                          <img src="https://belgorod.rt.ru/sites/default/files/img/my_children/177-C.svg">
                          <p class="rt-font-paragraph rt-font-bold rt-space-left">Часы-телефон с GPS<br>геолокацией
                            Q80/SBW
                          </p>
                        </div>

                      </div>
                    </div>
                    <div class="rt-space-left35">
                      <rt-radio-button name="card2" value="0">
                        Купить часы сразу
                        <br>
                        <div class="rt-font-bold">1990 руб.</div>
                      </rt-radio-button>
                    </div>
                    <div class="rt-space-top rt-space-left35 rt-space-bottom ">
                      <rt-radio-button name="card2" value="1">
                        Купить часы в рассрочку
                        <br>
                        <div class="rt-font-bold">180 руб./мес.</div>
                      </rt-radio-button>
                    </div>
                    <rt-button
                      class="rt-button-orange rt-button--is-block rt-button-submit"
                    >
                      Подключить
                    </rt-button>

                    <div class="rt-space-top">
                      <rt-annotation label="Характеристики">
                        <template slot="content">
                          <p class="rt-font-label rt-font-label-uppercase color-main03 rt-space-top05">ЦВЕТОВЫЕ
                            РЕШЕНИЯ</p>
                          <div class="rt-space-top d-flex">
                            <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="DSGN-1222_2-harakteristiki" transform="translate(-580.000000, -3272.000000)"
                                   fill="#101828" fill-rule="nonzero">
                                  <g id="6" transform="translate(161.000000, 2223.000000)">
                                    <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                      <g id="Group-6" transform="translate(0.000000, -0.000000)">
                                        <g id="icon">
                                          <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                   ry="15.0176263"></ellipse>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                            <div class="rt-space-left">
                              <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-624.000000, -3271.000000)"
                                     fill="#FFFFFF" fill-rule="nonzero" stroke="#979799">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy" transform="translate(45.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left">
                              <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-670.000000, -3272.000000)"
                                     fill="#BC104B" fill-rule="nonzero">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy-2" transform="translate(90.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left">
                              <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-715.000000, -3272.000000)"
                                     fill="#273A64" fill-rule="nonzero">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy-3" transform="translate(135.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left">

                              <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-760.000000, -3272.000000)"
                                     fill="#65BBDF" fill-rule="nonzero">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy-4" transform="translate(180.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left">
                              <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="DSGN-1222_2-harakteristiki" transform="translate(-805.000000, -3272.000000)"
                                     fill="#57D9B7" fill-rule="nonzero">
                                    <g id="6" transform="translate(161.000000, 2223.000000)">
                                      <g id="Цвет" transform="translate(419.000000, 1049.000000)">
                                        <g id="Group-6-Copy-5" transform="translate(225.000000, 0.000000)">
                                          <g id="icon">
                                            <ellipse id="Oval-Copy-2" cx="15" cy="15.0176263" rx="15"
                                                     ry="15.0176263"></ellipse>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <p class="color-main07 rt-space-top2">Часы-телефон с GPS геолокацией Q50/SBW</p>
                          <div class="rt-space-top05 color-main">
                            <span class="color-main07"> Экран: 0.96”</span> OLED 128x64

                            <div class="rt-space-top05"><span class="color-main07">Определение местонахождения:</span>
                              GPS, LBS
                            </div>
                            <div class="rt-space-top05"><span class="color-main07">Камера:</span> нет</div>
                            <div class="rt-space-top05"><span class="color-main07">Виброзвонок:</span> нет</div>
                            <div class="rt-space-top05"><span class="color-main07">Датчик снятия с руки:</span> есть
                            </div>
                            <div class="rt-space-top05"><span class="color-main07">Поддержка 3G:</span> нет</div>
                            <div class="rt-space-top05"><span class="color-main07">Передача данных:</span> 2G</div>
                            <div class="rt-space-top05"><span class="color-main07">Товар сертифицирован:</span> да</div>
                          </div>
                        </template>
                      </rt-annotation>
                    </div>
                  </div>
                </div>
              </template>
            </rt-card-buy>
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
                <p class="rt-font-paragraph rt-space-top color-main05">Войдите в <a href="https://lk.rt.ru"
                                                                                    target="blank"
                                                                                    class="color-purple">Личный
                  кабинет</a>.</p>
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
                <p class="rt-font-paragraph rt-space-top color-main05">Скачайте приложение «Где мои дети» на свой
                  смартфон
                  и
                  смартфон ребенка. Если у ребенка GPS-часы, подключите их, следуя инструкции в приложении на вашем
                  устройстве.</p>
                <div class="row rt-space-top">
                  <div class="rt-col-6">
                    <a href="/" target="_blank" class="rt-space-horizontal05"><img
                      src="/themes/rt_ru/images/store_apple.svg"
                      class="rt-img"/></a>
                  </div>
                  <div class="rt-col-6">
                    <a href="/" target="_blank" class="rt-space-horizontal05"><img
                      src="/themes/rt_ru/images/store_google.svg"
                      class="rt-img"/></a>
                  </div>
                </div>
              </div>
              <div class="rt-col-4 rt-space-top rt-col-td-3 rt-td-space-top rt-col-md-3 rt-md-space-top">
                <p class="rt-font-h1 rt-font-bold rt-space-top color-orange">5</p>
                <p class="rt-font-paragraph rt-space-top color-main05">В Личном кабинете во вкладке «Где мои дети»
                  нажмите кнопку «Привязать
                  ID». Введите ID в открывшемся окне.</p>
              </div>
              <div class="rt-col-4 rt-space-top rt-col-td-3 rt-td-space-top rt-col-md-3 rt-md-space-top">
                <p class="rt-font-h1 rt-font-bold rt-space-top color-orange">6</p>
                <p class="rt-font-paragraph rt-space-top color-main05">Каждый месяц подписка будет продлеваться
                  автоматически. Приостановить подписку или привязать ее к другому устройству можно в разделе Личного
                  кабинета «Управление
                  подпиской».</p>
                <a href="https://belgorod.rt.ru/sites/default/files/doc/my_children.pdf"
                   class="rt-space-top d-inline-block">
                  <rt-download-content file-Size="~7.9 Мб" expansion="pdf" class="attach">Инструкция
                  </rt-download-content>
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
              <p class="rt-annotation-item">Сервис «Где мои дети» доступен для подключения по цене 99 руб./мес. только
                абонентам услуги «Домашний интернет» на всех тарифных планах (в том числе архивных). Абонент подключает
                сервис «Где мои дети» через личный кабинет абонента. Подробная инструкция по активации сервиса на сайте
                findmykids.org/rtmanual. В месяце подключения/отключения сервиса «Где мои дети» начисления за сервис
                осуществляются за фактическое количество дней использования сервиса в данном месяце. При приостановлении
                доступа к услуге «Домашний интернет» сервис «Где мои дети» не предоставляется.</p>
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
      var height = document.querySelector(".vip-iphone-wrapper").getBoundingClientRect().height;
      const step = height * 0.8 / 4;
      var slideIndexBefore = null;
      var needToScroll = false;
      var setHeight = function() {
        var cols = document.querySelectorAll(".vip-tariff-wrapper .rt-col-4");
        var colsWidht = cols[0].clientWidth;
        var colsSize = cols.length;
        var wWidth = document.body.clientWidth;
        // console.info("colsWidht * colsSize > wWidth", colsWidht * colsSize > wWidth);
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
            scroller.style.height = (scrollerWidth + stickyItem.clientHeight + 300)+'px';
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
