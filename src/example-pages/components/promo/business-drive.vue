<template>
  <div class="business-drive">
    <div class="business-drive__header color-block--white">
      <div class="rt-container">
        <div class="rt-col">
          <rt-logo height="40px" width="24px" top-fill-color="b2b-state" />
          <div class="mobile-burger-wrapper">
            <div class="mobile-burger"/>
          </div>
          <div class="business-drive__header-menu">
            <div class="business-drive__tabs-wrapper">
              <rt-scroll-tabs class="rt-scroll-tab-header rt-font-bold"
                              active-tabs-classname="rt-scroll-tab-header__item--active"
                              tabs-classname="rt-scroll-tab-header__item"
                              :top-padding="150"
                              :remove-base-tag="false">
                <div class="rt-scroll-tab-nav">
                  <a class="rt-scroll-tab-header__item" href="#one">Спикеры</a>
                  <a class="rt-scroll-tab-header__item" href="#two">Программа</a>
                  <a class="rt-scroll-tab-header__item" href="#three">Как это было</a>
                  <a class="rt-scroll-tab-header__item" href="#four">Как добраться</a>
                </div>
              </rt-scroll-tabs>
            </div>
            <div class="button-wrapper">
              <a href="#registration-form">
                <rt-button class="rt-button-small rt-button-orange">Регистрация</rt-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block--dark-blue-low color-white rt-font-bold">
      <div class="rt-container">
        <div class="rt-col">
          <div class="animated-text">
            <div class="animated-text__line animated-text__first-line">Бизнес</div>
            <div class="animated-text__line animated-text__second-line">
              <span class="animated-text__line-item">конференция</span>
            </div>
            <div class="animated-text__line animated-text__third-line">
              <span class="animated-text__line-item">событие тренинг</span>
            </div>
            <div class="animated-text__line animated-text__fourth-line">
              <span class="animated-text__line-item">мероприятие</span>
            </div>
            <div class="animated-text__line animated-text__fifth-line">
            <span class="animated-text__line-item color-orange">драйв
              <div class="color-white animated-text__footnote">
                <div class="animated-text__line animated-text__sixth-line">Меньше слов -</div>
                <div class="animated-text__line animated-text__seventh-line">больше дела</div>
              </div>
            </span>
            </div>
            <div class="animated-text__line animated-text__eighth-line">
              <div class="meeting-legend">Тюмень, БЦ Аметист
                <div class="icon navigation-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path fill="#FF4F12" fill-rule="evenodd" d="M0 15h15v15h1.667L30 0 0 13.333z"/>
                  </svg>
                </div>
              </div>
              <div class="meeting-legend">22 мая
                <div class="icon calendar-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <g fill="#FF4E00">
                      <path d="M30 30H0V3.158h5.893v4.64H4.64V25.39h20.722V7.798h-1.317v-4.64H30z"/>
                      <path d="M7.895 0h4.737v9.474H7.895zm9.473 0h4.737v9.474h-4.737zm-4.736 3.158h3.158v4.737h-3.158z"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="rt-space-top2">
              <div class="animated-text__line animated-text__eighth-line">
                <div class="button-bounce">
                  <rt-button class="rt-button-orange">Принять участие</rt-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="first-gradient-section">
      <div class="rt-container">
        <div class="rt-col">
          <div id="one">
            <h2 class="rt-font-h2 color-white rt-space-bottom05 rt-font-bold">Без «воды», без общих слов</h2>
            <h3 class="rt-font-h3 color-white03 rt-space-bottom">Наши спикеры вовлекают качеством контента, <br>а не киловаттами света и звука</h3>
            <rt-portrait-tile>
              <rt-portrait-tile-item photo="/static/images/B2B/business__drive/photo1.png" :small-image="true">
                <template slot="title">Михаил Качалкин</template>
                <template slot="theme">Техника знакомства<br> и получения полезных<br> для бизнеса контактов и получения полезных<br> для бизнеса контактов</template>
                <template slot="reputation">
                  <p class="rt-font-paragraph td-d-none">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                </template>
                <template slot="description">
                  <p class="rt-font-small-paragraph rt-space-bottom">Основатель Агентства «Умные метрики». С 2007 года занимался
                    построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                    «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                    Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                  <p class="rt-font-small-paragraph rt-space-bottom">Являясь директором по маркетингу, создавал уникальный клиентский
                    сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                    востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                  <p class="rt-font-small-paragraph">Разработал свою методологию построения «Матрицы сервисных
                    сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                    клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                </template>
              </rt-portrait-tile-item>
              <rt-portrait-tile-item photo="/static/images/B2B/business__drive/photo2.png" :small-image="true">
                <template slot="title">Михаил Качалкин</template>
                <template slot="theme">Техника знакомства<br> и получения полезных<br> для бизнеса контактов</template>
                <template slot="reputation">
                  <p class="rt-font-paragraph td-d-none">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                </template>
                <template slot="description">
                  <p class="rt-font-small-paragraph rt-space-bottom">Являясь директором по маркетингу, создавал уникальный клиентский
                    сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                    востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                  <p class="rt-font-small-paragraph rt-space-bottom">Разработал свою методологию построения «Матрицы сервисных
                    сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                    клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                  <p class="rt-font-small-paragraph">Основатель Агентства «Умные метрики». С 2007 года занимался
                    построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                    «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                    Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                </template>
              </rt-portrait-tile-item>
              <rt-portrait-tile-item photo="/static/images/B2B/business__drive/photo3.png" :small-image="true">
                <template slot="title">Михаил Качалкин</template>
                <template slot="theme">Техника знакомства<br> и получения полезных<br> для бизнеса контактов</template>
                <template slot="reputation">
                  <p class="rt-font-paragraph td-d-none">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                </template>
                <template slot="description">
                  <p class="rt-font-small-paragraph rt-space-bottom">Разработал свою методологию построения «Матрицы сервисных
                    сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                    клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                  <p class="rt-font-small-paragraph rt-space-bottom">Основатель Агентства «Умные метрики». С 2007 года занимался
                    построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                    «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                    Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                  <p class="rt-font-small-paragraph">Являясь директором по маркетингу, создавал уникальный клиентский
                    сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                    востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                </template>
              </rt-portrait-tile-item>
              <rt-portrait-tile-item photo="/static/images/B2B/business__drive/photo4.png">
                <template slot="title">Михаил Качалкин</template>
                <template slot="theme">Техника знакомства<br> и получения полезных<br> для бизнеса контактов</template>
                <template slot="reputation">
                  <p class="rt-font-paragraph td-d-none">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                </template>
                <template slot="description">
                  <p class="rt-font-small-paragraph rt-space-bottom">Разработал свою методологию построения «Матрицы сервисных
                    сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                    клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                  <p class="rt-font-small-paragraph rt-space-bottom">Являясь директором по маркетингу, создавал уникальный клиентский
                    сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                    востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                  <p class="rt-font-small-paragraph">Основатель Агентства «Умные метрики». С 2007 года занимался
                    построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                    «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                    Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                </template>
              </rt-portrait-tile-item>
              <rt-portrait-tile-item photo="/static/images/B2B/business__drive/photo4.png">
                <template slot="title">Михаил Качалкин</template>
                <template slot="theme">Техника знакомства<br> и получения полезных<br> для бизнеса контактов</template>
                <template slot="reputation">
                  <p class="rt-font-paragraph td-d-none">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                </template>
                <template slot="description">
                  <p class="rt-font-small-paragraph rt-space-bottom">Разработал свою методологию построения «Матрицы сервисных
                    сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                    клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                  <p class="rt-font-small-paragraph rt-space-bottom">Являясь директором по маркетингу, создавал уникальный клиентский
                    сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                    востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                  <p class="rt-font-small-paragraph">Основатель Агентства «Умные метрики». С 2007 года занимался
                    построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                    «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                    Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                </template>
              </rt-portrait-tile-item>
            </rt-portrait-tile>
            <div class="row">
              <div class="rt-col-2 rt-col-td-1 md-d-none"/>
              <div class="rt-col-8 rt-col-td-4 rt-col-md-3">
                <div class="business-drive__motto color-white03">
                  <h1 class="rt-font-bold rt-font-h1 business-drive__motto-text">Бизнесу не нужны слова, ему нужно работать, чтобы развиваться.
                    Предприниматели — люди дела, у них нет времени на пустые разговоры</h1>
                </div>
              </div>
              <div class="rt-col-2 rt-col-td-1 md-d-none"/>
            </div>
          </div>
          <div id="two">
            <div class="row">
              <div class="rt-col-8 rt-col-td-6 rt-space-bottom4">
                <h2 class="rt-font-h2 color-orange rt-space-bottom05 rt-font-bold">Программа</h2>
                <p class="address-text color-white03">Встречаемся 22 мая в Лотте Отеле, ул. Семеновская, д. 29. <br>Без
                  «воды», без общих слов, все четко и по делу</p>
              </div>
            </div>
            <div class="row">
              <div class="rt-col-1 td-d-none"/>
              <div class="rt-col-10 rt-col-td-6 rt-col-md-3">
                <rt-timeline>
                  <rt-timeline-item>
                    <template slot="time-stamp">09:30</template>
                    <template slot="theme">Сбор участников,<br class="desktop-only"> регистрация</template>
                  </rt-timeline-item>
                  <rt-timeline-item top-margin="50">
                    <template slot="time-stamp">10:00</template>
                    <template slot="theme">Открытие <br class="desktop-only">конференции</template>
                  </rt-timeline-item>
                  <rt-timeline-item
                    :important="true"
                    image="/static/images/B2B/business__drive/photo1.png"
                    top-margin="10"
                    :speaker-event="true">
                    <template slot="time-stamp">10:15</template>
                    <template slot="theme">Техника знакомства<br> и получения полезных<br> для бизнеса контактов</template>
                    <template slot="speaker-name">Владимир Маринович</template>
                    <template slot="reputation">
                      <p class="rt-font-paragraph">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                    </template>
                    <template slot="description">
                      <p class="rt-font-small-paragraph rt-space-bottom">Основатель Агентства «Умные метрики». С 2007 года занимался
                        построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                        «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                        Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                      <p class="rt-font-small-paragraph rt-space-bottom">Являясь директором по маркетингу, создавал уникальный клиентский
                        сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                        востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                      <p class="rt-font-small-paragraph">Разработал свою методологию построения «Матрицы сервисных
                        сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                        клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                    </template>
                  </rt-timeline-item>
                  <rt-timeline-item
                    :important="true"
                    image="/static/images/B2B/business__drive/photo3.png"
                    top-margin="-50"
                    :speaker-event="true">
                    <template slot="time-stamp">10:45</template>
                    <template slot="theme">Маркетинг для малого <br>бизнеса: пошаговое <br>планирование</template>
                    <template slot="speaker-name">Антон Шаяхов</template>
                    <template slot="reputation">
                      <p class="rt-font-paragraph">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                    </template>
                    <template slot="description">
                      <p class="rt-font-small-paragraph rt-space-bottom">Являясь директором по маркетингу, создавал уникальный клиентский
                        сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                        востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                      <p class="rt-font-small-paragraph rt-space-bottom">Разработал свою методологию построения «Матрицы сервисных
                        сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                        клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                      <p class="rt-font-small-paragraph">Основатель Агентства «Умные метрики». С 2007 года занимался
                        построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                        «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                        Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                    </template>
                  </rt-timeline-item>
                  <rt-timeline-item top-margin="-20">
                    <template slot="time-stamp">12:15</template>
                    <template slot="theme">Кофе-брейк</template>
                  </rt-timeline-item>
                  <rt-timeline-item
                    :important="true"
                    image="/static/images/B2B/business__drive/photo1.png"
                    top-margin="90"
                    :speaker-event="true">
                    <template slot="time-stamp">12:30</template>
                    <template slot="theme">Эффективные продажи <br>по телефону</template>
                    <template slot="speaker-name">Настасья Белочкина</template>
                    <template slot="reputation">
                      <p class="rt-font-paragraph">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                    </template>
                    <template slot="description">
                      <p class="rt-font-small-paragraph rt-space-bottom">Разработал свою методологию построения «Матрицы сервисных
                        сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                        клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                      <p class="rt-font-small-paragraph rt-space-bottom">Основатель Агентства «Умные метрики». С 2007 года занимался
                        построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                        «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                        Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                      <p class="rt-font-small-paragraph">Являясь директором по маркетингу, создавал уникальный клиентский
                        сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                        востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                    </template>
                  </rt-timeline-item>
                  <rt-timeline-item :important="true" image="/static/images/B2B/business__drive/photo3.png" top-margin="-40">
                    <template slot="time-stamp">13:30</template>
                    <template slot="theme">Бизнес-ланч</template>
                  </rt-timeline-item>
                  <rt-timeline-item
                    :important="true"
                    image="/static/images/B2B/business__drive/photo2.png"
                    top-margin="90"
                    :speaker-event="true">
                    <template slot="time-stamp">14:10</template>
                    <template slot="theme">Создание лучшего <br>клиентского сервиса <br>и продуктов</template>
                    <template slot="speaker-name">Михаил Качалкин</template>
                    <template slot="reputation">
                      <p class="rt-font-paragraph">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                    </template>
                    <template slot="description">
                      <p class="rt-font-small-paragraph rt-space-bottom">Разработал свою методологию построения «Матрицы сервисных
                        сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                        клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                      <p class="rt-font-small-paragraph rt-space-bottom">Являясь директором по маркетингу, создавал уникальный клиентский
                        сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                        востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                      <p class="rt-font-small-paragraph">Основатель Агентства «Умные метрики». С 2007 года занимался
                        построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                        «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                        Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                    </template>
                  </rt-timeline-item>
                  <rt-timeline-item
                    :important="true"
                    image="/static/images/B2B/business__drive/photo4.png"
                    top-margin="-115"
                    :speaker-event="true">
                    <template slot="time-stamp">15:30</template>
                    <template slot="theme">Как создать эффективную <br>команду бизнеса, <br>создающую прибыль</template>
                    <template slot="speaker-name">Владимир Маринович</template>
                    <template slot="reputation">
                      <p class="rt-font-paragraph">Предприниматель, эксперт <br>по клиентоцентричному сервису</p>
                    </template>
                    <template slot="description">
                      <p class="rt-font-small-paragraph rt-space-bottom">Разработал свою методологию построения «Матрицы сервисных
                        сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении
                        клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.</p>
                      <p class="rt-font-small-paragraph rt-space-bottom">Являясь директором по маркетингу, создавал уникальный клиентский
                        сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и
                        востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.</p>
                      <p class="rt-font-small-paragraph">Основатель Агентства «Умные метрики». С 2007 года занимался
                        построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),
                        «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с
                        Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).</p>
                    </template>
                  </rt-timeline-item>
                  <rt-timeline-item :important="true" :has-image="false" top-margin="-30">
                    <template slot="time-stamp">17:00</template>
                    <template slot="theme">Подведение итогов, <br>розыгрыш призов </template>
                  </rt-timeline-item>
                  <rt-timeline-item top-margin="30">
                    <template slot="time-stamp">17:30</template>
                    <template slot="theme">Кофе-брейк, <br>неформальное <br>общение</template>
                  </rt-timeline-item>
                </rt-timeline>
              </div>
              <div class="rt-col-1 td-d-none"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-gradient-section">
      <div class="rt-container">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-2 rt-col-td-1 md-d-none"/>
            <div class="rt-col-8 rt-col-td-4 rt-col-md-3">
              <div class="business-drive__motto color-white03">
                <h1 class="rt-font-bold rt-font-h1 business-drive__motto-text">Им не нужна мотивация, им нужна
                  эффективность. Им не нужны обещания покорения мира, им нужны инструменты для этого</h1>
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-1 md-d-none"/>
          </div>
        </div>
      </div>
      <div id="three">
        <div class="slider-block-title rt-font-center">
          <p class="slider-block-title__item slider-block-title__first-line color-white">Как это было</p>
          <p class="slider-block-title__item slider-block-title__second-line color-orange">#бизнесдрайвростелеком</p>
        </div>
        <h1 class="rt-font-center color-orange rt-font-bold">Insert slider here</h1>
        <div class="business-drive__video-block">
          <video src="/static/video/Trailer_Warface_Annoucement_20180628_4000.mp4" class="video-wrapper" controls></video>
        </div>
      </div>
      <div class="rt-container">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-2 rt-col-td-1 md-d-none"/>
            <div class="rt-col-8 rt-col-td-4 rt-col-md-3">
              <div class="business-drive__motto color-white03">
                <h1 class="rt-font-bold rt-font-h1 business-drive__motto-text">Мы видим реальную <span class="color-white">картину</span><br class="desktop-only">
                  рынка и <span class="color-white">поддерживаем</span> средний и малый <span class="color-white">бизнес</span>.<br>
                  Мы <span class="color-white">даем</span> качественную проверенную <span class="color-white">информацию</span>.
                  Мы <span class="color-white">не берем</span> плату за участие и <span class="color-white">не навязываем</span> свои услуги</h1>
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-1 md-d-none"/>
            <a name="registration-form">
            <div class="rt-col-12">
              <h1 class="rt-font-center color-orange rt-font-bold">Insert registration form here</h1>
            </div>
            </a>
          </div>
        </div>
      </div>
      <div id="four">
        <div class="rt-container">
          <div class="rt-col">
            <div class="row rt-space-bottom2">
              <div class="rt-col-5 rt-col-td-3 rt-col-md-3">
                <h2 class="rt-font-h2 rt-font-bold color-white">Как добраться</h2>
                <p class="address-text color-white03">Драматический театр им. Шукшина <br class="desktop-only">г. Барнаул, ул. Молодежная, 15</p>
              </div>
              <div class="rt-col-7"/>
            </div>
          </div>
        </div>
        <div class="map-block">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.9156240510147!2d37.645736315863516!3d55.74259500024671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ae59f73ffa1%3A0x6be8087f23456f55!2z0JPQvtC90YfQsNGA0L3QsNGPINGD0LsuLCAzMCwg0JzQvtGB0LrQstCwLCAxMTUxNzI!5e0!3m2!1sru!2sru!4v1558002281608!5m2!1sru!2sru" width="1460" height="420" frameborder="0" style="border:0" allowfullscreen/>
        </div>
      </div>

      <div class="rt-container">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-12">
              <div class="business-drive__footer rt-font-control color-white">
                <span class="business-drive__copyright color-white03">© 2017 ПАО «Ростелеком». 18+</span>
                <a href="#" class="business-drive__footer-link">О компании</a>
                <a href="#" class="business-drive__footer-link">Услуги для бизнеса</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <rt-real-popup :position-bottom="true" class="speaker-popup">
      <template>
        <rt-scroll-bar ref="ScrollBar">
          <div class="popup-content">
            <div class="popup-image"/>
            <div class="popup-title"/>
            <h3 class="popup-theme"/>
            <div class="popup-reputation rt-font-bold"/>
            <div class="popup-description p2"/>
          </div>
        </rt-scroll-bar>
      </template>
    </rt-real-popup>
    <rt-real-popup :position-center="true" class="thanx-popup">
      <template>
        <div class="popup-content">
          <h3 class="rt-font-bold rt-font-h3 rt-space-bottom05">Спасибо! Ваша заявка № ХХХХ принята</h3>
          <p class="rt-font-paragraph rt-space-bottom">В ближайшее время с Вами свяжется наш оператор. Спасибо, что Вы с нами!</p>
          <p class="rt-font-paragraph rt-space-bottom2">С уважением, Ваш Ростелеком</p>
          <p class="rt-font-small-paragraph rt-space-bottom color-white03">Информационно-справочная служба 8 800 200 3000</p>
          <rt-button class="rt-button rt-button-orange">ОК</rt-button>
        </div>
      </template>
    </rt-real-popup>
  </div>
</template>
<script>
  const componentsList = {};

  export default {
    name: "AppPromoBusinessDrive",
    components: componentsList,
    mounted() {
      window.addEventListener('DOMContentLoaded', animateKeyVisual);

      function animateKeyVisual(){
        document.querySelector('.animated-text').classList.add('animated-text--active');
      }

      document.querySelector('.mobile-burger').addEventListener('click', function(){
        if(!document.querySelector('.mobile-burger').classList.contains('mobile-burger--active')){
          document.querySelector('.mobile-burger').classList.add('mobile-burger--active');
          document.querySelector('.business-drive__header-menu').classList.add('business-drive__header-menu--active');
        } else {
          document.querySelector('.mobile-burger').classList.remove('mobile-burger--active');
          document.querySelector('.business-drive__header-menu').classList.remove('business-drive__header-menu--active');
        }
      });
      for(let i = 0; i < document.querySelectorAll('.rt-scroll-tab-header__item').length; i++){
        document.querySelectorAll('.rt-scroll-tab-header__item')[i].addEventListener('click', function(){
          document.querySelector('.mobile-burger').classList.remove('mobile-burger--active');
          document.querySelector('.business-drive__header-menu').classList.remove('business-drive__header-menu--active');
        })
      }
    }
  }
</script>
