<template>
  <div>
    <div class="rt-container">

      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Slide content</h1></div>
        </div>
      </div>
    </div>
    <div class="rt-container">
      <div class="rt-col-12 rt-space-bottom2">
        <rt-slide-content>
          <template slot="label">
            Зачем мне нужна регистрация в личном кабинете?
          </template>
          <template slot="content">
                <span class="color-main05 rt-font-small-paragraph rt-font-light">Услуги предоставляются при наличии технической возможности
                  Цены указаны в рублях с учетом НДС. Предоставление доступа к
                  сети интернет осуществляется по технологии FTTx или по
                  технологии PON. Максимально возможная скорость при подключении
                  по технологии FTTx составляет до 90 Мбит/с. Возможно
                  предоставление доступа к сети интернет по технологии xDSL.
                  Тарифы — в разделе</span>
          </template>
        </rt-slide-content>

        <rt-slide-content>
          <template slot="label">
            Зачем мне нужна регистрация в личном кабинете?
          </template>
          <template slot="content">
                <span class="color-main05 rt-font-small-paragraph rt-font-light">Услуги предоставляются при наличии технической возможности
                  Цены указаны в рублях с учетом НДС. Предоставление доступа к
                  сети интернет осуществляется по технологии FTTx или по
                  технологии PON. Максимально возможная скорость при подключении
                  по технологии FTTx составляет до 90 Мбит/с. Возможно
                  предоставление доступа к сети интернет по технологии xDSL.
                  Тарифы — в разделе</span
                >
          </template>
        </rt-slide-content>
        <div class="rt-space-top45">
          <rt-slide-content arrow-position="right-bottom">
            <template slot="label">
              Зачем мне нужна регистрация в личном кабинете?
            </template>
            <template slot="content">
                <span class="color-main05 rt-font-small-paragraph rt-font-light">Услуги предоставляются при наличии технической возможности
                  Цены указаны в рублях с учетом НДС. Предоставление доступа к
                  сети интернет осуществляется по технологии FTTx или по
                  технологии PON. Максимально возможная скорость при подключении
                  по технологии FTTx составляет до 90 Мбит/с. Возможно
                  предоставление доступа к сети интернет по технологии xDSL.
                  Тарифы — в разделе</span>
            </template>
          </rt-slide-content>

          <rt-slide-content :need-border="false" arrow-position="right-bottom">
            <template slot="label">
              Зачем мне нужна регистрация в личном кабинете?
            </template>
            <template slot="content">
                <span class="color-main05 rt-font-small-paragraph rt-font-light">Услуги предоставляются при наличии технической возможности
                  Цены указаны в рублях с учетом НДС. Предоставление доступа к
                  сети интернет осуществляется по технологии FTTx или по
                  технологии PON. Максимально возможная скорость при подключении
                  по технологии FTTx составляет до 90 Мбит/с. Возможно
                  предоставление доступа к сети интернет по технологии xDSL.
                  Тарифы — в разделе</span>
            </template>
          </rt-slide-content>
        </div>

      </div>
      <div class="rt-container rt-space-top25">
        <documentation-builder :json="documentation" type="components" />
      </div>
    </div>
  </div>
</template>

<script>

  import documentation from "../../../lib/components/SlideContent/docs/index.json";

  const componentsList = {};
  export default {
    name: "AppTariffCars",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {}
  };
</script>
