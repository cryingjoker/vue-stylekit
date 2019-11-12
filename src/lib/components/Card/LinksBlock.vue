<script type="text/jsx">

  import variables from "../../variables.json";

  export default {
    name: "LinksBlock",
    props: {
      iconArray: {
        type: Array,
        default: null
      },
      sourceDirectory: {
        type: String,
        default: '/sites/default/files/b2b/'
      }
    },
    data() {
      return {
        isOpen: false,
        totalQuantity: null,
        quantityHidden: null,
        iconsList: [],
        outerWidth: null,
        innerWidth: null,
        visibleIcons: null
      }
    },

    computed: {

    },
    created() {},

    mounted() {
      this.totalQuantity = this.iconArray.length;
      this.quantityHidden = this.totalQuantity - 6;
      this.outerWidth = +getComputedStyle(this.$el).width.slice(0, -2);
      this.innerWidth = +getComputedStyle(this.$el.children[0]).width.slice(0, -2);
      this.visibleIcons = Math.floor(innerWidth / 32) > 6 ? 6 : Math.floor(innerWidth / 32);
      window.addEventListener('load', ()=>{
        this.iconsList = this.$el.children[0].children;
        this.hideIcons();
        this.countHiddenIconsQuantity();
      });
      window.addEventListener('resize', () => {
        this.hideIcons();
        setTimeout(() => {
          this.countHiddenIconsQuantity();
        },10);
      });
    },

    methods: {
      unwrap() {
        this.isOpen = !this.isOpen;
        this.$el.querySelector('.rtb-card__links-block').classList.add('rtb-card__links-block--expanded');
        for(let i = 0; i < this.totalQuantity; i++) {
          this.iconsList[i].classList.remove('rtb-card__social-link--hidden');
        }
        setTimeout(() => {
          window.dispatchEvent(new Event("resizeTrigger"));
        }, 1)
      },
      countHiddenIconsQuantity() {
        // 32 - icon.width + icon.margin
        this.quantityHidden = this.totalQuantity - this.visibleIcons;

        if(this.quantityHidden === 1 || this.quantityHidden === 0) {
          this.$el.querySelector('.rtb-card__links-block').style.maxWidth = '100%';
          this.visibleIcons = 7;
          if(outerWidth < this.totalQuantity * 32) {
            this.quantityHidden = this.totalQuantity - (this.visibleIcons - 1);
            this.$el.querySelector('.rtb-card__links-block').removeAttribute('style');
          }
        } else {
          this.$el.querySelector('.rtb-card__links-block').removeAttribute('style');
        }
      },
      hideIcons() {
        for(var i = this.visibleIcons; i < this.totalQuantity; i++) {
          this.iconsList[i].classList.add('rtb-card__social-link--hidden');
        }
      }
    },

    render(h) {
      const content = (() => {
        if(this.$el) {
          let linksLayout = '';
          this.iconArray.forEach((el)=> {
            let link = `${this.sourceDirectory}${el.path}.svg`;
            let title = el.tooltip;
            linksLayout += (`<div class="rtb-card__social-link"><img src=${link} title=${title} /></div>`)
          });
          this.$el.children[0].innerHTML = linksLayout;
        }
      })();
      const button = (() => {
        if(this.quantityHidden && this.totalQuantity > 6 && this.quantityHidden !== 1){
          return <button class="rtb-card__expand-button" onClick={this.unwrap}>ещё {this.quantityHidden}</button>;
        } else {
          return null;
        }
      })();
      return <div class="links-block">
        <div class="rtb-card__links-block">
          {content}
        </div>
        {button}
      </div>;
    }
  };
</script>
