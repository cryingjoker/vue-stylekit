<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">Filter</h1>
        </div>
      </div>
      <div class="app-body">

        <div class="row">
          <div class="rt-col-8">
          </div>
          <div class="rt-col-1">
          </div>
          <div class="rt-col-3">

            <p class="rt-font-paragraph rt-font-bold rt-space-bottom">Способ покупки</p>
            <rt-switch>Годовая подписка</rt-switch>
            <div class="rt-space-left25 color-dark06 rt-space-bottom">два месяца в подарок</div>

            <rt-switch>Месячная подписка</rt-switch>
            <rt-switch-container>
            <div class="rt-space-left25 color-dark06 rt-space-bottom">первый месяц 0 рублей</div>
            <p class="rt-font-paragraph rt-font-bold rt-space-bottom">Производитель</p>
            <div class="rt-space-bottom"><rt-switch name="creator" value="#allparams">Все</rt-switch></div>
            <div class="rt-space-bottom"><rt-switch name="creator" value="kaspersky">Kaspersky</rt-switch></div>
            <div class="rt-space-bottom"><rt-switch name="creator" value="drweb">Dr.Web</rt-switch></div>
            <div class="rt-space-bottom"><rt-switch name="creator" value="eset">Eset</rt-switch></div>
            </rt-switch-container>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  const componentDirectives = {};

  import componentsList from "../../componentsList";

  export default {
    name: "AppFilter",
    // directives: componentDirectives,
    components: componentsList,
    mounted() {
    },
    created() {
    },
    methods: {}
  };
</script>
