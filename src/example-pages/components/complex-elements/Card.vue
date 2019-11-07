<template>
  <div class="app-content">
    <div class="rt-container">
      <div class="rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">
              Cards
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="app-body">
      <div class="rt-container">
        <div class="rt-col">
          <div class="row rt-space-top is-b2c">
            <div class="rt-col-4">
              <pre-code
                text="<rt-card :ga=&quot;{ offerName: 'Kaspersky Internet Security 4' }&quot;>
                  <template slot='header'>
                    <img width='175px'
                         class='rt-card__headeremitSelectedData__image'
                         src='/static/images/homeinternet/homeinternet-image18.jpg'/>
                  </template>
                  <template slot='content'>
                    <p class='rt-font-paragraph color-main07 rt-font-bold rt-space-top2'>
                        Kaspersky Internet Security 4
                    </p>
                    <p class='rt-space-top color-main07 rt-space-right2'>
                        Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства
                    </p>
                  </template>
                  <template slot='bottom-list'>
                    <div class='rt-card-list rt-space-bottom2'>
                      <div class='rt-card-list__item'>
                        <div class='rt-card-list__icon'>
                          <img src='/static/images/medium-icon.svg'/>
                        </div>
                        <div class='rt-card-list__name'>
                          <p class='rt-font-small-paragraph color-main05'>
                            Защищает 2 устройства одновременно
                          </p>
                        </div>
                        </div>
                        <div class='rt-card-list__item'>
                          <div class='rt-card-list__icon'>
                            <div class='rt-space-left15'>
                              <img src='/static/images/small-icon.svg'/>
                            </div>
                          </div>
                          <div class='rt-card-list__name'>
                            <p class='rt-font-small-paragraph color-main05'>
                                Первый месяц в&nbsp;подарок
                            </p>
                          </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Контроль интернет-сайтов
                                </p>
                            </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Игровой формат и&nbsp;простые настройки
                                </p>
                            </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Определение местоположения
                                </p>
                            </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Сообщения ребенку
                                </p>
                            </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Контроль приложений и&nbsp;времени
                                </p>
                            </div>
                        </div>
                    </div>
                </template>

                <template slot='content-without-wrapper'>
                    <div class='rt-card__border-content'>
                        <div class='rt-col-12 flex-end-center rt-space-top'>
                            <rt-price
                                    :value='1600'
                                    :old-value='1800'
                                    time-interval='год.'
                            ></rt-price>
                        </div>
                        <div class='rt-space-top05'>
                            <rt-button class='rt-button-orange rt-button--is-block'>Подключить</rt-button>
                        </div>
                    </div>
                </template>
            </rt-card>"
              />
            </div>
          </div>
          <div class="row is-b2c">
            <rt-resize-content-height
              :query-selectors-names="[
                '.rt-card__bottom-list',
                '.rt-card__footer',
                '.rt-card__body'
              ]"
              class="rt-col-12">
              <rt-fullscreen-image
                background-image="https://rt.ru/sites/default/files/img/widget/DSGN-930_PControl_1920%D1%851080.jpg"
                background-position="top">
                <div class="rt-md-space-top2 rt-space-top5">
                  <div
                    class="row row--mobile-scroll rt-space-top4 rt-font-hypnens-off">
                    <div class="rt-col-4 rt-col-md-3 d-md-flex-column is-b2c">
                      <rt-card>
                        <template slot="header">
                          <img
                            class="rt-image-max-full-width"
                            src="http://rt.ru/sites/default/files/internet/Kaspersky_color.svg"
                          />
                        </template>
                        <template slot="content">
                          <h3
                            class="rt-font-h3 color-main07 rt-font-bold rt-space-top2">
                            Kaspersky Safe Kids
                          </h3>
                          <p class="rt-space-top color-main07 rt-space-right2">
                            Защита ребенка на&nbsp;всех устройствах Windows, Mac,
                            Android, iPhone, iPad
                          </p>
                        </template>
                        <template slot="bottom-list">
                          <div class="rt-card-list">
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Первый месяц в&nbsp;подарок
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Гибкое регулирование доступа к&nbsp;сайтам
                                  и&nbsp;программам
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
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
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Отслеживание звонков и&nbsp;SMS ребенка
                                  на&nbsp;телефоне Android
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Контроль местонахождения ребенка
                                  и&nbsp;установка безопасной зоны
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  SMS-информирование о&nbsp;действиях ребенка
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Советы психолога по&nbsp;поведению детей
                                  в&nbsp;сети интернет
                                </p>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="rt-col-12 flex-end-center rt-space-top">
                            <rt-price
                              :value="0"
                              :old-value="99"
                              time-interval="мес."
                            />
                          </div>
                        </template>
                      </rt-card>
                    </div>
                    <div class="rt-col-4 rt-col-md-3 d-md-flex-column rt-md-space-top is-b2c">
                      <rt-card>
                        <template slot="header">
                          <img class="rt-image-max-full-width" src="http://rt.ru/sites/default/files/internet/ESET_color.svg"/>
                        </template>
                        <template slot="content">
                          <h3 class="rt-font-h3 color-main07 rt-font-bold rt-space-top2">
                            ESET NOD32 Parental Control
                          </h3>
                          <p class="rt-space-top color-main07 rt-space-right2">
                            Одна лицензия на&nbsp;все&nbsp;«детские»
                            Android-устройства
                          </p>
                        </template>
                        <template slot="bottom-list">
                          <div class="rt-card-list">
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Первый месяц в&nbsp;подарок
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
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
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Игровой формат и&nbsp;простые настройки
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
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
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
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
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Контроль приложений и&nbsp;времени
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  <br><br><br>
                                </p>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="rt-col-12 flex-end-center rt-space-top">
                            <rt-price :value="0"
                              :old-value="99"
                              time-interval="мес."/>
                          </div>
                        </template>
                      </rt-card>
                    </div>
                    <div class="rt-col-4 rt-col-md-3 d-md-flex-column rt-md-space-top is-b2c">
                      <rt-card>
                        <template slot="header">
                          <img
                            class="rt-image-max-full-width"
                            src="http://rt.ru/sites/default/files/img/logo/my_children.svg"
                          />
                        </template>
                        <template slot="content">
                          <h3
                            class="rt-font-h3 color-main07 rt-font-bold rt-space-top2"
                          >
                            Сервис «Где мои дети»
                          </h3>
                          <p class="rt-space-top color-main07 rt-space-right2">
                            Отслеживайте местоположение ребёнка онлайн
                            в&nbsp;мобильном приложении
                          </p>
                        </template>
                        <template slot="bottom-list">
                          <div class="rt-card-list">
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Бесплатный период 7&nbsp;дней
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Специальная цена для&nbsp;абонентов Ростелекома
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Просмотр местоположения ребёнка на&nbsp;карте
                                  и&nbsp;истории его&nbsp;перемещений за&nbsp;день
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Установка «зеленых зон» и&nbsp;получение
                                  оповещений, если ребенок выходит за&nbsp;них
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Звоники с&nbsp;громким сигналом в приложении,
                                  даже если ребёнок включил бесшумный режим
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Контроль заряда батареи на&nbsp;устройстве
                                  ребенка, чтобы он&nbsp;не&nbsp;остался
                                  без&nbsp;связи вдали от&nbsp;дома
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Детские GPS-часы (Приобретаются отдельно)
                                </p>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="row">
                            <div
                              class="rt-col-12 rt-space-vertical flex-end-center"
                            >
                              <rt-price
                                :value="99"
                                :old-value="299"
                                time-interval="мес."
                              />
                            </div>
                            <div class="rt-col-12">
                              <a
                                href="https://wwww.old.rt.ru/action/homeinternet/act_int_my_children"
                                class="d-block"
                                target="_blank"
                              >
                                <rt-button
                                  class="rt-button-orange rt-button--is-block"
                                  >Подключить</rt-button
                                >
                              </a>
                            </div>
                          </div>
                        </template>
                      </rt-card>
                    </div>
                  </div>
                </div>
              </rt-fullscreen-image>
            </rt-resize-content-height>
          </div>
          <div class="row">
            <div class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image card-image="/static/images/cardImage3.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">
                    Headstone
                  </p>
                  <p class="rt-font-label-uppercase rt-space-vertical05">
                    игровой интернет
                  </p>
                  <p>Получай подарки в лучших играх Headstone!</p>
                </template>
                <template slot="list">
                  <rt-card-image-list :has-icon="true">
                    <template slot="icon">
                      <img
                        src="/static/example-images/iconCard.png"
                        width="55px"
                        alt=""
                      />
                    </template>
                    <template>
                      <div>
                        <p class="color-main07">
                          Премиум аккаунт
                        </p>
                        <p class="color-main05">
                          Доступна любая из четырёх крутых пушек. Тип оружия можно
                          изменять каждые 24 часа
                        </p>
                      </div>
                    </template>
                  </rt-card-image-list>
                  <rt-card-image-list>
                    Доступна любая из четырёх крутых пушек. Тип оружия можно
                    изменять каждые 24 часа
                  </rt-card-image-list>
                  <rt-card-image-list>
                    Доступна любая из четырёх крутых пушек. Тип оружия можно
                    изменять каждые 24 часа
                  </rt-card-image-list>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage3.jpg">
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
            </div>
            <div class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage3.jpg">
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
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage1.jpg">
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
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage2.jpg">
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
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage3.jpg">
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
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage1.jpg">
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
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-cover="true"
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue">
                <template slot="header">
                  <div class="rt-font-center">
                    <svg
                      width="97"
                      height="79"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="#FFF"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M37.0208333 1l-8.3125 15.0051282 19.59375 61.6 46.90625-61.6"
                        />
                        <path
                          d="M59.1875 1L67.5 16.0051282l-19.59375 61.6L1 16.0051282"
                        />
                        <path
                          d="M1 16.0051282L23.5625 1H72.25l22.5625 15.0051282z"
                        />
                      </g>
                    </svg>
                  </div>
                </template>
                <template slot="content">
                  <p class="rt-font-paragraph rt-font-bold rt-space-top05">
                    Бонусная программа
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Подключайте друзей и зарабатывайте бонусы
                  </p>
                </template>
                <template slot="footer">
                  <a href="/bonus">
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Подробнее
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-cover="true"
                :is-white-color="true"
                :background-smoke="0.5"
                :col-size="6"
                background-color-type="green">
                <template slot="header">
                  <div class="rt-font-center">
                    <img
                      src="http://rt.ru/sites/default/files/img/icon/news-icon.svg"
                      height="79"
                    />
                  </div>
                </template>
                <template slot="content">
                  <p class="rt-font-paragraph rt-font-bold rt-space-top2">
                    Новости
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Анонсы акций, изменения в тарифах и новости Ростелеком
                  </p>
                </template>
                <template slot="footer">
                  <a href="https://www.old.rt.ru/press" target="_blank">
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Все новости
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
            <div class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-opacity="0.9"
                :background-cover="true"
                :is-white-color="true"
                :background-smoke="0.5"
                :col-size="2"
                :offset-top="true"
                background-image="/sites/default/files/2018-07/games_0.png"
                background-color-type="black">
                <template slot="content">
                  <p class="rt-font-paragraph rt-font-bold">
                    Игровой
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Высокоскоростной интернет и игровые бонусы для увлеченных
                    геймеров
                  </p>
                </template>
                <template slot="footer">
                  <a
                    href="/internet/constructor?offer=369771569758&lcs=active&tv-package=285383c0"
                  >
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Выберите свою игровую опцию
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
            <div class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-opacity="0.9"
                :background-cover="true"
                :is-white-color="true"
                :background-smoke="0.5"
                :col-size="2"
                :offset-top="true"
                background-image="/sites/default/files/img/licey.jpg"
                background-color-type="black">
                <template slot="content">
                  <p class="rt-font-paragraph rt-font-bold">
                    Ростелеком Лицей
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Поможем усвоить школьную программу онлайн
                  </p>
                </template>
                <template slot="footer">
                  <a href="https://lc.rt.ru" target="_blank">
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Подробнее
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
            <div class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-opacity="0.9"
                :background-cover="true"
                :is-white-color="true"
                :background-smoke="0.5"
                :col-size="2"
                background-color-type="dark-blue">
                <template slot="content">
                  <div class="rt-font-center rt-space-top15 rt-space-bottom">
                    <img
                      src="http://rt.ru/sites/default/files/img/icon/wink_80x80.svg"
                    />
                  </div>
                  <p class="rt-font-paragraph rt-font-bold">
                    Wink
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Лучшие ТВ‑каналы, сериалы и фильмы в одном приложении
                  </p>
                </template>
                <template slot="footer">
                  <a href="/wink">
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Перейти
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='purple' :background-blur='5' :is-white-color='true'><template slot='content'><p class='rt-font-paragraph rt-space-bottom rt-font-bold'>Оплата услуг</p><rt-input value='' placeholder='телефон, email или счёт'/><p class='rt-space-top05 rt-card-text rt-space-right'>Введите номер телефона, email или номер лицевого счёта</p></template><template slot='footer'><rt-button :is-block='true' class='rt-button-small rt-button-white white-wave'>Оплатить</rt-button></template></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='light-blue' :background-blur='5' :is-white-color='true'><template slot='content'><div class='rt-font-center rt-space-top15 rt-space-bottom'><svg width='97' height='79' xmlns='http://www.w3.org/2000/svg'><g stroke='#FFF' stroke-width='2' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'><path d='M37.0208333 1l-8.3125 15.0051282 19.59375 61.6 46.90625-61.6' /><path d='M59.1875 1L67.5 16.0051282l-19.59375 61.6L1 16.0051282' /><path d='M1 16.0051282L23.5625 1H72.25l22.5625 15.0051282z' /></g></svg></div><p class='rt-font-paragraph rt-font-bold rt-space-top'>Бонусы</p><p class='rt-space-top05'>Подключайте друзей  и зарабатывайте бонусы</p></template><template slot='footer'><p>Условия акции</p></template></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground5.png' background-position='bottom-right' :col-size='2'><template slot='content'><p class='rt-font-label'>стоимость покупки</p><rt-price :value='1480' :only-price='true' /></template><template slot='footer'><p class='rt-font-paragraph rt-font-bold'>Звоните по новому</p><p class='rt-font-paragraph rt-space-top05 rt-space-bottom'>Беспроцентная рассрочка на смартфоны Samsung Galaxy S8 для абонентов Ростелекома</p><p class='rt-space-top'>Условия акции</p></template></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card lazy-background-image='https://pm1.narvii.com/6871/d75902fe4db353dc19d3bbf8ae2a2f64f6c84a0dr1-1280-864v2_128.jpg' background-image='/static/example-images/cardBackground3.png' :is-white-color='true' :background-cover='true' :background-smoke='0.3'><template slot='content'><p class='rt-font-paragraph rt-space-bottom rt-font-bold'>Оплата услуг</p><rt-input value='' placeholder='телефон, email или счёт' /><p class='rt-space-top05 rt-card-text rt-space-right'>Введите номер телефона, email или номер лицевого счёта</p></template><template slot='footer'><rt-button :is-block='true' class='rt-button-small rt-button-white white-wave'>Оплатить</rt-button></template></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground3.png' :background-opacity='0.5' background-position='bottom-right' :is-white-color='true' :background-cover='true' :background-smoke='0.5' :offset-top='true'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Родительский контроль</p><p class='rt-space-top05 rt-card-text rt-space-right'>для безопасности детей в интернете</p></template><template slot='footer'><p>Выберите свой тип подписки</p></template></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground6.png':background-cover='true':background-opacity='0.7':background-smoke='0.3':is-white-color='true':offset-top='true'background-color-type='black' :col-size='2'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Антивирусы</p><p class='rt-space-top05'>Выгодная защита <br>для всех устройств</p></template><template slot='footer'><p>Выберите свой тип подписки</p></template></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground10.png' :background-cover='true' :background-opacity='0.7' :background-smoke='0.3' :is-white-color='true' :offset-top='true' background-color-type='black' :col-size='2'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Игровой</p><p class='rt-space-top05'>Высокоскоростной <br> интернет и игровые бонусы <br>для увлеченных геймеров</p></template><template slot='footer'><p>Выберите свою игровую опцию</p></template></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true' :background-opacity='0.7' :background-smoke='0.3' :is-white-color='true' :offset-top='true' background-color-type='black' :col-size='2'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Microsoft Office 365</p><p class='rt-space-top05'>Полный пакет программ <br>для всей семьи</p></template><template slot='footer'><p>Выберите свой тип подписки</p></template></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground8.png' :background-cover='true' :is-white-color='true' background-color-type='black' :col-size='2'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Игровой Warface</p><p class='rt-space-top05 rt-font-small-upper rt-font-small-upper'>интернет</p><p class='rt-space-top rt-font-spacing018'>Крутые пушки всем <br> абонентам, оружие <br> навсегда, кредиты каждый<br> день</p></template><template slot='footer'><div class='rt-font-right'><rt-price :value='850' /></div><rt-button :is-block='true' class='rt-button-small rt-button-white white-wave'>Подключить</rt-button></template></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground9.png' background-position='bottom-right' :col-size='2'><template slot='content'><p class='rt-space-top05 rt-font-small-upper'>стоимость покупки</p><rt-price :value='4990' :only-price='true' /></template><template slot='footer'><div class='rt-space-bottom2'><p class='rt-font-paragraph rt-font-bold'>Wi-Fi HD-видеокамера</p><p class='rt-space-top05'>Контролируйте все <br>происходящее на расстоянии <br>  и просматривайте записи на<br> любом устройстве. </p></div></template></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground7.png' :background-cover='true' :background-opacity='0.7' :background-smoke='0.2' :is-white-color='true' :offset-top='true' background-color-type='black'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Мобильное ТВ</p><p class='rt-space-top05'>101 тв-канал с контентом на любой вкус в подарок </p></template><template slot='footer'><p>Подробнее</p></template></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='red' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='orange' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='yellow' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='pink' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='green' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true'/>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true' :background-blur='5'><p class='rt-card__label rt-font-paragraph'>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card :background-repeat='true' background-image='/static/example-images/cardBackground2.png' :background-smoke='0.3'/>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-smoke='0.5'/>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true'/>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-12 rt-col-md-3 rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true'/>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='dark-blue' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
          </div>
          <div class="row">
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b color-white">
            <pre-code
              text='
                <rt-card background-image="/static/images/B2B/category-img.png" :product-card="true" background-color-type="yellow-high">
                  <template slot="content">
                    <h3 class="rt-font-bold rt-space-bottom">Номер 8 800</h3>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                  </template>
                  <template slot="footer">
                    <div class="rtb-card__cost">
                      <rt-price
                        :value="2.5"
                        :is-option="true"
                        currency="₽"
                        :b2b-price="true"
                        time-interval="в месяц"
                      />
                    </div>
                  </template>
                </rt-card>
            '/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text='
                <rt-card background-image="/static/images/B2B/category-img.png" :product-card="true" background-color-type="purple">
                  <template slot="content">
                    <h3 class="rt-font-bold rt-space-bottom">Номер 8 800</h3>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                  </template>
                  <template slot="footer">
                    <div class="rtb-card__cost">
                      <rt-price
                        :value="2.5"
                        :is-option="true"
                        currency="₽"
                        :b2b-price="true"
                        time-interval="в месяц"
                      />
                    </div>
                  </template>
                </rt-card>
            '/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text='
                <rt-card product-icon="/static/images/B2B/063-c.svg" :product-card="true" background-color-type="white">
                  <template slot="content">
                    <h3 class="rt-font-bold rt-space-bottom">Номер 8 800</h3>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                  </template>
                  <template slot="footer">
                    <div class="rtb-card__cost">
                      <rt-price
                        :value="2.5"
                        :is-option="true"
                        currency="₽"
                        :b2b-price="true"
                        time-interval="в месяц"
                      />
                    </div>
                  </template>
                </rt-card>
            '/>
          </div>
          <div class="rt-col-12 rt-col-td-6 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              background-image='/static/images/B2B/category-img.png'
              :is-b2b-category='true'
              :category-card-size='3'
              background-color-type='green-low'
              :is-white-color='true'
              category-icon-mobile='/static/images/B2B/shield.svg'>
              <template slot='content'>
                <h3 class='rt-font-bold rt-space-bottom05'>
                  Видеонаблюдение
                </h3>
                <div class='rt-font-small-paragraph'>
                  Система удаленного видеонаблюдения
                </div>
              </template>
              <template slot='footer'>
                <a href='#'>
                  <rt-button
                    class='rt-button-white rt-button-small rt-space-horizontal'
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-8 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              background-image='/static/images/B2B/virtual-ATS.png'
              :is-b2b-category='true'
              :category-card-size='2'
              background-color-type='purple'
              :is-white-color='true'
              category-icon-mobile='/static/images/B2B/shield.svg'>
              <template slot='content'>
                <p class='rt-font-h3 rt-font-bold rt-space-bottom05 rtb-category__title'>
                  Виртуальная АТС
                </p>
                <div class='rt-font-small-paragraph'>
                  Быстрое подключение без трат на оборудование, возможность
                  пользоваться из любой точки мира и ни одного пропущенного
                  звонка клиента
                </div>
              </template>
              <template slot='footer'>
                <rt-price
                  :is-option='true'
                  :value='500'
                  currency='₽'
                  time-interval='в месяц'
                  :b2b-price='true'/>
                <a href='#'>
                  <rt-button
                    class='rt-button-white rt-button-small rt-space-horizontal'
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              :is-b2b-category='true'
              :category-card-size='1'
              background-color-type='dark-blue'
              :is-white-color='true'
              category-icon-mobile='/static/images/B2B/shield.svg'>
              <template slot='content'>
                <p class='rt-font-paragraph rt-font-bold rt-space-bottom05 rtb-category__title'>
                  Сервис по защите от сетевых угроз
                </p>
                <div class='rt-font-small-paragraph'>
                  На базе решения класса Unified Threat Management (UTM)
                </div>
              </template>
              <template slot='footer'>
                <a href='#'>
                  <rt-button
                    class='rt-button-white rt-button-small rt-space-horizontal'
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              :is-b2b-category='true'
              :category-card-size='1'
              category-icon-mobile='/static/images/B2B/mobile-call.svg'>
              <template slot='content'>
                <p class='rt-font-paragraph rt-font-bold rt-space-bottom05 rtb-category__title'>
                  Сервис по защите от сетевых угроз
                </p>
                <div class='rt-font-small-paragraph'>
                  На базе решения класса Unified Threat Management (UTM)
                </div>
              </template>
              <template slot='footer'>
                <rt-price
                  :is-option='true'
                  :value='500'
                  currency='₽'
                  time-interval='в месяц'
                  :b2b-price='true'/>
                <a href='#'>
                  <rt-button
                    class='rt-button-purple-border rt-button-small rt-space-horizontal'
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <rt-card :equal-padding="true">
              <template slot="content">
                <div class="rtb-card__vertical">
                  <div class="rtb-card__vertical__left-column">
                    <img src="/static/images/B2B/wifi.svg" >
                  </div>
                  <div class="rtb-card__vertical__right-column">
                    <p class="rt-font-paragraph rt-font-bold mb5">
                      Управляемый Wi-Fi
                    </p>
                    <p class="rt-font-small-paragraph">
                      Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа
                    </p>
                    <div class="rt-space-bottom" />
                    <a href="#">
                      <button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </button>
                    </a>
                  </div>
                </div>
              </template>
            </rt-card>
          </div>
          <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top higher-z is-b2b">
            <rt-card :equal-padding="true">
              <template slot="header">
                <p class="rt-font-paragraph rt-space-bottom rt-font-bold">
                  Вызов 400
                </p>
              </template>
              <template slot="content">
                <div class="rtb-card__description__row">
                  <span class="rt-font-paragraph rt-font-bold">300 минут</span>
                  <rt-hint :simple-tool-tip="true">
                    <slot>
                      Это всё что угодно,<br >но не адрес электронной почты
                    </slot>
                  </rt-hint>
                  <p class="rt-font-small-paragraph color-main025">
                    на номера домашнего региона
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph rt-font-bold">
                    50 СМС
                  </p>
                  <p class="rt-font-small-paragraph color-main025">
                    по всей России
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph rt-font-bold">
                    3 Гб
                  </p>
                  <p class="rt-font-small-paragraph color-main025">
                    интернета по всей России
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <links-block :icon-array="[
                  {tooltip: 'gjlcrfprf1', path: 'vk'},
                  {tooltip: 'gjlcrfprf2', path: 'ya_map'},
                  {tooltip: 'gjlcrfprf3', path: 'youtube'},
                  {tooltip: 'gjlcrfprf4', path: 'viber'},
                  {tooltip: 'gjlcrfprf5', path: 'whatsapp'},
                  {tooltip: 'gjlcrfprf6', path: 'tamtam'},
                  {tooltip: 'gjlcrfprf7', path: 'odnoklassniki'},
                  {tooltip: 'gjlcrfprf8', path: 'facebook'},
                  {tooltip: 'gjlcrfprf9', path: 'ya_navigator'},
                  {tooltip: 'gjlcrfprf10', path: 'ya_transport'},
                  ]"
                               source-directory="/static/images/B2B/">
                  </links-block>
                </div>
              </template>
              <template slot="footer">
                <div class="rt-space-bottom" />
                <div class="rtb-card__cost">
                  <rt-price
                    :value="400"
                    :is-option="false"
                    currency="₽"
                    :b2b-price="true"
                    time-interval=""
                  />
                </div>
                <a href="#">
                  <button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                    Выбрать
                  </button>
                </a>
              </template>
            </rt-card>
          </div>
          <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <rt-card :equal-padding="true" :has-label="true">
              <template slot="header">
                <div class="rt-space-bottom">
                  <span class="rt-font-paragraph rt-font-bold">
                    Видеонаблюдение 500
                  </span>
                  <rt-hint :simple-tool-tip="true">
                    <slot>
                      Это всё что угодно,<br >но не адрес электронной почты
                    </slot>
                  </rt-hint>
                </div>
              </template>
              <template slot="label">
                <h4 class="rt-font-h4">- 30%</h4>
              </template>
              <template slot="content">
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph ">
                    до 650 Мбит/с
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph ">
                    4 антенны
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph color-main025">
                    Авторизация через СМС
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph color-main025">
                    Защита роутера
                  </p>
                </div>
              </template>
              <template slot="footer">
                <div class="rt-space-bottom" />
                <div class="rtb-card__cost">
                  <rt-price
                    :value="500"
                    :is-option="false"
                    currency="₽"
                    :b2b-price="true"
                    time-interval="в месяц"
                  />
                </div>
                <a href="#">
                  <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                    Выбрать
                  </rt-button>
                </a>
              </template>
            </rt-card>
          </div>
        </div>
        </div>
      </div>
      <div class="rt-space-top2">
        <!--<div class="rt-container">-->
          <!--<div class="rt-col">-->
            <rt-card-layout :swiper-on-mobile="true" :width="6">
            <template slot="cards">
              <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                <rt-card>
                  <template slot="header">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">до 650 Мбит/</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">4 антенны</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Защита роутера</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <div class="rt-space-bottom" />
                    <div class="rtb-card__cost rt-space-bottom">
                      <rt-price :value="500"
                                :is-option="false"
                                currency="₽"
                                :b2b-price="true"
                                time-interval="в месяц"
                                :is-time-interval-bottom="true"/>
                    </div>
                    <a href="#">
                      <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </rt-button>
                    </a>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                <rt-card>
                  <template slot="header">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">до 650 Мбит/</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">4 антенны</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Защита роутера</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <div class="rt-space-bottom" />
                    <div class="rtb-card__cost rt-space-bottom">
                      <rt-price :value="500"
                                :is-option="false"
                                currency="₽"
                                :b2b-price="true"
                                time-interval="в месяц"
                                :is-time-interval-bottom="true"/>
                    </div>
                    <a href="#">
                      <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </rt-button>
                    </a>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                <rt-card>
                  <template slot="header">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">до 650 Мбит/</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">4 антенны</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Защита роутера</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <div class="rt-space-bottom" />
                    <div class="rtb-card__cost rt-space-bottom">
                      <rt-price :value="500"
                                :is-option="false"
                                currency="₽"
                                :b2b-price="true"
                                time-interval="в месяц"
                                :is-time-interval-bottom="true"/>
                    </div>
                    <a href="#">
                      <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </rt-button>
                    </a>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                <rt-card>
                  <template slot="header">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">до 650 Мбит/</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">4 антенны</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Защита роутера</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <div class="rt-space-bottom" />
                    <div class="rtb-card__cost rt-space-bottom">
                      <rt-price :value="500"
                                :is-option="false"
                                currency="₽"
                                :b2b-price="true"
                                time-interval="в месяц"
                                :is-time-interval-bottom="true"/>
                    </div>
                    <a href="#">
                      <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </rt-button>
                    </a>
                  </template>
                </rt-card>
              </div>
            </template>
            <template slot="side-text">
              <div class="rt-col-3 rt-col-td-6 rt-col-md-3 rt-space-top">
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph ">до 650 Мбит/</p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph ">4 антенны</p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph color-main025">Защита роутера</p>
                </div>
              </div>
            </template>
          </rt-card-layout>
          <!--</div>-->
        <!--</div>-->
      </div>
      <div class="rt-space-top2">
        <!--<div class="rt-container">-->
          <!--<div class="rt-col">-->
            <rt-card-layout :swiper-on-mobile="true" :width="9" :single-row="true">
              <template slot="cards">
                <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                  <rt-card>
                    <template slot="header">
                      <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                    </template>
                    <template slot="content">
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">до 650 Мбит/</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">4 антенны</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Защита роутера</p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="rt-space-bottom" />
                      <div class="rtb-card__cost rt-space-bottom">
                        <rt-price :value="500"
                                  :is-option="false"
                                  currency="₽"
                                  :b2b-price="true"
                                  time-interval="в месяц"
                                  :is-time-interval-bottom="true"/>
                      </div>
                      <a href="#">
                        <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                          Выбрать
                        </rt-button>
                      </a>
                    </template>
                  </rt-card>
                </div>
                <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                  <rt-card>
                    <template slot="header">
                      <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                    </template>
                    <template slot="content">
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">до 650 Мбит/</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">4 антенны</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Защита роутера</p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="rt-space-bottom" />
                      <div class="rtb-card__cost rt-space-bottom">
                        <rt-price :value="500"
                                  :is-option="false"
                                  currency="₽"
                                  :b2b-price="true"
                                  time-interval="в месяц"
                                  :is-time-interval-bottom="true"/>
                      </div>
                      <a href="#">
                        <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                          Выбрать
                        </rt-button>
                      </a>
                    </template>
                  </rt-card>
                </div>
                <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                  <rt-card>
                    <template slot="header">
                      <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                    </template>
                    <template slot="content">
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">до 650 Мбит/</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">4 антенны</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Защита роутера</p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="rt-space-bottom" />
                      <div class="rtb-card__cost rt-space-bottom">
                        <rt-price :value="500"
                                  :is-option="false"
                                  currency="₽"
                                  :b2b-price="true"
                                  time-interval="в месяц"
                                  :is-time-interval-bottom="true"/>
                      </div>
                      <a href="#">
                        <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                          Выбрать
                        </rt-button>
                      </a>
                    </template>
                  </rt-card>
                </div>
              </template>
              <template slot="side-text">
                <div class="rt-col-3 rt-col-ld-12 rt-col-td-6 rt-col-md-3 rt-space-top">
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph ">до 650 Мбит/</p>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph ">4 антенны</p>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph color-main025">Защита роутера</p>
                  </div>
                </div>
              </template>
            </rt-card-layout>
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>
<script>
  import documentation from "../../../lib/components/Card/docs/index.json";
  import componentsList from "../../componentsList";

  export default {
    name: "AppCards",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {},
    methods: {}
};
</script>
