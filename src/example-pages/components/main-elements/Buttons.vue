<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">

          <h1 class="rt-font-hero rt-col">Buttons <span class="rt-code rt-font-h3 rt-col"> .rt-button</span></h1>
        </div>
      </div>
      <div class="app-body">
        <div class="app-row">
          <p class="rt-font-h3">buttons with js ripple</p>
        </div>
        <div class="app-row row">
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex">
            <pre-code text="<rt-button class=&quot;rt-button-purple&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-orange&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-purple-border&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-orange-border&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-white&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-transparent&quot;>Подключить</rt-button>" />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex">
            <pre-code text="<rt-button class=&quot;rt-button-small rt-button-purple&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-small rt-button-orange&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-small rt-button-purple-border&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-small rt-button-orange-border&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-small rt-button-white&quot;>Подключить</rt-button>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <pre-code text="<rt-button class=&quot;rt-button-small rt-button-transparent&quot;>Подключить</rt-button>" />
          </div>
        </div>

        <div class="row rt-space-top">
          <div class="rt-col">
            <p class="rt-font-h3">simple buttons</p>
          </div>
        </div>
        <div class="app-row row rt-space-top">
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex">
            <span class="rt-font-label flex-fill rt-space-bottom05">Purple button <span class="rt-code"> .rt-button-purple</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-purple&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Orange button <span class="rt-code"> .rt-button-orange</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-orange&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Purple border button <span class="rt-code"> .rt-button-purple-border</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-purple-border&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Orange border button <span class="rt-code"> .rt-button-orange-border</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-orange-border&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Transparent button <span class="rt-code"> .rt-button-transparent</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-transparent&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">White button <span class="rt-code"> .rt-button-white</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-white&quot;>Подключить</rt-button-without-ripple>" />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled purple button</span>
            <pre-code text="<rt-button-without-ripple disabled class=&quot;rt-button-purple&quot;>Подключить</rt-button-without-ripple>" />
          </div>

          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled orange button</span>
            <pre-code text="<rt-button-without-ripple disabled class=&quot;rt-button-orange&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled purple border button</span>
            <pre-code text="<rt-button-without-ripple disabled class=&quot;rt-button-purple-border&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled orange border button</span>
            <pre-code text="<rt-button-without-ripple disabled class=&quot;rt-button-orange-border&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled transparent button</span>
            <pre-code text="<rt-button-without-ripple disabled class=&quot;rt-button-transparent&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled white button</span>
            <pre-code text="<rt-button-without-ripple disabled class=&quot;rt-button-white&quot;>Подключить</rt-button-without-ripple>" />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex">
            <span class="rt-font-label flex-fill rt-space-bottom05">Purple small button <span class="rt-code"> .rt-button-purple.rt-button-small</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-purple&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Orange small button <span class="rt-code"> .rt-button-orange.rt-button-small</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-orange&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Purple small border button <span
              class="rt-code"
            > .rt-button-purple-border.rt-button-small</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-purple-border&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Orange small border button <span
              class="rt-code"
            > .rt-button-orange-border.rt-button-small</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-orange-border&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Transparent small button <span
              class="rt-code"
            > .rt-button-transparent.rt-button-small</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-transparent&quot;>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Transparent small button <span
              class="rt-code"
            > .rt-button-transparent.rt-button-small</span></span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-white&quot;>Подключить</rt-button-without-ripple>" />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled purple small button</span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-purple&quot; disabled>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled orange small button</span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-orange&quot; disabled>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled purple small border button</span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-purple-border&quot; disabled>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled orange small border button</span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-orange-border&quot; disabled>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled transparent small border button</span>
            <pre-code text="<rt-button-without-ripple class=&quot;rt-button-small rt-button-transparent&quot; disabled>Подключить</rt-button-without-ripple>" />
          </div>
          <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">Disabled transparent small border button</span>
            <pre-code text=" <rt-button-without-ripple class=&quot;rt-button-small rt-button-white&quot; disabled>Подключить</rt-button-without-ripple>" />
          </div>
        </div>


        <div class="app-row">
          <p class="rt-font-h3"> Horizontal buttons</p>
        </div>

        <pre-code text="<div class=&quot;app-row&quot;><rt-button class=&quot;rt-button-purple rt-button-md-small&quot;>Подключить</rt-button><rt-button class=&quot;rt-button-purple rt-button-md-small&quot;>Подключить</rt-button></div>" />

        <div class="app-row">
          <p class="rt-font-h3"> Vertical buttons</p>
        </div>
        <pre-code text="<div class=&quot;app-row&quot;><rt-button class=&quot;rt-button-vertical rt-button-purple&quot;>Подключить</rt-button><rt-button class=&quot;rt-button-vertical rt-button-purple&quot;>Подключить</rt-button></div>" />
      </div>
    </div>

  </div>
</template>

<script>
import componentsList from "../../componentsList";
export default {
  name: "AppButtons",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
