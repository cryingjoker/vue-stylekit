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
        console.info('options',options);
      },
      changeStatus() {

        optionsListStore.changeStatus(this.name || this._uid);
        console.info('this.name || this._uid',this.name || this._uid);


      }
    },
    computed:{
      optionsListClass : function() {
        let optionsListClass = "rt-options-list";
        if (this.isActive) {
          optionsListClass += " rt-options-list--is-active";
        }
        return optionsListClass
      }
    },
    render(h) {


      console.info('this.isActive',this.isActive);

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
                <span class="rt-font-bold">{this.$slots.label}</span> <rt-button show-as-tag={true} className="rt-button-orange rt-button-small rt-options-list__info-more-button">Подробнее</rt-button>
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
        <div class="rt-options-list__content">
          {this.$slots.content}
        </div>
      </div>;
    }
  };
</script>
