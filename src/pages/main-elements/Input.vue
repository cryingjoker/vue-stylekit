<template>
    <div class="app-content rt-col-md-3  rt-col-10">
        <div class="app-title">
                <h1 class="rt-font-hero row">Input</h1>
        </div>
        <div class="app-body">
            <div class="app-row row">
                <p class="rt-font-h3 rt-col">Input without js</p>
            </div>
            <div class="app-row row">
                <div class="rt-col-4 rt-col-md-3">
                    <span class="rt-font-label flex-fill rt-space-bottom05">simple input</span>
                <rt-input-without-js :errorMessage="'ошибка: не является почтой'"
                                     :placeholder="'Электронная почта'"></rt-input-without-js>
                </div>
                <div class="rt-col-4 rt-col-md-3 rt-mb-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">input with error</span>
                    <rt-input-without-js :errorMessage="'ошибка: не является почтой'"
                                         :placeholder="'Электронная почта'"
                                         :has-error="true"></rt-input-without-js>

                </div>
                <div class="rt-col-4 rt-col-md-3 rt-mb-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">disabled input</span>
                    <rt-input-without-js :errorMessage="'ошибка: не является почтой'"
                                         :disabled="true"
                                         :placeholder="'Электронная почта'"></rt-input-without-js>
                </div>
            </div>


            <div class="app-row row">
                <p class="rt-font-h3 rt-col">Input with js</p>
            </div>
            <div class="app-row row">
                <div class="rt-col-4 rt-col-md-2">
                    <span class="rt-font-label flex-fill rt-space-bottom05">simple input</span>
                    <rt-input placeholder="Электронная почта"></rt-input>
                </div>
                <div class="rt-col-4 rt-col-md-2 rt-mb-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">input with error</span>
                <rt-input :placeholder="'Электронная почта'"
                          value="inputModelValue"
                          :error-message="'ошибка: не является почтой'"
                          :has-error="true"></rt-input>
                </div>
                <div class="rt-col-4 rt-col-md-1 rt-mb-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">disabled input</span>
                    <rt-input :placeholder="'Электронная почта'"
                              :disabled="true"
                              value="inputModelValue"
                              :error-message="'ошибка: не является почтой'"
                    ></rt-input>
                </div>
            </div>
            <div class="app-row row">
                <div class="rt-col-3 rt-col-md-3">
                    <span class="rt-font-label flex-fill rt-space-bottom05">input in 3 col</span>
                    <rt-input placeholder="Электронная почта"></rt-input>
                </div>
                <div class="rt-col-2 rt-col-md-2 rt-mb-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05  rt-font-no-wrpa">input in 2 col</span>
                    <rt-input placeholder="Улица"></rt-input>
                </div>
                <div class="rt-col-1 rt-col-md-1 rt-mb-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05  rt-font-no-wrpa">input in 1 c</span>
                    <rt-input placeholder="Дом"></rt-input>
                </div>



            </div>

        </div>
    </div>
</template>


<script>
import { Input, InputWithoutJs } from "@/Components/main-elements/Input";

const componentsList = {};
componentsList[Input.name] = Input;
componentsList[InputWithoutJs.name] = InputWithoutJs;
export default {
  name: "app-input",
  components: componentsList,
  data: () => ({
    inputModelValue: "test"
  }),
  methods: {},
  mounted() {},
  created() {}
};
</script>
