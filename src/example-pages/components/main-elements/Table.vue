<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          Table
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <div class="rt-col rt-font-hypnens-off">
            <pre-code
              text="
              <rt-table class=&quot;rt-space-bottom2&quot; :tablet-list-type=&quot;true&quot;>
                <rt-template slot=&quot;label&quot;>
                  Тарифы на добровольную блокировку
                </rt-template>

                <rt-template slot=&quot;header&quot;>
                  <rt-table-head-item>Территория</rt-table-head-item>
                  <rt-table-head-item :colspan='4'>Наименование услуги</rt-table-head-item>
                  <rt-table-head-item>Мораторий на блокировку</rt-table-head-item>
                  <rt-table-head-item>Минимальный период блокировки</rt-table-head-item>
                  <rt-table-head-item>Стоимость добровольной блокировки в базовый период</rt-table-head-item>
                </rt-template>
                <rt-template slot=&quot;body&quot;>
                  <rt-table-row>
                    <rt-table-item>Архангельская и Мурманская
                      область Республика Карелия</rt-table-item>
                    <rt-table-item  colspan='3'>Домашний интернет,
                      Домашний телефон
                      Интерактивное ТВ</rt-table-item>
                      <rt-table-item>3 дня</rt-table-item>
                    <rt-table-item>30 дней</rt-table-item>
                    <rt-table-item>7 руб./в день</rt-table-item>
                    <rt-table-item>7 руб./в день</rt-table-item>
                  </rt-table-row>
                  <rt-table-row>
                    <rt-table-item>Республика Коми, Вологодская, Калининградская, Новгородская, Псковская и Ленинградская области и город Санкт-Петербург</rt-table-item>
                    <rt-table-item colspan='3'>Домашний интернет,
                      Домашний телефон
                      Интерактивное ТВ</rt-table-item>
                    <rt-table-item>60 дней</rt-table-item>
                    <rt-table-item>3 дня</rt-table-item>
                    <rt-table-item>30 дней</rt-table-item>
                    <rt-table-item>7 руб./в день</rt-table-item>
                  </rt-table-row>
                </rt-template>
              </rt-table>
              "
            />
            <div class="rt-space-top2">
            <pre-code
              text="
              <rt-table class=&quot;rt-space-bottom2&quot; :tablet-list-type=&quot;true&quot;>
                <rt-template slot=&quot;label&quot;>
                  Тарифы на добровольную блокировку
                </rt-template>

                <rt-template slot=&quot;header&quot;>
                  <rt-table-head-item>Территория</rt-table-head-item>
                  <rt-table-head-item>Наименование услуги</rt-table-head-item>
                  <rt-table-head-item>Бесплатный период</rt-table-head-item>
                  <rt-table-head-item>Мораторий на блокировку</rt-table-head-item>
                  <rt-table-head-item>Минимальный период блокировки</rt-table-head-item>
                  <rt-table-head-item>Стоимость добровольной блокировки в базовый период</rt-table-head-item>
                </rt-template>
                <rt-template slot=&quot;body&quot;>
                  <rt-table-row>
                    <rt-table-item>Архангельская и Мурманская
                      область Республика Карелия</rt-table-item>
                    <rt-table-item  colspan='3'>Домашний интернет,
                      Домашний телефон
                      Интерактивное ТВ</rt-table-item>
                    <rt-table-item>30 дней</rt-table-item>
                    <rt-table-item>7 руб./в день</rt-table-item>
                  </rt-table-row>
                  <rt-table-row>
                    <rt-table-item>Республика Коми, Вологодская, Калининградская, Новгородская, Псковская и Ленинградская области и город Санкт-Петербург</rt-table-item>
                    <rt-table-item>Домашний интернет,
                      Домашний телефон
                      Интерактивное ТВ</rt-table-item>
                    <rt-table-item>60 дней</rt-table-item>
                    <rt-table-item>3 дня</rt-table-item>
                    <rt-table-item>30 дней</rt-table-item>
                    <rt-table-item>7 руб./в день</rt-table-item>
                  </rt-table-row>
                </rt-template>
              </rt-table>
              "
            />
            </div>
            <pre-code
              text="<rt-table class=&quot;rt-space-bottom2&quot;>
                <rt-template slot=&quot;label&quot;>
                  Звонки
                </rt-template>
                <rt-template slot=&quot;columns&quot;>
                  <rt-table-col></rt-table-col>
                  <rt-table-col width=&quot;200px&quot;></rt-table-col>
                  <rt-table-col width=&quot;200px&quot;></rt-table-col>
                </rt-template>
                <rt-template slot=&quot;header&quot;>
                  <rt-table-head-item>Услуга</rt-table-head-item>
                  <rt-table-head-item>С опцией</rt-table-head-item>
                  <rt-table-head-item>Без опции</rt-table-head-item>
                </rt-template>
                <rt-template slot=&quot;body&quot;>
                  <rt-table-row>
                    <rt-table-item>Все входящие звонки по России</rt-table-item>
                    <rt-table-item>0 руб./мин.</rt-table-item>
                    <rt-table-item>5 руб./мин.</rt-table-item>
                  </rt-table-row>
                  <rt-table-row>
                    <rt-table-item>Исходящие звонки в СНГ</rt-table-item>
                    <rt-table-item>30 руб./мин.</rt-table-item>
                    <rt-table-item>30 руб./мин.</rt-table-item>
                  </rt-table-row>
                  <rt-table-row>
                    <rt-table-item>Исходящие звонки в Европу</rt-table-item>
                    <rt-table-item :inactive=&quot;true&quot;>49 руб./мин.</rt-table-item>
                    <rt-table-item>49 руб./мин.</rt-table-item>
                  </rt-table-row>
                  <rt-table-row>
                    <rt-table-item>Исходящие звонки в остальные страны</rt-table-item>
                    <rt-table-item :inactive=&quot;true&quot;>69 руб./мин.</rt-table-item>
                    <rt-table-item>69 руб./мин.</rt-table-item>
                  </rt-table-row>
                </rt-template>
              </rt-table>"
            />
            <pre-code
              text='
                <rt-table class="rt-space-bottom4">
                  <rt-template slot="label">
                    Интернет
                  </rt-template>
                  <rt-template slot="columns">
                    <rt-table-col />
                    <rt-table-col width="200px" />
                  </rt-template>
                  <rt-template slot="header">
                    <rt-table-head-item>Услуга</rt-table-head-item>
                    <rt-table-head-item>Без опции</rt-table-head-item>
                  </rt-template>
                  <rt-template slot="body">
                    <rt-table-row>
                      <rt-table-item>Все входящие звонки по России</rt-table-item>
                      <rt-table-item>По тарифу домашней сети</rt-table-item>
                    </rt-table-row>
                  </rt-template>
                </rt-table>'
            />
            <pre-code
              text='
                <div class="row">
                  <div class="rt-col-7 rt-col-td-3 rt-col-md-3">
                    <rt-table :no-borders="true">
                      <rt-template slot="label">Опция «Везде ноль»</rt-template>
                      <rt-template slot="columns">
                        <rt-table-col></rt-table-col>
                        <rt-table-col width="20%"></rt-table-col>
                      </rt-template>
                      <rt-template slot="description">
                        <p class="rt-font-paragraph rt-space-bottom2">Позволяет воспользоваться льготными ценами на
                          входящие звонки за пределами России.</p>
                      </rt-template>
                      <rt-template slot="body">
                        <rt-table-row>
                          <rt-table-item>Подключение</rt-table-item>
                          <rt-table-item>0 ₽</rt-table-item>
                        </rt-table-row>
                        <rt-table-row>
                          <rt-table-item>Абонентская плата</rt-table-item>
                          <rt-table-item>100 ₽/сутки</rt-table-item>
                        </rt-table-row>
                        <rt-table-row>
                          <rt-table-item>Стоимость интернет-трафика сверх включенного в абонентскую плату</rt-table-item>
                          <rt-table-item>10 ₽/Мб.</rt-table-item>
                        </rt-table-row>
                      </rt-template>
                    </rt-table>
                    <div class="d-inline-block rt-space-top3 rt-space-right4 rt-space-bottom2 rt-td-space-right3">
                      <h4 class="rt-font-bold">*100*350*1#</h4>
                      <p class="rt-font-center">подключение</p>
                    </div>
                    <div class="d-inline-block">
                      <h4 class="rt-font-bold">*100*350*0#</h4>
                      <p class="rt-font-center">отключение</p>
                    </div>
                    <div class="rt-col">
                      <rt-un-wrapper unwrap-button-text="показать" :including-desktop="true" :always-visible="true" unwrapped-button-text="свернуть">
                        <rt-template slot="short-content">
                          Абонентская плата взимается с момента подключения услуги до момента ее отключения абонентом.
                          Вы можете отключить услугу по возвращению в Россию,
                        </rt-template>
                        <rt-template slot="full-content">
                           чтобы избежать дополнительных расходов.	Тарификация услуги Мобильный Интернет в роуминге
                          производится с интервалом 50 Кб и округлением до ближайшего целого интервала в большую сторону.
                          Услуга действует за пределами России и доступна для подключения на всех корпоративных тарифных
                          планах.	За сутки принимается интервал с 00:00:00 до 23:59:59 по местному времени.	Цены указаны в
                          рублях с учетом НДС.	Список стран СНГ и Европы, в которых доступна услуга «Интернет за рубежом»
                          Абхазия, Австрия, Азербайджан, Албания, Андорра, Армения, Белоруссия, Бельгия, Болгария, Ватикан,
                          Великобритания, Венгрия, Германия, Грузия, Дания, Джерси и Гернси острова, Израиль, Ирландия,
                          Исландия, Испания, Италия, Казахстан, Кипр, Кыргызстан, Латвия, Литва, Лихтенштейн, Люксембург,
                          Мальта, Молдова, Монако, Нидерланды, Норвегия, Польша, Португалия, Румыния, Сан-Марино, Сербия,
                          Словакия, Словения, Таджикистан, Турция, Узбекистан, Украина, Финляндия, Франция, Хорватия,
                          Черногория, Чехия, Швейцария, Швеция, Эстония.
                        </rt-template>
                      </rt-un-wrapper>
                    </div>
                  </div>
                </div>'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import componentsList from "../../componentsList";
// const componentsList = {};
export default {
  name: "AppTable",
  components: componentsList,
  mounted() {}
};
</script>
