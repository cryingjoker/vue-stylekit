<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">
              Patterns <span class="rt-code rt-font-h3 rt-col"> .rt-pattern</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
      <div class="app-body">
        <div class="app-row">
          <div class="rt-container">
            <div class="rt-col rt-space-bottom rt-space-top">
              <!--<rt-pattern top-color="main-color" left-color="error-color" right-color="orange" :pattern-type="1"/>-->
            </div>
          </div>

          <div class="text-block-pattern-backing rt-font-center rt-space-vertical5 rt-td-space-vertical3 rt-md-space-bottom2 color-white rt-font-md-left">
            <rt-pattern top-color="main-color" left-color="error-color" right-color="orange" :pattern-type="4" :pattern-for-text-block="true"/>
            <div class="rt-container">
              <div class="rt-col">
                <div class="row">
                  <div class="rt-col-2 rt-col-td-1 md-d-none"/>
                  <div class="rt-col-8 rt-col-td-4 rt-col-md-3">
                    <p class="rt-font-h2 rt-font-bold">Доступность</p>
                    <p class="rt-font-paragraph rt-space-top rt-md-space-top15">Сервис Anti-DDoS доступен любым организациям, в том числе
                      со сложной территориально-распределенной инфраструктурой. Для использования сервиса не обязательно
                      быть клиентом компании Ростелеком — организация может быть подключена к любым интернет-провайдерам</p>
                  </div>
                  <div class="rt-col-2 rt-col-td-1 md-d-none"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import componentsList from "../../componentsList";
export default {
  name: "AppPattern",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
