<template>
  <div class="app-content rt-col-12 rt-col-md-3">
    <div class="rt-container">
      <div class="row">
        <div class="rt-col-12 rt-col-td-6 rt-col-md-3">
          <div class="app-title ">
            <h1 class="rt-font-hero">Un-wrapper</h1>
          </div>
        </div>

        <div class="rt-col-12 rt-col-td-6 rt-col-md-3">
          <rt-un-wrapper unwrap-button-text="показать все">
            <template slot="short-content">
              <div class="rt-col-4 rt-col-td-3 rt-col-md-3">
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Он-лайн касса</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">M2M</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">СМС-реклама</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Телевидение</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Аренда сетевого
                  оборудования</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Защита от DDoS-атак</p></a>
              </div>
            </template>
            <template slot="full-content">
              <div class="rt-col-4 rt-col-td-3 rt-col-md-3">
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Аренда сетевого
                  оборудования</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Защита от DDoS-атак</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Виртуальное хранилище</p>
                </a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Виртуальный ЦОД</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Он-лайн касса</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">M2M</p></a>
              </div>
              <div class="rt-col-4 rt-col-td-3 rt-col-md-3">
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Телевидение</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Облачные сервисы</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Видеоконференция</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Аудиоконференция</p></a>
                <a href=""><p class="rt-font-paragraph rt-font-bold rt-space-bottom05">Телевидение</p></a>
              </div>
            </template>
          </rt-un-wrapper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import componentsList from "../../componentsList";
  export default {
    name: "AppUnWrapper",
    components: componentsList
  };
</script>
