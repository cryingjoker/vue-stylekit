<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title"><h1 class="rt-font-hero">Table</h1></div>
      <div class="app-body">
        <div class="app-row row">
          <div class="rt-col rt-font-hypnens-off">
            <pre-code
              text="
              <rt-table class=&quot;rt-space-bottom2&quot; :tablet-list-type=&quot;true&quot;>
              <template slot=&quot;label&quot;>
                Тарифы на добровольную блокировку
              </template>

              <template slot=&quot;header&quot;>
                <rt-table-head-item>Территория</rt-table-head-item>
                <rt-table-head-item>Наименование услуги</rt-table-head-item>
                <rt-table-head-item>Бесплатный период</rt-table-head-item>
                <rt-table-head-item>Мораторий на блокировку</rt-table-head-item>
                <rt-table-head-item>Минимальный период блокировки</rt-table-head-item>
                <rt-table-head-item>Стоимость добровольной блокировки в базовый период</rt-table-head-item>
              </template>
              <template slot=&quot;body&quot;>
                <rt-table-row>
                  <rt-table-item>Архангельская и Мурманская
                    область Республика Карелия</rt-table-item>
                  <rt-table-item>Домашний интернет,
                    Домашний телефон
                    Интерактивное ТВ</rt-table-item>
                  <rt-table-item>60 дней</rt-table-item>
                  <rt-table-item>3 дня</rt-table-item>
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
              </template>
            </rt-table>
            "
            />
            <pre-code
              text="<rt-table class=&quot;rt-space-bottom2&quot;>
              <template slot=&quot;label&quot;>
                Звонки
              </template>
              <template slot=&quot;columns&quot;>
                <rt-table-col></rt-table-col>
                <rt-table-col width=&quot;200px&quot;></rt-table-col>
                <rt-table-col width=&quot;200px&quot;></rt-table-col>
              </template>
              <template slot=&quot;header&quot;>
                <rt-table-head-item>Услуга</rt-table-head-item>
                <rt-table-head-item>С опцией</rt-table-head-item>
                <rt-table-head-item>Без опции</rt-table-head-item>
              </template>
              <template slot=&quot;body&quot;>
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
              </template>
            </rt-table>"
            />

            <rt-table class="rt-space-bottom4">
              <template slot="label">
                Интернет
              </template>
              <template slot="columns">
                <rt-table-col></rt-table-col>
                <rt-table-col width="200px"></rt-table-col>
              </template>
              <template slot="header">
                <rt-table-head-item>Услуга</rt-table-head-item>
                <rt-table-head-item>Без опции</rt-table-head-item>
              </template>
              <template slot="body">
                <rt-table-row>
                  <rt-table-item>Все входящие звонки по России</rt-table-item>
                  <rt-table-item>По тарифу домашней сети</rt-table-item>
                </rt-table-row>
              </template>
            </rt-table>
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
