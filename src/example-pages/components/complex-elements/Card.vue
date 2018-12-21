<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row"><h1 class="rt-font-hero rt-col">Cards</h1></div>
      </div>
      <div class="app-body">
        <div class="row rt-space-top">
          <div class="rt-col-4">
            <pre-code
              text="<rt-card>
    <template slot=&quot;header&quot;>
        <img
                width=&quot;175px&quot;
                class=&quot;rt-card__headeremitSelectedData__image&quot;
                src=&quot;/static/images/homeinternet/homeinternet-image18.jpg&quot;
        />
    </template>
    <template slot=&quot;content&quot;>
        <p class=&quot;rt-font-paragraph color-main07 rt-font-bold rt-space-top2&quot;>
            Kaspersky Internet Security 4
        </p>
        <p class=&quot;rt-space-top color-main07 rt-space-right2&quot;>
            Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства
        </p>
    </template>
    <template slot=&quot;bottom-list&quot;>
        <div class=&quot;rt-card-list rt-space-bottom2&quot;>
            <div class=&quot;rt-card-list__item&quot;>
                <div class=&quot;rt-card-list__icon&quot;>

                    <img
                            src=&quot;/static/images/medium-icon.svg&quot;
                    />
                </div>
                <div class=&quot;rt-card-list__name&quot;>
                    <p class=&quot;rt-font-small-paragraph color-main05&quot;>
                        Защищает 2 устройства одновременно
                    </p>
                </div>
            </div>
            <div class=&quot;rt-card-list__item&quot;>
                <div class=&quot;rt-card-list__icon&quot;>
                    <div class=&quot;rt-space-left15&quot;>
                        <img
                                src=&quot;/static/images/small-icon.svg&quot;
                        />
                    </div>
                </div>
                <div class=&quot;rt-card-list__name&quot;>
                    <p class=&quot;rt-font-small-paragraph color-main05&quot;>
                        Первый месяц в&nbsp;подарок
                    </p>
                </div>
            </div>
            <div class=&quot;rt-card-list__item&quot;>
                <div class=&quot;rt-card-list__icon&quot;>
                    <div class=&quot;rt-space-left15&quot;>
                        <img
                                src=&quot;/static/images/small-icon.svg&quot;
                        />
                    </div>
                </div>
                <div class=&quot;rt-card-list__name&quot;>
                    <p class=&quot;rt-font-small-paragraph color-main05&quot;>
                        Контроль интернет-сайтов
                    </p>
                </div>
            </div>
            <div class=&quot;rt-card-list__item&quot;>
                <div class=&quot;rt-card-list__icon&quot;>
                    <div class=&quot;rt-space-left15&quot;>
                        <img
                                src=&quot;/static/images/small-icon.svg&quot;
                        />
                    </div>
                </div>
                <div class=&quot;rt-card-list__name&quot;>
                    <p class=&quot;rt-font-small-paragraph color-main05&quot;>
                        Игровой формат и&nbsp;простые настройки
                    </p>
                </div>
            </div>
            <div class=&quot;rt-card-list__item&quot;>
                <div class=&quot;rt-card-list__icon&quot;>
                    <div class=&quot;rt-space-left15&quot;>
                        <img
                                src=&quot;/static/images/small-icon.svg&quot;
                        />
                    </div>
                </div>
                <div class=&quot;rt-card-list__name&quot;>
                    <p class=&quot;rt-font-small-paragraph color-main05&quot;>
                        Определение местоположения
                    </p>
                </div>
            </div>
            <div class=&quot;rt-card-list__item&quot;>
                <div class=&quot;rt-card-list__icon&quot;>
                    <div class=&quot;rt-space-left15&quot;>
                        <img
                                src=&quot;/static/images/small-icon.svg&quot;
                        />
                    </div>
                </div>
                <div class=&quot;rt-card-list__name&quot;>
                    <p class=&quot;rt-font-small-paragraph color-main05&quot;>
                        Сообщения ребенку
                    </p>
                </div>
            </div>
            <div class=&quot;rt-card-list__item&quot;>
                <div class=&quot;rt-card-list__icon&quot;>
                    <div class=&quot;rt-space-left15&quot;>
                        <img
                                src=&quot;/static/images/small-icon.svg&quot;
                        />
                    </div>
                </div>
                <div class=&quot;rt-card-list__name&quot;>
                    <p class=&quot;rt-font-small-paragraph color-main05&quot;>
                        Контроль приложений и&nbsp;времени
                    </p>
                </div>
            </div>
        </div>
    </template>

    <template slot=&quot;content-without-wrapper&quot;>
        <div class=&quot;rt-card__border-content&quot;>
            <div class=&quot;rt-col-12 flex-end-center rt-space-top&quot;>
                <rt-price
                        :value=&quot;1600&quot;
                        :old-value=&quot;1800&quot;
                        time-interval=&quot;год.&quot;
                ></rt-price>
            </div>
            <div class=&quot;rt-space-top05&quot;>
                <rt-button class=&quot;rt-button-orange rt-button--is-block&quot;>Подключить</rt-button>
            </div>
        </div>
    </template>
</rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <rt-resize-content-height
            :query-selectors-names="[
              '.rt-card__bottom-list',
              '.rt-card__footer',
              '.rt-card__body'
            ]"
            class="rt-col-12"
          >
            <rt-fullscreen-image
              background-image="https://rt.ru/sites/default/files/img/widget/DSGN-930_PControl_1920%D1%851080.jpg"
              background-position="top"
            >
              <div class="rt-md-space-top2 rt-space-top5">
                <div
                  class="row row--mobile-scroll rt-space-top4 rt-font-hypnens-off"
                >
                  <div class="rt-col-4 rt-col-md-3 d-md-flex-column">
                    <rt-card>
                      <template slot="header">
                        <img
                          class="rt-image-max-full-width"
                          src="http://rt.ru/sites/default/files/internet/Kaspersky_color.svg"
                        />
                      </template>
                      <template slot="content">
                        <h3
                          class="rt-font-h3 color-main07 rt-font-bold rt-space-top2"
                        >
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                          ></rt-price>
                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div
                    class="rt-col-4 rt-col-md-3 d-md-flex-column rt-md-space-top"
                  >
                    <rt-card>
                      <template slot="header">
                        <img
                          class="rt-image-max-full-width"
                          src="http://rt.ru/sites/default/files/internet/ESET_color.svg"
                        />
                      </template>
                      <template slot="content">
                        <h3
                          class="rt-font-h3 color-main07 rt-font-bold rt-space-top2"
                        >
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <img
                                  src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                />
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
                                <br /><br /><br />
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
                          ></rt-price>
                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div
                    class="rt-col-4 rt-col-md-3 d-md-flex-column rt-md-space-top"
                  >
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
                            ></rt-price>
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
          <div class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off">
            <rt-card-image card-image="/static/images/cardImage3.jpg">
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">Headstone</p>
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
                      <p class="color-main07">Премиум аккаунт</p>
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
          <div class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off">
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage3.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">Headstone</p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off">
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage3.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">Headstone</p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off">
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage1.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">Headstone</p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off">
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage2.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">Headstone</p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off">
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage3.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">Headstone</p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off">
            <rt-card-image
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
              card-image="/static/images/cardImage1.jpg"
            >
              <template slot="body">
                <p class="rt-font-paragraph rt-font-bold">Headstone</p>
                <p class="rt-font-label-uppercase rt-space-vertical05">
                  игровой интернет
                </p>
                <p>Получай подарки в лучших играх Headstone!</p>
              </template>
            </rt-card-image>
          </div>
        </div>
        <div class="row">
          <div
            class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch"
          >
            <rt-card
              :background-cover="true"
              :is-white-color="true"
              :col-size="2"
              background-color-type="light-blue"
            >
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
          <div
            class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch"
          >
            <rt-card
              :background-cover="true"
              :is-white-color="true"
              :background-smoke="0.5"
              :col-size="6"
              background-color-type="green"
            >
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
          <div
            class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch"
          >
            <rt-card
              :background-opacity="0.9"
              :background-cover="true"
              :is-white-color="true"
              :background-smoke="0.5"
              :col-size="2"
              :offset-top="true"
              background-image="/sites/default/files/2018-07/games_0.png"
              background-color-type="black"
            >
              <template slot="content">
                <p class="rt-font-paragraph rt-font-bold">Игровой</p>
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
          <div
            class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch"
          >
            <rt-card
              :background-opacity="0.9"
              :background-cover="true"
              :is-white-color="true"
              :background-smoke="0.5"
              :col-size="2"
              :offset-top="true"
              background-image="/sites/default/files/img/licey.jpg"
              background-color-type="black"
            >
              <template slot="content">
                <p class="rt-font-paragraph rt-font-bold">Ростелеком Лицей</p>
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
          <div
            class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch"
          >
            <rt-card
              :background-opacity="0.9"
              :background-cover="true"
              :is-white-color="true"
              :background-smoke="0.5"
              :col-size="2"
              background-color-type="dark-blue"
            >
              <template slot="content">
                <div class="rt-font-center rt-space-top15 rt-space-bottom">
                  <img
                    src="http://rt.ru/sites/default/files/img/icon/wink_80x80.svg"
                  />
                </div>
                <p class="rt-font-paragraph rt-font-bold">Wink</p>
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
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-color-type=&quot;purple&quot; :background-blur=&quot;5&quot; :is-white-color=&quot;true&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-space-bottom rt-font-bold&quot;>Оплата услуг</p><rt-input value=&quot;&quot; placeholder=&quot;телефон, email или счёт&quot;/><p class=&quot;rt-space-top05 rt-card-text rt-space-right&quot;>Введите номер телефона, email или номер лицевого счёта</p></template><template slot=&quot;footer&quot;><rt-button :is-block=&quot;true&quot; class=&quot;rt-button-small rt-button-white white-wave&quot;>Оплатить</rt-button></template></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-color-type=&quot;light-blue&quot; :background-blur=&quot;5&quot; :is-white-color=&quot;true&quot;><template slot=&quot;content&quot;><div class=&quot;rt-font-center rt-space-top15 rt-space-bottom&quot;><svg width=&quot;97&quot; height=&quot;79&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g stroke=&quot;#FFF&quot; stroke-width=&quot;2&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;><path d=&quot;M37.0208333 1l-8.3125 15.0051282 19.59375 61.6 46.90625-61.6&quot; /><path d=&quot;M59.1875 1L67.5 16.0051282l-19.59375 61.6L1 16.0051282&quot; /><path d=&quot;M1 16.0051282L23.5625 1H72.25l22.5625 15.0051282z&quot; /></g></svg></div><p class=&quot;rt-font-paragraph rt-font-bold rt-space-top&quot;>Бонусы</p><p class=&quot;rt-space-top05&quot;>Подключайте друзей  и зарабатывайте бонусы</p></template><template slot=&quot;footer&quot;><p>Условия акции</p></template></rt-card>"
            />
          </div>

          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground5.png&quot; background-position=&quot;bottom-right&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-label&quot;>стоимость покупки</p><rt-price :value=&quot;1480&quot; :only-price=&quot;true&quot; /></template><template slot=&quot;footer&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Звоните по новому</p><p class=&quot;rt-font-paragraph rt-space-top05 rt-space-bottom&quot;>Беспроцентная рассрочка на смартфоны Samsung Galaxy S8 для абонентов Ростелекома</p><p class=&quot;rt-space-top&quot;>Условия акции</p></template></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground3.png&quot; :is-white-color=&quot;true&quot; :background-cover=&quot;true&quot; :background-smoke=&quot;0.3&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-space-bottom rt-font-bold&quot;>Оплата услуг</p><rt-input value=&quot;&quot; placeholder=&quot;телефон, email или счёт&quot; /><p class=&quot;rt-space-top05 rt-card-text rt-space-right&quot;>Введите номер телефона, email или номер лицевого счёта</p></template><template slot=&quot;footer&quot;><rt-button :is-block=&quot;true&quot; class=&quot;rt-button-small rt-button-white white-wave&quot;>Оплатить</rt-button></template></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground3.png&quot; :background-opacity=&quot;0.5&quot; background-position=&quot;bottom-right&quot; :is-white-color=&quot;true&quot; :background-cover=&quot;true&quot; :background-smoke=&quot;0.5&quot; :offset-top=&quot;true&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Родительский контроль</p><p class=&quot;rt-space-top05 rt-card-text rt-space-right&quot;>для безопасности детей в интернете</p></template><template slot=&quot;footer&quot;><p>Выберите свой тип подписки</p></template></rt-card>"
            />
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground6.png&quot;:background-cover=&quot;true&quot;:background-opacity=&quot;0.7&quot;:background-smoke=&quot;0.3&quot;:is-white-color=&quot;true&quot;:offset-top=&quot;true&quot;background-color-type=&quot;black&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Антивирусы</p><p class=&quot;rt-space-top05&quot;>Выгодная защита <br>для всех устройств</p></template><template slot=&quot;footer&quot;><p>Выберите свой тип подписки</p></template></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground10.png&quot; :background-cover=&quot;true&quot; :background-opacity=&quot;0.7&quot; :background-smoke=&quot;0.3&quot; :is-white-color=&quot;true&quot; :offset-top=&quot;true&quot; background-color-type=&quot;black&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Игровой</p><p class=&quot;rt-space-top05&quot;>Высокоскоростной <br> интернет и игровые бонусы <br>для увлеченных геймеров</p></template><template slot=&quot;footer&quot;><p>Выберите свою игровую опцию</p></template></rt-card>"
            />
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot; :background-opacity=&quot;0.7&quot; :background-smoke=&quot;0.3&quot; :is-white-color=&quot;true&quot; :offset-top=&quot;true&quot; background-color-type=&quot;black&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Microsoft Office 365</p><p class=&quot;rt-space-top05&quot;>Полный пакет программ <br>для всей семьи</p></template><template slot=&quot;footer&quot;><p>Выберите свой тип подписки</p></template></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground8.png&quot; :background-cover=&quot;true&quot; :is-white-color=&quot;true&quot; background-color-type=&quot;black&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Игровой Warface</p><p class=&quot;rt-space-top05 rt-font-small-upper rt-font-small-upper&quot;>интернет</p><p class=&quot;rt-space-top rt-font-spacing018&quot;>Крутые пушки всем <br> абонентам, оружие <br> навсегда, кредиты каждый<br> день</p></template><template slot=&quot;footer&quot;><div class=&quot;rt-font-right&quot;><rt-price :value=&quot;850&quot; /></div><rt-button :is-block=&quot;true&quot; class=&quot;rt-button-small rt-button-white white-wave&quot;>Подключить</rt-button></template></rt-card>"
            />
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground9.png&quot; background-position=&quot;bottom-right&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-space-top05 rt-font-small-upper&quot;>стоимость покупки</p><rt-price :value=&quot;4990&quot; :only-price=&quot;true&quot; /></template><template slot=&quot;footer&quot;><div class=&quot;rt-space-bottom2&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Wi-Fi HD-видеокамера</p><p class=&quot;rt-space-top05&quot;>Контролируйте все <br>происходящее на расстоянии <br>  и просматривайте записи на<br> любом устройстве. </p></div></template></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground7.png&quot; :background-cover=&quot;true&quot; :background-opacity=&quot;0.7&quot; :background-smoke=&quot;0.2&quot; :is-white-color=&quot;true&quot; :offset-top=&quot;true&quot; background-color-type=&quot;black&quot;
            ><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Мобильное ТВ</p><p class=&quot;rt-space-top05&quot;>101 тв-канал с контентом на любой вкус в подарок </p></template><template slot=&quot;footer&quot;><p>Подробнее</p></template></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-color-type=&quot;red&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-color-type=&quot;orange&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-color-type=&quot;yellow&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-color-type=&quot;pink&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-color-type=&quot;green&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot;/>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot; :background-blur=&quot;5&quot;><p class=&quot;rt-card__label rt-font-paragraph&quot;>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card :background-repeat=&quot;true&quot; background-image=&quot;/static/example-images/cardBackground2.png&quot; :background-smoke=&quot;0.3&quot;/>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-smoke=&quot;0.5&quot;/>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot;/>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-12 rt-col-md-3 rt-space-top">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot;/>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text="<rt-card background-color-type=&quot;dark-blue&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="rt-space-top25">
      <div class="rt-col-12">
        <div class="app-documentation">
          <div
            class="app-documentation__label rt-font-h4 rt-space-left05 rt-space-bottom2"
          >
            Possible options
          </div>
          <div class="app-documentation__row rt-font-bold rt-space-bottom05">
            <div class="app-documentation__name rt-col-2">component name</div>
            <div class="app-documentation__name rt-col-3">
              component proporty
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                proporty type
              </div>
              <div class="app-documentation__value-item rt-col-6">about</div>
              <div class="app-documentation__value-item rt-col-3">
                default value
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              :static-body-height
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Boolean</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Устанавливает flex: 0 для card - необходимо для случаев сброса
                авто ширины и высоты
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              :hide-background-on-mobile
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Boolean</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Скрывает картинку карточки при мобильном разрешении
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              (:)background-size-width
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Задает ширину картинки карточки <br />
                number - любое число становится px <br />string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              (:)background-size-height
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Задает высоту картинки карточки <br />
                number - любое число становится px <br />string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              :background-image-stand-alone
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Boolean</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Картинка карточки будет создана как отдельный блок
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              background-color-type
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Устанавливает цвет фона карточки <br />
                возможные значения <br />
                <span class="rt-font-label">
                  <span class="rt-code rt-code--fill">dark-state</span>
                  <span class="rt-code rt-code--fill">yellow</span>
                  <span class="rt-code rt-code--fill">red</span>
                  <span class="rt-code rt-code--fill">dark-blue</span>
                  <span class="rt-code rt-code--fill">light-blue</span>
                  <span class="rt-code rt-code--fill">orange</span>
                  <span class="rt-code rt-code--fill">pink</span>
                  <span class="rt-code rt-code--fill">green</span>
                </span>
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-image</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                url адрек картинки карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-cover</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Boolean</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Устанавливает cover значение для картинки карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              :background-repeat
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Boolean</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Устанавить background-repeat опцию на картинке фона
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:background-blur</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Размытие картинки <br />
                значение от <span class="rt-code rt-code--fill">0.0</span> до
                <span class="rt-code rt-code--fill">1.0</span>
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              :background-smoke
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Размытие заднего фона <br />
                значение от <span class="rt-code rt-code--fill">0.2</span>
                <span class="rt-code rt-code--fill">0.3</span>
                <span class="rt-code rt-code--fill">0.5</span>
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              :background-opacity
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Прозрачность заднего фона <br />
                значение от <span class="rt-code rt-code--fill">0.0</span> до
                <span class="rt-code rt-code--fill">1.0</span>
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:is-white-color</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Boolean</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Установить белый цвет текста
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              background-position
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Задает расположение фона карточки возможные значения : <br />
                <span class="rt-code rt-code--fill">top</span>
                <span class="rt-code rt-code--fill">left</span>
                <span class="rt-code rt-code--fill">bottom</span>
                <span class="rt-code rt-code--fill">right</span>
                <span class="rt-code rt-code--fill">top-left</span>
                <span class="rt-code rt-code--fill">top-right</span>
                <span class="rt-code rt-code--fill">bottom-left</span>
                <span class="rt-code rt-code--fill">bottom-right</span>
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              (:)background-position-top
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                <span class="app-documentation__warning"
                  >работает только при background-image-stand-alone и
                  background-image</span
                ><br />
                Устанавливает отступ картинки сверху<br />
                number - любое число становится px <br />string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              (:)background-position-left
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                <span class="app-documentation__warning"
                  >работает только при background-image-stand-alone и
                  background-image</span
                ><br />
                Устанавливает отступ картинки слева<br />
                number - любое число становится px <br />string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              (:)background-position-right
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                <span class="app-documentation__warning"
                  >работает только при background-image-stand-alone и
                  background-image</span
                ><br />
                Устанавливает отступ картинки справа<br />
                number - любое число становится px <br />string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              (:)background-position-bottom
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                <span class="app-documentation__warning"
                  >работает только при background-image-stand-alone и
                  background-image</span
                ><br />
                Устанавливает отступ картинки снизу<br />
                number - любое число становится px <br />string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:offset-top</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Boolean</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Флаг указывающий отступ сверху карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:col-size</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Поджимает контент карточки / было создано для создания 6
                колоночной карточки, где 3 колонки - текст, остальное -
                картинка.
                <span class="app-documentation__warning"
                  >Доступно только значение
                  <span class="rt-code rt-code--fill">2</span></span
                >
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:card-height</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Устанавливает высоту карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              :card-header-height
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Устанавливает высоту заголовка карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">
              :card-body-height
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Устанавливает высоту контейнера для контента карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import componentsList from "../../componentsList";

export default {
  name: "AppCards",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
