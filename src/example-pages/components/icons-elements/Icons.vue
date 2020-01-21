<template>
  <div>
    <div class="rt-container">
      <div class="grid-center" />
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Icons</h1></div>
        </div>
      </div>
    </div>
    <div class="rt-container">
      <div class="rt-space-horizontal05">
        <div class="row rt-space-bottom5">
          <div class="rt-col-3">
            <rt-input
              placeholder="Найти иконку"
              @input="doSearch"
            />
          </div>
        </div>
      </div>



      <div class="rt-space-horizontal05">
        <rt-annotation
          label="Пакет 2020"
          :open="true"
          class="rt-space-top rt-space-bottom3"
        >
          <template slot="content">
            <div v-if="filteredlistIcons.new.length > 0" class="row">
              <div
                v-for="(icon, key) in filteredlistIcons.new"
                :key="key"
                class="rt-col-1"
                :data-icon="icon"
              >
                <div
                  class="preview btn"
                  @click="detailIconShow(icon)"
                  :class="{ selected: icon === selectedIcon }"
                >
                  <div class="preview__name">{{icon}}</div>
                  <div class="preview__el">
                    <rt-icon :type="previewType(icon)" />
                  </div>
                </div>
              </div>
              <div
                ref="detailEl"
                class="detail"
                :style="detailStyle"
              >
                <div
                  v-if="selectedIcon"
                  class="detail__wrap row"
                >
                  <div class="detail__name rt-col-12">Выбрана иконка <strong>{{ selectedIcon }}</strong></div>
                  <div class="detail__bg">
                    <input type="color" v-model="detailBg" />
                  </div>
                  <div class="detail__el rt-col-auto">
                    <!-- Big preview -->
                    <rt-icon :type="detailCopyType" size="120" />
                  </div>
                  <div class="detail__code rt-col-8">
                    <code class="monokai">
                      &lt;<font class="c_tag">rt-icon</font> <font class="c_attr">type</font>=<font class="c_val0">"<font class="c_val1">{{detailCopyType}}</font>"</font> &frasl;&gt;
                    </code>
                    <textarea
                      ref="detailCopyText"
                      v-model="detailCopyType"
                    ></textarea>
                    <rt-button
                      @click="copyText($refs.detailCopyText)"
                      class="rt-button-purple rt-button-small"
                    >Копировать</rt-button>
                  </div>
                  <div class="detail__types rt-col-12 align-end">
                    <div
                      class="detail-type btn"
                      v-for="(iconType, key) in detailIcon(selectedIcon).list"
                      @click="() => { detailCopyType = iconType.type }"
                      :key="key"
                    >
                      <div class="detail-type__el">
                        <rt-icon :type="iconType.type" :size="iconType.style.substr(2,2)" />
                      </div>
                      <div class="detail-type__name">{{iconType.style.substr(1)}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <h3>Ничего не нашлось по запросу «{{searched}}»</h3>
            </div>
          </template>
        </rt-annotation>
      </div>



      <div class="rt-space-horizontal05">

        <rt-annotation
          label="Пакет старых иконок"
          :open="true"
          class="rt-space-top rt-space-bottom3"
        >
          <template slot="content">
            <div v-if="filteredlistIcons.old.length > 0" class="row">
              <div
                v-for="(icon, key) in filteredlistIcons.old"
                :key="key"
                class="rt-col-1"
                :data-icon="icon"
              >
                <div
                  @click="() => {
                    oldCopyType = oldIcons[icon]
                    $nextTick(() => copyText($refs.oldCopyText))
                  }"
                  class="preview btn"
                >
                  <div class="preview__name">{{oldIcons[icon]}}</div>
                  <div class="preview__el">
                    <rt-icon :type="oldIcons[icon]" />
                  </div>
                </div>
              </div>
              <textarea
                ref="oldCopyText"
                class="fake-txt"
                v-model="oldCopyType"
              ></textarea>
            </div>
            <div v-else>
              <h3>Ничего не нашлось по запросу «{{searched}}»</h3>
            </div>
          </template>
        </rt-annotation>
      </div>



      <div class="rt-space-horizontal05">
        <rt-annotation
          label="Demo"
          class="rt-space-top rt-space-bottom3"
        >
          <template slot="content">
            <div class="row">
              <div class="rt-col-1 rt-space-bottom">
                <pre-code
                  text='
                    <rt-icon type="user-silhouette"
                      width="16"
                      height="16"
                      color="101828"
                    ></rt-icon>
                '/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="004"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="049" caption="unlim"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="054"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="056"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="057"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="058"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="059"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="060"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="061"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="062"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="063"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="064"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="065"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="066"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="067"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="068"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="069"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="070"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="071"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="072"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="073"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="074"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="075"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="077"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="078"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="079"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="087"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="092"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="093"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="098"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="100"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="103"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="104"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="106"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="107"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="108"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="115"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="116"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="176"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="228"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_MOVE_SENSOR" caption="200" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_ANTIVIRUS" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_ANTIVIRUS_K" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_GAMES" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_GAMES_FIFA" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_GAMES_WOT" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_GAMES_WOW" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_IP" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_MAIN" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_OFICE_365" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_PARENT_CONTROL" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_ROUTER" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_SPEED_0" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_SPEED_20" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_SPEED_60" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_SPEED_100" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_SPEED_200" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_SPEED_2" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_SPEED_2" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_SPEED_3" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="INTERNET_SPEED_NIGHT" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="MOBILE_MAIN" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="MOBILE_CALL" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="MOBILE_INTERNET" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="MOBILE_MESSAGE" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="MOBILE_RTK_APP" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="MOBILE_SIM" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_CLOUD" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_DOOR_SENSOR" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_FLAME_SENSOR" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_INDOOR_VIDEO" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_LED" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_MAIN" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_OUTDOOR_VIDEO" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_POW_SOCKET" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_MOVE_SENSOR" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="SMART_HOME_WATER_SENSOR" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TELEPHONE_MAIN" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TELEPHONE_MOBILE" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TELEPHONE_TELEPHONES" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TELEPHONE_UNLIM" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_MAIN" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_HD" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_CHANNEL_1" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_CHANNEL_2" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_CHANNEL_3" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_CHANNEL_4" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_CHANNEL_5" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_CHANNEL_6" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_CLOUD" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_CLOUD_ARH" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_CONTROL" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_KARAOKE" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_MEDIABOX" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_MULTIROOM" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_MULTISCREEN" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_ONLINE" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_ONLINE_STAR" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="TV_PULT" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="OTHER_DEFAULT" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="OTHER_BONUS_1" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="OTHER_BONUS_2" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="OTHER_GIFT_1" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="OTHER_GIFT_2" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="OTHER_INSURANCE" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="YA_DISK" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_24" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_127" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_25" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_26" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_110" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_111" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_403" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_404" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_405" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_406" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_112" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_243" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_244" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_245" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_246" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_131" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_146" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_160" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_239" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_291" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_402" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_403" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_404" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_405" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_406" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_405" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_407" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_408" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_409" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_410" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_411" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_417" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_418" :candy=true></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_419" :candy=true></rt-icon>'/>
              </div>

              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon image="https://krasnodar.rt.ru/sites/default/files/img/icon/icon_wink_80x80px.svg"></rt-icon>'/>
              </div>

              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon value="%" :candy="true" color="white" bg="#7800ff"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_403" :candy=true caption="200"></rt-icon>'/>
              </div>
              <div class="rt-col-1 rt-space-bottom">
                <pre-code text='<rt-icon type="icon_403" :candy=true caption="100"></rt-icon>'/>
              </div>
            </div>
          </template>
        </rt-annotation>
      </div>

      <div
        class="the-msg"
        :class="{ active: showCopySuccess }"
      >Type выбранной иконки скопирован в буфер!</div>
    </div>

    <div class="rt-container rt-space-top25">
      <div class="rt-space-horizontal05">
        <documentation-builder :json="documentation" type="props" />
      </div>
    </div>
  </div>
