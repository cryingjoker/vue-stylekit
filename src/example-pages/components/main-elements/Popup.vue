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
            <rt-button class="rt-button-transparent-purple popupButton">Попап</rt-button>
            <rt-real-popup>
              <template>
                <div class="row">
                  <div class="rt-col-12 rt-col-td-6 rt-col-md-3">
                    <rt-table :no-borders="true">
                      <template slot="label">Опция «Везде ноль»</template>
                      <template slot="columns">
                        <rt-table-col></rt-table-col>
                        <rt-table-col width="20%"></rt-table-col>
                      </template>
                      <template slot="description">
                        <p class="rt-font-paragraph rt-space-bottom2">Позволяет воспользоваться льготными ценами на
                          входящие звонки за пределами России.</p>
                      </template>
                      <template slot="body">
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
                      </template>
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
                      <rt-annotation label="Примечание" class="rt-space-bottom3">
                        <template slot="content">
                          Абонентская плата взимается с момента подключения услуги до момента ее отключения абонентом.
                          Вы можете отключить услугу по возвращению в Россию,чтобы избежать дополнительных расходов.
                          Тарификация услуги Мобильный Интернет в роуминге
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
                        </template>
                      </rt-annotation>
                    </div>
                  </div>
                </div>
              </template>
            </rt-real-popup>
          </div>
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
      document.querySelector(".popupButton").addEventListener("click", () => {
        document.querySelector(".rtb-popup-wrapper").classList.add('rtb-popup-wrapper--active');
      });
    },
    created() {},
    methods: {}
  };
</script>
