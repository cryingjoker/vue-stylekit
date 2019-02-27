<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title"><h1 class="rt-font-hero">Select</h1></div>
      <div class="app-body">
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">Select without js</p>
        </div>
        <div class="app-row row">
          <div class="rt-col-6 rt-col-md-2 flex-column d-flex">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >simple select</span
            >
            <rt-select-without-js
              label="Оборудование"
              value="0"
              text="Новгородская обл"
            >
              <option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
                >{{ option }}
              </option>
            </rt-select-without-js>
          </div>

          <div class="rt-col-6 rt-col-md-1 flex-column d-flex">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >simple disabled select</span
            >
            <rt-select-without-js
              :disabled="true"
              label="Оборудование"
              value="0"
              text="Новгородская обл"
            >
              <option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
                >{{ option }}
              </option>
            </rt-select-without-js>
          </div>
        </div>
        <div class="app-row row">
          <div class="col rt-col-md-3 flex-column d-flex">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >simple select with error</span
            >
            <rt-select-without-js
              :error-message="'ошибка: не выбран город'"
              :has-error="true"
              label="Оборудование"
              value="0"
              text="Новгородская обл"
            >
              <option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
                >{{ option }}
              </option>
            </rt-select-without-js>
          </div>
        </div>

        <div class="app-row row">
          <div class="rt-col"><p class="rt-font-h3">Select with js</p></div>
        </div>
        <div class="app-row row">
          <div class="col rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >simple select</span
            >
            <rt-select label="Оборудование" value="0" >
              <rt-select-option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
                >{{ option }}
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-6 rt-col-md-2 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >select with error</span
            >
            <rt-select
              :error-message="'ошибка: не выбран город'"
              :has-error="true"
              label="Оборудование"
              value="0"
              text="Новгородская обл"
            >
              <rt-select-option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
                >{{ option }}
              </rt-select-option>
            </rt-select>
          </div>
          <div class="rt-col-6 rt-col-md-1 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >disabled select</span
            >
            <rt-select
              :disabled="true"
              label="Оборудование"
              value="0"
              text="Новгородская обл"
            >
              <rt-select-option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
                >{{ option }}
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row color-block--light-grey rt-space-top rt-space-bottom">
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
            <rt-select
              :is-b2b-select="true"
              label="Выберите регион"
            >
              <rt-select-option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
              >{{ option }}
              </rt-select-option>
            </rt-select>
          </div>
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
            <rt-select
              :is-b2b-select="true"
              label="Выберите регион"
              :disabled="true"
            >
              <rt-select-option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
              >{{ option }}
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row color-block--light-grey rt-space-top rt-space-bottom">
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
            <rt-select
              :is-b2b-select="true"
              label="Выберите регион"
              :hasError="true"
            >
              <rt-select-option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
              >{{ option }}
              </rt-select-option>
            </rt-select>
          </div>
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
            <rt-select
              :is-b2b-select="true"
              label="Выберите регион"
              :outlined="true"
            >
              <rt-select-option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
              >{{ option }}
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row color-block--light-grey rt-space-top rt-space-bottom">
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
            <rt-select
              :is-b2b-select="true"
              label="Выберите регион"
              :outlined="true"
              :disabled="true"
            >
              <rt-select-option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
              >{{ option }}
              </rt-select-option>
            </rt-select>
          </div>
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
            <rt-select
              :is-b2b-select="true"
              label="Выберите регион"
              :outlined="true"
              :hasError="true"
            >
              <rt-select-option
                v-for="(option, index) in optionsList"
                :key="
                  'index' +
                    Math.random()
                      .toString(5)
                      .slice(4)
                "
                :value="String(index)"
              >{{ option }}
              </rt-select-option>
            </rt-select>
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
  name: "AppInput",
  components: componentsList,
  data: () => ({
    inputModelValue: "test",
    optionsList: [
      "Адыгея Респ",
      "Алтай Респ",
      "Алтайский край",
      "Амурская обл",
      "Архангельская обл",
      "Астраханская обл",
      "Башкортостан Респ",
      "Белгородская обл",
      "Брянская обл",
      "Бурятия Респ",
      "Владимирская обл",
      "Волгоградская обл",
      "Вологодская обл",
      "Воронежская обл",
      "Дагестан Респ",
      "Еврейская Аобл",
      "Забайкальский край",
      "Ивановская обл",
      "Ингушетия Респ",
      "Иркутская обл",
      "Кабардино-Балкарская Респ",
      "Калининградская обл",
      "Калмыкия Респ",
      "Калужская обл",
      "Камчатский край",
      "Карачаево-Черкесская Респ",
      "Карелия Респ",
      "Кемеровская обл",
      "Кировская обл",
      "Коми Респ",
      "Костромская обл",
      "Краснодарский край",
      "Красноярский край",
      "Курганская обл",
      "Курская обл",
      "Ленинградская обл",
      "Липецкая обл",
      "Магаданская обл",
      "Марий Эл Респ",
      "Мордовия Респ",
      "Москва г",
      "Московская обл",
      "Мурманская обл",
      "Ненецкий АО",
      "Нижегородская обл",
      "Новгородская обл",
      "Новосибирская обл",
      "Омская обл",
      "Оренбургская обл",
      "Орловская обл",
      "Пензенская обл",
      "Пермский край",
      "Приморский край",
      "Псковская обл",
      "Ростовская обл",
      "Рязанская обл",
      "Самарская обл",
      "Санкт-Петербург г",
      "Саратовская обл",
      "Саха /Якутия/ Респ",
      "Сахалинская обл",
      "Свердловская обл",
      "Северная Осетия - Алания Респ",
      "Смоленская обл",
      "Ставропольский край",
      "Тамбовская обл",
      "Татарстан Респ",
      "Тверская обл",
      "Томская обл",
      "Тульская обл",
      "Тыва Респ",
      "Тюменская обл",
      "Удмуртская Респ",
      "Ульяновская обл",
      "Хабаровский край",
      "Хакасия Респ",
      "Ханты-Мансийский Автономный округ - Югра АО",
      "Челябинская обл",
      "Чеченская Респ",
      "Чувашская Респ",
      "Чукотский АО",
      "Ямало-Ненецкий АО",
      "Ярославская обл"
    ]
  }),
  mounted() {},
  created() {},
  methods: {}
};
</script>
