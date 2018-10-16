<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">

      <div class="app-title">
        <h1 class="rt-font-hero">Table</h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <div class="rt-col rt-font-hypnens-off">
            <rt-table>
              <template slot="header">
                <rt-table-head-item><p class="rt-font-h2">Наименование и описание услуг</p></rt-table-head-item>
                <rt-table-head-item>Стоимость, руб. <p class="rt-font-label">без оформления ежемесячной подписки</p>
                </rt-table-head-item>
                <rt-table-head-item>Стоимость, руб.
                  <p class="rt-font-label">со скидкой 10% при оформлении ежемесячной подписки</p></rt-table-head-item>
              </template>
              <template slot="body">
                <rt-table-row>
                  <rt-table-item>Устная правовая консультация <br>
                    По любым юридическим вопросам, включая вопросы по защите прав потребителей, трудовое
                    законодательство, семейное, вопросы ДТП, налоговые вычеты и т.д.
                  </rt-table-item>
                  <rt-table-item><p class="rt-font-bold">150</p></rt-table-item>
                  <rt-table-item><p class="rt-font-bold">135</p></rt-table-item>
                </rt-table-row>
                <rt-table-row>
                  <rt-table-item>Доверь переговоры юристу <br>
                    Переговоры за вас по любому юридическому вопросу без вашего участия
                  </rt-table-item>
                  <rt-table-item><p class="rt-font-bold">250</p></rt-table-item>
                  <rt-table-item><p class="rt-font-bold">235</p></rt-table-item>
                </rt-table-row>
              </template>
            </rt-table>
            <div class="rt-space-top3">
              <rt-table>
                <template slot="header">
                  <rt-table-head-item vertical-align="top"><p class="rt-font-h2">Территория</p></rt-table-head-item>
                  <rt-table-head-item vertical-align="top">Наименование услуги</rt-table-head-item>
                  <rt-table-head-item vertical-align="top">Бесплатный период, дней</rt-table-head-item>
                  <rt-table-head-item vertical-align="top">Стоимость добровольной блокировки в базовый период (руб./в день)
                  </rt-table-head-item>
                  <rt-table-head-item width="300" vertical-align="top">Мораторий на блокировку, дней</rt-table-head-item>
                  <rt-table-head-item vertical-align="top">Минимальный период блокировки, дней</rt-table-head-item>
                </template>
                <template slot="body">
                  <rt-table-row>
                    <rt-table-item>Архангельская и Мурманская область, Республика Карелия</rt-table-item>
                    <rt-table-item>Домашний телефон, Домашний интернет, Интерактивное ТВ</rt-table-item>
                    <rt-table-item>60</rt-table-item>
                    <rt-table-item>3</rt-table-item>
                    <rt-table-item align="center">30</rt-table-item>
                    <rt-table-item>7</rt-table-item>
                  </rt-table-row>
                  <rt-table-row>
                    <rt-table-item>Республика Коми, Вологодская, Калининградская, Новгородская, Псковская и
                      Ленинградская области и город Санкт-Петербург
                    </rt-table-item>
                    <rt-table-item>Домашний телефон, Домашний интернет, Интерактивное ТВ</rt-table-item>
                    <rt-table-item>30</rt-table-item>
                    <rt-table-item>3</rt-table-item>
                    <rt-table-item align="center">30</rt-table-item>
                    <rt-table-item>7</rt-table-item>
                  </rt-table-row>
                </template>
              </rt-table>
            </div>
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
    mounted() {
      console.info("componentsList", componentsList);
      console.info(Array.isArray(componentsList));
    }
  };
</script>

<style scoped lang="scss">
</style>
