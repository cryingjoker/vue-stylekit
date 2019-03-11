<template>
  <div class="rt-container">
    <div class="app-content rt-col-md-3  rt-col-12">
      <div class="app-title">
        <h1 class="rt-font-hero rt-col">
          Input
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">
            Input with js
          </p>
        </div>
        <!--<div class="is-b2c">-->
        <div class="app-row row">
          <div class="rt-col-4 rt-col-md-2">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >simple input</span
            >
            <pre-code
              text='<rt-input label="Начните вводить почту" type="string" value="" placeholder="Электронная почта" />'
            />
          </div>
          <div class="rt-col-4 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >input with error</span
            >
            <pre-code
              text='<rt-input label="Начните вводить почту" placeholder="Электронная почта" value="inputModelValue" error-message="ошибка: не является почтой" :has-error="true" />'
            />
          </div>
          <div class="rt-col-4 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >disabled input</span
            >
            <pre-code
              text='<rt-input value="" placeholder="Электронная почта" :disabled="true" value="inputModelValue" error-message="ошибка: не является почтой"/>'
            />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >input in 3 col</span
            >
            <pre-code
              text='<rt-input value="" placeholder="Электронная почта" />'
            />
          </div>
          <div class="rt-col-2 rt-col-md-2 rt-md-space-top">
            <span
              class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap"
              >input in 2 col</span
            >
            <pre-code text='<rt-input value="" placeholder="Улица" />' />
          </div>
          <div class="rt-col-1 rt-col-md-1 rt-md-space-top">
            <span
              class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap"
              >input in 1 c</span
            >
            <pre-code text='<rt-input value="" placeholder="Дом" />' />
          </div>
          <div class="rt-col-3 rt-col-md-3">
            <span
              class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap"
              >password input</span
            >
            <rt-input type="password" placeholder="Введите пароль" />
          </div>
        </div>
        <rt-input
          insert-type="string"
          value=""
          insert-lang="ru"
          placeholder="Ф.И.О."
        />
        <rt-input
          insert-type="number"
          value=""
          :max-length="2"
          placeholder="Ваше любимое число до 99"
        />
        <rt-input
          insert-type="string"
          value=""
          insert-lang="en"
          placeholder="enter your name(English, please)"
        />
        <div class="app-row row">
          <div class="rt-col rt-col-12">
            <rt-input :show-numbers-buttons="true" insert-type="number" />
          </div>
        </div>
        <!--</div>-->
        <!--<div class="is-b2b">-->
        <div class="app-row row">
          <div class="rt-col-3 rt-col-md-3">
            <rt-input type="password" placeholder="Введите пароль" />
          </div>
        </div>
        <div class="app-row row rt-space-top rt-space-bottom ">
          <div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">
            <rt-input placeholder="Электронная почта" :is-b2b-input="true" />
          </div>
          <div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">
            <rt-input
              placeholder="Электронная почта"
              :is-b2b-input="true"
              value="kdbafasdfsdfsd"
              :disabled="true"
            />
          </div>
          <div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">
            <pre-code
              text='<rt-input placeholder="Электронная почта" :hasError="true" :is-b2b-input="true" value="kdbaf@dfj.dfd" error-message="ошибка: не является почтой"/>'
            />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">
            <pre-code
              text='<rt-input placeholder="Электронная почта" :is-b2b-input="true" :outlined="true"/>'
            />
            <pre-code
              text='<rt-input placeholder="Электронная почта" :hasError="true" :is-b2b-input="true" :outlined="true" error-message="ошибка: не является почтойошибка: не является почтойошибка: не является почтойошибка: не является почтойошибка: не является почтойошибка: не является почтой"/>'
            />
            <pre-code
              text='<rt-input placeholder="Электронная почта" :disabled="true" :is-b2b-input="true" :outlined="true"/>'
            />
          </div>
        </div>
      </div>
    </div>
    <div class="rt-space-top25">
      <documentation-builder :json="documentation" type="components" />
    </div>
  </div>
</template>

<script>
import documentation from "../../../lib/components/Input/docs/index.json";
import componentsList from "../../componentsList";
export default {
  name: "AppInput",
  components: componentsList,
  data: () => ({
    inputModelValue: "test",
    documentation: {}
  }),
  mounted() {
    this.documentation = documentation;
  },
  created() {},
  methods: {}
};
</script>
