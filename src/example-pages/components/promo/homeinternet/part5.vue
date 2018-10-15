<template>
  <rt-fullscreen-image background-image="/static/images/homeinternet/homeinternet-image4.jpg" background-position="top">
    <div class="rt-md-space-top2 rt-space-top6">
      <div class="rt-container">
        <div class="rt-col-12">
          <div class="row">
            <div class="rt-col-6">
              <rt-color-line-text>
                <template slot="label">Безопасный <br> интернет</template>
                <template slot="content">Надежная защита всех <br>  устройств вашей семьи
                </template>
              </rt-color-line-text>
              <div class="rt-space-top rt-space-left05">
                <rt-button class="rt-button-orange rt-space-horizontal">Выбрать тариф</rt-button>
              </div>
            </div>
          </div>
          <div class="row rt-space-top4 rt-font-hypnens-off">
            <div class="rt-col-4 rt-col-md-3">
              <rt-card-image card-image="/static/images/homeinternet/homeinternet-image15.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph color-main07">На всех устройствах</p>
                  <p class="rt-space-top05">Короткое описание продукта. Около двух или трёх предложений.</p>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
              <rt-card-image card-image="/static/images/homeinternet/homeinternet-image16.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph color-main07">Для мобильных устройств</p>
                  <p class="rt-space-top05">Короткое описание продукта. Около двух или трёх предложений.</p>
                </template>
              </rt-card-image>
            </div>
            <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
              <rt-card-image card-image="/static/images/homeinternet/homeinternet-image17.jpg">
                <template slot="body">
                  <p class="rt-font-paragraph color-main07">Выгодная годовая подписка</p>
                  <p class="rt-space-top05">Короткое описание продукта. Около двух или трёх предложений.</p>
                </template>
              </rt-card-image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </rt-fullscreen-image>
</template>
<script>
  import componentsList from "../../../componentsList";
  // const componentsList = {};


  export default {
    name: "homeintehrnetPart5",
    components: componentsList,
    mounted() {
    },
    created() {
    },
    methods: {}
  };
</script>
