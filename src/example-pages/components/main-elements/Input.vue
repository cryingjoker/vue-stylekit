<template>
  <div class="rt-container">
    <div class="app-content rt-col-md-3  rt-col-12">
      <div class="app-title">
        <h1 class="rt-font-hero rt-col">Input</h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">Input without js</p>
        </div>
        <div class="app-row row">
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">simple input</span>
            <pre-code text="<rt-input-without-js value=&quot;&quot; error-message=&quot;ошибка: не является почтой&quot; placeholder=&quot;Электронная почта&quot;/>" />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">input with error</span>
            <pre-code text="<rt-input-without-js value=&quot;&quot; error-message=&quot;ошибка: не является почтой&quot; placeholder=&quot;Электронная почта&quot; :has-error=&quot;true&quot;/>" />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">disabled input</span>
            <pre-code text="<rt-input-without-js value=&quot;&quot; error-message=&quot;ошибка: не является почтой&quot; :disabled=&quot;true&quot; placeholder=&quot;Электронная почта&quot;/>" />
          </div>
        </div>
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">Input with js</p>
        </div>
        <div class="app-row row">
          <div class="rt-col-4 rt-col-md-2">
            <span class="rt-font-label flex-fill rt-space-bottom05">simple input</span>
            <pre-code text="<rt-input value=&quot;&quot; placeholder=&quot;Электронная почта&quot; />" />
          </div>
          <div class="rt-col-4 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">input with error</span>
            <pre-code text="<rt-input value=&quot;&quot; placeholder=&quot;Электронная почта&quot; value=&quot;inputModelValue&quot; error-message=&quot;ошибка: не является почтой&quot; :has-error=&quot;true&quot; />" />
          </div>
          <div class="rt-col-4 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">disabled input</span>
            <pre-code text="<rt-input value=&quot;&quot; placeholder=&quot;Электронная почта&quot; :disabled=&quot;true&quot; value=&quot;inputModelValue&quot; error-message=&quot;ошибка: не является почтой&quot;/>" />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">input in 3 col</span>
            <pre-code text="<rt-input value=&quot;&quot; placeholder=&quot;Электронная почта&quot; />" />
          </div>
          <div class="rt-col-2 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05  rt-font-no-wrpa">input in 2 col</span>
            <pre-code text="<rt-input value=&quot;&quot; placeholder=&quot;Улица&quot; />" />
          </div>
          <div class="rt-col-1 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05  rt-font-no-wrpa">input in 1 c</span>
            <pre-code text="<rt-input value=&quot;&quot; placeholder=&quot;Дом&quot; />" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// const componentsList = {};
import componentsList from "../../componentsList";
export default {
  name: "AppInput",
  components: componentsList,
  data: () => ({
    inputModelValue: "test"
  }),
  mounted() {},
  created() {},
  methods: {}
};
</script>
