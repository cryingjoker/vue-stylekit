<style>
.resize-img {
  max-width: 100%;
}

.sticked {
  top: 65px !important;
}

.scroll-step--is-active .scroll-step-text {
  background-color: #65b8df;
  color: white;
}
</style>
<template>
  <!--<div>-->
  <!--&lt;!&ndash; Меню &ndash;&gt;-->
  <!--<div class="wc-inline">-->
  <!--<div class="color-block&#45;&#45;rule-color sticked sticked-block">-->
  <!--<rt-scroll-tabs-->
  <!--class="rt-scroll-tab-header flex-center-center"-->
  <!--active-tabs-classname="rt-scroll-tab-header__item&#45;&#45;active"-->
  <!--tabs-classname="rt-scroll-tab-header__item"-->
  <!--&gt;-->
  <!--<div class="rt-container color-white">-->
  <!--<div class="rt-col-12">-->
  <!--<div class="rt-scroll-tab-nav flex-center-center">-->
  <!--<a class="rt-scroll-tab-header__item" href="#advantage"-->
  <!--&gt;Преимущества</a-->
  <!--&gt;-->
  <!--<a class="rt-scroll-tab-header__item" href="#description"-->
  <!--&gt;Описание</a-->
  <!--&gt;-->
  <!--<a class="rt-scroll-tab-header__item" href="#chip">Фишки</a>-->
  <!--<a class="rt-scroll-tab-header__item" href="#how-it-works"-->
  <!--&gt;Как это работает</a-->
  <!--&gt;-->
  <!--<a class="rt-scroll-tab-header__item" href="#tariff">Тарифы</a>-->
  <!--<a class="rt-scroll-tab-header__item" href="#faq"-->
  <!--&gt;Вопросы и ответы</a-->
  <!--&gt;-->
  <!--<div class="flex-end-center">-->
  <!--<a href="#">-->
  <!--<rt-button-->
  <!--class="rt-button-small rt-button-purple rt-space-horizontal"-->
  <!--&gt;Войти в личный кабинет-->
  <!--</rt-button>-->
  <!--</a>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</rt-scroll-tabs>-->
  <!--</div>-->
  <!--</div>-->

  <!--&lt;!&ndash; Виджет &ndash;&gt;-->
  <!--<div class="wc-inline">-->
  <!--<div class="rt-space-top35"></div>-->
  <!--<rt-banner-->
  <!--:is-fullscreen-image="true"-->
  <!--class="rt-banner&#45;&#45;fill-height"-->
  <!--content-min-height="500px"-->
  <!--content-height="55vh"-->
  <!--&gt;-->
  <!--<rt-banner-item-->
  <!--background-image="/sites/default/files/img/doctor_main.png"-->
  <!--content-min-height="500px"-->
  <!--content-height="55vh"-->
  <!--&gt;-->
  <!--<div class="rt-md-space-right2">-->
  <!--<div class="row rt-space-top2">-->
  <!--<rt-color-line-text-->
  <!--fill-color="light-blue"-->
  <!--:is-white-color="true"-->
  <!--&gt;-->
  <!--<template slot="label"-->
  <!--&gt;Онлайн консультации врачей 24/7</template-->
  <!--&gt;-->
  <!--<template slot="content"-->
  <!--&gt;Срочная помощь опытных терапевтов и консультации профильных-->
  <!--докторов в любое удобное время-->
  <!--</template>-->
  <!--</rt-color-line-text>-->
  <!--</div>-->
  <!--<div class="rt-md-space-top color-white">-->
  <!--<rt-button class="rt-button-purple">Подписаться</rt-button>-->
  <!--</div>-->
  <!--</div>-->
  <!--</rt-banner-item>-->
  <!--</rt-banner>-->
  <!--</div>-->

  <!--&lt;!&ndash; Преимущества &ndash;&gt;-->
  <!--<section class="color-block&#45;&#45;white">-->
  <!--<div class="rt-container" id="advantage">-->
  <!--<div class="rt-col">-->
  <!--<div class="row rt-space-top5 rt-space-bottom25">-->
  <!--<div class="rt-col-3 rt-col-td-3">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_Udobno_color_80x80.svg"-->
  <!--/>-->
  <!--<h4 class="rt-font-h4 rt-space-top rt-font-bold">Удобно</h4>-->
  <!--<p class="rt-space-top color-main05">-->
  <!--Получайте персональные рекомендации любым подходящим способом —-->
  <!--в чате, по телефону или видеосвязи-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="rt-col-3 rt-col-td-3">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_Bistro_color_80x80.svg"-->
  <!--/>-->
  <!--<h4 class="rt-font-h4 rt-space-top rt-font-bold">Быстро</h4>-->
  <!--<p class="rt-space-top color-main05">-->
  <!--Дежурный врач свяжется ответит в течение 3-х минут-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="rt-col-3 rt-col-td-3 rt-td-space-top">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_24x7_color_80x80.svg"-->
  <!--/>-->
  <!--<h4 class="rt-font-h4 rt-space-top rt-font-bold">-->
  <!--Круглосуточно-->
  <!--</h4>-->
  <!--<p class="rt-space-top color-main05">-->
  <!--Терапевты и узкие специалисты доступны 24 часа в сутки, 7 дней в-->
  <!--неделю-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="rt-col-3 rt-col-td-3 rt-td-space-top">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_Prof-Vrach_color_80x80.svg"-->
  <!--/>-->
  <!--<h4 class="rt-font-h4 rt-space-top rt-font-bold">-->
  <!--Профессиональные врачи-->
  <!--</h4>-->
  <!--<p class="rt-space-top color-main05">-->
  <!--Мы работаем только с квалифицированными специалистами-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</section>-->

  <!--&lt;!&ndash; Описание &ndash;&gt;-->
  <!--<div class="rt-container" id="description">-->
  <!--<div class="row rt-space-vertical5 flex-center-center">-->
  <!--<div class="rt-col-6 rt-col-td-5 rt-col-md-3 rt-font-center">-->
  <!--<h2 class="rt-font-h2 rt-font-bold">Ростелеком Доктор</h2>-->
  <!--<p class="rt-space-top color-main07">-->
  <!--Сервис поможет получить медицинскую консультацию из любой точки-->
  <!--страны и мира. Квалифицированные врачи Москвы и Санкт-Петербурга-->
  <!--всегда на связи — посоветоваться с ними можно в любое время суток.-->
  <!--Чтобы получить срочную консультацию терапевта или педиатра, не-->
  <!--требуется предварительная запись — доктор ответит в течение 3 минут.-->
  <!--Записаться к врачу узкого профиля можно на любое удобное время-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->

  <!--&lt;!&ndash; Фишки &ndash;&gt;-->
  <!--<section class="color-block&#45;&#45;white">-->
  <!--<div class="rt-container" id="chip">-->
  <!--<div class="rt-col">-->
  <!--<div class="row rt-space-vertical25">-->
  <!--<div class="rt-col-12">-->
  <!--<h2 class="rt-font-h2 rt-font-bold rt-space-bottom2">-->
  <!--Заголовок функционала-->
  <!--</h2>-->
  <!--</div>-->
  <!--<div class="rt-col-4 rt-col-md-3">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">-->
  <!--Срочная помощь педиатора или терапевита-->
  <!--</h4>-->
  <!--<p class="rt-space-top color-main05">-->
  <!--Дежурный врач свяжется ответит в течение 3-х минут.-->
  <!--Квалифицированные врачи Москвы и Санкт-Петербурга всегда на-->
  <!--связи — посоветоваться с ними можно в любое время суток.-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="rt-col-4 rt-col-md-3 rt-md-space-top">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">-->
  <!--Срочная помощь педиатора или терапевита-->
  <!--</h4>-->
  <!--<p class="rt-space-top color-main05">-->
  <!--Дежурный врач свяжется ответит в течение 3-х минут.-->
  <!--Квалифицированные врачи Москвы и Санкт-Петербурга всегда на-->
  <!--связи — посоветоваться с ними можно в любое время суток.-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="rt-col-4 rt-col-md-3 rt-md-space-top">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">-->
  <!--Срочная помощь педиатора или терапевита-->
  <!--</h4>-->
  <!--<p class="rt-space-top color-main05">-->
  <!--Дежурный врач свяжется ответит в течение 3-х минут.-->
  <!--Квалифицированные врачи Москвы и Санкт-Петербурга всегда на-->
  <!--связи — посоветоваться с ними можно в любое время суток.-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</section>-->

  <!--&lt;!&ndash; Мотивирующая картинка &ndash;&gt;-->
  <!--<section class="color-block&#45;&#45;white">-->
  <!--<div class="rt-container">-->
  <!--<div class="row rt-space-vertical25 flex-center-center">-->
  <!--<div class="rt-col-12 rt-font-center">-->
  <!--<img-->
  <!--class="resize-img"-->
  <!--src="/sites/default/files/img/doctor_devices.png"-->
  <!--/>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</section>-->

  <!--&lt;!&ndash; Как это работает &ndash;&gt;-->
  <!--<div class="relative" style="min-height: 300vh">-->
  <!--<div class="rt-sticky">-->
  <!--<div class="wc-inline rt-sticky">-->
  <!--<div class="rt-container" id="how-it-works">-->
  <!--<div class="rt-col">-->
  <!--<div class="row rt-space-top25">-->
  <!--<div class="rt-col-6 rt-col-td-6">-->
  <!--<h2 class="rt-font-h2 rt-font-bold rt-space-bottom">-->
  <!--Как это работает?-->
  <!--</h2>-->
  <!--<p class="color-main07">-->
  <!--Консультации проводятся любым удобным для Вас способом-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="row rt-space-top2">-->
  <!--<div class="rt-col-8 rt-col-md-3">-->
  <!--<rt-tabs>-->
  <!--<template slot="navigation">-->
  <!--<rt-tabs-nav-item-->
  <!--:remove-base-tag="true"-->
  <!--name="fast_help"-->
  <!--&gt;<b>Срочная помощь дежурного врача</b>-->
  <!--</rt-tabs-nav-item>-->
  <!--<rt-tabs-nav-item-->
  <!--:remove-base-tag="true"-->
  <!--name="consultation_specialist"-->
  <!--&gt;<b-->
  <!--&gt;Консультация профильного специалиста</b-->
  <!--&gt;</rt-tabs-nav-item-->
  <!--&gt;-->
  <!--</template>-->
  <!--<template slot="content">-->
  <!--<rt-tabs-content-item name="fast_help">-->
  <!--<div class="row rt-space-top2">-->
  <!--<div class="rt-col-4 scroll-step-1">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">1</h4>-->
  <!--<div class="rt-space-top">-->
  <!--<p-->
  <!--class="scroll-step-text color-main07 d-inline"-->
  <!--&gt;-->
  <!--Выберите тариф и зарегистрируйтесь-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="rt-col-4 scroll-step-2">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">2</h4>-->
  <!--<div class="rt-space-top">-->
  <!--<p-->
  <!--class="scroll-step-text color-main07 d-inline"-->
  <!--&gt;-->
  <!--Купите тарифный план-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="rt-col-4 scroll-step-3">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">3</h4>-->
  <!--<div class="rt-space-top">-->
  <!--<p-->
  <!--class="scroll-step-text color-main07 d-inline"-->
  <!--&gt;-->
  <!--Нажмите кнопку «получить консультацию» — врач-->
  <!--свяжется с Вами в течение трех минут-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</rt-tabs-content-item>-->
  <!--<rt-tabs-content-item name="consultation_specialist">-->
  <!--<div class="row rt-space-top2">-->
  <!--<div class="rt-col-4 scroll-step-1">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">шаг 1</h4>-->
  <!--<div class="rt-space-top">-->
  <!--<p-->
  <!--class="color-main07 scroll-step-text d-inline"-->
  <!--&gt;-->
  <!--Выберите тариф и зарегистрируйтесь-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="rt-col-4 scroll-step-2">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">шаг 2</h4>-->
  <!--<div class="rt-space-top">-->
  <!--<p-->
  <!--class="color-main07 scroll-step-text d-inline"-->
  <!--&gt;-->
  <!--Купите тарифный план-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="rt-col-4 scroll-step-3">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">шаг 3</h4>-->
  <!--<div class="rt-space-top">-->
  <!--<p-->
  <!--class="color-main07 scroll-step-text d-inline"-->
  <!--&gt;-->
  <!--Нажмите кнопку «получить консультацию» — врач-->
  <!--свяжется с Вами в течение трех минут-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</rt-tabs-content-item>-->
  <!--</template>-->
  <!--</rt-tabs>-->
  <!--</div>-->
  <!--<div-->
  <!--class="rt-col-4 flex-end-bottom flex-md-center rt-col-md-3 rt-md-space-top2"-->
  <!--&gt;-->
  <!--<div class="rt-space-horizontal flex-md-center">-->
  <!--<div class="phone" style="margin-top: -120px">-->
  <!--<div class="phone__container"></div>-->
  <!--<div class="phone__black-window">-->
  <!--<img-->
  <!--src="/static/images/doctor/doctor-1-1.jpg"-->
  <!--class="phone__image phone__image-hide phone__image-0-1"-->
  <!--/>-->
  <!--<img-->
  <!--src="/static/images/doctor/doctor-1-2.jpg"-->
  <!--class="phone__image phone__image-hide phone__image-0-2"-->
  <!--/>-->
  <!--<img-->
  <!--src="/static/images/doctor/doctor-1-3.jpg"-->
  <!--class="phone__image phone__image-hide phone__image-0-3"-->
  <!--/>-->

  <!--<img-->
  <!--src="http://media.148apps.com/screenshots/625257520/us-iphone-3-hearthstone.jpeg"-->
  <!--class="phone__image phone__image-hide phone__image-1-1"-->
  <!--/>-->
  <!--<img-->
  <!--src="https://cdn2.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/3/95//screenshot_2015-04-15-09-23-24.png"-->
  <!--class="phone__image phone__image-hide phone__image-1-2"-->
  <!--/>-->
  <!--<img-->
  <!--src="http://media.148apps.com/screenshots/625257520/us-iphone-2-hearthstone.jpeg"-->
  <!--class="phone__image phone__image-hide phone__image-1-3"-->
  <!--/>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->

  <!--&lt;!&ndash; Тарифы &ndash;&gt;-->
  <!--<div class="rt-sticky rt-sticky&#45;&#45;tariff">-->
  <!--<section class="color-block&#45;&#45;light-blue rt-layer-level-2 relative">-->
  <!--<div class="wc-inline">-->
  <!--<div class="rt-container" id="tariff">-->
  <!--<div class="rt-col">-->
  <!--<div class="row rt-space-top5">-->
  <!--<div class="rt-col-6">-->
  <!--<h2 class="rt-font-h2 color-white rt-font-bold">-->
  <!--Тарифы-->
  <!--</h2>-->
  <!--</div>-->
  <!--</div>-->
  <!--<rt-resize-content-height-->
  <!--:query-selectors-names="[-->
  <!--'.rt-font-h4',-->
  <!--'.rt-card__body',-->
  <!--'.rt-card__border-content',-->
  <!--'.fix'-->
  <!--]"-->
  <!--class="row rt-space-vertical2 row&#45;&#45;mobile-scroll"-->
  <!--&gt;-->
  <!--<div-->
  <!--class="rt-col-4 rt-col-md-3 d-stretch d-md-flex-column"-->
  <!--&gt;-->
  <!--<rt-card>-->
  <!--<template slot="content">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">-->
  <!--Домашний доктор-->
  <!--</h4>-->
  <!--<rt-tag-list class="row">-->
  <!--<rt-tag value="1" :is-active="true"-->
  <!--&gt;1 пациент</rt-tag-->
  <!--&gt;-->
  <!--</rt-tag-list>-->
  <!--<ul style="padding-left: 0;" class="rt-space-bottom">-->
  <!--<li class="d-flex rt-space-top">-->
  <!--<div class="td-d-none ">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_unlim_56x56.svg"-->
  <!--height="55px"-->
  <!--/>-->
  <!--</div>-->

  <!--<div class="rt-space-left05 flex-center-center">-->
  <!--<p>-->
  <!--Неограниченное обращение к дежурному врачу-->
  <!--/дежурному педиатру-->
  <!--</p>-->
  <!--</div>-->
  <!--</li>-->
  <!--<li class="d-flex rt-space-top">-->
  <!--<div class="td-d-none ">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_star_56x56.svg"-->
  <!--height="55px"-->
  <!--/>-->
  <!--</div>-->

  <!--<div class="rt-space-left05 flex-center-center">-->
  <!--<p>3 консультации профильного специалиста</p>-->
  <!--</div>-->
  <!--</li>-->
  <!--</ul>-->
  <!--</template>-->
  <!--<template slot="content-without-wrapper">-->
  <!--<div class="rt-card__border-content">-->
  <!--<div class="row fix">-->
  <!--<div class="rt-col-6 rt-col-td-6 rt-col-md-1">-->
  <!--<rt-radio-button name="two"-->
  <!--&gt;12 месяцев</rt-radio-button-->
  <!--&gt;-->
  <!--<p class="rt-space-left15 color-main05">-->
  <!--<s>8&nbsp;000</s>-->
  <!--</p>-->
  <!--<rt-price-->
  <!--:value="4000"-->
  <!--time-interval="мес."-->
  <!--class="rt-space-top"-->
  <!--&gt;</rt-price>-->
  <!--</div>-->
  <!--<div-->
  <!--class="rt-col-6 rt-col-td-6 rt-col-md-1 rt-td-space-top rt-md-space-top-none"-->
  <!--style="border-left: 1px solid rgba(16,24,40,.1);"-->
  <!--&gt;-->
  <!--<rt-radio-button name="two"-->
  <!--&gt;3 месяца</rt-radio-button-->
  <!--&gt;-->
  <!--<br /><br />-->
  <!--<rt-price-->
  <!--:value="2000"-->
  <!--time-interval="мес."-->
  <!--class="rt-space-top"-->
  <!--&gt;</rt-price>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="rt-space-top">-->
  <!--<rt-button-->
  <!--class="rt-button-purple rt-button&#45;&#45;is-block"-->
  <!--&gt;Попробовать</rt-button-->
  <!--&gt;-->
  <!--</div>-->
  <!--</div>-->
  <!--</template>-->
  <!--</rt-card>-->
  <!--</div>-->
  <!--<div-->
  <!--class="rt-col-4 rt-col-md-3 rt-md-space-top d-stretch d-md-flex-column"-->
  <!--&gt;-->
  <!--<rt-card>-->
  <!--<template slot="content">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">-->
  <!--Домашний доктор-->
  <!--</h4>-->
  <!--<rt-tag-list class="row">-->
  <!--<rt-tag value="1" :is-active="true"-->
  <!--&gt;3 пациента</rt-tag-->
  <!--&gt;-->
  <!--</rt-tag-list>-->
  <!--<ul style="padding-left: 0;" class="rt-space-bottom">-->
  <!--<li class="d-flex rt-space-top">-->
  <!--<div class="td-d-none ">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_unlim_56x56.svg"-->
  <!--height="55px"-->
  <!--/>-->
  <!--</div>-->

  <!--<div class="rt-space-left05 flex-center-center">-->
  <!--<p>-->
  <!--Неограниченное обращение к дежурному врачу-->
  <!--/дежурному педиатру-->
  <!--</p>-->
  <!--</div>-->
  <!--</li>-->
  <!--<li class="d-flex rt-space-top">-->
  <!--<div class="td-d-none ">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_star_56x56.svg"-->
  <!--height="55px"-->
  <!--/>-->
  <!--</div>-->

  <!--<div class="rt-space-left05 flex-center-center">-->
  <!--<p>3 консультации профильного специалиста</p>-->
  <!--</div>-->
  <!--</li>-->
  <!--</ul>-->
  <!--</template>-->
  <!--<template slot="content-without-wrapper">-->
  <!--<div class="rt-card__border-content">-->
  <!--<div class="row fix">-->
  <!--<div class="rt-col-6 rt-col-td-6 rt-col-md-1">-->
  <!--<rt-radio-button name="three"-->
  <!--&gt;12 месяцев</rt-radio-button-->
  <!--&gt;-->
  <!--<p class="rt-space-left15 color-main05">-->
  <!--<s>10&nbsp;000</s>-->
  <!--</p>-->
  <!--<rt-price-->
  <!--:value="4500"-->
  <!--time-interval="мес."-->
  <!--class="rt-space-top"-->
  <!--&gt;</rt-price>-->
  <!--</div>-->
  <!--<div-->
  <!--class="rt-col-6 rt-col-td-6 rt-col-md-1 rt-td-space-top rt-md-space-top-none"-->
  <!--style="border-left: 1px solid rgba(16,24,40,.1);"-->
  <!--&gt;-->
  <!--<rt-radio-button name="three"-->
  <!--&gt;3 месяца</rt-radio-button-->
  <!--&gt;-->
  <!--<br /><br />-->
  <!--<rt-price-->
  <!--:value="2500"-->
  <!--time-interval="мес."-->
  <!--class="rt-space-top"-->
  <!--&gt;</rt-price>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="rt-space-top">-->
  <!--<rt-button-->
  <!--class="rt-button-purple rt-button&#45;&#45;is-block"-->
  <!--&gt;Попробовать</rt-button-->
  <!--&gt;-->
  <!--</div>-->
  <!--</div>-->
  <!--</template>-->
  <!--</rt-card>-->
  <!--</div>-->
  <!--<div-->
  <!--class="rt-col-4 rt-col-md-3 rt-md-space-top d-stretch d-md-flex-column"-->
  <!--&gt;-->
  <!--<rt-card>-->
  <!--<template slot="content">-->
  <!--<h4 class="rt-font-h4 rt-font-bold">-->
  <!--Личный эксперт-->
  <!--</h4>-->
  <!--<rt-tag-list class="row">-->
  <!--<rt-tag value="1" :is-active="true"-->
  <!--&gt;1 пациент</rt-tag-->
  <!--&gt;-->
  <!--</rt-tag-list>-->
  <!--<ul style="padding-left: 0;" class="rt-space-bottom">-->
  <!--<li class="d-flex rt-space-top">-->
  <!--<div class="td-d-none ">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_unlim_56x56.svg"-->
  <!--height="55px"-->
  <!--/>-->
  <!--</div>-->

  <!--<div class="rt-space-left05 flex-center-center">-->
  <!--<p>-->
  <!--Неограниченное обращение к дежурному врачу-->
  <!--/дежурному педиатру-->
  <!--</p>-->
  <!--</div>-->
  <!--</li>-->
  <!--<li class="d-flex rt-space-top">-->
  <!--<div class="td-d-none ">-->
  <!--<img-->
  <!--src="/sites/default/files/img/icon/DSGN-1280_icon_star_56x56.svg"-->
  <!--height="55px"-->
  <!--/>-->
  <!--</div>-->

  <!--<div class="rt-space-left05 flex-center-center">-->
  <!--<p>3 консультации профильного специалиста</p>-->
  <!--</div>-->
  <!--</li>-->
  <!--</ul>-->
  <!--</template>-->
  <!--<template slot="content-without-wrapper">-->
  <!--<div class="rt-card__border-content">-->
  <!--<div class="row fix">-->
  <!--<div class="rt-col-6 rt-col-td-6">-->
  <!--<rt-radio-button name="one"-->
  <!--&gt;12 месяцев</rt-radio-button-->
  <!--&gt;-->
  <!--<p class="rt-space-left15 color-main05">-->
  <!--<s>4&nbsp;500</s>-->
  <!--</p>-->
  <!--<rt-price-->
  <!--:value="1500"-->
  <!--time-interval="мес."-->
  <!--class="rt-space-top"-->
  <!--&gt;</rt-price>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="rt-space-top">-->
  <!--<rt-button-->
  <!--class="rt-button-purple rt-button&#45;&#45;is-block"-->
  <!--&gt;Попробовать</rt-button-->
  <!--&gt;-->
  <!--</div>-->
  <!--</div>-->
  <!--</template>-->
  <!--</rt-card>-->
  <!--</div>-->
  <!--</rt-resize-content-height>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</section>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->

  <!--&lt;!&ndash; Вопросы и ответы &ndash;&gt;-->
  <!--<div class="wc-inline">-->
  <!--<section-->
  <!--class="color-block&#45;&#45;white rt-space-vertical5 rt-layer-level-2 relative"-->
  <!--&gt;-->
  <!--<div class="rt-container" id="faq">-->
  <!--<div class="rt-col">-->
  <!--<h2 class="rt-font-h2 rt-font-bold">Часто задаваемые вопросы</h2>-->
  <!--</div>-->
  <!--<div class="row rt-space-top2">-->
  <!--<div class="rt-col rt-space-horizontal25">-->
  <!--<spoiler class="js-collapser triangle-flat group">-->
  <!--<div class="group__item-title">-->
  <!--<p class="rt-font-bold">-->
  <!--Могу ли я воспользоваться услугами РТК Доктор не покупая-->
  <!--подпику?-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="group__item-body">-->
  <!--<p>-->
  <!--За начисления по услугам связи: в течение 15 дней после-->
  <!--окончания месяца, в котором были оказаны услуги.-->
  <!--</p>-->
  <!--<p>-->
  <!--За единовременный платеж более 1000 руб.: в течение 15 дней-->
  <!--после окончания месяца, в котором был совершен платеж.-->
  <!--</p>-->
  <!--<p>За регистрацию в Программе «Бонус»: в течение суток.</p>-->
  <!--<p>-->
  <!--За заполнение дополнительных полей в ЕЛК: после заполнения-->
  <!--полей.-->
  <!--</p>-->
  <!--<p>За день рождения: в день рождения.</p>-->
  <!--<p>-->
  <!--За участие в опросах, размещенных в ЕЛК: после заполнения-->
  <!--анкеты.-->
  <!--</p>-->
  <!--<p>-->
  <!--За выбор доставки счета на e-mail в ЕЛК: после подключении-->
  <!--доставки на e-mail.-->
  <!--</p>-->
  <!--</div>-->
  <!--</spoiler>-->
  <!--<spoiler class="js-collapser triangle-flat group">-->
  <!--<div class="group__item-title">-->
  <!--<p class="rt-font-bold">-->
  <!--Что, если я уже потратила консультации из подписки, но хочу-->
  <!--вызвать врача?-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="group__item-body">-->
  <!--<p>Фильмы и сериалы — с момента заказа с приставки.</p>-->
  <!--<p>-->
  <!--Скидка на абонентскую плату предоставляется с 1 числа-->
  <!--месяца, следующего за месяцем подачи заявки на скидку.-->
  <!--</p>-->
  <!--<p>-->
  <!--Минуты на звонки — с 1 числа месяца следующего за месяцем-->
  <!--подачи заявки на бонусный пакет минут.-->
  <!--</p>-->
  <!--<p>-->
  <!--Подписка на антивирус действует 2 календарных месяца с-->
  <!--момента оплаты опции бонусами. Например, вы заказали-->
  <!--антивирус 7 октября и получили его в тот же день.-->
  <!--Активировали (скачали и установили) 15 октября. В этом-->
  <!--случае бесплатная подписка на антивирус будет длиться до 7-->
  <!--декабря включительно.-->
  <!--</p>-->
  <!--<p>-->
  <!--В случае, если до окончания действия вознаграждения,-->
  <!--оплаченного бонусами, со стороны абонента не будет заявки на-->
  <!--отключение опции «Дополнительные пакеты телеканалов,-->
  <!--«Подписки», «Управление просмотром», «Антивирусы», после-->
  <!--окончания действия вознаграждения произойдет автоматическая-->
  <!--пролонгация опции на платной основе согласно действующим-->
  <!--тарифам.-->
  <!--</p>-->
  <!--</div>-->
  <!--</spoiler>-->
  <!--<spoiler class="js-collapser triangle-flat group">-->
  <!--<div class="group__item-title">-->
  <!--<p class="rt-font-bold">Дежурный врач — это кто?</p>-->
  <!--</div>-->
  <!--<div class="group__item-body">-->
  <!--<p>-->
  <!--Фильмы и сериалы из видеопроката — период просмотра-->
  <!--заказанного фильма составляет 48 часов.-->
  <!--</p>-->
  <!--<p>-->
  <!--Скидка 25% на абонентскую плату за интернет действует один-->
  <!--календарный месяц.-->
  <!--</p>-->
  <!--<p>-->
  <!--Антивирусы. Бесплатный период длится два месяца с момента-->
  <!--заказа подарка. Например, вы заказали антивирус 7 октября-->
  <!--2015 года и получили его в тот же день. Активировали-->
  <!--(скачали и установили) 15 октября. В этом случае бесплатная-->
  <!--подписка на антивирус будет длиться до 7 декабря 2015 г.-->
  <!--</p>-->
  <!--<p>-->
  <!--Минуты разговоров по внутризоновой, междугородней и-->
  <!--международной связи действуют один календарный месяц с-->
  <!--момента получения. Пакет минут на один тип связи-->
  <!--(местной/внутризоновой/междугородной) может быть куплен за-->
  <!--бонусы один раз в календарный месяц.-->
  <!--</p>-->
  <!--</div>-->
  <!--</spoiler>-->
  <!--<spoiler class="js-collapser triangle-flat group">-->
  <!--<div class="group__item-title">-->
  <!--<p class="rt-font-bold">-->
  <!--В семейной подписке обязательно должен быть ребенок?-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="group__item-body">-->
  <!--<p>-->
  <!--Накопленные или полученные бонусы действительны в течение 24-->
  <!--месяцев с момента их начисления. По истечении этого срока-->
  <!--бонусы аннулируются и не подлежат восстановлению, дальнейшее-->
  <!--их использование невозможно.-->
  <!--</p>-->
  <!--<p>-->
  <!--Неиспользованные в рамках бонусного пакета минуты не-->
  <!--переносятся на следующий календарный месяц.-->
  <!--</p>-->
  <!--</div>-->
  <!--</spoiler>-->
  <!--<spoiler class="js-collapser triangle-flat group">-->
  <!--<div class="group__item-title">-->
  <!--<p class="rt-font-bold">-->
  <!--К каким профильным специалистам можно обратиться на сервисе?-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="group__item-body">-->
  <!--<p>-->
  <!--В случае финансовой или добровольной блокировки в период-->
  <!--действия бонусного пакета минут срок действия пакета минут-->
  <!--не продлевается. В случае смены тарифа по телефонии,-->
  <!--заказанные бонусные минуты не переносятся.-->
  <!--</p>-->
  <!--</div>-->
  <!--</spoiler>-->
  <!--<spoiler class="js-collapser triangle-flat group">-->
  <!--<div class="group__item-title">-->
  <!--<p class="rt-font-bold">-->
  <!--Все ли могут воспользоваться сервисом?-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="group__item-body">-->
  <!--<p>-->
  <!--Да, но дети до 17 лет могут консультироваться только вместе-->
  <!--с родителем или другим законным представителем-->
  <!--</p>-->
  <!--</div>-->
  <!--</spoiler>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</section>-->
  <!--</div>-->
  <!--</div>-->
