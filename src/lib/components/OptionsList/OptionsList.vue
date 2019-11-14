<script type="text/jsx">
  import { optionsListStore } from "./OptionsListStore.tsx";

  export default {
    name: "RtOptionsList",
    props: {
      hash: {
        type: String,
        default: ""
      },
      needToSave: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ""
      },
      closeOther:{
        type: Boolean,
        default: false
      },
      hasStar:{
        type: Boolean,
        default: false
      }

    },
    data: () => ({

      isActive: false
    }),
    mounted() {

      optionsListStore.addInListArray(this.name || this._uid, this.hash, this.needToSave, this.closeOther);
      optionsListStore.addWatcher(this.name || this._uid, this.onChangeStatus);

    },
    methods: {

      onChangeStatus() {

        const options = optionsListStore.getStatus(this.name || this._uid);
        this.isActive = options.isActive;
      },
      changeStatus() {
        optionsListStore.changeStatus(this.name || this._uid);
      }
    },
    computed:{
      optionsListClass : function() {
        let optionsListClass = "rt-options-list";
        if(!this.isContentIsNotEmpty){
          optionsListClass += " rt-options-list----is_empty"
        }
        if (this.isActive) {
          optionsListClass += " rt-options-list--is-active";
        }
        return optionsListClass
      },
      isContentIsNotEmpty: function(){
        return !!this.$slots.content
      }

    },
    render(h) {

      const optionContent = ()=>{

        if(this.isContentIsNotEmpty){
          if(this.isActive){
            return <div class="rt-options-list__content">
              {this.$slots.content}
            </div>
          }else {
            return <div class="rt-options-list__content"></div>
          }
        }
        return null
      }

      const star = ()=>{
        if(this.hasStar)
          return <svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" class="rt-options-list__star">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="RTRU-5634_Mobile_internet_1460_v1" transform="translate(-422.000000, -1374.000000)" fill="#FFBE08">
              <path d="M442.393573,1382.71076 L440.957021,1383.95875 L437.711308,1386.68558 L438.267355,1388.94955 L438.731684,1390.79753 L439.194866,1392.64551 C439.473463,1393.8935 438.82455,1394.35521 437.758314,1393.70836 L436.134884,1392.69237 L434.512601,1391.72209 L432.474142,1390.52096 L430.479249,1391.72209 L428.856966,1392.69237 L427.234683,1393.70836 C426.122588,1394.35521 425.472528,1393.8935 425.796984,1392.64551 L426.261313,1390.79753 L426.724495,1388.94955 L427.234683,1386.68558 L424.035976,1383.95875 L422.598278,1382.71076 C421.626054,1381.87877 421.857645,1381.09364 423.155472,1381.00107 L425.056352,1380.86278 L429.275435,1380.53936 L430.897718,1376.65711 L431.638351,1374.9017 C432.148539,1373.69943 432.937324,1373.69943 433.446365,1374.9017 L434.188144,1376.65711 L435.811574,1380.53936 L440.028364,1380.86278 L441.930391,1381.00107 C443.135352,1381.13935 443.368089,1381.87877 442.393573,1382.71076 Z" id="Stroke-423-Copy-4"></path>
            </g>
          </g>
        </svg>
        return null
      }
      const moreInfoButton = ()=>{
        if(this.isContentIsNotEmpty) {
         return <rt-button show-as-tag={true}
                     class="rt-button--td-as-text">Подробнее</rt-button>
        }
        return null
      }
      return <div class={this.optionsListClass}>
        <div class="rt-options-list__header" onClick={this.changeStatus}>

          <div class="rt-options-list__icon">
            <div class="rt-space-right">
              {this.$slots.icon}
            </div>
          </div>
          <div class="rt-options-list__info">
            <div class="rt-options-list__info-content">
              <p class="rt-options-list__info-content__label">
                <span class="rt-font-bold rt-space-right05">{this.$slots.label}</span>

                {star()}
                {moreInfoButton()}
              </p>
              <p class="rt-font-control color-main07">{this.$slots.info}</p>


            </div>
            <div class="rt-options-break-mobile"></div>
            <div class="rt-options-list__info-aside">{this.$slots.aside}</div>
            <div class="rt-options-break"></div>
            <div class="rt-options-list__info-more">
              <div class="rt-space-left rt-td-space-left-none">

              </div>
            </div>
          </div>
        </div>
        {optionContent()}
      </div>;
    }
  };
</script>
