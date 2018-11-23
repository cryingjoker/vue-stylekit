<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">Filter</h1>
        </div>
      </div>
      <div class="app-body">
        <rt-filter>
          <div class="row">
            <div class="rt-col-8">
              <div class="row">
                <rt-filter-watcher :options="['creator','device-type']" :values="['kaspersky','less than 3']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img
                        width="175px"
                        class="rt-card__header__image"
                        src="/static/images/homeinternet/homeinternet-image18.jpg"
                      />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Internet Security
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">

                            <img
                              src="/static/images/medium-icon.svg"
                            />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает 2 устройства одновременно
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
                              />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Контроль приложений и&nbsp;времени
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>

                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price
                            :value="1600"
                            :old-value="1800"
                            time-interval="год."
                          ></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator']" :values="['kaspersky']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img
                        width="175px"
                        class="rt-card__header__image"
                        src="/static/images/homeinternet/homeinternet-image18.jpg"
                      />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Internet Security
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">

                            <img
                              src="/static/images/medium-icon.svg"
                            />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает 2 устройства одновременно
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
                              />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Контроль приложений и&nbsp;времени
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>

                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price
                            :value="1600"
                            :old-value="1800"
                            time-interval="год."
                          ></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator','archive']" :values="['eset','show']"
                                   class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img
                        width="175px"
                        class="rt-card__header__image"
                        src="/static/images/homeinternet/homeinternet-image18.jpg"
                      />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Internet Security
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">

                            <img
                              src="/static/images/medium-icon.svg"
                            />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает 2 устройства одновременно
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
                              />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Контроль приложений и&nbsp;времени
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>

                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price
                            :value="1600"
                            :old-value="1800"
                            time-interval="год."
                          ></rt-price>
                        </div>
                        <div class="rt-space-top05">
                          <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                        </div>
                      </div>
                    </template>
                  </rt-card>
                </rt-filter-watcher>
                <rt-filter-watcher :options="['creator']" :values="['drweb']" class="rt-col-6 rt-space-bottom">
                  <rt-card>
                    <template slot="header">
                      <img
                        width="175px"
                        class="rt-card__header__image"
                        src="/static/images/homeinternet/homeinternet-image18.jpg"
                      />
                    </template>
                    <template slot="content">
                      <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">
                        Kaspersky Internet Security
                      </p>
                      <p class="rt-space-top color-main07 rt-space-right2">
                        Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства
                      </p>
                    </template>
                    <template slot="bottom-list">
                      <div class="rt-card-list rt-space-bottom2">
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">

                            <img
                              src="/static/images/medium-icon.svg"
                            />
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Защищает 2 устройства одновременно
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-list__item">
                          <div class="rt-card-list__icon">
                            <div class="rt-space-left15">
                              <img
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
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
                                src="/static/images/small-icon.svg"
                              />
                            </div>
                          </div>
                          <div class="rt-card-list__name">
                            <p class="rt-font-small-paragraph color-main05">
                              Контроль приложений и&nbsp;времени
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>

                    <template slot="content-without-wrapper">
                      <div class="rt-card__border-content">
                        <div class="rt-col-12 flex-end-center rt-space-top">
                          <rt-price
                            :value="1600"
                            :old-value="1800"
                            time-interval="год."
                          ></rt-price>
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
                  <rt-switch-container>
                    <rt-switch name="subscription" value="year">Годовая подписка</rt-switch>
                    <div class="rt-space-left25 color-dark06 rt-space-bottom">два месяца в подарок</div>
                    <rt-switch name="subscription" value="month">Месячная подписка</rt-switch>
                    <div class="rt-space-left25 color-dark06 rt-space-bottom">первый месяц 0 рублей</div>
                  </rt-switch-container>
                </rt-filter-caller>
                <div class="rt-space-bottom">

                  <p class="rt-font-paragraph rt-font-bold rt-space-bottom">Количество ПК</p>
                  <rt-filter-caller>
                    <rt-input name="device-type" value="0" :show-nubmers-buttons="true" insert-type="number"/>
                  </rt-filter-caller>
                </div>
                <rt-filter-caller>
                  <rt-checkbox-container>
                    <p class="rt-font-paragraph rt-font-bold rt-space-bottom">Производитель</p>
                    <div class="rt-space-bottom">
                      <rt-checkbox name="creator" value="kaspersky">Kaspersky</rt-checkbox>
                    </div>
                    <div class="rt-space-bottom">
                      <rt-checkbox name="creator" value="drweb">Dr.Web</rt-checkbox>
                    </div>
                    <div class="rt-space-bottom">
                      <rt-checkbox name="creator" value="eset">Eset</rt-checkbox>
                    </div>
                  </rt-checkbox-container>
                </rt-filter-caller>
                <rt-filter-caller>
                  <rt-switch-container set-props-on-not-checked="@none">
                    <div class="rt-space-bottom">
                      <rt-switch name="archive" value="show">Показать архивные тарифы</rt-switch>
                    </div>
                  </rt-switch-container>
                </rt-filter-caller>
              </rt-sticky>
            </div>

          </div>
        </rt-filter>
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
