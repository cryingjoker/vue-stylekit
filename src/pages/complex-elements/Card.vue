<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">Cards</h1>
        </div>
      </div>
      <div class="app-body">
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-color-type="purple" :background-blur="5" :is-white-color="true"><template slot="content"><p class="rt-font-paragraph rt-space-bottom rt-font-bold">Оплата услуг</p><rt-input value="" placeholder="телефон, email или счёт"/><p class="rt-space-top05 rt-card-text rt-space-right">Введите номер телефона, email или номер лицевого счёта</p></template><template slot="footer"><rt-button :is-block="true" class="rt-button-small rt-button-white white-wave">Оплатить</rt-button></template></rt-card>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-color-type="light-blue" :background-blur="5" :is-white-color="true"><template slot="content"><div class="rt-font-center rt-space-top15 rt-space-bottom"><svg width="97" height="79" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M37.0208333 1l-8.3125 15.0051282 19.59375 61.6 46.90625-61.6" /><path d="M59.1875 1L67.5 16.0051282l-19.59375 61.6L1 16.0051282" /><path d="M1 16.0051282L23.5625 1H72.25l22.5625 15.0051282z" /></g></svg></div><p class="rt-font-paragraph rt-font-bold rt-space-top">Бонусы</p><p class="rt-space-top05">Подключайте друзей  и зарабатывайте бонусы</p></template><template slot="footer"><p>Условия акции</p></template></rt-card>'></pre-code>
          </div>

          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground5.png" background-position="bottom-right" :col-size="2"><template slot="content"><p class="rt-font-label">стоимость покупки</p><rt-price :value="1480" :only-price="true" /></template><template slot="footer"><p class="rt-font-paragraph rt-font-bold">Звоните по новому</p><p class="rt-font-paragraph rt-space-top05 rt-space-bottom">Беспроцентная рассрочка на смартфоны Samsung Galaxy S8 для абонентов Ростелекома</p><p class="rt-space-top">Условия акции</p></template></rt-card>'></pre-code>
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground3.png" :is-white-color="true" :background-cover="true" :background-smoke="0.3"><template slot="content"><p class="rt-font-paragraph rt-space-bottom rt-font-bold">Оплата услуг</p><rt-input value="" placeholder="телефон, email или счёт" /><p class="rt-space-top05 rt-card-text rt-space-right">Введите номер телефона, email или номер лицевого счёта</p></template><template slot="footer"><rt-button :is-block="true" class="rt-button-small rt-button-white white-wave">Оплатить</rt-button></template></rt-card>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground3.png" :background-opacity="0.5" background-position="bottom-right" :is-white-color="true" :background-cover="true" :background-smoke="0.5" :offset-top="true"><template slot="content"><p class="rt-font-paragraph rt-font-bold">Родительский контроль</p><p class="rt-space-top05 rt-card-text rt-space-right">для безопасности детей в интернете</p></template><template slot="footer"><p>Выберите свой тип подписки</p></template></rt-card>'></pre-code>
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground6.png":background-cover="true":background-opacity="0.7":background-smoke="0.3":is-white-color="true":offset-top="true"background-color-type="black" :col-size="2"><template slot="content"><p class="rt-font-paragraph rt-font-bold">Антивирусы</p><p class="rt-space-top05">Выгодная защита <br>для всех устройств</p></template><template slot="footer"><p>Выберите свой тип подписки</p></template></rt-card>'></pre-code>
          </div>
        </div>
        <div class="row">


          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground10.png" :background-cover="true" :background-opacity="0.7" :background-smoke="0.3" :is-white-color="true" :offset-top="true" background-color-type="black" :col-size="2"><template slot="content"><p class="rt-font-paragraph rt-font-bold">Игровой</p><p class="rt-space-top05">Высокоскоростной <br> интернет и игровые бонусы <br>для увлеченных геймеров</p></template><template slot="footer"><p>Выберите свою игровую опцию</p></template></rt-card>'></pre-code>
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground1.png" :background-cover="true" :background-opacity="0.7" :background-smoke="0.3" :is-white-color="true" :offset-top="true" background-color-type="black" :col-size="2"><template slot="content"><p class="rt-font-paragraph rt-font-bold">Microsoft Office 365</p><p class="rt-space-top05">Полный пакет программ <br>для всей семьи</p></template><template slot="footer"><p>Выберите свой тип подписки</p></template></rt-card>'></pre-code>
          </div>
        </div>
        <div class="row">
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground8.png" :background-cover="true" :is-white-color="true" background-color-type="black" :col-size="2"><template slot="content"><p class="rt-font-paragraph rt-font-bold">Игровой Warface</p><p class="rt-space-top05 rt-font-small-upper rt-font-small-upper">интернет</p><p class="rt-space-top rt-font-spacing018">Крутые пушки всем <br> абонентам, оружие <br> навсегда, кредиты каждый<br> день</p></template><template slot="footer"><div class="rt-font-right"><rt-price :value="850" /></div><rt-button :is-block="true" class="rt-button-small rt-button-white white-wave">Подключить</rt-button></template></rt-card>'></pre-code>
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground9.png" background-position="bottom-right" :col-size="2"><template slot="content"><p class="rt-space-top05 rt-font-small-upper">стоимость покупки</p><rt-price :value="4990" :only-price="true" /></template><template slot="footer"><div class="rt-space-bottom2"><p class="rt-font-paragraph rt-font-bold">Wi-Fi HD-видеокамера</p><p class="rt-space-top05">Контролируйте все <br>происходящее на расстоянии <br>  и просматривайте записи на<br> любом устройстве. </p></div></template></rt-card>'></pre-code>
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code text='<rt-card background-image="/example-images/cardBackground7.png" :background-cover="true" :background-opacity="0.7" :background-smoke="0.2" :is-white-color="true" :offset-top="true" background-color-type="black"
            ><template slot="content"><p class="rt-font-paragraph rt-font-bold">Мобильное ТВ</p><p class="rt-space-top05">101 тв-канал с контентом на любой вкус в подарок </p></template><template slot="footer"><p>Подробнее</p></template></rt-card>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-color-type="red" :background-blur="5"><p>Оплата услуг</p></rt-card>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-color-type="orange" :background-blur="5"><p>Оплата услуг</p></rt-card>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-color-type="yellow" :background-blur="5"><p>Оплата услуг</p></rt-card>'></pre-code>
          </div>
        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-color-type="pink" :background-blur="5"><p>Оплата услуг</p></rt-card>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-color-type="green" :background-blur="5"><p>Оплата услуг</p></rt-card>'></pre-code>
          </div>
          <div class="rt-col-6 rt-col-md-3 d-stretch rt-space-top">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground1.png" :background-cover="true"/>'></pre-code>
          </div>

        </div>
        <div class="row">
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground1.png" :background-cover="true" :background-blur="5"><p class="rt-card__label rt-font-paragraph">Оплата услуг</p></rt-card>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card :background-repeat="true" background-image="/example-images/cardBackground2.png" :background-smoke="0.3"/>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground1.png" :background-smoke="0.5"/>'></pre-code>
          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground1.png" :background-cover="true"/>'></pre-code>
          </div>
        </div>
        <div class="row">
          <div class="rt-col-12 rt-col-md-3 rt-space-top">
            <pre-code
              text='<rt-card background-image="/example-images/cardBackground1.png" :background-cover="true"/>'></pre-code>

          </div>
          <div class="rt-col-3 rt-col-md-3 rt-space-top d-stretch">
            <pre-code
              text='<rt-card background-color-type="dark-blue" :background-blur="5"><p>Оплата услуг</p></rt-card>'></pre-code>
          </div>
        </div>

      </div>
    </div>
  </div>
    <div class="rt-container rt-space-top25">
      <div class="rt-col-12">
        <div class="app-documentation">
          <div class="app-documentation__label rt-font-h4 rt-space-left05 rt-space-bottom2">Possible options</div>
          <div class="app-documentation__row rt-font-bold rt-space-bottom05">
            <div class="app-documentation__name rt-col-2">component name</div>
            <div class="app-documentation__name rt-col-3">component proporty</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3">proporty type</div>
              <div class="app-documentation__value-item rt-col-6">about</div>
              <div class="app-documentation__value-item rt-col-3">default value</div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:static-body-height</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает flex: 0 для card - необходимо для
                случаев сброса авто ширины и высоты
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:hide-background-on-mobile</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Скрывает картинку карточки при мобильном разрешении
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">(:)background-size-width</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Number</span> <span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Задает ширину картинки карточки <br> number - любое
                число становится px
                <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">(:)background-size-height</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Number</span> <span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Задает высоту картинки карточки <br> number - любое
                число становится px
                <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:background-image-stand-alone</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Картинка карточки будет создана как отдельный блок
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-color-type</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает цвет фона карточки <br> возможные
                значения
                <br>
                <span class="rt-font-label">
                <span class="rt-code rt-code--fill">dark-state</span>
                <span class="rt-code rt-code--fill">yellow</span> <span class="rt-code rt-code--fill">red</span> <span
                  class="rt-code rt-code--fill">dark-blue</span>
                <span class="rt-code rt-code--fill">light-blue</span> <span class="rt-code rt-code--fill">orange</span> <span
                  class="rt-code rt-code--fill">pink</span> <span class="rt-code rt-code--fill">green</span>
                </span>
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-image</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">url адрек картинки карточки</div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-cover</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает cover значение для картинки карточки
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:background-repeat</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавить background-repeat опцию на картинке фона
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:background-blur</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Number</span></div>
              <div class="app-documentation__value-item rt-col-6">Размытие картинки <br>
                значение от <span class="rt-code rt-code--fill">0.0</span> до <span
                  class="rt-code rt-code--fill">1.0</span>
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:background-smoke</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Number</span></div>
              <div class="app-documentation__value-item rt-col-6">Размытие заднего фона <br>
                значение от <span class="rt-code rt-code--fill">0.2</span> <span
                  class="rt-code rt-code--fill">0.3</span> <span class="rt-code rt-code--fill">0.5</span>
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:background-opacity</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Number</span></div>
              <div class="app-documentation__value-item rt-col-6">Прозрачность заднего фона <br>
                значение от <span class="rt-code rt-code--fill">0.0</span> до <span
                  class="rt-code rt-code--fill">1.0</span>
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:is-white-color</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Установить белый цвет текста</div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">false</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-position</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6"> Задает расположение фона карточки
              возможные значения : <br>
                <span class="rt-code rt-code--fill">top</span>
                <span class="rt-code rt-code--fill">left</span>
                <span class="rt-code rt-code--fill">bottom</span>
                <span class="rt-code rt-code--fill">right</span>
                <span class="rt-code rt-code--fill">top-left</span>
                <span class="rt-code rt-code--fill">top-right</span>
                <span class="rt-code rt-code--fill">bottom-left</span>
                <span class="rt-code rt-code--fill">bottom-right</span>
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-position-top</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Number</span> <span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6"><span class="app-documentation__warning">работает только при background-image-stand-alone и background-image</span><br>
                Устанавливает отступ картинки сверху<br> number - любое число становится px
                <br>string - любые значения</div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-position-left</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Number</span> <span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6"><span class="app-documentation__warning">работает только при background-image-stand-alone и background-image</span><br>
                Устанавливает отступ картинки слева<br> number - любое число становится px
                <br>string - любые значения</div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
        <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-position-right</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Number</span> <span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6"> <span class="app-documentation__warning">работает только при background-image-stand-alone и background-image</span><br>
                Устанавливает отступ картинки справа<br> number - любое число становится px
                <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
        </div>

      <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">background-position-bottom</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Number</span> <span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6"> <span class="app-documentation__warning">работает только при background-image-stand-alone и background-image</span><br>
                Устанавливает отступ картинки снизу<br> number - любое число становится px
                <br>string - любые значения
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
        </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:offset-top</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">
                Флаг указывающий отступ сверху карточки
              </div>
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--fill">false</span></div>
            </div>
        </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:col-size</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span></div>
              <div class="app-documentation__value-item rt-col-6">Поджимает контент карточки / было создано для создания 6 колоночной карточки, где 3 колонки - текст, остальное - картинка.
                <span class="app-documentation__warning">Доступно только значение <span class="rt-code rt-code--fill">2</span></span>
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:card-height</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает высоту карточки
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>

          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:card-header-height</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает высоту заголовка карточки
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-card</div>
            <div class="app-documentation__name rt-col-3">:card-body-height</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--component">Number</span></div>
              <div class="app-documentation__value-item rt-col-6">Устанавливает высоту контейнера для контента карточки
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span></div>
            </div>
          </div>


        </div>
    </div>

  </div>
</template>
<script>
  import { Card } from "@/complex-elements/Card";
  import { Input, Button, Price } from "@/main-elements";
  import { PreComponent } from "@/test-components";

  const componentsList = {};

  componentsList[Card.name] = Card;
  componentsList[Input.name] = Input;
  componentsList[Button.name] = Button;
  componentsList[Price.name] = Price;

  componentsList[PreComponent.name] = PreComponent;

  export default {
    name: "AppButtons",
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
