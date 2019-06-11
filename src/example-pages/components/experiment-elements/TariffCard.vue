<template>
  <div>
    <div class="rt-container">

      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">TariffCards</h1></div>
        </div>
      </div>
    </div>
    <div class="rt-container">
      <div class="rt-col-12 rt-space-bottom2">
        <div class="rt-space-bottom is-b2c">
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top">
              <rt-tariff-card :has-seal="true" color="b2c-purple">
                <p class="rt-font-h4 rt-font-bold"> Для впечатлений</p>
                <p class="rt-font-label color-purple">Акция «Название акции»</p>
                <div class="rt-space-top">
                  <div class="d-flex rt-tariff-item">
                    <div class="rt-tariff-item__icon-wrapper">

                      <svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" class="rt-tariff-item__icon">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                           stroke-linejoin="round">
                          <g id="ver1" transform="translate(-174.000000, -956.000000)"
                             class="rt-tariff-item__icon-stroke">
                            <g id="Group-8-Copy-11" transform="translate(170.000000, 952.000000)">
                              <g id="internet" transform="translate(4.000000, 4.000000)">
                                <path
                                  d="M16.5,32.1680229 C25.179,32.1680229 32.2146,25.1531657 32.2146,16.4996229 C32.2146,7.84608 25.179,0.831222857 16.5,0.831222857 C7.82005714,0.831222857 0.784457143,7.84608 0.784457143,16.4996229 C0.784457143,25.1531657 7.82005714,32.1680229 16.5,32.1680229 Z"
                                  id="Stroke-53" stroke-width="1.5"></path>
                                <path
                                  d="M16.5,32.1680229 C21.2727429,32.1680229 25.1422286,25.1531657 25.1422286,16.4996229 C25.1422286,7.84608 21.2727429,0.831222857 16.5,0.831222857 C11.7272571,0.831222857 7.85777143,7.84608 7.85777143,16.4996229 C7.85777143,25.1531657 11.7272571,32.1680229 16.5,32.1680229 Z"
                                  id="Stroke-55"></path>
                                <path d="M16.5,0.831411429 L16.5,32.1682114" id="Stroke-57"></path>
                                <path d="M0.800108571,16.7034686 L32.2151657,16.7034686" id="Stroke-59"></path>
                                <path d="M3.21523714,8.61092571 L29.5803514,8.61092571" id="Stroke-61"></path>
                                <path d="M3.63876857,24.7964829 L29.58054,24.7964829" id="Stroke-63"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="rt-space-left05">
                      <p class="rt-font-bold">Домашний интернет</p>
                      <p class="rt-font-control color-dark07">100 Мбит/с</p>
                    </div>
                  </div>
                </div>
                <rt-slide-content :dotted-view="true">
                  <template slot="header">
                    <div class="rt-space-top-half">
                      <div class="d-flex rt-tariff-item">
                        <div class="rt-tariff-item__icon-wrapper">
                          <svg width="32px" height="28px" viewBox="0 0 32 28" version="1.1"
                               xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-174.000000, -1019.000000)">
                                <g id="Group-9-Copy-11" transform="translate(170.000000, 1011.000000)">
                                  <g id="Group-4" transform="translate(5.000000, 9.000000)">
                                    <path
                                      d="M3.519,-1.77635684e-15 L26.394,-1.77635684e-15 C28.338,-1.77635684e-15 29.914,1.576 29.914,3.52 L29.914,17.596 C29.914,19.54 28.338,21.116 26.394,21.116 L3.519,21.116 C1.575,21.116 1.11910481e-13,19.54 1.11910481e-13,17.596 L1.11910481e-13,3.52 C1.11910481e-13,1.576 1.575,-1.77635684e-15 3.519,-1.77635684e-15 Z"
                                      id="Stroke-156" class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                      stroke-linejoin="round"></path>
                                    <path d="M22.978,25.3081 L6.935,25.3081" id="Stroke-157"
                                          class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                          stroke-linejoin="round"></path>
                                    <polygon id="Fill-158" class="rt-tariff-item__icon-fill"
                                             points="12.97 25.3077 16.942 25.3077 16.942 21.1157 12.97 21.1157"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rt-space-left05">
                          <p class="rt-font-bold">Интерактивное ТВ</p>
                          <p class="rt-font-control color-dark07 rt-font-dashed rt-slide-content-trigger">125
                            каналов</p>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template slot="content">
                    <app-tariff-cars-text/>
                  </template>
                </rt-slide-content>
                <div class="rt-space-top-half">
                  <div class="d-flex rt-tariff-item flex-start-center rt-tariff-item--is-disabled">

                    <svg width="19px" height="33px" viewBox="0 0 19 33" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         class="rt-tariff-item__icon">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="ver1" transform="translate(-180.000000, -1076.000000)">
                          <g id="Group-10-Copy-11" transform="translate(170.000000, 1070.000000)">
                            <g id="mob-copy" transform="translate(11.000000, 7.000000)">
                              <path
                                d="M2.79845455,0 L14.0505152,0 C15.6042727,0 16.8480303,1.24375758 16.8480303,2.79751515 L16.8480303,27.6642121 C16.8480303,29.2179697 15.6042727,30.4617273 14.0505152,30.4617273 L2.79845455,30.4617273 C1.24469697,30.4617273 -1.77635684e-15,29.2179697 -1.77635684e-15,27.6642121 L-1.77635684e-15,2.79751515 C-1.77635684e-15,1.24375758 1.24469697,0 2.79845455,0 Z"
                                id="Stroke-230" class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                stroke-linejoin="round"></path>
                              <path d="M0.00046969697,5.6575 L16.9095606,5.6575" id="Stroke-231"
                                    class="rt-tariff-item__icon-stroke" stroke-linejoin="round"></path>
                              <path d="M0.00046969697,24.8045091 L16.9095606,24.8045091" id="Stroke-232"
                                    class="rt-tariff-item__icon-stroke" stroke-linejoin="round"></path>
                              <path
                                d="M9.57420909,27.6639303 C9.57420909,28.2858091 9.0143303,28.7827485 8.39339091,28.7827485 C7.77151212,28.7827485 7.27457273,28.2238091 7.27457273,27.6019303 C7.27457273,26.9800515 7.77151212,26.4831121 8.39339091,26.4831121 C9.0772697,26.4831121 9.57420909,26.9800515 9.57420909,27.6639303"
                                id="Fill-233" class="rt-tariff-item__icon-fill"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div class="rt-space-left05">
                      <p class="rt-font-bold">Мобильная связь</p>
                      <p class="rt-font-control">Не входит</p>
                    </div>
                  </div>
                </div>
                <div class="rt-space-top-half">
                  <div class="d-flex rt-tariff-item flex-start-center rt-tariff-item--is-disabled">


                    <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         class="rt-tariff-item__icon">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                         stroke-linejoin="round">
                        <g id="ver1" transform="translate(-175.000000, -1135.000000)"
                           class="rt-tariff-item__icon-stroke" stroke-width="1.5">
                          <g id="Group-11-Copy-11" transform="translate(170.000000, 1129.000000)">
                            <g id="Group-5" transform="translate(6.000000, 7.000000)">
                              <polygon id="Stroke-353"
                                       points="13.9584516 9.09494702e-13 0 12.9043871 3.10167742 12.9043871 3.10167742 28.9104516 10.8567742 28.9104516 17.0610323 28.9104516 24.816129 28.9104516 24.816129 12.9043871 27.9178065 12.9043871 23.7611613 9.05754839 23.7611613 9.09494702e-13 18.6109677 9.09494702e-13 18.6109677 4.2803871"></polygon>
                              <path
                                d="M13.5889419,23.7701032 C13.5889419,23.7701032 9.11436129,22.5137161 9.11436129,18.6903613 L9.11436129,12.4553935 L10.3572,12.6468774 C12.7182323,13.0099742 15.1199097,13.0126839 17.4818452,12.6550065 L18.8023613,12.4553935 L18.8023613,18.6641677 C18.8023613,22.5137161 14.3277806,23.7701032 14.3277806,23.7701032 L13.5889419,23.7701032 Z"
                                id="Stroke-355"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div class="rt-space-left05">
                      <p class="rt-font-bold">Умный дом</p>
                      <p class="rt-font-control">Не входит</p>
                    </div>
                  </div>
                </div>
                <div class="rt-space-top">
                  <rt-slide-content arrow-position="right-bottom" :is-open="true">
                    <template slot="label">
                      Дополнительно
                    </template>
                    <template slot="content">
                      <div class="d-flex rt-tariff-item flex-start-center ">

                        <svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" class="rt-tariff-item__icon">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="ver1" transform="translate(-163.000000, -1251.000000)">
                              <g id="Group-9" transform="translate(164.000000, 1213.000000)">
                                <g id="Group-12" transform="translate(0.000000, 37.000000)">
                                  <g id="Group-10" transform="translate(0.000000, 2.000000)">
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-37-Copy-6" stroke="#E3E8EC" fill="#FF4F12"></path>
                                    <text id="%-copy" font-family="RostelecomBasis-Medium, Rostelecom Basis"
                                          font-size="24" font-weight="400" line-spacing="28" fill="#FFFFFF">
                                      <tspan x="9" y="30">%</tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>

                        <div class="rt-space-left05">
                          <p class="rt-font-bold rt-font-control">Скидка до 30%</p>
                          <p class="rt-font-control color-dark07">при заказе с сайта</p>
                        </div>
                      </div>
                      <div class="rt-space-top-half">
                        <div class="d-flex rt-tariff-item flex-start-center ">


                          <svg width="42px" height="42px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                               class="rt-tariff-item__icon">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-30.000000, -1512.000000)">
                                <g id="Group-9" transform="translate(31.000000, 1348.000000)">
                                  <g id="Group-8-Copy-2" transform="translate(0.000000, 165.000000)">
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-172-Copy-31" stroke="#E3E8EC"></path>
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-172-Copy-29" stroke="#E3E8EC"></path>
                                    <g id="Group-14-Copy-16" transform="translate(6.000000, 15.000000)"
                                       stroke="#101828">
                                      <rect id="Rectangle" stroke-width="1.5" x="0.75" y="0.75" width="24.5"
                                            height="8.31818182"></rect>
                                      <path d="M3.79166667,3.27272727 L3.79166667,6.13636364"
                                            id="Path-3-Copy-2"></path>
                                      <path d="M3.79166667,8.72727273 L3.79166667,11.5909091" id="Path-3-Copy-7"
                                            stroke-width="1.5"></path>
                                      <path d="M6.5,3.27272727 L6.5,6.13636364" id="Path-3-Copy-3"></path>
                                      <path d="M22.2083333,8.72727273 L22.2083333,11.5909091" id="Path-3-Copy-8"
                                            stroke-width="1.5"></path>
                                      <path d="M9.20833333,3.27272727 L9.20833333,6.13636364"
                                            id="Path-3-Copy-4"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>

                          <div class="rt-space-left05">
                            <p class="rt-font-bold rt-font-control">Оборудование</p>
                             <p class="rt-font-control color-dark07">Роутер в аренду за 110 руб./мес. и ТВ-приставка в аренду за 30
                              руб./мес.</p>
                          </div>
                        </div>
                      </div>
                      <rt-slide-content :dotted-view="true">
                        <template slot="header">
                          <div class="rt-space-top-half">
                            <div class="flex-center-center">
                              <span class="rt-font-dashed rt-slide-content-trigger">ещё</span>
                            </div>
                          </div>
                        </template>
                        >
                        <template slot="content">
                          <app-tariff-cars-icons/>
                        </template>
                      </rt-slide-content>
                    </template>
                  </rt-slide-content>
                  <div class="flex-end-center">
                    <rt-price :value="749"/>
                  </div>
                  <div class="rt-space-top05 re-space-bottom">
                    <rt-button class="rt-button--is-block rt-button-purple">Подключить по акции</rt-button>
                  </div>
                  <div class="flex-center-center rt-space-top05 rt-space-bottom05">
                    <span>Настроить</span>
                  </div>
                </div>
              </rt-tariff-card>

            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top">
              <rt-tariff-card>
                <p class="rt-font-h4 rt-font-bold"> Для впечатлений везде</p>
                <p class="rt-font-label color-purple">&nbsp;</p>
                <div class="rt-space-top">
                  <div class="d-flex rt-tariff-item">
                    <div class="rt-tariff-item__icon-wrapper">

                      <svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" class="rt-tariff-item__icon">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                           stroke-linejoin="round">
                          <g id="ver1" transform="translate(-174.000000, -956.000000)"
                             class="rt-tariff-item__icon-stroke">
                            <g id="Group-8-Copy-11" transform="translate(170.000000, 952.000000)">
                              <g id="internet" transform="translate(4.000000, 4.000000)">
                                <path
                                  d="M16.5,32.1680229 C25.179,32.1680229 32.2146,25.1531657 32.2146,16.4996229 C32.2146,7.84608 25.179,0.831222857 16.5,0.831222857 C7.82005714,0.831222857 0.784457143,7.84608 0.784457143,16.4996229 C0.784457143,25.1531657 7.82005714,32.1680229 16.5,32.1680229 Z"
                                  id="Stroke-53" stroke-width="1.5"></path>
                                <path
                                  d="M16.5,32.1680229 C21.2727429,32.1680229 25.1422286,25.1531657 25.1422286,16.4996229 C25.1422286,7.84608 21.2727429,0.831222857 16.5,0.831222857 C11.7272571,0.831222857 7.85777143,7.84608 7.85777143,16.4996229 C7.85777143,25.1531657 11.7272571,32.1680229 16.5,32.1680229 Z"
                                  id="Stroke-55"></path>
                                <path d="M16.5,0.831411429 L16.5,32.1682114" id="Stroke-57"></path>
                                <path d="M0.800108571,16.7034686 L32.2151657,16.7034686" id="Stroke-59"></path>
                                <path d="M3.21523714,8.61092571 L29.5803514,8.61092571" id="Stroke-61"></path>
                                <path d="M3.63876857,24.7964829 L29.58054,24.7964829" id="Stroke-63"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="rt-space-left05">
                      <p class="rt-font-bold">Домашний интернет</p>
                      <p class="rt-font-control color-dark07">300 Мбит/с</p>
                    </div>
                  </div>
                </div>
                <rt-slide-content :dotted-view="true">
                  <template slot="header">
                    <div class="rt-space-top-half">
                      <div class="d-flex rt-tariff-item">
                        <div class="rt-tariff-item__icon-wrapper">
                          <svg width="32px" height="28px" viewBox="0 0 32 28" version="1.1"
                               xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-174.000000, -1019.000000)">
                                <g id="Group-9-Copy-11" transform="translate(170.000000, 1011.000000)">
                                  <g id="Group-4" transform="translate(5.000000, 9.000000)">
                                    <path
                                      d="M3.519,-1.77635684e-15 L26.394,-1.77635684e-15 C28.338,-1.77635684e-15 29.914,1.576 29.914,3.52 L29.914,17.596 C29.914,19.54 28.338,21.116 26.394,21.116 L3.519,21.116 C1.575,21.116 1.11910481e-13,19.54 1.11910481e-13,17.596 L1.11910481e-13,3.52 C1.11910481e-13,1.576 1.575,-1.77635684e-15 3.519,-1.77635684e-15 Z"
                                      id="Stroke-156" class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                      stroke-linejoin="round"></path>
                                    <path d="M22.978,25.3081 L6.935,25.3081" id="Stroke-157"
                                          class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                          stroke-linejoin="round"></path>
                                    <polygon id="Fill-158" class="rt-tariff-item__icon-fill"
                                             points="12.97 25.3077 16.942 25.3077 16.942 21.1157 12.97 21.1157"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rt-space-left05">
                          <p class="rt-font-bold">Интерактивное ТВ</p>
                          <p class="rt-font-control color-dark07 rt-font-dashed rt-slide-content-trigger">165
                            каналов</p>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template slot="content">
                    <app-tariff-cars-text/>
                  </template>
                </rt-slide-content>
                <div class="rt-space-top-half">
                  <rt-slide-content :dotted-view="true">
                    <template slot="header">
                      <div class="d-flex rt-tariff-item">
                        <div class="rt-tariff-item__icon-wrapper">
                          <svg width="19px" height="33px" viewBox="0 0 19 33" version="1.1"
                               xmlns="http://www.w3.org/2000/svg"
                               class="rt-tariff-item__icon">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-180.000000, -1076.000000)">
                                <g id="Group-10-Copy-11" transform="translate(170.000000, 1070.000000)">
                                  <g id="mob-copy" transform="translate(11.000000, 7.000000)">
                                    <path
                                      d="M2.79845455,0 L14.0505152,0 C15.6042727,0 16.8480303,1.24375758 16.8480303,2.79751515 L16.8480303,27.6642121 C16.8480303,29.2179697 15.6042727,30.4617273 14.0505152,30.4617273 L2.79845455,30.4617273 C1.24469697,30.4617273 -1.77635684e-15,29.2179697 -1.77635684e-15,27.6642121 L-1.77635684e-15,2.79751515 C-1.77635684e-15,1.24375758 1.24469697,0 2.79845455,0 Z"
                                      id="Stroke-230" class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                      stroke-linejoin="round"></path>
                                    <path d="M0.00046969697,5.6575 L16.9095606,5.6575" id="Stroke-231"
                                          class="rt-tariff-item__icon-stroke" stroke-linejoin="round"></path>
                                    <path d="M0.00046969697,24.8045091 L16.9095606,24.8045091" id="Stroke-232"
                                          class="rt-tariff-item__icon-stroke" stroke-linejoin="round"></path>
                                    <path
                                      d="M9.57420909,27.6639303 C9.57420909,28.2858091 9.0143303,28.7827485 8.39339091,28.7827485 C7.77151212,28.7827485 7.27457273,28.2238091 7.27457273,27.6019303 C7.27457273,26.9800515 7.77151212,26.4831121 8.39339091,26.4831121 C9.0772697,26.4831121 9.57420909,26.9800515 9.57420909,27.6639303"
                                      id="Fill-233" class="rt-tariff-item__icon-fill"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rt-space-left05">
                          <p class="rt-font-bold">Мобильная связь, 1 SIM</p>


                          <p class="rt-font-control color-dark07 rt-font-dashed rt-slide-content-trigger">∞ Гб, 500
                            минут, 50 смс</p>
                        </div>
                      </div>
                    </template>
                    <template slot="content">
                      <app-tariff-cars-text/>
                    </template>
                  </rt-slide-content>
                </div>

                <div class="rt-space-top-half">
                  <div class="d-flex rt-tariff-item flex-start-center rt-tariff-item--is-disabled">


                    <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         class="rt-tariff-item__icon">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                         stroke-linejoin="round">
                        <g id="ver1" transform="translate(-175.000000, -1135.000000)"
                           class="rt-tariff-item__icon-stroke" stroke-width="1.5">
                          <g id="Group-11-Copy-11" transform="translate(170.000000, 1129.000000)">
                            <g id="Group-5" transform="translate(6.000000, 7.000000)">
                              <polygon id="Stroke-353"
                                       points="13.9584516 9.09494702e-13 0 12.9043871 3.10167742 12.9043871 3.10167742 28.9104516 10.8567742 28.9104516 17.0610323 28.9104516 24.816129 28.9104516 24.816129 12.9043871 27.9178065 12.9043871 23.7611613 9.05754839 23.7611613 9.09494702e-13 18.6109677 9.09494702e-13 18.6109677 4.2803871"></polygon>
                              <path
                                d="M13.5889419,23.7701032 C13.5889419,23.7701032 9.11436129,22.5137161 9.11436129,18.6903613 L9.11436129,12.4553935 L10.3572,12.6468774 C12.7182323,13.0099742 15.1199097,13.0126839 17.4818452,12.6550065 L18.8023613,12.4553935 L18.8023613,18.6641677 C18.8023613,22.5137161 14.3277806,23.7701032 14.3277806,23.7701032 L13.5889419,23.7701032 Z"
                                id="Stroke-355"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div class="rt-space-left05">
                      <p class="rt-font-bold">Умный дом</p>
                      <p class="rt-font-control">Не входит</p>
                    </div>
                  </div>
                </div>
                <div class="rt-space-top">
                  <rt-slide-content arrow-position="right-bottom" :is-open="true">
                    <template slot="label">
                      Дополнительно
                    </template>
                    <template slot="content">
                      <div class="d-flex rt-tariff-item flex-start-center ">

                        <svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" class="rt-tariff-item__icon">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="ver1" transform="translate(-163.000000, -1251.000000)">
                              <g id="Group-9" transform="translate(164.000000, 1213.000000)">
                                <g id="Group-12" transform="translate(0.000000, 37.000000)">
                                  <g id="Group-10" transform="translate(0.000000, 2.000000)">
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-37-Copy-6" stroke="#E3E8EC" fill="#FF4F12"></path>
                                    <text id="%-copy" font-family="RostelecomBasis-Medium, Rostelecom Basis"
                                          font-size="24" font-weight="400" line-spacing="28" fill="#FFFFFF">
                                      <tspan x="9" y="30">%</tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>

                        <div class="rt-space-left05">
                          <p class="rt-font-bold rt-font-control">Скидка до 30%</p>
                          <p class="rt-font-control color-dark07">при заказе с сайта</p>
                        </div>
                      </div>
                      <div class="rt-space-top-half">
                        <div class="d-flex rt-tariff-item flex-start-center ">


                          <svg width="42px" height="42px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                               class="rt-tariff-item__icon">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-30.000000, -1512.000000)">
                                <g id="Group-9" transform="translate(31.000000, 1348.000000)">
                                  <g id="Group-8-Copy-2" transform="translate(0.000000, 165.000000)">
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-172-Copy-31" stroke="#E3E8EC"></path>
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-172-Copy-29" stroke="#E3E8EC"></path>
                                    <g id="Group-14-Copy-16" transform="translate(6.000000, 15.000000)"
                                       stroke="#101828">
                                      <rect id="Rectangle" stroke-width="1.5" x="0.75" y="0.75" width="24.5"
                                            height="8.31818182"></rect>
                                      <path d="M3.79166667,3.27272727 L3.79166667,6.13636364"
                                            id="Path-3-Copy-2"></path>
                                      <path d="M3.79166667,8.72727273 L3.79166667,11.5909091" id="Path-3-Copy-7"
                                            stroke-width="1.5"></path>
                                      <path d="M6.5,3.27272727 L6.5,6.13636364" id="Path-3-Copy-3"></path>
                                      <path d="M22.2083333,8.72727273 L22.2083333,11.5909091" id="Path-3-Copy-8"
                                            stroke-width="1.5"></path>
                                      <path d="M9.20833333,3.27272727 L9.20833333,6.13636364"
                                            id="Path-3-Copy-4"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>

                          <div class="rt-space-left05">
                            <p class="rt-font-bold rt-font-control">Оборудование</p>
                            <p class="rt-font-control">Роутер в аренду за 110 руб./мес. и ТВ-приставка в аренду за
                              30
                              руб./мес.</p>
                          </div>
                        </div>
                        <rt-slide-content :dotted-view="true">
                          <template slot="header">
                            <div class="rt-space-top-half">
                              <div class="flex-center-center">
                                <span class="rt-font-dashed rt-slide-content-trigger">ещё</span>
                              </div>
                            </div>
                          </template>
                          >
                          <template slot="content">
                            <app-tariff-cars-icons/>
                          </template>
                        </rt-slide-content>
                      </div>

                    </template>
                  </rt-slide-content>
                  <div class="flex-end-center">
                    <rt-price :value="890"/>
                  </div>
                  <div class="rt-space-top05 re-space-bottom">
                    <rt-button class="rt-button--is-block rt-button-orange">Подключить</rt-button>
                  </div>
                  <div class="flex-center-center rt-space-top05 rt-space-bottom05">
                    <span>Настроить</span>
                  </div>
                </div>
              </rt-tariff-card>
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top">
              <rt-tariff-card>
                <p class="rt-font-h4 rt-font-bold"> Для семьи</p>
                <p class="rt-font-label color-purple">&nbsp;</p>
                <div class="rt-space-top">
                  <div class="d-flex rt-tariff-item">
                    <div class="rt-tariff-item__icon-wrapper">
                      <svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" class="rt-tariff-item__icon">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                           stroke-linejoin="round">
                          <g id="ver1" transform="translate(-174.000000, -956.000000)"
                             class="rt-tariff-item__icon-stroke">
                            <g id="Group-8-Copy-11" transform="translate(170.000000, 952.000000)">
                              <g id="internet" transform="translate(4.000000, 4.000000)">
                                <path
                                  d="M16.5,32.1680229 C25.179,32.1680229 32.2146,25.1531657 32.2146,16.4996229 C32.2146,7.84608 25.179,0.831222857 16.5,0.831222857 C7.82005714,0.831222857 0.784457143,7.84608 0.784457143,16.4996229 C0.784457143,25.1531657 7.82005714,32.1680229 16.5,32.1680229 Z"
                                  id="Stroke-53" stroke-width="1.5"></path>
                                <path
                                  d="M16.5,32.1680229 C21.2727429,32.1680229 25.1422286,25.1531657 25.1422286,16.4996229 C25.1422286,7.84608 21.2727429,0.831222857 16.5,0.831222857 C11.7272571,0.831222857 7.85777143,7.84608 7.85777143,16.4996229 C7.85777143,25.1531657 11.7272571,32.1680229 16.5,32.1680229 Z"
                                  id="Stroke-55"></path>
                                <path d="M16.5,0.831411429 L16.5,32.1682114" id="Stroke-57"></path>
                                <path d="M0.800108571,16.7034686 L32.2151657,16.7034686" id="Stroke-59"></path>
                                <path d="M3.21523714,8.61092571 L29.5803514,8.61092571" id="Stroke-61"></path>
                                <path d="M3.63876857,24.7964829 L29.58054,24.7964829" id="Stroke-63"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="rt-space-left05">
                      <p class="rt-font-bold">Домашний интернет</p>
                      <p class="rt-font-control color-dark07">300 Мбит/с</p>
                    </div>
                  </div>
                </div>
                <rt-slide-content :dotted-view="true">
                  <template slot="header">
                    <div class="rt-space-top-half">
                      <div class="d-flex rt-tariff-item">
                        <div class="rt-tariff-item__icon-wrapper">
                          <svg width="32px" height="28px" viewBox="0 0 32 28" version="1.1"
                               xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-174.000000, -1019.000000)">
                                <g id="Group-9-Copy-11" transform="translate(170.000000, 1011.000000)">
                                  <g id="Group-4" transform="translate(5.000000, 9.000000)">
                                    <path
                                      d="M3.519,-1.77635684e-15 L26.394,-1.77635684e-15 C28.338,-1.77635684e-15 29.914,1.576 29.914,3.52 L29.914,17.596 C29.914,19.54 28.338,21.116 26.394,21.116 L3.519,21.116 C1.575,21.116 1.11910481e-13,19.54 1.11910481e-13,17.596 L1.11910481e-13,3.52 C1.11910481e-13,1.576 1.575,-1.77635684e-15 3.519,-1.77635684e-15 Z"
                                      id="Stroke-156" class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                      stroke-linejoin="round"></path>
                                    <path d="M22.978,25.3081 L6.935,25.3081" id="Stroke-157"
                                          class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                          stroke-linejoin="round"></path>
                                    <polygon id="Fill-158" class="rt-tariff-item__icon-fill"
                                             points="12.97 25.3077 16.942 25.3077 16.942 21.1157 12.97 21.1157"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rt-space-left05">
                          <p class="rt-font-bold">Интерактивное ТВ</p>
                          <p class="rt-font-control color-dark07 rt-font-dashed rt-slide-content-trigger">192
                            каналов</p>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template slot="content">
                    <app-tariff-cars-text/>
                  </template>
                </rt-slide-content>
                <div class="rt-space-top-half">
                  <rt-slide-content :dotted-view="true">
                    <template slot="header">
                      <div class="d-flex rt-tariff-item">
                        <div class="rt-tariff-item__icon-wrapper">

                          <svg width="19px" height="33px" viewBox="0 0 19 33" version="1.1"
                               xmlns="http://www.w3.org/2000/svg"
                               class="rt-tariff-item__icon">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-180.000000, -1076.000000)">
                                <g id="Group-10-Copy-11" transform="translate(170.000000, 1070.000000)">
                                  <g id="mob-copy" transform="translate(11.000000, 7.000000)">
                                    <path
                                      d="M2.79845455,0 L14.0505152,0 C15.6042727,0 16.8480303,1.24375758 16.8480303,2.79751515 L16.8480303,27.6642121 C16.8480303,29.2179697 15.6042727,30.4617273 14.0505152,30.4617273 L2.79845455,30.4617273 C1.24469697,30.4617273 -1.77635684e-15,29.2179697 -1.77635684e-15,27.6642121 L-1.77635684e-15,2.79751515 C-1.77635684e-15,1.24375758 1.24469697,0 2.79845455,0 Z"
                                      id="Stroke-230" class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                      stroke-linejoin="round"></path>
                                    <path d="M0.00046969697,5.6575 L16.9095606,5.6575" id="Stroke-231"
                                          class="rt-tariff-item__icon-stroke" stroke-linejoin="round"></path>
                                    <path d="M0.00046969697,24.8045091 L16.9095606,24.8045091" id="Stroke-232"
                                          class="rt-tariff-item__icon-stroke" stroke-linejoin="round"></path>
                                    <path
                                      d="M9.57420909,27.6639303 C9.57420909,28.2858091 9.0143303,28.7827485 8.39339091,28.7827485 C7.77151212,28.7827485 7.27457273,28.2238091 7.27457273,27.6019303 C7.27457273,26.9800515 7.77151212,26.4831121 8.39339091,26.4831121 C9.0772697,26.4831121 9.57420909,26.9800515 9.57420909,27.6639303"
                                      id="Fill-233" class="rt-tariff-item__icon-fill"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rt-space-left05">
                          <p class="rt-font-bold">Мобильная связь, 1 SIM</p>


                          <p class="rt-font-control color-dark07 rt-font-dashed rt-slide-content-trigger">20 Гб, 600
                            минут, 50 смс</p>


                        </div>
                      </div>
                    </template>
                    <template slot="content">
                      <app-tariff-cars-text/>
                    </template>
                  </rt-slide-content>
                </div>
                <div class="rt-space-top-half">
                  <div class="d-flex rt-tariff-item flex-start-center rt-tariff-item--is-disabled">

                    <div class="rt-tariff-item__icon-wrapper">
                    <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         class="rt-tariff-item__icon">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                         stroke-linejoin="round">
                        <g id="ver1" transform="translate(-175.000000, -1135.000000)"
                           class="rt-tariff-item__icon-stroke" stroke-width="1.5">
                          <g id="Group-11-Copy-11" transform="translate(170.000000, 1129.000000)">
                            <g id="Group-5" transform="translate(6.000000, 7.000000)">
                              <polygon id="Stroke-353"
                                       points="13.9584516 9.09494702e-13 0 12.9043871 3.10167742 12.9043871 3.10167742 28.9104516 10.8567742 28.9104516 17.0610323 28.9104516 24.816129 28.9104516 24.816129 12.9043871 27.9178065 12.9043871 23.7611613 9.05754839 23.7611613 9.09494702e-13 18.6109677 9.09494702e-13 18.6109677 4.2803871"></polygon>
                              <path
                                d="M13.5889419,23.7701032 C13.5889419,23.7701032 9.11436129,22.5137161 9.11436129,18.6903613 L9.11436129,12.4553935 L10.3572,12.6468774 C12.7182323,13.0099742 15.1199097,13.0126839 17.4818452,12.6550065 L18.8023613,12.4553935 L18.8023613,18.6641677 C18.8023613,22.5137161 14.3277806,23.7701032 14.3277806,23.7701032 L13.5889419,23.7701032 Z"
                                id="Stroke-355"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    </div>
                    <div class="rt-space-left05">
                      <p class="rt-font-bold">Умный дом</p>
                      <p class="rt-font-control">Не входит</p>
                    </div>
                  </div>
                </div>
                <div class="rt-space-top">
                  <rt-slide-content arrow-position="right-bottom" :is-open="true">
                    <template slot="label">
                      Дополнительно
                    </template>
                    <template slot="content">
                      <div class="d-flex rt-tariff-item flex-start-center ">
                        <div class="rt-tariff-item__icon-wrapper">
                        <svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" class="rt-tariff-item__icon">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="ver1" transform="translate(-163.000000, -1251.000000)">
                              <g id="Group-9" transform="translate(164.000000, 1213.000000)">
                                <g id="Group-12" transform="translate(0.000000, 37.000000)">
                                  <g id="Group-10" transform="translate(0.000000, 2.000000)">
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-37-Copy-6" stroke="#E3E8EC" fill="#FF4F12"></path>
                                    <text id="%-copy" font-family="RostelecomBasis-Medium, Rostelecom Basis"
                                          font-size="24" font-weight="400" line-spacing="28" fill="#FFFFFF">
                                      <tspan x="9" y="30">%</tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        </div>

                        <div class="rt-space-left05">
                          <p class="rt-font-bold rt-font-control">Скидка до 30%</p>
                          <p class="rt-font-control color-dark07">при заказе с сайта</p>
                        </div>
                      </div>
                      <div class="rt-space-top-half">
                        <div class="d-flex rt-tariff-item flex-start-center ">
                          <div class="rt-tariff-item__icon-wrapper">
                          <svg width="42px" height="42px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                               class="rt-tariff-item__icon">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-30.000000, -1512.000000)">
                                <g id="Group-9" transform="translate(31.000000, 1348.000000)">
                                  <g id="Group-8-Copy-2" transform="translate(0.000000, 165.000000)">
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-172-Copy-31" stroke="#E3E8EC"></path>
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-172-Copy-29" stroke="#E3E8EC"></path>
                                    <g id="Group-14-Copy-16" transform="translate(6.000000, 15.000000)"
                                       stroke="#101828">
                                      <rect id="Rectangle" stroke-width="1.5" x="0.75" y="0.75" width="24.5"
                                            height="8.31818182"></rect>
                                      <path d="M3.79166667,3.27272727 L3.79166667,6.13636364" id="Path-3-Copy-2"></path>
                                      <path d="M3.79166667,8.72727273 L3.79166667,11.5909091" id="Path-3-Copy-7"
                                            stroke-width="1.5"></path>
                                      <path d="M6.5,3.27272727 L6.5,6.13636364" id="Path-3-Copy-3"></path>
                                      <path d="M22.2083333,8.72727273 L22.2083333,11.5909091" id="Path-3-Copy-8"
                                            stroke-width="1.5"></path>
                                      <path d="M9.20833333,3.27272727 L9.20833333,6.13636364" id="Path-3-Copy-4"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          </div>
                          <div class="rt-space-left05">
                            <p class="rt-font-bold rt-font-control">Оборудование</p>
                             <p class="rt-font-control color-dark07">Роутер в аренду за 110 руб./мес. и ТВ-приставка в аренду за 30
                              руб./мес.</p>
                          </div>
                        </div>
                      </div>
                      <rt-slide-content :dotted-view="true">
                        <template slot="header">
                          <div class="rt-space-top-half">
                            <div class="flex-center-center">
                              <span class="rt-font-dashed rt-slide-content-trigger">ещё</span>
                            </div>
                          </div>
                        </template>
                        >
                        <template slot="content">
                          <app-tariff-cars-icons/>
                        </template>
                      </rt-slide-content>
                    </template>
                  </rt-slide-content>
                  <div class="flex-end-center">
                    <rt-price :value="1030"/>
                  </div>
                  <div class="rt-space-top05 re-space-bottom">
                    <rt-button class="rt-button--is-block rt-button-orange">Подключить</rt-button>
                  </div>
                  <div class="flex-center-center rt-space-top05 rt-space-bottom05">
                    <span>Настроить</span>
                  </div>
                </div>
              </rt-tariff-card>
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top">
              <rt-tariff-card>
                <p class="rt-font-h4 rt-font-bold"> Для всего</p>
                <p class="rt-font-label color-purple">&nbsp;</p>
                <div class="rt-space-top">
                  <div class="d-flex rt-tariff-item">
                    <div class="rt-tariff-item__icon-wrapper">

                      <svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" class="rt-tariff-item__icon">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                           stroke-linejoin="round">
                          <g id="ver1" transform="translate(-174.000000, -956.000000)"
                             class="rt-tariff-item__icon-stroke">
                            <g id="Group-8-Copy-11" transform="translate(170.000000, 952.000000)">
                              <g id="internet" transform="translate(4.000000, 4.000000)">
                                <path
                                  d="M16.5,32.1680229 C25.179,32.1680229 32.2146,25.1531657 32.2146,16.4996229 C32.2146,7.84608 25.179,0.831222857 16.5,0.831222857 C7.82005714,0.831222857 0.784457143,7.84608 0.784457143,16.4996229 C0.784457143,25.1531657 7.82005714,32.1680229 16.5,32.1680229 Z"
                                  id="Stroke-53" stroke-width="1.5"></path>
                                <path
                                  d="M16.5,32.1680229 C21.2727429,32.1680229 25.1422286,25.1531657 25.1422286,16.4996229 C25.1422286,7.84608 21.2727429,0.831222857 16.5,0.831222857 C11.7272571,0.831222857 7.85777143,7.84608 7.85777143,16.4996229 C7.85777143,25.1531657 11.7272571,32.1680229 16.5,32.1680229 Z"
                                  id="Stroke-55"></path>
                                <path d="M16.5,0.831411429 L16.5,32.1682114" id="Stroke-57"></path>
                                <path d="M0.800108571,16.7034686 L32.2151657,16.7034686" id="Stroke-59"></path>
                                <path d="M3.21523714,8.61092571 L29.5803514,8.61092571" id="Stroke-61"></path>
                                <path d="M3.63876857,24.7964829 L29.58054,24.7964829" id="Stroke-63"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="rt-space-left05">
                      <p class="rt-font-bold">Домашний интернет</p>
                      <p class="rt-font-control color-dark07">700 Мбит/с</p>
                    </div>
                  </div>
                </div>
                <rt-slide-content :dotted-view="true">
                  <template slot="header">
                    <div class="rt-space-top-half">
                      <div class="d-flex rt-tariff-item">
                        <div class="rt-tariff-item__icon-wrapper">
                          <svg width="32px" height="28px" viewBox="0 0 32 28" version="1.1"
                               xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-174.000000, -1019.000000)">
                                <g id="Group-9-Copy-11" transform="translate(170.000000, 1011.000000)">
                                  <g id="Group-4" transform="translate(5.000000, 9.000000)">
                                    <path
                                      d="M3.519,-1.77635684e-15 L26.394,-1.77635684e-15 C28.338,-1.77635684e-15 29.914,1.576 29.914,3.52 L29.914,17.596 C29.914,19.54 28.338,21.116 26.394,21.116 L3.519,21.116 C1.575,21.116 1.11910481e-13,19.54 1.11910481e-13,17.596 L1.11910481e-13,3.52 C1.11910481e-13,1.576 1.575,-1.77635684e-15 3.519,-1.77635684e-15 Z"
                                      id="Stroke-156" class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                      stroke-linejoin="round"></path>
                                    <path d="M22.978,25.3081 L6.935,25.3081" id="Stroke-157"
                                          class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                          stroke-linejoin="round"></path>
                                    <polygon id="Fill-158" class="rt-tariff-item__icon-fill"
                                             points="12.97 25.3077 16.942 25.3077 16.942 21.1157 12.97 21.1157"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rt-space-left05">
                          <p class="rt-font-bold">Интерактивное ТВ</p>
                          <p class="rt-font-control color-dark07 rt-font-dashed rt-slide-content-trigger">232
                            канала</p>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template slot="content">
                    <app-tariff-cars-text/>
                  </template>
                </rt-slide-content>
                <div class="rt-space-top-half">
                  <rt-slide-content :dotted-view="true">
                    <template slot="header">
                      <div class="d-flex rt-tariff-item">
                        <div class="rt-tariff-item__icon-wrapper">

                          <svg width="19px" height="33px" viewBox="0 0 19 33" version="1.1"
                               xmlns="http://www.w3.org/2000/svg"
                               class="rt-tariff-item__icon">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-180.000000, -1076.000000)">
                                <g id="Group-10-Copy-11" transform="translate(170.000000, 1070.000000)">
                                  <g id="mob-copy" transform="translate(11.000000, 7.000000)">
                                    <path
                                      d="M2.79845455,0 L14.0505152,0 C15.6042727,0 16.8480303,1.24375758 16.8480303,2.79751515 L16.8480303,27.6642121 C16.8480303,29.2179697 15.6042727,30.4617273 14.0505152,30.4617273 L2.79845455,30.4617273 C1.24469697,30.4617273 -1.77635684e-15,29.2179697 -1.77635684e-15,27.6642121 L-1.77635684e-15,2.79751515 C-1.77635684e-15,1.24375758 1.24469697,0 2.79845455,0 Z"
                                      id="Stroke-230" class="rt-tariff-item__icon-stroke" stroke-width="1.5"
                                      stroke-linejoin="round"></path>
                                    <path d="M0.00046969697,5.6575 L16.9095606,5.6575" id="Stroke-231"
                                          class="rt-tariff-item__icon-stroke" stroke-linejoin="round"></path>
                                    <path d="M0.00046969697,24.8045091 L16.9095606,24.8045091" id="Stroke-232"
                                          class="rt-tariff-item__icon-stroke" stroke-linejoin="round"></path>
                                    <path
                                      d="M9.57420909,27.6639303 C9.57420909,28.2858091 9.0143303,28.7827485 8.39339091,28.7827485 C7.77151212,28.7827485 7.27457273,28.2238091 7.27457273,27.6019303 C7.27457273,26.9800515 7.77151212,26.4831121 8.39339091,26.4831121 C9.0772697,26.4831121 9.57420909,26.9800515 9.57420909,27.6639303"
                                      id="Fill-233" class="rt-tariff-item__icon-fill"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="rt-space-left05">
                          <p class="rt-font-bold">Мобильная связь, 1 SIM</p>


                          <p class="rt-font-control color-dark07 rt-font-dashed rt-slide-content-trigger">20 Гб, 600
                            минут, 50 смс</p>


                        </div>
                      </div>
                    </template>
                    <template slot="content">
                      <app-tariff-cars-text/>
                    </template>
                  </rt-slide-content>
                </div>
                <div class="rt-space-top-half">
                  <rt-slide-content :dotted-view="true">
                    <template slot="header">
                      <div class="d-flex rt-tariff-item">

                        <div class="rt-tariff-item__icon-wrapper">
                        <svg width="30px" height="31px" viewBox="0 0 30 31" version="1.1"
                             xmlns="http://www.w3.org/2000/svg"
                             class="rt-tariff-item__icon">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                             stroke-linejoin="round">
                            <g id="ver1" transform="translate(-175.000000, -1135.000000)"
                               class="rt-tariff-item__icon-stroke" stroke-width="1.5">
                              <g id="Group-11-Copy-11" transform="translate(170.000000, 1129.000000)">
                                <g id="Group-5" transform="translate(6.000000, 7.000000)">
                                  <polygon id="Stroke-353"
                                           points="13.9584516 9.09494702e-13 0 12.9043871 3.10167742 12.9043871 3.10167742 28.9104516 10.8567742 28.9104516 17.0610323 28.9104516 24.816129 28.9104516 24.816129 12.9043871 27.9178065 12.9043871 23.7611613 9.05754839 23.7611613 9.09494702e-13 18.6109677 9.09494702e-13 18.6109677 4.2803871"></polygon>
                                  <path
                                    d="M13.5889419,23.7701032 C13.5889419,23.7701032 9.11436129,22.5137161 9.11436129,18.6903613 L9.11436129,12.4553935 L10.3572,12.6468774 C12.7182323,13.0099742 15.1199097,13.0126839 17.4818452,12.6550065 L18.8023613,12.4553935 L18.8023613,18.6641677 C18.8023613,22.5137161 14.3277806,23.7701032 14.3277806,23.7701032 L13.5889419,23.7701032 Z"
                                    id="Stroke-355"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        </div>
                        <div class="rt-space-left05">
                          <p class="rt-font-bold">Умный дом</p>
                          <p class="rt-font-control color-dark07 rt-font-dashed rt-slide-content-trigger">Видеокамера + сервис</p>
                        </div>
                      </div>
                    </template>
                    <template slot="content">
                      <app-tariff-cars-text/>
                    </template>
                  </rt-slide-content>
                </div>
                <div class="rt-space-top">
                  <rt-slide-content arrow-position="right-bottom" :is-open="true">
                    <template slot="label">
                      Дополнительно
                    </template>
                    <template slot="content">
                      <div class="d-flex rt-tariff-item flex-start-center ">
