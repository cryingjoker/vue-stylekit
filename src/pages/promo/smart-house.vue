<template>

  <div>
    <div class="color-block--rule-color sticked sticked-block" style="top: 0;">
      <rt-scroll-tabs class="rt-scroll-tab-header " active-tabs-classname="rt-scroll-tab-header__item--active"
                      tabs-classname="rt-scroll-tab-header__item"
      >
        <div class="rt-container color-white">
          <div class="rt-col-12">
            <div class="row">
              <div class="rt-col-8">
                <div class="rt-scroll-tab-nav">
                  <a class="rt-scroll-tab-header__item" href="#about">О системе</a>
                  <a class="rt-scroll-tab-header__item" href="#device">Устройства</a>
                  <a class="rt-scroll-tab-header__item" href="#connect">Подключение и управление</a>
                </div>
              </div>
              <div class="rt-col-4 flex-end-center">
                <rt-button class="rt-button-small rt-button-orange rt-space-horizontal">Купить
                </rt-button>
              </div>
            </div>
          </div>
        </div>
      </rt-scroll-tabs>
    </div>

    <rt-banner :is-fullscreen-image="true" class="rt-banner--fill-height" content-min-height="100vh">
      <rt-banner-item background-image="/images/smartHouse/bg.jpg"
                      background-color="none"
                      :content-min-height="631"
      >
        <div class="rt-md-space-right2">
          <p class="rt-font-banner-label-bold color-line">
            <span class="color-line-text">Умный дом</span>
          </p>
          <p class="color-line color-line--is-paragraph rt-space-bottom">
            <span class="color-line-text rt-font-paragraph">
              Ваш дом всегда под контролем,  <br> даже когда вы далеко.
              <svg class="color-line-paragraph-icon" width="38" height="23" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path
                id="a"
                fill="@{b2c-orange-low}"
                d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"
              /></defs><g fill="none" fill-rule="evenodd"><path
                d="M33-81.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
                fill="#FFF"
              /><use fill="#FF4F12" xlink:href="#a" /></g></svg>
            </span>
          </p>
          <div class="rt-space-top2">
            <div class="rt-md-space-top05 rt-md-space-horizontal05 d-inline-block">
              <rt-button class="rt-button-orange rt-space-horizontal05">Подключить</rt-button>
            </div>
            <div class="rt-md-space-top05 rt-space-left rt-md-space-horizontal05  d-inline-block">
              <rt-button class="rt-button-orange rt-space-horizontal">Войти</rt-button>
            </div>
          </div>
        </div>
      </rt-banner-item>
    </rt-banner>
    <div id="about" class="color-block--white">
      <div class="rt-container">
        <div class="rt-col-12 rt-space-top3">
          <div class="row">
            <div class="rt-col-1 md-d-none" />
            <div class="rt-col-5 flex-center-center rt-md-space-bottom2 rt-col-md-3">
              <div>
                <p class="rt-font-promo-title color-main07">О системе</p>
                <p class="rt-font-paragraph rt-space-top color-main05">«Умный дом» — это безопасный и
                комфортный дом. Вы будете знать обо всём, что в нём происходит, даже находясь в
                другом городе. Система датчиков и устройств моментО системеально уведомит вас о
                любых
                происшествиях. А ещё вы сможете управлять бытовыми приборами удалённо: например, с
                помощью смартфона выключить утюг, даже если вы уже ушли из дома.</p>
              </div>
            </div>
            <div class="rt-col-2" />
            <div class="rt-col-4 flex-start-bottom rt-space-top25 rt-col-md-3 rt-md-space-top">
              <div class="rt-space-horizontal flex-md-center">
                <div class="phone">
                  <div class="phone__container" />
                  <img src="/images/smartHouse/app.jpg" class="phone__image"/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <rt-banner :is-fullscreen-image="true" class="rt-banner--fill-height" content-min-height="100vh">
      <rt-banner-item background-image="/images/smartHouse/bg2.jpg"
                      background-color="none"
                      content-min-height="100vh"
      >
        <div class="rt-md-space-right2">
          <p class="rt-font-banner-label-bold color-line rt-space-top">
            <span class="color-line-text">Чем занят <br>  мой ребёнок?</span>
          </p>
          <p class="color-line color-line--is-paragraph rt-space-bottom">
            <span class="color-line-text rt-font-paragraph">
              Спокойно оставляйте детей одних или с няней — благодаря камере внутреннего видеонаблюдения  вы всегда сможете узнать, что происходит дома.
              <svg class="color-line-paragraph-icon" width="38" height="23" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path
                id="a"
                fill="@{b2c-orange-low}"
                d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"
              /></defs><g fill="none" fill-rule="evenodd"><path
                d="M33-81.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
                fill="#FFF"
              /><use fill="#FF4F12" xlink:href="#a" /></g></svg>
            </span>
          </p>
          <div class="rt-space-top2 rt-md-space-top">
            <rt-button class="rt-button-orange">Подобрать комплект</rt-button>
          </div>
        </div>
      </rt-banner-item>
      <rt-banner-item background-image="/images/smartHouse/bg.jpg"
                      background-color="none"
                      content-min-height="100vh"
      >
        <div class="rt-md-space-right2">

          <p class="rt-font-banner-label-bold color-line rt-space-top">
            <span class="color-line-text">Чем занят <br>  мой ребёнок?</span>
          </p>
          <p class="color-line color-line--is-paragraph rt-space-bottom">
            <span class="color-line-text rt-font-paragraph">
              Спокойно оставляйте детей одних или с няней — благодаря камере внутреннего видеонаблюдения  вы всегда сможете узнать, что происходит дома.
              <svg class="color-line-paragraph-icon" width="38" height="23" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path
                id="a"
                fill="@{b2c-orange-low}"
                d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"
              /></defs><g fill="none" fill-rule="evenodd"><path
                d="M33-81.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
                fill="#FFF"
              /><use fill="#FF4F12" xlink:href="#a" /></g></svg>
            </span>
          </p>
          <div class="rt-space-top2">
            <rt-button class="rt-button-orange">Подобрать комплект</rt-button>
          </div>
        </div>
      </rt-banner-item>
      <rt-banner-item background-image="/example-images/banerBackground1.jpg"
                      background-color="none"
                      content-min-height="100vh"
      >
        <div class="rt-md-space-right2">
          <p class="rt-font-banner-label-bold color-line rt-space-top">
            <span class="color-line-text">Чем занят <br>  мой ребёнок?</span>
          </p>
          <p class="color-line color-line--is-paragraph rt-space-bottom">
            <span class="color-line-text rt-font-paragraph">
              Спокойно оставляйте детей одних или с няней — благодаря камере внутреннего видеонаблюдения  вы всегда сможете узнать, что происходит дома.
              <svg class="color-line-paragraph-icon" width="38" height="23" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path
                id="a"
                fill="@{b2c-orange-low}"
                d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"
              /></defs><g fill="none" fill-rule="evenodd"><path
                d="M33-81.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
                fill="#FFF"
              /><use fill="#FF4F12" xlink:href="#a" /></g></svg>
            </span>
          </p>
          <div class="rt-space-top2 rt-md-space-top">
            <rt-button class="rt-button-orange">Подобрать комплект</rt-button>
          </div>
        </div>
      </rt-banner-item>
    </rt-banner>
    <div id="device" class="color-block--light-grey">
      <div class="rt-container rt-space-vertical">
        <div class="rt-col-12">
          <div class="rt-font-paragraph rt-space-horizontal">
            <p class="rt-font-promo-title rt-space-bottom15">Устройства</p>
          </div>
        </div>
        <rt-tabs :navigation-horizontal-padding="30">
          <template slot="navigation">
            <rt-tabs-nav-item name="Complects">Комплекты</rt-tabs-nav-item>
            <rt-tabs-nav-item name="Video">Видеокамеры</rt-tabs-nav-item>
            <rt-tabs-nav-item name="Sensors">Датчики</rt-tabs-nav-item>
          </template>
          <template slot="content">
            <div class="rt-col-12 rt-space-top">
              <rt-tabs-content-item name="Complects">
                <div class="row">
                  <div class="rt-col-4 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :static-body-height="true">
                      <template slot="content">
                        <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Базовый
                        комплект</p>
                        <p class="rt-font-label-uppercase rt-font-spacing2 rt-space-bottom2">
                          умный дом</p>
                        <img src="/images/smartHouse/smart1.png" class="rt-card-img" alt="">
                        <p class="rt-font-small-paragraph color-main07 rt-space-top">Комплект
                        самых необходимых датчиков для ознакомления с системой «Умный
                        дом».</p>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">Датчик
                                открытия дверей и окон </p>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">Датчик
                                движения</p>
                                <p class="rt-font-label color-main05">движение,
                                температуру и освещенность</p>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name" />
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name" />
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name" />
                          </div>
                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-4 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :static-body-height="true">
                      <template slot="content">
                        <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Расширенный
                        комплект</p>
                        <p class="rt-font-label-uppercase rt-font-spacing2 rt-space-bottom2">
                          умный дом</p>
                        <img src="/images/smartHouse/smart2.png" class="rt-card-img" alt="">
                        <p class="rt-font-small-paragraph color-main07 rt-space-top">Комплект
                        самых необходимых датчиков для ознакомления с системой «Умный
                        дом».</p>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">Датчик
                                открытия дверей и окон </p>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">Датчик
                                движения</p>
                                <p class="rt-font-label color-main05">движение,
                                температуру и освещенность</p>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name" />
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name" />
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name" />
                          </div>
                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-4 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :static-body-height="true">
                      <template slot="content">
                        <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Управление</p>
                        <p class="rt-font-label-uppercase rt-font-spacing2 rt-space-bottom2">
                          умный дом</p>
                        <img src="/images/smartHouse/smart3.png" class="rt-card-img" alt="">
                        <p class="rt-font-small-paragraph color-main07 rt-space-top">Комплект
                        самых необходимых датчиков для ознакомления с системой «Умный
                        дом».</p>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">Датчик
                                открытия дверей и окон </p>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">Датчик
                                движения</p>
                                <p class="rt-font-label color-main05">движение,
                                температуру и освещенность</p>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name" />
                          </div>

                        </div>
                      </template>
                    </rt-card>
                  </div>
                </div>
              </rt-tabs-content-item>
              <rt-tabs-content-item name="Video">
                <div class="row">
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="132" src="/images/smartHouse/contr1.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="154" src="/images/smartHouse/contr2.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </template>
                      <template slot="footer">
                        <p class="color-main03 rt-font-label rt-font-center rt-space-top15">
                          Необходим контроллер</p>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="151" src="/images/smartHouse/contr3.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </template>
                      <template slot="footer">
                        <p class="color-main03 rt-font-label rt-font-center rt-space-top15">
                          Необходим контроллер</p>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="144" src="/images/smartHouse/contr4.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="144" src="/images/smartHouse/contr5.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </template>
                      <template slot="footer">
                        <p class="color-main03 rt-font-label rt-font-center rt-space-top15">
                          Необходим контроллер</p>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="154" src="/images/smartHouse/contr6.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="154" src="/images/smartHouse/contr7.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="154" src="/images/smartHouse/contr8.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="154" src="/images/smartHouse/contr9.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="154" src="/images/smartHouse/contr10.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="154" src="/images/smartHouse/contr11.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </rt-card>
                  </div>
                </div>

              </rt-tabs-content-item>
              <rt-tabs-content-item name="Sensors">
                <div class="row">
                  <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
                    <rt-card :card-body-height="191" :static-body-height="true">
                      <template slot="content">
                        <div class="rt-font-center">
                          <img height="154" src="/images/smartHouse/contr8.png"
                               class="rt-card-img" alt=""
                          >
                        </div>
                      </template>
                      <template slot="bottom-list">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">

                            <div class="rt-card-list__icon">
                              <svg width="56" height="56">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M55.4477 28.3788c0 15.188-12.313 27.5-27.5 27.5-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5c15.187 0 27.5 12.312 27.5 27.5"
                                        fill="#B6DE4E"
                                  />
                                  <path stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                        d="M27.9477 10.3749l-15.455 14.287h3.434v17.721h24.041v-17.721h3.435l-4.602-4.259v-10.028h-5.702v4.739zM27.9819 22.8071v6.457"
                                  />
                                  <path d="M25.043 25.3168c-2.705 1.523-3.761 4.917-2.395 7.755 1.422 2.954 4.978 4.158 7.933 2.735 2.954-1.422 4.157-4.978 2.735-7.932-.542-1.084-1.35-1.946-2.384-2.546"
                                        stroke="#FFF" stroke-width="1.5"
                                        stroke-linejoin="round"
                                  />
                                </g>

                              </svg>
                            </div>
                            <div class="rt-card-list__name">
                              <div>
                                <p class="rt-font-small-paragraph color-main07">
                                  Контроллер </p>
                                <p class="rt-font-label color-main05">Необходим для
                                управления и настройки устройств,</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </rt-card>
                  </div>
                </div>
              </rt-tabs-content-item>
            </div>
          </template>
        </rt-tabs>

      </div>
    </div>
    <div id="connect" class="color-block--white no-overflow-y">
      <div class="rt-container">
        <div class="rt-col-12 rt-space-top3">
          <div class="row">
            <div class="rt-col-1 md-d-none" />
            <div class="rt-col-5 flex-center-center rt-col-md-3">
              <div>
                <p class="rt-font-promo-title color-main07">Подключение и управление</p>
                <p class="rt-font-paragraph rt-space-top color-main05">Установить и настроить «Умный
                дом» несложно, в комплекте вы найдете подробную инструкцию. Тем не менее, если у вас
                возникнут сложности, мы всё сделаем за вас: просто скажите о своем желании оператору
                при звонке. Услуга платная, о стоимости вам расскажет оператор.
                  <br><br>Управлять устройствами можно с компьютера, планшета или смартфона — через
                  личный кабинет и мобильное приложение.</p>
                <div class="rt-space-top15 rt-font-md-center">
                  <a href="#" class="d-inline-block ">
                    <img src="/images/applePlay.svg" alt="">
                  </a>
                  <a href="#"
                     class="d-inline-block rt-space-left rt-md-space-horizontal-none rt-md-space-vertical"
                  >
                    <img src="/images/googlePlay.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
            <div class="rt-col-2 md-d-none" />
            <div class="rt-col-4 flex-start-bottom rt-space-top25 rt-col-md-3 rt-md-space-top">
              <div class="rt-space-horizontal flex-md-center">
                <div class="phone phone--is-big">
                  <div class="phone__container" />
                  <img src="/images/smartHouse/app.jpg" class="phone__image"/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block--light-grey">
      <div class="rt-container rt-space-vertical">
        <div class="rt-col-12">
          <div class="row">
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
              <rt-card :background-image="'/images/smartHouse/smart-house.png'"
                       :background-position="'right'"
                       :background-image-stand-alone="true"
                       backgroun-size-width="33%"
                       backgroun-size-height="60%"
                       background-position-right="-5%"
                       background-position-top="20%"

                       :col-size="2"
              >
                <template slot="footer">
                  <div class="rt-space-bottom  color-main07">
                    <p class="rt-font-paragraph">Беспроцентная рассрочка на комплекты Умный дом</p>
                    <p class="rt-space-top rt-space-bottom25">Короткое описание <br> предложения</p>

                  </div>
                  <p>Подробнее</p>
                </template>

              </rt-card>


            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
              <rt-card :background-image="'/example-images/cardBackground9.png'"
                       :background-image-stand-alone="true"
                       :background-position="'bottom-right'"
                       backgroun-size-width="40%"
                       backgroun-size-height="100%"
                       :col-size="2"
              >

                <template slot="footer">
                  <div class="rt-space-bottom  color-main07">
                    <p class="rt-font-paragraph">Купи камеру и получи год сервиса в подарок</p>
                    <p class="rt-space-top rt-space-bottom25">Короткое описание <br> предложения</p>

                  </div>
                  <p>Подробнее</p>
                </template>

              </rt-card>


            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block--rule-color">
      <div class="rt-container rt-space-top2 rt-space-bottom">
        <div class="rt-col-12">
          <rt-annotation label="Примечание" :has-white-color="true">

          <template slot="content">
            <p class="rt-annotation-item"> 1. Услуги Высокоскоростного интернета предоставляются при наличии
            технической возможности.</p>
            <p class="rt-annotation-item"> 2. Цены указаны в рублях с учетом НДС.</p>
            <p class="rt-annotation-item"> «По оптической линии» — предоставление доступа к сети Интернет
            осуществляется по технологии FTTx (англ., fiber to the x — оптическое волокно до точки X)
            или по технологии PON (англ. Passive Optical Networks — пассивная оптическая сеть до
            абонента).</p>
            <p class="rt-annotation-item"> «По телефонной линии» — предоставление доступа к сети Интернет
            осуществляется по технологии xDSL (англ., digital subscriber line, цифровая абонентская
            линия).</p>
            <p class="rt-annotation-item"> 3. Предоставление доступа к сети Интернет осуществляется по технологии
            xDSL (англ., digital subscriber line, цифровая абонентская линия).</p>
            <p class="rt-annotation-item"> 4. Скорость доступа к сети Интернет зависит не только от технических
            особенностей Услуги, но и от действий третьих сил, организаций и лиц, управляющих сегментами
            сети Интернет (или оказывающих на них влияние), не принадлежащих ПАО «Ростелеком». Скорость
            доступа к сети Интернет является величиной неопределенной и зависит от ряда параметров, в
            том числе, технических характеристик подключения, маршрута и текущей загрузки каналов,
            характеристиками установленного абонентского оборудования (ПК, смартфон, WiFi-роутер),
            версией программного обеспечения или используемого стандарта, месторасположением
            запрашиваемого контента. Все параметры являются переменными и не гарантируются ПАО
            «Ростелеком» за пределами своей сети. Указанная в тарифном плане скорость является
            максимально возможной.</p>
            <p class="rt-annotation-item"> 5. Абонентselect-arrow__iconская плата за услугу Интернет списывается с лицевого счета
            абонента один раз в месяц. В первый месяц пользования услугой Интернет с лицевого счета
            абонента списывается абонентская плата, рассчитанная пропорционально количеству дней от даты
            начала оказания услуги до конца месяца.</p>
            <p class="rt-annotation-item"> 6. Оборудование (маршрутизатор или абонентский модем в зависимости от
            технологии предоставления услуги), необходимое для получения услуг, может быть приобретено
            отдельно по действующим тарифам. Стоимость оборудования уточняйте по телефону
            8-800-100-0-800.</p>
            <p class="rt-annotation-item"> 7. Safe Kids — Сэйф кидс (перевод с англ. — Защищенные дети). Услуга
            предоставляется на территории Российской Федерации для абонентов-физических лиц при наличии
            технической возможности. При первом подключении услуги на условиях ежемесячной подписки
            первые 30 календарных дней с момента активации услуги предоставляются без взимания
            абонентской платы, далее согласно Базовым тарифам. При первом подключении услуги на условиях
            годовой подписки абонент пользуется услугой 14 месяцев (420 календарных дней) с момента
            активации, два последних месяца предоставляются без взимания абонентской платы. При
            прологнации услуги или повторных подключениях на условиях годовой подписки период
            пользования составляет 360 календарных дней. Подробности об услуге, ПАО «Ростелеком»
            узнавайте по бесплатному номеру 8-800-100-0-800, а также на сайте www.rt.ru.</p>
          </template>
          </rt-annotation>
        </div>

      </div>
    </div>
  </div>
</template>

<style coped lang="less">
.phone {
  margin-bottom: -13vw;
  @media (max-width: 968px) {
    margin-bottom: -30vw;
  }
  &--is-big {
    margin-bottom: -11vw;
    @media (max-width: 968px) {
      margin-bottom: -26vw;
    }
  }
}
</style>

<script>
import {
  Button,
  ScrollTabs,
  Price,
  Tabs,
  TabsContentItem,
  TabsNavigationItem,
  Annotation
} from '@/main-elements';
import { Banner, BannerItem } from '@/experimental-elements';
import { Card } from '@/complex-elements/Card';

const componentsList = {};

componentsList[Price.name] = Price;
componentsList[Card.name] = Card;
componentsList[Button.name] = Button;
componentsList[ScrollTabs.name] = ScrollTabs;
componentsList[Banner.name] = Banner;
componentsList[BannerItem.name] = BannerItem;
componentsList[Tabs.name] = Tabs;
componentsList[TabsContentItem.name] = TabsContentItem;
componentsList[TabsNavigationItem.name] = TabsNavigationItem;
componentsList[Annotation.name] = Annotation;

export default {
  name: 'AppRadioButton',
  components: componentsList,
  mounted() {},
  created() {},
  methods: {},
};
</script>
