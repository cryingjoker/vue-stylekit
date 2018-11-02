<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">Textarea</h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">Textarea without js</p>
        </div>
        <div class="app-row row">
          <div class="rt-col">
            <span class="rt-font-label flex-fill rt-space-bottom05">simple textarea</span>
            <rt-textarea-without-js placeholder="Textarea" />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-6 rt-col-md-3 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">simple with error</span>
            <rt-textarea-without-js error-message="textarea error message" :has-error="true"
                                    placeholder="Textarea"
            />
          </div>
          <div class="rt-col-6 rt-col-md-3 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">disabled simple</span>
            <rt-textarea-without-js error-message="textarea error message" :disabled="true"
                                    placeholder="Textarea"
            />
          </div>
        </div>

        <div class="app-row row">
          <div class="col  rt-col-md-3 ">
            <p class="rt-font-h3">Textarea with js</p>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-6  rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">simple static textarea</span>
            <rt-textarea-static placeholder="Textarea" />
          </div>
          <div class="rt-col-6  rt-col-md-3 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">static textarea with error</span>
            <rt-textarea-static error-message="textarea error message" placeholder="Textarea"
                                :has-error="true"
            />
          </div>
        </div>

        <div class="app-row row">
          <div class="col rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">static disabled textarea</span>
            <rt-textarea-static error-message="textarea error message" placeholder="Textarea"
                                :disabled="true"
            />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-4  rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">dynamic textarea</span>
            <rt-textarea placeholder="Textarea" />
          </div>
          <div class="rt-col-4  rt-col-md-2 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05">dynamic textarea with error</span>
            <rt-textarea placeholder="Textarea" error-message="textarea error message"
                         :has-error="true"
            />
          </div>


          <div class="rt-col-4  rt-col-md-1 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05">dynamic disabled textarea</span>
            <rt-textarea placeholder="Textarea" error-message="textarea error message"
                         :disabled="true"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
const componentsList = {};
export default {
  name: "AppTextarea",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
