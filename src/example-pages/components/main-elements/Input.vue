<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero rt-col">
          Input
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">
            Input with js
          </p>
        </div>
        <!--<div class="is-b2c">-->
        <div class="app-row row">
          <div class="rt-col-4 rt-col-md-2">
            <span class="rt-font-label flex-fill rt-space-bottom05">simple input</span>
            <pre-code
              text="<rt-input label=&quot;Начните вводить почту&quot; type=&quot;string&quot; value=&quot;&quot; placeholder=&quot;Электронная почта&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">input with error</span>
            <pre-code
              text="<rt-input type=&quot;email&quot; label=&quot;Начните вводить почту&quot; placeholder=&quot;Электронная почта&quot; value=&quot;inputModelValue&quot; error-message=&quot;ошибка: не является почтой&quot; :has-error=&quot;true&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05">disabled input</span>
            <pre-code
              text="<rt-input value=&quot;&quot; placeholder=&quot;Электронная почта&quot; :disabled=&quot;true&quot; value=&quot;inputModelValue&quot; error-message=&quot;ошибка: не является почтой&quot;/>"
            />
          </div>
        </div>
        <div class="app-row row ">
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">input in 3 col</span>
            <rt-input value='' placeholder='Электронная почта' />
          </div>
          <div class="rt-col-2 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 2 col</span>
            <rt-input value='' placeholder='Улица' />
          </div>
          <div class="rt-col-1 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 1 c</span>

            <rt-input value='' placeholder='Дом'></rt-input>
          </div>
          <div class="rt-col-1"></div>
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">password input</span>
            <rt-input type="password" placeholder="Введите пароль"/>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">input in 3 col !!</span>
            <rt-input value='' placeholder='Электронная почта' validate="required|email" :realtime-validate="true"/>
          </div>
          <div class="rt-col-2 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 2 col</span>
            <rt-input value='' placeholder='Улица' />
          </div>
          <div class="rt-col-1 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 1 c</span>

            <rt-input value='' placeholder='Дом' :has-error="true">
                <rt-validation-icon status="error" mobile-hint-orient="left" hint-text="Есть техническая возможность"></rt-validation-icon>
            </rt-input>
          </div>
          <div class="rt-col-1"></div>
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">password input</span>
            <rt-input type="password" placeholder="Введите пароль"/>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">input in 3 col</span>
            <rt-input value='' placeholder='Электронная почта'  validate="email" :validate-on-blur="true"/>
          </div>
          <div class="rt-col-2 rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 2 col</span>
            <rt-input :validate-on-blur="true" value='' placeholder='Улица' />
          </div>
          <div class="rt-col-1 rt-col-md-1 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 1 c</span>

            <rt-input value='' placeholder='Дом'>
                <rt-validation-icon status="success" mobile-hint-orient="left" hint-text="Есть техническая возможность"></rt-validation-icon>
            </rt-input>
          </div>
          <div class="rt-col-1"></div>
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">password input</span>
            <rt-input type="password" placeholder="Введите пароль"/>
          </div>
        </div>
        <rt-input
          insert-type="string"
          value=""
          insert-lang="ru"
          placeholder="Ф.И.О."
        />
        <rt-input
          insert-type="number"
          value=""
          :max-length="2"
          placeholder="Ваше любимое число до 99"
        />
        <rt-input
          insert-type="string"
          value=""
          insert-lang="en"
          placeholder="enter your name(English, please)"
        />
        <div class="app-row row">
          <div class="rt-col rt-col-12">
            <rt-input :show-numbers-buttons="true" insert-type="number" :min-number="0" :emit-event="true"/>
          </div>
        </div>
        <!--</div>-->
        <!--<div class="is-b2b">-->
        <div class="app-row row rt-space-top rt-space-bottom ">
          <div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">
            <rt-input placeholder="Электронная почта" :is-b2b-input="true"/>
          </div>
          <div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">
            <rt-input
              placeholder="Электронная почта"
              :is-b2b-input="true"
              value="kdbafasdfsdfsd"
              :disabled="true"
            />
          </div>
          <div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">
            <pre-code
              text='<rt-input
                placeholder=&quot;Электронная почта&quot;
                :hasError=&quot;true&quot;
                :is-b2b-input=&quot;true&quot;
                value=&quot;kdbaf@dfj.dfd&quot;
                error-message=&quot;ошибка: не является почтой&quot;/>'
            />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col rt-col-6 rt-col-td-3 rt-col-md-3">
            <pre-code
              text='<rt-input
                placeholder=&quot;Электронная почта&quot;
                :is-b2b-input=&quot;true&quot;
                :outlined=&quot;true&quot;/>'
            />
            <pre-code
              text='<rt-input
                placeholder=&quot;Электронная почта&quot;
                :hasError=&quot;true&quot;
                :is-b2b-input=&quot;true&quot;
                :outlined=&quot;true&quot;
                error-message=&quot;ошибка: не является почтойошибка: не является почтойошибка: не является почтойошибка: не является почтойошибка: не является почтойошибка: не является почтой&quot;/>'
            />
            <pre-code
              text='<rt-input
                placeholder=&quot;Электронная почта&quot;
                :disabled=&quot;true&quot;
                :is-b2b-input=&quot;true&quot;
                :outlined=&quot;true&quot;/>'
            />
            <pre-code
              text='<rt-input
                placeholder=&quot;Введите пароль&quot;
                type=&quot;password&quot;
                :is-b2b-input=&quot;true&quot;
                :outlined=&quot;true&quot;/>'
            />
          </div>
        </div>
        <div class="app-row color-block--light-grey rt-space-top3 rt-space-bottom3 row">
          <div class="rt-col-12 rt-space-bottom15">
            <h2 class="rt-font-bold rt-font-center rt-space-bottom05">Оформить заявку на подключение</h2>
            <p class="rt-font-paragraph rt-font-center">услуга «Виртуальная АТС», тариф М</p>
          </div>
          <div class="rt-col-3 rt-col-td-1"></div>
          <div class="rt-col rt-col-6 rt-col-td-4 rt-col-md-3">
            <rt-input placeholder="Имя" :is-b2b-input="true"/>
            <rt-input placeholder="Компания" :is-b2b-input="true"/>
            <rt-input placeholder="Электронная почта" :is-b2b-input="true"/>
            <rt-input placeholder="Телефон" :is-b2b-input="true"/>
            <rt-input placeholder="Код из смс" :is-b2b-input="true" :approved="true"/>
            <div class="row flex-center-center rt-space-top">
              <rt-checkbox name="agreement" class="color-main05">Я принимаю <a href="">условия передачи информации</a>
              </rt-checkbox>
            </div>
            <rt-button class="rt-button-transparent-purple">Получить код</rt-button>

          </div>
          <div class="rt-col-3 rt-col-td-1"></div>
        </div>
      </div>
    </div>
    <div class="rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>

<script>
  import documentation from "../../../lib/components/Input/docs/index.json";
  import componentsList from "../../componentsList";

  export default {
    name: "AppInput",
    components: componentsList,
    data: () => ({
      inputModelValue: "test",
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {}
  };
</script>
