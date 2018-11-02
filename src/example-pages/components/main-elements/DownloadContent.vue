<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">Download Content</h1>
      </div>
      <div class="app-body">
        <div class="row">
          <div class="rt-col-12">
            <pre-code text="<rt-download-content >Приложения для мобильных устройств</rt-download-content>" />
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-5 rt-col-md-3">
            <pre-code text="<rt-download-content fileSize=&quot;3.4 Мб&quot; expansion=&quot;app&quot;>Приложения для мобильных устройств</rt-download-content>" />
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top">
            <pre-code text="<rt-download-content fileSize=&quot;1.4 Кб&quot; expansion=&quot;pdf&quot;>Расширение зоны покрытия точки доступа WI-FI  с помощью дополнительного клиентского оборудования</rt-download-content>" />
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
// const componentsList = {};
import componentsList from "../../componentsList";
export default {
  name: "AppDownloadContent",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
