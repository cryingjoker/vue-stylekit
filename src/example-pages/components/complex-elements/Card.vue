<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Cards
          </h1>
        </div>
      </div>
      <div class="app-body">
        <div class="row rt-space-top is-b2c">
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
        <div class="row is-b2c">
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
                          />
                        </div>
                      </template>
                    </rt-card>
                  </div>
                  <div
                    class="rt-col-4 rt-col-md-3 d-md-flex-column rt-md-space-top is-b2c"
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
                                <br><br><br>
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
                  <div
                    class="rt-col-4 rt-col-md-3 d-md-flex-column rt-md-space-top is-b2c"
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
          <div
            class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c"
          >
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
          <div
            class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c"
          >
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
          </div>
          <div
            class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c"
          >
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
          </div>
        </div>
        <div class="row">
          <div
            class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c"
          >
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
          </div>
          <div
            class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c"
          >
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
          </div>
          <div
            class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c"
          >
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
          </div>
          <div
            class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c"
          >
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
          </div>
        </div>
        <div class="row">
          <div
            class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c"
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
            class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c"
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
            class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c"
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
          <div
            class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c"
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
              background-color-type="dark-blue"
            >
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
              text="<rt-card background-color-type=&quot;purple&quot; :background-blur=&quot;5&quot; :is-white-color=&quot;true&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-space-bottom rt-font-bold&quot;>Оплата услуг</p><rt-input value=&quot;&quot; placeholder=&quot;телефон, email или счёт&quot;/><p class=&quot;rt-space-top05 rt-card-text rt-space-right&quot;>Введите номер телефона, email или номер лицевого счёта</p></template><template slot=&quot;footer&quot;><rt-button :is-block=&quot;true&quot; class=&quot;rt-button-small rt-button-white white-wave&quot;>Оплатить</rt-button></template></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-color-type=&quot;light-blue&quot; :background-blur=&quot;5&quot; :is-white-color=&quot;true&quot;><template slot=&quot;content&quot;><div class=&quot;rt-font-center rt-space-top15 rt-space-bottom&quot;><svg width=&quot;97&quot; height=&quot;79&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g stroke=&quot;#FFF&quot; stroke-width=&quot;2&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;><path d=&quot;M37.0208333 1l-8.3125 15.0051282 19.59375 61.6 46.90625-61.6&quot; /><path d=&quot;M59.1875 1L67.5 16.0051282l-19.59375 61.6L1 16.0051282&quot; /><path d=&quot;M1 16.0051282L23.5625 1H72.25l22.5625 15.0051282z&quot; /></g></svg></div><p class=&quot;rt-font-paragraph rt-font-bold rt-space-top&quot;>Бонусы</p><p class=&quot;rt-space-top05&quot;>Подключайте друзей  и зарабатывайте бонусы</p></template><template slot=&quot;footer&quot;><p>Условия акции</p></template></rt-card>"
            />
          </div>

          <div
            class="rt-col-6 rt-col-md-3 d-stretch rt-space-top d-stretch is-b2c"
          >
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground5.png&quot; background-position=&quot;bottom-right&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-label&quot;>стоимость покупки</p><rt-price :value=&quot;1480&quot; :only-price=&quot;true&quot; /></template><template slot=&quot;footer&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Звоните по новому</p><p class=&quot;rt-font-paragraph rt-space-top05 rt-space-bottom&quot;>Беспроцентная рассрочка на смартфоны Samsung Galaxy S8 для абонентов Ростелекома</p><p class=&quot;rt-space-top&quot;>Условия акции</p></template></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground3.png&quot; :is-white-color=&quot;true&quot; :background-cover=&quot;true&quot; :background-smoke=&quot;0.3&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-space-bottom rt-font-bold&quot;>Оплата услуг</p><rt-input value=&quot;&quot; placeholder=&quot;телефон, email или счёт&quot; /><p class=&quot;rt-space-top05 rt-card-text rt-space-right&quot;>Введите номер телефона, email или номер лицевого счёта</p></template><template slot=&quot;footer&quot;><rt-button :is-block=&quot;true&quot; class=&quot;rt-button-small rt-button-white white-wave&quot;>Оплатить</rt-button></template></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground3.png&quot; :background-opacity=&quot;0.5&quot; background-position=&quot;bottom-right&quot; :is-white-color=&quot;true&quot; :background-cover=&quot;true&quot; :background-smoke=&quot;0.5&quot; :offset-top=&quot;true&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Родительский контроль</p><p class=&quot;rt-space-top05 rt-card-text rt-space-right&quot;>для безопасности детей в интернете</p></template><template slot=&quot;footer&quot;><p>Выберите свой тип подписки</p></template></rt-card>"
            />
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground6.png&quot;:background-cover=&quot;true&quot;:background-opacity=&quot;0.7&quot;:background-smoke=&quot;0.3&quot;:is-white-color=&quot;true&quot;:offset-top=&quot;true&quot;background-color-type=&quot;black&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Антивирусы</p><p class=&quot;rt-space-top05&quot;>Выгодная защита <br>для всех устройств</p></template><template slot=&quot;footer&quot;><p>Выберите свой тип подписки</p></template></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground10.png&quot; :background-cover=&quot;true&quot; :background-opacity=&quot;0.7&quot; :background-smoke=&quot;0.3&quot; :is-white-color=&quot;true&quot; :offset-top=&quot;true&quot; background-color-type=&quot;black&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Игровой</p><p class=&quot;rt-space-top05&quot;>Высокоскоростной <br> интернет и игровые бонусы <br>для увлеченных геймеров</p></template><template slot=&quot;footer&quot;><p>Выберите свою игровую опцию</p></template></rt-card>"
            />
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot; :background-opacity=&quot;0.7&quot; :background-smoke=&quot;0.3&quot; :is-white-color=&quot;true&quot; :offset-top=&quot;true&quot; background-color-type=&quot;black&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Microsoft Office 365</p><p class=&quot;rt-space-top05&quot;>Полный пакет программ <br>для всей семьи</p></template><template slot=&quot;footer&quot;><p>Выберите свой тип подписки</p></template></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground8.png&quot; :background-cover=&quot;true&quot; :is-white-color=&quot;true&quot; background-color-type=&quot;black&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Игровой Warface</p><p class=&quot;rt-space-top05 rt-font-small-upper rt-font-small-upper&quot;>интернет</p><p class=&quot;rt-space-top rt-font-spacing018&quot;>Крутые пушки всем <br> абонентам, оружие <br> навсегда, кредиты каждый<br> день</p></template><template slot=&quot;footer&quot;><div class=&quot;rt-font-right&quot;><rt-price :value=&quot;850&quot; /></div><rt-button :is-block=&quot;true&quot; class=&quot;rt-button-small rt-button-white white-wave&quot;>Подключить</rt-button></template></rt-card>"
            />
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground9.png&quot; background-position=&quot;bottom-right&quot; :col-size=&quot;2&quot;><template slot=&quot;content&quot;><p class=&quot;rt-space-top05 rt-font-small-upper&quot;>стоимость покупки</p><rt-price :value=&quot;4990&quot; :only-price=&quot;true&quot; /></template><template slot=&quot;footer&quot;><div class=&quot;rt-space-bottom2&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Wi-Fi HD-видеокамера</p><p class=&quot;rt-space-top05&quot;>Контролируйте все <br>происходящее на расстоянии <br>  и просматривайте записи на<br> любом устройстве. </p></div></template></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground7.png&quot; :background-cover=&quot;true&quot; :background-opacity=&quot;0.7&quot; :background-smoke=&quot;0.2&quot; :is-white-color=&quot;true&quot; :offset-top=&quot;true&quot; background-color-type=&quot;black&quot;
            ><template slot=&quot;content&quot;><p class=&quot;rt-font-paragraph rt-font-bold&quot;>Мобильное ТВ</p><p class=&quot;rt-space-top05&quot;>101 тв-канал с контентом на любой вкус в подарок </p></template><template slot=&quot;footer&quot;><p>Подробнее</p></template></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-color-type=&quot;red&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-color-type=&quot;orange&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-color-type=&quot;yellow&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-color-type=&quot;pink&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-color-type=&quot;green&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot;/>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot; :background-blur=&quot;5&quot;><p class=&quot;rt-card__label rt-font-paragraph&quot;>Оплата услуг</p></rt-card>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card :background-repeat=&quot;true&quot; background-image=&quot;/static/example-images/cardBackground2.png&quot; :background-smoke=&quot;0.3&quot;/>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-smoke=&quot;0.5&quot;/>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot;/>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-12 rt-col-md-3 rt-space-top is-b2c">
            <pre-code
              text="<rt-card background-image=&quot;/static/example-images/cardBackground1.png&quot; :background-cover=&quot;true&quot;/>"
            />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
            <pre-code
              text="<rt-card background-color-type=&quot;dark-blue&quot; :background-blur=&quot;5&quot;><p>Оплата услуг</p></rt-card>"
            />
          </div>
        </div>
        <div class="row">
          <div class="rt-col-12 rt-col-td-6 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              background-image=&quot;/static/images/B2B/category-img.png&quot;
              :is-b2b-category=&quot;true&quot;
              :category-card-size=&quot;3&quot;
              background-color-type=&quot;green-low&quot;
              :is-white-color=&quot;true&quot;
              category-icon-mobile=&quot;/static/images/B2B/shield.svg&quot;
            >
              <template slot=&quot;content&quot;>
                <h3 class=&quot;rt-font-bold rt-space-bottom05&quot;>
                  Видеонаблюдение
                </h3>
                <div class=&quot;rt-font-small-paragraph&quot;>
                  Система удаленного видеонаблюдения
                </div>
              </template>
              <template slot=&quot;footer&quot;>
                <a href=&quot;#&quot;>
                  <rt-button
                    class=&quot;rt-button-white rt-button-small rt-space-horizontal&quot;
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-8 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              background-image=&quot;/static/images/B2B/virtual-ATS.png&quot;
              :is-b2b-category=&quot;true&quot;
              :category-card-size=&quot;2&quot;
              background-color-type=&quot;purple&quot;
              :is-white-color=&quot;true&quot;
              category-icon-mobile=&quot;/static/images/B2B/shield.svg&quot;
            >
              <template slot=&quot;content&quot;>
                <h3 class=&quot;rt-font-bold rt-space-bottom05&quot;>
                  Виртуальная АТС
                </h3>
                <div class=&quot;rt-font-small-paragraph&quot;>
                  Быстрое подключение без трат на оборудование, возможность
                  пользоваться из любой точки мира и ни одного пропущенного
                  звонка клиента
                </div>
              </template>
              <template slot=&quot;footer&quot;>
                <rt-price
                  :is-option=&quot;true&quot;
                  :value=&quot;500&quot;
                  currency=&quot;₽&quot;
                  time-interval=&quot;в месяц&quot;
                  :b2b-price=&quot;true&quot;
                />
                <a href=&quot;#&quot;>
                  <rt-button
                    class=&quot;rt-button-white rt-button-small rt-space-horizontal&quot;
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              :is-b2b-category=&quot;true&quot;
              :category-card-size=&quot;1&quot;
              background-color-type=&quot;dark-blue&quot;
              :is-white-color=&quot;true&quot;
              category-icon-mobile=&quot;/static/images/B2B/shield.svg&quot;
            >
              <template slot=&quot;content&quot;>
                <p class=&quot;rt-font-paragraph rt-font-bold rt-space-bottom05&quot;>
                  Сервис по защите от сетевых угроз
                </p>
                <div class=&quot;rt-font-small-paragraph&quot;>
                  На базе решения класса Unified Threat Management (UTM)
                </div>
              </template>
              <template slot=&quot;footer&quot;>
                <a href=&quot;#&quot;>
                  <rt-button
                    class=&quot;rt-button-white rt-button-small rt-space-horizontal&quot;
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              :is-b2b-category=&quot;true&quot;
              :category-card-size=&quot;1&quot;
              category-icon-mobile=&quot;/static/images/B2B/mobile-call.svg&quot;
            >
              <template slot=&quot;content&quot;>
                <p class=&quot;rt-font-paragraph rt-font-bold rt-space-bottom05&quot;>
                  Сервис по защите от сетевых угроз
                </p>
                <div class=&quot;rt-font-small-paragraph&quot;>
                  На базе решения класса Unified Threat Management (UTM)
                </div>
              </template>
              <template slot=&quot;footer&quot;>
                <rt-price
                  :is-option=&quot;true&quot;
                  :value=&quot;500&quot;
                  currency=&quot;₽&quot;
                  time-interval=&quot;в месяц&quot;
                  :b2b-price=&quot;true&quot;
                />
                <a href=&quot;#&quot;>
                  <rt-button
                    class=&quot;rt-button-purple-border rt-button-small rt-space-horizontal&quot;
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b color-white">
            <pre-code
              text='
                <rt-card backgroundImage="/static/images/B2B/category-img.png" :product-card="true" background-color-type="yellow-high">
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
                <rt-card backgroundImage="/static/images/B2B/category-img.png" :product-card="true" background-color-type="purple">
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
                <rt-card backgroundImage="/static/images/B2B/category-img.png" :product-card="true" background-color-type="green">
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
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top higher-z is-b2b">
            <pre-code text='
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
                  <p class="rtb-card__subtitle rt-space-bottom05">
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
                  <p class="rtb-card__subtitle rt-space-bottom05">
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
                    <links-block>
                      <template slot="content">
                        <div class="rtb-card__social-link">
                          <svg width="26"
                               height="26"
                               xmlns="http://www.w3.org/2000/svg"
                               xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                              <path
                                id="a"
                                d="M17.333 6.067V0H0v12.133h17.333z"
                              />
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                              <circle
                                fill="red"
                                fill-rule="nonzero"
                                cx="12.858"
                                cy="12.858"
                                r="12.858"
                              />
                              <g transform="translate(4.333 6.933)">
                                <mask id="b" fill="#fff">
                                  <use xlink:href="#a" />
                                </mask>
                                <path
                                  d="M6.894 8.627V3.506l4.53 2.56-4.53 2.561zM16.97 1.895A2.17 2.17 0 0 0 15.44.362C14.087 0 8.667 0 8.667 0s-5.42 0-6.772.362A2.17 2.17 0 0 0 .362 1.895C0 3.246 0 6.067 0 6.067s0 2.82.362 4.172c.2.745.787 1.333 1.533 1.532 1.351.362 6.772.362 6.772.362s5.42 0 6.772-.362a2.171 2.171 0 0 0 1.532-1.532c.362-1.352.362-4.172.362-4.172s0-2.82-.362-4.172z"
                                  fill="#FFF"
                                  mask="url(#b)"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rtb-card__social-link">
                          <svg
                            width="26"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                              <circle
                                cx="13"
                                cy="13"
                                r="13"
                                fill="#25D366"
                                fill-rule="nonzero"/>
                              <path
                                d="M18.734 6.836c-1.454-1.494-3.384-2.317-5.443-2.32-4.244 0-7.695 3.548-7.699 7.904 0 1.396.355 2.753 1.026 3.955l-1.092 4.098 4.082-1.1a7.54 7.54 0 0 0 3.679.964h.004c4.24 0 7.694-3.549 7.698-7.909 0-2.112-.8-4.099-2.255-5.592zm-5.443 12.166a6.252 6.252 0 0 1-3.26-.917L9.8 17.94l-2.42.652.645-2.427-.151-.25a6.676 6.676 0 0 1-.978-3.496c0-3.624 2.871-6.57 6.4-6.57 1.708 0 3.313.686 4.524 1.926a6.631 6.631 0 0 1 1.87 4.648c-.003 3.629-2.874 6.578-6.398 6.578zm3.51-4.925c-.193-.098-1.137-.576-1.315-.644-.177-.065-.306-.099-.431.098-.13.197-.499.645-.61.774-.11.132-.224.148-.416.049-.192-.099-.812-.307-1.547-.982-.572-.523-.955-1.172-1.07-1.369-.11-.197-.01-.303.085-.402.085-.087.192-.23.288-.345.096-.113.129-.197.192-.33.063-.132.033-.246-.015-.344-.048-.1-.432-1.073-.594-1.468-.155-.387-.314-.333-.432-.337-.11-.008-.24-.008-.369-.008a.7.7 0 0 0-.513.247c-.177.197-.672.675-.672 1.649s.69 1.91.786 2.044c.096.132 1.355 2.127 3.285 2.983.458.205.816.326 1.096.417.461.152.878.13 1.21.08.37-.057 1.137-.478 1.3-.94.158-.463.158-.857.11-.94-.048-.084-.177-.133-.369-.232z"
                                fill="#FFF"/>
                            </g>
                          </svg>
                        </div>
                        <div class="rtb-card__social-link">
                          <svg
                            width="26"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill-rule="nonzero" fill="none">
                              <circle
                                fill="#7D3DAF"
                                cx="12.878"
                                cy="12.878"
                                r="12.878"/>
                              <g fill="#FFF">
                                <path
                                  d="M20.13 8.942l-.005-.018c-.369-1.481-2.033-3.071-3.561-3.402l-.018-.004a19.931 19.931 0 0 0-7.45 0l-.017.004c-1.528.33-3.192 1.92-3.561 3.402l-.005.018a14.376 14.376 0 0 0 0 6.237l.005.018c.353 1.418 1.894 2.935 3.365 3.352v1.654c0 .599.735.893 1.152.46l1.688-1.74a19.8 19.8 0 0 0 4.823-.32l.018-.004c1.528-.33 3.192-1.92 3.561-3.402l.005-.018c.456-2.07.456-4.168 0-6.237zm-1.336 5.937c-.246.966-1.51 2.168-2.514 2.39a18.577 18.577 0 0 1-3.962.318.094.094 0 0 0-.07.028l-1.233 1.256-1.31 1.336a.154.154 0 0 1-.264-.105v-2.74a.095.095 0 0 0-.078-.093c-1.004-.222-2.268-1.424-2.514-2.39-.411-1.87-.411-3.766 0-5.637.246-.966 1.51-2.168 2.513-2.39a18.563 18.563 0 0 1 6.918 0c1.005.222 2.268 1.424 2.514 2.39.411 1.87.411 3.767 0 5.637z"
                                />
                                <path
                                  d="M15.006 16.144c-.155-.047-.302-.078-.439-.135-1.415-.583-2.718-1.335-3.75-2.488-.586-.656-1.046-1.396-1.434-2.18-.184-.371-.34-.757-.497-1.14-.145-.35.068-.712.291-.975.21-.248.48-.437.773-.576.228-.11.453-.047.62.146.36.415.691.851.96 1.333.164.296.12.658-.18.86-.072.049-.138.106-.206.161a.674.674 0 0 0-.156.163.444.444 0 0 0-.03.393c.369 1.005.99 1.787 2.009 2.208.163.067.327.146.514.124.315-.037.417-.38.637-.558a.604.604 0 0 1 .723-.032c.233.146.458.303.681.461.22.155.439.307.641.485.195.17.262.393.152.624-.2.424-.493.776-.914 1-.12.064-.261.085-.395.126-.155-.047.134-.041 0 0zM12.825 8.166c1.852.051 3.373 1.271 3.699 3.088.055.31.075.627.1.941.01.132-.065.258-.21.26-.148.001-.214-.122-.224-.254-.02-.262-.032-.524-.069-.784-.191-1.37-1.291-2.502-2.664-2.745-.206-.037-.418-.047-.627-.068-.132-.014-.306-.022-.335-.185-.025-.137.092-.246.223-.253.036-.002.072 0 .107 0 1.852.051-.035 0 0 0z"
                                />
                                <path
                                  d="M15.64 11.787c-.004.023-.005.077-.019.128-.05.184-.331.208-.396.021a.552.552 0 0 1-.022-.177c0-.39-.086-.779-.284-1.118a2.088 2.088 0 0 0-.878-.817 2.54 2.54 0 0 0-.7-.214c-.105-.017-.212-.028-.318-.042-.128-.018-.197-.1-.19-.225.005-.118.091-.203.22-.195.426.024.836.115 1.214.313.768.404 1.207 1.042 1.335 1.893.006.039.015.077.018.116.007.095.012.191.02.317-.004.023-.008-.126 0 0z"
                                />
                                <path
                                  d="M14.488 11.743c-.155.002-.238-.083-.254-.224-.011-.098-.02-.198-.044-.293a.826.826 0 0 0-.307-.479.804.804 0 0 0-.25-.12c-.114-.032-.232-.023-.345-.05-.123-.03-.191-.13-.172-.245a.222.222 0 0 1 .235-.177c.718.051 1.23.42 1.304 1.259.005.06.011.122-.002.178-.023.097-.095.146-.165.15-.155.003.07-.004 0 0z"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rtb-card__social-link">
                          <svg
                            width="26px"
                            height="26px"
                            viewBox="0 0 26 26"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                              <circle
                                id="path-1"
                                cx="12.7767741"
                                cy="13.3233778"
                                r="12.6766222"/>
                              <path
                                id="path-3"
                                d="M16.3523411,26 L16.3523411,16.3992485 L19.4551603,16.3992485 L19.9196932,12.6575982 L16.3523411,12.6575982 L16.3523411,10.2687199 C16.3523411,9.18542477 16.6419364,8.44721983 18.1376718,8.44721983 L20.0453515,8.44629092 L20.0453515,5.099799 C19.7153309,5.0542824 18.5829759,4.95238095 17.2655768,4.95238095 C14.5151373,4.95238095 12.6322315,6.6960383 12.6322315,9.89827046 L12.6322315,12.6575982 L9.52154195,12.6575982 L9.52154195,16.3992485 L12.6322315,16.3992485 L12.6322315,26 L16.3523411,26 Z"
                              />
                            </defs>
                            <g
                              id="Plans"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd">
                              <g id="5-product-plans"
                                transform="translate(-219.000000, -768.000000)">
                                <g id="soc"
                                  transform="translate(123.000000, 768.000000)">
                                  <g id="social">
                                    <g id="Fb"
                                      transform="translate(96.000000, 0.000000)">
                                      <mask id="mask-2" fill="white">
                                        <use xlink:href="#path-1" />
                                      </mask>
                                      <use
                                        id="Oval-5"
                                        fill="#3C5A99"
                                        fill-rule="nonzero"
                                        xlink:href="#path-1"/>
                                      <mask id="mask-4" fill="white">
                                        <use xlink:href="#path-3" />
                                      </mask>
                                      <use
                                        id="Fill-4-Copy"
                                        fill="#FEFEFE"
                                        xlink:href="#path-3"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rtb-card__social-link">
                          <svg
                            width="26"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill-rule="nonzero" fill="none">
                              <circle
                                fill="#4C75A3"
                                cx="12.858"
                                cy="12.858"
                                r="12.858"/>
                              <path
                                d="M12.544 18.005h1.003s.303-.032.458-.195c.142-.15.138-.432.138-.432s-.02-1.318.605-1.513c.616-.19 1.407 1.275 2.245 1.838.633.426 1.115.333 1.115.333l2.241-.03s1.172-.072.617-.974c-.046-.074-.324-.668-1.667-1.889-1.405-1.278-1.217-1.07.476-3.28 1.03-1.347 1.443-2.168 1.314-2.52-.123-.335-.88-.247-.88-.247l-2.524.015s-.187-.025-.326.057c-.136.08-.223.265-.223.265s-.4 1.041-.932 1.927c-1.123 1.869-1.573 1.968-1.756 1.852-.428-.271-.32-1.087-.32-1.667 0-1.81.28-2.566-.547-2.762-.274-.064-.476-.107-1.178-.114-.9-.01-1.662.002-2.094.21-.287.137-.508.444-.373.462.167.021.544.1.744.366.26.345.25 1.119.25 1.119s.149 2.132-.347 2.397c-.34.181-.807-.19-1.808-1.885-.514-.869-.901-1.829-.901-1.829s-.075-.18-.208-.275c-.162-.117-.388-.153-.388-.153l-2.398.015s-.36.01-.492.163c-.118.137-.01.419-.01.419s1.878 4.302 4.004 6.47c1.95 1.988 4.162 1.857 4.162 1.857"
                                fill="#FFF"
                              />
                            </g>
                          </svg>
                        </div>
                        <div class="rtb-card__social-link">
                          <svg
                            width="26"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill-rule="nonzero" fill="none">
                              <circle fill="#FF8400" cx="13" cy="13" r="13" />
                              <path
                                d="M14.758 17.274a8.07 8.07 0 0 0 2.522-1.06c.594-.38.774-1.175.4-1.78a1.262 1.262 0 0 0-1.756-.406 5.452 5.452 0 0 1-5.848 0 1.262 1.262 0 0 0-1.755.407c-.375.602-.195 1.4.398 1.78.785.499 1.637.855 2.523 1.059l-2.426 2.461a1.301 1.301 0 0 0 0 1.824c.25.251.574.378.898.378.327 0 .651-.127.901-.378l2.386-2.42 2.386 2.42a1.259 1.259 0 0 0 1.8 0 1.301 1.301 0 0 0 0-1.824l-2.429-2.461zm-1.757-9.817c.993 0 1.799.817 1.799 1.823 0 1.005-.806 1.822-1.799 1.822-.99 0-1.799-.817-1.799-1.822 0-1.006.809-1.823 1.799-1.823zm0 6.224c2.395 0 4.343-1.975 4.343-4.4 0-2.431-1.948-4.406-4.343-4.406S8.658 6.85 8.658 9.278c0 2.429 1.948 4.403 4.343 4.403z"
                                fill="#FFF"/>
                            </g>
                          </svg>
                        </div>
                        <div class="rtb-card__social-link">
                          <svg
                            width="26"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill-rule="nonzero" fill="none">
                              <circle fill="#506CFB" cx="13" cy="13" r="13" />
                              <path
                                d="M12.76 19.106a6.26 6.26 0 0 1-1.034-.086c-.595.413-1.37.934-2.322 1.563v-2.458A6.309 6.309 0 0 1 6.5 12.803C6.5 9.322 9.302 6.5 12.76 6.5c3.456 0 6.259 2.822 6.259 6.303s-2.803 6.303-6.26 6.303zm0-2.78a2.956 2.956 0 0 0 2.945-2.967c0 .02-5.891 0-5.891 0a2.956 2.956 0 0 0 2.945 2.966z"
                                fill="#FFF"/>
                            </g>
                          </svg>
                        </div>
                        <div class="rtb-card__social-link">
                          <svg
                            width="26"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill-rule="nonzero" fill="none">
                              <circle fill="#F5F5F5" cx="13" cy="13" r="13" />
                              <g transform="translate(6.783 3.391)">
                                <path
                                  d="M8.821 7.724l3.614-1.695c0 2.963-1.99 6.026-3.756 8.943l-3.027 4.622 1.32-8.435 1.849-3.435z"
                                  fill="#E00000"/>
                                <circle
                                  fill="#F33"
                                  cx="6.217"
                                  cy="6.217"
                                  r="6.217"/>
                                <circle
                                  fill="#FFF"
                                  cx="6.217"
                                  cy="6.217"
                                  r="2.449"/>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rtb-card__social-link">
                          <svg
                            width="26"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                id="a"
                                x1="0%"
                                y1="99.998%"
                                x2="100.005%"
                                y2="-.006%">
                                <stop stop-color="#FC0" offset="0%" />
                                <stop stop-color="#FFE992" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fill-rule="nonzero" fill="none">
                              <circle fill="#F5F5F5" cx="13" cy="13" r="13" />
                              <path
                                fill="url(#a)"
                                d="M14.696 0L0 6.585l6.43 2.532 2.297 7.086z"
                                transform="translate(4.899 5.275)"/>
                              <path
                                fill="#FC0"
                                d="M19.217 5.275l-8.29 9.37 2.465 6.833z"/>
                              <path
                                fill="#ECA704"
                                d="M10.83 14.775l2.735 6.703-.914-8.767-7.752-1.03z"/>
                            </g>
                          </svg>
                        </div>
                        <div class="rtb-card__social-link">
                          <svg
                            width="26"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                              <circle
                                fill="#F5F5F5"
                                fill-rule="nonzero"
                                cx="13"
                                cy="13"
                                r="13"/>
                              <path
                                fill="#000"
                                fill-rule="nonzero"
                                d="M6.143 19.782h3.434v2.073H6.143zM16.423 19.782h3.434v2.073h-3.434z"/>
                              <path
                                d="M5.055 7.407h.533v3.527c-.588 0-1.066-.49-1.066-1.095V7.954a.54.54 0 0 1 .533-.547zM20.945 7.407h-.533v3.527c.588 0 1.066-.49 1.066-1.095V7.954a.54.54 0 0 0-.533-.547z"
                                fill="#0061DC"
                                fill-rule="nonzero"/>
                              <path
                                d="M6.143 5.898c0-.996 4.413-1.376 6.857-1.376 2.412 0 6.857.38 6.857 1.376v13.99H6.143V5.899z"
                                fill="#007AFF"
                                fill-rule="nonzero"/>
                              <path
                                d="M6.91 6.973c1.317-.38 3.35-.57 6.1-.57 2.752 0 4.785.19 6.1.57.14.04.235.169.235.317v7.736c0 .182-.145.33-.322.33H6.998a.326.326 0 0 1-.322-.33V7.29a.33.33 0 0 1 .235-.317z"
                                fill="#FFF"
                                fill-rule="nonzero"
                                opacity=".981"/>
                              <path
                                d="M11.106 18.777h3.81c.629 0 1.153.483 1.209 1.112H9.897a1.215 1.215 0 0 1 1.209-1.112z"
                                fill="#0061DC"
                                fill-rule="nonzero"/>
                              <g transform="translate(16.509 16.47)">
                                <ellipse
                                  fill="#000"
                                  fill-rule="nonzero"
                                  cx="1.13"
                                  cy="1.165"
                                  rx="1.13"
                                  ry="1.165"/>
                                <ellipse
                                  fill="#F3F3F3"
                                  fill-rule="nonzero"
                                  cx="1.13"
                                  cy="1.165"
                                  rx="1.13"
                                  ry="1.165"/>
                                <ellipse
                                  cx="1.13"
                                  cy="1.165"
                                  rx="1.077"
                                  ry="1.111"/>
                              </g>
                              <g transform="translate(7.252 16.47)">
                                <ellipse
                                  fill="#000"
                                  fill-rule="nonzero"
                                  cx="1.13"
                                  cy="1.165"
                                  rx="1.13"
                                  ry="1.165"/>
                                <ellipse
                                  fill="#F3F3F3"
                                  fill-rule="nonzero"
                                  cx="1.13"
                                  cy="1.165"
                                  rx="1.13"
                                  ry="1.165"/>
                                <ellipse
                                  cx="1.13"
                                  cy="1.165"
                                  rx="1.077"
                                  ry="1.111"/>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </template>
                    </links-block>
                    <p class="rtb-card__links-block__footnote rt-font-small-paragraph color-main025">безлимитные сервисы</p>
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
                      time-interval=""/>
                  </p>
                </div>
                <a href="#">
                  <button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                    Выбрать
                  </button>
                </a>
              </template>
            </rt-card>
            '/>
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
                      <button
                        class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05"
                      >
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
                <p class="rt-font-paragraph rt-space-bottom rt-font-real-bold">
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
                  <links-block>
                    <template slot="content">
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <defs>
                            <path id="a" d="M17.333 6.067V0H0v12.133h17.333z" />
                          </defs>
                          <g fill="none" fill-rule="evenodd">
                            <circle
                              fill="red"
                              fill-rule="nonzero"
                              cx="12.858"
                              cy="12.858"
                              r="12.858"
                            />
                            <g transform="translate(4.333 6.933)">
                              <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                              </mask>
                              <path
                                d="M6.894 8.627V3.506l4.53 2.56-4.53 2.561zM16.97 1.895A2.17 2.17 0 0 0 15.44.362C14.087 0 8.667 0 8.667 0s-5.42 0-6.772.362A2.17 2.17 0 0 0 .362 1.895C0 3.246 0 6.067 0 6.067s0 2.82.362 4.172c.2.745.787 1.333 1.533 1.532 1.351.362 6.772.362 6.772.362s5.42 0 6.772-.362a2.171 2.171 0 0 0 1.532-1.532c.362-1.352.362-4.172.362-4.172s0-2.82-.362-4.172z"
                                fill="#FFF"
                                mask="url(#b)"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <circle
                              cx="13"
                              cy="13"
                              r="13"
                              fill="#25D366"
                              fill-rule="nonzero"
                            />
                            <path
                              d="M18.734 6.836c-1.454-1.494-3.384-2.317-5.443-2.32-4.244 0-7.695 3.548-7.699 7.904 0 1.396.355 2.753 1.026 3.955l-1.092 4.098 4.082-1.1a7.54 7.54 0 0 0 3.679.964h.004c4.24 0 7.694-3.549 7.698-7.909 0-2.112-.8-4.099-2.255-5.592zm-5.443 12.166a6.252 6.252 0 0 1-3.26-.917L9.8 17.94l-2.42.652.645-2.427-.151-.25a6.676 6.676 0 0 1-.978-3.496c0-3.624 2.871-6.57 6.4-6.57 1.708 0 3.313.686 4.524 1.926a6.631 6.631 0 0 1 1.87 4.648c-.003 3.629-2.874 6.578-6.398 6.578zm3.51-4.925c-.193-.098-1.137-.576-1.315-.644-.177-.065-.306-.099-.431.098-.13.197-.499.645-.61.774-.11.132-.224.148-.416.049-.192-.099-.812-.307-1.547-.982-.572-.523-.955-1.172-1.07-1.369-.11-.197-.01-.303.085-.402.085-.087.192-.23.288-.345.096-.113.129-.197.192-.33.063-.132.033-.246-.015-.344-.048-.1-.432-1.073-.594-1.468-.155-.387-.314-.333-.432-.337-.11-.008-.24-.008-.369-.008a.7.7 0 0 0-.513.247c-.177.197-.672.675-.672 1.649s.69 1.91.786 2.044c.096.132 1.355 2.127 3.285 2.983.458.205.816.326 1.096.417.461.152.878.13 1.21.08.37-.057 1.137-.478 1.3-.94.158-.463.158-.857.11-.94-.048-.084-.177-.133-.369-.232z"
                              fill="#FFF"
                            />
                          </g>
                        </svg>
                      </div>
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill-rule="nonzero" fill="none">
                            <circle
                              fill="#7D3DAF"
                              cx="12.878"
                              cy="12.878"
                              r="12.878"
                            />
                            <g fill="#FFF">
                              <path
                                d="M20.13 8.942l-.005-.018c-.369-1.481-2.033-3.071-3.561-3.402l-.018-.004a19.931 19.931 0 0 0-7.45 0l-.017.004c-1.528.33-3.192 1.92-3.561 3.402l-.005.018a14.376 14.376 0 0 0 0 6.237l.005.018c.353 1.418 1.894 2.935 3.365 3.352v1.654c0 .599.735.893 1.152.46l1.688-1.74a19.8 19.8 0 0 0 4.823-.32l.018-.004c1.528-.33 3.192-1.92 3.561-3.402l.005-.018c.456-2.07.456-4.168 0-6.237zm-1.336 5.937c-.246.966-1.51 2.168-2.514 2.39a18.577 18.577 0 0 1-3.962.318.094.094 0 0 0-.07.028l-1.233 1.256-1.31 1.336a.154.154 0 0 1-.264-.105v-2.74a.095.095 0 0 0-.078-.093c-1.004-.222-2.268-1.424-2.514-2.39-.411-1.87-.411-3.766 0-5.637.246-.966 1.51-2.168 2.513-2.39a18.563 18.563 0 0 1 6.918 0c1.005.222 2.268 1.424 2.514 2.39.411 1.87.411 3.767 0 5.637z"
                              />
                              <path
                                d="M15.006 16.144c-.155-.047-.302-.078-.439-.135-1.415-.583-2.718-1.335-3.75-2.488-.586-.656-1.046-1.396-1.434-2.18-.184-.371-.34-.757-.497-1.14-.145-.35.068-.712.291-.975.21-.248.48-.437.773-.576.228-.11.453-.047.62.146.36.415.691.851.96 1.333.164.296.12.658-.18.86-.072.049-.138.106-.206.161a.674.674 0 0 0-.156.163.444.444 0 0 0-.03.393c.369 1.005.99 1.787 2.009 2.208.163.067.327.146.514.124.315-.037.417-.38.637-.558a.604.604 0 0 1 .723-.032c.233.146.458.303.681.461.22.155.439.307.641.485.195.17.262.393.152.624-.2.424-.493.776-.914 1-.12.064-.261.085-.395.126-.155-.047.134-.041 0 0zM12.825 8.166c1.852.051 3.373 1.271 3.699 3.088.055.31.075.627.1.941.01.132-.065.258-.21.26-.148.001-.214-.122-.224-.254-.02-.262-.032-.524-.069-.784-.191-1.37-1.291-2.502-2.664-2.745-.206-.037-.418-.047-.627-.068-.132-.014-.306-.022-.335-.185-.025-.137.092-.246.223-.253.036-.002.072 0 .107 0 1.852.051-.035 0 0 0z"
                              />
                              <path
                                d="M15.64 11.787c-.004.023-.005.077-.019.128-.05.184-.331.208-.396.021a.552.552 0 0 1-.022-.177c0-.39-.086-.779-.284-1.118a2.088 2.088 0 0 0-.878-.817 2.54 2.54 0 0 0-.7-.214c-.105-.017-.212-.028-.318-.042-.128-.018-.197-.1-.19-.225.005-.118.091-.203.22-.195.426.024.836.115 1.214.313.768.404 1.207 1.042 1.335 1.893.006.039.015.077.018.116.007.095.012.191.02.317-.004.023-.008-.126 0 0z"
                              />
                              <path
                                d="M14.488 11.743c-.155.002-.238-.083-.254-.224-.011-.098-.02-.198-.044-.293a.826.826 0 0 0-.307-.479.804.804 0 0 0-.25-.12c-.114-.032-.232-.023-.345-.05-.123-.03-.191-.13-.172-.245a.222.222 0 0 1 .235-.177c.718.051 1.23.42 1.304 1.259.005.06.011.122-.002.178-.023.097-.095.146-.165.15-.155.003.07-.004 0 0z"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <defs>
                            <circle id="a" cx="12.777" cy="13.323" r="12.677" />
                            <path
                              id="b"
                              d="M16.352 26v-9.6h3.103l.465-3.742h-3.568v-2.39c0-1.083.29-1.82 1.786-1.82l1.907-.002V5.1c-.33-.046-1.462-.148-2.78-.148-2.75 0-4.633 1.744-4.633 4.946v2.76h-3.11v3.741h3.11V26h3.72z"
                            />
                          </defs>
                          <g fill="none" fill-rule="evenodd">
                            <use
                              fill="#3C5A99"
                              fill-rule="nonzero"
                              xlink:href="#a"
                            />
                            <use fill="#FEFEFE" xlink:href="#b" />
                          </g>
                        </svg>
                      </div>
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill-rule="nonzero" fill="none">
                            <circle
                              fill="#4C75A3"
                              cx="12.858"
                              cy="12.858"
                              r="12.858"
                            />
                            <path
                              d="M12.544 18.005h1.003s.303-.032.458-.195c.142-.15.138-.432.138-.432s-.02-1.318.605-1.513c.616-.19 1.407 1.275 2.245 1.838.633.426 1.115.333 1.115.333l2.241-.03s1.172-.072.617-.974c-.046-.074-.324-.668-1.667-1.889-1.405-1.278-1.217-1.07.476-3.28 1.03-1.347 1.443-2.168 1.314-2.52-.123-.335-.88-.247-.88-.247l-2.524.015s-.187-.025-.326.057c-.136.08-.223.265-.223.265s-.4 1.041-.932 1.927c-1.123 1.869-1.573 1.968-1.756 1.852-.428-.271-.32-1.087-.32-1.667 0-1.81.28-2.566-.547-2.762-.274-.064-.476-.107-1.178-.114-.9-.01-1.662.002-2.094.21-.287.137-.508.444-.373.462.167.021.544.1.744.366.26.345.25 1.119.25 1.119s.149 2.132-.347 2.397c-.34.181-.807-.19-1.808-1.885-.514-.869-.901-1.829-.901-1.829s-.075-.18-.208-.275c-.162-.117-.388-.153-.388-.153l-2.398.015s-.36.01-.492.163c-.118.137-.01.419-.01.419s1.878 4.302 4.004 6.47c1.95 1.988 4.162 1.857 4.162 1.857"
                              fill="#FFF"
                            />
                          </g>
                        </svg>
                      </div>
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill-rule="nonzero" fill="none">
                            <circle fill="#FF8400" cx="13" cy="13" r="13" />
                            <path
                              d="M14.758 17.274a8.07 8.07 0 0 0 2.522-1.06c.594-.38.774-1.175.4-1.78a1.262 1.262 0 0 0-1.756-.406 5.452 5.452 0 0 1-5.848 0 1.262 1.262 0 0 0-1.755.407c-.375.602-.195 1.4.398 1.78.785.499 1.637.855 2.523 1.059l-2.426 2.461a1.301 1.301 0 0 0 0 1.824c.25.251.574.378.898.378.327 0 .651-.127.901-.378l2.386-2.42 2.386 2.42a1.259 1.259 0 0 0 1.8 0 1.301 1.301 0 0 0 0-1.824l-2.429-2.461zm-1.757-9.817c.993 0 1.799.817 1.799 1.823 0 1.005-.806 1.822-1.799 1.822-.99 0-1.799-.817-1.799-1.822 0-1.006.809-1.823 1.799-1.823zm0 6.224c2.395 0 4.343-1.975 4.343-4.4 0-2.431-1.948-4.406-4.343-4.406S8.658 6.85 8.658 9.278c0 2.429 1.948 4.403 4.343 4.403z"
                              fill="#FFF"
                            />
                          </g>
                        </svg>
                      </div>
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill-rule="nonzero" fill="none">
                            <circle fill="#506CFB" cx="13" cy="13" r="13" />
                            <path
                              d="M12.76 19.106a6.26 6.26 0 0 1-1.034-.086c-.595.413-1.37.934-2.322 1.563v-2.458A6.309 6.309 0 0 1 6.5 12.803C6.5 9.322 9.302 6.5 12.76 6.5c3.456 0 6.259 2.822 6.259 6.303s-2.803 6.303-6.26 6.303zm0-2.78a2.956 2.956 0 0 0 2.945-2.967c0 .02-5.891 0-5.891 0a2.956 2.956 0 0 0 2.945 2.966z"
                              fill="#FFF"
                            />
                          </g>
                        </svg>
                      </div>
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill-rule="nonzero" fill="none">
                            <circle fill="#F5F5F5" cx="13" cy="13" r="13" />
                            <g transform="translate(6.783 3.391)">
                              <path
                                d="M8.821 7.724l3.614-1.695c0 2.963-1.99 6.026-3.756 8.943l-3.027 4.622 1.32-8.435 1.849-3.435z"
                                fill="#E00000"
                              />
                              <circle
                                fill="#F33"
                                cx="6.217"
                                cy="6.217"
                                r="6.217"
                              />
                              <circle
                                fill="#FFF"
                                cx="6.217"
                                cy="6.217"
                                r="2.449"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="a"
                              x1="0%"
                              y1="99.998%"
                              x2="100.005%"
                              y2="-.006%"
                            >
                              <stop stop-color="#FC0" offset="0%" />
                              <stop stop-color="#FFE992" offset="100%" />
                            </linearGradient>
                          </defs>
                          <g fill-rule="nonzero" fill="none">
                            <circle fill="#F5F5F5" cx="13" cy="13" r="13" />
                            <path
                              fill="url(#a)"
                              d="M14.696 0L0 6.585l6.43 2.532 2.297 7.086z"
                              transform="translate(4.899 5.275)"
                            />
                            <path
                              fill="#FC0"
                              d="M19.217 5.275l-8.29 9.37 2.465 6.833z"
                            />
                            <path
                              fill="#ECA704"
                              d="M10.83 14.775l2.735 6.703-.914-8.767-7.752-1.03z"
                            />
                          </g>
                        </svg>
                      </div>
                      <div class="rtb-card__social-link">
                        <svg
                          width="26"
                          height="26"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <circle
                              fill="#F5F5F5"
                              fill-rule="nonzero"
                              cx="13"
                              cy="13"
                              r="13"
                            />
                            <path
                              fill="#000"
                              fill-rule="nonzero"
                              d="M6.143 19.782h3.434v2.073H6.143zM16.423 19.782h3.434v2.073h-3.434z"
                            />
                            <path
                              d="M5.055 7.407h.533v3.527c-.588 0-1.066-.49-1.066-1.095V7.954a.54.54 0 0 1 .533-.547zM20.945 7.407h-.533v3.527c.588 0 1.066-.49 1.066-1.095V7.954a.54.54 0 0 0-.533-.547z"
                              fill="#0061DC"
                              fill-rule="nonzero"
                            />
                            <path
                              d="M6.143 5.898c0-.996 4.413-1.376 6.857-1.376 2.412 0 6.857.38 6.857 1.376v13.99H6.143V5.899z"
                              fill="#007AFF"
                              fill-rule="nonzero"
                            />
                            <path
                              d="M6.91 6.973c1.317-.38 3.35-.57 6.1-.57 2.752 0 4.785.19 6.1.57.14.04.235.169.235.317v7.736c0 .182-.145.33-.322.33H6.998a.326.326 0 0 1-.322-.33V7.29a.33.33 0 0 1 .235-.317z"
                              fill="#FFF"
                              fill-rule="nonzero"
                              opacity=".981"
                            />
                            <path
                              d="M11.106 18.777h3.81c.629 0 1.153.483 1.209 1.112H9.897a1.215 1.215 0 0 1 1.209-1.112z"
                              fill="#0061DC"
                              fill-rule="nonzero"
                            />
                            <g transform="translate(16.509 16.47)">
                              <ellipse
                                fill="#000"
                                fill-rule="nonzero"
                                cx="1.13"
                                cy="1.165"
                                rx="1.13"
                                ry="1.165"
                              />
                              <ellipse
                                fill="#F3F3F3"
                                fill-rule="nonzero"
                                cx="1.13"
                                cy="1.165"
                                rx="1.13"
                                ry="1.165"
                              />
                              <ellipse
                                cx="1.13"
                                cy="1.165"
                                rx="1.077"
                                ry="1.111"
                              />
                            </g>
                            <g transform="translate(7.252 16.47)">
                              <ellipse
                                fill="#000"
                                fill-rule="nonzero"
                                cx="1.13"
                                cy="1.165"
                                rx="1.13"
                                ry="1.165"
                              />
                              <ellipse
                                fill="#F3F3F3"
                                fill-rule="nonzero"
                                cx="1.13"
                                cy="1.165"
                                rx="1.13"
                                ry="1.165"
                              />
                              <ellipse
                                cx="1.13"
                                cy="1.165"
                                rx="1.077"
                                ry="1.111"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </template>
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
                  <button
                    class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05"
                  >
                    Выбрать
                  </button>
                </a>
              </template>
            </rt-card>
          </div>
          <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <rt-card :equal-padding="true" :has-label="true">
              <template slot="header">
                <p class="rt-font-paragraph rt-space-bottom rt-font-real-bold">
                  Тариф 1
                </p>
              </template>
              <template slot="label">
                <h4>- 30%</h4>
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
                  <button
                    class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05"
                  >
                    Выбрать
                  </button>
                </a>
              </template>
            </rt-card>
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
            <div class="app-documentation__name rt-col-2">
              component name
            </div>
            <div class="app-documentation__name rt-col-3">
              component property
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                property type
              </div>
              <div class="app-documentation__value-item rt-col-6">
                about
              </div>
              <div class="app-documentation__value-item rt-col-3">
                default value
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Задает ширину картинки карточки <br>
                number - любое число становится px <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Задает высоту картинки карточки <br>
                number - любое число становится px <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Устанавливает цвет фона карточки <br>
                возможные значения <br>
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
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
            <div class="app-documentation__name rt-col-3">
              background-image
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
                url адрек картинки карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
            <div class="app-documentation__name rt-col-3">
              background-cover
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
                Устанавливает cover значение для картинки карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
            <div class="app-documentation__name rt-col-3">
              :background-blur
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
                Размытие картинки <br>
                значение от <span class="rt-code rt-code--fill">0.0</span> до
                <span class="rt-code rt-code--fill">1.0</span>
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Размытие заднего фона <br>
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
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Прозрачность заднего фона <br>
                значение от <span class="rt-code rt-code--fill">0.0</span> до
                <span class="rt-code rt-code--fill">1.0</span>
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
            <div class="app-documentation__name rt-col-3">
              :is-white-color
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
                Установить белый цвет текста
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Задает расположение фона карточки возможные значения : <br>
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
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Устанавливает отступ картинки сверху<br>
                number - любое число становится px <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Устанавливает отступ картинки слева<br>
                number - любое число становится px <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Устанавливает отступ картинки справа<br>
                number - любое число становится px <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
                Устанавливает отступ картинки снизу<br>
                number - любое число становится px <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
            <div class="app-documentation__name rt-col-3">
              :offset-top
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
                Флаг указывающий отступ сверху карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
            <div class="app-documentation__name rt-col-3">
              :col-size
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
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
            <div class="app-documentation__name rt-col-3">
              :card-height
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
                Устанавливает высоту карточки
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
            <div class="app-documentation__name rt-col-2">
              rt-card
            </div>
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
