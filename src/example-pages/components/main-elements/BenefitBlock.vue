<template>
  <div class="app-content">
    <div class="rt-container">
      <div class="rt-col">
        <div class="app-title">
          <h1 class="rt-font-hero">
            BenefitBlock
          </h1>
        </div>
      </div>
    </div>
    <div class="app-body">
      <div class="app-row">
        <pre-code
          text=`
            <rt-resize-content-height :query-selectors-names="['.rt-font-bold']">
              <rt-benefit-block :columns-quantity="3" :swiper-on-mobile="true">
                <rt-benefit-item>
                  <template slot="description">
                    <div class="rt-benefit-item__text-icon rt-va-top">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 78" class="rt-benefit-item__text-icon-svg">
                        <g fill="none" fill-rule="evenodd">
                          <path fill="#000" fill-rule="nonzero" d="M38.163 9.813c-6.054 0-10.979 4.925-10.979 10.979v4.688h2.742v-4.691c0-4.541 3.693-8.234 8.234-8.234 4.54 0 8.234 3.693 8.234 8.234v4.691h2.742v-4.691c.003-6.051-4.918-10.976-10.973-10.976z"/>
                          <path fill="#000" fill-rule="nonzero" d="M47.763 27.944l.007 17.168-19.207.006-.006-17.174h19.206m.01-3.2H28.56a3.194 3.194 0 0 0-3.194 3.19v17.184a3.194 3.194 0 0 0 3.194 3.194h19.213a3.194 3.194 0 0 0 3.193-3.194V27.934a3.194 3.194 0 0 0-3.193-3.19"/>
                          <path fill="#000" fill-rule="nonzero" d="M38.163 33.886a1.6 1.6 0 0 0-1.6 1.6v3.204a1.6 1.6 0 0 0 3.2 0v-3.204c0-.883-.713-1.6-1.6-1.6z"/>
                          <path fill="#000" fill-rule="nonzero" d="M38.166 77.09l-.65-.288C2.126 61.074.315 15.234.299 14.77L.25 13.122H1.9c6.295 0 11.412-5.12 11.412-11.412V.11h49.706v1.6c0 6.292 5.12 11.412 11.41 11.412h1.652l-.051 1.648c-.016.464-1.824 46.304-37.216 62.028l-.647.292zM3.6 16.222c.653 7.908 5.206 43.821 34.566 57.357C67.562 60.027 72.09 24.126 72.733 16.222 66 15.438 60.646 10.06 59.907 3.31H16.426c-.74 6.75-6.093 12.128-12.826 12.912z"/>
                          <path d="M-2-1h80v80H-2z"/>
                        </g>
                      </svg>
                    </div>
                    <h4 class="rt-font-bold rt-space-bottom05 d-inline-block">Помощь в математике</h4>
                    <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                  </template>
                </rt-benefit-item>
                <rt-benefit-item>
                  <template slot="description">
                    <h4 class="rt-font-bold rt-space-bottom05">Планирование бюджета</h4>
                    <p class="rt-font-small-paragraph">Excel поможет эффективно управлять финансами.</p>
                  </template>
                </rt-benefit-item>
                <rt-benefit-item>
                  <template slot="description">
                    <h4 class="rt-font-bold rt-space-bottom05">Выявление программ-шантажистов</h4>
                    <p class="rt-font-small-paragraph">Даже после атаки программы-шантажиста вы сможете легко восстановить все файлы в OneDrive.</p>
                  </template>
                </rt-benefit-item>
                <rt-benefit-item>
                  <template slot="description">
                    <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
                    <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                  </template>
                </rt-benefit-item>
              </rt-benefit-block>
            </rt-resize-content-height>
        `/>
        <pre-code
          text='
            <rt-benefit-block :columns-quantity="4" :step="true" step-title="этап" :three-column-tablet="true">
              <rt-benefit-item>
                <template slot="description">
                  <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
                  <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                </template>
              </rt-benefit-item>
              <rt-benefit-item>
                <template slot="description">
                  <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
                  <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                </template>
              </rt-benefit-item>
              <rt-benefit-item>
                <template slot="description">
                  <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
                  <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                </template>
              </rt-benefit-item>
              <rt-benefit-item>
                <template slot="description">
                  <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
                  <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                </template>
              </rt-benefit-item>
            </rt-benefit-block>
        '/>
        <pre-code
          text='
            <rt-benefit-block :columns-quantity="2" :has-icon="true"  icon-size="80px" backgroundColorClass="color-block--black" class="color-white">
              <rt-benefit-item>
                <template slot="image">
                  <svg viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="internet" transform="translate(-209.000000, -8438.000000)">
                        <g id="Fill-35" transform="translate(209.000000, 8438.000000)">
                          <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                          <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" id="Stroke-167" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M40.6899,34.8915 L14.7429,20.3755" id="Stroke-168" stroke="#FFFFFF" stroke-linejoin="round"></path>
                          <path d="M38.7627,39.2968 L14.7427,25.4628" id="Stroke-169" stroke="#FFFFFF" stroke-linejoin="round"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </template>
                <template slot="description">
                  <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
                  <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                </template>
              </rt-benefit-item>
              <rt-benefit-item>
                <template slot="image">
                  <svg viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="internet" transform="translate(-209.000000, -8438.000000)">
                        <g id="Fill-35" transform="translate(209.000000, 8438.000000)">
                          <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                          <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" id="Stroke-167" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M40.6899,34.8915 L14.7429,20.3755" id="Stroke-168" stroke="#FFFFFF" stroke-linejoin="round"></path>
                          <path d="M38.7627,39.2968 L14.7427,25.4628" id="Stroke-169" stroke="#FFFFFF" stroke-linejoin="round"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </template>
                <template slot="description">
                  <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
                  <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                </template>
              </rt-benefit-item>
              <rt-benefit-item>
                <template slot="image">
                  <svg viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="internet" transform="translate(-209.000000, -8438.000000)">
                        <g id="Fill-35" transform="translate(209.000000, 8438.000000)">
                          <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                          <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" id="Stroke-167" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M40.6899,34.8915 L14.7429,20.3755" id="Stroke-168" stroke="#FFFFFF" stroke-linejoin="round"></path>
                          <path d="M38.7627,39.2968 L14.7427,25.4628" id="Stroke-169" stroke="#FFFFFF" stroke-linejoin="round"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </template>
                <template slot="description">
                  <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
                  <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                </template>
              </rt-benefit-item>
              <rt-benefit-item>
                <template slot="image">
                  <svg viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="internet" transform="translate(-209.000000, -8438.000000)">
                        <g id="Fill-35" transform="translate(209.000000, 8438.000000)">
                          <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                          <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" id="Stroke-167" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M40.6899,34.8915 L14.7429,20.3755" id="Stroke-168" stroke="#FFFFFF" stroke-linejoin="round"></path>
                          <path d="M38.7627,39.2968 L14.7427,25.4628" id="Stroke-169" stroke="#FFFFFF" stroke-linejoin="round"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </template>
                <template slot="description">
                  <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
                  <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
                </template>
              </rt-benefit-item>
            </rt-benefit-block>
        '/>

        <pre-code
          text='
            <rt-benefit-block :columns-quantity="4" :has-image="true" :no-transparency-description="true">
              <rt-benefit-item>
                <template slot="image">
                  <img src="/static/images/B2B/phone12.svg">
                </template>
                <template slot="description">
                  <p class="rt-font-paragraph">Мобильный или SIP-телефон</p>
                </template>
              </rt-benefit-item>
              <rt-benefit-item>
                <template slot="image">
                  <img src="/static/images/B2B/phone13.svg">
                </template>
                <template slot="description">
                  <p class="rt-font-paragraph">
                    <rt-replacement-link link-text="специальная программа"
                                         macos-link="https://apps.apple.com/us/app/telefon-rostelekom/id1033204349?mt=12"
                                         windows-link="https://moscow.rt.ru/sites/default/files/b2b/instruction_vats/Svetets_Telephone-Rostelecom_3.8.67.zip"
                                         pre-link-text="или "
                                         post-link-text=" на компьютере или ноутбуке"/>
                  </p>
                </template>
              </rt-benefit-item>
              <rt-benefit-item>
                <template slot="image">
                  <img src="/static/images/B2B/phone14.svg">
                </template>
                <template slot="description">
                  <p class="rt-font-paragraph">Интернет от любого провайдера</p>
                </template>
              </rt-benefit-item>
            </rt-benefit-block>
        '/>

      </div>
      <div class="rt-container rt-space-top25">
        <documentation-builder :json="documentation" type="components"/>
      </div>
    </div>
  </div>
</template>

<script>
  import documentation from "../../../lib/components/BenefitBlock/docs/index.json";
  import componentsList from "../../componentsList";
  export default {
    name: "AppBenefitBlock",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    }
  };
</script>
