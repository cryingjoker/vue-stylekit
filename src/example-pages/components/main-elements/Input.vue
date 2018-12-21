<template>
  <div class="rt-container">
    <div class="app-content rt-col-md-3  rt-col-12">
      <div class="app-title"><h1 class="rt-font-hero rt-col">Input</h1></div>
      <div class="app-body">
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">Input with js</p>
        </div>
        <div class="app-row row">
          <div class="rt-col-4 rt-col-md-2">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >simple input</span
            >
            <pre-code
              text="<rt-input label=&quot;Начните вводить почту&quot; type=&quot;string&quot; value=&quot;&quot; placeholder=&quot;Электронная почта&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >input with error</span
            >
            <pre-code
              text="<rt-input label=&quot;Начните вводить почту&quot; value=&quot;&quot; placeholder=&quot;Электронная почта&quot; value=&quot;inputModelValue&quot; error-message=&quot;ошибка: не является почтой&quot; :has-error=&quot;true&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >disabled input</span
            >
            <pre-code
              text="<rt-input value=&quot;&quot; placeholder=&quot;Электронная почта&quot; :disabled=&quot;true&quot; value=&quot;inputModelValue&quot; error-message=&quot;ошибка: не является почтой&quot;/>"
            />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >input in 3 col</span
            >
            <pre-code
              text="<rt-input value=&quot;&quot; placeholder=&quot;Электронная почта&quot; />"
            />
          </div>
          <div class="rt-col-2 rt-col-md-2 rt-md-space-top">
            <span
              class="rt-font-label flex-fill rt-space-bottom05  rt-font-no-wrpa"
              >input in 2 col</span
            >
            <pre-code
              text="<rt-input value=&quot;&quot; placeholder=&quot;Улица&quot; />"
            />
          </div>
          <div class="rt-col-1 rt-col-md-1 rt-md-space-top">
            <span
              class="rt-font-label flex-fill rt-space-bottom05  rt-font-no-wrpa"
              >input in 1 c</span
            >
            <pre-code
              text="<rt-input value=&quot;&quot; placeholder=&quot;Дом&quot; />"
            />
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
          placeholder="Ваше любимое число"
        />
        <rt-input
          insert-type="string"
          value=""
          insert-lang="en"
          placeholder="enter your name(English, please)"
        />
        <rt-input :show-nubmers-buttons="true" insert-type="number" />
      </div>
    </div>
    <div class="rt-space-top25">
      <documentation-builder :json="documentation" type="components" />
    </div>
  </div>
</template>

<script>
import documentation from "../../../lib/components/Input/docs/index.json";
// const componentsList = {};
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
