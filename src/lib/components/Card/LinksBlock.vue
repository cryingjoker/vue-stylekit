<template>
  <div class="links-block">
    <div class="rtb-card__links-block" :class="blockClasses">
      <div class="rtb-card__social-link"><img src="/static/images/B2C/youtube.svg"></div>
      <div class="rtb-card__social-link"><img src="/static/images/B2C/whatsapp.svg"></div>
      <div class="rtb-card__social-link"><img src="/static/images/B2C/viber.svg"></div>
      <div class="rtb-card__social-link"><img src="/static/images/B2C/facebook.svg"></div>
      <div class="rtb-card__social-link"><img src="/static/images/B2C/vk.svg"></div>
      <div class="rtb-card__social-link"><img src="/static/images/B2C/odnoklassniki.svg"></div>
      <div class="rtb-card__social-link"><img src="/static/images/B2C/tamtam.svg"></div>
      <div class="rtb-card__social-link"><img src="/static/images/B2C/ya_map.svg"></div>
      <div class="rtb-card__social-link"><img src="/static/images/B2C/ya_navigator.svg"></div>
      <div class="rtb-card__social-link"><img src="/static/images/B2C/ya_transport.svg"></div>
    </div>
    <button class="rtb-card__expand-button" @click="unwrap()">ещё 4</button>
  </div>
</template>

<script>
  export default {
    name: "LinksBlock",

    methods: {
      unwrap() {
        this.isOpen = !this.isOpen;
      }
    },
    data() {
      return {
        isOpen: false
      };
    },
    computed: {
      blockClasses() {
        return {
          "rtb-card__links-block--expanded": this.isOpen
        };
      }
    },
    mounted() {},
    created() {},

  };
</script>
