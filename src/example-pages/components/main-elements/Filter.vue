<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">Filter</h1>
        </div>
      </div>
      <div class="app-body">
        <pre-code
          text="<rt-filter :change-url=&quot;true&quot;>
  <div class=&quot;row&quot;>
    <div class=&quot;rt-col-8&quot;>
      <div class=&quot;row&quot;>
        <rt-filter-watcher :options=&quot;['creator','device-type','subscription','KasperskyInternetSecurity1',]&quot; :values=&quot;['kaspersky','less than 3','only month']&quot; class=&quot;rt-col-6 rt-space-bottom&quot;>
          <rt-card>
            <template slot=&quot;header&quot;>
              <img
                width=&quot;175px&quot;
                class=&quot;rt-card__header__image&quot;
                src=&quot;/static/images/homeinternet/homeinternet-image18.jpg&quot;
              />
            </template>
            <template slot=&quot;content&quot;>
              <p class=&quot;rt-font-paragraph color-main07 rt-font-bold rt-space-top2&quot;>
                Kaspersky Internet Security 1
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
          </rt-card>
        </rt-filter-watcher>
        <rt-filter-watcher :options=&quot;['creator','subscription','KasperskyInternetSecurity2']&quot; :values=&quot;['kaspersky','only month']&quot; class=&quot;rt-col-6 rt-space-bottom&quot;>
          <rt-card>
            <template slot=&quot;header&quot;>
              <img
                width=&quot;175px&quot;
                class=&quot;rt-card__header__image&quot;
                src=&quot;/static/images/homeinternet/homeinternet-image18.jpg&quot;
              />
            </template>
            <template slot=&quot;content&quot;>
              <p class=&quot;rt-font-paragraph color-main07 rt-font-bold rt-space-top2&quot;>
                Kaspersky Internet Security 2
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
          </rt-card>
        </rt-filter-watcher>
        <rt-filter-watcher :options=&quot;['creator','archive','subscription',
                'KasperskyInternetSecurity3']&quot; :values=&quot;['eset','show','not month']&quot;
                           class=&quot;rt-col-6 rt-space-bottom&quot;>
          <rt-card>
            <template slot=&quot;header&quot;>
              <img
                width=&quot;175px&quot;
                class=&quot;rt-card__header__image&quot;
                src=&quot;/static/images/homeinternet/homeinternet-image18.jpg&quot;
              />
            </template>
            <template slot=&quot;content&quot;>
              <p class=&quot;rt-font-paragraph color-main07 rt-font-bold rt-space-top2&quot;>
                Kaspersky Internet Security 3
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
          </rt-card>
        </rt-filter-watcher>
        <rt-filter-watcher :options=&quot;['creator','subscription','KasperskyInternetSecurity4']&quot; :values=&quot;['drweb','not month']&quot; class=&quot;rt-col-6 rt-space-bottom&quot;>
          <rt-card>
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
          </rt-card>
        </rt-filter-watcher>
      </div>
    </div>
    <div class=&quot;rt-col-1&quot;>
    </div>
    <div class=&quot;rt-col-3&quot;>
      <rt-sticky>

        <p class=&quot;rt-font-paragraph rt-font-bold rt-space-bottom&quot;>Способ покупки</p>
        <rt-filter-caller>
          <rt-radio-button-container>
            <rt-radio-button :checked=&quot;true&quot; name=&quot;subscription&quot;>Годовая подписка</rt-radio-button>
            <div class=&quot;rt-space-left15 color-dark06 rt-space-bottom&quot;>два месяца в подарок</div>
            <rt-radio-button name=&quot;subscription&quot; value=&quot;month&quot;>Месячная подписка</rt-radio-button>
            <div class=&quot;rt-space-left15 color-dark06 rt-space-bottom&quot;>первый месяц 0 рублей</div>
          </rt-radio-button-container>
        </rt-filter-caller>
        <div class=&quot;rt-space-bottom&quot;>

          <p class=&quot;rt-font-paragraph rt-font-bold rt-space-bottom&quot;>Количество ПК</p>
          <rt-filter-caller :clear-zero=&quot;true&quot;>
            <rt-input name=&quot;device-type&quot; value=&quot;0&quot; :show-nubmers-buttons=&quot;true&quot; insert-type=&quot;number&quot;/>
          </rt-filter-caller>
        </div>
        <rt-filter-caller>
          <rt-checkbox-container>
            <p class=&quot;rt-font-paragraph rt-font-bold rt-space-bottom&quot;>Производитель</p>
            <div class=&quot;rt-space-bottom&quot;>
              <rt-checkbox name=&quot;creator&quot; value=&quot;kaspersky&quot;>Kaspersky</rt-checkbox>
            </div>
            <div class=&quot;rt-space-bottom&quot;>
              <rt-checkbox name=&quot;creator&quot; value=&quot;drweb&quot;>Dr.Web</rt-checkbox>
            </div>
            <div class=&quot;rt-space-bottom&quot;>
              <rt-checkbox name=&quot;creator&quot; value=&quot;eset&quot;>Eset</rt-checkbox>
            </div>
          </rt-checkbox-container>
        </rt-filter-caller>
        <rt-filter-caller>
          <rt-switch-container set-props-on-not-checked=&quot;@none&quot;>
            <div class=&quot;rt-space-bottom&quot;>
              <rt-switch name=&quot;archive&quot; value=&quot;show&quot;>Показать архивные тарифы</rt-switch>
            </div>
          </rt-switch-container>
        </rt-filter-caller>
      </rt-sticky>
    </div>

  </div>
</rt-filter>"></pre-code>
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
