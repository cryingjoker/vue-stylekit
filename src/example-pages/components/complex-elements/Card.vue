<template>
  <div class="app-content">
    <div class="rt-container">
      <div class="rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">
              Cards
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="app-body">
      <div class="rt-container">
        <div class="rt-col is-b2c">
          <div class="relative">
            <rt-card-carousel>
            <rt-card-b2o :is-white-color="true" class="carousel-card carousel-card--active">
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
            </rt-card-b2o>
            <rt-card-b2o :is-white-color="true" class="carousel-card">
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
            </rt-card-b2o>
            <rt-card-b2o :is-white-color="true" class="carousel-card">
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
            </rt-card-b2o>
            <rt-card-b2o  :is-white-color="true" class="carousel-card">
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
            </rt-card-b2o>
            <rt-card-b2o :is-white-color="true" class="carousel-card">
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
            </rt-card-b2o>
            <rt-card-b2o :is-white-color="true" class="carousel-card">
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
            </rt-card-b2o>
            <rt-card-b2o background-color-type="dark-slate" :background-blur="5" :is-white-color="true" class="carousel-card">
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
            </rt-card-b2o>
            <rt-card-b2o background-color-type="light-blue" :background-blur="5" :is-white-color="true" class="carousel-card">
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
            </rt-card-b2o>
          </rt-card-carousel>
          </div>
          <rt-resize-content-height
            :query-selectors-names="[
                '.rt-card-b2o'
              ]" class="row rt-space-top">
            <div class="rt-col-3">
              <rt-card-b2o target="_blank" href="https://google.com" :is-blue-card="true" :has-hidden-footer="true">
                <template slot="content">
                  <div class="rt-space-top6">
                  <svg width="50px" height="60px" viewBox="0 0 50 60" version="1.1" xmlns="http://www.w3.org/2000/svg" class="rt-card-b2o-icon-fill">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="DSGN-450_B2O_new_site_1460_v2_start" transform="translate(-170.000000, -1222.000000)">
                        <g id="Group-Copy-2" transform="translate(150.000000, 1095.000000)">
                          <g id="005-B80px" transform="translate(5.000000, 117.000000)">
                            <g>
                              <path d="M40,12.5 C46.9,12.5 52.5,18.1 52.5,25 C52.5,31.9 46.9,37.5 40,37.5 C33.1,37.5 27.5,31.9 27.5,25 C27.5,18.1 33.1,12.5 40,12.5 L40,12.5 Z M40,10 C31.725,10 25,16.725 25,25 C25,33.275 31.725,40 40,40 C48.275,40 55,33.275 55,25 C55,16.725 48.275,10 40,10 L40,10 Z" id="Shape" fill-rule="nonzero"></path>
                              <path d="M17.5,70 L17.5,55 C17.5,50.875 20.875,47.5 25,47.5 L55,47.5 C59.125,47.5 62.5,50.875 62.5,55 L62.5,70 L65,70 L65,55 C65,49.475 60.525,45 55,45 L25,45 C19.475,45 15,49.475 15,55 L15,70 L17.5,70 Z" id="Path" fill-rule="nonzero"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p class="rt-space-top0-half">Управляйте текущими услугами и заказывайте новые через личный кабинет оператора.</p>
                  </div>
                </template>
                <template slot="footer">
                  <rt-button class="rt-button-white rt-button-small rt-button--is-block">Подключить</rt-button>
                </template>
              </rt-card-b2o>
            </div>
            <div class="rt-col-3">
              <rt-card-b2o target="_blank" href="https://google.com" :is-blue-card="true"  :has-hidden-footer="true">
                <template slot="content">
                  <div class="rt-space-top6">
                  <svg width="60px" height="56px" viewBox="0 0 60 56" version="1.1" xmlns="http://www.w3.org/2000/svg"  class="rt-card-b2o-icon-fill">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="DSGN-450_B2O_new_site_1460_v2_start" transform="translate(-755.000000, -1225.000000)">
                        <g id="Group-Copy-7" transform="translate(740.000000, 1095.000000)">
                          <g id="227-B80px" transform="translate(5.000000, 118.000000)">
                            <g>
                              <path d="M45,17.25 L58.1,26.25 L45,35.25 L45,32.5 L45,30 L42.5,30 L32.5,30 L32.5,22.5 L42.5,22.5 L45,22.5 L45,20 L45,17.25 L45,17.25 Z M42.5,12.5 L42.5,20 L30,20 L30,32.5 L42.5,32.5 L42.5,40 L62.5,26.25 L42.5,12.5 L42.5,12.5 Z" id="Shape" fill="#101828" fill-rule="nonzero"></path>
                              <path d="M35,44.75 L35,47.5 L35,50 L37.5,50 L47.5,50 L47.5,57.5 L37.5,57.5 L35,57.5 L35,60 L35,62.75 L21.9,53.75 L35,44.75 L35,44.75 Z M37.5,40 L17.5,53.75 L37.5,67.5 L37.5,60 L50,60 L50,47.5 L37.5,47.5 L37.5,40 L37.5,40 Z" id="Shape" fill="#101828" fill-rule="nonzero"></path>
                              <rect id="Rectangle" fill="#101828" fill-rule="nonzero" x="10" y="20" width="17.5" height="2.5"></rect>
                              <rect id="Rectangle" fill="#101828" fill-rule="nonzero" x="15" y="25" width="12.5" height="2.5"></rect>
                              <rect id="Rectangle" fill="#101828" fill-rule="nonzero" x="22.55" y="30" width="4.95" height="2.5"></rect>
                              <rect id="Rectangle" fill="#101828" fill-rule="nonzero" x="52.5" y="47.5" width="17.5" height="2.5"></rect>
                              <rect id="Rectangle" fill="#101828" fill-rule="nonzero" x="52.5" y="52.5" width="12.5" height="2.5"></rect>
                              <rect id="Rectangle" fill="#101828" fill-rule="nonzero" x="52.5" y="57.5" width="4.95" height="2.5"></rect>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p class="rt-space-top0-half">Подключайтесь к системе опорных маршрутизаторов, чтобы обеспечить резервы  в случае сбоя.</p>
                  </div>
                </template>
                <template slot="footer">
                  <rt-button class="rt-button-white rt-button-small rt-button--is-block">Подключить</rt-button>
                </template>
              </rt-card-b2o>
            </div>
            <div class="rt-col-3">
              <rt-card-b2o target="_blank" href="https://google.com" :is-blue-card="true" :has-hidden-footer="true">
                <template slot="content">
                  <div class="rt-space-top6">
                  <svg width="60px" height="46px" viewBox="0 0 60 46" version="1.1" xmlns="http://www.w3.org/2000/svg" class="rt-card-b2o-icon-fill">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="DSGN-450_B2O_new_site_1460_v2_start" transform="translate(-460.000000, -1230.000000)">
                        <g id="Group-Copy-6" transform="translate(445.000000, 1095.000000)">
                          <g id="185-B80px" transform="translate(5.000000, 118.000000)">
                            <g>
                              <path d="M67.5,20 L67.525,52.5 L12.5,52.525 L12.475,20 L67.5,20 L67.5,20 Z M67.525,17.5 L12.475,17.5 C11.125,17.5 10,18.625 10,19.975 L10,52.5 C10,53.875 11.125,55 12.475,55 L67.5,55 C68.875,55 69.9754088,53.875 69.9754088,52.525 L69.9754088,19.975 C70,18.625 68.875,17.5 67.525,17.5 L67.525,17.5 Z" id="Shape" fill-rule="nonzero"></path>
                              <rect id="Rectangle" fill-rule="nonzero" x="12.5" y="45" width="55" height="2.5"></rect>
                              <rect id="Rectangle" fill-rule="nonzero" x="42.5" y="55" width="2.5" height="7.5"></rect>
                              <rect id="Rectangle" fill-rule="nonzero" x="35" y="55" width="2.5" height="7.5"></rect>
                              <rect id="Rectangle" fill-rule="nonzero" x="30.05" y="60" width="19.95" height="2.5"></rect>
                              <path d="M40,51.225 C40.675,51.225 41.25,50.675 41.25,49.975 C41.25,49.275 40.7,48.725 40,48.725 C39.3,48.725 38.75,49.275 38.75,49.975 C38.75,50.675 39.325,51.225 40,51.225" id="Path" fill="#101828" fill-rule="nonzero"></path>
                              <path d="M23.725,35.025 C24.4,35.025 24.95,35.575 24.95,36.25 C24.95,36.925 24.4,37.475 23.725,37.475 C23.05,37.475 22.5,36.925 22.5,36.25 C22.5,35.575 23.05,35.025 23.725,35.025 L23.725,35.025 Z M23.725,32.525 C21.675,32.525 20,34.2 20,36.25 C20,38.3 21.675,39.975 23.725,39.975 C25.775,39.975 27.45,38.3 27.45,36.25 C27.45,34.2 25.775,32.525 23.725,32.525 L23.725,32.525 Z" id="Shape"  fill-rule="nonzero"></path>
                              <path d="M56.225,27.525 C56.9,27.525 57.45,28.075 57.45,28.75 C57.45,29.425 56.9,29.975 56.225,29.975 C55.55,29.975 55,29.425 55,28.75 C55,28.075 55.55,27.525 56.225,27.525 L56.225,27.525 Z M56.225,25.025 C54.175,25.025 52.5,26.7 52.5,28.75 C52.5,30.8 54.175,32.475 56.225,32.475 C58.275,32.475 59.95,30.8 59.95,28.75 C59.95,26.675 58.275,25.025 56.225,25.025 L56.225,25.025 Z" id="Shape" fill-rule="nonzero"></path>
                              <path d="M53.1,28.9 L41.975,34.5 L39.475,27 L25.8,33.9 C26.4,34.475 26.8,35.275 26.9,36.15 L38.025,30.525 L40.525,38.025 L54.2,31.15 C53.6,30.55 53.2,29.775 53.1,28.9 Z" id="Path" fill="#101828" fill-rule="nonzero"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p class="rt-space-top0-half">Получайте статистику по всем поданым заявкам.</p>
                  </div>
                </template>
                <template slot="footer">
                  <rt-button class="rt-button-white rt-button-small rt-button--is-block">Подключить</rt-button>
                </template>
              </rt-card-b2o>
            </div>

            <div class="rt-col-3">
              <rt-card-b2o target="_blank" href="https://google.com" :is-blue-card="true" :has-hidden-footer="true">
                <template slot="content">
                  <div class="rt-space-top6">

                    <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" class="rt-card-b2o-icon-fill">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="DSGN-450_B2O_new_site_1460_v2_start" transform="translate(-1050.000000, -1223.000000)">
                          <g id="Group-Copy-8" transform="translate(1035.000000, 1095.000000)">
                            <g id="175-B80px" transform="translate(5.000000, 118.000000)">
                              <g>
                                <polygon id="Path" fill="#101828" fill-rule="nonzero" points="69.925 70 50.475 53.375 52.1 51.475 70 66.75"></polygon>
                                <path d="M35,12.5 C47.4,12.5 57.5,22.6 57.5,35 C57.5,47.4 47.4,57.5 35,57.5 C22.6,57.5 12.5,47.4 12.5,35 C12.5,22.6 22.6,12.5 35,12.5 L35,12.5 Z M35,10 C21.2,10 10,21.2 10,35 C10,48.8 21.2,60 35,60 C48.8,60 60,48.8 60,35 C60,21.2 48.8,10 35,10 L35,10 Z" id="Shape" fill="#101828" fill-rule="nonzero"></path>
                                <g id="Group" transform="translate(27.500000, 25.000000)" fill="#101828" fill-rule="nonzero">
                                  <path d="M5,22.5 L2.5,22.5 L2.5,12.5 L0,12.5 L0,10 L2.5,10 L2.5,0 L11.35,0 C14.75,0 17.5,2.75 17.5,6.15 C17.5,9.65 14.65,12.5 11.15,12.5 L5,12.5 L5,22.5 Z M5,10 L11.15,10 C13.275,10 15,8.275 15,6.15 C15,4.125 13.35,2.5 11.35,2.5 L5,2.5 L5,10 Z" id="Shape"></path>
                                  <rect id="Rectangle" x="0" y="15" width="12.5" height="2.5"></rect>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  <p class="rt-space-top0-half">Оцените прозрачную тарифную политику  и стабильные расценки  на доступ к инфраструктуре.</p>
                  </div>
                </template>
                <template slot="footer">
                  <rt-button class="rt-button-white rt-button-small rt-button--is-block">Подключить</rt-button>
                </template>
              </rt-card-b2o>
            </div>
            <div class="row rt-space-top">
            <div class="rt-col-4">
              <rt-card-b2o :has-bottom-content="true">
                <template slot="content">
                  IP-транзит
                </template>
              </rt-card-b2o>
            </div>
              <div class="rt-col-4">
              <rt-card-b2o :has-bottom-content="true">
                <template slot="content">
                  Аренда каналов
                </template>
              </rt-card-b2o>
            </div>
              <div class="rt-col-4">
              <rt-card-b2o :has-bottom-content="true">
                <template slot="content">
                  VPN
                </template>
              </rt-card-b2o>
            </div>
          </div>
          </rt-resize-content-height>
          <div class="row rt-space-top">
            <div class="rt-col-4">
              <pre-code
                text="<rt-card :ga=&quot;{ offerName: 'Kaspersky Internet Security 4' }&quot;>
                  <template slot='header'>
                    <img width='175px'
                         class='rt-card__headeremitSelectedData__image'
                         src='/static/images/homeinternet/homeinternet-image18.jpg'/>
                  </template>
                  <template slot='content'>
                    <p class='rt-font-paragraph color-main07 rt-font-bold rt-space-top2'>
                        Kaspersky Internet Security 4
                    </p>
                    <p class='rt-space-top color-main07 rt-space-right2'>
                        Одна лицензия на&nbsp;все&nbsp;«детские» Android-устройства
                    </p>
                  </template>
                  <template slot='bottom-list'>
                    <div class='rt-card-list rt-space-bottom2'>
                      <div class='rt-card-list__item'>
                        <div class='rt-card-list__icon'>
                          <img src='/static/images/medium-icon.svg'/>
                        </div>
                        <div class='rt-card-list__name'>
                          <p class='rt-font-small-paragraph color-main05'>
                            Защищает 2 устройства одновременно
                          </p>
                        </div>
                        </div>
                        <div class='rt-card-list__item'>
                          <div class='rt-card-list__icon'>
                            <div class='rt-space-left15'>
                              <img src='/static/images/small-icon.svg'/>
                            </div>
                          </div>
                          <div class='rt-card-list__name'>
                            <p class='rt-font-small-paragraph color-main05'>
                                Первый месяц в&nbsp;подарок
                            </p>
                          </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Контроль интернет-сайтов
                                </p>
                            </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Игровой формат и&nbsp;простые настройки
                                </p>
                            </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Определение местоположения
                                </p>
                            </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Сообщения ребенку
                                </p>
                            </div>
                        </div>
                        <div class='rt-card-list__item'>
                            <div class='rt-card-list__icon'>
                                <div class='rt-space-left15'>
                                    <img
                                            src='/static/images/small-icon.svg'
                                    />
                                </div>
                            </div>
                            <div class='rt-card-list__name'>
                                <p class='rt-font-small-paragraph color-main05'>
                                    Контроль приложений и&nbsp;времени
                                </p>
                            </div>
                        </div>
                    </div>
                </template>

                <template slot='content-without-wrapper'>
                    <div class='rt-card__border-content'>
                        <div class='rt-col-12 flex-end-center rt-space-top'>
                            <rt-price
                                    :value='1600'
                                    :old-value='1800'
                                    time-interval='год.'
                            ></rt-price>
                        </div>
                        <div class='rt-space-top05'>
                            <rt-button class='rt-button-orange rt-button--is-block'>Подключить</rt-button>
                        </div>
                    </div>
                </template>
            </rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-td-3 rt-col-md-3">
              <a href="#events">
                <rt-card :is-white-color="true" background-color-type="green" :ga="{value:'Новости'}">
                  <template slot="content">
                    <div class="rt-space-top2 rt-space-bottom">
                      <img src="//static-cdn.rt.ru/sites/default/files/img/icon/news-icon.svg" width="80px" />
                    </div>
                    <p class="rt-font-paragraph rt-font-bold">Новости</p>
                    <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">Анонсы акций, изменения в&nbsp;тарифах
                      и&nbsp;новости Ростелеком</p>
                  </template>
                  <template slot="footer">
                    <rt-button class="rt-button-white rt-button-small rt-space-horizontal">Все новости</rt-button>
                  </template>
                </rt-card>
              </a>
            </div>
          </div>
          <div class="row is-b2c">
            <rt-resize-content-height
              :query-selectors-names="[
                '.rt-card__bottom-list',
                '.rt-card__footer',
                '.rt-card__body'
              ]"
              class="rt-col-12">
              <rt-fullscreen-image
                background-image="https://rt.ru/sites/default/files/img/widget/DSGN-930_PControl_1920%D1%851080.jpg"
                background-position="top">
                <div class="rt-md-space-top2 rt-space-top5">
                  <div
                    class="row row--mobile-scroll rt-space-top4 rt-font-hypnens-off">
                    <div class="rt-col-4 rt-col-md-3 d-md-flex-column is-b2c">
                      <rt-card>
                        <template slot="header">
                          <img
                            class="rt-image-max-full-width"
                            src="http://rt.ru/sites/default/files/internet/Kaspersky_color.svg"
                          />
                        </template>
                        <template slot="content">
                          <h3
                            class="rt-font-h3 color-main07 rt-font-bold rt-space-top2">
                            Kaspersky Safe Kids
                          </h3>
                          <p class="rt-space-top color-main07 rt-space-right2">
                            Защита ребенка на&nbsp;всех устройствах Windows, Mac,
                            Android, iPhone, iPad
                          </p>
                        </template>
                        <template slot="bottom-list">
                          <div class="rt-card-list">
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Первый месяц в&nbsp;подарок
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Гибкое регулирование доступа к&nbsp;сайтам
                                  и&nbsp;программам
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Ограничение времени использования устройств
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Отслеживание звонков и&nbsp;SMS ребенка
                                  на&nbsp;телефоне Android
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Контроль местонахождения ребенка
                                  и&nbsp;установка безопасной зоны
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  SMS-информирование о&nbsp;действиях ребенка
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Советы психолога по&nbsp;поведению детей
                                  в&nbsp;сети интернет
                                </p>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="rt-col-12 flex-end-center rt-space-top">
                            <rt-price
                              :value="0"
                              :old-value="99"
                              time-interval="мес."
                            />
                          </div>
                        </template>
                      </rt-card>
                    </div>
                    <div class="rt-col-4 rt-col-md-3 d-md-flex-column rt-md-space-top is-b2c">
                      <rt-card>
                        <template slot="header">
                          <img class="rt-image-max-full-width" src="http://rt.ru/sites/default/files/internet/ESET_color.svg"/>
                        </template>
                        <template slot="content">
                          <h3 class="rt-font-h3 color-main07 rt-font-bold rt-space-top2">
                            ESET NOD32 Parental Control
                          </h3>
                          <p class="rt-space-top color-main07 rt-space-right2">
                            Одна лицензия на&nbsp;все&nbsp;«детские»
                            Android-устройства
                          </p>
                        </template>
                        <template slot="bottom-list">
                          <div class="rt-card-list">
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Первый месяц в&nbsp;подарок
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Контроль интернет-сайтов
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Игровой формат и&nbsp;простые настройки
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Определение местоположения
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Сообщения ребенку
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"/>
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Контроль приложений и&nbsp;времени
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  <br><br><br>
                                </p>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="rt-col-12 flex-end-center rt-space-top">
                            <rt-price :value="0"
                              :old-value="99"
                              time-interval="мес."/>
                          </div>
                        </template>
                      </rt-card>
                    </div>
                    <div class="rt-col-4 rt-col-md-3 d-md-flex-column rt-md-space-top is-b2c">
                      <rt-card>
                        <template slot="header">
                          <img
                            class="rt-image-max-full-width"
                            src="http://rt.ru/sites/default/files/img/logo/my_children.svg"
                          />
                        </template>
                        <template slot="content">
                          <h3
                            class="rt-font-h3 color-main07 rt-font-bold rt-space-top2"
                          >
                            Сервис «Где мои дети»
                          </h3>
                          <p class="rt-space-top color-main07 rt-space-right2">
                            Отслеживайте местоположение ребёнка онлайн
                            в&nbsp;мобильном приложении
                          </p>
                        </template>
                        <template slot="bottom-list">
                          <div class="rt-card-list">
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Бесплатный период 7&nbsp;дней
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Специальная цена для&nbsp;абонентов Ростелекома
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Просмотр местоположения ребёнка на&nbsp;карте
                                  и&nbsp;истории его&nbsp;перемещений за&nbsp;день
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Установка «зеленых зон» и&nbsp;получение
                                  оповещений, если ребенок выходит за&nbsp;них
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Звоники с&nbsp;громким сигналом в приложении,
                                  даже если ребёнок включил бесшумный режим
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Контроль заряда батареи на&nbsp;устройстве
                                  ребенка, чтобы он&nbsp;не&nbsp;остался
                                  без&nbsp;связи вдали от&nbsp;дома
                                </p>
                              </div>
                            </div>
                            <div class="rt-card-list__item">
                              <div class="rt-card-list__icon">
                                <div class="rt-space-left15">
                                  <img
                                    src="http://rt.ru/sites/default/files/internet/icon_26%20copy%209.svg"
                                  />
                                </div>
                              </div>
                              <div class="rt-card-list__name">
                                <p class="rt-font-small-paragraph color-main05">
                                  Детские GPS-часы (Приобретаются отдельно)
                                </p>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="row">
                            <div
                              class="rt-col-12 rt-space-vertical flex-end-center"
                            >
                              <rt-price
                                :value="99"
                                :old-value="299"
                                time-interval="мес."
                              />
                            </div>
                            <div class="rt-col-12">
                              <a
                                href="https://wwww.old.rt.ru/action/homeinternet/act_int_my_children"
                                class="d-block"
                                target="_blank"
                              >
                                <rt-button
                                  class="rt-button-orange rt-button--is-block"
                                  >Подключить</rt-button
                                >
                              </a>
                            </div>
                          </div>
                        </template>
                      </rt-card>
                    </div>
                  </div>
                </div>
              </rt-fullscreen-image>
            </rt-resize-content-height>
          </div>
          <div class="row">
            <div class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image card-image="/static/images/cardImage3.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">
                    Headstone
                  </p>
                  <p class="rt-font-label-uppercase rt-space-vertical05">
                    игровой интернет
                  </p>
                  <p>Получай подарки в лучших играх Headstone!</p>
                </template>
                <template slot="list">
                  <rt-card-image-list :has-icon="true">
                    <template slot="icon">
                      <img
                        src="/static/example-images/iconCard.png"
                        width="55px"
                        alt=""
                      />
                    </template>
                    <template>
                      <div>
                        <p class="color-main07">
                          Премиум аккаунт
                        </p>
                        <p class="color-main05">
                          Доступна любая из четырёх крутых пушек. Тип оружия можно
                          изменять каждые 24 часа
                        </p>
                      </div>
                    </template>
                  </rt-card-image-list>
                  <rt-card-image-list>
                    Доступна любая из четырёх крутых пушек. Тип оружия можно
                    изменять каждые 24 часа
                  </rt-card-image-list>
                  <rt-card-image-list>
                    Доступна любая из четырёх крутых пушек. Тип оружия можно
                    изменять каждые 24 часа
                  </rt-card-image-list>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage3.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">
                    Headstone
                  </p>
                  <p class="rt-font-label-uppercase rt-space-vertical05">
                    игровой интернет
                  </p>
                  <p>Получай подарки в лучших играх Headstone!</p>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-4 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage3.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">
                    Headstone
                  </p>
                  <p class="rt-font-label-uppercase rt-space-vertical05">
                    игровой интернет
                  </p>
                  <p>Получай подарки в лучших играх Headstone!</p>
                </template>
              </rt-card-image>
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage1.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">
                    Headstone
                  </p>
                  <p class="rt-font-label-uppercase rt-space-vertical05">
                    игровой интернет
                  </p>
                  <p>Получай подарки в лучших играх Headstone!</p>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage2.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">
                    Headstone
                  </p>
                  <p class="rt-font-label-uppercase rt-space-vertical05">
                    игровой интернет
                  </p>
                  <p>Получай подарки в лучших играх Headstone!</p>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage3.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">
                    Headstone
                  </p>
                  <p class="rt-font-label-uppercase rt-space-vertical05">
                    игровой интернет
                  </p>
                  <p>Получай подарки в лучших играх Headstone!</p>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off is-b2c">
              <rt-card-image
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue"
                card-image="/static/images/cardImage1.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph rt-font-bold">
                    Headstone
                  </p>
                  <p class="rt-font-label-uppercase rt-space-vertical05">
                    игровой интернет
                  </p>
                  <p>Получай подарки в лучших играх Headstone!</p>
                </template>
              </rt-card-image>
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-cover="true"
                :is-white-color="true"
                :col-size="2"
                background-color-type="light-blue">
                <template slot="header">
                  <div class="rt-font-center">
                    <svg
                      width="97"
                      height="79"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="#FFF"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M37.0208333 1l-8.3125 15.0051282 19.59375 61.6 46.90625-61.6"
                        />
                        <path
                          d="M59.1875 1L67.5 16.0051282l-19.59375 61.6L1 16.0051282"
                        />
                        <path
                          d="M1 16.0051282L23.5625 1H72.25l22.5625 15.0051282z"
                        />
                      </g>
                    </svg>
                  </div>
                </template>
                <template slot="content">
                  <p class="rt-font-paragraph rt-font-bold rt-space-top05">
                    Бонусная программа
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Подключайте друзей и зарабатывайте бонусы
                  </p>
                </template>
                <template slot="footer">
                  <a href="/bonus">
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Подробнее
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-cover="true"
                :is-white-color="true"
                :background-smoke="0.5"
                :col-size="6"
                background-color-type="green">
                <template slot="header">
                  <div class="rt-font-center">
                    <img
                      src="http://rt.ru/sites/default/files/img/icon/news-icon.svg"
                      height="79"
                    />
                  </div>
                </template>
                <template slot="content">
                  <p class="rt-font-paragraph rt-font-bold rt-space-top2">
                    Новости
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Анонсы акций, изменения в тарифах и новости Ростелеком
                  </p>
                </template>
                <template slot="footer">
                  <a href="https://www.old.rt.ru/press" target="_blank">
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Все новости
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
            <div class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-opacity="0.9"
                :background-cover="true"
                :is-white-color="true"
                :background-smoke="0.5"
                :col-size="2"
                :offset-top="true"
                background-image="/sites/default/files/2018-07/games_0.png"
                background-color-type="black">
                <template slot="content">
                  <p class="rt-font-paragraph rt-font-bold">
                    Игровой
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Высокоскоростной интернет и игровые бонусы для увлеченных
                    геймеров
                  </p>
                </template>
                <template slot="footer">
                  <a
                    href="/internet/constructor?offer=369771569758&lcs=active&tv-package=285383c0"
                  >
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Выберите свою игровую опцию
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
            <div class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-opacity="0.9"
                :background-cover="true"
                :is-white-color="true"
                :background-smoke="0.5"
                :col-size="2"
                :offset-top="true"
                background-image="/sites/default/files/img/licey.jpg"
                background-color-type="black">
                <template slot="content">
                  <p class="rt-font-paragraph rt-font-bold">
                    Ростелеком Лицей
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Поможем усвоить школьную программу онлайн
                  </p>
                </template>
                <template slot="footer">
                  <a href="https://lc.rt.ru" target="_blank">
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Подробнее
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
            <div class="rt-col-6 rt-col-md-3 rt-space-top rt-font-hypnens-off d-stretch is-b2c">
              <rt-card
                :background-opacity="0.9"
                :background-cover="true"
                :is-white-color="true"
                :background-smoke="0.5"
                :col-size="2"
                background-color-type="dark-blue">
                <template slot="content">
                  <div class="rt-font-center rt-space-top15 rt-space-bottom">
                    <img
                      src="http://rt.ru/sites/default/files/img/icon/wink_80x80.svg"
                    />
                  </div>
                  <p class="rt-font-paragraph rt-font-bold">
                    Wink
                  </p>
                  <p class="rt-font-paragraph rt-space-top05 rt-space-bottom05">
                    Лучшие ТВ‑каналы, сериалы и фильмы в одном приложении
                  </p>
                </template>
                <template slot="footer">
                  <a href="/wink">
                    <rt-button
                      class="rt-button-white rt-button-small rt-space-horizontal"
                      >Перейти
                    </rt-button>
                  </a>
                </template>
              </rt-card>
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='purple' :background-blur='5' :is-white-color='true'><template slot='content'><p class='rt-font-paragraph rt-space-bottom rt-font-bold'>Оплата услуг</p><rt-input value='' placeholder='телефон, email или счёт'/><p class='rt-space-top05 rt-card-text rt-space-right'>Введите номер телефона, email или номер лицевого счёта</p></template><template slot='footer'><rt-button :is-block='true' class='rt-button-small rt-button-white white-wave'>Оплатить</rt-button></template></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='light-blue' :background-blur='5' :is-white-color='true'><template slot='content'><div class='rt-font-center rt-space-top15 rt-space-bottom'><svg width='97' height='79' xmlns='http://www.w3.org/2000/svg'><g stroke='#FFF' stroke-width='2' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'><path d='M37.0208333 1l-8.3125 15.0051282 19.59375 61.6 46.90625-61.6' /><path d='M59.1875 1L67.5 16.0051282l-19.59375 61.6L1 16.0051282' /><path d='M1 16.0051282L23.5625 1H72.25l22.5625 15.0051282z' /></g></svg></div><p class='rt-font-paragraph rt-font-bold rt-space-top'>Бонусы</p><p class='rt-space-top05'>Подключайте друзей  и зарабатывайте бонусы</p></template><template slot='footer'><p>Условия акции</p></template></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground5.png' background-position='bottom-right' :col-size='2'><template slot='content'><p class='rt-font-label'>стоимость покупки</p><rt-price :value='1480' :only-price='true' /></template><template slot='footer'><p class='rt-font-paragraph rt-font-bold'>Звоните по новому</p><p class='rt-font-paragraph rt-space-top05 rt-space-bottom'>Беспроцентная рассрочка на смартфоны Samsung Galaxy S8 для абонентов Ростелекома</p><p class='rt-space-top'>Условия акции</p></template></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card lazy-background-image='https://pm1.narvii.com/6871/d75902fe4db353dc19d3bbf8ae2a2f64f6c84a0dr1-1280-864v2_128.jpg' background-image='/static/example-images/cardBackground3.png' :is-white-color='true' :background-cover='true' :background-smoke='0.3'><template slot='content'><p class='rt-font-paragraph rt-space-bottom rt-font-bold'>Оплата услуг</p><rt-input value='' placeholder='телефон, email или счёт' /><p class='rt-space-top05 rt-card-text rt-space-right'>Введите номер телефона, email или номер лицевого счёта</p></template><template slot='footer'><rt-button :is-block='true' class='rt-button-small rt-button-white white-wave'>Оплатить</rt-button></template></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground3.png' :background-opacity='0.5' background-position='bottom-right' :is-white-color='true' :background-cover='true' :background-smoke='0.5' :offset-top='true'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Родительский контроль</p><p class='rt-space-top05 rt-card-text rt-space-right'>для безопасности детей в интернете</p></template><template slot='footer'><p>Выберите свой тип подписки</p></template></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground6.png':background-cover='true':background-opacity='0.7':background-smoke='0.3':is-white-color='true':offset-top='true'background-color-type='black' :col-size='2'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Антивирусы</p><p class='rt-space-top05'>Выгодная защита <br>для всех устройств</p></template><template slot='footer'><p>Выберите свой тип подписки</p></template></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground10.png' :background-cover='true' :background-opacity='0.7' :background-smoke='0.3' :is-white-color='true' :offset-top='true' background-color-type='black' :col-size='2'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Игровой</p><p class='rt-space-top05'>Высокоскоростной <br> интернет и игровые бонусы <br>для увлеченных геймеров</p></template><template slot='footer'><p>Выберите свою игровую опцию</p></template></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true' :background-opacity='0.7' :background-smoke='0.3' :is-white-color='true' :offset-top='true' background-color-type='black' :col-size='2'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Microsoft Office 365</p><p class='rt-space-top05'>Полный пакет программ <br>для всей семьи</p></template><template slot='footer'><p>Выберите свой тип подписки</p></template></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground8.png' :background-cover='true' :is-white-color='true' background-color-type='black' :col-size='2'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Игровой Warface</p><p class='rt-space-top05 rt-font-small-upper rt-font-small-upper'>интернет</p><p class='rt-space-top rt-font-spacing018'>Крутые пушки всем <br> абонентам, оружие <br> навсегда, кредиты каждый<br> день</p></template><template slot='footer'><div class='rt-font-right'><rt-price :value='850' /></div><rt-button :is-block='true' class='rt-button-small rt-button-white white-wave'>Подключить</rt-button></template></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground9.png' background-position='bottom-right' :col-size='2'><template slot='content'><p class='rt-space-top05 rt-font-small-upper'>стоимость покупки</p><rt-price :value='4990' :only-price='true' /></template><template slot='footer'><div class='rt-space-bottom2'><p class='rt-font-paragraph rt-font-bold'>Wi-Fi HD-видеокамера</p><p class='rt-space-top05'>Контролируйте все <br>происходящее на расстоянии <br>  и просматривайте записи на<br> любом устройстве. </p></div></template></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground7.png' :background-cover='true' :background-opacity='0.7' :background-smoke='0.2' :is-white-color='true' :offset-top='true' background-color-type='black'><template slot='content'><p class='rt-font-paragraph rt-font-bold'>Мобильное ТВ</p><p class='rt-space-top05'>101 тв-канал с контентом на любой вкус в подарок </p></template><template slot='footer'><p>Подробнее</p></template></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='red' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='orange' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='yellow' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='pink' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='green' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true'/>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true' :background-blur='5'><p class='rt-card__label rt-font-paragraph'>Оплата услуг</p></rt-card>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card :background-repeat='true' background-image='/static/example-images/cardBackground2.png' :background-smoke='0.3'/>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-smoke='0.5'/>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true'/>"
              />
            </div>
          </div>
          <div class="row">
            <div class="rt-col-12 rt-col-md-3 rt-space-top is-b2c">
              <pre-code
                text="<rt-card background-image='/static/example-images/cardBackground1.png' :background-cover='true'/>"
              />
            </div>
            <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch is-b2c">
              <pre-code
                text="<rt-card background-color-type='dark-blue' :background-blur='5'><p>Оплата услуг</p></rt-card>"
              />
            </div>
          </div>
          <div class="row">
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b color-white">
            <pre-code
              text='
                <rt-card background-image="/static/images/B2B/category-img.png" :product-card="true" background-color-type="yellow-high">
                  <template slot="content">
                    <h3 class="rt-font-bold rt-space-bottom">Номер 8 800</h3>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                  </template>
                  <template slot="footer">
                    <div class="rtb-card__cost">
                      <rt-price
                        :value="2.5"
                        :is-option="true"
                        currency="₽"
                        :b2b-price="true"
                        time-interval="в месяц"
                      />
                    </div>
                  </template>
                </rt-card>
            '/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text='
                <rt-card background-image="/static/images/B2B/category-img.png" :product-card="true" background-color-type="purple">
                  <template slot="content">
                    <h3 class="rt-font-bold rt-space-bottom">Номер 8 800</h3>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                  </template>
                  <template slot="footer">
                    <div class="rtb-card__cost">
                      <rt-price
                        :value="2.5"
                        :is-option="true"
                        currency="₽"
                        :b2b-price="true"
                        time-interval="в месяц"
                      />
                    </div>
                  </template>
                </rt-card>
            '/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text='
                <rt-card product-icon="/static/images/B2B/063-c.svg" :product-card="true" background-color-type="white">
                  <template slot="content">
                    <h3 class="rt-font-bold rt-space-bottom">Номер 8 800</h3>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2 rt-space-bottom05">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                    <p class="p2">Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа</p>
                  </template>
                  <template slot="footer">
                    <div class="rtb-card__cost">
                      <rt-price
                        :value="2.5"
                        :is-option="true"
                        currency="₽"
                        :b2b-price="true"
                        time-interval="в месяц"
                      />
                    </div>
                  </template>
                </rt-card>
            '/>
          </div>
          <div class="rt-col-12 rt-col-td-6 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              background-image='/static/images/B2B/category-img.png'
              :is-b2b-category='true'
              :category-card-size='3'
              background-color-type='green-low'
              :is-white-color='true'
              category-icon-mobile='/static/images/B2B/shield.svg'>
              <template slot='content'>
                <h3 class='rt-font-bold rt-space-bottom05'>
                  Видеонаблюдение
                </h3>
                <div class='rt-font-small-paragraph'>
                  Система удаленного видеонаблюдения
                </div>
              </template>
              <template slot='footer'>
                <a href='#'>
                  <rt-button
                    class='rt-button-white rt-button-small rt-space-horizontal'
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-8 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              background-image='/static/images/B2B/virtual-ATS.png'
              :is-b2b-category='true'
              :category-card-size='2'
              background-color-type='purple'
              :is-white-color='true'
              category-icon-mobile='/static/images/B2B/shield.svg'>
              <template slot='content'>
                <p class='rt-font-h3 rt-font-bold rt-space-bottom05 rtb-category__title'>
                  Виртуальная АТС
                </p>
                <div class='rt-font-small-paragraph'>
                  Быстрое подключение без трат на оборудование, возможность
                  пользоваться из любой точки мира и ни одного пропущенного
                  звонка клиента
                </div>
              </template>
              <template slot='footer'>
                <rt-price
                  :is-option='true'
                  :value='500'
                  currency='₽'
                  time-interval='в месяц'
                  :b2b-price='true'/>
                <a href='#'>
                  <rt-button
                    class='rt-button-white rt-button-small rt-space-horizontal'
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              :is-b2b-category='true'
              :category-card-size='1'
              background-color-type='dark-blue'
              :is-white-color='true'
              category-icon-mobile='/static/images/B2B/shield.svg'>
              <template slot='content'>
                <p class='rt-font-paragraph rt-font-bold rt-space-bottom05 rtb-category__title'>
                  Сервис по защите от сетевых угроз
                </p>
                <div class='rt-font-small-paragraph'>
                  На базе решения класса Unified Threat Management (UTM)
                </div>
              </template>
              <template slot='footer'>
                <a href='#'>
                  <rt-button
                    class='rt-button-white rt-button-small rt-space-horizontal'
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <pre-code
              text="<rt-card
              :is-b2b-category='true'
              :category-card-size='1'
              category-icon-mobile='/static/images/B2B/mobile-call.svg'>
              <template slot='content'>
                <p class='rt-font-paragraph rt-font-bold rt-space-bottom05 rtb-category__title'>
                  Сервис по защите от сетевых угроз
                </p>
                <div class='rt-font-small-paragraph'>
                  На базе решения класса Unified Threat Management (UTM)
                </div>
              </template>
              <template slot='footer'>
                <rt-price
                  :is-option='true'
                  :value='500'
                  currency='₽'
                  time-interval='в месяц'
                  :b2b-price='true'/>
                <a href='#'>
                  <rt-button
                    class='rt-button-purple-border rt-button-small rt-space-horizontal'
                  >Подробнее</rt-button>
                </a>
              </template>
            </rt-card>"/>
          </div>
          <div class="rt-col-4 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <rt-card :equal-padding="true">
              <template slot="content">
                <div class="rtb-card__vertical">
                  <div class="rtb-card__vertical__left-column">
                    <img src="/static/images/B2B/wifi.svg" >
                  </div>
                  <div class="rtb-card__vertical__right-column">
                    <p class="rt-font-paragraph rt-font-bold mb5">
                      Управляемый Wi-Fi
                    </p>
                    <p class="rt-font-small-paragraph">
                      Мощные роутеры в аренду, удобный личный кабинет и
                      рекламная платформа
                    </p>
                    <div class="rt-space-bottom" />
                    <a href="#">
                      <button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </button>
                    </a>
                  </div>
                </div>
              </template>
            </rt-card>
          </div>
          <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top higher-z is-b2b">
            <rt-card :equal-padding="true">
              <template slot="header">
                <p class="rt-font-paragraph rt-space-bottom rt-font-bold">
                  Вызов 400
                </p>
              </template>
              <template slot="content">
                <div class="rtb-card__description__row">
                  <span class="rt-font-paragraph rt-font-bold">300 минут</span>
                  <rt-hint :simple-tool-tip="true">
                    <slot>
                      Это всё что угодно,<br >но не адрес электронной почты
                    </slot>
                  </rt-hint>
                  <p class="rt-font-small-paragraph color-main025">
                    на номера домашнего региона
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph rt-font-bold">
                    50 СМС
                  </p>
                  <p class="rt-font-small-paragraph color-main025">
                    по всей России
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph rt-font-bold">
                    3 Гб
                  </p>
                  <p class="rt-font-small-paragraph color-main025">
                    интернета по всей России
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <links-block :icon-array="[
                  {tooltip: 'gjlcrfprf1', path: 'vk'},
                  {tooltip: 'gjlcrfprf2', path: 'ya_map'},
                  {tooltip: 'gjlcrfprf3', path: 'youtube'},
                  {tooltip: 'gjlcrfprf4', path: 'viber'},
                  {tooltip: 'gjlcrfprf5', path: 'whatsapp'},
                  {tooltip: 'gjlcrfprf6', path: 'tamtam'},
                  {tooltip: 'gjlcrfprf7', path: 'odnoklassniki'},
                  {tooltip: 'gjlcrfprf8', path: 'facebook'},
                  {tooltip: 'gjlcrfprf9', path: 'ya_navigator'},
                  {tooltip: 'gjlcrfprf10', path: 'ya_transport'},
                  ]"
                               source-directory="/static/images/B2B/">
                  </links-block>
                </div>
              </template>
              <template slot="footer">
                <div class="rt-space-bottom" />
                <div class="rtb-card__cost">
                  <rt-price
                    :value="400"
                    :is-option="false"
                    currency="₽"
                    :b2b-price="true"
                    time-interval=""
                  />
                </div>
                <a href="#">
                  <button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                    Выбрать
                  </button>
                </a>
              </template>
            </rt-card>
          </div>
          <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top is-b2b">
            <rt-card :equal-padding="true" :has-label="true">
              <template slot="header">
                <div class="rt-space-bottom">
                  <span class="rt-font-paragraph rt-font-bold">
                    Видеонаблюдение 500
                  </span>
                  <rt-hint :simple-tool-tip="true">
                    <slot>
                      Это всё что угодно,<br >но не адрес электронной почты
                    </slot>
                  </rt-hint>
                </div>
              </template>
              <template slot="label">
                <h4 class="rt-font-h4">- 30%</h4>
              </template>
              <template slot="content">
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph ">
                    до 650 Мбит/с
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph ">
                    4 антенны
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph color-main025">
                    Авторизация через СМС
                  </p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph color-main025">
                    Защита роутера
                  </p>
                </div>
              </template>
              <template slot="footer">
                <div class="rt-space-bottom" />
                <div class="rtb-card__cost">
                  <rt-price
                    :value="500"
                    :is-option="false"
                    currency="₽"
                    :b2b-price="true"
                    time-interval="в месяц"
                  />
                </div>
                <a href="#">
                  <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                    Выбрать
                  </rt-button>
                </a>
              </template>
            </rt-card>
          </div>
        </div>
        </div>
      </div>
      <div class="rt-space-top2">
        <!--<div class="rt-container">-->
          <!--<div class="rt-col">-->
            <rt-card-layout :swiper-on-mobile="true" :width="6">
            <template slot="cards">
              <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                <rt-card>
                  <template slot="header">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">до 650 Мбит/</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">4 антенны</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Защита роутера</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <div class="rt-space-bottom" />
                    <div class="rtb-card__cost rt-space-bottom">
                      <rt-price :value="500"
                                :is-option="false"
                                currency="₽"
                                :b2b-price="true"
                                time-interval="в месяц"
                                :is-time-interval-bottom="true"/>
                    </div>
                    <a href="#">
                      <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </rt-button>
                    </a>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                <rt-card>
                  <template slot="header">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">до 650 Мбит/</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">4 антенны</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Защита роутера</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <div class="rt-space-bottom" />
                    <div class="rtb-card__cost rt-space-bottom">
                      <rt-price :value="500"
                                :is-option="false"
                                currency="₽"
                                :b2b-price="true"
                                time-interval="в месяц"
                                :is-time-interval-bottom="true"/>
                    </div>
                    <a href="#">
                      <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </rt-button>
                    </a>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                <rt-card>
                  <template slot="header">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">до 650 Мбит/</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">4 антенны</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Защита роутера</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <div class="rt-space-bottom" />
                    <div class="rtb-card__cost rt-space-bottom">
                      <rt-price :value="500"
                                :is-option="false"
                                currency="₽"
                                :b2b-price="true"
                                time-interval="в месяц"
                                :is-time-interval-bottom="true"/>
                    </div>
                    <a href="#">
                      <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </rt-button>
                    </a>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                <rt-card>
                  <template slot="header">
                    <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">до 650 Мбит/</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph ">4 антенны</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                    </div>
                    <div class="rtb-card__description__row">
                      <p class="rt-font-paragraph color-main025">Защита роутера</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <div class="rt-space-bottom" />
                    <div class="rtb-card__cost rt-space-bottom">
                      <rt-price :value="500"
                                :is-option="false"
                                currency="₽"
                                :b2b-price="true"
                                time-interval="в месяц"
                                :is-time-interval-bottom="true"/>
                    </div>
                    <a href="#">
                      <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                        Выбрать
                      </rt-button>
                    </a>
                  </template>
                </rt-card>
              </div>
            </template>
            <template slot="side-text">
              <div class="rt-col-3 rt-col-td-6 rt-col-md-3 rt-space-top">
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph ">до 650 Мбит/</p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph ">4 антенны</p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                </div>
                <div class="rtb-card__description__row">
                  <p class="rt-font-paragraph color-main025">Защита роутера</p>
                </div>
              </div>
            </template>
          </rt-card-layout>
          <!--</div>-->
        <!--</div>-->
      </div>
      <div class="rt-space-top2">
        <!--<div class="rt-container">-->
          <!--<div class="rt-col">-->
            <rt-card-layout :swiper-on-mobile="true" :width="9" :single-row="true">
              <template slot="cards">
                <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                  <rt-card>
                    <template slot="header">
                      <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                    </template>
                    <template slot="content">
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">до 650 Мбит/</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">4 антенны</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Защита роутера</p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="rt-space-bottom" />
                      <div class="rtb-card__cost rt-space-bottom">
                        <rt-price :value="500"
                                  :is-option="false"
                                  currency="₽"
                                  :b2b-price="true"
                                  time-interval="в месяц"
                                  :is-time-interval-bottom="true"/>
                      </div>
                      <a href="#">
                        <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                          Выбрать
                        </rt-button>
                      </a>
                    </template>
                  </rt-card>
                </div>
                <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                  <rt-card>
                    <template slot="header">
                      <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                    </template>
                    <template slot="content">
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">до 650 Мбит/</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">4 антенны</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Защита роутера</p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="rt-space-bottom" />
                      <div class="rtb-card__cost rt-space-bottom">
                        <rt-price :value="500"
                                  :is-option="false"
                                  currency="₽"
                                  :b2b-price="true"
                                  time-interval="в месяц"
                                  :is-time-interval-bottom="true"/>
                      </div>
                      <a href="#">
                        <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                          Выбрать
                        </rt-button>
                      </a>
                    </template>
                  </rt-card>
                </div>
                <div class="rt-col-3 rt-col-td-3 rt-col-md-3 rt-space-top">
                  <rt-card>
                    <template slot="header">
                      <p class="rt-font-paragraph rt-space-bottom rt-font-bold">Тариф 1</p>
                    </template>
                    <template slot="content">
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">до 650 Мбит/</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph ">4 антенны</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                      </div>
                      <div class="rtb-card__description__row">
                        <p class="rt-font-paragraph color-main025">Защита роутера</p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="rt-space-bottom" />
                      <div class="rtb-card__cost rt-space-bottom">
                        <rt-price :value="500"
                                  :is-option="false"
                                  currency="₽"
                                  :b2b-price="true"
                                  time-interval="в месяц"
                                  :is-time-interval-bottom="true"/>
                      </div>
                      <a href="#">
                        <rt-button class="rt-button rt-button-small rt-button-purple-border rt-space-horizontal05">
                          Выбрать
                        </rt-button>
                      </a>
                    </template>
                  </rt-card>
                </div>
              </template>
              <template slot="side-text">
                <div class="rt-col-3 rt-col-ld-12 rt-col-td-6 rt-col-md-3 rt-space-top">
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph ">до 650 Мбит/</p>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph ">4 антенны</p>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph color-main025">Авторизация через СМС</p>
                  </div>
                  <div class="rtb-card__description__row">
                    <p class="rt-font-paragraph color-main025">Защита роутера</p>
                  </div>
                </div>
              </template>
            </rt-card-layout>
          <!--</div>-->
        <!--</div>-->
      </div>
      <div class="rt-space-top2">
        <div class="rt-container">
          <div class="rt-col">
            <div class="row">
              <div class="rt-col-3">
                <rt-card :equal-padding="true"
                         :has-expanded-block="true">
                  <template slot="header">
                    <p class="rt-font-paragraph rt-font-bold rt-space-bottom0-half">Пакет 1 500</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__underlined-section">
                      <p class="rt-font-small-paragraph rt-space-bottom15">Включен городской номер<br>или&nbsp;номер&nbsp;8&nbsp;800</p>
                      <p class="rt-font-paragraph rt-font-bold">10</p>
                      <p class="rt-font-small-paragraph rt-space-bottom color-main05">рабочих мест</p>
                      <p class="rt-font-paragraph rt-font-bold">1 500 минут</p>
                      <p class="rt-font-small-paragraph rt-space-bottom color-main05">на&nbsp;любые телефоны&nbsp;России</p>
                    </div>
                  </template>
                  <template slot="expanding-block">
                    <div class="rtb-card__expanding-button d-inline-flex d-space-between tagline color-purple rt-space-bottom05-half">
                      <span class="card-expander">включено сервисов</span>
                      <span class="card-expander">4</span>
                    </div>
                    <div class="rtb-card__expanding-content rt-space-left rt-font-control color-main07 rt-md-space-left-none">
                      <p class="with-icon rt-space-bottom05">Переадресация</p>
                      <p class="with-icon rt-space-bottom05">Голосовое меню IVR</p>
                      <p class="with-icon rt-space-bottom05">Распределение звонков</p>
                      <p class="with-icon rt-space-bottom05">Статистика и&nbsp;аналитика</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <rt-price :value='400'
                              :is-option='false'
                              currency='₽'
                              :b2b-price='true'
                              time-interval='в месяц'
                              :is-time-interval-bottom="true"/>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-3">
                <rt-card :equal-padding="true"
                         :has-expanded-block="true">
                  <template slot="header">
                    <p class="rt-font-paragraph rt-font-bold rt-space-bottom0-half">Пакет 1 500</p>
                  </template>
                  <template slot="content">
                    <div class="rtb-card__underlined-section">
                      <p class="rt-font-small-paragraph rt-space-bottom15">Включен городской номер<br>или&nbsp;номер&nbsp;8&nbsp;800</p>
                      <p class="rt-font-paragraph rt-font-bold">10</p>
                      <p class="rt-font-small-paragraph rt-space-bottom color-main05">рабочих мест</p>
                      <p class="rt-font-paragraph rt-font-bold">1 500 минут</p>
                      <p class="rt-font-small-paragraph rt-space-bottom color-main05">на&nbsp;любые телефоны&nbsp;России</p>
                    </div>
                  </template>
                  <template slot="expanding-block">
                    <div class="rtb-card__expanding-button d-inline-flex d-space-between tagline color-purple rt-space-bottom05-half">
                      <span class="card-expander">включено сервисов</span>
                      <span class="card-expander">4</span>
                    </div>
                    <div class="rtb-card__expanding-content rt-space-left rt-font-control color-main07 rt-md-space-left-none">
                      <p class="with-icon rt-space-bottom05">Переадресация</p>
                      <p class="with-icon rt-space-bottom05">Голосовое меню IVR</p>
                      <p class="with-icon rt-space-bottom05">Распределение звонков</p>
                      <p class="with-icon rt-space-bottom05">Статистика и&nbsp;аналитика</p>
                    </div>
                  </template>
                  <template slot="footer">
                    <rt-price :value='400'
                              :is-option='false'
                              currency='₽'
                              :b2b-price='true'
                              time-interval='в месяц'
                              :is-time-interval-bottom="true"/>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-3">
                <rt-card :equal-padding="true"
                         background-image="/static/images/B2B/virtual-ATS.png"
                         :full-width-top-image="true"
                         :has-gradient-over-image="true">
                  <template slot="content">
                    <p class="rt-font-small-paragraph rt-space-bottom15">Включен городской номер<br>или&nbsp;номер&nbsp;8&nbsp;800</p>
                    <p class="rt-font-paragraph rt-font-bold">10</p>
                    <p class="rt-font-small-paragraph rt-space-bottom color-main05">рабочих мест</p>
                    <p class="rt-font-paragraph rt-font-bold">1 500 минут</p>
                    <p class="rt-font-small-paragraph rt-space-bottom color-main05">на&nbsp;любые телефоны&nbsp;России</p>
                  </template>
                </rt-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>
<script>
  import documentation from "../../../lib/components/Card/docs/index.json";
  import componentsList from "../../componentsList";

  export default {
    name: "AppCards",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {},
    methods: {}
};
</script>
