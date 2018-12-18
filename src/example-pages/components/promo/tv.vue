<style>
  .rt-card-buy__info .flex-fill,
  .rt-card-buy__image {
    min-height: 100%;
  }

  @media screen and (min-height: 600px) and (min-width: 800px) {
    .main-wrapper.basic .layout+.rtk-card__offers {
      margin-top: 0 !important;
    }
  }

  .rt-font-light rt-price__value {
    font-weight: 200;
  }

  .input-clear,
  .rt-close {
    width: 16px;
    height: 16px;
    line-height: 21px;
    vertical-align: middle;
    text-align: center;
  }

  .rt-price__option-value {
    height: 42px;
    color: #000000e6;
    font-size: 54px;
    line-height: 47px;
    font-weight: 400;
  }

  /* .connection {
        padding-left: 10px;
        padding-right: 10px;
        position: relative;
        -webkit-flex: 0 0 49.999998%;
        -ms-flex: 0 0 49.999998%;
        flex: 0 0 49.999998%;
        max-width: 49.999998%;

      } */

  .connection .connection__form>.rt-col-6 {
    max-width: 100% !important;
    padding-left: 0px;
    padding-right: 0px;

  }

  @media (max-width: 768px) {
    .connection {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -o-box-flex: 1;
      box-flex: 1;
      -webkit-flex: 0 0 99.999999%;
      -ms-flex: 0 0 99.999999%;
      flex: 0 0 99.999999%;
      max-width: 99.999999%
    }
  }

  .rt-card .rtk-input__control {
    border-bottom-width: 1px;
  }
