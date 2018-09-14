<template>

    <div>
        <div class="color-block--rule-color">
            <rt-scroll-tabs class="rt-tab-header " active-tabs-classname="rt-tab-header__item--active"
                            tabs-classname="rt-tab-header__item">
                <div class="rt-container color-white">
                    <div class="rt-col-12">
                        <div class="row">
                            <div class="rt-col-8">
                                <div class="rt-tab-nav">
                                    <a class="rt-tab-header__item" href="#about">О системе</a>
                                    <a class="rt-tab-header__item" href="#two">Устройства</a>
                                    <a class="rt-tab-header__item" href="#three">Подключение и управление</a>
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


        <rt-banner :is-fullscreen-image="true">
            <rt-banner-item background-image="/images/smartHouse/bg.jpg"
                            background-color="none"
            >

                <p class="rt-font-banner-label-bold color-line">
                    <span class="color-line-text">Умный   дом</span>
                </p>
                <p class="color-line color-line--is-paragraph rt-space-bottom">
          <span class="color-line-text rt-font-paragraph">
            Ваш дом всегда под контролем,  <br> даже когда вы далеко.
              <svg class="color-line-paragraph-icon" width="38" height="23" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path
                      fill="@{b2c-orange-low}"
                      d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"
                      id="a"/></defs><g fill="none" fill-rule="evenodd"><path
                      d="M33-81.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
                      fill="#FFF"/><use fill="#FF4F12" xlink:href="#a"/></g></svg>
          </span>
                </p>
                <div class="rt-space-top2">
                    <rt-button class="rt-button-orange rt-space-horizontal05">Подключить</rt-button>
                    <rt-button class="rt-button-orange rt-space-horizontal">Войти</rt-button>
                </div>
            </rt-banner-item>
        </rt-banner>
        <div class="color-block--white">
            <div class="rt-container">
                <div class="rt-col-12 rt-space-top3">
                    <div class="row">
                        <div class="rt-col-1"></div>
                        <div class="rt-col-5 flex-center-center">
                            <div>
                                <p class="rt-font-promo-title color-main07">О системе</p>
                                <p class="rt-font-paragraph rt-space-top color-main05">«Умный дом» — это безопасный и
                                    комфортный дом. Вы будете знать обо всём, что в нём происходит, даже находясь в
                                    другом городе. Система датчиков и устройств моментально уведомит вас о любых
                                    происшествиях. А ещё вы сможете управлять бытовыми приборами удалённо: например, с
                                    помощью смартфона выключить утюг, даже если вы уже ушли из дома.</p>
                            </div>
                        </div>
                        <div class="rt-col-2">

                        </div>
                        <div class="rt-col-4 flex-start-bottom rt-space-top25">
                            <div class="rt-space-horizontal">
                                <div class="phone"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <rt-banner :is-fullscreen-image="true" class="banner-support">
            <rt-banner-item background-image="/images/smartHouse/bg2.jpg"
                            background-color="none"
            >

                <p class="rt-font-banner-label-bold color-line rt-space-top">
                    <span class="color-line-text">Чем занят <br>  мой ребёнок?</span>
                </p>
                <p class="color-line color-line--is-paragraph rt-space-bottom">
          <span class="color-line-text rt-font-paragraph">
            Спокойно оставляйте детей одних или с няней — благодаря камере внутреннего видеонаблюдения  вы всегда сможете узнать, что происходит дома.
              <svg class="color-line-paragraph-icon" width="38" height="23" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path
                      fill="@{b2c-orange-low}"
                      d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"
                      id="a"/></defs><g fill="none" fill-rule="evenodd"><path
                      d="M33-81.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
                      fill="#FFF"/><use fill="#FF4F12" xlink:href="#a"/></g></svg>
          </span>
                </p>
                <div class="rt-space-top2">
                    <rt-button class="rt-button-orange">Подобрать комплект</rt-button>
                </div>
            </rt-banner-item>
            <rt-banner-item background-image="/images/smartHouse/bg.jpg"
                            background-color="none"
            >

                <p class="rt-font-banner-label-bold color-line rt-space-top">
                    <span class="color-line-text">Чем занят <br>  мой ребёнок?</span>
                </p>
                <p class="color-line color-line--is-paragraph rt-space-bottom">
          <span class="color-line-text rt-font-paragraph">
            Спокойно оставляйте детей одних или с няней — благодаря камере внутреннего видеонаблюдения  вы всегда сможете узнать, что происходит дома.
              <svg class="color-line-paragraph-icon" width="38" height="23" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path
                      fill="@{b2c-orange-low}"
                      d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"
                      id="a"/></defs><g fill="none" fill-rule="evenodd"><path
                      d="M33-81.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
                      fill="#FFF"/><use fill="#FF4F12" xlink:href="#a"/></g></svg>
          </span>
                </p>
                <div class="rt-space-top2">
                    <rt-button class="rt-button-orange">Подобрать комплект</rt-button>
                </div>
            </rt-banner-item>
            <rt-banner-item background-image="/example-images/banerBackground1.jpg"
                            background-color="none"
            >

                <p class="rt-font-banner-label-bold color-line rt-space-top">
                    <span class="color-line-text">Чем занят <br>  мой ребёнок?</span>
                </p>
                <p class="color-line color-line--is-paragraph rt-space-bottom">
          <span class="color-line-text rt-font-paragraph">
            Спокойно оставляйте детей одних или с няней — благодаря камере внутреннего видеонаблюдения  вы всегда сможете узнать, что происходит дома.
              <svg class="color-line-paragraph-icon" width="38" height="23" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path
                      fill="@{b2c-orange-low}"
                      d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"
                      id="a"/></defs><g fill="none" fill-rule="evenodd"><path
                      d="M33-81.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
                      fill="#FFF"/><use fill="#FF4F12" xlink:href="#a"/></g></svg>
          </span>
                </p>
                <div class="rt-space-top2">
                    <rt-button class="rt-button-orange">Подобрать комплект</rt-button>
                </div>
            </rt-banner-item>
        </rt-banner>
        <div class="color-block--light-grey">
            <div class="rt-container rt-space-vertical">
                <p class="rt-font-promo-title">Устройства</p>
                <div class="rt-col-12">
                    <div class="row">
                        <div class="rt-col-12">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="color-block--white">
            <div class="rt-container">
                <div class="rt-col-12 rt-space-top3">
                    <div class="row">
                        <div class="rt-col-1"></div>
                        <div class="rt-col-5 flex-center-center">
                            <div>
                                <p class="rt-font-promo-title color-main07">Подключение и управление</p>
                                <p class="rt-font-paragraph rt-space-top color-main05">Установить и настроить «Умный дом» несложно,  в комплекте вы найдете подробную инструкцию. Тем не менее, если у вас возникнут сложности, мы всё сделаем  за вас: просто скажите о своем желании оператору  при звонке. Услуга платная, о стоимости вам расскажет оператор.
                                    <br><br>Управлять устройствами можно с компьютера, планшета или смартфона — через личный кабинет и мобильное приложение.</p>
                                <div class="rt-space-top15">
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
                        <div class="rt-col-2">

                        </div>
                        <div class="rt-col-4 flex-start-bottom rt-space-top25">
                            <div class="rt-space-horizontal">
                                <div class="phone phone--is-big"></div>
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
                                     :backgroun-size-widht="260"
                                     :backgroun-size-height="264"
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
                                     :background-position="'bottom-right'"
                                     :col-size="2">

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
                    <div class="rt-font-paragraph color-white07 rt-space-bottom05">Примечание</div>
                    <div class="rule">
                        <p class="rule-item"> 1. Услуги Высокоскоростного интернета предоставляются при наличии технической возможности.</p>
                        <p class="rule-item"> 2. Цены указаны в рублях с учетом НДС.</p>
                        <p class="rule-item"> «По оптической линии» — предоставление доступа к сети Интернет осуществляется по технологии FTTx (англ., fiber to the x — оптическое волокно до точки X) или по технологии PON (англ. Passive Optical Networks — пассивная оптическая сеть до абонента).</p>
                        <p class="rule-item"> «По телефонной линии» — предоставление доступа к сети Интернет осуществляется по технологии xDSL (англ., digital subscriber line, цифровая абонентская линия).</p>
                        <p class="rule-item"> 3. Предоставление доступа к сети Интернет осуществляется по технологии xDSL (англ., digital subscriber line, цифровая абонентская линия).</p>
                        <p class="rule-item"> 4. Скорость доступа к сети Интернет зависит не только от технических особенностей Услуги, но и от действий третьих сил, организаций и лиц, управляющих сегментами сети Интернет (или оказывающих на них влияние), не принадлежащих ПАО «Ростелеком». Скорость доступа к сети Интернет является величиной неопределенной и зависит от ряда параметров, в том числе, технических характеристик подключения, маршрута и текущей загрузки каналов, характеристиками установленного абонентского оборудования (ПК, смартфон, WiFi-роутер), версией программного обеспечения или используемого стандарта, месторасположением запрашиваемого контента. Все параметры являются переменными и не гарантируются ПАО «Ростелеком» за пределами своей сети. Указанная в тарифном плане скорость является максимально возможной.</p>
                        <p class="rule-item"> 5. Абонентская плата за услугу Интернет списывается с лицевого счета абонента один раз в месяц. В первый месяц пользования услугой Интернет с лицевого счета абонента списывается абонентская плата, рассчитанная пропорционально количеству дней от даты начала оказания услуги до конца месяца.</p>
                        <p class="rule-item"> 6. Оборудование (маршрутизатор или абонентский модем в зависимости от технологии предоставления услуги), необходимое для получения услуг, может быть приобретено отдельно по действующим тарифам. Стоимость оборудования уточняйте по телефону 8-800-100-0-800.</p>
                        <p class="rule-item"> 7. Safe Kids — Сэйф кидс (перевод с англ. — Защищенные дети). Услуга предоставляется на территории Российской Федерации для абонентов-физических лиц при наличии технической возможности. При первом подключении услуги на условиях ежемесячной подписки первые 30 календарных дней с момента активации услуги предоставляются без взимания абонентской платы, далее согласно Базовым тарифам. При первом подключении услуги на условиях годовой подписки абонент пользуется услугой 14 месяцев (420 календарных дней) с момента активации, два последних месяца предоставляются без взимания абонентской платы. При прологнации услуги или повторных подключениях на условиях годовой подписки период пользования составляет 360 календарных дней. Подробности об услуге, ПАО «Ростелеком» узнавайте по бесплатному номеру 8-800-100-0-800, а также на сайте www.rt.ru.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style coped lang="less">
    .phone {
        background-image: url('/images/smartHouse/appPhone.png');
        width: 100%;
        height: 36.5vw;
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
        min-height: 450px;
        min-width: 300px;
        max-height: 582px;
        position: relative;
        bottom: -30px;
        &--is-big{
            bottom: 0;
        }
    }

    .rt-banner.banner-support,
    .banner-support .rt-banner-content {
        height: 631px;
    }
</style>

<script>
  import { Button, ScrollTabs, Price } from "@/components/main-elements";
  import { Banner, BannerItem } from "@/components/experimental-elements";
  import { Card } from "@/components/complex-elements/Card"

  const componentsList = {};

  componentsList[Price.name] = Price;
  componentsList[Card.name] = Card;
  componentsList[Button.name] = Button;
  componentsList[ScrollTabs.name] = ScrollTabs;
  componentsList[Banner.name] = Banner;
  componentsList[BannerItem.name] = BannerItem;

  export default {
    name: "AppRadioButton",
    components: componentsList,
    mounted() {
    },
    created() {
    },
    methods: {}
  };
</script>
