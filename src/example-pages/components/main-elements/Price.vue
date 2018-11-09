<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title row"><h1 class="col rt-font-hero">Price</h1></div>
      <div class="app-body">
        <div class="row">
          <div class="rt-col-4 rt-col-md-3">
            <pre-code
              text="<rt-price :value=&quot;750.231&quot; :old-value=&quot;123.2&quot; currency=&quot;$&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code
              text="<rt-price :value=&quot;750.231&quot; :old-value=&quot;123.2&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code text="<rt-price :value=&quot;750.231&quot; />" />
          </div>
        </div>

        <div class="row rt-space-top">
          <div class="rt-col-4 rt-col-md-3">
            <pre-code
              text="<rt-price :value=&quot;69&quot; :is-option=&quot;true&quot; currency=&quot;€&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code
              text="<rt-price :value=&quot;750.231&quot; time-interval=&quot;час.&quot; />"
            />
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3">
            <pre-code
              text="<rt-price :value=&quot;1231223169&quot; :is-option=&quot;true&quot; currency=&quot;€&quot; />"
            />
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3">
            <pre-code
              text="<rt-price :value=&quot;1231223169&quot; :only-price=&quot;true&quot; currency=&quot;€&quot; />"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="rt-space-top25">
      <div class="rt-col-12">
        <div class="app-documentation">
          <div
            class="app-documentation__label rt-font-h4 rt-space-left05 rt-space-bottom2"
          >
            Possible options
          </div>
          <div class="app-documentation__row rt-font-bold rt-space-bottom05">
            <div class="app-documentation__name rt-col-2">component name</div>
            <div class="app-documentation__name rt-col-3">
              component proporty
            </div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                proporty type
              </div>
              <div class="app-documentation__value-item rt-col-6">about</div>
              <div class="app-documentation__value-item rt-col-3">
                default value
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-price</div>
            <div class="app-documentation__name rt-col-3">:value</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                <span class="app-documentation__warning"
                  >Обязательное поле</span
                >
                <br />
                Значение ценника
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">0</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-price</div>
            <div class="app-documentation__name rt-col-3">:old-value</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Number</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Значение ценника до
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-price</div>
            <div class="app-documentation__name rt-col-3">time-interval</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >String</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Значение временного интервала "мес" "день" и т.п.
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-price</div>
            <div class="app-documentation__name rt-col-3">:is-option</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Boolean</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Отображение "от"
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-price</div>
            <div class="app-documentation__name rt-col-3">:only-price</div>
            <div
              class="app-documentation__value app-documentation__row rt-col-7"
            >
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--component"
                  >Boolean</span
                >
              </div>
              <div class="app-documentation__value-item rt-col-6">
                Отображение только ценника в валюте
              </div>
              <div class="app-documentation__value-item rt-col-3">
                <span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const componentsList = {};
export default {
  name: "AppTypography",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