</style>
<template>
  <div>



  <div class="wc-inline">
    <rt-banner :is-fullscreen-image="true"
               class="rt-banner--fill-height"
               content-min-height="500px"
               content-height="40vh">
      <rt-banner-item background-image="https://www.moscow.rt.ru/sites/default/files/img/videocontrol-2.png"
                      content-min-height="500px"
                      content-height="40vh">
        <div class="rt-md-space-right2">
          <div class="app-row row">
            <div class="rt-space-vertical">
              <rt-color-line-text><template slot="label">Будьте
                спокойны за своих близких</template><template slot="content">с услугой видеонаблюдение</template></rt-color-line-text>
            </div>
          </div>
          <div class="rt-space-top2 rt-md-space-top color-white">
            <rt-button class="rt-button-orange">Купить</rt-button>
          </div>
        </div>
      </rt-banner-item>
      <rt-banner-item background-image="https://www.moscow.rt.ru/sites/default/files/img/videocontrol-1.png"
                      content-min-height="500px"
                      content-height="40vh">
        <div class="rt-md-space-right2">
          <div class="app-row row">
            <div class="rt-space-vertical">
              <rt-color-line-text><template slot="label">Будьте
                спокойны за своих близких</template><template slot="content">с услугой видеонаблюдение</template></rt-color-line-text>
            </div>
          </div>
          <div class="rt-space-top2 rt-md-space-top color-white">
            <rt-button class="rt-button-orange">Купить</rt-button>
          </div>
        </div>
      </rt-banner-item>
      <rt-banner-item background-image="https://www.moscow.rt.ru/sites/default/files/img/videocontrol-3.png"
                      content-min-height="500px"
                      content-height="40vh">
        <div class="rt-md-space-right2">
          <div class="app-row row">
            <div class="rt-space-vertical">
              <rt-color-line-text><template slot="label">Будьте
                спокойны за своих близких</template><template slot="content">с услугой видеонаблюдение</template></rt-color-line-text>
            </div>
          </div>
          <div class="rt-space-top2 rt-md-space-top color-white">
            <rt-button class="rt-button-orange">Купить</rt-button>
          </div>
        </div>
      </rt-banner-item>
    </rt-banner>

    <!-- Преимущества -->
    <div class="rt-container">
      <div class="row rt-space-vertical25">
        <div class="rt-col-3 rt-col-md-3">
          <img src="https://www.moscow.rt.ru/sites/default/files/img/icon/geography_1.svg" />
          <h4 class="rt-font-h4 rt-font-bold rt-space-top">
            Доступ из&nbsp;любой точки мира
          </h4>
          <p class="rt-font-paragraph rt-space-top color-main05">
            Наблюдайте за&nbsp;тем, что&nbsp;вам дорого в&nbsp;реальном
            времени
            с&nbsp;помощью мобильного приложения
          </p>
        </div>
        <div class="rt-col-3 rt-col-md-3 rt-md-space-top">
          <img src="https://www.moscow.rt.ru/sites/default/files/img/icon/smart_home_cloud_1.svg" />
          <h4 class="rt-font-h4 rt-font-bold rt-space-top">
            Хранение записей видео до&nbsp;30&nbsp;дней
          </h4>
          <p class="rt-font-paragraph rt-space-top color-main05">
            Записанные видео могут храниться в&nbsp;облаке
            от&nbsp;3&nbsp;до&nbsp;30&nbsp;дней
          </p>
        </div>
        <div class="rt-col-3 rt-col-md-3 rt-md-space-top">
          <img src="https://www.moscow.rt.ru/sites/default/files/img/icon/smart_home_move_sensor_1.svg" />
          <h4 class="rt-font-h4 rt-font-bold rt-space-top">
            Встроенные датчики движения и&nbsp;звука
          </h4>
          <p class="rt-font-paragraph rt-space-top color-main05">
            Получайте уведомления, если&nbsp;камера зафиксировала звук
            или&nbsp;движение в&nbsp;выделенной области
          </p>
        </div>
        <div class="rt-col-3 rt-col-md-3 rt-md-space-top">
          <img src="https://www.moscow.rt.ru/sites/default/files/img/icon/smart_home_indoor_video_1.svg" />
          <h4 class="rt-font-h4 rt-font-bold rt-space-top">
            Качественное видео и&nbsp;легкая установка
          </h4>
          <p class="rt-font-paragraph rt-space-top color-main05">
            Камера записывает видео в&nbsp;разрешении 1280х960,
            а&nbsp;запуск
            и&nbsp;подключение не&nbsp;займёт больше 20&nbsp;минут
          </p>
        </div>
      </div>
    </div>

    <!-- Мобильное приложение -->
    <div class="color-block--white">
      <div class="rt-container">
        <div class="row">
          <div class="rt-col-6 flex-center-center rt-md-space-vertical2
                        rt-col-md-3">
            <div>
              <h3 class="rt-font-h3 rt-font-bold">
                Удобное мобильное приложение
              </h3>
              <div class="row rt-space-top rt-md-space-top2">
                <div class="flex-center-center rt-space-left">
                  <img src="https://www.moscow.rt.ru/sites/default/files/img/icon/GooglePlay.png"
                       height="50px" />
                  <p class="rt-font-paragraph color-main07
                                        rt-space-left">
                    Умный дом
                  </p>
                </div>
              </div>
              <p class="rt-font-paragraph rt-space-top05 color-main07
                                rt-md-space-top">
                -&nbsp;смотри видео онлайн или&nbsp;в&nbsp;записи
              </p>
              <p class="rt-font-paragraph rt-space-top05
                                color-main07">
                -&nbsp;сохраняй и&nbsp;редактируй видеоклипы
              </p>
              <p class="rt-font-paragraph rt-space-top05
                                color-main07">
                -&nbsp;настраивай уведомления и&nbsp;сценарии
                с&nbsp;участием
                видеокамеры и&nbsp;встроенных датчиков
              </p>
              <p class="rt-font-paragraph rt-space-top05
                                color-main07">
                -&nbsp;настраивай зоны, в&nbsp;которых камера будет
                фиксировать
                движение
              </p>
              <p class="rt-font-paragraph rt-space-top05
                                color-main07">
                -&nbsp;пользуйся функцией трансляции голоса
              </p>
              <div class="rt-space-top2 rt-font-md-center">
                <div class="row md-d-block">
                  <div class="rt-font-center color-main07
                                        rt-md-col-12">
                    <a href="https://itunes.apple.com/ru/app/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D0%B4%D0%BE%D0%BC-%D1%80%D0%BE%D1%81%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D0%BE%D0%BC/id1205946608?mt=8"
                       target="_blank"
                       class="d-inline-block"><img src="/themes/rt_ru/images/store_apple.svg"
                                                   width="170px"
                                                   height="50px" /></a>
                    <p class="rt-font-label">Версия iOS 10.0</p>
                  </div>
                  <div class="rt-font-center color-main07
                                        rt-md-col-12 rt-md-space-vertical">
                    <a href="https://play.google.com/store/apps/details?id=ru.rt.smarthome"
                       target="_blank"
                       class="d-inline-block rt-space-left
                                            rt-md-space-horizontal"><img
                      src="/themes/rt_ru/images/store_google.svg"
                      width="170px"
                      height="50px" /></a>
                    <p class="rt-font-label">Версия Android 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rt-col-6 rt-space-top05 flex-end-bottom
                        flex-md-center rt-col-md-3 rt-md-space-top">
            <div class="rt-space-horizontal flex-md-center"
                 style="overflow: hidden;">
              <div class="phone">
                <div class="phone__container"></div>
                <img src="https://www.moscow.rt.ru/sites/default/files/img/mobile_application.jpg"
                     class="phone__image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Витрина -->
  <div class="rt-container"
       id="tariff">
    <div class="row rt-space-top25 rt-space-bottom">
      <div class="rt-col-12">
        <h3 class="rt-font-h3 rt-space-bottom2">Пакетные предложения</h3>
      </div>
    </div>
  </div>

  <div class="area">
    <div id="All"></div>
  </div>



  <!-- Покупка камер -->
  <div class="color-block--white">
    <div class="rt-container">
      <div class="row rt-space-vertical25">
        <div class="rt-col-12">
          <h3 class="rt-font-h3">Покупка видеокамеры</h3>
        </div>
      </div>
      <div class="row rt-space-vertical25">
        <div class="rt-col-6 rt-col-td-3 rt-col-md-3">
          <div class="wc-inline">
            <order-form
              scope="form-1"
              :offer-id="[{
                offerIds: [
                  382403088590,
                  370113313190,
                  373158964290
                ],
                regionIds: [
                  3245107,
                  2231584,
                  2451058
                ]
              },
              {
                offerIds: [
                  379103003390,
                  385514593990
                ],
                regionIds: [
                  3092903
                ]
              }]"
              :ga="{
                                                offerCategory: 'Умный дом',
                                                offerName: 'Видеонаблюдение в подарок на 24 месяца',
                                                positionCard: 1,
                                                price: 300
                                              }"
              class="">
              <rt-card-buy>

                <template slot="content">
                  <div class="row">
                    <div class="rt-col-4 rt-col-md-3 flex-column
                                          d-flex d-md-block">
                      <div class="rt-space-left
                                              rt-md-space-horizontal rt-md-space-top
                                              flex-fill d-flex">
                        <div class="rt-card-buy__image
                                                  flex-fill"
                             style="background-image:url(/sites/default/files/img/videocamera.png)"></div>
                      </div>
                    </div>
                    <div class="rt-col-8 rt-space-vertical
                                          rt-col-md-3 rt-md-space-top">
                      <div class="rt-space-right
                                              rt-md-space-horizontal">
                        <p class="rt-font-paragraph
                                                  rt-font-bold">Видеокамера
                          в
                          рассрочку и услуга «Видеонаблюдение»
                          в подарок на 24 месяца</p>
                        <p class="rt-space-top
                                                  color-main05">При
                          покупке камеры
                          до
                          31.12.2018
                        </p>
                        <div class="rt-space-top">
                          <div class="d-flex">
                            <div>
                              <svg width="56px"
                                   height="56px"
                                   viewBox="0
                                                              0 56 56"
                                   version="1.1"
                                   style="background-image:
                                                              linear-gradient(-218deg,
                                                              #00BFFE 0%, #4DECFF
                                                              100%); border-radius:
                                                              5;border-radius:
                                                              50;border-radius: 50%;"
                                   xmlns="http://www.w3.org/2000/svg">
                                <g id="1139"
                                   stroke="none"
                                   stroke-width="1"
                                   fill="none"
                                   fill-rule="evenodd">
                                  <g id="current-(2)"
                                     transform="translate(-952.000000,
                                                                      -1981.000000)">
                                    <g id="1400"
                                       transform="translate(-3.000000,
                                                                          0.000000)">
                                      <g id="rassro4ka"
                                         transform="translate(713.000000,
                                                                              1839.000000)">
                                        <g id="Group-13"
                                           transform="translate(242.000000,
                                                                                  142.000000)">
                                          <g id="Fill-170">
                                            <path d="M56,27.6113
                                                                                          C56,42.7993
                                                                                          43.4631273,55.1113
                                                                                          28,55.1113
                                                                                          C12.5358545,55.1113
                                                                                          0,42.7993
                                                                                          0,27.6113
                                                                                          C0,12.4233
                                                                                          12.5358545,0.1113
                                                                                          28,0.1113
                                                                                          C43.4631273,0.1113
                                                                                          56,12.4233
                                                                                          56,27.6113"
                                                  fill="#00C8F9"
                                                  fill-rule="evenodd"></path>
                                            <path d="M41.5679855,24.8671
                                                                                          C41.5679855,32.2621
                                                                                          35.4548218,38.1931
                                                                                          27.9996945,38.1931
                                                                                          C26.7992582,38.1931
                                                                                          25.6364945,38.0401
                                                                                          24.5297309,37.7531
                                                                                          C23.6337309,37.5211
                                                                                          22.7754036,37.2021
                                                                                          21.9639127,36.8051
                                                                                          C17.4890036,34.6171
                                                                                          14.4324218,30.0761
                                                                                          14.4324218,24.8671
                                                                                          C14.4324218,17.4721
                                                                                          20.47024,11.4681
                                                                                          27.9996945,11.4681
                                                                                          C35.5291491,11.4681
                                                                                          41.5679855,17.4721
                                                                                          41.5679855,24.8671"
                                                  id="Stroke-180"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linejoin="round"></path>
                                            <path d="M28,38.1928
                                                                                          C35.4928,38.1928
                                                                                          41.5682909,32.2268
                                                                                          41.5682909,24.8668
                                                                                          C41.5682909,17.5078
                                                                                          35.4928,11.5418
                                                                                          28,11.5418
                                                                                          C20.5072,11.5418
                                                                                          14.4317091,17.5078
                                                                                          14.4317091,24.8668
                                                                                          C14.4317091,29.5638
                                                                                          16.9058909,33.6928
                                                                                          20.6436364,36.0668"
                                                  id="Stroke-181"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linejoin="round"></path>
                                            <path d="M35.6039855,35.8495
                                                                                          L37.5415855,39.8035
                                                                                          C37.8399127,40.3155
                                                                                          37.9895855,40.9745
                                                                                          37.9152582,41.5605
                                                                                          C37.7655855,43.2445
                                                                                          36.1996218,44.5625
                                                                                          34.4860218,44.4155
                                                                                          L21.66304,44.4155
                                                                                          C20.9920582,44.4895
                                                                                          20.3954036,44.3425
                                                                                          19.7997673,43.9765
                                                                                          C18.3091491,43.0245
                                                                                          17.8611491,41.1945
                                                                                          18.7561309,39.7295
                                                                                          L20.6194036,36.0695"
                                                  id="Stroke-182"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linejoin="round"></path>
                                            <path d="M34.0384291,27.2099
                                                                                          C34.0384291,30.5049
                                                                                          31.3545018,33.1409
                                                                                          27.9995927,33.1409
                                                                                          C24.6446836,33.1409
                                                                                          21.9617745,30.5049
                                                                                          21.9617745,27.2099
                                                                                          C21.9617745,23.9159
                                                                                          24.6446836,21.2799
                                                                                          27.9995927,21.2799
                                                                                          C31.3545018,21.2799
                                                                                          34.0384291,23.9159
                                                                                          34.0384291,27.2099"
                                                  id="Stroke-183"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1"
                                                  stroke-linejoin="round"></path>
                                            <path d="M28.2236945,17.9115
                                                                                          C27.5527127,17.9115
                                                                                          27.0314036,17.3985
                                                                                          27.0314036,16.7405
                                                                                          C27.0314036,16.0805
                                                                                          27.5527127,15.5685
                                                                                          28.2236945,15.5685
                                                                                          C28.8946764,15.5685
                                                                                          29.4159855,16.0805
                                                                                          29.4159855,16.7405
                                                                                          C29.4159855,17.3255
                                                                                          28.8946764,17.9115
                                                                                          28.2236945,17.9115"
                                                  id="Fill-184"
                                                  fill="#FFFFFF"
                                                  fill-rule="evenodd"></path>
                                            <path d="M28,29.0405
                                                                                          C29.0293818,29.0405
                                                                                          29.8642909,28.2215
                                                                                          29.8642909,27.2095
                                                                                          C29.8642909,26.1995
                                                                                          29.0293818,25.3795
                                                                                          28,25.3795
                                                                                          C26.9706182,25.3795
                                                                                          26.1357091,26.1995
                                                                                          26.1357091,27.2095
                                                                                          C26.1357091,28.2215
                                                                                          26.9706182,29.0405
                                                                                          28,29.0405
                                                                                          Z"
                                                  id="Stroke-185"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1"
                                                  stroke-linejoin="round"></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left05">
                              <p>Видеокамера</p>
                              <p class="color-main05">Камера
                                внутреннего
                                видеонаблюдения</p>
                            </div>
                          </div>
                          <div class="d-flex rt-space-top">
                            <div>
                              <svg width="55px"
                                   height="56px"
                                   viewBox="0
                                                              0 55 56"
                                   version="1.1"
                                   style="background-image:
                                                              linear-gradient(-218deg,
                                                              #00BFFE 0%, #4DECFF
                                                              100%); border-radius:
                                                              5;border-radius:
                                                              50;border-radius: 50%;"
                                   xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                  <linearGradient x1="87.1217447%"
                                                  y1="0%"
                                                  x2="7.61205979%"
                                                  y2="100%"
                                                  id="linearGradient-1">
                                    <stop stop-color="#00BFFE"
                                          offset="0%"></stop>
                                    <stop stop-color="#4DECFF"
                                          offset="100%"></stop>
                                  </linearGradient>
                                </defs>
                                <g id="1139"
                                   stroke="none"
                                   stroke-width="1"
                                   fill="none"
                                   fill-rule="evenodd">
                                  <g id="current-(2)"
                                     transform="translate(-953.000000,
                                                                      -2064.000000)">
                                    <g id="1400"
                                       transform="translate(-3.000000,
                                                                          0.000000)">
                                      <g id="rassro4ka"
                                         transform="translate(713.000000,
                                                                              1839.000000)">
                                        <g id="Group-14"
                                           transform="translate(243.000000,
                                                                                  224.000000)">
                                          <g id="Clip-301"
                                             transform="translate(0.000000,
                                                                                      1.000000)">
                                            <path d="M0,27.644
                                                                                          C0,42.832
                                                                                          12.313,55.143
                                                                                          27.5,55.143
                                                                                          C42.688,55.143
                                                                                          55,42.832
                                                                                          55,27.644
                                                                                          C55,12.456
                                                                                          42.688,0.143
                                                                                          27.5,0.143
                                                                                          C12.313,0.143
                                                                                          0,12.456
                                                                                          0,27.644"
                                                  fill="url(#linearGradient-1)"
                                                  fill-rule="evenodd"></path>
                                            <path d="M17.1025,36.4804
                                                                                          L15.7765,36.4804
                                                                                          C13.1945,36.4804
                                                                                          11.1005,34.1074
                                                                                          11.1005,31.2464
                                                                                          C11.0305,28.9434
                                                                                          12.4965,26.7794
                                                                                          14.7295,26.0824
                                                                                          C14.6605,25.5924
                                                                                          14.6605,25.1044
                                                                                          14.6605,24.6164
                                                                                          C14.6605,19.5214
                                                                                          18.3585,15.4034
                                                                                          22.8945,15.4034
                                                                                          C26.5935,15.4034
                                                                                          29.7345,18.1264
                                                                                          30.7115,21.9634
                                                                                          C31.6185,21.1264
                                                                                          32.8055,20.7084
                                                                                          33.9915,20.7084
                                                                                          C36.7135,20.7084
                                                                                          38.9465,23.0104
                                                                                          39.2255,25.9424
                                                                                          C41.8085,25.9424
                                                                                          43.9015,28.3144
                                                                                          43.9015,31.1754
                                                                                          C43.9015,34.0374
                                                                                          41.8085,36.4104
                                                                                          39.2255,36.4104
                                                                                          L37.6205,36.4104"
                                                  id="Stroke-314"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                            <path d="M22.9648,36.4101
                                                                                          L31.6188,36.4101"
                                                  id="Stroke-316"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                            <path d="M27.292,35.7822
                                                                                          L27.292,24.7562"
                                                  id="Stroke-318"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                            <polyline id="Stroke-320"
                                                      stroke="#FFFFFF"
                                                      stroke-width="1.5"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      points="22.9648
                                                                                          29.082
                                                                                          27.2918
                                                                                          24.756
                                                                                          31.6188
                                                                                          29.082"></polyline>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left05">
                              <p>Облачное хранение</p>
                              <p class="color-main05">Услуга
                                «Видеонаблюдение»
                                включает 7 дней хранения
                                видеозаписей в облаке</p>
                            </div>
                          </div>
                        </div>
                        <p class="rt-space-top color-main07">Увеличить
                          срок хранения видеозаписей вы можете
                          в личном кабинете</p>
                      </div>
                    </div>
                  </div>
                </template>

                <template slot="form">
                  <form data-vv-scope="form-1">
                    <div class="rt-col-12">
                      <div class="rt-space-horizontal">
                        <p class="rt-font-paragraph
                                                  rt-font-bold">Заявка
                          на
                          подключение</p>
                        <div class="rt-space-top">
                          <full-name></full-name>
                        </div>

                        <div class="row">
                          <div class="rt-col-6 rt-col-md-3
                                                      rt-col-td-6">
                            <div class="rt-space-top">
                              <street></street>
                            </div>
                          </div>
                          <div class="rt-col-3 rt-col-md-3
                                                      rt-col-td-3">
                            <div class="rt-space-top">
                              <house></house>
                            </div>
                          </div>
                          <div class="rt-col-3 rt-col-md-3
                                                      rt-col-td-3">
                            <div class="rt-space-top">
                              <apartment></apartment>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="rt-col-6 rt-col-md-3
                                                      rt-col-td-6">
                            <div class="rt-space-top">
                              <client-phone></client-phone>
                            </div>
                          </div>
                          <div class="rt-col-6 rt-col-md-3
                                                      rt-col-td-3">
                            <div class="rt-space-top">
                              <email></email>
                            </div>
                          </div>

                        </div>
                        <div class="rt-space-top">
                          <agree></agree>
                        </div>
                      </div>
                    </div>
                  </form>
                </template>

                <template slot="card-footer">
                  <div class="d-flex d-space-between rt-space-top05
                                      rt-space-bottom">
                    <div class="flex-end-bottom">Рассрочка</div>
                    <div class="d-flex">
                      <rt-price :value="300"></rt-price>
                    </div>
                  </div>
                </template>

                <template slot="button">Подключить</template>
              </rt-card-buy>
            </order-form>
          </div>
        </div>

        <div class="rt-col-6 rt-col-td-3 rt-col-md-3">
          <div class="wc-inline">
            <order-form
              scope="form-2"
              :offer-id="[{
                offerIds: [
                  382403088590,
                  370113313190,
                  373158964290
                ],
                regionIds: [
                  3245107,
                  2231584,
                  2451058
                ]
              },
              {
                offerIds: [
                  379103003390,
                  385514593990
                ],
                regionIds: [
                  3092903
                ]
              }]"
              :ga="{
                                                offerCategory: 'Умный дом',
                                                offerName: 'Видеонаблюдение в подарок на 12 месяцев',
                                                positionCard: 2,
                                                price: 4990
                                              }"
              class="">
              <rt-card-buy>

                <template slot="content">
                  <div class="row">
                    <div class="rt-col-4 rt-col-md-3 flex-column
                                    d-flex d-md-block">
                      <div class="rt-space-left
                                        rt-md-space-horizontal rt-md-space-top
                                        flex-fill d-flex">
                        <div class="rt-card-buy__image
                                            flex-fill"
                             style="background-image:url(/sites/default/files/img/videocamera.png)"></div>
                      </div>
                    </div>
                    <div class="rt-col-8 rt-space-vertical
                                    rt-col-md-3 rt-md-space-top">
                      <div class="rt-space-right
                                        rt-md-space-horizontal">
                        <p class="rt-font-paragraph
                                            rt-font-bold">Видеокамера
                          и
                          услуга
                          «Видеонаблюдение» в подарок на 12
                          месяцев </p>
                        <p class="rt-space-top
                                            color-main05">Два года сервиса
                          в
                          подарок</p>
                        <div class="rt-space-top">
                          <div class="d-flex">
                            <div>
                              <svg width="56px"
                                   height="56px"
                                   viewBox="0
                                                        0 56 56"
                                   version="1.1"
                                   xmlns="http://www.w3.org/2000/svg">
                                <g id="1139"
                                   stroke="none"
                                   stroke-width="1"
                                   fill="none"
                                   fill-rule="evenodd">
                                  <g id="current-(2)"
                                     transform="translate(-952.000000,
                                                                -1981.000000)">
                                    <g id="1400"
                                       transform="translate(-3.000000,
                                                                    0.000000)">
                                      <g id="rassro4ka"
                                         transform="translate(713.000000,
                                                                        1839.000000)">
                                        <g id="Group-13"
                                           transform="translate(242.000000,
                                                                            142.000000)">
                                          <g id="Fill-170">
                                            <path d="M56,27.6113
                                                                                    C56,42.7993
                                                                                    43.4631273,55.1113
                                                                                    28,55.1113
                                                                                    C12.5358545,55.1113
                                                                                    0,42.7993
                                                                                    0,27.6113
                                                                                    C0,12.4233
                                                                                    12.5358545,0.1113
                                                                                    28,0.1113
                                                                                    C43.4631273,0.1113
                                                                                    56,12.4233
                                                                                    56,27.6113"
                                                  fill="#00C8F9"
                                                  fill-rule="evenodd"></path>
                                            <path d="M41.5679855,24.8671
                                                                                    C41.5679855,32.2621
                                                                                    35.4548218,38.1931
                                                                                    27.9996945,38.1931
                                                                                    C26.7992582,38.1931
                                                                                    25.6364945,38.0401
                                                                                    24.5297309,37.7531
                                                                                    C23.6337309,37.5211
                                                                                    22.7754036,37.2021
                                                                                    21.9639127,36.8051
                                                                                    C17.4890036,34.6171
                                                                                    14.4324218,30.0761
                                                                                    14.4324218,24.8671
                                                                                    C14.4324218,17.4721
                                                                                    20.47024,11.4681
                                                                                    27.9996945,11.4681
                                                                                    C35.5291491,11.4681
                                                                                    41.5679855,17.4721
                                                                                    41.5679855,24.8671"
                                                  id="Stroke-180"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linejoin="round"></path>
                                            <path d="M28,38.1928
                                                                                    C35.4928,38.1928
                                                                                    41.5682909,32.2268
                                                                                    41.5682909,24.8668
                                                                                    C41.5682909,17.5078
                                                                                    35.4928,11.5418
                                                                                    28,11.5418
                                                                                    C20.5072,11.5418
                                                                                    14.4317091,17.5078
                                                                                    14.4317091,24.8668
                                                                                    C14.4317091,29.5638
                                                                                    16.9058909,33.6928
                                                                                    20.6436364,36.0668"
                                                  id="Stroke-181"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linejoin="round"></path>
                                            <path d="M35.6039855,35.8495
                                                                                    L37.5415855,39.8035
                                                                                    C37.8399127,40.3155
                                                                                    37.9895855,40.9745
                                                                                    37.9152582,41.5605
                                                                                    C37.7655855,43.2445
                                                                                    36.1996218,44.5625
                                                                                    34.4860218,44.4155
                                                                                    L21.66304,44.4155
                                                                                    C20.9920582,44.4895
                                                                                    20.3954036,44.3425
                                                                                    19.7997673,43.9765
                                                                                    C18.3091491,43.0245
                                                                                    17.8611491,41.1945
                                                                                    18.7561309,39.7295
                                                                                    L20.6194036,36.0695"
                                                  id="Stroke-182"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linejoin="round"></path>
                                            <path d="M34.0384291,27.2099
                                                                                    C34.0384291,30.5049
                                                                                    31.3545018,33.1409
                                                                                    27.9995927,33.1409
                                                                                    C24.6446836,33.1409
                                                                                    21.9617745,30.5049
                                                                                    21.9617745,27.2099
                                                                                    C21.9617745,23.9159
                                                                                    24.6446836,21.2799
                                                                                    27.9995927,21.2799
                                                                                    C31.3545018,21.2799
                                                                                    34.0384291,23.9159
                                                                                    34.0384291,27.2099"
                                                  id="Stroke-183"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1"
                                                  stroke-linejoin="round"></path>
                                            <path d="M28.2236945,17.9115
                                                                                    C27.5527127,17.9115
                                                                                    27.0314036,17.3985
                                                                                    27.0314036,16.7405
                                                                                    C27.0314036,16.0805
                                                                                    27.5527127,15.5685
                                                                                    28.2236945,15.5685
                                                                                    C28.8946764,15.5685
                                                                                    29.4159855,16.0805
                                                                                    29.4159855,16.7405
                                                                                    C29.4159855,17.3255
                                                                                    28.8946764,17.9115
                                                                                    28.2236945,17.9115"
                                                  id="Fill-184"
                                                  fill="#FFFFFF"
                                                  fill-rule="evenodd"></path>
                                            <path d="M28,29.0405
                                                                                    C29.0293818,29.0405
                                                                                    29.8642909,28.2215
                                                                                    29.8642909,27.2095
                                                                                    C29.8642909,26.1995
                                                                                    29.0293818,25.3795
                                                                                    28,25.3795
                                                                                    C26.9706182,25.3795
                                                                                    26.1357091,26.1995
                                                                                    26.1357091,27.2095
                                                                                    C26.1357091,28.2215
                                                                                    26.9706182,29.0405
                                                                                    28,29.0405
                                                                                    Z"
                                                  id="Stroke-185"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1"
                                                  stroke-linejoin="round"></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left05">
                              <p>Видеокамера</p>
                              <p class="color-main05">Камера
                                внутреннего
                                видеонаблюдения</p>
                            </div>
                          </div>
                          <div class="d-flex rt-space-top">
                            <div>
                              <svg width="55px"
                                   height="56px"
                                   viewBox="0
                                                        0 55 56"
                                   version="1.1"
                                   xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                  <linearGradient x1="87.1217447%"
                                                  y1="0%"
                                                  x2="7.61205979%"
                                                  y2="100%"
                                                  id="linearGradient-1">
                                    <stop stop-color="#00BFFE"
                                          offset="0%"></stop>
                                    <stop stop-color="#4DECFF"
                                          offset="100%"></stop>
                                  </linearGradient>
                                </defs>
                                <g id="1139"
                                   stroke="none"
                                   stroke-width="1"
                                   fill="none"
                                   fill-rule="evenodd">
                                  <g id="current-(2)"
                                     transform="translate(-953.000000,
                                                                -2064.000000)">
                                    <g id="1400"
                                       transform="translate(-3.000000,
                                                                    0.000000)">
                                      <g id="rassro4ka"
                                         transform="translate(713.000000,
                                                                        1839.000000)">
                                        <g id="Group-14"
                                           transform="translate(243.000000,
                                                                            224.000000)">
                                          <g id="Clip-301"
                                             transform="translate(0.000000,
                                                                                1.000000)">
                                            <path d="M0,27.644
                                                                                    C0,42.832
                                                                                    12.313,55.143
                                                                                    27.5,55.143
                                                                                    C42.688,55.143
                                                                                    55,42.832
                                                                                    55,27.644
                                                                                    C55,12.456
                                                                                    42.688,0.143
                                                                                    27.5,0.143
                                                                                    C12.313,0.143
                                                                                    0,12.456
                                                                                    0,27.644"
                                                  fill="url(#linearGradient-1)"
                                                  fill-rule="evenodd"></path>
                                            <path d="M17.1025,36.4804
                                                                                    L15.7765,36.4804
                                                                                    C13.1945,36.4804
                                                                                    11.1005,34.1074
                                                                                    11.1005,31.2464
                                                                                    C11.0305,28.9434
                                                                                    12.4965,26.7794
                                                                                    14.7295,26.0824
                                                                                    C14.6605,25.5924
                                                                                    14.6605,25.1044
                                                                                    14.6605,24.6164
                                                                                    C14.6605,19.5214
                                                                                    18.3585,15.4034
                                                                                    22.8945,15.4034
                                                                                    C26.5935,15.4034
                                                                                    29.7345,18.1264
                                                                                    30.7115,21.9634
                                                                                    C31.6185,21.1264
                                                                                    32.8055,20.7084
                                                                                    33.9915,20.7084
                                                                                    C36.7135,20.7084
                                                                                    38.9465,23.0104
                                                                                    39.2255,25.9424
                                                                                    C41.8085,25.9424
                                                                                    43.9015,28.3144
                                                                                    43.9015,31.1754
                                                                                    C43.9015,34.0374
                                                                                    41.8085,36.4104
                                                                                    39.2255,36.4104
                                                                                    L37.6205,36.4104"
                                                  id="Stroke-314"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                            <path d="M22.9648,36.4101
                                                                                    L31.6188,36.4101"
                                                  id="Stroke-316"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                            <path d="M27.292,35.7822
                                                                                    L27.292,24.7562"
                                                  id="Stroke-318"
                                                  stroke="#FFFFFF"
                                                  stroke-width="1.5"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                            <polyline id="Stroke-320"
                                                      stroke="#FFFFFF"
                                                      stroke-width="1.5"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      points="22.9648
                                                                                    29.082
                                                                                    27.2918
                                                                                    24.756
                                                                                    31.6188
                                                                                    29.082"></polyline>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="rt-space-left05">
                              <p>Облачное хранение</p>
                              <p class="color-main05">Услуга
                                «Видеонаблюдение»
                                включает 7 дней хранения
                                видеозаписей в облаке</p>
                            </div>
                          </div>
                        </div>
                        <p class="rt-space-top color-main07">Увеличить
                          срок хранения видеозаписей вы можете
                          в личном кабинете</p>
                      </div>
                    </div>
                  </div>
                </template>

                <template slot="form">
                  <form data-vv-scope="form-2">
                    <div class="rt-col-12">
                      <div class="rt-space-horizontal">
                        <p class="rt-font-paragraph
                                            rt-font-bold">Заявка на
                          подключение</p>
                        <div class="rt-space-top">
                          <full-name></full-name>
                        </div>

                        <div class="row">
                          <div class="rt-col-6 rt-col-md-3
                                                rt-col-td-6">
                            <div class="rt-space-top">
                              <street></street>
                            </div>
                          </div>
                          <div class="rt-col-3 rt-col-md-3
                                                rt-col-td-3">
                            <div class="rt-space-top">
                              <house></house>
                            </div>
                          </div>
                          <div class="rt-col-3 rt-col-md-3
                                                rt-col-td-3">
                            <div class="rt-space-top">
                              <apartment></apartment>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="rt-col-6 rt-col-md-3
                                                rt-col-td-6">
                            <div class="rt-space-top">
                              <client-phone></client-phone>
                            </div>
                          </div>
                          <div class="rt-col-6 rt-col-md-3
                                                rt-col-td-3">
                            <div class="rt-space-top">
                              <email></email>
                            </div>
                          </div>

                        </div>
                        <div class="rt-space-top">
                          <agree></agree>
                        </div>
                      </div>
                    </div>
                  </form>
                </template>

                <template slot="card-footer">
                  <div class="d-flex d-space-between rt-space-top05
                                rt-space-bottom">
                    <div class="flex-end-bottom">Покупка</div>
                    <div class="d-flex rt-font-light">
                      <rt-price :only-price="true"
                                :value="4990"></rt-price>
                    </div>
                  </div>
                </template>

                <template slot="button">Подключить</template>
              </rt-card-buy>
            </order-form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Примечания -->
  <div class="wc-inline">
    <div class="rt-container rt-space-top2 rt-space-bottom color-main07">
      <rt-annotation label="Примечания">
        <template slot="content">
          <p class="rt-annotation-item color-main05">Условия оплаты и подключения могут разниться в зависимости от
            региона
            РФ.</p>
          <p class="rt-annotation-item color-main05"> Видео за 300 рублей (Акция) — возможность для физ. лиц подключить
            при
            тех. возможности до 31.12.2018 г. Видеонаблюдение (Услуга 1) либо Пакет (Услуга 1 + видеокамера в рассрочку
            для
            абонентов Домашнего Интернета (Услуга 2), Домашнего Телефона и Телевидения (Услуга 3)) по цене от 300
            руб./мес. с
            НДС. </p>
        </template>
      </rt-annotation>
    </div>
  </div>
</div>
</template>

<script>
const componentsList = {};

export default {
  name: "AppRadioButton",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
