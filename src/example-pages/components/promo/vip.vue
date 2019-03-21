<template>
  <div class="vip">
    <section class="rt-dark-theme">
      <div class="wc-inline">
        <rt-banner :is-fullscreen-image="true" background-position="top" content-min-height="500px"
                   content-height="60vh">
          <rt-banner-item background-image="/sites/default/files/img/vip/vip-bg.jpg" content-min-height="500px"
                          content-height="60vh">
            <p class="rt-font-banner-label">Эксклюзивный сервис для особых клиентов</p>
            <p class="rt-space-top">Индивидуальное обслуживание, личный менеджер и приоритетная техподдержка</p>
          </rt-banner-item>
        </rt-banner>
      </div>
    </section>

    <!-- Преимущества -->
    <section class="rt-dark-theme">
      <div class="rt-container rt-space-vertical25">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-4 rt-col-td-3">
              <img src="/sites/default/files/img/vip/1.svg">
              <p class="rt-font-paragraph rt-space-top">
                Передовые цифровые сервисы и премиальное оборудование
              </p>
            </div>
            <div class="rt-col-4 rt-col-td-3">
              <img src="/sites/default/files/img/vip/2.svg">
              <p class="rt-font-paragraph rt-space-top">
                Индивидуальный проект по подключению
              </p>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-td-space-top">
              <img src="/sites/default/files/img/vip/3.svg">
              <p class="rt-font-paragraph rt-space-top">
                Личный менеджер 24х7
              </p>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-space-top2 rt-td-space-top">
              <img src="/sites/default/files/img/vip/4.svg">
              <p class="rt-font-paragraph rt-space-top">
                Лучшие технические специалисты
              </p>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-space-top2 rt-td-space-top">
              <img src="/sites/default/files/img/vip/5.svg">
              <p class="rt-font-paragraph rt-space-top">
                Прозрачные условия и платежи
              </p>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-space-top2 rt-td-space-top">
              <img src="/sites/default/files/img/vip/6.svg">
              <p class="rt-font-paragraph rt-space-top">
                Надежная защита личных данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Тарифы -->
    <div class="tariff-scroller">
      <div class="tariff-scroller-sticky">
        <section class="rt-dark-theme">
          <div class="rt-container rt-space-vertical25 vip-tariff">
            <h2 class="rt-font-h2 rt-font-bold rt-font-center rt-font-md-left rt-space-bottom2">Тарифы</h2>
            <div class="row vip-tariff-wrapper row--mobile-wrap d-flex-nowrap">
              <div class="rt-col-4 rt-col-td-3 rt-col-md-3">
                <rt-card background-color-type="purple" :background-blur="5" :is-white-color="true">
                  <template slot="content">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Для интернета</p>
                    <div class="flex-end-bottom rt-space-bottom15">
                      <rt-price :value='1500' currency='руб'/>
                    </div>
                    <rt-button :is-block="true" class="rt-button-purple white-wave">Подключить</rt-button>
                  </template>
                  <template slot="footer">
                    <rt-annotation label="домашний интернет">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/home-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Домашний интернет</span>
                              <br>
                              <span class="color-white05 rt-font-control">от 200 Мбит/сек.</span>
                            </p></div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/kasp-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Антивирус Kaspersky Internet Security </span>
                              <br>
                              <span class="color-white05 rt-font-control">на 3 устройства</span>
                            </p></div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/child-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Родительский контроль</span>
                              <br>
                              <span class="color-white05 rt-font-control">Kaspersky Safe Kids</span>
                            </p></div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/point-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Статический IP</span>
                            </p>
                            </div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/office-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Офис 365 для дома</span>
                            </p>
                            </div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/cloud-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Облачное хранилище Unlim</span>
                            </p>
                            </div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>
                    <rt-annotation label="интерактивное ТВ">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/screen-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Мультискрин</span>
                              <br>
                              <span class="color-white05 rt-font-control">Добавление промокода Wink с пакетом «Продвинутый»</span>
                            </p></div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>
                    <rt-annotation label="мобильная связь" class="rt-annotation--empty">
                    </rt-annotation>
                    <rt-annotation label="оборудование">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/route-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">1 роутер</span>
                              <br>
                              <span class="color-white05 rt-font-control">Уже включено в тариф</span>
                            </p></div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>

                    <rt-annotation label="обслуживание">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/hand-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Личный менеджер 24/7</span>
                              <br>
                              <span class="color-white05 rt-font-control">Лучшие технические специалисты, технический аудит жилья</span>
                            </p></div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>
                  </template>
                </rt-card>
              </div>

              <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-md-space-top">
                <rt-card background-color-type="purple" :background-blur="5" :is-white-color="true">
                  <template slot="content">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Для безлимитного общения</p>
                    <div class="flex-end-bottom rt-space-bottom15">
                      <rt-price :value='2000' currency='руб'/>
                    </div>
                    <rt-button :is-block="true" class="rt-button-purple white-wave">Подключить</rt-button>
                  </template>
                  <template slot="footer">
                    <rt-annotation label="домашний интернет" class="rt-annotation--empty">
                    </rt-annotation>
                    <rt-annotation label="интерактивное ТВ" class="rt-annotation--empty">
                    </rt-annotation>
                    <rt-annotation label="мобильная связь">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/sim-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">1 сим-карта</span>
                              <br>
                              <span class="color-white05 rt-font-control">Безлимитные интернет, звонки и СМС по всей стране</span>
                            </p></div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>
                    <rt-annotation label="оборудование" class="rt-annotation--empty">
                    </rt-annotation>
                    <rt-annotation label="обслуживание">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/hand-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Личный менеджер 24/7</span>
                              <br>
                              <span class="color-white05 rt-font-control">Лучшие технические специалисты, технический аудит жилья</span>
                            </p></div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-md-space-top">
                <rt-card background-color-type="purple" :background-blur="5" :is-white-color="true">
                  <template slot="content">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Для интернета и ТВ</p>
                    <div class="flex-end-bottom rt-space-bottom15">
                      <rt-price :value='2700' currency='руб'/>
                    </div>
                    <rt-button :is-block="true" class="rt-button-purple white-wave">Подключить</rt-button>
                  </template>
                  <template slot="footer">
                    <rt-annotation label="домашний интернет">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/home-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Домашний интернет</span>
                              <br>
                              <span class="color-white05 rt-font-control">от 200 Мбит/сек.</span>
                            </p></div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/kasp-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Антивирус Kaspersky Internet Security </span>
                              <br>
                              <span class="color-white05 rt-font-control">на 3 устройства</span>
                            </p></div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/child-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Родительский контроль</span>
                              <br>
                              <span class="color-white05 rt-font-control">Kaspersky Safe Kids</span>
                            </p></div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/point-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Статический IP</span>
                            </p>
                            </div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/office-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Офис 365 для дома</span>
                            </p>
                            </div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/cloud-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Облачное хранилище Unlim</span>
                            </p>
                            </div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>
                    <rt-annotation label="интерактивное ТВ">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/tv-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">ТВ–пакет «Максимальный»</span>
                              <br>
                              <span class="color-white05 rt-font-control">272 канала</span>
                            </p></div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/play-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Управление просмотром</span>
                            </p></div>
                          </div>
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/mroom-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Мультирум</span>
                              <br>
                              <span class="color-white05 rt-font-control">До 3 приставок</span>
                            </p></div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>
                    <rt-annotation label="мобильная связь" class="rt-annotation--empty">
                    </rt-annotation>
                    <rt-annotation label="оборудование">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/route-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">1 роутер</span>
                              <br>
                              <span class="color-white05 rt-font-control">Уже включено в тариф</span>
                            </p></div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>

                    <rt-annotation label="обслуживание">
                      <template slot="content">
                        <div class="rt-card-list">
                          <div class="rt-card-list__item">
                            <div class="rt-card-list__icon"><img src="/static/images/vip/hand-i.svg"></div>
                            <div class="rt-card-list__name"><p class="rt-font-small-paragraph color-white">
                              <span class="rt-font-control rt-font-bold">Личный менеджер 24/7</span>
                              <br>
                              <span class="color-white05 rt-font-control">Лучшие технические специалисты, технический аудит жилья</span>
                            </p></div>
                          </div>
                        </div>
                      </template>
                    </rt-annotation>
                  </template>
                </rt-card>
              </div>
            </div>
          </div>
        </section>

        <!-- Цифровые сервисы -->
        <section class="rt-dark-theme">
          <div class=" rt-space-vertical25">
            <h2 class="rt-font-h2 rt-font-bold rt-font-center rt-font-md-left">Цифровые сервисы</h2>
            <div class="rt-scroll-list rt-space-top4">
              <div class="horizontal-scroll-container">
                <div class="rt-container">
                  <div class="row rt-space-bottom row-nowrap">
                    <div class="rt-col-5 rt-col-td3 rt-col-md-2">
                      <div class="vip-list-img-container"><img class="vip-list-img-1" src="/static/images/vip/1.png"
                                                               alt="">
                      </div>
                      <p class="rt-font-h3 rt-space-bottom  rt-space-top15">Защита данных на устройсвах и онлайн с
                        Антивирус
                        Kaspersky Internet Security </p>
                      <p>Обеспечение конфиденциальности личных данных, паролей и банковских карт. Комплексная защита
                        всех
                        действий в сети. одновременно на 3-х устройствах</p>

                    </div>
                    <div class="rt-col-5 rt-col-td3 rt-col-md-2">
                      <div class="vip-list-img-container"><img class="vip-list-img-2" src="/static/images/vip/2.png"
                                                               alt="">
                      </div>
                      <p class="rt-font-h3 rt-space-bottom  rt-space-top15">Безопасность детей в ваших руках </p>
                      <p>Программа родительского контроля Kaspersky Safe Kids защитит детей от неподходящей информации в
                        сети, а также определит их точное местоположение на карте.</p>

                    </div>
                    <div class="rt-col-5 rt-col-td3 rt-col-md-2">
                      <div class="vip-list-img-container"><img class="vip-list-img-3" src="/static/images/vip/3.png"
                                                               alt="">
                      </div>
                      <p class="rt-font-h3 rt-space-bottom  rt-space-top15">Статический IP</p>
                      <p>Постоянный адрес в интернете позволит быстро скачивать файлы в файлообменных сетях, повысить
                        безопасность работы с интернет-банками, свободно играть в сетевые игры.</p>

                    </div>
                    <div class="rt-col-5 rt-col-td3 rt-col-md-2">
                      <div class="vip-list-img-container"><img class="vip-list-img-4" src="/static/images/vip/4.png"
                                                               alt="">
                      </div>
                      <p class="rt-font-h3 rt-space-bottom  rt-space-top15">Wink</p>
                      <p>101 канал и более 1000 фильмов мировых и Российский студий с любого устройства в приложении
                        Wink</p>

                    </div>
                    <div class="rt-col-1">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- Шаги подключения -->
    <section class="vip-iphone-wrapper rt-space-top25">
      <h2 class="rt-font-h2 rt-font-bold rt-font-center color-white rt-font-md-left vip-iphone-title">Как подключить
        VIP-тариф</h2>
      <div class="d-flex flex-fill">
        <div class="vip-iphone-container">
          <div class="rt-container">
            <div class="rt-col">

              <div class="flex-center-center rt-space-top2 vip-background">
                <div class="vip-iphone">
                  <div class="vip-iphone__inner"></div>
                  <p class="vip-iphone-text-step d-none md-d-block rt-font-h1 rt-font-bold color-purple">1 шаг</p>
                  <p
                    class="vip-iphone-text-title rt-space-vertical05 d-none rt-font-paragraph rt-font-bold color-white md-d-block">
                    Помощь в математике</p>
                  <p class="vip-iphone-text vip-iphone-text-eq1">

                    Обсудите ваши пожелания и цели с персональным
                    ассистентом банка ВТБ
                  </p>
                  <p
                    class="vip-iphone-text-step d-none md-d-block rt-font-h1 rt-font-bold color-purple rt-md-space-top2">
                    2 шаг</p>
                  <p
                    class="vip-iphone-text-title rt-space-vertical05 d-none rt-font-paragraph rt-font-bold color-white md-d-block">
                    Планирование бюджета</p>
                  <p class="vip-iphone-text vip-iphone-text-eq2">Личный менеджер Ростелекома согласует удобный для вас
                    день, чтобы специалисты провели аудит квартиры и подготовили проект подключения
                  </p>
                  <p
                    class="vip-iphone-text-step d-none md-d-block rt-font-h1 rt-font-bold color-purple rt-md-space-top2">
                    3 шаг</p>
                  <p
                    class="vip-iphone-text-title rt-space-vertical05 d-none rt-font-paragraph rt-font-bold color-white md-d-block">
                    Выявление программ-шантажистов</p>
                  <p class="vip-iphone-text vip-iphone-text-eq3">Бригада специалистов установит и настроит оборудование,
                    после чего ваш личный менеджер поможет в подключении дополнительных сервисов
                  </p>
                  <p
                    class="vip-iphone-text-step d-none md-d-block rt-font-h1 rt-font-bold color-purple rt-md-space-top2">
                    4 шаг</p>
                  <p
                    class="vip-iphone-text-title rt-space-vertical05 d-none rt-font-paragraph rt-font-bold color-white md-d-block">
                    Планирование бюджета</p>
                  <p class="vip-iphone-text vip-iphone-text-eq4">Бригада специалистов установит и настроит оборудование,
                    после чего ваш личный менеджер поможет в подключении дополнительных сервисов
                  </p>
                  <div class="vip-iphone-count"><span class="vip-iphone-count__value"> 1 </span> / 4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Слайдер -->
    <section class="rt-dark-theme">
      <div class="wc-inline">
        <rt-banner :is-fullscreen-image="true" class="rt-banner--fill-height" content-min-height="500px"
                   content-height="40vh">
          <rt-banner-item background-image="/sites/default/files/img/vip/vip-slide-1.jpg" content-min-height="500px"
                          content-height="40vh">
            <div class="rt-md-space-right2">
              <div class="row rt-col">
                <div class="rt-space-vertical">
                  <rt-color-line-text fill-color="purple" color-icon="black" :is-white-color="true">
                    <template slot="label">Видеонаблюдение</template>
                  </rt-color-line-text>
                  <p class="rt-font-paragraph rt-space-top">Заглядывайте домой из&nbsp;любой точки мира, Наблюдайте
                    за&nbsp;вашим
                    домом на&nbsp;экране компьютера, смартфона или&nbsp;планшета&nbsp;— в&nbsp;режиме реального времени
                    или&nbsp;в&nbsp;записи.</p>
                </div>
              </div>
              <div class="rt-space-top rt-md-space-top color-white">
                <a href="/videocontrol">
                  <rt-button class="rt-button-purple">Подробнее</rt-button>
                </a>
              </div>
            </div>
          </rt-banner-item>
          <rt-banner-item background-image="/sites/default/files/img/vip/vip-slide-2.jpg" content-min-height="500px"
                          content-height="40vh">
            <div class="rt-md-space-right2">
              <div class="row rt-col">
                <div class="rt-space-vertical">
                  <rt-color-line-text fill-color="purple" color-icon="black" :is-white-color="true">
                    <template slot="label">Умный дом</template>
                  </rt-color-line-text>
                  <p class="rt-font-paragraph rt-space-top">Ваш дом под&nbsp;контролем, даже когда вы&nbsp;далеко.
                    Система
                    датчиков и&nbsp;устройств моментально уведомит вас о&nbsp;любом происшествии и&nbsp;позволит
                    удаленно
                    управлять бытовой техникой
                    с&nbsp;помощью смартфона.</p>
                </div>
              </div>
              <div class="rt-space-top rt-md-space-top color-white">
                <a href="/smart_house">
                  <rt-button class="rt-button-purple">Подробнее</rt-button>
                </a>
              </div>
            </div>
          </rt-banner-item>
          <rt-banner-item background-image="/sites/default/files/img/vip/vip-slide-3.jpg" content-min-height="500px"
                          content-height="40vh">
            <div class="rt-md-space-right2">
              <div class="row rt-col">
                <div class="rt-space-vertical">
                  <rt-color-line-text fill-color="purple" color-icon="black" :is-white-color="true">
                    <template slot="label">Ростелеком Лицей</template>
                  </rt-color-line-text>
                  <p class="rt-font-paragraph rt-space-top">Образовательный сервис Ростелеком Лицей&nbsp;– онлайн курсы
                    и&nbsp;тренажеры по&nbsp;подготовке к&nbsp;экзаменам с&nbsp;преподавателями из&nbsp;ведущих вузов
                    страны.</p>
                </div>
              </div>
              <div class="rt-space-top rt-md-space-top color-white">
                <a href="https://lc.rt.ru/" target="_blank">
                  <rt-button class="rt-button-purple">Подробнее</rt-button>
                </a>
              </div>
            </div>
          </rt-banner-item>
        </rt-banner>
      </div>
    </section>

    <!-- Примечание -->
    <section class="rt-dark-theme">
      <div class="wc-inline">
        <div class="rt-container rt-space-vertical2 color-main07">
          <div class="rt-col">
            <rt-annotation class="color-white" label="Примечание">
              <template slot="content">
                <p class="rt-annotation-item rt-font-bold rt-font-small-paragraph">Тарифный план «Для Интернета
                  Премиум»</p>
                <p class="rt-annotation-item">Услуга «Домашний Интернет» (далее - Услуга) предоставляется при наличии
                  технической возможности.</p>
                <p class="rt-annotation-item">Публичная оферта (договор на оказание услуг).</p>
                <p class="rt-annotation-item">Цены указаны в рублях с учетом НДС. «По оптической линии» — предоставление
                  доступа к сети Интернет осуществляется по технологии FTTx (англ., fiber to the x — оптическое волокно
                  до
                  точки X) или по технологии PON (англ. Passive Optical Networks — пассивная оптическая сеть до
                  абонента).
                  «По телефонной линии» — предоставление доступа к сети Интернет осуществляется по технологии xDSL
                  (англ.,
                  digital subscriber line, цифровая абонентская линия).</p>
                <p class="rt-annotation-item">Предоставление доступа к сети Интернет осуществляется по технологии xDSL
                  (англ., digital subscriber line, цифровая абонентская линия). Скорость доступа к сети Интернет зависит
                  не
                  только от технических особенностей Услуги, но и от действий третьих сил, организаций и лиц,
                  управляющих
                  сегментами сети Интернет (или оказывающих на них влияние), не принадлежащих ПАО «Ростелеком». Скорость
                  доступа к сети Интернет является величиной неопределенной и зависит от ряда параметров, в том числе,
                  технических характеристик подключения, маршрута и текущей загрузки каналов, характеристиками
                  установленного абонентского оборудования (ПК, смартфон, WiFi-роутер), версией программного обеспечения
                  или используемого стандарта, месторасположением запрашиваемого контента. Все параметры являются
                  переменными и не гарантируются ПАО «Ростелеком» за пределами своей сети. Указанная в тарифном плане
                  скорость является максимально возможной.</p>
                <p class="rt-annotation-item">Абонентская плата за услугу Интернет списывается с лицевого счета абонента
                  один раз в месяц. В первый месяц пользования услугой Интернет с лицевого счета абонента списывается
                  абонентская плата, рассчитанная пропорционально количеству дней от даты начала оказания услуги до
                  конца
                  месяца.</p>
                <p class="rt-annotation-item">Оборудование (маршрутизатор или абонентский модем в зависимости от
                  технологии
                  предоставления Услуги), необходимое для получения услуг, может быть приобретено отдельно по
                  действующим
                  тарифам. Стоимость оборудования уточняйте по телефону 8-800-302-00-20.</p>
                <p class="rt-annotation-item">В тарифный план включена Опция «Яндекс.Диск Unlim» —объем дискового
                  пространства, выделяемый Абоненту Тарифного плана в Яндекс.Диск для хранения файлов. В первый месяц
                  пользования в рамках Опции Unlim Абоненту предоставляется 1 ТБ дискового пространства в Яндекс Диск.
                  Далее каждые 30 суток объем предоставленного дискового пространства увеличивается на 1 ТБ ежемесячно.
                  Стоимость опции включена в стоимость тарифного плана и отдельно не взимается. Опция предоставляется
                  при
                  наличии технической возможности.</p>
                <p class="rt-annotation-item">В тарифный план включена Опция Kaspersky Safe Kids —Сэйф кидс (с англ. —
                  «Безопасность детей») услуга (на 1 устройство), которая заключается в ограничении доступа к
                  определенного
                  рода сайтам и иным страницам в сети Интернет, содержание которых запрещено к показу несовершеннолетним
                  и
                  которое может негативно повлиять на физиологическое и психическое развитие ребенка. Подробности об
                  услуге
                  узнавайте по бесплатному номеру 8-800-302-00-20, а также на сайте www.rt.ru. Стоимость опции включена
                  в
                  стоимость тарифного плана и отдельно не взимается.</p>
                <p class="rt-annotation-item">В тарифный план включена Опция Office 365 - Продукт Microsoft, включающий
                  офисные приложения Microsoft Office, устанавливаемые на оборудование Абонента, и веб-сервисы,
                  размещенные
                  на серверах Microsoft, возможность использования которых и доcтуп к которым для использования их
                  функциональности предоставляется Абоненту на срок, равный 365 дням с момента активации Ключа продукта
                  в
                  Личном кабинете Microsoft. Стоимость опции включена в стоимость тарифного плана и отдельно не
                  взимается.</p>
                <p class="rt-annotation-item">В тарифный план включена Опция Антивирус Kaspersky Internet Security –
                  программное обеспечение для ПК, разрабатываемое ЗАО «Лаборатория Касперского» и предоставляемое
                  Оператором в соответствии с лицензионным договором в целях реализации среди конечных пользователей.
                  Стоимость опции включена в стоимость тарифного плана и отдельно не взимается.</p>
                <p class="rt-annotation-item">Оборудование за 10 руб. в месяц предоставляется на условиях Акции «Пакеты
                  Премиум»— возможность для физ. лиц при подключении Пакета, определенного в условиях Акции, получить
                  оборудование в аренду за 10 руб./мес. </p>
                <p class="rt-annotation-item">При подключении тарифного плана «Для Интернета Премиум» абоненту
                  предоставляется промокод, который дает доступ к подключению пакета телеканалов «Продвинутый» (190
                  ТВ-каналов) на сайте wink.rt.ru и в приложении Wink через App Store, Google Play, Apple TV или Samsung
                  Smart TV. </p>
                <p class="rt-annotation-item rt-font-bold rt-font-small-paragraph">Тарифный план «Для Интернета и ТВ
                  Премиум»</p>
                <p class="rt-annotation-item">Услуга «Домашний Интернет» (далее - Услуга) предоставляется при наличии
                  технической возможности.</p>
                <p class="rt-annotation-item">Публичная оферта (договор на оказание услуг).</p>
                <p class="rt-annotation-item">Цены указаны в рублях с учетом НДС. «По оптической линии» — предоставление
                  доступа к сети Интернет осуществляется по технологии FTTx (англ., fiber to the x — оптическое волокно
                  до
                  точки X) или по технологии PON (англ. Passive Optical Networks — пассивная оптическая сеть до
                  абонента).
                  «По телефонной линии» — предоставление доступа к сети Интернет осуществляется по технологии xDSL
                  (англ.,
                  digital subscriber line, цифровая абонентская линия).</p>
                <p class="rt-annotation-item">Предоставление доступа к сети Интернет осуществляется по технологии xDSL
                  (англ., digital subscriber line, цифровая абонентская линия). Скорость доступа к сети Интернет зависит
                  не
                  только от технических особенностей Услуги, но и от действий третьих сил, организаций и лиц,
                  управляющих
                  сегментами сети Интернет (или оказывающих на них влияние), не принадлежащих ПАО «Ростелеком». Скорость
                  доступа к сети Интернет является величиной неопределенной и зависит от ряда параметров, в том числе,
                  технических характеристик подключения, маршрута и текущей загрузки каналов, характеристиками
                  установленного абонентского оборудования (ПК, смартфон, WiFi-роутер), версией программного обеспечения
                  или используемого стандарта, месторасположением запрашиваемого контента. Все параметры являются
                  переменными и не гарантируются ПАО «Ростелеком» за пределами своей сети. Указанная в тарифном плане
                  скорость является максимально возможной.</p>
                <p class="rt-annotation-item">Абонентская плата за услугу Интернет списывается с лицевого счета абонента
                  один раз в месяц. В первый месяц пользования услугой Интернет с лицевого счета абонента списывается
                  абонентская плата, рассчитанная пропорционально количеству дней от даты начала оказания услуги до
                  конца
                  месяца.</p>
                <p class="rt-annotation-item">Оборудование (маршрутизатор или абонентский модем в зависимости от
                  технологии
                  предоставления услуги), необходимое для получения услуг, может быть приобретено отдельно по
                  действующим
                  тарифам. Стоимость оборудования уточняйте по телефону 8-800-302-00-20.</p>
                <p class="rt-annotation-item">В тарифный план включена Опция «Яндекс.Диск Unlim» —объем дискового
                  пространства, выделяемый Абоненту Тарифного плана в Яндекс.Диск для хранения файлов. В первый месяц
                  пользования в рамках Опции Unlim Абоненту предоставляется 1 ТБ дискового пространства в Яндекс Диск.
                  Далее каждые 30 суток объем предоставленного дискового пространства увеличивается на 1 ТБ ежемесячно.
                  Стоимость опции включена в стоимость тарифного плана и отдельно не взимается. Опция предоставляется
                  при
                  наличии технической возможности.</p>
                <p class="rt-annotation-item">В тарифный план включена Опция Kaspersky Safe Kids —Сэйф кидс (с англ. —
                  «Безопасность детей») услуга (на 1 устройство), которая заключается в ограничении доступа к
                  определенного
                  рода сайтам и иным страницам в сети Интернет, содержание которых запрещено к показу несовершеннолетним
                  и
                  которое может негативно повлиять на физиологическое и психическое развитие ребенка. Подробности об
                  услуге
                  узнавайте по бесплатному номеру 8-800-302-00-20, а также на сайте www.rt.ru. Стоимость опции включена
                  в
                  стоимость тарифного плана и отдельно не взимается.</p>
                <p class="rt-annotation-item">В тарифный план включена Опция Office 365 - Продукт Microsoft, включающий
                  офисные приложения Microsoft Office, устанавливаемые на оборудование Абонента, и веб-сервисы,
                  размещенные
                  на серверах Microsoft, возможность использования которых и доступ к которым для использования их
                  функциональности предоставляется Абоненту на срок, равный 365 дням с момента активации Ключа продукта
                  в
                  Личном кабинете Microsoft. Стоимость опции включена в стоимость тарифного плана и отдельно не
                  взимается.</p>
                <p class="rt-annotation-item">В тарифный план включена Опция Антивирус Kaspersky Internet Security –
                  программное обеспечение для ПК, разрабатываемое ЗАО «Лаборатория Касперского» и предоставляемое
                  Оператором в соответствии с лицензионным договором в целях реализации среди конечных пользователей.
                  Стоимость опции включена в стоимость тарифного плана и отдельно не взимается.</p>
                <p class="rt-annotation-item">Оборудование за 10 руб. в месяц предоставляется на условиях Акции «Пакеты
                  Премиум»— возможность для физ. лиц при подключении Пакета, определенного в условиях Акции, получить
                  оборудование в аренду за 10 руб./мес.</p>
                <p class="rt-annotation-item">При подключении тарифного плана «Для Интернета и ТВ Премиум» абоненту
                  предоставляется промокод, который дает доступ к подключению пакета телеканалов «Продвинутый» (190
                  ТВ-каналов) на сайте wink.rt.ru и в приложении Wink через App Store, Google Play, Apple TV или Samsung
                  Smart TV. </p>
                <p class="rt-annotation-item">Тарифный план включает ТВ пакет «Максимальный» (264 ТВ-канала)</p>
                <p class="rt-annotation-item">Оборудование для ТВ, предоставляемое в аренду за 10 руб./мес. с НДС в
                  рамках
                  Акции «Пакеты Премиум».</p>
                <p class="rt-annotation-item rt-font-bold rt-font-small-paragraph">MVNO. Для безлимитного общения</p>
                <p class="rt-annotation-item">Безлимитный интернет доступен Абонентам в поездках по России, за
                  исключением
                  Республики Крым и г. Севастополь, при регистрации в сети в ПАО Ростелеком. В поездках за границей
                  безлимитный интернет в рамках тарифного плана не предоставляется. Безлимитный интернет, включенный в
                  тариф, предоставляет возможность потреблять интернет-трафик безлимитно с любых ресурсов при
                  регистрации
                  в
                  сети ПАО «Ростелеком». В случае, если абонент зарегистрировался на сетях других операторов связи,
                  скорость доступа в интернет составит до 128 кбит/с. Округление интернет-трафика - до 150 КБ в большую
                  сторону.</p>
                <p class="rt-annotation-item">Тарифный план предназначен для смартфонов. При создании Абонентом
                  значительной нагрузки на сеть, скорость мобильного интернета не может быть гарантирована.</p>
                <p class="rt-annotation-item">Городские и мобильные телефоны Ростелеком — телефонные номера, входящие в
                  ресурс нумерации ПАО «Ростелеком».</p>
                <p class="rt-annotation-item">Все цены включают НДС.</p>
                <p class="rt-annotation-item">Тарификация всех вызовов поминутная.</p>
                <p class="rt-annotation-item">В роуминге по России (за исключением Республики Крым и г. Севастополь)
                  исходящие звонки на номера региона пребывания расходуют пакет минут.</p>
                <p class="rt-annotation-item">Для проверки остатков по пакетам наберите *100*12#</p>
                <p class="rt-annotation-item">Исходящие вызовы до 3 сек. не тарифицируются.</p>
                </p>
              </template>
            </rt-annotation>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
  .rtk-footer {
    background-color: #101828 !important;
  }

  .rtk-footer__phone-number,
  .rtk-footer__copyright,
  .rtk-date {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .rt-annotation-item {
    color: rgba(255, 255, 255, 0.5);
  }
</style>
<script>
  const componentsList = {};

  export default {
    name: "AppPromoVip",
    components: componentsList,
    mounted() {
      var { height } = document.querySelector(".vip-iphone-wrapper").getBoundingClientRect();
      const step = height * 0.8 / 4;
      var slideIndexBefore = null;
      var needToScroll = false;
      var setHeight = function() {
        var cols = document.querySelectorAll(".vip-tariff-wrapper .rt-col-4");
        var colsWidht = cols[0].clientWidth;
        var colsSize = cols.length;
        var wWidth = document.body.clientWidth;
        console.info('colsWidht * colsSize > wWidth',colsWidht * colsSize > wWidth);
        if (colsWidht * colsSize > wWidth) {
          needToScroll = true;
          var containerHeight = document.querySelector(".tariff-scroller-sticky").clientHeight;
          document.querySelector(".tariff-scroller").style.height = containerHeight - wWidth + colsWidht * colsSize;
        }else{
          if(document.querySelector(".tariff-scroller").style.height){
            document.querySelector(".tariff-scroller").style.height = null;
          }
          needToScroll = false
        }
      };
      window.addEventListener("resize", function(e) {
        console.info('resize')
        setHeight();
      })
      setHeight();
      document.addEventListener("scroll", function(e) {
        var iphoneWrapperTop = document.querySelector(".vip-iphone-wrapper").getBoundingClientRect().top;
        var iphoneWrapperHeight = document.querySelector(".vip-iphone-wrapper").getBoundingClientRect().height;
        var tariffWrapperTop = document.querySelector(".vip-tariff-wrapper").getBoundingClientRect().top;
        var tariffWrapperOffsetTop = document.querySelector(".vip-tariff-wrapper").offsetTop;
        var tariffWrapperHeight = document.querySelector(".vip-tariff-wrapper").getBoundingClientRect().height;
        var tariffWrapperWidth = document.querySelector(".vip-tariff-wrapper").getBoundingClientRect().width;
        var tariffWrapper = document.querySelector(".vip-tariff-wrapper");
        if (needToScroll && tariffWrapperTop <= tariffWrapperOffsetTop && Math.abs(tariffWrapperTop) < tariffWrapperHeight) {
          if (tariffWrapperTop === tariffWrapperOffsetTop) {

            tariffWrapper.style.transform = "translateX(" + (document.querySelector(".vip-iphone-wrapper").getBoundingClientRect().top - document.querySelector(".tariff-scroller").getBoundingClientRect().height) + "px)";
          }else{
            if(tariffWrapper.style.transform){
              tariffWrapper.style.transform = 0
            }
          }
          // document.querySelector(".vip-tariff-wrapper").style.marginLeft = (document.querySelector(".vip-iphone-wrapper").getBoundingClientRect().top - document.querySelector(".tariff-scroller").getBoundingClientRect().height)+'px';
          // console.info("document.querySelector(\".vip-iphone-wrapper\").getBoundingClientRect().top - document.querySelector(\".vip-iphone-wrapper\").getBoundingClientRect().height - document.body.clientHeight");
          // console.info('document.querySelector(".vip-iphone-wrapper").getBoundingClientRect()',document.querySelector(".vip-iphone-wrapper").getClientRects()[0] ,(window.pageYOffset || document.scrollTop)  - (document.clientTop || 0))
          // console.info(Math.abs(tariffWrapperTop - 136),document.querySelector(".vip-tariff-wrapper").getClientRects()[0])
          // console.info("this!!", tariffWrapperTop, (window.pageYOffset || document.scrollTop) - (document.clientTop || 0), document.querySelector(".vip-iphone-wrapper").getBoundingClientRect());
          // console.info("document.querySelector(\".vip-tariff-wrapper\").getClientRects()[0]", document.querySelector(".vip-tariff-wrapper").getClientRects()[0]);
        } else {
          // console.info("tariffWrapperTop", tariffWrapperTop);
        }
        if (iphoneWrapperTop < 0 && Math.abs(iphoneWrapperTop) < iphoneWrapperHeight) {
          var slideIndex = parseInt(Math.abs(iphoneWrapperTop) / step) + 1;

          if (slideIndex > 4) {
            slideIndex = 4;
          }

          if (slideIndexBefore !== slideIndex) {
            if (slideIndexBefore != null) {
              document.querySelector(".vip-iphone-wrapper").classList.remove("vip-iphone--step-" + slideIndexBefore);
            }
            slideIndexBefore = slideIndex;
            document.querySelector(".vip-iphone-wrapper").classList.add("vip-iphone--step-" + slideIndex);
            document.querySelector(".vip-iphone-count__value").innerHTML = slideIndex;
          }

        }

      });
    },
    created() {
    },
    methods: {}
  };
</script>
