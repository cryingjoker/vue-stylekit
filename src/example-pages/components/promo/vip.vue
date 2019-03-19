<template>
  <div>
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
    <section class="rt-dark-theme">
      <div class="rt-container rt-space-vertical25">
        <h2 class="rt-font-h2 rt-font-bold rt-font-center">Тарифы</h2>
      </div>
    </section>

    <!-- Цифровые сервисы -->
    <section class="rt-dark-theme">
      <div class="rt-container rt-space-vertical25">
        <h2 class="rt-font-h2 rt-font-bold rt-font-center">Цифровые сервисы</h2>
      </div>
    </section>

    <!-- Шаги подключения -->
    <section style="background-color: #1b2841" class="vip-iphone-wrapper">
      <div class="vip-iphone-container">
        <div class="rt-container rt-space-top25">
          <div class="rt-col">
            <h2 class="rt-font-h2 rt-font-bold rt-font-center color-white">Как подключить VIP-тариф</h2>
            <div class="flex-center-center rt-space-top2">
              <div class="vip-iphone">
                <div class="vip-iphone__inner"></div>
                <div class="vip-iphone-text vip-iphone-text-eq1">Обсудите ваши пожелания и цели с персональным
                  ассистентом банка ВТБ
                </div>
                <div class="vip-iphone-text vip-iphone-text-eq2">Личный менеджер Ростелекома согласует удобный для вас
                  день, чтобы специалисты провели аудит квартиры и подготовили проект подключения
                </div>
                <div class="vip-iphone-text vip-iphone-text-eq3">Бригада специалистов установит и настроит оборудование,
                  после чего ваш личный менеджер поможет в подключении дополнительных сервисов
                </div>
                <div class="vip-iphone-text vip-iphone-text-eq4">Бригада специалистов установит и настроит оборудование,
                  после чего ваш личный менеджер поможет в подключении дополнительных сервисов
                </div>
                <div class="vip-iphone-count"><span class="vip-iphone-count__value"> 1 </span> / 4</div>
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
      const step = height*0.8 / 4;
      console.info("step", step);
      var slideIndexBefore = null
      document.addEventListener("scroll", function() {
        var { top, height } = document.querySelector(".vip-iphone-wrapper").getBoundingClientRect();

        if(top < 0 && Math.abs(top) < height){
          var slideIndex = parseInt(Math.abs(top)/step) + 1;

          if(slideIndex > 4){
            slideIndex = 4;
          }

          if(slideIndexBefore !== slideIndex){
            if(slideIndexBefore != null){
              document.querySelector('.rt-code-viewer').classList.remove('vip-iphone--step-'+slideIndexBefore);
            }
            slideIndexBefore = slideIndex
            document.querySelector('.rt-code-viewer').classList.add('vip-iphone--step-'+slideIndex)
            document.querySelector('.vip-iphone-count__value').innerHTML = slideIndex
          }

        }

      });
    },
    created() {
    },
    methods: {}
  };
</script>
