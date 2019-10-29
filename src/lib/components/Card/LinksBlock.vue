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
        iconsList: []
      };
    },

    computed: {

    },
    created() {},

    mounted() {
      this.totalQuantity = this.iconArray.length;
      this.quantityHidden = this.totalQuantity - 6;
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
        let outerWidth = +getComputedStyle(this.$el).width.slice(0, -2);
        let innerWidth = +getComputedStyle(this.$el.children[0]).width.slice(0, -2);
        let visibleIcons = Math.floor(innerWidth / 32);
        this.quantityHidden = this.totalQuantity - visibleIcons;

        if(this.quantityHidden === 1 || this.quantityHidden === 0) {
          this.$el.querySelector('.rtb-card__links-block').style.maxWidth = '100%';
          if(outerWidth < this.totalQuantity * 32) {
            this.quantityHidden = this.totalQuantity - (visibleIcons - 1);
            this.$el.querySelector('.rtb-card__links-block').removeAttribute('style');
          }
        } else {
          this.$el.querySelector('.rtb-card__links-block').removeAttribute('style');
        }
      },
      hideIcons() {
        for(let i = 0; i < this.totalQuantity; i++) {
          if(this.totalQuantity !== 7 && i > 5) {
            this.iconsList[i].classList.add('rtb-card__social-link--hidden');
          }
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
        <div class="rtb-card__links-block" >
          {content}
        </div>
        {button}
      </div>;
    }
  };
</script>
