<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">Row List</h1>
      </div>
      <div class="app-body">
        <pre-code
          text='
        <rt-row-list>
          <rt-row-list-item>
            <template slot="icon">
              <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="internet" transform="translate(-209.000000, -8438.000000)">
                    <g id="Fill-35" transform="translate(209.000000, 8438.000000)">
                      <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                      <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" id="Stroke-167" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M40.6899,34.8915 L14.7429,20.3755" id="Stroke-168" stroke="#FFFFFF" stroke-linejoin="round"></path>
                      <path d="M38.7627,39.2968 L14.7427,25.4628" id="Stroke-169" stroke="#FFFFFF" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot="option">
              <div class="d-flex flex-row">
                <div>
                  <p>Антивирус</p>
                  <p class="color-main05">Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot="value">
              <rt-price :value="69" :is-option="true" currency="€" />
            </template>
          </rt-row-list-item>
          <rt-row-list-item>
            <template slot="icon">
              <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="internet" transform="translate(-209.000000, -8438.000000)">
                    <g id="Fill-35" transform="translate(209.000000, 8438.000000)">
                      <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                      <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" id="Stroke-167" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M40.6899,34.8915 L14.7429,20.3755" id="Stroke-168" stroke="#FFFFFF" stroke-linejoin="round"></path>
                      <path d="M38.7627,39.2968 L14.7427,25.4628" id="Stroke-169" stroke="#FFFFFF" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot="option">
              <div class="d-flex flex-row">
                <div>
                  <p>Антивирус</p>
                  <p class="color-main05">Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot="value">
              <rt-price :value="69" :is-option="true" currency="€" />
            </template>
          </rt-row-list-item>
          <rt-row-list-item>
            <template slot="icon">
              <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="internet" transform="translate(-209.000000, -8438.000000)">
                    <g id="Fill-35" transform="translate(209.000000, 8438.000000)">
                      <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                      <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" id="Stroke-167" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M40.6899,34.8915 L14.7429,20.3755" id="Stroke-168" stroke="#FFFFFF" stroke-linejoin="round"></path>
                      <path d="M38.7627,39.2968 L14.7427,25.4628" id="Stroke-169" stroke="#FFFFFF" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot="option">
              <div class="d-flex flex-row">
                <div>
                  <p>Антивирус</p>
                  <p class="color-main05">Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot="value">
              <rt-button class="rt-button-orange rt-font-no-wrap">Подключить</rt-button>
            </template>
          </rt-row-list-item>
          <rt-row-list-item>
            <template slot="icon">
              <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="internet" transform="translate(-209.000000, -8438.000000)">
                    <g id="Fill-35" transform="translate(209.000000, 8438.000000)">
                      <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                      <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" id="Stroke-167" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M40.6899,34.8915 L14.7429,20.3755" id="Stroke-168" stroke="#FFFFFF" stroke-linejoin="round"></path>
                      <path d="M38.7627,39.2968 L14.7427,25.4628" id="Stroke-169" stroke="#FFFFFF" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot="option">
              <div class="d-flex flex-row">
                <div>
                  <p>Антивирус</p>
                  <p class="color-main05">Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot="value">
              <div class="rt-font-no-wrap">
                <span>100 мб <span class="rt-space-horizontal">7 руб./сутки</span></span>
                <span class="md-d-block rt-md-space-top">
                  <rt-button class="rt-button-orange rt-button-small">Подключить</rt-button>
                </span>
              </div>
            </template>
          </rt-row-list-item>
          <rt-row-list-item>
            <template slot="icon">
              <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="internet" transform="translate(-209.000000, -8438.000000)">
                    <g id="Fill-35" transform="translate(209.000000, 8438.000000)">
                      <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                      <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" id="Stroke-167" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M40.6899,34.8915 L14.7429,20.3755" id="Stroke-168" stroke="#FFFFFF" stroke-linejoin="round"></path>
                      <path d="M38.7627,39.2968 L14.7427,25.4628" id="Stroke-169" stroke="#FFFFFF" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot="option">
              <div class="d-flex flex-row">
                <div>
                  <p>Антивирус</p>
                  <p class="color-main05">Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot="value">
              <div class="rt-font-no-wrap">
                <span>100 мб <span class="rt-space-horizontal">7 руб./сутки</span></span>
              </div>
            </template>
            <template slot="moreInfo">
              <p>Управление услугой доступно в Личном кабинете.</p>
              <p>Как подключить</p>
              <p>Наберите на телефоне *100*362*1# Кнопка вызова</p>
              <p>Как отключить</p>
              <p>Наберите на телефоне *100*362*1# Кнопка вызова</p>
              <p>Проверить статус услуги</p>
              <p>Наберите на телефоне *100*362*2# Кнопка вызова</p>
              <p>Сколько стоит</p>
              <p>Стоимость опции «Мессенджеры» включена в стоимость абонентской платы пакетных тарифных планов:</p>
              <p>«СУПЕРСИМКА S», «СУПЕРСИМКА M», «СУПЕРСИМКА L», «СУПЕРСИМКА XL»,</p>
              <p>«НА ВСЕХ L», «НА ВСЕХ XL»</p>
              <p>Опция «Мессенджеры» может быть подключена отдельно.</p>
              <p>Абонентская плата — 2 руб./сутки, плата за подключение отсутствует.</p>
              <p>Примечания</p>
              <p>Опция действует при нахождении в домашнем регионе и в поездках по России за исключением Республики Крым и г. Севастополь.</p>
              <p>Если через сайты или приложения «WhatsApp», «Viber», «ТамТам» открываются страницы, ссылки либо видео-ролики, для отображения которых требуется соединение с другими сайтами, интернет-трафик оплачивается абонентом в соответствии с действующим тарифным планом и скидками.</p>
              <p>Домашний регион — субъект Российской федерации, в котором заключен договор об оказании услуг связи.</p>
            </template>
          </rt-row-list-item>
          <rt-row-list-item>

            <template slot="option">
              <div class="d-flex flex-row">
                <div>
                  <p>Антивирус</p>
                  <p class="color-main05">Kaspersky Internet Security, месяц в подарок</p>
                </div>
              </div>
            </template>
            <template slot="value">
              <rt-price :value="69" :is-option="true" currency="€" />
            </template>
            <template slot="moreInfo">
              <p>Управление услугой доступно в Личном кабинете.</p>
              <p>Как подключить</p>
              <p>Наберите на телефоне *100*362*1# Кнопка вызова</p>
              <p>Как отключить</p>
              <p>Наберите на телефоне *100*362*1# Кнопка вызова</p>
              <p>Проверить статус услуги</p>
              <p>Наберите на телефоне *100*362*2# Кнопка вызова</p>
              <p>Сколько стоит</p>
              <p>Стоимость опции «Мессенджеры» включена в стоимость абонентской платы пакетных тарифных планов:</p>
              <p>«СУПЕРСИМКА S», «СУПЕРСИМКА M», «СУПЕРСИМКА L», «СУПЕРСИМКА XL»,</p>
              <p>«НА ВСЕХ L», «НА ВСЕХ XL»</p>
              <p>Опция «Мессенджеры» может быть подключена отдельно.</p>
              <p>Абонентская плата — 2 руб./сутки, плата за подключение отсутствует.</p>
              <p>Примечания</p>
              <p>Опция действует при нахождении в домашнем регионе и в поездках по России за исключением Республики Крым и г. Севастополь.</p>
              <p>Если через сайты или приложения «WhatsApp», «Viber», «ТамТам» открываются страницы, ссылки либо видео-ролики, для отображения которых требуется соединение с другими сайтами, интернет-трафик оплачивается абонентом в соответствии с действующим тарифным планом и скидками.</p>
              <p>Домашний регион — субъект Российской федерации, в котором заключен договор об оказании услуг связи.</p>
            </template>
          </rt-row-list-item>
        </rt-row-list>
        '></pre-code>
      </div>
    </div>
  </div>
</template>
<script>

// const componentsList = {};
import componentsList from '../../componentsList'
export default {
  name: 'AppRowList',
  components: componentsList,
};
</script>
