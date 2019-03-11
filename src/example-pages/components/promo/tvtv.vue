<template>
  <div>
    <div
      class="half-color-block half-color-block--black-white half-color-block--full-height"
    >
      <div class="half-color-block__content">
        <div class="rt-container color-white">
          <div class="rt-col-6 rt-space-top25 rt-space-right2">
            <div class="d-flex d-space-between flex-center-center">
              <img
                src="/static/images/game/game-icon5.png"
                alt=""
                height="37"
              />
              <img
                src="/static/images/game/game-icon6.png"
                alt=""
                height="102"
              />
              <img
                src="/static/images/game/game-icon7.png"
                alt=""
                height="78"
              />
            </div>
            <p class="rt-font-h1 rt-space-top5">
              Сражайся <br>
              по всем фронтам
            </p>
            <p class="rt-font-paragraph">
              С тарифом «Игровой»
            </p>
            <rt-price
              value-color="orange"
              :value="500"
              currency="Мбит"
              time-interval="сек."
            />
            <rt-price
              value-color="orange"
              :value="850"
              currency="руб."
              time-interval="мес."
            />
          </div>
          <div class="rt-col-6" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const componentsList = {};

export default {
  name: "AppRadioButton",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
