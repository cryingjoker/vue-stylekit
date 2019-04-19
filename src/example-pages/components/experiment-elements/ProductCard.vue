<template>
  <div>
    <div class="rt-container">
      <div class="grid-center"/>
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">ProductCard</h1></div>
        </div>
      </div>
    </div>
    <div class="rt-container">
      <div class="rt-col-12 rt-space-bottom2">
        <div class="rt-space-bottom is-b2c">
        <rt-product-card
          background-image="/static/images/B2B/banner-img.png"
          tablet-background-image="https://speedupmacbook.com/wp-content/uploads/man-with-macbook-coffee.jpg"
          mobile-background-image="http://8c58e64aa1a7874c55b4-be3e3aa1b17f89aab5ecca1936c616df.r83.cf3.rackcdn.com/wp-content/uploads/2014/08/MacBook-Pro-HDMI-to-VGA-not-working-e1410348485493.jpg"
          :fixed-image-height="true">
          <slot>
            <div class="rt-product-card__content">
              <div class="rt-product-card__body">
                <h3 class="rt-font-bold rt-space-bottom05">Яндекс.Диск</h3>
                <p class="rt-font-small-paragraph rt-space-bottom">Храните фото, видео и документы в облаке, чтобы всегда иметь к ним доступ с любого устройства — компьютера, смартфона или планшета.</p>
              </div>
              <div class="rt-product-card__footer">
                <rt-button class="rt-button-small rt-button-white rt-button-with-ripple">Подробнее</rt-button>
              </div>
            </div>
          </slot>
        </rt-product-card>
        </div>
        <div class="is-b2b">
        <rt-product-card background-image="/static/images/B2B/banner-img.png">
          <slot>
            <div class="rt-product-card__content">
              <div class="rt-product-card__body">
                <h3 class="rt-font-bold rt-space-bottom05">Скидка 50% на Wi-Fi для бизнеса  при подключении
                  интернета</h3>
                <p class="rt-font-small-paragraph">Пакет «Быть в плюсе»</p>
              </div>
              <div class="rt-product-card__footer">
                <rt-button class="rt-button-small rt-button-white rt-button-with-ripple">Подробнее</rt-button>
              </div>
            </div>
          </slot>
        </rt-product-card>
      </div>
      </div>
    </div>

    <div class="rt-container is-b2c">
      <div class="rt-col-12 rt-space-bottom2">
        <rt-banner
          :no-triangle="true"
          :round-angles="true"
          :has-custom-content="true">
          <rt-banner-item
            background-image="/static/images/B2B/banner-img.png"
            :is-white-color="true"
            background-color="b2b-dark-state">
            <div class="rtb-banner__text-content">
              <h3 class="rt-font-bold rt-space-bottom05">Скидка 50% на Wi-Fi для бизнеса  при подключении интернета</h3>
              <p class="rt-font-small-paragraph">Пакет «Быть в плюсе»</p>
            </div>
            <div>
              <rt-button class="rt-button-small rt-button-white rt-button-with-ripple">Подробнее</rt-button>
            </div>
          </rt-banner-item>
        </rt-banner>

      </div>
    </div>
    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components" />
    </div>
  </div>
</template>

<script>

  import documentation from "../../../lib/components/ProductCard/docs/index.json";

  const componentsList = {};
  export default {
    name: "AppBanners",
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
