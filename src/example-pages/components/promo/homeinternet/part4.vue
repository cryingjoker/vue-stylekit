<template>
  <rt-banner :is-fullscreen-image="true" justify="left">
    <rt-banner-item background-image="/static/images/homeinternet/homeinternet-image3.jpg">


      <rt-color-line-text>
        <template slot="label">Wi-Fi <br>
          без тормозов</template>
        <template slot="content">Домашний интернет <br>  без тормозов
        </template>
      </rt-color-line-text>
      <div class="rt-space-top rt-space-left05">
        <rt-button class="rt-button-orange rt-space-horizontal">Оборудование</rt-button>
      </div>
    </rt-banner-item>
  </rt-banner>
</template>
<script>
import componentsList from "../../../componentsList";
// const componentsList = {};

export default {
  name: "homeintehrnetPart4",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
