<template>
  <div>
    <div class="rt-container">
      <div class="grid-center"/>
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row">
            <h1 class="rt-font-hero rt-col">Banners</h1>
          </div>
        </div>
      </div>
    </div>

    <pre-code
      text='<rt-banner><rt-banner-item background-image="/example-images/banerBackground1.jpg":is-white-color="true"background-color="dark-state"><p class="rt-font-banner-label">Виртуальная <br>  телефония</p><p class="rt-space-top rt-space-bottom15">Быстрое подключение без трат на оборудование,<br> возможность пользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p><rt-button class="rt-button-orange">Подробнее</rt-button></rt-banner-item><rt-banner-item background-color="yellow"background-image="/example-images/banerBackground2.jpg"><p class="rt-font-banner-label">Помогаем бизнесу <br> экономить</p><p class="rt-space-top rt-space-bottom15">Цифровые сервисы и технологии по выгодным ценам для среднего и малого бизнеса </p><rt-button class="rt-button-orange">Подробнее</rt-button></rt-banner-item></rt-banner>'></pre-code>
    <div class="rt-container rt-space-top25">
      <div class="rt-col-12">
        <div class="app-documentation">
          <div class="app-documentation__label rt-font-h4 rt-space-left05 rt-space-bottom2">Possible options</div>
          <div class="app-documentation__row rt-font-bold rt-space-bottom05">
            <div class="app-documentation__name rt-col-3">component name</div>
            <div class="app-documentation__name rt-col-2">component proporty</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3">proporty type</div>
              <div class="app-documentation__value-item rt-col-6">about</div>
              <div class="app-documentation__value-item rt-col-3">default value</div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3"> rt-banner</div>
            <div class="app-documentation__name rt-col-2">(:)content-min-height</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span> <span class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает минимальную высоту банера <br> number - любое число становится px
                <br>string - любые значения</div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3">rt-banner</div>
            <div class="app-documentation__name rt-col-2">(:)content-height</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span> <span class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает высоту банера <br> number - любое число становится px
                <br>string - любые значения</div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3">rt-banner</div>
            <div class="app-documentation__name rt-col-2">:is-fullscreen-image</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Флаг установки фулскрин картинки</div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">false</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3">rt-banner</div>
            <div class="app-documentation__name rt-col-2">background-color</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает цвет фона банера <br> возможные значения
                <br>
                <span class="rt-font-label">
                <span class="rt-code rt-code--fill">dark-state</span>
                <span class="rt-code rt-code--fill">yellow</span> <span class="rt-code rt-code--fill">red</span> <span
                  class="rt-code rt-code--fill">dark-blue</span>
                <span class="rt-code rt-code--fill">light-blue</span> <span class="rt-code rt-code--fill">orange</span> <span
                  class="rt-code rt-code--fill">pink</span> <span class="rt-code rt-code--fill">green</span>
                </span>
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3">rt-banner</div>
            <div class="app-documentation__name rt-col-2">:background-repeat</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает background-repeate опцию на картинке фона
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">false</span></div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3"> rt-banner-item</div>
            <div class="app-documentation__name rt-col-2">(:)content-min-height</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span> <span class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает минимальную высоту слайда <br> number - любое число становится px
                <br>string - любые значения</div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3">rt-banner-item</div>
            <div class="app-documentation__name rt-col-2">(:)content-height</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span> <span class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает высоту слайда <br> number - любое число становится px
                <br>string - любые значения</div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3">rt-banner-item</div>
            <div class="app-documentation__name rt-col-2">(:)content-min-width</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span> <span class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает минимальную ширину слайда <br> number - любое число становится px
                <br>string - любые значения</div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3">rt-banner-item</div>
            <div class="app-documentation__name rt-col-2">(:)content-max-width</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span> <span class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает максимальную ширину слайда <br> number - любое число становится px
                <br>string - любые значения</div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3">rt-banner-item</div>
            <div class="app-documentation__name rt-col-2">background-сolor</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает цвет фона слайда</div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-3">rt-banner-item</div>
            <div class="app-documentation__name rt-col-2">:is-white-color</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает белый цвет текста слайда
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">false</span></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Card } from "@/complex-elements/Card";
  import { Input, Button, Price } from "@/main-elements";
  import { Banner, BannerItem } from "@/experimental-elements";
  import { PreComponent } from "@/test-components";

  const componentsList = {};
  componentsList[PreComponent.name] = PreComponent;
  componentsList[Card.name] = Card;
  componentsList[Input.name] = Input;
  componentsList[Button.name] = Button;
  componentsList[Price.name] = Price;
  componentsList[Banner.name] = Banner;
  componentsList[BannerItem.name] = BannerItem;

  export default {
    name: "AppBanners",
    components: componentsList,
    mounted() {
    },
    created() {
    },
    methods: {}
  };
</script>

<style scoped lang="scss">
</style>