<div class="rt-tariff-item__icon-wrapper">
                        <svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" class="rt-tariff-item__icon">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="ver1" transform="translate(-163.000000, -1251.000000)">
                              <g id="Group-9" transform="translate(164.000000, 1213.000000)">
                                <g id="Group-12" transform="translate(0.000000, 37.000000)">
                                  <g id="Group-10" transform="translate(0.000000, 2.000000)">
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-37-Copy-6" stroke="#E3E8EC" fill="#FF4F12"></path>
                                    <text id="%-copy" font-family="RostelecomBasis-Medium, Rostelecom Basis"
                                          font-size="24" font-weight="400" line-spacing="28" fill="#FFFFFF">
                                      <tspan x="9" y="30">%</tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
</div>
                        <div class="rt-space-left05">
                          <p class="rt-font-bold rt-font-control">Скидка до 30%</p>
                          <p class="rt-font-control color-dark07">при заказе с сайта</p>
                        </div>
                      </div>
                      <div class="rt-space-top-half">
                        <div class="d-flex rt-tariff-item flex-start-center ">

                          <div class="rt-tariff-item__icon-wrapper">
                          <svg width="42px" height="42px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                               class="rt-tariff-item__icon">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="ver1" transform="translate(-30.000000, -1512.000000)">
                                <g id="Group-9" transform="translate(31.000000, 1348.000000)">
                                  <g id="Group-8-Copy-2" transform="translate(0.000000, 165.000000)">
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-172-Copy-31" stroke="#E3E8EC"></path>
                                    <path
                                      d="M40,20 C40,31.0458182 31.0450909,40 20,40 C8.95418182,40 0,31.0458182 0,20 C0,8.95418182 8.95418182,0 20,0 C31.0450909,0 40,8.95418182 40,20"
                                      id="Fill-172-Copy-29" stroke="#E3E8EC"></path>
                                    <g id="Group-14-Copy-16" transform="translate(6.000000, 15.000000)"
                                       stroke="#101828">
                                      <rect id="Rectangle" stroke-width="1.5" x="0.75" y="0.75" width="24.5"
                                            height="8.31818182"></rect>
                                      <path d="M3.79166667,3.27272727 L3.79166667,6.13636364" id="Path-3-Copy-2"></path>
                                      <path d="M3.79166667,8.72727273 L3.79166667,11.5909091" id="Path-3-Copy-7"
                                            stroke-width="1.5"></path>
                                      <path d="M6.5,3.27272727 L6.5,6.13636364" id="Path-3-Copy-3"></path>
                                      <path d="M22.2083333,8.72727273 L22.2083333,11.5909091" id="Path-3-Copy-8"
                                            stroke-width="1.5"></path>
                                      <path d="M9.20833333,3.27272727 L9.20833333,6.13636364" id="Path-3-Copy-4"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          </div>

                          <div class="rt-space-left05">
                            <p class="rt-font-bold rt-font-control">Оборудование</p>
                             <p class="rt-font-control color-dark07">Роутер в аренду за 110 руб./мес. и ТВ-приставка в аренду за 30
                              руб./мес.</p>
                          </div>
                        </div>
                      </div>
                      <rt-slide-content :dotted-view="true">
                        <template slot="header">
                          <div class="rt-space-top-half">
                            <div class="flex-center-center">
                              <span class="rt-font-dashed rt-slide-content-trigger">ещё</span>
                            </div>
                          </div>
                        </template>
                        >
                        <template slot="content">
                          <app-tariff-cars-icons/>
                        </template>
                      </rt-slide-content>
                    </template>
                  </rt-slide-content>
                  <div class="flex-end-center">
                    <rt-price :value="1360"/>
                  </div>
                  <div class="rt-space-top05 re-space-bottom">
                    <rt-button class="rt-button--is-block rt-button-orange">Подключить</rt-button>
                  </div>
                  <div class="flex-center-center rt-space-top05 rt-space-bottom05">
                    <span>Настроить</span>
                  </div>
                </div>
              </rt-tariff-card>
            </div>
          </div>
        </div>
      </div>
      <div class="rt-container rt-space-top25">
        <!--<documentation-builder :json="documentation" type="components"/>-->
      </div>
    </div>
  </div>
</template>

<script>

  // import documentation from "../../../lib/components/ProductCard/docs/index.json";
  import AppTariffCarsIcons from './TariffCardIcons.vue';
  import AppTariffCarsText from './TariffCardText.vue';
  const componentsList = {};
  componentsList[AppTariffCarsIcons.name] = AppTariffCarsIcons;
  componentsList[AppTariffCarsText.name] = AppTariffCarsText;
  export default {
    name: "AppTariffCars",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      // this.documentation = documentation;
    },
    created() {
    },
    methods: {}
  };
</script>
