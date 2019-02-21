<template>

  <div class="app-content">
    <div class="rt-container">
      <div class="app-title"><h1 class="rt-font-hero">Row List</h1></div>
    </div>
    <div class="app-body">
      <div class="rt-container">
        <pre-code
          text="
        <rt-row-list>
          <rt-row-list-item>
            <template slot=&quot;icon&quot;>
              <svg width=&quot;56px&quot; height=&quot;56px&quot; viewBox=&quot;0 0 56 56&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;>
                <g id=&quot;Page-1&quot; stroke=&quot;none&quot; stroke-width=&quot;1&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;>
                  <g id=&quot;internet&quot; transform=&quot;translate(-209.000000, -8438.000000)&quot;>
                    <g id=&quot;Fill-35&quot; transform=&quot;translate(209.000000, 8438.000000)&quot;>
                      <path d=&quot;M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589&quot; fill=&quot;#FF5F4B&quot;></path>
                      <path d=&quot;M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z&quot; id=&quot;Stroke-167&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M40.6899,34.8915 L14.7429,20.3755&quot; id=&quot;Stroke-168&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M38.7627,39.2968 L14.7427,25.4628&quot; id=&quot;Stroke-169&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot=&quot;option&quot;>
              <div class=&quot;d-flex flex-row&quot;>
                <div>
                  <p>Антивирус</p>
                  <p class=&quot;color-main05&quot;>Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot=&quot;value&quot;>
              <rt-price :value=&quot;69&quot; :is-option=&quot;true&quot; currency=&quot;€&quot; />
            </template>
          </rt-row-list-item>
          <rt-row-list-item>
            <template slot=&quot;icon&quot;>
              <svg width=&quot;56px&quot; height=&quot;56px&quot; viewBox=&quot;0 0 56 56&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;>
                <g id=&quot;Page-1&quot; stroke=&quot;none&quot; stroke-width=&quot;1&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;>
                  <g id=&quot;internet&quot; transform=&quot;translate(-209.000000, -8438.000000)&quot;>
                    <g id=&quot;Fill-35&quot; transform=&quot;translate(209.000000, 8438.000000)&quot;>
                      <path d=&quot;M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589&quot; fill=&quot;#FF5F4B&quot;></path>
                      <path d=&quot;M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z&quot; id=&quot;Stroke-167&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M40.6899,34.8915 L14.7429,20.3755&quot; id=&quot;Stroke-168&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M38.7627,39.2968 L14.7427,25.4628&quot; id=&quot;Stroke-169&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot=&quot;option&quot;>
              <div class=&quot;d-flex flex-row&quot;>
                <div>
                  <p>Антивирус</p>
                  <p class=&quot;color-main05&quot;>Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot=&quot;value&quot;>
              <rt-price :value=&quot;69&quot; :is-option=&quot;true&quot; currency=&quot;€&quot; />
            </template>
          </rt-row-list-item>
          <rt-row-list-item>
            <template slot=&quot;icon&quot;>
              <svg width=&quot;56px&quot; height=&quot;56px&quot; viewBox=&quot;0 0 56 56&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;>
                <g id=&quot;Page-1&quot; stroke=&quot;none&quot; stroke-width=&quot;1&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;>
                  <g id=&quot;internet&quot; transform=&quot;translate(-209.000000, -8438.000000)&quot;>
                    <g id=&quot;Fill-35&quot; transform=&quot;translate(209.000000, 8438.000000)&quot;>
                      <path d=&quot;M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589&quot; fill=&quot;#FF5F4B&quot;></path>
                      <path d=&quot;M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z&quot; id=&quot;Stroke-167&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M40.6899,34.8915 L14.7429,20.3755&quot; id=&quot;Stroke-168&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M38.7627,39.2968 L14.7427,25.4628&quot; id=&quot;Stroke-169&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot=&quot;option&quot;>
              <div class=&quot;d-flex flex-row&quot;>
                <div>
                  <p>Антивирус</p>
                  <p class=&quot;color-main05&quot;>Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot=&quot;value&quot;>
              <rt-button class=&quot;rt-button-orange rt-font-no-wrap&quot;>Подключить</rt-button>
            </template>
          </rt-row-list-item>
          <rt-row-list-item>
            <template slot=&quot;icon&quot;>
              <svg width=&quot;56px&quot; height=&quot;56px&quot; viewBox=&quot;0 0 56 56&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;>
                <g id=&quot;Page-1&quot; stroke=&quot;none&quot; stroke-width=&quot;1&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;>
                  <g id=&quot;internet&quot; transform=&quot;translate(-209.000000, -8438.000000)&quot;>
                    <g id=&quot;Fill-35&quot; transform=&quot;translate(209.000000, 8438.000000)&quot;>
                      <path d=&quot;M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589&quot; fill=&quot;#FF5F4B&quot;></path>
                      <path d=&quot;M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z&quot; id=&quot;Stroke-167&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M40.6899,34.8915 L14.7429,20.3755&quot; id=&quot;Stroke-168&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M38.7627,39.2968 L14.7427,25.4628&quot; id=&quot;Stroke-169&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot=&quot;option&quot;>
              <div class=&quot;d-flex flex-row&quot;>
                <div>
                  <p>Антивирус</p>
                  <p class=&quot;color-main05&quot;>Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot=&quot;value&quot;>
              <div class=&quot;rt-font-no-wrap&quot;>
                <span>100 мб <span class=&quot;rt-space-horizontal&quot;>7 руб./сутки</span></span>
                <span class=&quot;md-d-block rt-md-space-top&quot;>
                  <rt-button class=&quot;rt-button-orange rt-button-small&quot;>Подключить</rt-button>
                </span>
              </div>
            </template>
          </rt-row-list-item>
          <rt-row-list-item>
            <template slot=&quot;icon&quot;>
              <svg width=&quot;56px&quot; height=&quot;56px&quot; viewBox=&quot;0 0 56 56&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;>
                <g id=&quot;Page-1&quot; stroke=&quot;none&quot; stroke-width=&quot;1&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;>
                  <g id=&quot;internet&quot; transform=&quot;translate(-209.000000, -8438.000000)&quot;>
                    <g id=&quot;Fill-35&quot; transform=&quot;translate(209.000000, 8438.000000)&quot;>
                      <path d=&quot;M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589&quot; fill=&quot;#FF5F4B&quot;></path>
                      <path d=&quot;M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z&quot; id=&quot;Stroke-167&quot; stroke=&quot;#FFFFFF&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M40.6899,34.8915 L14.7429,20.3755&quot; id=&quot;Stroke-168&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                      <path d=&quot;M38.7627,39.2968 L14.7427,25.4628&quot; id=&quot;Stroke-169&quot; stroke=&quot;#FFFFFF&quot; stroke-linejoin=&quot;round&quot;></path>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template slot=&quot;option&quot;>
              <div class=&quot;d-flex flex-row&quot;>
                <div>
                  <p>Антивирус</p>
                  <p class=&quot;color-main05&quot;>Kaspersky Internet Security, месяц в подарок</p>
                </div>
            </div>
            </template>
            <template slot=&quot;value&quot;>
              <div class=&quot;rt-font-no-wrap&quot;>
                <span>100 мб <span class=&quot;rt-space-horizontal&quot;>7 руб./сутки</span></span>
              </div>
            </template>
            <template slot=&quot;moreInfo&quot;>
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

            <template slot=&quot;option&quot;>
              <div class=&quot;d-flex flex-row&quot;>
                <div>
                  <p>Антивирус</p>
                  <p class=&quot;color-main05&quot;>Kaspersky Internet Security, месяц в подарок</p>
                </div>
              </div>
            </template>
            <template slot=&quot;value&quot;>
              <rt-price :value=&quot;69&quot; :is-option=&quot;true&quot; currency=&quot;€&quot; />
            </template>
            <template slot=&quot;moreInfo&quot;>
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
        "
        />
      </div>
      <div class="is-b2b">
        <rt-row-list :is-profit-list="true">
          <rt-row-list-item
            :more-than-one-column="true"
            :columns-quantity="3"
            icon="/static/images/B2B/ATS.svg">
            <template slot="option">
              <div class="d-flex flex-row">
                <div class="ovh">
                  <p class="rt-font-paragraph rt-font-bold">Без лишних трат</p>
                  <p class="rt-font-small-paragraph">Дополнительное оборудование и офис не нужны, звонки внутри сети – бесплатно</p>
                </div>
              </div>
            </template>
          </rt-row-list-item>
          <rt-row-list-item
            :more-than-one-column="true"
            :columns-quantity="3"
            icon="/static/images/B2B/ATS.svg">
            <template slot="option">
              <div class="d-flex flex-row">
                <div class="ovh">
                  <p class="rt-font-paragraph rt-font-bold">Без лишних трат</p>
                  <p class="rt-font-small-paragraph">Дополнительное оборудование и офис не нужны, звонки внутри сети – бесплатно</p>
                </div>
              </div>
            </template>
          </rt-row-list-item>
          <rt-row-list-item
            :more-than-one-column="true"
            :columns-quantity="3"
            icon="/static/images/B2B/mobile-call.svg">
            <template slot="option">
              <div class="d-flex flex-row">
                <div class="ovh">
                  <p class="rt-font-paragraph rt-font-bold">Без лишних трат</p>
                  <p class="rt-font-small-paragraph">Дополнительное оборудование и офис не нужны, звонки внутри сети – бесплатно</p>
                </div>
              </div>
            </template>
          </rt-row-list-item>
          <rt-row-list-item
            :more-than-one-column="true"
            :columns-quantity="3"
            icon="/static/images/B2B/ATS.svg">
            <template slot="option">
              <div class="d-flex flex-row">
                <div class="ovh">
                  <p class="rt-font-paragraph rt-font-bold">Без лишних трат</p>
                  <p class="rt-font-small-paragraph">Дополнительное оборудование и офис не нужны, звонки внутри сети – бесплатно</p>
                </div>
              </div>
            </template>
          </rt-row-list-item>
          <rt-row-list-item
            :more-than-one-column="true"
            :columns-quantity="3"
            icon="/static/images/B2B/ATS.svg">
            <template slot="option">
              <div class="d-flex flex-row">
                <div class="ovh">
                  <p class="rt-font-paragraph rt-font-bold">Без лишних трат</p>
                  <p class="rt-font-small-paragraph">Дополнительное оборудование и офис не нужны, звонки внутри сети – бесплатно</p>
                </div>
              </div>
            </template>
          </rt-row-list-item>
          <rt-row-list-item
            :more-than-one-column="true"
            :columns-quantity="3"
            icon="/static/images/B2B/shield.svg">
            <template slot="option">
              <div class="d-flex flex-row">
                <div class="ovh">
                  <p class="rt-font-paragraph rt-font-bold">Без лишних трат</p>
                  <p class="rt-font-small-paragraph">Дополнительное оборудование и офис не нужны, звонки внутри сети – бесплатно</p>
                </div>
              </div>
            </template>
          </rt-row-list-item>
        </rt-row-list>
      </div>
    </div>
  </div>
</template>
<script>
// const componentsList = {};
import componentsList from "../../componentsList";
export default {
  name: "AppRowList",
  components: componentsList
};
</script>
