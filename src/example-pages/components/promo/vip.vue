<template>
  <div>


  <!-- Каталог книг -->
  <div class="">
    <section class="color-block--dark-blue-low">
      <div class="rt-container">
        <div class="rt-col rt-space-vertical25">
          <div class="row flex-center-center">
            <div class="rt-col-12">
              <h2 class="rt-font-h2 rt-font-bold color-white rt-font-center">Что почитать?</h2>
              <div class="rt-font-center">
                <rt-ussd>*105*1*9ХХХХХХХХХ#</rt-ussd>
                <rt-ussd>*105*1*9ХХХХХХХХХ#</rt-ussd>
                <rt-ussd>*105*1*9ХХХХХХХХХ#</rt-ussd>
                <rt-ussd>*105*1*9ХХХХХХХХХ#</rt-ussd>
                <rt-ussd>*105*1*9ХХХХХХХХХ#</rt-ussd>
                <rt-ussd>*105*1*9ХХХХХХХХХ#</rt-ussd>
                <rt-tabs :round-tablet-view='true' class="rt-space-top2 color-white">
                  <template slot="navigation">
                    <rt-tabs-nav-item anchor="classic" :remove-base-tag="true" name="classic">По подписке</rt-tabs-nav-item>
                    <rt-tabs-nav-item anchor="bestseller" :remove-base-tag="true" name="bestseller">Новинки
                      и бестселлеры</rt-tabs-nav-item>
                  </template>
                  <template slot="content">
                    <rt-tabs-content-item name="classic">
                      <p class="rt-font-small-paragraph color-white rt-font-center rt-space-top2">Подписка
                        на книги популярных авторов, библиотека лучших произведений мировой и
                        отечественной литературы. Читайте и перечитывайте то, что не выходит из
                        моды.</p>
                      <rt-resize-content-height :query-selectors-names="['.rt-card__body', '.rt-font-paragraph']">
                        <rt-carousel slides-classes="rt-col-3 rt-col-td-2 rt-col-md-persent-5 rt-space-top rt-font-hypnens-off">
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/128048-rey-bredberi-vino-iz-oduvanchikov.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Вино из одуванчиков</p>
                                <p class="rt-font-control rt-space-top">Рэй Брэдбери</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/129770-harper-li-ubit-peresmeshnika.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Убить пересмешника</p>
                                <p class="rt-font-control rt-space-top">Харпер Ли</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/145410-deniel-kiz-cvety-dlya-eldzhernona-145410.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Цветы для Элджернона</p>
                                <p class="rt-font-control rt-space-top">Дэниел Киз</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/162774-u-nesbe-netopyr-162774.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Нетопырь</p>
                                <p class="rt-font-control rt-space-top">Ю Несбё</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/5815016-gregori-devid-roberts-shantaram-5815016.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Шантарам</p>
                                <p class="rt-font-control rt-space-top">Грегори Дэвид Робертс</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/8644060-donna-tartt-2-schegol-8644060.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Щегол</p>
                                <p class="rt-font-control rt-space-top">Донна Тартт</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/8885781-anna-todd-posle.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">После</p>
                                <p class="rt-font-control rt-space-top">Анна Тодд</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/9527389-guzel-yahina-zuleyha-otkryvaet-glaza-9527389.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Зулейха открывает глаза</p>
                                <p class="rt-font-control rt-space-top">Гузель Яхина</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/11282013-anna-todd-posle-padeniya.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">После падения</p>
                                <p class="rt-font-control rt-space-top">Анна Тодд</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/12193926-sergey-lukyanenko-kvazi.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">КВАЗИ</p>
                                <p class="rt-font-control rt-space-top">Сергей Лукьяненко</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/17197226-napoleon-hill-dumay-i-bogatey-zolotye-pravila-uspeha.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Думай и богатей: золотые правила успеха</p>
                                <p class="rt-font-control rt-space-top">Наполеон Хилл</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/18910175-evgeniy-vodolazkin-aviator.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Авиатор</p>
                                <p class="rt-font-control rt-space-top">Евгений Водолазкин</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/4578362-u-nesbe-snegovik-4578362.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Снеговик</p>
                                <p class="rt-font-control rt-space-top">Ю Несбё</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/24161461-aleksey-ivanov-tobol-malo-izbrannyh.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Тобол. Мало избранных</p>
                                <p class="rt-font-control rt-space-top">Алексей Иванов</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/25206960-tatyana-ustinova-prizrak-kanta.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Призрак Канта</p>
                                <p class="rt-font-control rt-space-top">Татьяна Устинова</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/25287207-donato-karrizi-poteryannye-devushki-rima.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Потерянные девушки Рима</p>
                                <p class="rt-font-control rt-space-top">Донато Карризи</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/25440816-mark-menson-tonkoe-iskusstvo-pofigizma-paradoksalnyy-sposob-zhit-schastlivo.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Тонкое искусство пофигизма</p>
                                <p class="rt-font-control rt-space-top">Марк Мэнсон</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/25554792-tatyana-polyakova-svoy-chuzhoy-rodnoy.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Свой, чужой, родной</p>
                                <p class="rt-font-control rt-space-top">Татьяна Полякова</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/25564903-viktor-pelevin-iphuck-10-25564903.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">iPhuck 10</p>
                                <p class="rt-font-control rt-space-top">Виктор Пелевин</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/25719119-tatyana-ustinova-zemnoe-prityazhenie.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Земное притяжение</p>
                                <p class="rt-font-control rt-space-top">Татьяна Устинова</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/25922438-mihail-zygar-imperiya-dolzhna-umeret.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Империя должна умереть</p>
                                <p class="rt-font-control rt-space-top">Михаил Зыгарь</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/27066425-donato-karrizi-devushka-v-tumane.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Девушка в тумане</p>
                                <p class="rt-font-control rt-space-top">Донато Карризи</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/27351732-robert-bryndza-12646976-devushka-vo-ldu.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Девушка во льду</p>
                                <p class="rt-font-control rt-space-top">Роберт Брындза</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/27624091-den-braun-proishozhdenie-27624091.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Происхождение</p>
                                <p class="rt-font-control rt-space-top">Дэн Браун</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/28719224-elena-mihalkova-net-kuznechika-v-trave.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Нет кузнечика в траве</p>
                                <p class="rt-font-control rt-space-top">Елена Михалкова</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/28987378-elena-zvezdnaya-dolina-drakonov-magicheskaya-praktika.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Долина драконов. Магическая Практика</p>
                                <p class="rt-font-control rt-space-top">Елена Звёздная</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/32481440-andrey-kurpatov-krasnaya-tabletka-posmotri-pravde-v-glaza.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Красная таблетка. Посмотри правде в глаза!</p>
                                <p class="rt-font-control rt-space-top">Андрей Курпатов</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/40502015-aleks-mihaelides-bezmolvnyy-pacient.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Безмолвный пациент</p>
                                <p class="rt-font-control rt-space-top">Алекс Михаэлидес</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/40502015-aleks-miвhaelides-bezmolvnyy-pacient.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Ещё больше книг с опций «Ростелеком Книги»</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                        </rt-carousel>
                      </rt-resize-content-height>
                    </rt-tabs-content-item>
                    <rt-tabs-content-item name="bestseller">
                      <p class="rt-font-small-paragraph color-white rt-font-center rt-space-top2">Хиты
                        продаж — читайте со скидкой 20% и будьте в курсе всего нового.</p>
                      <rt-resize-content-height :query-selectors-names="['.rt-card__body', '.rt-font-paragraph']">
                        <rt-carousel slides-classes="rt-col-3 rt-col-td-2 rt-col-md-persent-5 rt-space-top rt-font-hypnens-off">
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/119256-robert-kiyosaki-bogatyy-papa-bednyy-papa.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Богатый папа, бедный папа</p>
                                <p class="rt-font-control rt-space-top">Роберт Кийосаки</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/129098-1984.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">1984</p>
                                <p class="rt-font-control rt-space-top">Джордж Оруэлл</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/256032-karl-suell-klienty-na-vsu-zhizn.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Клиенты на всю жизнь</p>
                                <p class="rt-font-control rt-space-top">Карл Сьюэлл, Пол Браун</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/591105-keyt-ferracci-nikogda-ne-eshte-v-odinochku-i-drugie-pravila-netvorkinga.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">«Никогда не ешьте в одиночку» и другие правила
                                  нетворкинга</p>
                                <p class="rt-font-control rt-space-top">Кейт Феррацци, Тал Рэз</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/4368065-gabriel-garsiya-markes-sto-let-odinochestva.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Сто лет одиночества</p>
                                <p class="rt-font-control rt-space-top">Габриэль Гарсиа Маркес</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/6035554-dzhodzho-moyes-do-vstrechi-s-toboy.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">До встречи с тобой</p>
                                <p class="rt-font-control rt-space-top">Джоджо Мойес</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/6301646-dzho-dispenza-sila-podsoznaniya-ili-kak-izmenit-zhizn-za-4-nedeli.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Сила подсознания, или Как изменить жизнь за 4
                                  недели</p>
                                <p class="rt-font-control rt-space-top">Джо Диспенза</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/6564847-robin-sharma-2-monah-kotoryy-prodal-svoy-ferrari.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Монах, который продал свой «феррари»</p>
                                <p class="rt-font-control rt-space-top">Робин Шарма</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/7006572-dzhodzho-moyes-odin-plus-odin.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Один плюс один</p>
                                <p class="rt-font-control rt-space-top">Джоджо Мойес</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/8205378-kristin-loberg-devid-perlmutter-eda-i-mozg-chto-uglevody-delaut-so-zdorovem-myshleniem-i-pamyatu.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Еда и мозг</p>
                                <p class="rt-font-control rt-space-top">Дэвид Перлмуттер, Кристин Лоберг</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/9308621-markus-zuzak-knizhnyy-vor-2.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Книжный вор</p>
                                <p class="rt-font-control rt-space-top">Маркус Зусак</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/11282008-mari-kondo-magicheskaya-uborka-yaponskoe-iskusstvo-navedeniya-poryadka-doma-i-v-zhizni.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Магическая уборка.</p>
                                <p class="rt-font-control rt-space-top">Мари Кондо</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/11946933-dzheff-sazerlend-scrum-revolucionnyy-metod-upravleniya-proektami.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Scrum</p>
                                <p class="rt-font-control rt-space-top">Джефф Сазерленд</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/12178377-dzhuliya-enders-ocharovatelnyy-kishechnik-kak-samyy-moguschestvennyy-organ-upravlyaet-nami-12178377.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Очаровательный кишечник.</p>
                                <p class="rt-font-control rt-space-top">Джулия Эндерс</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/18471853-harv-t-eker-dumay-kak-millioner.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Думай как миллионер.</p>
                                <p class="rt-font-control rt-space-top">Т. Харв Экер</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/19063017-hel-elrod-magiya-utra.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Магия утра</p>
                                <p class="rt-font-control rt-space-top">Хэл Элрод</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/22061261-hanya-yanagihara-10120928-malenkaya-zhizn.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Маленькая жизнь</p>
                                <p class="rt-font-control rt-space-top">Ханья Янагихара</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/22101218-fil-nayt-prodavec-obuvi-istoriya-kompanii-nike-rasskazannaya-ee-osnovatelem.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Продавец обуви.</p>
                                <p class="rt-font-control rt-space-top">Фил Найт</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/22150614-uval-noy-harari-sapiens-kratkaya-istoriya-chelovechestva.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Sapiens. Краткая история человечества</p>
                                <p class="rt-font-control rt-space-top">Юваль Ной Харари</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/23134201-dzhim-kollinz-ot-horoshego-k-velikomu.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">От хорошего к великому</p>
                                <p class="rt-font-control rt-space-top">Джим Коллинз</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/23593618-dzhorzh-semuel-kleyson-samyy-bogatyy-chelovek-v-vavilone-23593618.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Самый богатый человек в Вавилоне</p>
                                <p class="rt-font-control rt-space-top">Джорж Сэмюэль Клейсон</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/32620157-boris-akunin-orehovyy-budda.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Ореховый Будда</p>
                                <p class="rt-font-control rt-space-top">Борис Акунин</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/33573368-guzel-yahina-deti-moi.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Дети мои</p>
                                <p class="rt-font-control rt-space-top">Гузель Яхина</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/37672212-viktor-pelevin-taynye-vidy-na-goru-fudzi.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Тайные виды на гору Фудзи</p>
                                <p class="rt-font-control rt-space-top">Виктор Пелевин</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/39436374-sergey-lukyanenko-kaynozoy.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Кайнозой</p>
                                <p class="rt-font-control rt-space-top">Сергей Лукьяненко</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                          <rt-carousel-slide>
                            <rt-card-image card-image="/sites/default/files/img/book_catalogue/40502015-aleks-miвhaelides-bezmolvnyy-pacient.png">
                              <template slot="body">
                                <p class="rt-font-paragraph rt-font-bold">Ещё больше книг с опций «Ростелеком Книги»</p>
                              </template>
                            </rt-card-image>
                          </rt-carousel-slide>
                        </rt-carousel>
                      </rt-resize-content-height>
                    </rt-tabs-content-item>
                  </template>
                </rt-tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Описание -->

  <!-- Тарифы -->
  </div>
</template>


<script>
  const componentsList = {};

  export default {
    name: "AppPromoVip",
    components: componentsList,
    mounted() {

      // document.querySelector(".vip-iphone-wrapper").classList.remove("vip-iphone--step-" + slideIndexBefore);
    },
    created() {
    },
    methods: {}
  };
</script>
