<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">
              Swiper
              <span class="rt-code rt-font-h3 rt-col">
                .rt-swiper .rt-slide</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
      <rt-swiper :scroll-on-click="true" :hide-navigation="true">
      <rt-slide v-for="i in 10" :key="i" class="rt-space-right15">
        <h2>Слайд {{ i }}</h2>
        <rt-row-list>
          <rt-row-list-item v-for="i in 3" :key="i">
            <template slot="option">
              <div class="d-flex flex-row">
                <div>
                  <p>Антивирус</p>
                  <p class="color-main05">
                    Kaspersky Internet Security, месяц в подарок
                  </p>
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
        <rt-button class="rt-button-orange">
          Подключить
        </rt-button>
      </rt-slide>
    </rt-swiper>
    <div class="rt-space-top5">
      <rt-swiper :hide-navigation="true" :scroll-on-click="true">
        <rt-slide slide-classes="rt-col-4 in-plus-card higher-z">
          <rt-card
            :equal-padding="true"
            :has-discount="true"
            :discount-lines="1"
            :is-b2b-package="true"
            discount-text="1 услуга co скидкой 50%">
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
                  <links-block :icon-array="['vk','ya_map','youtube','viber','whatsapp','tamtam','odnoklassniki',
                    'facebook','ya_navigator', 'ya_transport']" source-directory="/static/images/B2B/"/>
                </div>
                <div class="rtb-card__description__row rt-space-top05">
                  <a href="#" class="rt-font-control rt-link rt-link--purple">Условия тарифа «Вызов 250»</a>
                </div>
              </div>
            </template>
            <template slot="footer">
              <div class="rt-space-bottom"/>
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
        </rt-slide>
        <rt-slide slide-classes="rt-col-4 in-plus-card higher-z">
          <rt-card
            :equal-padding="true"
            :has-discount="true"
            :discount-lines="1"
            :is-b2b-package="true"
            discount-text="1 услуга co скидкой 50%">
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
                  <links-block :icon-array="['vk','ya_map','youtube','viber','whatsapp','tamtam','odnoklassniki',
                    'facebook','ya_navigator', 'ya_transport']" source-directory="/static/images/B2B/"/>
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
        </rt-slide>
        <rt-slide slide-classes="rt-col-4 in-plus-card higher-z">
          <rt-card
            :equal-padding="true"
            :has-discount="true"
            :discount-lines="2"
            :is-b2b-package="true"
            discount-text="2 услуги co скидкой 50%">
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
                  <links-block :icon-array="['vk','ya_map','youtube','viber','whatsapp','tamtam','odnoklassniki',
                    'facebook','ya_navigator', 'ya_transport']" source-directory="/static/images/B2B/"/>
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
        </rt-slide>
        <rt-slide slide-classes="rt-col-4 in-plus-card higher-z">
          <rt-card
            :equal-padding="true"
            :has-discount="true"
            :discount-lines="3"
            :is-b2b-package="true"
            discount-text="3 услуги co скидкой 50%">
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
                  <links-block  :icon-array="['vk','ya_map','youtube','viber','whatsapp','tamtam','odnoklassniki',
                    'facebook','ya_navigator', 'ya_transport']" source-directory="/static/images/B2B/"/>
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
      </rt-slide>
  </rt-swiper>
    </div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <documentation-builder :json="documentation" type="components" />
      </div>
    </div>
  </div>
</template>

<script>
import documentation from "../../../lib/components/Swiper/docs/index.json";
import componentsList from "../../componentsList";

export default {
  name: "AppSwiper",
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
