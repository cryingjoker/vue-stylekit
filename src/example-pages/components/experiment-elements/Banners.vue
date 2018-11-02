<template>
  <div>
    <div class="rt-container">
      <div class="grid-center" />
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">Banners</h1>
          </div>
        </div>
      </div>
    </div>
    <pre-code
      text="<rt-banner :sleep-time=&quot;20000&quot; bannerLogo=&quot;/static/example-images/Logo.svg&quot; content-mobile-min-height=&quot;80vh&quot; content-mobile-height=&quot;300px&quot;>
      <rt-banner-item background-image=&quot;/static/example-images/banerBackground1.jpg&quot; :is-white-color=&quot;true&quot;
                      content-mobile-min-height=&quot;80vh&quot;
                      content-mobile-height=&quot;200px&quot;
                      background-color=&quot;dark-state&quot;><p class=&quot;rt-font-banner-label&quot;>Виртуальная <br> телефония</p>
        <p class=&quot;rt-space-top rt-space-bottom15&quot;>Быстрое подключение без трат на оборудование,<br>
          возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
        <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item ancor-get-params-link=&quot;utm-source=vova-privet&quot; ancor-hash-link=&quot;testBannerHash&quot; background-color=&quot;yellow&quot; background-image=&quot;/static/example-images/banerBackground2.jpg&quot;><p
        class=&quot;rt-font-banner-label&quot;>Помогаем бизнесу <br> экономить</p>
        <p class=&quot;rt-space-top rt-space-bottom15&quot;>Цифровые сервисы и технологии по выгодным ценам для среднего и
          малогобизнеса </p>
        <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>"
    />
    <pre-code
      text="<rt-banner :is-fullscreen-image=&quot;true&quot; bannerLogo=&quot;/static/example-images/Logo.svg&quot;><rt-banner-item background-image=&quot;/static/example-images/banerBackground1.jpg&quot; :is-white-color=&quot;true&quot;background-color=&quot;dark-state&quot;><p class=&quot;rt-font-banner-label&quot;>Виртуальная <br> телефония</p><p class=&quot;rt-space-top rt-space-bottom15&quot;>Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p><rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button></rt-banner-item></rt-banner>"
    />
    <pre-code
      text="<rt-banner :sleep-time=&quot;10000&quot;><rt-banner-item background-image=&quot;/static/example-images/banerBackground1.jpg&quot; :is-white-color=&quot;true&quot;background-color=&quot;dark-state&quot;><p class=&quot;rt-font-banner-label&quot;>Виртуальная <br> телефония</p><p class=&quot;rt-space-top rt-space-bottom15&quot;>Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p><rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button></rt-banner-item><rt-banner-item background-color=&quot;yellow&quot; background-image=&quot;/static/example-images/banerBackground2.jpg&quot;><p class=&quot;rt-font-banner-label&quot;>Помогаем бизнесу <br> экономить</p><p class=&quot;rt-space-top rt-space-bottom15&quot;>Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса </p><rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button></rt-banner-item></rt-banner>"
    />
    <pre-code
      text="<rt-banner :sleep-time=&quot;30000&quot;><rt-banner-item background-video=&quot;https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4&quot; :is-white-color=&quot;true&quot;background-color=&quot;dark-state&quot;><p class=&quot;rt-font-banner-label&quot;>Виртуальная <br> телефония</p><p class=&quot;rt-space-top rt-space-bottom15&quot;>Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p><rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button></rt-banner-item><rt-banner-item background-color=&quot;yellow&quot; background-image=&quot;/static/example-images/banerBackground2.jpg&quot;><p class=&quot;rt-font-banner-label&quot;>Помогаем бизнесу <br> экономить</p><p class=&quot;rt-space-top rt-space-bottom15&quot;>Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса </p><rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button></rt-banner-item></rt-banner>"
    />

    <pre-code
      text="
    <rt-banner :is-fullscreen-image=&quot;true&quot; :sleep-time=&quot;30000&quot;  content-mobile-min-height=&quot;100vh&quot; content-mobile-height=&quot;400px&quot;>
      <rt-banner-item background-video=&quot;https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4&quot;
                      :slide-time=&quot;50000&quot;
                      link-target=&quot;_blank&quot;
                      link=&quot;https://www.google.co.uk/search?q=yosemite+national+park&quot;
                      :is-white-color=&quot;true&quot; background-color=&quot;dark-state&quot;>
        <rt-color-line-text>
          <template slot=&quot;label&quot;>Расширяя границы</template>
          <template slot=&quot;content&quot;>Высокоскоростной интернет теперь повсюду</template>
        </rt-color-line-text>
        <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item background-color=&quot;yellow&quot; background-image=&quot;/static/example-images/banerBackground2.jpg&quot; :slide-time=&quot;2000&quot;>
        <rt-color-line-text>
          <template slot=&quot;label&quot;>Помогаем бизнесу <br> экономить</template>
          <template slot=&quot;content&quot;>Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса
          </template>
        </rt-color-line-text>
        <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item
        link=&quot;https://www.google.co.uk/search?q=ElephantsDream&quot;
        background-video=&quot;http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4&quot;
        :is-white-color=&quot;true&quot; background-color=&quot;orange&quot; :slide-time=&quot;30000&quot;>
        <rt-color-line-text color-icon=&quot;purple&quot;>
          <template slot=&quot;label&quot;>Wink</template>
          <template slot=&quot;content&quot;>Более 200 ТВ-каналов, тысячи фильмов и сериалов в одном приложении</template>
        </rt-color-line-text>
        <rt-button class=&quot;rt-button-purple&quot;>Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>
    "
    />

    <div class="rt-container rt-space-top25">
      <documentation-builder type="components" :json="documentation" />
    </div>
  </div>
</template>

<script>

// import documentation from "../../../lib/components/Annotation/docs/index.json";
import documentation from "../../../lib/components/Banner/docs/index.json";
import componentsList from "../../componentsList";
// const componentsList = {};
export default {
  name: "AppBanners",
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
