<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">
              Carousel 2.0
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div style="width: 100vw">
      <rt-carousel>
        <rt-carousel-slide slide-classes="rt-col-4 rt-col-md-2 rt-col-td-3">
          <rt-card>
            <template slot="header">
              <img width="175px" class="rt-card__headeremitSelectedData__image" src="/static/images/homeinternet/homeinternet-image18.jpg" />
            </template>
            <template slot="content">
              <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Kaspersky Internet Security 4</p>
              <p class="rt-space-top color-main07 rt-space-right2">Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства</p>
            </template>
            <template slot="bottom-list">
              <div class="rt-card-list rt-space-bottom2">
                  <div class="rt-card-list__item">
                    <div class="rt-card-list__icon">
                      <img src="/static/images/medium-icon.svg" />
                    </div>
                    <div class="rt-card-list__name">
                      <p class="rt-font-small-paragraph color-main05">Защищает 2 устройства одновременно</p>
                    </div>
                  </div>
                  <div class="rt-card-list__item">
                    <div class="rt-card-list__icon">
                      <div class="rt-space-left15">
                        <img src="/static/images/small-icon.svg" />
                      </div>
                    </div>
                    <div class="rt-card-list__name">
                      <p class="rt-font-small-paragraph color-main05">Первый месяц в&nbsp;подарок</p>
                    </div>
                  </div>
                  <div class="rt-card-list__item">
                    <div class="rt-card-list__icon">
                      <div class="rt-space-left15">
                        <img src="/static/images/small-icon.svg" />
                      </div>
                    </div>
                    <div class="rt-card-list__name">
                      <p class="rt-font-small-paragraph color-main05">Контроль интернет-сайтов</p>
                    </div>
                  </div>
                  <div class="rt-card-list__item">
                    <div class="rt-card-list__icon">
                      <div class="rt-space-left15">
                        <img src="/static/images/small-icon.svg" />
                      </div>
                    </div>
                    <div class="rt-card-list__name">
                      <p class="rt-font-small-paragraph color-main05">Игровой формат и&nbsp;простые настройки</p>
                    </div>
                  </div>
                  <div class="rt-card-list__item">
                    <div class="rt-card-list__icon">
                      <div class="rt-space-left15">
                        <img src="/static/images/small-icon.svg" />
                      </div>
                    </div>
                    <div class="rt-card-list__name">
                      <p class="rt-font-small-paragraph color-main05">Определение местоположения</p>
                    </div>
                  </div>
                  <div class="rt-card-list__item">
                    <div class="rt-card-list__icon">
                      <div class="rt-space-left15">
                        <img src="/static/images/small-icon.svg" />
                      </div>
                    </div>
                    <div class="rt-card-list__name">
                      <p class="rt-font-small-paragraph color-main05">Сообщения ребенку</p>
                    </div>
                  </div>
                  <div class="rt-card-list__item">
                    <div class="rt-card-list__icon">
                      <div class="rt-space-left15">
                        <img src="/static/images/small-icon.svg" />
                      </div>
                    </div>
                    <div class="rt-card-list__name">
                      <p class="rt-font-small-paragraph color-main05">Контроль приложений и&nbsp;времени</p>
                    </div>
                  </div>
              </div>
            </template>

            <template slot="content-without-wrapper">
              <div class="rt-card__border-content">
                <div class="rt-col-12 flex-end-center rt-space-top">
                  <rt-price :value="1600" :old-value="1800" time-interval="год."></rt-price>
                </div>
                <div class="rt-space-top05">
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
            </template>
          </rt-card>
        </rt-carousel-slide>

        <rt-carousel-slide slide-classes="rt-col-4 rt-col-md-2 rt-col-td-3">
          <rt-card>
            <template slot="header">
              <rt-logo height="70"></rt-logo>
            </template>
            <template slot="content">
              <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 1</p>
              <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
              <p>&nbsp;</p>
            </template>
            <template slot="content-without-wrapper">
              <div class="rt-card__border-content">
                <div class="rt-col-12 flex-end-center rt-space-top">
                  <rt-price :value="1000" :old-value="1800" time-interval="мес."></rt-price>
                </div>
                <div class="rt-space-top05">
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
            </template>
          </rt-card>
        </rt-carousel-slide>

        <rt-carousel-slide slide-classes="rt-col-4 rt-col-md-2 rt-col-td-3">
          <rt-card>
            <template slot="header">
              <rt-logo height="70"></rt-logo>
            </template>
            <template slot="content">
              <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 2</p>
              <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
              <p>&nbsp;</p>
            </template>
            <template slot="content-without-wrapper">
              <div class="rt-card__border-content">
                <div class="rt-col-12 flex-end-center rt-space-top">
                  <rt-price :value="1000" :old-value="1800" time-interval="мес."></rt-price>
                </div>
                <div class="rt-space-top05">
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
            </template>
          </rt-card>
        </rt-carousel-slide>

        <rt-carousel-slide slide-classes="rt-col-4 rt-col-md-2 rt-col-td-3">
          <rt-card>
            <template slot="header">
              <rt-logo height="70"></rt-logo>
            </template>
            <template slot="content">
              <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 3</p>
              <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
              <p>&nbsp;</p>
            </template>
            <template slot="content-without-wrapper">
              <div class="rt-card__border-content">
                <div class="rt-col-12 flex-end-center rt-space-top">
                  <rt-price :value="700" time-interval="мес."></rt-price>
                </div>
                <div class="rt-space-top05">
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
            </template>
          </rt-card>
        </rt-carousel-slide>

        <rt-carousel-slide slide-classes="rt-col-4 rt-col-md-2 rt-col-td-3">
          <rt-card>
            <template slot="header">
              <rt-logo height="70"></rt-logo>
            </template>
            <template slot="content">
              <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 4</p>
              <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
              <p>&nbsp;</p>
            </template>
            <template slot="content-without-wrapper">
              <div class="rt-card__border-content">
                <div class="rt-col-12 flex-end-center rt-space-top">
                  <rt-price :value="450" time-interval="мес."></rt-price>
                </div>
                <div class="rt-space-top05">
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
            </template>
          </rt-card>
        </rt-carousel-slide>

        <rt-carousel-slide slide-classes="rt-col-4 rt-col-md-2 rt-col-td-3">
          <rt-card>
            <template slot="header">
              <rt-logo height="70"></rt-logo>
            </template>
            <template slot="content">
              <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 5</p>
              <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
              <p>&nbsp;</p>
            </template>
            <template slot="content-without-wrapper">
              <div class="rt-card__border-content">
                <div class="rt-col-12 flex-end-center rt-space-top">
                  <rt-price :value="300" time-interval="мес."></rt-price>
                </div>
                <div class="rt-space-top05">
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
            </template>
          </rt-card>
        </rt-carousel-slide>

        <rt-carousel-slide slide-classes="rt-col-4 rt-col-md-2 rt-col-td-3">
          <rt-card>
            <template slot="header">
              <rt-logo height="70"></rt-logo>
            </template>
            <template slot="content">
              <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 6</p>
              <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
              <p>&nbsp;</p>
            </template>
            <template slot="content-without-wrapper">
              <div class="rt-card__border-content">
                <div class="rt-col-12 flex-end-center rt-space-top">
                  <rt-price :value="650" time-interval="мес."></rt-price>
                </div>
                <div class="rt-space-top05">
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
            </template>
          </rt-card>
        </rt-carousel-slide>

        <rt-carousel-slide slide-classes="rt-col-4 rt-col-md-2 rt-col-td-3">
          <rt-card>
            <template slot="header">
              <rt-logo height="70"></rt-logo>
            </template>
            <template slot="content">
              <p class="rt-font-paragraph color-main07 rt-font-bold rt-space-top2">Предложение из прод каталога 7</p>
              <p class="rt-space-top color-main07 rt-space-right2">Краткое описание из продуктового каталога</p>
              <p>&nbsp;</p>
            </template>
            <template slot="content-without-wrapper">
              <div class="rt-card__border-content">
                <div class="rt-col-12 flex-end-center rt-space-top">
                  <rt-price :value="777" time-interval="мес."></rt-price>
                </div>
                <div class="rt-space-top05">
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
            </template>
          </rt-card>
        </rt-carousel-slide>
      </rt-carousel>
    </div>




    <!--<div class="rt-container">-->
      <!--<rt-swiper>-->
      <!--<rt-slide v-for="i in 10" :key="i" class="rt-space-right15">-->
        <!--<h2>Слайд {{ i }}</h2>-->
        <!--<rt-row-list>-->
          <!--<rt-row-list-item v-for="i in 3" :key="i">-->
            <!--<template slot="option">-->
              <!--<div class="d-flex flex-row">-->
                <!--<div>-->
                  <!--<p>Антивирус</p>-->
                  <!--<p class="color-main05">-->
                    <!--Kaspersky Internet Security, месяц в подарок-->
                  <!--</p>-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->
          <!--</rt-row-list-item>-->
        <!--</rt-row-list>-->
        <!--<rt-price-->
          <!--class="rt-space-vertical"-->
          <!--time-interval="мес"-->
          <!--is-option-->
          <!--:value="i * 1000"-->
        <!--/>-->
        <!--<rt-button class="rt-button-orange">-->
          <!--Подключить-->
        <!--</rt-button>-->
      <!--</rt-slide>-->
    <!--</rt-swiper>-->
    <!--</div>-->
    <!-- <div class="rt-space-top5">
      <pre-code text='
        <rt-swiper :hide-navigation="true">
          <rt-slide slide-classes="rt-col-4 in-plus-card higher-z">
            <rt-card
              :equal-padding="true"
              :has-discount="true"
              :discount-lines="1"
              :is-b2b-package="true">
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
              :is-b2b-package="true">
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
              :is-b2b-package="true">
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
        </rt-swiper>'/>
    </div> -->
    <div class="rt-container">
      <!-- <div class="app-content rt-col-12 rt-col-md-3">
        <documentation-builder :json="documentation" type="components" />
      </div> -->
    </div>
  </div>
</template>

<script>
// import documentation from "../../../lib/components/Carousel/docs/index.json";
import componentsList from "../../componentsList";

export default {
  name: "AppCarousel",
  components: componentsList,
  data: () => ({
    // documentation: {}
  }),
  mounted() {
    // this.documentation = documentation;
  },
  created() {},
  methods: {}
};
</script>
