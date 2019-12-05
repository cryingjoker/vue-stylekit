<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Popup <span class="rt-code rt-font-h3 rt-col"> .rtb-popup</span>
          </h1>
        </div>
      </div>
      <div class="app-body">
        <div class="app-row">
          <div class="rt-col rt-space-bottom rt-space-top">
            <div class="row">
              <rt-button class="rt-button-transparent-purple popupButton" :popup-button="true">Попап</rt-button>
            </div>
          </div>
          <div class="rt-col-12">
            <div class="row">
              <div class="rt-col-4">
                <rt-card class="rt-card--img-full-width">
                  <template slot="header">
                    <div class="rt-card__image-wrapper rt-font-center">
                      <img class="additional-possibilities__card-image"
                           src="/sites/default/files/b2b/pg/vats/cards/Otdel_prodazh_1280x853.jpg">
                    </div>
                  </template>
                  <template slot="content">
                    <div class="rt-space-top05 rt-space-bottom2 rt-td-space-bottom15 rt-md-space-bottom adjust">
                      <p class="rt-font-paragraph rt-space-bottom05 rt-font-bold">У вас есть отдел продаж
                      </p>
                      <!--                     <p class="rt-font-small-paragraph md-d-none d-none">Вы можете подключить прямой городской номер, если работаете с клиентами только в своем городе, и номер 8800 если вам звонят клиенты со всей России</p> -->
                    </div>
                  </template>
                  <template slot="footer">
                    <rt-button
                      class="rt-button-purple-border rt-button-small rt-space-horizontal new-vats-popup-button"
                      :popup-button="true"
                      target-popup="rtb-popup-type-1">
                      Подробнее</rt-button>
                  </template>
                  <template slot="popup-special-benefits">
                    <div class="new-vats-popup__image-wrapper">
                      <img src="/sites/default/files/b2b/pg/vats/cards/Otdel_prodazh_1280x853.jpg"
                           class="new-vats-popup__image" />
                    </div>
                    <h2 class="rt-font-h3 rt-font-bold rt-space-vertical15">У вас есть отдел продаж</h2>
                    <p class="rt-font-small-paragraph rt-space-bottom05">Подключите прямой городской номер,
                      если
                      работаете с&nbsp;клиентами только в&nbsp;своем городе, или&nbsp;номер 8800, если вам
                      звонят клиенты со&nbsp;всей России — исходящие звонки для&nbsp;ваших клиентов будут
                      совершенно бесплатными.</p>
                    <p class="rt-font-small-paragraph rt-space-bottom">Все коммуникации менеджеров
                      с&nbsp;клиентами записываются и&nbsp;находятся под вашим контролем. Интегрируйте
                      Виртуальную АТС с&nbsp;CRM-системой для&nbsp;оптимизации бизнес-процессов.</p>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-4">
                <rt-card class="rt-card--img-full-width">
                  <template slot="header">
                    <div class="rt-card__image-wrapper rt-font-center">
                      <img class="additional-possibilities__card-image"
                           src="/sites/default/files/b2b/pg/vats/cards/Filial_1280x853.jpg">
                    </div>
                  </template>
                  <template slot="content">
                    <div class="rt-space-top05 rt-space-bottom rt-td-space-bottom15 rt-md-space-bottom adjust">
                      <p class="rt-font-paragraph rt-space-bottom05 rt-font-bold">У&nbsp;вас филиальная
                        сеть
                      </p>
                      <!--                     <p class="rt-font-small-paragraph md-d-none  d-none">Вы можете подключить прямой городской номер, звонить и принимать звонки через Виртуальную АТС без лишних затрат на организацию телефонии</p>
                  <p class="rt-font-small-paragraph md-d-none  d-none">Вы можете подключить прямой городской номер, звонить и принимать звонки через Виртуальную АТС без лишних затрат на организацию телефонии</p> -->
                    </div>
                  </template>
                  <template slot="footer">
                    <rt-button
                      class="rt-button-purple-border rt-button-small rt-space-horizontal new-vats-popup-button"
                      :popup-button="true"
                      target-popup="rtb-popup-type-2">
                      Подробнее</rt-button>
                  </template>
                  <template slot="popup-special-benefits">
                    <div class="new-vats-popup__image-wrapper">
                      <img src="/sites/default/files/b2b/pg/vats/cards/Filial_1280x853.jpg"
                           class="new-vats-popup__image" />
                    </div>
                    <h2 class="rt-font-h3 rt-font-bold rt-space-vertical">У&nbsp;вас филиальная сеть</h2>
                    <p class="rt-font-small-paragraph rt-space-bottom05">Для приема звонков от&nbsp;клиентов
                      со&nbsp;всей России подключите номер в&nbsp;коде 8800 или&nbsp;несколько городских
                      номеров для&nbsp;каждого филиала.</p>

                    <p class="rt-font-small-paragraph rt-space-bottom05">Настройте голосовое приветствие
                      и&nbsp;голосовое меню, которое распределит звонки от&nbsp;клиентов по&nbsp;разным
                      филиалам и&nbsp;записывайте разговоры, в&nbsp;том числе с&nbsp;мобильных телефонов,
                      чтобы проконтролировать работу менеджеров и&nbsp;получить обратную связь
                      от&nbsp;клиентов.</p>

                    <p class="rt-font-small-paragraph rt-space-bottom">А ваши сотрудники в&nbsp;разных
                      филиалах
                      смогут бесплатно общаться друг с&nbsp;другом и&nbsp;звонить по&nbsp;коротким
                      номерам.
                    </p>
                  </template>
                </rt-card>
              </div>
            </div>
          </div>
          <!--<pre-code text='-->
            <rt-real-popup :position-bottom="true" :popup-type="1">
              <div class="popup-content"></div>
            </rt-real-popup>
            <rt-real-popup :position-bottom="true" :popup-type="2">
              <div class="popup-content"></div>
            </rt-real-popup>
            <!--'/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import componentsList from "../../componentsList";
  export default {
    name: "AppPopup",
    components: componentsList,
    mounted() {
//      document.querySelector(".popupButton").addEventListener("click", () => {
//        document.querySelector(".rtb-popup-wrapper").classList.add('rtb-popup-wrapper--active');
//      });
    },
    created() {},
    methods: {}
  };
</script>
