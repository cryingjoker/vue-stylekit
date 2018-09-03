<template>
    <div class="app-content  col-10 col-md-3">
        <div class="app-title">
            <h1 class="rt-font-hero row">Select</h1>
        </div>
        <div class="app-body">
            <div class="app-row row">
                <p class="rt-font-h3 col">Select without js</p>
            </div>
            <div class="app-row row">
                <div class="col-6 col-md-2 flex-column d-flex">
                    <span class="rt-font-label flex-fill rt-space-bottom05">simple select</span>
                    <rt-select-without-js label="Оборудование" value="0" text="Новгородская обл">
                        <option v-for="(option, index) in optionsList" :value="String(index)"
                                :key="'index'+Math.random().toString(5).slice(4)">{{option}}
                        </option>
                    </rt-select-without-js>
                </div>

                <div class="col-6 col-md-1 flex-column d-flex">
                    <span class="rt-font-label flex-fill rt-space-bottom05">simple disabled select</span>
                    <rt-select-without-js label="Оборудование" value="0" text="Новгородская обл" :disabled="true">
                        <option v-for="(option, index) in optionsList" :value="String(index)"
                                :key="'index'+Math.random().toString(5).slice(4)">{{option}}
                        </option>
                    </rt-select-without-js>
                </div>
            </div>
            <div class="app-row row">
                <div class="col col-md-3 flex-column d-flex">
                    <span class="rt-font-label flex-fill rt-space-bottom05">simple select with error</span>
                    <rt-select-without-js label="Оборудование" value="0" :error-message="'ошибка: не выбран город'"
                                          text="Новгородская обл" :hasError="true">
                        <option v-for="(option, index) in optionsList" :value="String(index)"
                                :key="'index'+Math.random().toString(5).slice(4)">{{option}}
                        </option>
                    </rt-select-without-js>
                </div>
            </div>

            <div class="app-row row">
                <div class="col">
                    <p class="rt-font-h3">Select with js</p>
                </div>
            </div>
            <div class="app-row row">
                <div class="col col-md-3">
                    <span class="rt-font-label flex-fill rt-space-bottom05">simple select</span>
                    <rt-select label="Оборудование" value="0" text="Новгородская обл">
                        <rt-select-option v-for="(option, index) in optionsList" :value="String(index)"
                                          :key="'index'+Math.random().toString(5).slice(4)">{{option}}
                        </rt-select-option>
                    </rt-select>
                </div>
            </div>
            <div class="app-row row">
                <div class="col-6 col-md-2 rt-mb-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">select with error</span>
                    <rt-select label="Оборудование" value="0" text="Новгородская обл"
                               :error-message="'ошибка: не выбран город'" :hasError="true">
                        <rt-select-option v-for="(option, index) in optionsList" :value="String(index)"
                                          :key="'index'+Math.random().toString(5).slice(4)">{{option}}
                        </rt-select-option>
                    </rt-select>
                </div>
                <div class="col-6 col-md-1 rt-mb-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">disabled select</span>
                    <rt-select label="Оборудование" value="0" text="Новгородская обл" :disabled="true">
                        <rt-select-option v-for="(option, index) in optionsList" :value="String(index)"
                                          :key="'index'+Math.random().toString(5).slice(4)">{{option}}
                        </rt-select-option>
                    </rt-select>
                </div>
            </div>


        </div>
    </div>
</template>


<script>
import { Select, SelectOption, SelectWithoutJs } from "../components/Select";

const componentsList = {};
componentsList[Select.name] = Select;
componentsList[SelectOption.name] = SelectOption;
componentsList[SelectWithoutJs.name] = SelectWithoutJs;

export default {
  name: "app-input",
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
  methods: {},
  mounted() {},
  created() {}
};
</script>