</template>



<script>
const componentsList = {};

export default {
  name: "AppRadioButton",
  components: componentsList,
  mounted() {
    var activeTab = 0;
    const setActiveItem = function() {
      const parentPositon = document
        .querySelector("#how-it-works")
        .parentNode.parentNode.parentNode.getBoundingClientRect();
      const tariffsContent = document
        .querySelector("#tariff")
        .parentNode.parentNode.getBoundingClientRect();
      const stepSize = parseInt(
        (parentPositon.height - tariffsContent.height) / 3
      );
      if (
        parentPositon.top < window.innerHeight * 0.33 &&
        Math.abs(parentPositon.top - window.innerHeight * 0.66) <
          parentPositon.height
      ) {
        let activeIndex = parseInt(
          Math.abs(parentPositon.top - window.innerHeight) / stepSize
        );
        activeIndex = activeIndex > 3 ? 3 : activeIndex;
        document
          .querySelectorAll(".scroll-step--is-active")
          .forEach(function(item) {
            item.classList.remove("scroll-step--is-active");
          });
        document
          .querySelectorAll(".scroll-step-" + activeIndex)
          .forEach(function(item) {
            item.classList.add("scroll-step--is-active");
          });
        if (document.querySelector(".phone__image--is-active")) {
          document
            .querySelector(".phone__image--is-active")
            .classList.remove("phone__image--is-active");
        }

        document
          .querySelector(".phone__image-" + activeTab + "-" + activeIndex)
          .classList.add("phone__image--is-active");
      }
      let imageScrollPosition = 0;
      if (parentPositon.top < (stepSize / 4) * 3) {
        imageScrollPosition =
          "-" +
          ((((Math.abs(parentPositon.top - window.innerHeight) % stepSize) /
            stepSize) *
            50) %
            50) +
          "%";
      }
      document.querySelector(
        ".phone__image--is-active"
      ).style.top = imageScrollPosition;
    };
    window.addEventListener("scroll", function(e) {
      setActiveItem();
    });
    var getElementIndex = function(element) {
      if (!element) {
        return -1;
      }
      var currentElement = element,
        index = 0;

      while (currentElement.previousElementSibling) {
        index++;
        currentElement = currentElement.previousElementSibling;
      }
      return index;
    };

    setTimeout(function() {
      setActiveItem();
      document
        .querySelectorAll("#how-it-works .rt-tabs-navigation__item-name")
        .forEach(function(item) {
          item.addEventListener("click", function(event) {
            setTimeout(function() {
              document
                .querySelectorAll("#how-it-works .rt-tabs-navigation__item")
                .forEach(function(item, index) {
                  if (
                    item.classList.contains(
                      "rt-tabs-navigation__item--is-active"
                    )
                  ) {
                    activeTab = index;
                    setActiveItem();
                    return false;
                  }
                });
            }, 300);
          });
        });
    }, 100);
  },
  created() {},
  methods: {}
};
</script>
