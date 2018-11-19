<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title"><h1 class="rt-font-hero">Youtube player</h1></div>
      <div class="app-body">
        <div class="row">
        <div class="rt-col-2 rt-col-md-3">
        </div>
          <div class="rt-col-8 rt-col-md-3">
        <rt-youtube :playlist-length="[3,10,10,2]" :utm-sources="['ab','ba','ca','ka']"  :playlist-id="['PLbAFXJC0J5GanbANaPaaWYB6Vdc_JPZ6n','RDUOxkGD8qRB4','RDBqNES_8YLP4','RDMM3mBKjBJX60E','RDAmq-qlqbjYA']"></rt-youtube>
          </div>
          <div class="rt-col-2 rt-col-md-3">
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
const componentsList = {};
export default {
  name: "AppYoutube",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
