<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          Tabs
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <div class="rt-col-12">
          <pre-code
            text="<rt-tabs :round-tablet-view='true'>
              <template slot=&quot;navigation&quot;>
                <rt-tabs-nav-item anchor=&quot;ready!&quot; :remove-base-tag=&quot;true&quot; name=&quot;one&quot;>Готов</rt-tabs-nav-item>
                <rt-tabs-nav-item anchor=&quot;hello&quot; :remove-base-tag=&quot;true&quot; name=&quot;two&quot;>Смысл</rt-tabs-nav-item>
                <rt-tabs-nav-item anchor=&quot;world&quot; :remove-base-tag=&quot;true&quot; name=&quot;tree&quot;>Значимость</rt-tabs-nav-item>
              </template>
              <template slot=&quot;content&quot;>
                <rt-tabs-content-item name=&quot;one&quot;>
                  <h1>TEST</h1>
                </rt-tabs-content-item>
                <rt-tabs-content-item name=&quot;two&quot;><p class=&quot;rt-font-h1&quot;>Смысл сайта</p>
                  <p class=&quot;rt-font-paragraph&quot;>Повседневная практика показывает, что консультация с широким активом
                    представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении
                    поставленных задач. Равным образом консультация с широким активом влечет за собой процесс внедрения
                    и модернизации форм развития. Повседневная практика показывает, что консультация с широким активом
                    обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий
                    активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение
                    новых предложений. Не следует, однако забывать, что рамки и место обучения кадров требуют от нас
                    анализа новых предложений. Идейные соображения высшего порядка, а также реализация намеченных
                    плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании позиций,
                    занимаемых участниками в отношении поставленных задач.</p>
                  <p class=&quot;rt-font-paragraph&quot;>Идейные соображения высшего порядка, а также постоянное
                    информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает
                    создание существенных финансовых и административных условий. С другой стороны постоянный
                    количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке
                    существенных финансовых и административных условий. Таким образом консультация с широким активом
                    влечет за собой процесс внедрения и модернизации форм развития. С другой стороны сложившаяся
                    структура организации требуют определения и уточнения системы обучения кадров, соответствует
                    насущным потребностям. Товарищи! рамки и место обучения кадров представляет собой интересный
                    эксперимент проверки направлений прогрессивного развития.</p></rt-tabs-content-item>
                <rt-tabs-content-item name=&quot;tree&quot;><p class=&quot;rt-font-h1&quot;>Значимость</p>
                  <p class=&quot;rt-font-paragraph&quot;>Значимость этих проблем настолько очевидна, что консультация с широким
                    активом позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении
                    поставленных задач. Задача организации, в особенности же рамки и место обучения кадров требуют от
                    нас анализа направлений прогрессивного развития. Повседневная практика показывает, что сложившаяся
                    структура организации представляет собой интересный эксперимент проверки форм развития. Значимость
                    этих проблем настолько очевидна, что укрепление и развитие структуры позволяет оценить значение
                    систем массового участия.</p>
                  <p class=&quot;rt-font-paragraph&quot;>Разнообразный и богатый опыт рамки и место обучения кадров способствует
                    подготовки и реализации соответствующий условий активизации. Повседневная практика показывает, что
                    дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки
                    существенных финансовых и административных условий. Идейные соображения высшего порядка, а также
                    укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании
                    форм развития.</p></rt-tabs-content-item>
              </template>
            </rt-tabs>"
          />
          <pre-code
            text="<rt-tabs>
              <template slot=&quot;navigation&quot;>
                <rt-tabs-nav-item anchor=&quot;ready!&quot; :remove-base-tag=&quot;true&quot; name=&quot;one&quot;>Готов Готов Готов Готов Готов Готов</rt-tabs-nav-item>
                <rt-tabs-nav-item anchor=&quot;hello&quot; :remove-base-tag=&quot;true&quot; name=&quot;two&quot;>Смысл сайта Смысл сайта Смысл сайта Смысл сайта Смысл сайта Смысл сайта</rt-tabs-nav-item>
                <rt-tabs-nav-item anchor=&quot;world&quot; :remove-base-tag=&quot;true&quot; name=&quot;tree&quot;>Значимость Значимость Значимость Значимость Значимость Значимость</rt-tabs-nav-item>
              </template>
              <template slot=&quot;content&quot;>
                <rt-tabs-content-item name=&quot;one&quot;>
                  <h1>TEST</h1>
                </rt-tabs-content-item>
                <rt-tabs-content-item name=&quot;two&quot;><p class=&quot;rt-font-h1&quot;>Смысл сайта</p>
                  <p class=&quot;rt-font-paragraph&quot;>Повседневная практика показывает, что консультация с широким активом
                    представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении
                    поставленных задач. Равным образом консультация с широким активом влечет за собой процесс внедрения
                    и модернизации форм развития. Повседневная практика показывает, что консультация с широким активом
                    обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий
                    активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение
                    новых предложений. Не следует, однако забывать, что рамки и место обучения кадров требуют от нас
                    анализа новых предложений. Идейные соображения высшего порядка, а также реализация намеченных
                    плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании позиций,
                    занимаемых участниками в отношении поставленных задач.</p>
                  <p class=&quot;rt-font-paragraph&quot;>Идейные соображения высшего порядка, а также постоянное
                    информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает
                    создание существенных финансовых и административных условий. С другой стороны постоянный
                    количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке
                    существенных финансовых и административных условий. Таким образом консультация с широким активом
                    влечет за собой процесс внедрения и модернизации форм развития. С другой стороны сложившаяся
                    структура организации требуют определения и уточнения системы обучения кадров, соответствует
                    насущным потребностям. Товарищи! рамки и место обучения кадров представляет собой интересный
                    эксперимент проверки направлений прогрессивного развития.</p></rt-tabs-content-item>
                <rt-tabs-content-item name=&quot;tree&quot;><p class=&quot;rt-font-h1&quot;>Значимость</p>
                  <p class=&quot;rt-font-paragraph&quot;>Значимость этих проблем настолько очевидна, что консультация с широким
                    активом позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении
                    поставленных задач. Задача организации, в особенности же рамки и место обучения кадров требуют от
                    нас анализа направлений прогрессивного развития. Повседневная практика показывает, что сложившаяся
                    структура организации представляет собой интересный эксперимент проверки форм развития. Значимость
                    этих проблем настолько очевидна, что укрепление и развитие структуры позволяет оценить значение
                    систем массового участия.</p>
                  <p class=&quot;rt-font-paragraph&quot;>Разнообразный и богатый опыт рамки и место обучения кадров способствует
                    подготовки и реализации соответствующий условий активизации. Повседневная практика показывает, что
                    дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки
                    существенных финансовых и административных условий. Идейные соображения высшего порядка, а также
                    укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании
                    форм развития.</p></rt-tabs-content-item>
              </template>
            </rt-tabs>"
          />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-8 rt-col-td-6 rt-col-md-3">
          <h3 class="rt-font-bold rt-space-bottom15">Инструкции по настройке VoIP</h3>
          <rt-tabs>
            <template slot="navigation">
              <rt-tabs-nav-item anchor="one" :remove-base-tag="true" name="apps">Программы</rt-tabs-nav-item>
              <rt-tabs-nav-item anchor="two" :remove-base-tag="true" name="hardware">Оборудование</rt-tabs-nav-item>
            </template>
            <template slot="content">
              <rt-tabs-content-item name="apps">
                <rt-row-list :content-block-type="true">
                  <rt-row-list-item>
                    <template slot="icon">
                      <svg viewBox="0 0 64 45" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="nonzero" fill="none">
                          <path d="M16 44.04H2.667V30.707H16V44.04zM5.333 41.373h8v-8h-8v8z" fill="#70F"/>
                          <path d="M48 44.04V29.373l13.067 7.2L48 44.04zm2.667-10.133v5.333l4.8-2.667-4.8-2.666z" fill="#BC104B"/>
                          <path fill="#273A64" d="M26.667 30.707h2.667V44.04h-2.667zM34.667 30.707h2.667V44.04h-2.667z"/>
                          <g fill="#FF4F12">
                            <path d="M61.067 7.773C53.6 2.707 44 .307 34.4.307h-4.533c-4.126 0-8.243.472-12.2 1.381v2.65A52.073 52.073 0 0 1 29.6 2.977h4.8c9.6 0 18.667 2.667 25.333 6.933 1.6 1.067 1.867 1.6 1.867 2.667v9.067c0 .533-.267.8-.8.8h-16c-.267 0-.533 0-.533-.267 0 0-.267-.267-.267-.533v-8s-5.203-1.6-12-1.6-11.733 1.6-11.733 1.6v7.733c0 .533-.267.8-.8.8H.112c.277 1.619 1.675 2.933 3.355 2.933h16c1.866 0 3.466-1.6 3.466-3.466v-5.6s5.334-1.067 9.067-1.067c4 0 9.067 1.067 9.067 1.067v5.6c0 1.866 1.6 3.466 3.466 3.466h16c1.867 0 3.467-1.6 3.467-3.466v-9.067c0-2.136-1.067-3.736-2.933-4.803z"/>
                            <path d="M2.667 21.373v-8.8c0-1.066.266-1.6 1.866-2.666 3.771-2.563 8.24-4.419 13.134-5.571v-2.65C12.419 2.89 7.456 4.882 3.2 7.772 1.067 8.84 0 10.44 0 12.573v9.067c0 .187.08.352.112.533h3.355c-.534 0-.8-.266-.8-.8z"/>
                          </g>
                        </g>
                      </svg>
                    </template>
                    <template slot="option">
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">Telephone</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">Bria</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">CSip Simple</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">Linphone</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">Телефон Ростелеком</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                    </template>
                  </rt-row-list-item>
                </rt-row-list>
              </rt-tabs-content-item>
              <rt-tabs-content-item name="hardware">
                <rt-row-list :content-block-type="true">
                  <rt-row-list-item>
                    <template slot="icon">
                      <svg viewBox="0 0 64 45" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="nonzero" fill="none">
                          <path d="M16 44.04H2.667V30.707H16V44.04zM5.333 41.373h8v-8h-8v8z" fill="#70F"/>
                          <path d="M48 44.04V29.373l13.067 7.2L48 44.04zm2.667-10.133v5.333l4.8-2.667-4.8-2.666z" fill="#BC104B"/>
                          <path fill="#273A64" d="M26.667 30.707h2.667V44.04h-2.667zM34.667 30.707h2.667V44.04h-2.667z"/>
                          <g fill="#FF4F12">
                            <path d="M61.067 7.773C53.6 2.707 44 .307 34.4.307h-4.533c-4.126 0-8.243.472-12.2 1.381v2.65A52.073 52.073 0 0 1 29.6 2.977h4.8c9.6 0 18.667 2.667 25.333 6.933 1.6 1.067 1.867 1.6 1.867 2.667v9.067c0 .533-.267.8-.8.8h-16c-.267 0-.533 0-.533-.267 0 0-.267-.267-.267-.533v-8s-5.203-1.6-12-1.6-11.733 1.6-11.733 1.6v7.733c0 .533-.267.8-.8.8H.112c.277 1.619 1.675 2.933 3.355 2.933h16c1.866 0 3.466-1.6 3.466-3.466v-5.6s5.334-1.067 9.067-1.067c4 0 9.067 1.067 9.067 1.067v5.6c0 1.866 1.6 3.466 3.466 3.466h16c1.867 0 3.467-1.6 3.467-3.466v-9.067c0-2.136-1.067-3.736-2.933-4.803z"/>
                            <path d="M2.667 21.373v-8.8c0-1.066.266-1.6 1.866-2.666 3.771-2.563 8.24-4.419 13.134-5.571v-2.65C12.419 2.89 7.456 4.882 3.2 7.772 1.067 8.84 0 10.44 0 12.573v9.067c0 .187.08.352.112.533h3.355c-.534 0-.8-.266-.8-.8z"/>
                          </g>
                        </g>
                      </svg>
                    </template>
                    <template slot="option">
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">Telephone</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">Bria</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">CSip Simple</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                    </template>
                  </rt-row-list-item>
                  <rt-row-list-item>
                    <template slot="icon">
                      <svg viewBox="0 0 64 45" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="nonzero" fill="none">
                          <path d="M16 44.04H2.667V30.707H16V44.04zM5.333 41.373h8v-8h-8v8z" fill="#70F"/>
                          <path d="M48 44.04V29.373l13.067 7.2L48 44.04zm2.667-10.133v5.333l4.8-2.667-4.8-2.666z" fill="#BC104B"/>
                          <path fill="#273A64" d="M26.667 30.707h2.667V44.04h-2.667zM34.667 30.707h2.667V44.04h-2.667z"/>
                          <g fill="#FF4F12">
                            <path d="M61.067 7.773C53.6 2.707 44 .307 34.4.307h-4.533c-4.126 0-8.243.472-12.2 1.381v2.65A52.073 52.073 0 0 1 29.6 2.977h4.8c9.6 0 18.667 2.667 25.333 6.933 1.6 1.067 1.867 1.6 1.867 2.667v9.067c0 .533-.267.8-.8.8h-16c-.267 0-.533 0-.533-.267 0 0-.267-.267-.267-.533v-8s-5.203-1.6-12-1.6-11.733 1.6-11.733 1.6v7.733c0 .533-.267.8-.8.8H.112c.277 1.619 1.675 2.933 3.355 2.933h16c1.866 0 3.466-1.6 3.466-3.466v-5.6s5.334-1.067 9.067-1.067c4 0 9.067 1.067 9.067 1.067v5.6c0 1.866 1.6 3.466 3.466 3.466h16c1.867 0 3.467-1.6 3.467-3.466v-9.067c0-2.136-1.067-3.736-2.933-4.803z"/>
                            <path d="M2.667 21.373v-8.8c0-1.066.266-1.6 1.866-2.666 3.771-2.563 8.24-4.419 13.134-5.571v-2.65C12.419 2.89 7.456 4.882 3.2 7.772 1.067 8.84 0 10.44 0 12.573v9.067c0 .187.08.352.112.533h3.355c-.534 0-.8-.266-.8-.8z"/>
                          </g>
                        </g>
                      </svg>
                    </template>
                    <template slot="option">
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">Linphone</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                      <div class="ovh rt-space-bottom05 rt-space-top05">
                        <p class="rt-font-small-paragraph help-soft-and-hard">
                          <a href="#" target="_blank">
                            <span class="help-soft-and-hard__title rt-space-right05">Телефон Ростелеком</span>
                            <span class="help-soft-and-hard__weight">pdf, 993 Кб</span>
                          </a>
                        </p>
                      </div>
                    </template>
                  </rt-row-list-item>
                </rt-row-list>
              </rt-tabs-content-item>
            </template>
          </rt-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import componentsList from "../../componentsList";
export default {
  name: "AppTabs",
  components: componentsList
};
</script>
