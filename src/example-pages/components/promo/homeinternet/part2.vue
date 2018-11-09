<template>
  <rt-banner
    :is-fullscreen-image="true"
    banner-logo="/static/example-images/Logo.svg"
    background-position="top"
    justify="left"
  >
    <rt-banner-item
      background-image="/static/images/homeinternet/homeinternet-image1.jpg"
    >
      <rt-color-line-text>
        <template slot="label"
          >Интернет</template
        >
        <template slot="content"
          >Основная услуга для любых домов и квартир. <br />
          Разнообразные тарифы, дополнительные <br />
          возможности и круглосуточная техподдержка
        </template>
      </rt-color-line-text>
      <div class="rt-space-top rt-space-left05">
        <rt-button class="rt-button-orange rt-space-horizontal"
          >Выбрать тариф
        </rt-button>
      </div>
    </rt-banner-item>
  </rt-banner>
</template>
<script>
import componentsList from "../../../componentsList";
// const componentsList = {};

export default {
  name: "HomeintehrnetPartBanner",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
