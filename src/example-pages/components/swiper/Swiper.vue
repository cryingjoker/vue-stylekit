<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">
              Swiper <span class="rt-code rt-font-h3 rt-col"> .rt-swiper .rt-slide</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <rt-swiper>
      <rt-slide v-for="i in 10" :key="i" class="rt-space-right15">
        <h2>Слайд {{ i }}</h2>
        <rt-row-list>
          <rt-row-list-item v-for="i in 3" :key="i">
            <template slot="option">
              <div class="d-flex flex-row">
                <div>
                  <p>Антивирус</p>
                  <p class="color-main05">Kaspersky Internet Security, месяц в подарок</p>
                </div>
              </div>
            </template>
          </rt-row-list-item>
        </rt-row-list>
        <rt-price class="rt-space-vertical" time-interval="мес" is-option :value="i * 1000">
        </rt-price>
        <rt-button class="rt-button-orange">Подключить</rt-button>
      </rt-slide>
    </rt-swiper>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <documentation-builder :json="documentation" type="components" />
      </div>
    </div>
  </div>
</template>

<script>
// const componentsList = {};
import documentation from "../../../lib/components/Swiper/docs/index.json";
import componentsList from "../../componentsList";

export default {
  name: "AppSwiper",
  components: componentsList,
  data: () => ({
    documentation: {}
  }),
  mounted() {
    this.documentation = documentation;
  },
  created() {},
  methods: {}
};
</script>
