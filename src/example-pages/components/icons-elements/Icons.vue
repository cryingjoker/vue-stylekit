<template>
  <div>
    <div class="rt-container">
      <div class="grid-center" />
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Icons</h1></div>
        </div>
      </div>
    </div>
    <div class="rt-container">
      <div class="rt-space-horizontal05">
        <div class="row">
          <div class="rt-col-1">
            <pre-code
              text='
                <rt-icon type="user-silhouette"
                  width="16"
                  height="16"
                  color="101828"
                ></rt-icon>
            '/>
          </div>
          <div class="rt-col-1">
            <pre-code text='<rt-icon type="MOBILE_CALL" caption="200" :candy=true></rt-icon>'/>
          </div>
          <div class="rt-col-1">
            <pre-code text='<rt-icon type="icon_403" caption="150" :candy=true></rt-icon>'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const componentsList = {};

export default {
  name: "AppIcons",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
