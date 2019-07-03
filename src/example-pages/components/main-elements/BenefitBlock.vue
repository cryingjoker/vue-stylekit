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
          text='
            <rt-benefit-block :columns-quantity="3" :swiper-on-mobile="true">
              <rt-benefit-item>
                <template slot="description">
                  <h4 class="rt-font-bold rt-space-bottom05">Помощь в математике</h4>
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
        '/>
        <pre-code
          text='
            <rt-benefit-block :columns-quantity="4" :step="true" step-title="этап">
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
      <!--<documentation-builder :json="documentation" type="components" />-->
    </div>
  </div>
  <!--</div>-->
</template>

<script>
//  import documentation from "../../../lib/components/InlineDropdown/docs/index.json";
  export default {
    name: "AppBenefitBlock",
    components: {},
    data: () => ({
//      documentation: {}
    }),
    mounted() {
//      this.documentation = documentation;
    }
  };
</script>
