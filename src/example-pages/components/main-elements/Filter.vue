<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">Filter</h1>
        </div>
      </div>
      <div class="app-body">
        <rt-filter :change-url="true">
          <div class="row">
            <div class="rt-col-8">
              <div class="row">
                <rt-filter-watcher :options="['creator','count','subscription']" :values="[['kaspersky','drweb'],'1','only month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/img/logo/Kaspersky_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Anti-Virus
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Решение для базовой защиты компьютера Windows от основных видов интернет-угроз.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает одно устройство
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов, трояских программ и червей
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шпионского и рекламного программного обеспечения
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Проверка файлов, почты в режиме реального времени
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов при работе с мессенджерами
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="99" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="[['kaspersky','drweb'],'less than 3','only month']"
                                   class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/img/logo/Kaspersky_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Internet Security 2 устройства
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Надежное и удобное решение для защиты вашей жизни в интернете, которое включает в себя родительский контроль,
                        дополнительный уровень защиты финансов, конфендициальность и защиту общения
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает два устройства
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов-вымогателей и других вредоносных программ
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита онлайн-платежей
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Родительский контроль»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шифровальщиков
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Блокировка баннеров и всплывающей рекламы
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="0" :old-value="139" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="[['kaspersky','drweb'],'less than 3','not month']"
                                   class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/img/logo/Kaspersky_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Internet Security 2 устройства
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Надежное и удобное решение для защиты вашей жизни в интернете, которое включает в себя родительский контроль,
                        дополнительный уровень защиты финансов, конфендициальность и защиту общения
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает два устройства
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов-вымогателей и других вредоносных программ
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита онлайн-платежей
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Родительский контроль»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шифровальщиков
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Блокировка баннеров и всплывающей рекламы
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="1600" :old-value="1800" time-interval="год"></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['kaspersky','less than 4','only month']"
                                   class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/img/logo/Kaspersky_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Internet Security 3 устройства
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Надежное и удобное решение для защиты вашей жизни в интернете, которое включает в себя родительский контроль,
                        дополнительный уровень защиты финансов, конфендициальность и защиту общения.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает три устройства
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов-вымогателей и других вредоносных программ
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита онлайн-платежей
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Родительский контроль»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шифровальщиков
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Блокировка баннеров и всплывающей рекламы
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="159" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['kaspersky','1','only month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/img/logo/Kaspersky_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Safe Kids
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Новое мультиплатформенное решение для защиты детей в интернете, мобильных сетях, на компьютерах и мобильных
                        устройствах.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает одно устройство
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Гибкое регулирование доступа к сайтам и программам
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Ограничение времени использования устройств
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Отслеживание звонков и SMS ребенка на телефоне Android
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Контроль местонахождения ребенка и установка безопасной зоны
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              SMS-информирование о действиях ребенка
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Советы психолога по поведению детей в сети интернет
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="0" :old-value="99" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['kaspersky','1','not month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/img/logo/Kaspersky_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Safe Kids
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Новое мультиплатформенное решение для защиты детей в интернете, мобильных сетях, на компьютерах и мобильных
                        устройствах.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает одно устройство
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Гибкое регулирование доступа к сайтам и программам
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Ограничение времени использования устройств
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Отслеживание звонков и SMS ребенка на телефоне Android
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Контроль местонахождения ребенка и установка безопасной зоны
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              SMS-информирование о действиях ребенка
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Советы психолога по поведению детей в сети интернет
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="900" time-interval="год"></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['drweb','1','only month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="https://www.old.rt.ru/data/img/logo-drweb.png" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Dr.Web Классик
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Минимально необходимая защита от вирусов.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает одно устройство
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Онлайн защита от основных видов вирусов
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от хакерских атак
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="79" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['drweb','1','not month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="https://www.old.rt.ru/data/img/logo-drweb.png" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Dr.Web Классик
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Минимально необходимая защита от вирусов.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает одно устройство
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Онлайн защита от основных видов вирусов
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от хакерских атак
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="828" time-interval="год"></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['drweb','1','only month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="https://www.old.rt.ru/data/img/logo-drweb.png" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Dr.Web Премиум
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Расширенная защита от вирусов, почтовых червей, троянов и шпионских программ.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает одно устройство
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов и вредоносного ПО
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Проверка веб-страниц в режиме реального времени
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Блокировка фишинговых интернет-ресурсов
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шифровальщиков
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Антиспам»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Родительский контроль»
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="89" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['drweb','1','not month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="https://www.old.rt.ru/data/img/logo-drweb.png" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Dr.Web Премиум
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Расширенная защита от вирусов, почтовых червей, троянов и шпионских программ.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает одно устройство
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов и вредоносного ПО
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Проверка веб-страниц в режиме реального времени
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Блокировка фишинговых интернет-ресурсов
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шифровальщиков
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Антиспам»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Родительский контроль»
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="1068" time-interval="год"></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['eset','less than 4','only month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/internet/ESET_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        ESET NOD32 Antivirus
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Быстрое и надежное решение для базовой защиты компьютера.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает три устройства
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шпионских программ
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от фишинга
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="90" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['eset','less than 4','not month']"
                                   class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/internet/ESET_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        ESET NOD32 Antivirus
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Быстрое и надежное решение для базовой защиты компьютера.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает три устройства
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шпионских программ
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от фишинга
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="1080" :old-value="1390" time-interval="год"></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['eset','less than 4','only month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/internet/ESET_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        ESET NOD32 Smart Security
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Комплексное антивирусное решение для максимальной защиты вашего устройства.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает три устройства
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шпионских программ
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от спама
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Файервол
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита вэб-камеры
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="140" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['eset','less than 4','not month']"
                                   class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/internet/ESET_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        ESET NOD32 Smart Security
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Комплексное антивирусное решение для максимальной защиты вашего устройства.
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает три устройства
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от вирусов
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от шпионских программ
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от спама
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Файервол
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита вэб-камеры
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="1750" time-interval="год"></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['eset','less than 6','only month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/internet/ESET_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        ESET NOD32 Smart Security Family 5 устройств
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Максимальная защита устройств в сети интернет
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает пять устройств
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита «умных» устройств (система «Умный дом»)
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита Wi-Fi роутеров
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Родительский контроль»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита вэб-камеры от взлома
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от хакерских атак
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="139" :old-value="189" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['eset','less than 6','not month']"
                                   class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/internet/ESET_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        ESET NOD32 Smart Security Family 5 устройств
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Максимальная защита устройств в сети интернет
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает пять устройств
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита «умных» устройств (система «Умный дом»)
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита Wi-Fi роутеров
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Родительский контроль»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита вэб-камеры от взлома
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защита от хакерских атак
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="1670" :old-value="2250" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['eset','1','only month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/internet/ESET_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        ESET NOD32 Mobile Security
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Надежная защита планшетов и смартфонов на базе Android
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает одно устройство
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Антивирус для Android
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Функция «Антивор»
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="66" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','count','subscription']" :values="['eset','1','only month']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img class="rt-card__header__image" src="/sites/default/files/internet/ESET_color.svg" />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        ESET NOD32 Родительский контроль
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Мобильное приложение для контроля и защиты детей в сети интернет
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <img src="/sites/default/files/img/icon/internet_antivirus_80x80.svg" height="55px" />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает одно устройство
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Контроль интернет-сайтов
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Игровой формат и простые настройки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Определение местоположения
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Сообщения ребенку
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img src="/sites/default/files/internet/icon_26%20copy%209.svg" />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Контроль приложений и времени использования
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price :value="0" :old-value="99" time-interval="мес."></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
              </div>
            </div>
            <div class="rt-col-1">
            </div>
            <div class="rt-col-3">
              <rt-sticky>
                <p class="rt-font-paragraph rt-font-bold rt-space-bottom">Способ покупки</p>
                <rt-filter-caller>
                  <rt-radio-button-container>
                    <rt-radio-button :checked="true" name="subscription">Годовая подписка</rt-radio-button>
                    <div class="rt-space-left15 color-dark06 rt-space-bottom">два месяца в подарок</div>
                    <rt-radio-button name="subscription" value="month">Месячная подписка</rt-radio-button>
                    <div class="rt-space-left15 color-dark06 rt-space-bottom">первый месяц 0 рублей</div>
                  </rt-radio-button-container>
                </rt-filter-caller>
                <div class="rt-space-bottom">
                  <p class="rt-font-paragraph rt-font-bold rt-space-bottom">Количество устройств</p>
                  <rt-filter-caller :clear-zero="true">
                    <rt-input name="count" value="1" :show-nubmers-buttons="true" insert-type="number" :min-number="1" :max-number="10"/>
                  </rt-filter-caller>
                </div>
                <rt-filter-caller>
                  <rt-checkbox-container>
                    <p class="rt-font-paragraph rt-font-bold rt-space-bottom">Производитель</p>
                    <div class="rt-space-bottom">
                      <rt-checkbox name="creator" value="kaspersky">Kaspersky Lab</rt-checkbox>
                    </div>
                    <div class="rt-space-bottom">
                      <rt-checkbox name="creator" value="drweb">Dr.Web</rt-checkbox>
                    </div>
                    <div class="rt-space-bottom">
                      <rt-checkbox name="creator" value="eset">ESET NOD32</rt-checkbox>
                    </div>
                  </rt-checkbox-container>
                </rt-filter-caller>
              </rt-sticky>
            </div>
          </div>
        </rt-filter>
        <!--<pre-code-->
          <!--text="<rt-filter :change-url=&quot;true&quot;>-->
  <!--<div class=&quot;row&quot;>-->
    <!--<div class=&quot;rt-col-8&quot;>-->
      <!--<div class=&quot;row&quot;>-->
        <!--<rt-filter-watcher :options=&quot;['creator','device-type','subscription','KasperskyInternetSecurity1',]&quot; :values=&quot;['kaspersky','less than 3','only month']&quot; class=&quot;rt-col-6 rt-space-bottom&quot;>-->
          <!--<rt-card>-->
            <!--<template slot=&quot;header&quot;>-->
              <!--<img-->
                <!--width=&quot;175px&quot;-->
                <!--class=&quot;rt-card__header__image&quot;-->
                <!--src=&quot;/static/images/homeinternet/homeinternet-image18.jpg&quot;-->
              <!--/>-->
            <!--</template>-->
            <!--<template slot=&quot;content&quot;>-->
              <!--<p class=&quot;rt-font-paragraph color-main07 rt-font-bold rt-space-top2&quot;>-->
                <!--Kaspersky Internet Security 1-->
              <!--</p>-->
              <!--<p class=&quot;rt-space-top color-main07 rt-space-right2&quot;>-->
                <!--Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства-->
              <!--</p>-->
            <!--</template>-->
            <!--<template slot=&quot;bottom-list&quot;>-->
              <!--<div class=&quot;rt-card-list rt-space-bottom2&quot;>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->

                    <!--<img-->
                      <!--src=&quot;/static/images/medium-icon.svg&quot;-->
                    <!--/>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Защищает 2 устройства одновременно-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Первый месяц в&nbsp;подарок-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Контроль интернет-сайтов-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Игровой формат и&nbsp;простые настройки-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Определение местоположения-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Сообщения ребенку-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Контроль приложений и&nbsp;времени-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->

            <!--<template slot=&quot;content-without-wrapper&quot;>-->
              <!--<div class=&quot;rt-card__border-content&quot;>-->
                <!--<div class=&quot;rt-col-12 flex-end-center rt-space-top&quot;>-->
                  <!--<rt-price-->
                    <!--:value=&quot;1600&quot;-->
                    <!--:old-value=&quot;1800&quot;-->
                    <!--time-interval=&quot;год.&quot;-->
                  <!--&gt;</rt-price>-->
                <!--</div>-->
                <!--<div class=&quot;rt-space-top05&quot;>-->
                  <!--<rt-button class=&quot;rt-button-orange rt-button&#45;&#45;is-block&quot;>Подключить</rt-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->
          <!--</rt-card>-->
        <!--</rt-filter-watcher>-->
        <!--<rt-filter-watcher :options=&quot;['creator','subscription','KasperskyInternetSecurity2']&quot; :values=&quot;['kaspersky','only month']&quot; class=&quot;rt-col-6 rt-space-bottom&quot;>-->
          <!--<rt-card>-->
            <!--<template slot=&quot;header&quot;>-->
              <!--<img-->
                <!--width=&quot;175px&quot;-->
                <!--class=&quot;rt-card__header__image&quot;-->
                <!--src=&quot;/static/images/homeinternet/homeinternet-image18.jpg&quot;-->
              <!--/>-->
            <!--</template>-->
            <!--<template slot=&quot;content&quot;>-->
              <!--<p class=&quot;rt-font-paragraph color-main07 rt-font-bold rt-space-top2&quot;>-->
                <!--Kaspersky Internet Security 2-->
              <!--</p>-->
              <!--<p class=&quot;rt-space-top color-main07 rt-space-right2&quot;>-->
                <!--Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства-->
              <!--</p>-->
            <!--</template>-->
            <!--<template slot=&quot;bottom-list&quot;>-->
              <!--<div class=&quot;rt-card-list rt-space-bottom2&quot;>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->

                    <!--<img-->
                      <!--src=&quot;/static/images/medium-icon.svg&quot;-->
                    <!--/>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Защищает 2 устройства одновременно-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Первый месяц в&nbsp;подарок-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Контроль интернет-сайтов-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Игровой формат и&nbsp;простые настройки-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Определение местоположения-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Сообщения ребенку-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Контроль приложений и&nbsp;времени-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->

            <!--<template slot=&quot;content-without-wrapper&quot;>-->
              <!--<div class=&quot;rt-card__border-content&quot;>-->
                <!--<div class=&quot;rt-col-12 flex-end-center rt-space-top&quot;>-->
                  <!--<rt-price-->
                    <!--:value=&quot;1600&quot;-->
                    <!--:old-value=&quot;1800&quot;-->
                    <!--time-interval=&quot;год.&quot;-->
                  <!--&gt;</rt-price>-->
                <!--</div>-->
                <!--<div class=&quot;rt-space-top05&quot;>-->
                  <!--<rt-button class=&quot;rt-button-orange rt-button&#45;&#45;is-block&quot;>Подключить</rt-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->
          <!--</rt-card>-->
        <!--</rt-filter-watcher>-->
        <!--<rt-filter-watcher :options=&quot;['creator','archive','subscription',-->
                <!--'KasperskyInternetSecurity3']&quot; :values=&quot;['eset','show','not month']&quot;-->
                           <!--class=&quot;rt-col-6 rt-space-bottom&quot;>-->
          <!--<rt-card>-->
            <!--<template slot=&quot;header&quot;>-->
              <!--<img-->
                <!--width=&quot;175px&quot;-->
                <!--class=&quot;rt-card__header__image&quot;-->
                <!--src=&quot;/static/images/homeinternet/homeinternet-image18.jpg&quot;-->
              <!--/>-->
            <!--</template>-->
            <!--<template slot=&quot;content&quot;>-->
              <!--<p class=&quot;rt-font-paragraph color-main07 rt-font-bold rt-space-top2&quot;>-->
                <!--Kaspersky Internet Security 3-->
              <!--</p>-->
              <!--<p class=&quot;rt-space-top color-main07 rt-space-right2&quot;>-->
                <!--Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства-->
              <!--</p>-->
            <!--</template>-->
            <!--<template slot=&quot;bottom-list&quot;>-->
              <!--<div class=&quot;rt-card-list rt-space-bottom2&quot;>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->

                    <!--<img-->
                      <!--src=&quot;/static/images/medium-icon.svg&quot;-->
                    <!--/>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Защищает 2 устройства одновременно-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Первый месяц в&nbsp;подарок-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Контроль интернет-сайтов-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Игровой формат и&nbsp;простые настройки-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Определение местоположения-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Сообщения ребенку-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Контроль приложений и&nbsp;времени-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->

            <!--<template slot=&quot;content-without-wrapper&quot;>-->
              <!--<div class=&quot;rt-card__border-content&quot;>-->
                <!--<div class=&quot;rt-col-12 flex-end-center rt-space-top&quot;>-->
                  <!--<rt-price-->
                    <!--:value=&quot;1600&quot;-->
                    <!--:old-value=&quot;1800&quot;-->
                    <!--time-interval=&quot;год.&quot;-->
                  <!--&gt;</rt-price>-->
                <!--</div>-->
                <!--<div class=&quot;rt-space-top05&quot;>-->
                  <!--<rt-button class=&quot;rt-button-orange rt-button&#45;&#45;is-block&quot;>Подключить</rt-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->
          <!--</rt-card>-->
        <!--</rt-filter-watcher>-->
        <!--<rt-filter-watcher :options=&quot;['creator','subscription','KasperskyInternetSecurity4']&quot; :values=&quot;['drweb','not month']&quot; class=&quot;rt-col-6 rt-space-bottom&quot;>-->
          <!--<rt-card>-->
            <!--<template slot=&quot;header&quot;>-->
              <!--<img-->
                <!--width=&quot;175px&quot;-->
                <!--class=&quot;rt-card__headeremitSelectedData__image&quot;-->
                <!--src=&quot;/static/images/homeinternet/homeinternet-image18.jpg&quot;-->
              <!--/>-->
            <!--</template>-->
            <!--<template slot=&quot;content&quot;>-->
              <!--<p class=&quot;rt-font-paragraph color-main07 rt-font-bold rt-space-top2&quot;>-->
                <!--Kaspersky Internet Security 4-->
              <!--</p>-->
              <!--<p class=&quot;rt-space-top color-main07 rt-space-right2&quot;>-->
                <!--Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства-->
              <!--</p>-->
            <!--</template>-->
            <!--<template slot=&quot;bottom-list&quot;>-->
              <!--<div class=&quot;rt-card-list rt-space-bottom2&quot;>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->

                    <!--<img-->
                      <!--src=&quot;/static/images/medium-icon.svg&quot;-->
                    <!--/>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Защищает 2 устройства одновременно-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Первый месяц в&nbsp;подарок-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Контроль интернет-сайтов-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Игровой формат и&nbsp;простые настройки-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Определение местоположения-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Сообщения ребенку-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class=&quot;rt-card-list__item&quot;>-->
                  <!--<div class=&quot;rt-card-list__icon&quot;>-->
                    <!--<div class=&quot;rt-space-left15&quot;>-->
                      <!--<img-->
                        <!--src=&quot;/static/images/small-icon.svg&quot;-->
                      <!--/>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class=&quot;rt-card-list__name&quot;>-->
                    <!--<p class=&quot;rt-font-small-paragraph color-main05&quot;>-->
                      <!--Контроль приложений и&nbsp;времени-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->

            <!--<template slot=&quot;content-without-wrapper&quot;>-->
              <!--<div class=&quot;rt-card__border-content&quot;>-->
                <!--<div class=&quot;rt-col-12 flex-end-center rt-space-top&quot;>-->
                  <!--<rt-price-->
                    <!--:value=&quot;1600&quot;-->
                    <!--:old-value=&quot;1800&quot;-->
                    <!--time-interval=&quot;год.&quot;-->
                  <!--&gt;</rt-price>-->
                <!--</div>-->
                <!--<div class=&quot;rt-space-top05&quot;>-->
                  <!--<rt-button class=&quot;rt-button-orange rt-button&#45;&#45;is-block&quot;>Подключить</rt-button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->
          <!--</rt-card>-->
        <!--</rt-filter-watcher>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class=&quot;rt-col-1&quot;>-->
    <!--</div>-->
    <!--<div class=&quot;rt-col-3&quot;>-->
      <!--<rt-sticky>-->

        <!--<p class=&quot;rt-font-paragraph rt-font-bold rt-space-bottom&quot;>Способ покупки</p>-->
        <!--<rt-filter-caller>-->
          <!--<rt-radio-button-container>-->
            <!--<rt-radio-button :checked=&quot;true&quot; name=&quot;subscription&quot;>Годовая подписка</rt-radio-button>-->
            <!--<div class=&quot;rt-space-left15 color-dark06 rt-space-bottom&quot;>два месяца в подарок</div>-->
            <!--<rt-radio-button name=&quot;subscription&quot; value=&quot;month&quot;>Месячная подписка</rt-radio-button>-->
            <!--<div class=&quot;rt-space-left15 color-dark06 rt-space-bottom&quot;>первый месяц 0 рублей</div>-->
          <!--</rt-radio-button-container>-->
        <!--</rt-filter-caller>-->
        <!--<div class=&quot;rt-space-bottom&quot;>-->

          <!--<p class=&quot;rt-font-paragraph rt-font-bold rt-space-bottom&quot;>Количество ПК</p>-->
          <!--<rt-filter-caller :clear-zero=&quot;true&quot;>-->
            <!--<rt-input name=&quot;device-type&quot; value=&quot;0&quot; :show-nubmers-buttons=&quot;true&quot; insert-type=&quot;number&quot;/>-->
          <!--</rt-filter-caller>-->
        <!--</div>-->
        <!--<rt-filter-caller>-->
          <!--<rt-checkbox-container>-->
            <!--<p class=&quot;rt-font-paragraph rt-font-bold rt-space-bottom&quot;>Производитель</p>-->
            <!--<div class=&quot;rt-space-bottom&quot;>-->
              <!--<rt-checkbox name=&quot;creator&quot; value=&quot;kaspersky&quot;>Kaspersky</rt-checkbox>-->
            <!--</div>-->
            <!--<div class=&quot;rt-space-bottom&quot;>-->
              <!--<rt-checkbox name=&quot;creator&quot; value=&quot;drweb&quot;>Dr.Web</rt-checkbox>-->
            <!--</div>-->
            <!--<div class=&quot;rt-space-bottom&quot;>-->
              <!--<rt-checkbox name=&quot;creator&quot; value=&quot;eset&quot;>Eset</rt-checkbox>-->
            <!--</div>-->
          <!--</rt-checkbox-container>-->
        <!--</rt-filter-caller>-->
        <!--<rt-filter-caller>-->
          <!--<rt-switch-container set-props-on-not-checked=&quot;@none&quot;>-->
            <!--<div class=&quot;rt-space-bottom&quot;>-->
              <!--<rt-switch name=&quot;archive&quot; value=&quot;show&quot;>Показать архивные тарифы</rt-switch>-->
            <!--</div>-->
          <!--</rt-switch-container>-->
        <!--</rt-filter-caller>-->
      <!--</rt-sticky>-->
    <!--</div>-->

  <!--</div>-->
<!--</rt-filter>"></pre-code>-->
      </div>

    </div>
  </div>
</template>

<script>

  const componentDirectives = {};

  import componentsList from "../../componentsList";

  export default {
    name: "AppFilter",
    // directives: componentDirectives,
    components: componentsList,
    mounted() {
    },
    created() {
    },
    methods: {}
  };
</script>
