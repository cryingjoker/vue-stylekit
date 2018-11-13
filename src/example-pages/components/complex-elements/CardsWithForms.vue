<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">Cards with form</h1>
        </div>
      </div>
      <div class="app-body">
        <div class="row">
          <pre-code
            text="<div><rt-card-buy>
            <template slot=&quot;content&quot;>
              <div class=&quot;row&quot;>
              <div class=&quot;rt-col-4 rt-col-md-3 flex-column d-flex d-md-block&quot;>
                <div class=&quot;rt-space-left rt-md-space-horizontal rt-md-space-top flex-fill d-flex&quot;>
                  <div class=&quot;rt-card-buy__image flex-fill&quot;
                       style=&quot;background-image: url(/static/example-images/camera.png)&quot;></div>
                </div>
              </div>
              <div class=&quot;rt-col-8 rt-space-vertical rt-col-md-3 rt-md-space-top&quot;>
                <div class=&quot;rt-space-right rt-md-space-horizontal&quot;>
                  <p class=&quot;rt-font-paragraph rt-font-bold&quot;> Видеокамера и услуга «Видеонаблюдение» в рассрочку на 24
                    месяца</p>
                  <p class=&quot;rt-space-top color-main05&quot;>Два года сервиса в подарок</p>
                  <ul class=&quot;rt-space-top&quot;>
                    <li class=&quot;d-flex&quot;>
                      <div>
                        <svg width=&quot;56px&quot; height=&quot;56px&quot; viewBox=&quot;0 0 56 56&quot; version=&quot;1.1&quot;
                             xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                          <g id=&quot;1139&quot; stroke=&quot;none&quot; stroke-width=&quot;1&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;>
                            <g id=&quot;current-(2)&quot; transform=&quot;translate(-952.000000, -1981.000000)&quot;>
                              <g id=&quot;1400&quot; transform=&quot;translate(-3.000000, 0.000000)&quot;>
                                <g id=&quot;rassro4ka&quot; transform=&quot;translate(713.000000, 1839.000000)&quot;>
                                  <g id=&quot;Group-13&quot; transform=&quot;translate(242.000000, 142.000000)&quot;>
                                    <g id=&quot;Fill-170&quot;>
                                      <path
                                        d=&quot;M56,27.6113 C56,42.7993 43.4631273,55.1113 28,55.1113 C12.5358545,55.1113 0,42.7993 0,27.6113 C0,12.4233 12.5358545,0.1113 28,0.1113 C43.4631273,0.1113 56,12.4233 56,27.6113&quot;
                                        fill=&quot;#00C8F9&quot; fill-rule=&quot;evenodd&quot;></path>
                                      <path
                                        d=&quot;M41.5679855,24.8671 C41.5679855,32.2621 35.4548218,38.1931 27.9996945,38.1931 C26.7992582,38.1931 25.6364945,38.0401 24.5297309,37.7531 C23.6337309,37.5211 22.7754036,37.2021 21.9639127,36.8051 C17.4890036,34.6171 14.4324218,30.0761 14.4324218,24.8671 C14.4324218,17.4721 20.47024,11.4681 27.9996945,11.4681 C35.5291491,11.4681 41.5679855,17.4721 41.5679855,24.8671&quot;
                                        id=&quot;Stroke-180&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot;
                                        stroke-linejoin=&quot;round&quot;></path>
                                      <path
                                        d=&quot;M28,38.1928 C35.4928,38.1928 41.5682909,32.2268 41.5682909,24.8668 C41.5682909,17.5078 35.4928,11.5418 28,11.5418 C20.5072,11.5418 14.4317091,17.5078 14.4317091,24.8668 C14.4317091,29.5638 16.9058909,33.6928 20.6436364,36.0668&quot;
                                        id=&quot;Stroke-181&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot;
                                        stroke-linejoin=&quot;round&quot;></path>
                                      <path
                                        d=&quot;M35.6039855,35.8495 L37.5415855,39.8035 C37.8399127,40.3155 37.9895855,40.9745 37.9152582,41.5605 C37.7655855,43.2445 36.1996218,44.5625 34.4860218,44.4155 L21.66304,44.4155 C20.9920582,44.4895 20.3954036,44.3425 19.7997673,43.9765 C18.3091491,43.0245 17.8611491,41.1945 18.7561309,39.7295 L20.6194036,36.0695&quot;
                                        id=&quot;Stroke-182&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot;
                                        stroke-linejoin=&quot;round&quot;></path>
                                      <path
                                        d=&quot;M34.0384291,27.2099 C34.0384291,30.5049 31.3545018,33.1409 27.9995927,33.1409 C24.6446836,33.1409 21.9617745,30.5049 21.9617745,27.2099 C21.9617745,23.9159 24.6446836,21.2799 27.9995927,21.2799 C31.3545018,21.2799 34.0384291,23.9159 34.0384291,27.2099&quot;
                                        id=&quot;Stroke-183&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1&quot; stroke-linejoin=&quot;round&quot;></path>
                                      <path
                                        d=&quot;M28.2236945,17.9115 C27.5527127,17.9115 27.0314036,17.3985 27.0314036,16.7405 C27.0314036,16.0805 27.5527127,15.5685 28.2236945,15.5685 C28.8946764,15.5685 29.4159855,16.0805 29.4159855,16.7405 C29.4159855,17.3255 28.8946764,17.9115 28.2236945,17.9115&quot;
                                        id=&quot;Fill-184&quot; fill=&quot;#FFFFFF&quot; fill-rule=&quot;evenodd&quot;></path>
                                      <path
                                        d=&quot;M28,29.0405 C29.0293818,29.0405 29.8642909,28.2215 29.8642909,27.2095 C29.8642909,26.1995 29.0293818,25.3795 28,25.3795 C26.9706182,25.3795 26.1357091,26.1995 26.1357091,27.2095 C26.1357091,28.2215 26.9706182,29.0405 28,29.0405 Z&quot;
                                        id=&quot;Stroke-185&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1&quot; stroke-linejoin=&quot;round&quot;></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class=&quot;rt-space-left05&quot;>
                        <p>Видеокамера</p>
                        <p class=&quot;color-main05&quot;>Камера внутреннего видеонаблюдения</p>
                      </div>
                    </li>
                    <li class=&quot;d-flex rt-space-top&quot;>
                      <div>
                        <svg width=&quot;55px&quot; height=&quot;56px&quot; viewBox=&quot;0 0 55 56&quot; version=&quot;1.1&quot;
                             xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                          <defs>
                            <linearGradient x1=&quot;87.1217447%&quot; y1=&quot;0%&quot; x2=&quot;7.61205979%&quot; y2=&quot;100%&quot; id=&quot;linearGradient-1&quot;>
                              <stop stop-color=&quot;#00BFFE&quot; offset=&quot;0%&quot;></stop>
                              <stop stop-color=&quot;#4DECFF&quot; offset=&quot;100%&quot;></stop>
                            </linearGradient>
                          </defs>
                          <g id=&quot;1139&quot; stroke=&quot;none&quot; stroke-width=&quot;1&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;>
                            <g id=&quot;current-(2)&quot; transform=&quot;translate(-953.000000, -2064.000000)&quot;>
                              <g id=&quot;1400&quot; transform=&quot;translate(-3.000000, 0.000000)&quot;>
                                <g id=&quot;rassro4ka&quot; transform=&quot;translate(713.000000, 1839.000000)&quot;>
                                  <g id=&quot;Group-14&quot; transform=&quot;translate(243.000000, 224.000000)&quot;>
                                    <g id=&quot;Clip-301&quot; transform=&quot;translate(0.000000, 1.000000)&quot;>
                                      <path
                                        d=&quot;M0,27.644 C0,42.832 12.313,55.143 27.5,55.143 C42.688,55.143 55,42.832 55,27.644 C55,12.456 42.688,0.143 27.5,0.143 C12.313,0.143 0,12.456 0,27.644&quot;
                                        fill=&quot;url(#linearGradient-1)&quot; fill-rule=&quot;evenodd&quot;></path>
                                      <path
                                        d=&quot;M17.1025,36.4804 L15.7765,36.4804 C13.1945,36.4804 11.1005,34.1074 11.1005,31.2464 C11.0305,28.9434 12.4965,26.7794 14.7295,26.0824 C14.6605,25.5924 14.6605,25.1044 14.6605,24.6164 C14.6605,19.5214 18.3585,15.4034 22.8945,15.4034 C26.5935,15.4034 29.7345,18.1264 30.7115,21.9634 C31.6185,21.1264 32.8055,20.7084 33.9915,20.7084 C36.7135,20.7084 38.9465,23.0104 39.2255,25.9424 C41.8085,25.9424 43.9015,28.3144 43.9015,31.1754 C43.9015,34.0374 41.8085,36.4104 39.2255,36.4104 L37.6205,36.4104&quot;
                                        id=&quot;Stroke-314&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot;
                                        stroke-linejoin=&quot;round&quot;></path>
                                      <path d=&quot;M22.9648,36.4101 L31.6188,36.4101&quot; id=&quot;Stroke-316&quot; stroke=&quot;#FFFFFF&quot;
                                            stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path>
                                      <path d=&quot;M27.292,35.7822 L27.292,24.7562&quot; id=&quot;Stroke-318&quot; stroke=&quot;#FFFFFF&quot;
                                            stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path>
                                      <polyline id=&quot;Stroke-320&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot;
                                                stroke-linejoin=&quot;round&quot;
                                                points=&quot;22.9648 29.082 27.2918 24.756 31.6188 29.082&quot;></polyline>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class=&quot;rt-space-left05&quot;>
                        <p>Облако</p>
                        <p class=&quot;color-main05&quot;>Услуга «Видеонаблюдение» включает 7 дней хранения видеозаписей в
                          облаке.</p>
                      </div>
                    </li>
                  </ul>
                  <p class=&quot;rt-space-top color-main07&quot;>В Личном кабинете можно продлить срок хранения до 14 дней за 90
                    руб./мес., до 30 дней—за 190 руб./мес.</p>
                </div>
              </div>
              </div>
            </template>
            <template slot=&quot;form&quot;>
              <form class=&quot;rt-col-12&quot;>
                <div class=&quot;rt-space-horizontal&quot;>
                  <p class=&quot;rt-font-paragraph rt-font-bold&quot;>Заявка на подключение</p>

                  <div class=&quot;rt-space-top&quot;>
                    <rt-input value=&quot;&quot; placeholder=&quot;Как вас зовут?&quot;/>
                  </div>
                  <div class=&quot;rt-space-top&quot;>
                    <rt-input value=&quot;&quot; placeholder=&quot;Контактный телефон&quot;/>
                  </div>
                  <div class=&quot;rt-space-top&quot;>
                    <rt-input value=&quot;&quot; placeholder=&quot;Электронная почта&quot;/>
                  </div>
                  <div class=&quot;rt-space-top&quot;>
                    <rt-checkbox name=&quot;sms&quot;>Согласие на обработку персональных данных</rt-checkbox>
                  </div>
                </div>
              </form>
            </template>
            <template slot=&quot;footer&quot;>
              <div class=&quot;d-flex d-space-between rt-space-top05 rt-space-bottom&quot;>
                <div class=&quot;flex-end-bottom&quot;>Рассрочка</div>
                <div class=&quot;d-flex&quot;>
                  <rt-price value={480}></rt-price>
                </div>
              </div>
            </template>
            <template slot=&quot;button&quot;>Подключить</template>
          </rt-card-buy></div>"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import componentsList from "../../componentsList";

  export default {
    name: "AppCardWithForm",
    components: componentsList,
    mounted() {},
    created() {},
    methods: {}
  };
</script>

