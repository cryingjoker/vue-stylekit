<template>
  <div>


    <!-- Каталог книг -->
    <div class="winklp">

      <div class="rt-container">
        <div class="winklp__first">
          <div class="winklp__first-block">
            <p class="winklp__first__label"><img class="winklp__first__label-image"
                                                 src="/static/images/wink/winklogo.png"
                                                 alt=""></p>
            <p class="winklp__first__text">Смотрите на 5 экранах, <br class="md-d-none">а интернет – в подарок</p>

            <p class="winklp__first__second-text">ТВ, кино и сериалы в одном пакете <br class="td-d-none"> с домашним и
              мобильным интернетом</p>
            <div class="winklp__first__footr">
              <div class="winklp__first__footr-content">
                <rt-button class="rt-button-orange">Подключить</rt-button>
                <span class="rt-space-left rt-md-space-left-none d-md-block rt-md-space-top">от 400 руб./мес.</span>
              </div>
            </div>
          </div>
          <div class="winklp__first-block">
            <div id="animation_container">
              <canvas id="canvas" class="winklp__first__video"></canvas>
              <div id="dom_overlay_container"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="winklp__second">
        <div class="relative">
          <div class="rt-container">
            <p class="winklp__second__text show-swipe-top-on-scroll rt-md-space-horizontal05">Популярные <br
              class="td-d-none">фильмы, сериалы, <br class="td-d-none">каналы, которые
              <br class="td-d-none">можно смотреть
              <br class="td-d-none">где угодно
            </p>
          </div>
          <div class="winklp__pictures winklp__pictures-zero">
            <div class="winklp__pictures__item winklp__pictures__item-zero-0"
                 backgrounds='["/static/images/wink/Group 24.png","/static/images/wink/255x307.png","/static/images/wink/158x191 copy.png"]'></div>
            <div class="winklp__pictures__item winklp__pictures__item-zero-1"
                 backgrounds='["/static/images/wink/Bitmap (1).png","/static/images/wink/158x191.png","/static/images/wink/241x185 copy.png"]'></div>
            <div class="winklp__pictures__item winklp__pictures__item-zero-2"
                 backgrounds='["/static/images/wink/Group 29.png","/static/images/wink/241x185.png", "/static/images/wink/255x191 copy.png"]'></div>
          </div>
        </div>
        <div class="rt-space-top-half winklp__second-block">
          <div class="winklp__second__label">
            <div class="relative winklp__pictures-first">
              <div class="rt-container rt-space-top2 rt-space-bottom2 rt-md-space-top-none rt-md-space-bottom-none">
                <div class="show-swipe-top-on-scroll">
                  <p class="winklp__second__label-text rt-md-space-left05">3000+</p>
                  <p class="winklp__second__label-subtext rt-md-space-left05">фильмов и сериалов</p>
                </div>
              </div>
              <div class="winklp__pictures">
                <div class="winklp__pictures__item winklp__pictures__item-first-0"
                     backgrounds='["/static/images/wink/Bitmap (2).png","/static/images/wink/255x191.png", "/static/images/wink/255x307 (1).png"]'></div>
                <div class="winklp__pictures__item winklp__pictures__item-first-1"
                     backgrounds='["/static/images/wink/Bitmap Copy 3.png","/static/images/wink/255x307 copy 2.png", "/static/images/wink/255x307 copy 3.png"]'></div>
                <div class="winklp__pictures__item winklp__pictures__item-first-2"
                     backgrounds='["/static/images/wink/Bitmap Copy 5.png","/static/images/wink/255x307 copy.png", "/static/images/wink/255x3071.png"]'></div>
              </div>
            </div>
          </div>
        </div>
        <div class="rt-space-top3 rt-md-space-top-none winklp__second-block">
          <div class="winklp__second__label">
            <div class="relative winklp__pictures-second">
              <div class="rt-container rt-space-top">
                <div class="show-swipe-top-on-scroll">
                  <p class="winklp__second__label-text">180+</p>
                  <p class="winklp__second__label-subtext">ТВ-каналов</p>
                </div>
              </div>
              <div class="winklp__pictures">
                <div class="winklp__pictures__item winklp__pictures__item-second-0"
                     backgrounds='["/static/images/wink/Group 22.png","/static/images/wink/283x235 copy.png", "/static/images/wink/283x235.png"]'></div>
                <div class="winklp__pictures__item winklp__pictures__item-second-1"
                     backgrounds='["/static/images/wink/Bitmap Copy 2.png","/static/images/wink/371x307 copy.png", "/static/images/wink/371x307.png"]'></div>
                <div class="winklp__pictures__item winklp__pictures__item-second-2"
                     backgrounds='["/static/images/wink/Bitmap Copy 5.1 (1).png","/static/images/wink/Artboard Copy.png", "/static/images/wink/Artboard.png"]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="winklp__third">
        <div class="rt-container">
          <p class="winklp__third-label rt-md-space-horizontal05"> Дарим интернет</p>
          <p class="winklp__third-text rt-md-space-horizontal05"> Пользуйтесь Wink, где вам удобно. <br
            class="md-d-none"> Смотрите кино, сериалы и тв <br class="md-d-none">
            непрерывно на любых
            устройствах</p>
          <div class="winklp__third__cards">
            <div class="winklp__third__cards-item winklp__third__cards-item--orange">
              <p class="winklp__third__cards-title">Мобильную связь</p>
              <p class="winklp__third__cards-text rt-td-space-top">Безлимитный интернет и звонки на номера
                Ростелекома.</p>
              <div class="winklp__third__cards-images">
                <img src="/static/images/wink/Group 22 (1).png" alt="" class="winklp__third__cards-images-item">
              </div>
            </div>
            <div class="winklp__third__cards-item winklp__third__cards-item--blue">
              <p class="winklp__third__cards-title">Домашний интернет</p>
              <p class="winklp__third__cards-text rt-td-space-top">Бесплатный, высокоскоротсной интернет для любых
                развлечений</p>
              <div class="winklp__third__cards-images">
                <img src="/static/images/wink/image 2.png" alt="" class="winklp__third__cards-images-item">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rt-container">
        <div class="winklp__fourth">
          <div class="winklp__fourth__block">
            <div class="winklp__fourth__block-content">
              <div>
                <p class="winklp__fourth__title rt-md-space-horizontal05"> Единый личный счет и <br class="md-d-none">кабинет
                  для удобного <br class="md-d-none">управления тарифом</p>
                <div class="winklp__fourth__list rt-md-space-horizontal05">
                  <div class="winklp__fourth__list-item">Графическое представление статистики</div>
                  <div class="winklp__fourth__list-item">Отчеты по начислениям, детализации звонков</div>
                </div>
              </div>
            </div>
          </div>
          <div class="winklp__fourth__block">
            <img class="winklp__fourth__block-image" src="/static/images/wink/Apple iPhone XS Space Grey.png" alt="">

          </div>
        </div>
      </div>

      <div class="winklp__five">
        <div class="rt-container">
          <div class="winklp__fourth__title rt-md-space-horizontal05"><span class="orange-text">Переходите легко</span>
            <br class="md-d-none">
            в Ростелеком со своим <br> мобильным номером
          </div>
          <div class="winklp__five__list rt-md-space-horizontal05">
            <div class="winklp__five__list-item winklp__five__list-item-big">Заполните заявление и <br
              class="md-d-none">передайте
              курьеру,
              <br class="md-d-none">который привезет вам <br class="md-d-none">временную
              sim-карту
              <rt-download-content fileSize="1.5 Мб">Скачать заявление</rt-download-content>
            </div>
            <div class="winklp__five__list-item winklp__five__list-item-sim rt-md-space-bottom2">SIM-карта будет активна
              уже с первого дня,
              а мы переведем ваш номер в
              любой удобный вам срок — от 8 дней до 6 месяцев.
            </div>
            <div class="winklp__five__list-item winklp__five__list-item-bell">Вы получите SMS-уведомление о статусе
              перехода.
            </div>
          </div>

        </div>
      </div>

      <div class="rt-container rt-space-bottom15">
        <div class="winklp__fourth">
          <div class="winklp__fourth__block">
            <div class="winklp__fourth__block-content">
              <div>
                <p class="winklp__fourth__title rt-md-space-horizontal05"> Бесплатная <br class="md-d-none"> мобильная
                  связь </p>
                <p class="winklp__third-text">Подключите мобильную программу <br class="md-d-none"> и пользуйтесь
                  мобильной связью <br class="md-d-none">бесплатно</p>
                <div class="d-flex md-d-block rt-md-space-bottom2">
                  <div class="flex-fill rt-space-top2-half">Скачайте инструцию и узнайте <br class="md-d-none"> как активировать программу.
                  </div>
                  <div class="flex-fill">
                    <div class="rt-space-left2 rt-md-space-left-none">
                      <rt-download-content fileSize="1.5 Мб">Скачать инструкцию</rt-download-content>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="winklp__fourth__block">
            <img class="winklp__fourth__block-image" src="/static/images/wink/Apple iPhone XS Space Grey (1).png"
                 alt="">

          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Описание -->

  <!-- Тарифы -->