</template>

<script>
import documentation from "../../../lib/components/Icon/docs/index.json";
import listIcons from "../../../../static/list-icons.json"

const componentsList = {};
const prefixNewIcons = 'nw__'
const newIconsNameLength = 3

if (!window.RTK_STYLE) window.RTK_STYLE = {}
if (window.location.hostname === 'localhost')
  window.RTK_STYLE.icons_path = '/static/icons/'

export default {
  name: "AppIcons",
  components: componentsList,
  data: () => ({
    documentation: {},
    findedIcons: [],
    filteredIcons: [],
    newIcons: {},
    oldIcons: [],
    searched: '',
    selectedIcon: null,
    detailBg: 'linear-gradient(240deg, #777, #aaa)',
    detailTop: null,
    detailCopyType: null,
    detailViewEl: null,
    detailViewReady: false,
    oldCopyType: null,
    showCopySuccess: false,
    isDarkTheme: localStorage.getItem('rt-dark') === '1'
  }),
  computed: {
    detailStyle () {
      return {
        background: this.detailBg,
        top: `${this.detailTop}px`,
        zIndex: this.detailViewReady ? 'auto' : '-1'
      }
    },
    filteredlistIcons () {
      return this.findedIcons
    },
    previewStyle () {
      return this.isDarkTheme ? '-G56px' : '-B56px'
    }
  },
  beforeMount() {
    let newIconsStack = []
    listIcons.forEach(icon => {
      (icon.indexOf(prefixNewIcons) === 0)
        ? newIconsStack.push(icon)
        : this.oldIcons.push(icon)
    })
    newIconsStack.forEach(icon => {
      let name = icon.substr(prefixNewIcons.length, newIconsNameLength)
      let type = icon
      let style = icon.substr(prefixNewIcons.length + newIconsNameLength, icon.length)
      let iconObj = { name, type, style }
      if (!this.newIcons[name]) {
        this.newIcons[name] = { name, list: [iconObj] }
      } else {
        this.newIcons[name].list.push(iconObj)
      }
    })
    this.filterList()
  },
  mounted() {
    this.documentation = documentation
  },
  created() {},
  methods: {
    detailIcon(icon) {
      return this.newIcons[icon]
    },
    copyText(el) {
      el.select()
      el.setSelectionRange(0, 99999)
      document.execCommand('copy')
      this.showCopySuccess = true
      setTimeout(() => {
        this.showCopySuccess = false
      }, 2000)
    },
    detailIconShow(icon) {
      let iconEl = this.$el.querySelector(`div[data-icon="${icon}"]`)
      if (!iconEl) return
      if (this.selectedIcon === icon) {
        return this.detailIconClose()
      } else if (this.detailViewEl) {
        this.detailIconClose()
      }

      this.detailCopyType = this.previewType(icon)
      this.selectedIcon = icon

      this.$nextTick(() => {
        this.detailIconAppend(iconEl)
      })
    },
    detailIconClose() {
      this.selectedIcon = null
      if (this.detailViewEl && this.detailViewEl.parentElement) {
        this.detailViewEl.parentElement.removeChild(this.detailViewEl)
        this.detailViewEl = null
        this.detailViewReady = false
      }
    },
    detailIconAppend(iconEl) {
      let x = iconEl.parentElement.getBoundingClientRect().left
      let y = iconEl.getBoundingClientRect().bottom
      let parent = iconEl.parentElement
      let appendBeforeEl = document.elementFromPoint(x, y)
      this.detailTop = iconEl.offsetTop + iconEl.clientHeight

      this.detailViewEl = document.createElement('DIV')
      this.detailViewEl.className = 'rt-col-12 detail__view'
      this.detailViewEl.style.height = `${this.$refs.detailEl.clientHeight}px`
      if (parent.contains(appendBeforeEl)) {
        parent.insertBefore(this.detailViewEl, appendBeforeEl)
      } else {
        parent.append(this.detailViewEl)
      }
      this.detailViewReady = true
    },
    doSearch (e) {
      if (e !== this.searched) {
        this.detailIconClose()
        this.searched = e
        this.filterList()
      }
    },
    sortAsc (a, b) {
      let nA = parseInt(a)
      let nB = parseInt(b)
      if (nA > nB) return 1
      if (nA < nB) return -1
      return 0
    },
    filterList () {
      this.findedIcons = {
        new: Object.keys(this.newIcons)
          .filter(n => n.indexOf(this.searched) !== -1)
          .sort(this.sortAsc),
        old: Object.keys(this.oldIcons)
          .filter(n => n.indexOf(this.searched) !== -1)
          .sort(this.sortAsc)
      }
    },
    previewType(icon) {
      if (!this.newIcons[icon]) return
      let t = this.newIcons[icon].list.filter(n => n.style === this.previewStyle)
      return t && t[0] && t[0].type
        ? t[0].type
        : this.newIcons[icon].list[0].type
    }
  }
};
</script>

