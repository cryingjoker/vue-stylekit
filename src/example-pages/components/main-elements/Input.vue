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
            <pre-code text='<rt-input-without-js value="" error-message="ошибка: не является почтой" placeholder="Электронная почта"/>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">input with error</span>
            <pre-code text='<rt-input-without-js value="" error-message="ошибка: не является почтой" placeholder="Электронная почта" :has-error="true"/>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">disabled input</span>
            <pre-code text='<rt-input-without-js value="" error-message="ошибка: не является почтой" :disabled="true" placeholder="Электронная почта"/>'></pre-code>
          </div>
        </div>
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">Input with js</p>
        </div>
        <div class="app-row row">
          <div class="rt-col-4 rt-col-md-2">
            <span class="rt-font-label flex-fill rt-space-bottom05">simple input</span>
            <pre-code text='<rt-input value="" placeholder="Электронная почта" />'></pre-code>
          </div>
          <div class="rt-col-4 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">input with error</span>
            <pre-code text='<rt-input value="" placeholder="Электронная почта" value="inputModelValue" error-message="ошибка: не является почтой" :has-error="true" />'></pre-code>
          </div>
          <div class="rt-col-4 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">disabled input</span>
            <pre-code text='<rt-input value="" placeholder="Электронная почта" :disabled="true" value="inputModelValue" error-message="ошибка: не является почтой"/>'></pre-code>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">input in 3 col</span>
            <pre-code text='<rt-input value="" placeholder="Электронная почта" />'></pre-code>
          </div>
          <div class="rt-col-2 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05  rt-font-no-wrpa">input in 2 col</span>
            <pre-code text='<rt-input value="" placeholder="Улица" />'></pre-code>
          </div>
          <div class="rt-col-1 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05  rt-font-no-wrpa">input in 1 c</span>
            <pre-code text='<rt-input value="" placeholder="Дом" />'></pre-code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// const componentsList = {};
import componentsList from '../../componentsList'
export default {
  name: 'AppInput',
  components: componentsList,
  data: () => ({
    inputModelValue: 'test',
  }),
  mounted() {
  },
  created() {},
  methods: {
  },
};
</script>
