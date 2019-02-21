<template>
  <div class="test-access">
    <div class="test-access__image mobile-none"></div>
    <div class="rt-container rt-col-12 rt-col-td-3 rt-col-md-3 rt-space-top25 d-flex rt-space-bottom25">
      <div class="rt-col-5 rt-col-td-3 rt-col-md-3 flex-column">
        <h3 class="rt-space-bottom rt-font-bold">Тестовый доступ</h3>
        <div class="rt-col-10">
          <p class="rt-font-paragraph rt-space-bottom">Бесплатный доступ ко всем возможностям сервиса на 7 дней:</p>
        </div>
        <ul class="rt-numeric-list rt-space-bottom">
          <li class="rt-ordered-list__item rt-font-paragraph">Гостевой доступ к личному кабинету с возможностью полного управления, чтобы
            изучить его удобство  и функциональность</li>
          <li class="rt-ordered-list__item rt-font-paragraph">Неограниченную входящую связь на выбранный городской номер</li>
          <li class="rt-ordered-list__item rt-font-paragraph">50 минут исходящей связи</li>
          <li class="rt-ordered-list__item rt-font-paragraph">Оформить коммерческий тариф и желаемые дополнительные услуги необходимо до
            конца тестового периода</li>
        </ul>
        <div class="stretcher">
          <rt-button class="rt-button rt-button-orange">Попробовать</rt-button>
        </div>
        <a href="#">
          <div class="download-button--dashed">
            <span class="rt-font-small-paragraph text--underlined">Руководство пользователя для тестового периода</span>
            <p class="rt-font-control">pdf, 1,3 Мб</p>
          </div>
        </a>
      </div>
      <div class="rt-col-1 flex-column mobile-none"></div>
      <div class="rt-space-top05 flex-column mobile-none"></div>
    </div>
  </div>
</template>

<!--<style>-->
  <!--.test-access {-->
    <!--background-color: red;-->
    <!--min-height: 670px;-->
  <!--}-->
  <!--.download-button&#45;&#45;dashed {-->
    <!--padding: 15px 20px 15px 40px;-->
  <!--}-->
<!--</style>-->

<script>
  const componentsList = {};

  export default {
    name: "AppTestAccess",
    components: componentsList,
    mounted() {},
    created() {},
    methods: {}
  };
</script>
