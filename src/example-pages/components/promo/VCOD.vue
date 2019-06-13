<template>
  <div class="vcod">
    <rt-banner has-custom-height="500px"
               content-mobile-height="400px">
      <rt-banner-item background-color="green-low">
        <rt-color-line-text color-icon="orange"
                            fill-color="white">
          <template slot="label">Виртуальный ЦОД</template>
          <template slot="content">Выгодная и безопасная альтернатива<br> собственной ИТ-Инфраструктуре</template>
        </rt-color-line-text>
        <rt-button class='rt-button-orange'>Оставить заявку</rt-button>
      </rt-banner-item>
    </rt-banner>
    <div class="rt-container rt-container--mobile-full-width">
      <div class="rt-col">
        <div class="row">
          <div class="rt-col-2 td-d-none"></div>
          <div class="rt-col-8 rt-col-td-6 rt-col-md-3">
            <h2 class="rt-font-center rt-space-top4 rt-space-bottom rt-font-bold">Об услуге</h2>
            <p class="rt-font-center rt-font-paragraph rt-space-bottom3">Виртуальный Центр Обработки Данных — это
              безопасная и надежная IT-инфраструктура для вашего бизнеса. Арендуйте вычислительные мощности облачной
              платформы Ростелекома для размещения информационных систем, приложений, веб-сайтов</p>
          </div>
          <div class="rt-col-2 td-d-none"></div>
        </div>
        <div class="row">
          <div class="custom-carousel">
            <rt-card background-color-type="dark-slate" :background-blur="5" :is-white-color="true" class="carousel-card carousel-card--active">
              <template slot="content">
                <div class="rt-space-top15 rt-space-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="77" height="78">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#FFF" fill-rule="nonzero" d="M38.163 9.813c-6.054 0-10.979 4.925-10.979 10.979v4.688h2.742v-4.691c0-4.541 3.693-8.234 8.234-8.234 4.54 0 8.234 3.693 8.234 8.234v4.691h2.742v-4.691c.003-6.051-4.918-10.976-10.973-10.976z"/>
                      <path fill="#FFF" fill-rule="nonzero" d="M47.763 27.944l.007 17.168-19.207.006-.006-17.174h19.206m.01-3.2H28.56a3.194 3.194 0 0 0-3.194 3.19v17.184a3.194 3.194 0 0 0 3.194 3.194h19.213a3.194 3.194 0 0 0 3.193-3.194V27.934a3.194 3.194 0 0 0-3.193-3.19"/>
                      <path fill="#FFF" fill-rule="nonzero" d="M38.163 33.886a1.6 1.6 0 0 0-1.6 1.6v3.204a1.6 1.6 0 0 0 3.2 0v-3.204c0-.883-.713-1.6-1.6-1.6z"/>
                      <path fill="#FFF" fill-rule="nonzero" d="M38.166 77.09l-.65-.288C2.126 61.074.315 15.234.299 14.77L.25 13.122H1.9c6.295 0 11.412-5.12 11.412-11.412V.11h49.706v1.6c0 6.292 5.12 11.412 11.41 11.412h1.652l-.051 1.648c-.016.464-1.824 46.304-37.216 62.028l-.647.292zM3.6 16.222c.653 7.908 5.206 43.821 34.566 57.357C67.562 60.027 72.09 24.126 72.733 16.222 66 15.438 60.646 10.06 59.907 3.31H16.426c-.74 6.75-6.093 12.128-12.826 12.912z"/>
                      <path d="M-2-1h80v80H-2z"/>
                    </g>
                  </svg>
                </div>
                <p class="rt-font-label">1/8</p>
                <h4 class="rt-font-bold rt-space-top">Надежность и безопасность</h4>
                <p class="rt-font-paragraph rt-space-top05">Высокая безопасность размещения данных подтверждена сертификатами ФСБ, ФСТЭК,
                  PCI DSS и аттестатом облачной платформы Доступность инфраструктуры гарантируется SLA</p>
              </template>
            </rt-card>
            <rt-card background-color-type="green-low" :background-blur="5" :is-white-color="true" class="carousel-card">
              <template slot="content">
                <div class="rt-space-top15 rt-space-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="62" height="80">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#FFF" fill-rule="nonzero" d="M32.902 69.327V2.705a1.819 1.819 0 0 0-3.637 0v66.622h3.637z"/>
                      <path fill="#FFF" fill-rule="nonzero" d="M31.084 61.764c-8.88 0-15.837-13.371-15.837-30.44 0-17.07 6.957-30.44 15.837-30.44 8.88 0 15.836 13.37 15.836 30.44 0 17.069-6.956 30.44-15.836 30.44zm0-57.24c-6.615 0-12.2 12.272-12.2 26.803s5.585 26.804 12.2 26.804c6.614 0 12.2-12.273 12.2-26.804 0-14.53-5.586-26.803-12.2-26.803z"/>
                      <path fill="#FFF" fill-rule="nonzero" d="M59.705 33.142H2.465a1.819 1.819 0 0 1 0-3.637h57.24a1.819 1.819 0 0 1 0 3.637zm-4.68 14.028H6.065a1.819 1.819 0 0 1 0-3.635h48.96a1.819 1.819 0 0 1 0 3.636zm0-25.52H6.065a1.819 1.819 0 0 1 0-3.635h48.96a1.819 1.819 0 0 1 0 3.636zM31.084 79.953a6.603 6.603 0 0 1-6.597-6.597 6.603 6.603 0 0 1 6.597-6.596c3.64 0 6.596 2.96 6.596 6.596a6.603 6.603 0 0 1-6.596 6.597zm0-9.56a2.963 2.963 0 0 0-2.96 2.96 2.963 2.963 0 0 0 2.96 2.96 2.963 2.963 0 0 0 2.96-2.96 2.963 2.963 0 0 0-2.96-2.96zm-25.454.051a2.914 2.914 0 0 0-2.914 2.912A2.914 2.914 0 0 0 5.63 76.27a2.912 2.912 0 1 0 0-5.825m10.828-.001a2.914 2.914 0 0 0-2.913 2.912 2.914 2.914 0 0 0 2.913 2.913 2.912 2.912 0 1 0 0-5.825m29.215 0a2.914 2.914 0 0 0-2.913 2.912 2.914 2.914 0 0 0 2.913 2.913 2.914 2.914 0 0 0 2.912-2.913 2.914 2.914 0 0 0-2.912-2.912m10.825 0a2.914 2.914 0 0 0-2.913 2.912 2.914 2.914 0 0 0 2.913 2.913 2.912 2.912 0 1 0 0-5.825"/>
                      <path fill="#FFF" fill-rule="nonzero" d="M31.084 61.764C14.302 61.764.647 48.109.647 31.324.647 14.538 14.302.884 31.084.884c16.785 0 30.44 13.654 30.44 30.44 0 16.785-13.655 30.44-30.44 30.44zm0-57.24c-14.775 0-26.8 12.025-26.8 26.803s12.025 26.804 26.8 26.804c14.778 0 26.803-12.026 26.803-26.804 0-14.778-12.022-26.803-26.803-26.803z"/>
                      <path d="M-9 0h80v80H-9z"/>
                    </g>
                  </svg>
                </div>
                <p class="rt-font-label">2/8</p>
                <h4 class="rt-font-bold rt-space-top">Выбор площадки размещения</h4>
                <p class="rt-font-paragraph rt-space-top05">Центры обработки данных Ростелекома расположены в трех
                  федеральных округах России. Для размещения IT-инфраструктуры можно выбрать Москву, Новосибирск или Сочи.</p>
              </template>
            </rt-card>
            <rt-card background-color-type="light-blue" :background-blur="5" :is-white-color="true" class="carousel-card">
              <template slot="content">
                <div class="rt-space-top15 rt-space-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="76" height="67">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#FFF" fill-rule="nonzero" d="M31.69 6.931c15.253 0 27.66 12.408 27.66 27.661 0 15.254-12.411 27.661-27.66 27.661-15.25 0-27.661-12.407-27.661-27.66 0-15.254 12.407-27.662 27.66-27.662zm0-3.81C14.31 3.122.219 17.214.219 34.593c0 17.383 14.091 31.47 31.47 31.47 17.383 0 31.471-14.09 31.471-31.47 0-17.379-14.088-31.47-31.47-31.47zm36.46.938a3.81 3.81 0 0 1 3.806 3.806 3.81 3.81 0 0 1-3.806 3.805 3.81 3.81 0 0 1-3.805-3.805 3.81 3.81 0 0 1 3.805-3.806zm0-3.81a7.615 7.615 0 1 0 0 15.231 7.615 7.615 0 0 0 0-15.23z"/>
                      <path d="M-2-6h80v80H-2z"/>
                    </g>
                  </svg>
                </div>
                <p class="rt-font-label">3/8</p>
                <h4 class="rt-font-bold rt-space-top">Легкое и быстрое масштабирование</h4>
                <p class="rt-font-paragraph rt-space-top05">Изменяйте параметры вашей системы и увеличивайте
                  производительность в режиме онлайн</p>
              </template>
            </rt-card>
            <rt-card background-color-type="dark-slate" :background-blur="5" :is-white-color="true" class="carousel-card">
              <template slot="content">
                <div class="rt-space-top15 rt-space-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="78" height="62">
                    <g fill="none" fill-rule="evenodd" transform="translate(-1 -10)">
                      <circle cx="40.117" cy="55.174" r="1.411" fill="#FFF" fill-rule="nonzero"/>
                      <path fill="#FFF" fill-rule="nonzero" d="M75.714 10.483H59.218v3.2h16.099v35.091h-70.4v-35.09h15.897v-3.2H4.504a2.784 2.784 0 0 0-2.784 2.783v45.549a2.79 2.79 0 0 0 2.79 2.79h71.217a2.794 2.794 0 0 0 2.793-2.793V13.286a2.805 2.805 0 0 0-2.806-2.803zm-.394 47.891H4.92v-6.393h70.4v6.393z"/>
                      <path fill="#FFF" fill-rule="nonzero" d="M48.018 23.245h3.2v16.038h-3.2z"/>
                      <path fill="#FFF" fill-rule="nonzero" d="M49.618 10.586l-7.632 12.662H57.25l-7.632-12.662zm-1.972 9.459l1.968-3.264 1.968 3.264h-3.936zm-18.771-9.562h3.2v16.355h-3.2zm3.2 16.355h-9.232l7.632 12.666 7.632-12.666h-6.032zm-3.568 3.2h3.936l-1.968 3.264-1.968-3.264zM27.32 67.974v3.2h25.6v-3.2h-6.4v-6.368h-3.238v6.368h-6.34v-6.368H33.72v6.368z"/>
                      <path d="M0 0h80v80H0z"/>
                    </g>
                  </svg>
                </div>
                <p class="rt-font-label">4/8</p>
                <h4 class="rt-font-bold rt-space-top">Доступность</h4>
                <p class="rt-font-paragraph rt-space-top05">Возможность подключения к  виртуальной инфраструктуре через
                  крупнейшую в России сеть IP MPLS Ростелеком и сети присоединенных операторов</p>
              </template>
            </rt-card>
            <rt-card background-color-type="green-low" :background-blur="5" :is-white-color="true" class="carousel-card">
              <template slot="content">
                <div class="rt-space-top15 rt-space-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="77">
                    <g fill="none" fill-rule="evenodd">
                      <g fill="#FFF" fill-rule="nonzero">
                        <path d="M26.743 32.25a6.052 6.052 0 0 1-6.046-6.047 6.052 6.052 0 0 1 6.046-6.046 6.052 6.052 0 0 1 6.047 6.046 6.052 6.052 0 0 1-6.047 6.047zm0-8.76a2.716 2.716 0 0 0-2.713 2.713 2.716 2.716 0 0 0 2.713 2.714 2.716 2.716 0 0 0 2.714-2.714 2.711 2.711 0 0 0-2.714-2.713zm-1.537 25.853h3.333v26.753h-3.333zm28.377 4.57c0-6.686-5.133-12.2-11.666-12.803v3.353c4.69.587 8.333 4.6 8.333 9.45v16.59l-8.333-2.413v3.473l11.666 3.38v-21.03z"/>
                        <path d="M27.88 1.353l-.873-.55-.884.54c-.583.357-14.296 8.917-14.296 21.164v49.056l3.333-.973V22.507c0-8.747 8.95-15.714 11.83-17.73 2.84 2.02 11.593 8.963 11.593 17.73v48.086l3.334.967V22.507c0-12.237-13.46-20.797-14.037-21.154z"/>
                        <path d="M3.583 70.497V53.91c0-4.82 3.597-8.813 8.247-9.44v-3.353C5.34 41.757.25 47.25.25 53.91v21.033l11.58-3.38V68.09l-8.247 2.407z"/>
                      </g>
                      <path d="M-14-2h80v80h-80z"/>
                    </g>
                  </svg>
                </div>
                <p class="rt-font-label">5/8</p>
                <h4 class="rt-font-bold rt-space-top">Быстрое подключение</h4>
                <p class="rt-font-paragraph rt-space-top05">Необходимые для работы ресурсы можно получить всего за
                  несколько минут в режиме онлайн</p>
              </template>
            </rt-card>
            <rt-card background-color-type="light-blue" :background-blur="5" :is-white-color="true" class="carousel-card">
              <template slot="content">
                <div class="rt-space-top15 rt-space-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="75">
                    <g fill="none" fill-rule="evenodd">
                      <g fill="#FFF" fill-rule="nonzero">
                        <path d="M27.707 41.836h-3.81V30.331h-4.019v-3.81h4.02v-9.523c0-1.051.852-1.905 1.904-1.905h6.4c5.535 0 8.838 2.85 8.838 7.62 0 4.769-3.333 7.618-8.914 7.618h-4.42v11.505zm0-15.314h4.419c4.525 0 5.104-2.034 5.104-3.81 0-1.04 0-3.81-5.028-3.81h-4.495v7.62z"/>
                        <path d="M19.878 33.768H33.42v3.81H19.878z"/>
                        <path d="M33.897 54.008c0-.572.046-1.132.084-1.692a24.108 24.108 0 0 1-5.036.534c-13.345 0-24.202-10.858-24.202-24.2 0-13.34 10.857-24.198 24.202-24.198 13.34 0 24.202 10.857 24.202 24.198 0 .469-.046.926-.073 1.387a24.938 24.938 0 0 1 3.836-.537c.008-.286.042-.564.042-.85 0-15.47-12.54-28.007-28.011-28.007-15.47 0-28 12.537-28 28.004 0 15.47 12.54 28.007 28.011 28.007 1.73 0 3.418-.179 5.06-.48a23.926 23.926 0 0 1-.115-2.167z"/>
                        <path d="M58.484 36.85c9.459 0 17.158 7.695 17.158 17.158 0 9.462-7.7 17.158-17.158 17.158-9.46 0-17.158-7.696-17.158-17.158 0-9.463 7.699-17.158 17.158-17.158zm0-3.81c-11.581 0-20.968 9.387-20.968 20.968 0 11.58 9.387 20.967 20.968 20.967 11.58 0 20.967-9.386 20.967-20.967S70.065 33.04 58.484 33.04z"/>
                        <path d="M56.579 44.621h3.81v18.77h-3.81z"/>
                        <path d="M49.101 52.099h18.77v3.81h-18.77z"/>
                      </g>
                      <path d="M0-2h80v80H0z"/>
                    </g>
                  </svg>
                </div>
                <p class="rt-font-label">6/8</p>
                <h4 class="rt-font-bold rt-space-top">Экономичность</h4>
                <p class="rt-font-paragraph rt-space-top05">Ежесуточная тарификация и бесплатный тестовый период.
                  Специальный тариф на IP VPN</p>
              </template>
            </rt-card>
            <rt-card background-color-type="dark-slate" :background-blur="5" :is-white-color="true" class="carousel-card">
              <template slot="content">
                <div class="rt-space-top15 rt-space-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="77" height="66">
                    <g fill="none" fill-rule="evenodd">
                      <g fill="#FFF" fill-rule="nonzero">
                        <path d="M69.786 61.773c-9.392-2.957-20.15-4.55-31.252-4.55-11.219 0-22.076 1.625-31.539 4.643v3.324c9.367-3.116 20.269-4.764 31.536-4.764 11.152 0 21.955 1.616 31.251 4.672v-3.325h.004zM20.8.291a1.6 1.6 0 1 0 .027 3.201 1.6 1.6 0 0 0-.027-3.2"/>
                        <path d="M73.61 13.085H54.384v3.2H73.6l.006 38.403-70.406.006-.006-38.41H16v-3.2H3.194A3.19 3.19 0 0 0 0 16.276v38.42a3.194 3.194 0 0 0 3.194 3.193H73.61a3.194 3.194 0 0 0 3.193-3.194v-38.42a3.196 3.196 0 0 0-3.193-3.19z"/>
                        <path d="M51.213 21.091V19.13c0-6.807-5.536-12.343-12.343-12.343H19.213v3.2H38.87c5.04 0 9.143 4.103 9.143 9.143v15.865c-2.279-2.624-5.562-4.304-9.143-4.304H20.8v3.2h18.067c4.957 0 9.143 4.397 9.143 9.6v.007a3.194 3.194 0 0 0 3.193 3.193l.003.003H65.6v-25.6H51.213v-.003zm11.187 22.4H51.213v-19.2H62.4v19.2z"/>
                        <path d="M19.213 6.787h3.2v46.304h-3.2z"/>
                      </g>
                      <path d="M-1-8h80v80H-1z"/>
                    </g>
                  </svg>
                </div>
                <p class="rt-font-label">7/8</p>
                <h4 class="rt-font-bold rt-space-top">Российское решение</h4>
                <p class="rt-font-paragraph rt-space-top05">Система управления облачной платформы Ростелекома внесена в
                  единый реестр программ Министерства связи и массовых коммуникаций Российской Федерации. Все данные
                  хранятся на территории России</p>
              </template>
            </rt-card>
            <rt-card background-color-type="light-blue" :background-blur="5" :is-white-color="true" class="carousel-card">
              <template slot="content">
                <div class="rt-space-top15 rt-space-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="77" height="78">
                    <g fill="none" fill-rule="evenodd">
                      <g fill="#FFF" fill-rule="nonzero">
                        <path d="M24.996 19.153H41.56v3.333H24.996zm-.066 6.657h9.96v3.333h-9.96z"/>
                        <path d="M21.59 15.36h31.293v3.79h3.334v-3.8a3.325 3.325 0 0 0-3.327-3.323h-31.3a3.327 3.327 0 0 0-3.327 3.323v26.663a3.327 3.327 0 0 0 3.327 3.327h17.72v-3.33l-17.717.003-.003-26.653z"/>
                        <path d="M51.553 46.46c-6.556 0-11.886-5.333-11.886-11.89 0-6.553 5.333-11.887 11.886-11.887 6.554 0 11.89 5.334 11.89 11.887 0 6.557-5.336 11.89-11.89 11.89zm0-20.447c-4.716 0-8.553 3.837-8.553 8.554 0 4.72 3.837 8.556 8.553 8.556 4.72 0 8.557-3.836 8.557-8.556 0-4.714-3.837-8.554-8.557-8.554z"/>
                        <path d="M51.56 32.667a1.794 1.794 0 1 1-.001 3.587 1.794 1.794 0 0 1 .001-3.587zm0-3.334a5.126 5.126 0 1 0 0 10.253 5.126 5.126 0 0 0 0-10.253z"/>
                        <path d="M74.523 13.613c-6.206 0-11.256-5.05-11.256-11.256V.69H13.743v1.667c0 6.206-5.05 11.256-11.256 11.256H.767L.82 15.33c.017.46 1.813 46.04 37.007 61.677l.676.3.677-.3c6.283-2.794 11.487-6.547 15.82-10.82l-2.577-2.11c-3.866 3.75-8.46 7.053-13.92 9.576C9.503 60.257 4.927 24.827 4.26 16.84c6.663-.81 11.957-6.137 12.72-12.817h43.047c.763 6.68 6.056 12.007 12.723 12.817-.39 4.727-2.193 19.057-9.58 32.753l-.053 6.627c12.19-18.657 13.06-40.57 13.073-40.887l.053-1.716h-1.72v-.004z"/>
                        <path d="M56.553 43.977l-.006 15.11-5-3.727-5 3.727.006-15.04-3.333-2.594-.007 24.3 8.334-6.663 8.333 6.663.007-24.723h-.124z"/>
                      </g>
                      <path d="M-1-1h80v80H-1z"/>
                    </g>
                  </svg>
                </div>
                <p class="rt-font-label">8/8</p>
                <h4 class="rt-font-bold rt-space-top">Опыт и компетенции</h4>
                <p class="rt-font-paragraph rt-space-top05">Ростелеком — надежный партнер с успешным опытом реализации
                  множества проектов федерального масштаба</p>
              </template>
            </rt-card>
            <div class="custom-carousel__nav">
              <div class="custom-carousel__nav-item custom-carousel__left" @click="previousSlide">
                <svg width="12px" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" class="custom-carousel__left-arrow">
                  <g id="Page-1" stroke-width="1">
                    <g transform="translate(-132.000000, -2341.000000)">
                      <g id="Group-3-Copy-2" transform="translate(132.000000, 2332.000000)">
                        <polygon id="Shape-Copy" points="10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="custom-carousel__nav-item custom-carousel__right" @click="nextSlide">
                <svg width="12px" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" class="custom-carousel__right-arrow">
                  <g id="Page-1" stroke-width="1">
                    <g transform="translate(-132.000000, -2341.000000)">
                      <g id="Group-3-Copy-2" transform="translate(132.000000, 2332.000000)">
                        <polygon id="Shape-Copy" points="10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="custom-carousel__paginator"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block--light-grey rt-space-top3 rt-space-bottom3">
      <div class="rt-container">
        <div class="rt-col">
          <h2 class="rt-font-bold rt-space-bottom3">Возможности</h2>
          <rt-row-list :company-profits="true" :align-left="true" :columns-quantity="2">
            <rt-row-list-item icon="/static/images/B2B/014-c.svg">
              <template slot="option">
                <div class="ovh">
                  <h4 class="rt-space-bottom05 rt-font-bold">Гибкие конфигурации</h4>
                  <p class="rt-font-paragraph">Создавайте виртуальные машины с любой операционной системой
                    из списка индивидуальных конфигураций серверов </p>
                </div>
              </template>
            </rt-row-list-item>
            <rt-row-list-item icon="/static/images/B2B/088-c.svg">
              <template slot="option">
                <div class="ovh">
                  <h4 class="rt-space-bottom05 rt-font-bold">Выбор платформы виртуализации</h4>
                  <p class="rt-font-paragraph">Упростите процесс работы с данными, используя привычные платформы
                    — VMware или OpenStack KVM</p>
                </div>
              </template>
            </rt-row-list-item>
            <rt-row-list-item icon="/static/images/B2B/063-c.svg">
              <template slot="option">
                <div class="ovh">
                  <h4 class="rt-space-bottom05 rt-font-bold">Удобство управления</h4>
                  <p class="rt-font-paragraph">Управляйте Виртуальным ЦОД самостоятельно с помощью простой
                    панели для бизнес-пользователей или поручите работу с расширенными инструментами вашему
                    системному администратору</p>
                </div>
              </template>
            </rt-row-list-item>
            <rt-row-list-item icon="/static/images/B2B/022-c.svg">
              <template slot="option">
                <div class="ovh">
                  <h4 class="rt-space-bottom05 rt-font-bold">Дополнительные опции</h4>
                  <p class="rt-font-paragraph">Управляйте резервными копиями, получите доступ через VPN,
                    используйте балансировку нагрузки и не беспокойтесь о DDoS-атаках</p>
                </div>
              </template>
            </rt-row-list-item>
          </rt-row-list>
        </div>
      </div>
    </div>
    <rt-banner :no-triangle="true" :without-empty-column="true" :without-second-empty-column="true"
               :transparent-background-image="true" :mobile-image-on-top="true" :switch-off-timer="true"
               :has-image-on-mobile="true">
      <rt-banner-item :is-white-color="true" background-color="green"
                      background-image="">
        <h2 class="rt-font-bold">Легко обмениваться большими объемами информации</h2>
        <p class="rt-font-paragraph rt-space-top rt-space-bottom25">Отправляйте объемные
          фото и&nbsp;видео, работайте с&nbsp;облачными сервисами и&nbsp;большими базами данных — скорости
          интернета хватит на&nbsp;всё</p>
      </rt-banner-item>
      <rt-banner-item :is-white-color="true" content-mobile-height="500px" background-color="dark-blue-high"
                      background-image="">
        <h2 class="rt-font-bold">Эффективно работать<br>с онлайн-сервисами</h2>
        <p class="rt-font-paragraph rt-space-top rt-space-bottom25">Благодаря стабильному высокоскоростному интернету
          вашим сотрудникам будет удобнее работать с&nbsp;корпоративной почтой и&nbsp;CRM-системой,
          что&nbsp;позволит повысить уровень продаж</p>
      </rt-banner-item>
      <rt-banner-item :is-white-color="true" content-mobile-height="500px" background-color="dark-blue"
                      background-image="">
        <h2 class="rt-font-bold">Повысить лояльность клиентов</h2>
        <p class="rt-font-paragraph rt-space-top rt-space-bottom25">Офисы, кафе, салоны красоты и&nbsp;другие заведения
          с&nbsp;бесплатным Wi-Fi и&nbsp;телевидением привлекают и&nbsp;удерживают больше посетителей</p>
      </rt-banner-item>
    </rt-banner>
    <div class="rt-container rt-space-top3 rt-space-bottom15">
      <rt-use-case>
        <div class="rt-col-6 rt-col-md-3">
          <rt-card background-image="/static/example-images/cardBackground6.png"
                   :background-cover="true"
                   :is-white-color="true"
                   :offset-top="true"
                   background-color-type="black"
                   :double-sided="true">
            <template slot="content">
              <h4 class="rt-font-bold rt-space-bottom05">Торговля, ритейл, E-commerce</h4>
              <p class="rt-font-paragraph">Размещение корпоративной почтовой системы, CRM, 1С, программ учета
                продукции, внешнего сайта или интернет-магазина, виртуальных рабочих мест</p>
            </template>
            <template slot="footer">
              <rt-button class="rt-button-small rt-button-white">Кейс</rt-button>
            </template>
            <template slot="reverse">
              <div class="rt-font-small-paragraph color-main07">
                <p class="rt-font-bold">Клиент </p>
                <p> Официальный дистрибьютор оборудования для горнодобывающей, строительной, нефтегазовой, лесной,
                  дорожной и коммунальной отраслей. 15 лет на рынке индустриальной техники. Сеть филиалов,
                  представительств и дилеров более чем в 20 городах России.</p>
                <p class="rt-font-bold">Проблема </p>
                <p>Создать отказоустойчивую систему объединенных коммуникаций для всех сотрудников, включая
                  филиальную сеть и центральный офис в Екатеринбурге. Требуется организовать бесперебойную работу
                  приложений «1С» для всех подразделений, т.к. раньше были распределенные базы (синхронизация,
                  обмен, администрирование и т.д.), что было не удобно. В случаях «падения» центрального офиса
                  филиалы оставались без связи (электричество, ШПД и т.д.)</p>
                <p class="rt-font-bold">Решение </p>
                <p>Размещение «1С» заказчика в Виртуальном ЦОД Ростелеком. Филиалы могут работать независимо от
                  центрального офиса. Возможность удаленной работы. Безопасность, надежность и отказоустойчивость
                  решения обеспечены Ростелекомом.</p>
              </div>
            </template>
          </rt-card>
        </div>
        <div class="rt-col-6 rt-col-md-3">
          <rt-card background-image="/static/example-images/cardBackground6.png"
                   :background-cover="true"
                   :is-white-color="true"
                   :offset-top="true"
                   background-color-type="black"
                   :double-sided="true">
            <template slot="content">
              <h4 class="rt-font-bold rt-space-bottom05">Торговля, ритейл, E-commerce</h4>
              <p class="rt-font-paragraph">Размещение корпоративной почтовой системы, CRM, 1С, программ учета
                продукции, внешнего сайта или интернет-магазина, виртуальных рабочих мест</p>
            </template>
            <template slot="footer">
              <rt-button class="rt-button-small rt-button-white">Кейс</rt-button>
            </template>
            <template slot="reverse">
              <div class="rt-font-small-paragraph color-main07">
                <p class="rt-font-bold">Клиент </p>
                <p> Официальный дистрибьютор оборудования для горнодобывающей, строительной, нефтегазовой, лесной,
                  дорожной и коммунальной отраслей. 15 лет на рынке индустриальной техники. Сеть филиалов,
                  представительств и дилеров более чем в 20 городах России.</p>
                <p class="rt-font-bold">Проблема </p>
                <p>Создать отказоустойчивую систему объединенных коммуникаций для всех сотрудников, включая
                  филиальную сеть и центральный офис в Екатеринбурге. Требуется организовать бесперебойную работу
                  приложений «1С» для всех подразделений, т.к. раньше были распределенные базы (синхронизация,
                  обмен, администрирование и т.д.), что было не удобно. В случаях «падения» центрального офиса
                  филиалы оставались без связи (электричество, ШПД и т.д.)</p>
                <p class="rt-font-bold">Решение </p>
                <p>Размещение «1С» заказчика в Виртуальном ЦОД Ростелеком. Филиалы могут работать независимо от
                  центрального офиса. Возможность удаленной работы. Безопасность, надежность и отказоустойчивость
                  решения обеспечены Ростелекомом.</p>
              </div>
            </template>
          </rt-card>
        </div>
        <div class="rt-col-6 rt-col-md-3">
          <rt-card background-image="/static/example-images/cardBackground6.png"
                   :background-cover="true"
                   :is-white-color="true"
                   :offset-top="true"
                   background-color-type="black"
                   :double-sided="true">
            <template slot="content">
              <h4 class="rt-font-bold rt-space-bottom05">Торговля, ритейл, E-commerce</h4>
              <p class="rt-font-paragraph">Размещение корпоративной почтовой системы, CRM, 1С, программ учета
                продукции, внешнего сайта или интернет-магазина, виртуальных рабочих мест</p>
            </template>
            <template slot="footer">
              <rt-button class="rt-button-small rt-button-white">Кейс</rt-button>
            </template>
            <template slot="reverse">
              <div class="rt-font-small-paragraph color-main07">
                <p class="rt-font-bold">Клиент </p>
                <p> Официальный дистрибьютор оборудования для горнодобывающей, строительной, нефтегазовой, лесной,
                  дорожной и коммунальной отраслей. 15 лет на рынке индустриальной техники. Сеть филиалов,
                  представительств и дилеров более чем в 20 городах России.</p>
                <p class="rt-font-bold">Проблема </p>
                <p>Создать отказоустойчивую систему объединенных коммуникаций для всех сотрудников, включая
                  филиальную сеть и центральный офис в Екатеринбурге. Требуется организовать бесперебойную работу
                  приложений «1С» для всех подразделений, т.к. раньше были распределенные базы (синхронизация,
                  обмен, администрирование и т.д.), что было не удобно. В случаях «падения» центрального офиса
                  филиалы оставались без связи (электричество, ШПД и т.д.)</p>
                <p class="rt-font-bold">Решение </p>
                <p>Размещение «1С» заказчика в Виртуальном ЦОД Ростелеком. Филиалы могут работать независимо от
                  центрального офиса. Возможность удаленной работы. Безопасность, надежность и отказоустойчивость
                  решения обеспечены Ростелекомом.</p>
              </div>
            </template>
          </rt-card>
        </div>
        <div class="rt-col-6 rt-col-md-3">
          <rt-card background-image="/static/example-images/cardBackground6.png"
                   :background-cover="true"
                   :is-white-color="true"
                   :offset-top="true"
                   background-color-type="black"
                   :double-sided="true">
            <template slot="content">
              <h4 class="rt-font-bold rt-space-bottom05">Торговля, ритейл, E-commerce</h4>
              <p class="rt-font-paragraph">Размещение корпоративной почтовой системы, CRM, 1С, программ учета
                продукции, внешнего сайта или интернет-магазина, виртуальных рабочих мест</p>
            </template>
            <template slot="footer">
              <rt-button class="rt-button-small rt-button-white">Кейс</rt-button>
            </template>
            <template slot="reverse">
              <div class="rt-font-small-paragraph color-main07">
                <p class="rt-font-bold">Клиент </p>
                <p> Официальный дистрибьютор оборудования для горнодобывающей, строительной, нефтегазовой, лесной,
                  дорожной и коммунальной отраслей. 15 лет на рынке индустриальной техники. Сеть филиалов,
                  представительств и дилеров более чем в 20 городах России.</p>
                <p class="rt-font-bold">Проблема </p>
                <p>Создать отказоустойчивую систему объединенных коммуникаций для всех сотрудников, включая
                  филиальную сеть и центральный офис в Екатеринбурге. Требуется организовать бесперебойную работу
                  приложений «1С» для всех подразделений, т.к. раньше были распределенные базы (синхронизация,
                  обмен, администрирование и т.д.), что было не удобно. В случаях «падения» центрального офиса
                  филиалы оставались без связи (электричество, ШПД и т.д.)</p>
                <p class="rt-font-bold">Решение </p>
                <p>Размещение «1С» заказчика в Виртуальном ЦОД Ростелеком. Филиалы могут работать независимо от
                  центрального офиса. Возможность удаленной работы. Безопасность, надежность и отказоустойчивость
                  решения обеспечены Ростелекомом.</p>
              </div>
            </template>
          </rt-card>
        </div>
      </rt-use-case>
    </div>
    <iframe id="frame"></iframe>
    <rt-real-popup>
      <template>
        <div class="row">
          <div class="rt-col-12 rt-col-td-6 rt-col-md-3 popup-content"></div>
          <rt-button class="rt-button-small rt-button-purple-border">Закрыть</rt-button>
        </div>
      </template>
    </rt-real-popup>
  </div>
