<template>

  <div>
    <div class="color-block--rule-color sticked sticked-block" style="top: 0;">
      <rt-scroll-tabs class="rt-scroll-tab-header " active-tabs-classname="rt-scroll-tab-header__item--active"
                      tabs-classname="rt-scroll-tab-header__item"
      >
        <div class="rt-container color-white">
          <div class="rt-col-12">
            <div class="row">
              <div class="rt-col-10">
                <div class="rt-scroll-tab-nav">
                  <a class="rt-scroll-tab-header__item" href="#about">Об услуге</a>
                  <a class="rt-scroll-tab-header__item" href="#call">Тарифы на звонки по России и зарубеж</a>
                  <a class="rt-scroll-tab-header__item" href="#bonus">Дополнительные возможности</a>
                  <a class="rt-scroll-tab-header__item" href="#device">Оборудование</a>
                </div>
              </div>
              <div class="rt-col-2 flex-end-center">
                <rt-button class="rt-button-small rt-button-orange rt-space-horizontal">Подключить
                </rt-button>
              </div>
            </div>
          </div>
        </div>
      </rt-scroll-tabs>
    </div>

    <rt-banner :is-fullscreen-image="true" class="rt-banner--fill-height" content-min-height="100vh"
               content-height="320px" id="tv">
      <rt-banner-item background-image="/images/mobile/GettyImages-137925796_Edit.jpg"
                      background-color="none"
                      content-min-height="431px"

      >
        <div class="rt-md-space-right2 color-white">
          <p class="rt-font-banner-label-bold rt-font-light">Домашний телефон</p>
          <p class="rt-font-paragraph rt-font-light">Уже больше ста лет помогает людям разговаривать <br>друг с другом
            на расстоянии</p>
          <div class="rt-space-top">
            <div class="rt-md-space-top05 rt-md-space-horizontal05 d-inline-block">
              <rt-button class="rt-button-orange rt-space-horizontal05">Выбрать тариф</rt-button>
            </div>
          </div>
        </div>
      </rt-banner-item>
    </rt-banner>
    <div class="rt-space-top2 rt-space-bottom2">
      <div class="rt-container">
        <div class="rt-col-12">
          <div class="row">
            <div class="rt-col-3  rt-col-md-3 rt-md-space-top rt-font-hypnens-off">
              <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Phone_new" transform="translate(-193.000000, -895.000000)" fill="#FF5F4B">
                    <g id="internet_antivirus_1" transform="translate(193.000000, 895.000000)">
                      <path
                        d="M79.0744286,40.130979 C79.0744286,62.1174171 61.4844286,79.9405029 39.7887143,79.9405029 C18.0915714,79.9405029 0.503,62.1174171 0.503,40.130979 C0.503,18.144541 18.0915714,0.321455238 39.7887143,0.321455238 C61.4844286,0.321455238 79.0744286,18.144541 79.0744286,40.130979"
                        id="Fill-35"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <p class="rt-font-h4 rt-space-top">Безлимитные <br> опции</p>
              <p class="color-main05 rt-space-top">Для неограниченного общения внутри сети, звонков на любые
                стационарные или a номера России</p>
            </div>

            <div class="rt-col-3 rt-col-md-3 rt-md-space-top rt-font-hypnens-off">

              <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="8.10211047%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
                    <stop stop-color="#E99FD0" offset="0%"></stop>
                    <stop stop-color="#E6A671" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Phone_new" transform="translate(-468.000000, -895.000000)" fill="url(#linearGradient-2)">
                    <g id="internet_parent_control_1" transform="translate(468.000000, 895.000000)">
                      <path
                        d="M79.9851505,39.9069486 C79.9851505,61.8933867 62.1606171,79.7164724 40.1756267,79.7164724 C18.1891886,79.7164724 0.366102857,61.8933867 0.366102857,39.9069486 C0.366102857,17.9205105 18.1891886,0.0974247619 40.1756267,0.0974247619 C62.1606171,0.0974247619 79.9851505,17.9205105 79.9851505,39.9069486"
                        id="Fill-177"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <p class="rt-font-h4 rt-space-top">Дополнительные <br> возможности</p>
              <p class="color-main05 rt-space-top">Выбор номера, переадресация звонков, определитель номера,
                конференц-связь</p>
            </div>

            <div class="rt-col-3 rt-font-hypnens-off rt-md-space-top rt-col-md-3">

              <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="0%" y1="0%" x2="101.999998%" y2="100.999999%" id="linearGradient-3">
                    <stop stop-color="#3023AE" offset="0%"></stop>
                    <stop stop-color="#C86DD7" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Phone_new" transform="translate(-742.000000, -895.000000)" fill="url(#linearGradient-3)">
                    <g id="internet_games_1" transform="translate(742.000000, 895.000000)">
                      <path
                        d="M79.9851505,40.1832381 C79.9851505,62.1696762 62.1606171,79.9927619 40.1756267,79.9927619 C18.1891886,79.9927619 0.366102857,62.1696762 0.366102857,40.1832381 C0.366102857,18.1968 18.1891886,0.373714286 40.1756267,0.373714286 C62.1606171,0.373714286 79.9851505,18.1968 79.9851505,40.1832381"
                        id="Fill-172"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <p class="rt-font-h4 rt-space-top">Бонусная <br> программа</p>
              <p class="color-main05 rt-space-top">Бонусы копятся автоматически, а потратить их можно на дополнительные
                услуги и скидки</p>
            </div>

            <div class="rt-col-3 rt-font-hypnens-off rt-md-space-top rt-col-md-3">

              <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Phone_new" transform="translate(-1015.000000, -895.000000)" fill="#65DEED">
                    <g id="tv_multiscreen_1-copy" transform="translate(1015.000000, 894.000000)">
                      <path
                        d="M79.6430171,40.8293714 C79.6430171,62.8158095 61.8184838,80.6388952 39.8334933,80.6388952 C17.8470552,80.6388952 0.0239695238,62.8158095 0.0239695238,40.8293714 C0.0239695238,18.8429333 17.8470552,1.01984762 39.8334933,1.01984762 C61.8184838,1.01984762 79.6430171,18.8429333 79.6430171,40.8293714"
                        id="Fill-142"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <p class="rt-font-h4 rt-space-top">Выгодные звонки по России и за рубеж</p>
              <p class="color-main05 rt-space-top">Если часто звоните в другой город или страну, тариф ХХХ поможет
                сэкономить </p>
            </div>

          </div>
          <div class="row">
            <div class="rt-col-12 rt-space-top">
              <p class="rt-font-h2 rt-space-top25 ">Выгодные предложения</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <rt-banner :is-fullscreen-image="true" class="rt-banner--fill-height" content-min-height="100vh"
               content-height="320px" id="tv">
      <rt-banner-item background-image="/images/mobile/phone.jpg"
                      background-color="none"
                      content-min-height="431px"

      >
        <div class="rt-md-space-right2 color-white">
          <p class="rt-font-banner-label-bold rt-font-light">Безлимитная <br>Россия</p>
          <p class="rt-font-paragraph rt-font-light">Неограниченные звонки на стационарные <br>телефоны по всей стране
          </p>
          <div class="rt-space-top">
            <div class="rt-md-space-top05 rt-md-space-horizontal05 d-inline-block">
              <rt-button class="rt-button-orange rt-space-horizontal05">Подключить</rt-button>
            </div>
          </div>
        </div>
      </rt-banner-item>
    </rt-banner>
    <div class="rt-container">
      <div class="rt-col-12 rt-space-top25 rt-md-space-top">
        <div class="row">
          <div class="rt-col-6 rt-col-md-3 rt-space-top25 rt-md-space-top">
            <img class="promo-phone-app" src="/images/mobile/phoneApp.jpg" alt="">
          </div>
          <div class="rt-col-5 rt-col-md-3 flex-end-bottom rt-space-bottom md-d-block rt-md-space-top2">
            <div>
              <svg width="79px" height="80px" viewBox="0 0 79 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-742.000000, -2078.000000)">
                    <g transform="translate(741.000000, 2078.000000)">
                      <path
                        d="M79.6477143,39.9797143 C79.6477143,61.6768571 62.0577143,79.2654286 40.362,79.2654286 C18.6648571,79.2654286 1.07628571,61.6768571 1.07628571,39.9797143 C1.07628571,18.2825714 18.6648571,0.694 40.362,0.694 C62.0577143,0.694 79.6477143,18.2825714 79.6477143,39.9797143"
                        fill="#FF7E74" fill-rule="evenodd"></path>
                      <path
                        d="M55.496,34.785 L57.4774286,34.785 L57.4774286,57.215 C57.4774286,58.3864286 56.5774286,59.2864286 55.406,59.2864286 L25.2288571,59.2864286 C24.1474286,59.2864286 23.246,58.3864286 23.246,57.3064286 L23.246,34.785 L25.3174286,34.785"
                        id="Stroke-413" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round"></path>
                      <polyline id="Stroke-415" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round"
                                points="37.929 34.785 21.5332857 34.785 21.5332857 26.6778571 59.189 26.6778571 59.189 34.785 42.7932857 34.785"></polyline>
                      <polygon id="Stroke-417" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round"
                               points="37.9285714 59.3771429 42.7928571 59.3771429 42.7928571 26.6771429 37.9285714 26.6771429"></polygon>
                      <path
                        d="M49.3701429,21.0022857 C44.8658571,21.0022857 40.3615714,26.588 40.3615714,26.588 L48.9201429,26.588 C53.4244286,26.678 53.6044286,21.0022857 49.3701429,21.0022857 Z"
                        id="Stroke-419" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round"></path>
                      <path
                        d="M31.354,21.0022857 C35.8568571,21.0022857 40.3625714,26.588 40.3625714,26.588 L31.804,26.588 C27.2997143,26.678 27.1197143,21.0022857 31.354,21.0022857 Z"
                        id="Stroke-420" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round"></path>
                      <path d="M45.316,17.6694286 C45.316,17.6694286 40.3617143,19.2908571 40.3617143,26.678"
                            id="Stroke-421" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round"></path>
                      <path d="M38.741,16.0475714 C37.3895714,19.6504286 38.0195714,23.7047143 40.3624286,26.6775714"
                            id="Stroke-422" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </g>
              </svg>

              <p class="rt-font-h1 rt-font-light">Телефон в подарок</p>
              <p class="color-main05 rt-space-bottom25">Простой и удобный аппарат бесплатно устанавливают при
                подключении услуги</p>
              <rt-button class="rt-button-orange rt-space-horizontal">Подключить</rt-button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style coped lang="less">
  .promo-phone-app {
    width: 117%;
    left: -23%;
    position: relative;
    @media (max-width: 968px) {
      width: 80%;
      left: 0;
      margin-left: 10%;
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
    Annotation,
    ColorLineText
  } from "@/main-elements";
  import { Banner, BannerItem } from "@/experimental-elements";
  import { Card } from "@/complex-elements/Card";

  const componentsList = {};

  componentsList[Price.name] = Price;
  componentsList[Card.name] = Card;
  componentsList[Button.name] = Button;
  componentsList[ScrollTabs.name] = ScrollTabs;
  componentsList[Banner.name] = Banner;
  componentsList[BannerItem.name] = BannerItem;
  componentsList[Tabs.name] = Tabs;
  componentsList[ColorLineText.name] = ColorLineText;
  componentsList[TabsContentItem.name] = TabsContentItem;
  componentsList[TabsNavigationItem.name] = TabsNavigationItem;
  componentsList[Annotation.name] = Annotation;

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