<style lang="stylus">
  iconName = rt-icon
  selectedBg = #E3E8EC
  space = 8px

  .btn
    cursor pointer
    user-select none
  .fake-txt
    position absolute
    width 0
    height 0
    opacity 0

  .preview
    padding space
    &:hover,
    &.selected
      background selectedBg

  .detail
    margin-left 20px
    margin-right 20px
    position absolute
    &__view
      position absolute
    &__name
      background selectedBg
      padding space
    &__bg
      position absolute
      top space
      right space
    &__el
      padding-left space
      padding-top space * 2
    &__code
      padding-top 30px
      code
        background #272822
        margin-right space
        padding space
      textarea
        opacity 0
        position absolute
        width 0
        height 0
    &__types
      display flex
    &-type
      padding space
      &__name
        font-size 10px
        padding-bottom 2px
        text-align center

  .the-msg
    background #333
    color #f1cb11
    margin auto
    max-width 70vw
    padding 12px
    position fixed
    bottom 0
    left 0
    right 0
    transition transform .3s ease
    transform translateY(60px)
    width 500px
    &.active
      transform translateY(0px)

  .monokai
    color #F8F8F2
    .c
      &_tag
        color #F92672
      &_attr
        color #A6E22E
      &_val0
        color #E6DB74

  .rt-annotation--is-open > .rt-annotation__content
    max-height max-content !important
</style>