</template>


<script>
  const componentsList = {};

  export default {
    name: "AppPromoVip",
    components: componentsList,
    mounted() {
      document.querySelector(".app-header").remove();
      var activeIndex = 0;
      document.querySelectorAll(".winklp__pictures__item").forEach(function(item) {
        setTimeout(function() {
          item.classList.add("winklp__pictures__item--show");
        }, 600);
        console.info("item.getAttribute(\"backgrounds\")", item.getAttribute("backgrounds"));
        var backgrounds = JSON.parse(item.getAttribute("backgrounds"));
        backgrounds.forEach(function(bg) {
          var node = document.createElement("div");
          var nodeContent = document.createElement("div");
          node.classList.add("winklp__pictures__item-image");
          node.appendChild(nodeContent);
          nodeContent.classList.add("winklp__pictures__item-image-content");
          nodeContent.style.backgroundImage = "url(\"" + bg + "\")";
          item.appendChild(node);
        });
        item.removeAttribute("backgrounds");

      });
      var imageTick = function(wrap, index, size, time) {
        if (time) {
          var active = wrap.querySelector(".winklp__pictures__item-image--active");
          var images = wrap.querySelectorAll(".winklp__pictures__item-image");
          var nextActive = wrap.querySelectorAll(".winklp__pictures__item-image").item(index);
          if (images.length > 1 || !active) {
            setTimeout(function() {
              if (active) {
                active.classList.remove("winklp__pictures__item-image--active");
              }
              nextActive.style.zIndex = "";
            }, 1000);
            nextActive.classList.add("winklp__pictures__item-image--active");
            nextActive.style.zIndex = 3;
            var t = time;
            setTimeout(function() {

              imageTick(wrap, (index + 1) % size, size, time);
            }, time);
          }

        }
      };
      var runPlayImage = function() {
        setTimeout(function() {
          document.querySelectorAll(".winklp__pictures__item").forEach(function(item, i) {

            var images = item.querySelectorAll(".winklp__pictures__item-image");
            var time = 3000 + i * 800;
            imageTick(item, 0, images.length, time);
          });
        }, 100);
      };
      runPlayImage();

      function addScript(src) {
        var s = document.createElement("script");
        s.setAttribute("src", src);
        document.body.appendChild(s);
      }

      addScript("https://code.createjs.com/createjs-2015.11.26.min.js");
      addScript("/static/images/wink/RTC_September_300x300.js");
      var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
      setTimeout(function() {


        function init() {
          canvas = document.getElementById("canvas");
          anim_container = document.getElementById("animation_container");
          dom_overlay_container = document.getElementById("dom_overlay_container");
          var comp = AdobeAn.getComposition("AF34C5BC54BC4B2B8DBF7553E9164E0E");
          var lib = comp.getLibrary();
          var loader = new createjs.LoadQueue(false);
          loader.addEventListener("fileload", function(evt) {
            console.info("fileload");
            handleFileLoad(evt, comp);
          });
          loader.addEventListener("complete", function(evt) {
            console.info("complete");
            handleComplete(evt, comp);
          });
          var lib = comp.getLibrary();
          loader.loadManifest(lib.properties.manifest);
        }

        function handleFileLoad(evt, comp) {
          var images = comp.getImages();
          if (evt && (evt.item.type == "image")) {
            images[evt.item.id] = evt.result;
          }
        }

        function handleComplete(evt, comp) {
          //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
          var lib = comp.getLibrary();
          var ss = comp.getSpriteSheet();
          var queue = evt.target;
          var ssMetadata = lib.ssMetadata;
          for (var i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({
              "images": [queue.getResult(ssMetadata[i].name)],
              "frames": ssMetadata[i].frames
            });
          }
          exportRoot = new lib.RTC_September_300x300();
          stage = new lib.Stage(canvas);
          window.stage = stage;
          //Registers the "tick" event listener.
          fnStartAnimation = function() {
            stage.addChild(exportRoot);
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
          };
          //Code to support hidpi screens and responsive scaling.
          AdobeAn.makeResponsive(false, "both", false, 1, [canvas, anim_container, dom_overlay_container]);
          AdobeAn.compositionLoaded(lib.properties.id);
          fnStartAnimation();
        }

        init();
      }, 1500);

    },
    created() {
    },
    methods: {}
  };
</script>