</template>

<script>
  const componentsList = {};

  export default {
    name: "VCOD",
    components: componentsList,
    data () {
      return {
        mobileLayout: window.innerWidth <= 767,
        parentArray: [],
        element: null,
        parent: null,
        activeSlideIndex: null,
        nextSlideIndex: 0
      }
    },
    mounted () {
      this.element = document.querySelector('.carousel-card');
      this.parent = this.element.parentNode;
      for(let i = 0; i < this.parent.children.length; i++) {
        if (this.parent.children[i].classList.contains('carousel-card')) {
          this.parentArray.push(this.parent.children[i]);
        }
      }
      window.addEventListener('resize', () => {
        this.mobileLayout = window.innerWidth <= 767
      });
      this.positionCarouselCards();

      if(this.mobileLayout) {
        this.addPaginator();
        this.fixCardHeightMobile();
        for(let i = 0; i < this.parentArray.length; i++) {
          document.querySelector('.custom-carousel__paginator').children[i].addEventListener('click', (e) => {
            let activePaginatorIndex = this.getChildNumber(e.target);
            this.mobileCarousel(activePaginatorIndex);
          })
        }
      }
    },
    methods: {
      addPaginator() {
        for(let i = 0; i < this.parentArray.length; i++) {
          let paginatorItem = document.createElement('div');
          paginatorItem.classList.add('custom-carousel__paginator-item');
          document.querySelector('.custom-carousel__paginator').appendChild(paginatorItem);
          if(i === this.nextSlideIndex) {
            document.querySelector('.custom-carousel__paginator-item').classList.add('custom-carousel__paginator-item--active');
          }
        }
      },

      getChildNumber(node) {
        return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
      },

      mobileCarousel(index) {
        let carouselPaginatorWrapper = document.querySelector('.custom-carousel__paginator');
        let slideWidth = document.querySelector('.carousel-card').offsetWidth;
        let carouselWrapperPadding = +window.getComputedStyle(document.querySelector('.custom-carousel')).paddingLeft.replace('px', '')
        for(let i = 0; i < this.parentArray.length; i++) {
          carouselPaginatorWrapper.children[i].classList.remove('custom-carousel__paginator-item--active');
        }
        carouselPaginatorWrapper.children[index].classList.add('custom-carousel__paginator-item--active');
        document.querySelector('.custom-carousel').scrollBy({
          top: 0,
          left: (slideWidth * index + (20 * index) - ((window.innerWidth - slideWidth) / 2) + carouselWrapperPadding) - document.querySelector('.custom-carousel').scrollLeft,
          behavior: 'smooth'
        });
//        document.querySelector('.custom-carousel').scrollBy(slideWidth * index + (20 * index) - ((window.innerWidth - slideWidth) / 2) + carouselWrapperPadding);
      },

      positionCarouselCards() {
        if(!this.mobileLayout){
          this.parentArray.forEach((el, i)=>{
            if(((i + 1) < this.nextSlideIndex) || (i - 1) > this.nextSlideIndex) {
              el.classList.remove('carousel-card--next', 'carousel-card--previous');
              if(((i - 2) === this.nextSlideIndex)) {
                el.classList.add('carousel-card--next-via-one');
              } else if(((i + 2) === this.nextSlideIndex)) {
                el.classList.add('carousel-card--previous-via-one');
              }
            }
            if((i + 1) === this.nextSlideIndex || (this.nextSlideIndex === 0 && i === this.parentArray.length - 1)){
              el.classList.remove('carousel-card--next-via-one', 'carousel-card--previous-via-one');
              el.classList.add('carousel-card--previous');
            }
            if((i - 1) === this.nextSlideIndex || (this.nextSlideIndex === this.parentArray.length - 1 && i === 0)){
              el.classList.remove('carousel-card--next-via-one', 'carousel-card--previous-via-one');
              el.classList.add('carousel-card--next');
            }
          });
        }
      },

      nextSlide() {
        if(!this.mobileLayout) {
          for(let i = 0; i < this.parentArray.length; i++){
            if(this.parent.children[i].classList.contains('carousel-card--active')){
              this.activeSlideIndex = this.parentArray.indexOf(this.parent.children[i]);
              this.nextSlideIndex = (this.activeSlideIndex +  1) % 8 ? this.activeSlideIndex + 1 : 0;
            }
          }
          this.parentArray[this.activeSlideIndex].classList.remove('carousel-card--active');
          this.parentArray[this.nextSlideIndex].classList.add('carousel-card--active');
          this.parentArray[this.nextSlideIndex].classList
            .remove('carousel-card--next', 'carousel-card--previous', 'carousel-card--next-via-one', 'carousel-card--previous-via-one');
          this.positionCarouselCards()
        }
      },

      previousSlide() {
        if(!this.mobileLayout) {
          for(let i = 0; i < this.parentArray.length; i++){
            if(this.parent.children[i].classList.contains('carousel-card--active')){
              this.activeSlideIndex = this.parentArray.indexOf(this.parent.children[i]);
              this.nextSlideIndex = (this.activeSlideIndex -  1) >= 0 ? this.activeSlideIndex - 1 : this.parentArray.length - 1;
            }
          }
          this.parentArray[this.activeSlideIndex].classList.remove('carousel-card--active');
          this.parentArray[this.nextSlideIndex].classList.add('carousel-card--active');
          this.parentArray[this.nextSlideIndex].classList
            .remove('carousel-card--next', 'carousel-card--previous', 'carousel-card--next-via-one', 'carousel-card--previous-via-one');
          this.positionCarouselCards()
        }
      },

      fixCardHeightMobile() {
        let maxHeight = 0;
        for(let i = 0; i < this.parentArray.length; i++) {
          let cardHeight = +window.getComputedStyle(document.querySelector('.custom-carousel').children[i]).height.replace('px', '');
          maxHeight = maxHeight < cardHeight ? cardHeight : maxHeight;
        }
        for(let i = 0; i < this.parentArray.length; i++) {
          document.querySelector('.custom-carousel').children[i].style.height = maxHeight + 'px';
        }
      }
    }
  }
</script>
