<script type="text/jsx">
  import componentsList from "../../componentsList";

  export default {
    name: "AppCardWithForm",
    components: componentsList,
    mounted() {
    },
    created() {
    },
    methods: {},
    render(h) {
      return <div class="rt-container">
        <div class="app-content rt-col-12 rt-col-md-3">
          <div class="app-title">
            <div class="row">
              <h1 class="rt-font-hero rt-col">Cards with form</h1>
            </div>
          </div>
          <div class="app-body">
            <div class="row">
              <div class="rt-col-12">
                <rt-card-buy static-body-height={true}
                             has-custom-button={true}
                             is-horizontal-card={true}
                             custom-button-class="rt-button-submit"
                             v-rt-slide-content-vertical={{
                               "scrollWhenActive": true,
                               "triggerClassName": "rt-link",
                               "containerClassName": "rt-slide-content-vertical-content",
                               "activeContainerClassName": "rt-slide-content-vertical-content--is-active"
                             }}>
                  <template slot="content">
                    <div class="rt-space-top">
                      <div class="row rt-space-bottom05">
                        <div class="rt-col-3 d-flex flex-column rt-col-md-3">
                          <div class="rt-font-center rt-space-horizontal">
                            <img src="/static/images/smartHouse/smartHouse-contr10.png" class="card-long__image"
                                 alt=""/>
                          </div>
                          <div class="flex-center-bottom flex-fill md-d-block rt-font-center">
                            <p class="rt-font-center color-main03 rt-font-label">Необходим контроллер</p>
                          </div>
                        </div>
                        <div class="rt-col-6 rt-col-md-3 rt-md-space-top rt-md-space-left15">
                          <p class="rt-font-paragraph rt-font-bold">Wi-Fi HD-видеокамера DS-2CD-VC1 </p>
                          <p class="rt-font-paragraph rt-space-top">Датчик открытия 3 в 1 PST02-5C детектирует открытие
                            двери/окна, фиксирует температуру и освещенность. Идеален для управления световыми и
                            охранными
                            сценариями</p>
                          <div class="d-flex rt-space-top d-td-block">
                            <div class="d-flex">
                              <div class="rt-card-list__icon"><img src="/static/images/medium-icon.svg"/></div>
                              <div class="rt-space-left05">
                                <p>Видеокамера</p>
                                <p class="rt-font-small-paragraph color-main05">Камера внутреннего <br/> видеонаблюдения
                                </p>
                              </div>
                            </div>
                            <div class="d-flex rt-space-left rt-td-space-left-none rt-td-space-top">
                              <div class="rt-card-list__icon"><img src="/static/images/medium-icon.svg"/></div>
                              <div class="rt-space-left05">
                                <p>Видеокамера</p>
                                <p class="rt-font-small-paragraph color-main05">Облачное хранение <br/> видеозаписей в
                                  подарок
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div
                          class="rt-col-3 rt-col-md-3 rt-md-space-top rt-md-space-left15 flex-end-bottom flex-md-start">
                          <div class="rt-space-right">
                            <rt-price value={"750.231"} only-price={true}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template slot="content-without-wrapper">
                    <div class="rt-space-top05 rt-space-bottom">
                      <div class="rt-card__border-content">
                        <div class="row rt-space-top05 flex-row-reverse">


                          <div class="rt-col-3 rt-col-md-3">
                              <rt-button class="rt-button-orange rt-button--is-block rt-button-submit">Подключить
                              </rt-button>
                          </div>
                          <div class="rt-col-6 md-d-none"></div>
                          <div class="rt-col-3 flex-center-center rt-col-md-3 rt-md-space-top">
                            <div class="rt-space-right15 rt-md-space-right-none">
                              <p class="rt-link">Характеристики</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="rt-slide-content-vertical-content">
                      <div class="rt-space-top2">
                        <div class="rt-card-image-list rt-card-image-list--without-top-border">
                          <div class="rt-card-image-list__content d-flex">
                            <p class="color-main07 flex-fill">Назначение</p>
                            <p>помещение</p>
                          </div>
                        </div>
                        <div class="rt-card-image-list">
                          <div class="rt-card-image-list__content d-flex">
                            <p class="color-main07 flex-fill">Назначение</p>
                            <p>помещение</p>
                          </div>
                        </div>
                        <div class="rt-card-image-list">
                          <div class="rt-card-image-list__content d-flex">
                            <p class="color-main07 flex-fill">Назначение</p>
                            <p>92<span class="rt-font-sup rt-font-label">o</span></p>
                          </div>
                        </div>
                        <div class="rt-card-image-list">
                          <div class="rt-card-image-list__content d-flex">
                            <p class="color-main07 flex-fill">Назначение</p>
                            <p>помещение</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template slot="form">
                    <div class="rt-space-horizontal">
                      <form class="rt-col-12">
                        <div class="row">
                          <div class="rt-col-9">
                            <p class="rt-font-paragraph rt-font-bold">Заявка
                              на
                              подключение</p>
                            <div
                              class="rt-space-top">
                              <rt-input
                                value=""
                                placeholder="Как вас зовут?"
                              />
                            </div>
                            <div
                              class="rt-space-top">
                              <rt-input
                                value=""
                                placeholder="Как вас зовут?"
                              />
                            </div>
                            <div
                              class="rt-space-top">
                              <rt-input
                                value=""
                                placeholder="Как вас зовут?"
                              />
                            </div>
                            <div
                              class="rt-space-top">
                              <rt-input
                                value=""
                                placeholder="Как вас зовут?"
                              />
                            </div>
                            <div
                              class="rt-space-top">
                              <rt-input
                                value=""
                                placeholder="Как вас зовут?"
                              />
                            </div>
                            <div
                              class="rt-space-top">
                              <rt-input
                                value=""
                                placeholder="Как вас зовут?"
                              />
                            </div>
                          </div>

                          <div class="rt-col-3 flex-end-bottom rt-col-md-3 rt-space-top2 flex-md-start">
                            <div class="rt-space-right">
                              <rt-price value={"750.231"} only-price={true}/>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </template>
                </rt-card-buy>
              </div>
            </div>
            <div class="rt-space-top">

                <pre-code
                  text='<rt-card-buy>
            <template slot="content">
              <div class="row">
              <div class="rt-col-4 rt-col-md-3 flex-column d-flex d-md-block">
                <div class="rt-space-left rt-md-space-horizontal rt-md-space-top flex-fill d-flex">
                  <div class="rt-card-buy__image flex-fill"
                       style="background-image: url(/static/example-images/camera.png)"></div>
                </div>
              </div>
              <div class="rt-col-8 rt-space-vertical rt-col-md-3 rt-md-space-top">
                <div class="rt-space-right rt-md-space-horizontal">
                  <p class="rt-font-paragraph rt-font-bold"> Видеокамера и услуга «Видеонаблюдение» в рассрочку на 24
                    месяца</p>
                  <p class="rt-space-top color-main05">Два года сервиса в подарок</p>
                  <ul class="rt-space-top">
                    <li class="d-flex">
                      <div>
                        <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                          <g id="1139" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="current-(2)" transform="translate(-952.000000, -1981.000000)">
                              <g id="1400" transform="translate(-3.000000, 0.000000)">
                                <g id="rassro4ka" transform="translate(713.000000, 1839.000000)">
                                  <g id="Group-13" transform="translate(242.000000, 142.000000)">
                                    <g id="Fill-170">
                                      <path
                                        d="M56,27.6113 C56,42.7993 43.4631273,55.1113 28,55.1113 C12.5358545,55.1113 0,42.7993 0,27.6113 C0,12.4233 12.5358545,0.1113 28,0.1113 C43.4631273,0.1113 56,12.4233 56,27.6113"
                                        fill="#00C8F9" fill-rule="evenodd"></path>
                                      <path
                                        d="M41.5679855,24.8671 C41.5679855,32.2621 35.4548218,38.1931 27.9996945,38.1931 C26.7992582,38.1931 25.6364945,38.0401 24.5297309,37.7531 C23.6337309,37.5211 22.7754036,37.2021 21.9639127,36.8051 C17.4890036,34.6171 14.4324218,30.0761 14.4324218,24.8671 C14.4324218,17.4721 20.47024,11.4681 27.9996945,11.4681 C35.5291491,11.4681 41.5679855,17.4721 41.5679855,24.8671"
                                        id="Stroke-180" stroke="#FFFFFF" stroke-width="1.5"
                                        stroke-linejoin="round"></path>
                                      <path
                                        d="M28,38.1928 C35.4928,38.1928 41.5682909,32.2268 41.5682909,24.8668 C41.5682909,17.5078 35.4928,11.5418 28,11.5418 C20.5072,11.5418 14.4317091,17.5078 14.4317091,24.8668 C14.4317091,29.5638 16.9058909,33.6928 20.6436364,36.0668"
                                        id="Stroke-181" stroke="#FFFFFF" stroke-width="1.5"
                                        stroke-linejoin="round"></path>
                                      <path
                                        d="M35.6039855,35.8495 L37.5415855,39.8035 C37.8399127,40.3155 37.9895855,40.9745 37.9152582,41.5605 C37.7655855,43.2445 36.1996218,44.5625 34.4860218,44.4155 L21.66304,44.4155 C20.9920582,44.4895 20.3954036,44.3425 19.7997673,43.9765 C18.3091491,43.0245 17.8611491,41.1945 18.7561309,39.7295 L20.6194036,36.0695"
                                        id="Stroke-182" stroke="#FFFFFF" stroke-width="1.5"
                                        stroke-linejoin="round"></path>
                                      <path
                                        d="M34.0384291,27.2099 C34.0384291,30.5049 31.3545018,33.1409 27.9995927,33.1409 C24.6446836,33.1409 21.9617745,30.5049 21.9617745,27.2099 C21.9617745,23.9159 24.6446836,21.2799 27.9995927,21.2799 C31.3545018,21.2799 34.0384291,23.9159 34.0384291,27.2099"
                                        id="Stroke-183" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round"></path>
                                      <path
                                        d="M28.2236945,17.9115 C27.5527127,17.9115 27.0314036,17.3985 27.0314036,16.7405 C27.0314036,16.0805 27.5527127,15.5685 28.2236945,15.5685 C28.8946764,15.5685 29.4159855,16.0805 29.4159855,16.7405 C29.4159855,17.3255 28.8946764,17.9115 28.2236945,17.9115"
                                        id="Fill-184" fill="#FFFFFF" fill-rule="evenodd"></path>
                                      <path
                                        d="M28,29.0405 C29.0293818,29.0405 29.8642909,28.2215 29.8642909,27.2095 C29.8642909,26.1995 29.0293818,25.3795 28,25.3795 C26.9706182,25.3795 26.1357091,26.1995 26.1357091,27.2095 C26.1357091,28.2215 26.9706182,29.0405 28,29.0405 Z"
                                        id="Stroke-185" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round"></path>
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
                        <p class="color-main05">Камера внутреннего видеонаблюдения</p>
                      </div>
                    </li>
                    <li class="d-flex rt-space-top">
                      <div>
                        <svg width="55px" height="56px" viewBox="0 0 55 56" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient x1="87.1217447%" y1="0%" x2="7.61205979%" y2="100%" id="linearGradient-1">
                              <stop stop-color="#00BFFE" offset="0%"></stop>
                              <stop stop-color="#4DECFF" offset="100%"></stop>
                            </linearGradient>
                          </defs>
                          <g id="1139" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="current-(2)" transform="translate(-953.000000, -2064.000000)">
                              <g id="1400" transform="translate(-3.000000, 0.000000)">
                                <g id="rassro4ka" transform="translate(713.000000, 1839.000000)">
                                  <g id="Group-14" transform="translate(243.000000, 224.000000)">
                                    <g id="Clip-301" transform="translate(0.000000, 1.000000)">
                                      <path
                                        d="M0,27.644 C0,42.832 12.313,55.143 27.5,55.143 C42.688,55.143 55,42.832 55,27.644 C55,12.456 42.688,0.143 27.5,0.143 C12.313,0.143 0,12.456 0,27.644"
                                        fill="url(#linearGradient-1)" fill-rule="evenodd"></path>
                                      <path
                                        d="M17.1025,36.4804 L15.7765,36.4804 C13.1945,36.4804 11.1005,34.1074 11.1005,31.2464 C11.0305,28.9434 12.4965,26.7794 14.7295,26.0824 C14.6605,25.5924 14.6605,25.1044 14.6605,24.6164 C14.6605,19.5214 18.3585,15.4034 22.8945,15.4034 C26.5935,15.4034 29.7345,18.1264 30.7115,21.9634 C31.6185,21.1264 32.8055,20.7084 33.9915,20.7084 C36.7135,20.7084 38.9465,23.0104 39.2255,25.9424 C41.8085,25.9424 43.9015,28.3144 43.9015,31.1754 C43.9015,34.0374 41.8085,36.4104 39.2255,36.4104 L37.6205,36.4104"
                                        id="Stroke-314" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                      <path d="M22.9648,36.4101 L31.6188,36.4101" id="Stroke-316" stroke="#FFFFFF"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path d="M27.292,35.7822 L27.292,24.7562" id="Stroke-318" stroke="#FFFFFF"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <polyline id="Stroke-320" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"
                                                points="22.9648 29.082 27.2918 24.756 31.6188 29.082"></polyline>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="rt-space-left05">
                        <p>Облако</p>
                        <p class="color-main05">Услуга «Видеонаблюдение» включает 7 дней хранения видеозаписей в
                          облаке.</p>
                      </div>
                    </li>
                  </ul>
                  <p class="rt-space-top color-main07">В Личном кабинете можно продлить срок хранения до 14 дней за 90
                    руб./мес., до 30 дней—за 190 руб./мес.</p>
                </div>
              </div>
              </div>
            </template>
            <template slot="form">
              <form class="rt-col-12">
                <div class="rt-space-horizontal">
                  <p class="rt-font-paragraph rt-font-bold">Заявка на подключение</p>

                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Как вас зовут?"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Контактный телефон"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Электронная почта"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Электронная почта"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Электронная почта"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Электронная почта"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Электронная почта"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Электронная почта"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Электронная почта"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-input value="" placeholder="Электронная почта"/>
                  </div>
                  <div class="rt-space-top">
                    <rt-checkbox name="sms">Согласие на обработку персональных данных</rt-checkbox>
                  </div>
                </div>
              </form>
            </template>
            <template slot="footer">
              <div class="d-flex d-space-between rt-space-top05 rt-space-bottom">
                <div class="flex-end-bottom">Рассрочка</div>
                <div class="d-flex">
                  <rt-price value={480}></rt-price>
                </div>
              </div>
            </template>
            <template slot="button">Подключить</template>
          </rt-card-buy>
            '/>
            </div>
          </div>
        </div>
      </div>;
    }
  };
</script>

