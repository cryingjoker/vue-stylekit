<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">
              Carousel 3.0
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div>
      <pre-code text='
        <div class="rt-container">
          <div class="app-content rt-col-12 rt-col-md-3">
            <h3>Carousel in Tabs</h3>
            <div class="app-body">
              <div class="app-row row">
                <div class="rt-col-12 rt-space-bottom3">
                  <rt-tabs :round-tablet-view="true">
                    <template slot="navigation">
                      <rt-tabs-nav-item :remove-base-tag="true" name="one">Демо-карточки</rt-tabs-nav-item>
                      <rt-tabs-nav-item :remove-base-tag="true" name="two">С фоновым изображением</rt-tabs-nav-item>
                    </template>
                    <template slot="content">
                      <rt-tabs-content-item name="one">
                        <div class="area">
                          <rt-carousel :debug="true">
                            <rt-carousel-slide
                              v-for="i in 17"
                              :key="i"
                            >
                              <div
                                style="
                                  align-content: center;
                                  border-radius: 8px;
                                  border: 2px solid;
                                  display: flex;
                                  flex-flow: wrap;
                                  font-size: 150px;
                                  justify-content: center;
                                  height: 450px;
                                "
                                :style="`border-color: rgb(${177-i*0.6},${255/10+i},${i*15});`"
                                v-text="i"
                              ></div>
                            </rt-carousel-slide>
                          </rt-carousel>
                        </div>
                      </rt-tabs-content-item>
                      <rt-tabs-content-item name="two">
                        <div class="area">
                          <rt-carousel
                            :navs-pos-end="144"
                          >
                            <rt-carousel-slide
                              v-for="i in 15"
                              :key="i"
                            >
                              <div
                                style="
                                  border-radius: 8px;
                                  height: 300px;
                                  position: relative;
                                "
                                :style="`background: url(https://picsum.photos/300/300?getForId=${i})`"
                              >
                                <div
                                  style="
                                    background-color: black;
                                    color: white;
                                    position: absolute;
                                    bottom: 0;
                                    right: 0;
                                    padding: 0 10px;
                                  "
                                  v-text="i"
                                ></div>
                              </div>
                            </rt-carousel-slide>
                          </rt-carousel>
                        </div>
                      </rt-tabs-content-item>
                    </template>
                  </rt-tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      ' />
    </div>

    <div>
      <pre-code text='
        <rt-carousel :hide-arrows="true" slides-classes="rt-col-4 rt-col-md-2 rt-col-td-3">
          <rt-carousel-slide>
            <rt-card>
              <template slot="header">
                <img width="175px" class="rt-card__headeremitSelectedData__image" src="/static/images/homeinternet/homeinternet-image18.jpg" />
              </template>
              <template slot="content">
                <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Kaspersky Internet Security 4</p>
                <p class="rt-space-top color-main07 rt-space-right2">Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства</p>
              </template>
              <template slot="bottom-list">
                <div class="rt-card-list rt-space-bottom2">
                    <div class="rt-card-list__item">
                      <div class="rt-card-list__icon">
                        <img src="/static/images/medium-icon.svg" />
                      </div>
                      <div class="rt-card-list__name">
                        <p class="rt-font-small-paragraph color-main05">Защищает 2 устройства одновременно</p>
                      </div>
                    </div>
                    <div class="rt-card-list__item">
                      <div class="rt-card-list__icon">
                        <div class="rt-space-left15">
                          <img src="/static/images/small-icon.svg" />
                        </div>
                      </div>
                      <div class="rt-card-list__name">
                        <p class="rt-font-small-paragraph color-main05">Первый месяц в&nbsp;подарок</p>
                      </div>
                    </div>
                    <div class="rt-card-list__item">
                      <div class="rt-card-list__icon">
                        <div class="rt-space-left15">
                          <img src="/static/images/small-icon.svg" />
                        </div>
                      </div>
                      <div class="rt-card-list__name">
                        <p class="rt-font-small-paragraph color-main05">Контроль интернет-сайтов</p>
                      </div>
                    </div>
                    <div class="rt-card-list__item">
                      <div class="rt-card-list__icon">
                        <div class="rt-space-left15">
                          <img src="/static/images/small-icon.svg" />
                        </div>
                      </div>
                      <div class="rt-card-list__name">
                        <p class="rt-font-small-paragraph color-main05">Игровой формат и&nbsp;простые настройки</p>
                      </div>
                    </div>
                    <div class="rt-card-list__item">
                      <div class="rt-card-list__icon">
                        <div class="rt-space-left15">
                          <img src="/static/images/small-icon.svg" />
                        </div>
                      </div>
                      <div class="rt-card-list__name">
                        <p class="rt-font-small-paragraph color-main05">Определение местоположения</p>
                      </div>
                    </div>
                    <div class="rt-card-list__item">
                      <div class="rt-card-list__icon">
                        <div class="rt-space-left15">
                          <img src="/static/images/small-icon.svg" />
                        </div>
                      </div>
                      <div class="rt-card-list__name">
                        <p class="rt-font-small-paragraph color-main05">Сообщения ребенку</p>
                      </div>
                    </div>
                    <div class="rt-card-list__item">
                      <div class="rt-card-list__icon">
                        <div class="rt-space-left15">
                          <img src="/static/images/small-icon.svg" />
                        </div>
                      </div>
                      <div class="rt-card-list__name">
                        <p class="rt-font-small-paragraph color-main05">Контроль приложений и&nbsp;времени</p>
                      </div>
                    </div>
                </div>
              </template>

              <template slot="content-without-wrapper">
                <div class="rt-card__border-content">
                  <div class="rt-col-12 flex-end-center rt-space-top">
                    <rt-price :value="1600" :old-value="1800" time-interval="год."></rt-price>
                  </div>
                  <div class="rt-space-top05">
                    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                  </div>
                </div>
              </template>
            </rt-card>
          </rt-carousel-slide>

          <rt-carousel-slide>
            <rt-card>
              <template slot="header">
                <rt-logo height="70"></rt-logo>
              </template>
              <template slot="content">
                <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 1</p>
                <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
                <p>&nbsp;</p>
                <div class="rt-card-list__item">
                  <div class="rt-card-list__icon">
                    <div class="rt-space-left15">
                      <img src="/static/images/small-icon.svg" />
                    </div>
                  </div>
                  <div class="rt-card-list__name">
                    <p class="rt-font-small-paragraph color-main05">Первый месяц в&nbsp;подарок</p>
                  </div>
                </div>
                <p>&nbsp;</p>
              </template>
              <template slot="content-without-wrapper">
                <div class="rt-card__border-content">
                  <div class="rt-col-12 flex-end-center rt-space-top">
                    <rt-price :value="1000" :old-value="1800" time-interval="мес."></rt-price>
                  </div>
                  <div class="rt-space-top05">
                    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                  </div>
                </div>
              </template>
            </rt-card>
          </rt-carousel-slide>

          <rt-carousel-slide>
            <rt-card>
              <template slot="header">
                <rt-logo height="70"></rt-logo>
              </template>
              <template slot="content">
                <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 2</p>
                <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
                <p>&nbsp;</p>
                <div class="rt-card-list__item">
                  <div class="rt-card-list__icon">
                    <div class="rt-space-left15">
                      <img src="/static/images/small-icon.svg" />
                    </div>
                  </div>
                  <div class="rt-card-list__name">
                    <p class="rt-font-small-paragraph color-main05">Первый месяц в&nbsp;подарок</p>
                  </div>
                </div>
                <p>&nbsp;</p>
              </template>
              <template slot="content-without-wrapper">
                <div class="rt-card__border-content">
                  <div class="rt-col-12 flex-end-center rt-space-top">
                    <rt-price :value="1000" :old-value="1800" time-interval="мес."></rt-price>
                  </div>
                  <div class="rt-space-top05">
                    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                  </div>
                </div>
              </template>
            </rt-card>
          </rt-carousel-slide>

          <rt-carousel-slide>
            <rt-card>
              <template slot="header">
                <rt-logo height="70"></rt-logo>
              </template>
              <template slot="content">
                <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 3</p>
                <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
                <p>&nbsp;</p>
                <div class="rt-card-list__item">
                  <div class="rt-card-list__icon">
                    <div class="rt-space-left15">
                      <img src="/static/images/small-icon.svg" />
                    </div>
                  </div>
                  <div class="rt-card-list__name">
                    <p class="rt-font-small-paragraph color-main05">Первый месяц в&nbsp;подарок</p>
                  </div>
                </div>
                <p>&nbsp;</p>
              </template>
              <template slot="content-without-wrapper">
                <div class="rt-card__border-content">
                  <div class="rt-col-12 flex-end-center rt-space-top">
                    <rt-price :value="700" time-interval="мес."></rt-price>
                  </div>
                  <div class="rt-space-top05">
                    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                  </div>
                </div>
              </template>
            </rt-card>
          </rt-carousel-slide>

          <rt-carousel-slide>
            <rt-card>
              <template slot="header">
                <rt-logo height="70"></rt-logo>
              </template>
              <template slot="content">
                <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 4</p>
                <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
                <p>&nbsp;</p>
                <div class="rt-card-list__item">
                  <div class="rt-card-list__icon">
                    <div class="rt-space-left15">
                      <img src="/static/images/small-icon.svg" />
                    </div>
                  </div>
                  <div class="rt-card-list__name">
                    <p class="rt-font-small-paragraph color-main05">Первый месяц в&nbsp;подарок</p>
                  </div>
                </div>
                <p>&nbsp;</p>
              </template>
              <template slot="content-without-wrapper">
                <div class="rt-card__border-content">
                  <div class="rt-col-12 flex-end-center rt-space-top">
                    <rt-price :value="450" time-interval="мес."></rt-price>
                  </div>
                  <div class="rt-space-top05">
                    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                  </div>
                </div>
              </template>
            </rt-card>
          </rt-carousel-slide>

          <rt-carousel-slide>
            <rt-card>
              <template slot="header">
                <rt-logo height="70"></rt-logo>
              </template>
              <template slot="content">
                <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 5</p>
                <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
                <p>&nbsp;</p>
                <div class="rt-card-list__item">
                  <div class="rt-card-list__icon">
                    <div class="rt-space-left15">
                      <img src="/static/images/small-icon.svg" />
                    </div>
                  </div>
                  <div class="rt-card-list__name">
                    <p class="rt-font-small-paragraph color-main05">Первый месяц в&nbsp;подарок</p>
                  </div>
                </div>
                <p>&nbsp;</p>
              </template>
              <template slot="content-without-wrapper">
                <div class="rt-card__border-content">
                  <div class="rt-col-12 flex-end-center rt-space-top">
                    <rt-price :value="300" time-interval="мес."></rt-price>
                  </div>
                  <div class="rt-space-top05">
                    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                  </div>
                </div>
              </template>
            </rt-card>
          </rt-carousel-slide>

          <rt-carousel-slide>
            <rt-card>
              <template slot="header">
                <rt-logo height="70"></rt-logo>
              </template>
              <template slot="content">
                <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 6</p>
                <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
                <p>&nbsp;</p>
                <div class="rt-card-list__item">
                  <div class="rt-card-list__icon">
                    <div class="rt-space-left15">
                      <img src="/static/images/small-icon.svg" />
                    </div>
                  </div>
                  <div class="rt-card-list__name">
                    <p class="rt-font-small-paragraph color-main05">Первый месяц в&nbsp;подарок</p>
                  </div>
                </div>
                <p>&nbsp;</p>
              </template>
              <template slot="content-without-wrapper">
                <div class="rt-card__border-content">
                  <div class="rt-col-12 flex-end-center rt-space-top">
                    <rt-price :value="650" time-interval="мес."></rt-price>
                  </div>
                  <div class="rt-space-top05">
                    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                  </div>
                </div>
              </template>
            </rt-card>
          </rt-carousel-slide>

          <rt-carousel-slide>
            <rt-card>
              <template slot="header">
                <rt-logo height="70"></rt-logo>
              </template>
              <template slot="content">
                <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 7</p>
                <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
                <p>&nbsp;</p>
                <div class="rt-card-list__item">
                  <div class="rt-card-list__icon">
                    <div class="rt-space-left15">
                      <img src="/static/images/small-icon.svg" />
                    </div>
                  </div>
                  <div class="rt-card-list__name">
                    <p class="rt-font-small-paragraph color-main05">Первый месяц в&nbsp;подарок</p>
                  </div>
                </div>
                <p>&nbsp;</p>
              </template>
              <template slot="content-without-wrapper">
                <div class="rt-card__border-content">
                  <div class="rt-col-12 flex-end-center rt-space-top">
                    <rt-price :value="777" time-interval="мес."></rt-price>
                  </div>
                  <div class="rt-space-top05">
                    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                  </div>
                </div>
              </template>
            </rt-card>
          </rt-carousel-slide>
        </rt-carousel>
      </div>'
      />
    </div>


    <div class="rt-space-top5">
      <pre-code text='
        <rt-carousel slides-classes="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
          <rt-carousel-slide>
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage1.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">
                  Headstone
                </p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </rt-carousel-slide>
          <rt-carousel-slide>
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage2.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">
                  Headstone
                </p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </rt-carousel-slide>
          <rt-carousel-slide>
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage3.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">
                  Headstone
                </p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </rt-carousel-slide>
          <rt-carousel-slide :loaded="false">
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage1.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">
                  Headstone (not-loaded demo)
                </p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </rt-carousel-slide>
          <rt-carousel-slide>
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage2.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">
                  Headstone
                </p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </rt-carousel-slide>
        </rt-carousel>
      </div>' />
    </div>

    <div class="rt-space-top5">
      <pre-code text='
        <rt-carousel>
          <rt-carousel-slide slide-classes="rt-col-4 in-plus-card higher-z">
            <rt-card
              :equal-padding="true"
              :has-discount="true"
              :discount-lines="1"
              :is-b2b-package="true">
              <template slot="header">
                <h3 class="rt-space-bottom rt-font-bold">
                  Пакет S
                </h3>
              </template>
              <template slot="content">
                <div class="rtb-card__section">
                  <p class="tagline color-main03 rt-space-bottom05">
                    Интернет
                  </p>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph rt-font-bold">
                      10 Мбит/с
                    </p>
                    <p class="rt-font-paragraph rt-font-bold">
                      по проводу или мобильный
                    </p>
                  </div>
                </div>
                <div class="rtb-card__section">
                  <p class="tagline color-main03 rt-space-bottom05">
                    Мобильная связь
                  </p>
                  <div class="rtb-card__description__row">
                    <span class="rt-font-paragraph rt-font-bold">1 сим-карта</span>
                    <rt-hint :simple-tool-tip="true">
                      <slot>
                        Это всё что угодно,<br >но не адрес электронной почты
                        Это всё что угодно,<br >но не адрес электронной почты
                        Это всё что угодно,<br >но не адрес электронной почты
                      </slot>
                    </rt-hint>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph rt-font-bold">
                      300 минут
                    </p>
                    <p class="rt-font-small-paragraph color-main025">
                      на номера домашнего региона
                    </p>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph rt-font-bold">
                      3 Гб
                    </p>
                    <p class="rt-font-small-paragraph color-main025">
                      интернета по России
                    </p>
                  </div>
                  <div class="rtb-card__description__row">

                  </div>
                  <div class="rtb-card__description__row rt-space-top05">
                    <a href="#" class="rt-font-control rt-link rt-link--purple">Условия тарифа «Вызов 250»</a>
                  </div>
                </div>
              </template>
              <template slot="footer">
                <div class="rt-space-bottom" />
                <div class="rtb-card__cost">
                  <rt-price
                    :value="2500"
                    :is-option="false"
                    currency="₽"
                    :b2b-price="true"
                    time-interval="в месяц"/>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-small-paragraph color-main025">
                    Цена за услуги вне пакета
                    <rt-price
                      :value="6000"
                      :is-option="false"
                      currency="₽"
                      :b2b-price="true"
                      time-interval=""
                      :darkened="true"/>
                  </p>
                </div>
                <a href="#">
                  <button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                    Выбрать
                  </button>
                </a>
              </template>
            </rt-card>
          </rt-carousel-slide>
          <rt-carousel-slide slide-classes="rt-col-4 in-plus-card higher-z">
            <rt-card
              :equal-padding="true"
              :has-discount="true"
              :discount-lines="2"
              :is-b2b-package="true">
              <template slot="header">
                <h3 class="rt-space-bottom rt-font-bold">
                  Пакет S
                </h3>
              </template>
              <template slot="content">
                <div class="rtb-card__section">
                  <p class="tagline color-main03 rt-space-bottom05">
                    Интернет
                  </p>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph rt-font-bold">
                      10 Мбит/с
                    </p>
                    <p class="rt-font-paragraph rt-font-bold">
                      по проводу или мобильный
                    </p>
                  </div>
                </div>
                <div class="rtb-card__section">
                  <p class="tagline color-main03 rt-space-bottom05">
                    Мобильная связь
                  </p>
                  <div class="rtb-card__description__row">
                    <span class="rt-font-paragraph rt-font-bold">1 сим-карта</span>
                    <rt-hint :simple-tool-tip="true">
                      <slot>
                        Это всё что угодно,<br >но не адрес электронной почты
                        Это всё что угодно,<br >но не адрес электронной почты
                        Это всё что угодно,<br >но не адрес электронной почты
                      </slot>
                    </rt-hint>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph rt-font-bold">
                      300 минут
                    </p>
                    <p class="rt-font-small-paragraph color-main025">
                      на номера домашнего региона
                    </p>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph rt-font-bold">
                      3 Гб
                    </p>
                    <p class="rt-font-small-paragraph color-main025">
                      интернета по России
                    </p>
                  </div>
                  <div class="rtb-card__description__row">

                  </div>
                  <div class="rtb-card__description__row rt-space-top05">
                    <a href="#" class="rt-font-control rt-link rt-link--purple">Условия тарифа «Вызов 250»</a>
                  </div>
                </div>
              </template>
              <template slot="footer">
                <div class="rt-space-bottom" />
                <div class="rtb-card__cost">
                  <rt-price
                    :value="2500"
                    :is-option="false"
                    currency="₽"
                    :b2b-price="true"
                    time-interval="в месяц"/>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-small-paragraph color-main025">
                    Цена за услуги вне пакета
                    <rt-price
                      :value="6000"
                      :is-option="false"
                      currency="₽"
                      :b2b-price="true"
                      time-interval=""
                      :darkened="true"/>
                  </p>
                </div>
                <a href="#">
                  <button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                    Выбрать
                  </button>
                </a>
              </template>
            </rt-card>
          </rt-carousel-slide>
          <rt-carousel-slide slide-classes="rt-col-4 in-plus-card higher-z">
            <rt-card
              :equal-padding="true"
              :has-discount="true"
              :discount-lines="3"
              :is-b2b-package="true">
              <template slot="header">
                <h3 class="rt-space-bottom rt-font-bold">
                  Пакет S
                </h3>
              </template>
              <template slot="content">
                <div class="rtb-card__section">
                  <p class="tagline color-main03 rt-space-bottom05">
                    Интернет
                  </p>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph rt-font-bold">
                      10 Мбит/с
                    </p>
                    <p class="rt-font-paragraph rt-font-bold">
                      по проводу или мобильный
                    </p>
                  </div>
                </div>
                <div class="rtb-card__section">
                  <p class="tagline color-main03 rt-space-bottom05">
                    Мобильная связь
                  </p>
                  <div class="rtb-card__description__row">
                    <span class="rt-font-paragraph rt-font-bold">1 сим-карта</span>
                    <rt-hint :simple-tool-tip="true">
                      <slot>
                        Это всё что угодно,<br >но не адрес электронной почты
                        Это всё что угодно,<br >но не адрес электронной почты
                        Это всё что угодно,<br >но не адрес электронной почты
                      </slot>
                    </rt-hint>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph rt-font-bold">
                      300 минут
                    </p>
                    <p class="rt-font-small-paragraph color-main025">
                      на номера домашнего региона
                    </p>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph rt-font-bold">
                      3 Гб
                    </p>
                    <p class="rt-font-small-paragraph color-main025">
                      интернета по России
                    </p>
                  </div>
                  <div class="rtb-card__description__row">

                  </div>
                  <div class="rtb-card__description__row rt-space-top05">
                    <a href="#" class="rt-font-control rt-link rt-link--purple">Условия тарифа «Вызов 250»</a>
                  </div>
                </div>
              </template>
              <template slot="footer">
                <div class="rt-space-bottom" />
                <div class="rtb-card__cost">
                  <rt-price
                    :value="2500"
                    :is-option="false"
                    currency="₽"
                    :b2b-price="true"
                    time-interval="в месяц"/>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-small-paragraph color-main025">
                    Цена за услуги вне пакета
                    <rt-price
                      :value="6000"
                      :is-option="false"
                      currency="₽"
                      :b2b-price="true"
                      time-interval=""
                      :darkened="true"/>
                  </p>
                </div>
                <a href="#">
                  <button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                    Выбрать
                  </button>
                </a>
              </template>
            </rt-card>
          </rt-carousel-slide>
        </rt-carousel>'/>
    </div>

    <div class="rt-space-top5">
      <rt-carousel :debug="true" :scroll-on-click="true">
        <rt-carousel-slide v-for="i in 17" :key="i">
          <div class="rt-space-horizontal05">
            <h2>Слайд {{ i }}</h2>
            <rt-row-list>
              <rt-row-list-item v-for="ir in 3" :key="ir">
                <template slot="option">
                  <div class="d-flex flex-row">
                    <div>
                      <p>Антивирус</p>
                      <p class="color-main05">Kaspersky Internet Security, месяц в подарок</p>
                    </div>
                  </div>
                </template>
              </rt-row-list-item>
            </rt-row-list>
            <rt-price
              class="rt-space-vertical"
              time-interval="мес"
              is-option
              :value="i * 1000"
            />
            <rt-button class="rt-button-orange" value="Подключить">Подключить</rt-button>
          </div>
        </rt-carousel-slide>
      </rt-carousel>
    </div>

    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <documentation-builder :json="documentation" type="components" />
      </div>
    </div>
  </div>
</template>

<script>
import documentation from "../../../lib/components/Carousel/docs/index.json";
import componentsList from "../../componentsList";

export default {
  name: "AppCarousel",
  components: componentsList,
  data: () => {
    return ({
      documentation: {}
    });
  },
  mounted() {
    this.documentation = documentation;
  },
  created() {},
  methods: {}
};
</script>
