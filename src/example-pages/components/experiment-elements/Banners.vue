<template>
  <div>
    <div class="rt-container">
      <div class="grid-center"/>
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">Banners</h1>
          </div>
        </div>
      </div>
    </div>
    <pre-code
      text='<rt-banner :sleep-time="20000" bannerLogo="/static/example-images/Logo.svg" content-mobile-min-height="80vh" content-mobile-height="300px">
      <rt-banner-item background-image="/static/example-images/banerBackground1.jpg" :is-white-color="true"
                      content-mobile-min-height="80vh"
                      content-mobile-height="200px"
                      background-color="dark-state"><p class="rt-font-banner-label">Виртуальная <br> телефония</p>
        <p class="rt-space-top rt-space-bottom15">Быстрое подключение без трат на оборудование,<br>
          возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
        <rt-button class="rt-button-orange">Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item ancor-get-params-link="utm-source=vova-privet" ancor-hash-link="testBannerHash" background-color="yellow" background-image="/static/example-images/banerBackground2.jpg"><p
        class="rt-font-banner-label">Помогаем бизнесу <br> экономить</p>
        <p class="rt-space-top rt-space-bottom15">Цифровые сервисы и технологии по выгодным ценам для среднего и
          малогобизнеса </p>
        <rt-button class="rt-button-orange">Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>'></pre-code>
    <pre-code
      text='<rt-banner :is-fullscreen-image="true" bannerLogo="/static/example-images/Logo.svg"><rt-banner-item background-image="/static/example-images/banerBackground1.jpg" :is-white-color="true"background-color="dark-state"><p class="rt-font-banner-label">Виртуальная <br> телефония</p><p class="rt-space-top rt-space-bottom15">Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p><rt-button class="rt-button-orange">Подробнее</rt-button></rt-banner-item></rt-banner>'></pre-code>
    <pre-code
      text='<rt-banner :sleep-time="10000"><rt-banner-item background-image="/static/example-images/banerBackground1.jpg" :is-white-color="true"background-color="dark-state"><p class="rt-font-banner-label">Виртуальная <br> телефония</p><p class="rt-space-top rt-space-bottom15">Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p><rt-button class="rt-button-orange">Подробнее</rt-button></rt-banner-item><rt-banner-item background-color="yellow" background-image="/static/example-images/banerBackground2.jpg"><p class="rt-font-banner-label">Помогаем бизнесу <br> экономить</p><p class="rt-space-top rt-space-bottom15">Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса </p><rt-button class="rt-button-orange">Подробнее</rt-button></rt-banner-item></rt-banner>'></pre-code>
    <pre-code
      text='<rt-banner :sleep-time="30000"><rt-banner-item background-video="https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4" :is-white-color="true"background-color="dark-state"><p class="rt-font-banner-label">Виртуальная <br> телефония</p><p class="rt-space-top rt-space-bottom15">Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p><rt-button class="rt-button-orange">Подробнее</rt-button></rt-banner-item><rt-banner-item background-color="yellow" background-image="/static/example-images/banerBackground2.jpg"><p class="rt-font-banner-label">Помогаем бизнесу <br> экономить</p><p class="rt-space-top rt-space-bottom15">Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса </p><rt-button class="rt-button-orange">Подробнее</rt-button></rt-banner-item></rt-banner>'></pre-code>

    <pre-code
      text='
    <rt-banner :is-fullscreen-image="true" :sleep-time="30000"  content-mobile-min-height="100vh" content-mobile-height="400px">
      <rt-banner-item background-video="https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4"
                      :slide-time="50000"
                      link-target="_blank"
                      link="https://www.google.co.uk/search?q=yosemite+national+park"
                      :is-white-color="true" background-color="dark-state">
        <rt-color-line-text>
          <template slot="label">Расширяя границы</template>
          <template slot="content">Высокоскоростной интернет теперь повсюду</template>
        </rt-color-line-text>
        <rt-button class="rt-button-orange">Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item background-color="yellow" background-image="/static/example-images/banerBackground2.jpg" :slide-time="2000">
        <rt-color-line-text>
          <template slot="label">Помогаем бизнесу <br> экономить</template>
          <template slot="content">Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса
          </template>
        </rt-color-line-text>
        <rt-button class="rt-button-orange">Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item
        link="https://www.google.co.uk/search?q=ElephantsDream"
        background-video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        :is-white-color="true" background-color="orange" :slide-time="30000">
        <rt-color-line-text color-icon="purple">
          <template slot="label">Wink</template>
          <template slot="content">Более 200 ТВ-каналов, тысячи фильмов и сериалов в одном приложении</template>
        </rt-color-line-text>
        <rt-button class="rt-button-purple">Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>
    '></pre-code>
    <documentation-creater json="{}"></documentation-creater>
    <div class="rt-container rt-space-top25">
      <documentation-builder type="components" :json="documentation"></documentation-builder>
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
