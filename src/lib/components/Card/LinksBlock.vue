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
      document.addEventListener('DOMContentLoaded', ()=>{
        this.iconsList = this.$el.children[0].children;
        for(let i = 0; i < this.totalQuantity; i++) {
          this.totalQuantity !== 7 ? (i > 5 ? this.iconsList[i].classList.add('rtb-card__social-link--hidden') : null) : null;
        }
        this.countHiddenIconsQuantity();
      });
      window.addEventListener('resize', () => {
        this.countHiddenIconsQuantity();
      });
    },

    methods: {
      unwrap() {
        this.isOpen = !this.isOpen;
        this.$el.querySelector('.rtb-card__links-block').classList.add('rtb-card__links-block--expanded');
        for(let i = 0; i < this.totalQuantity; i++) {
          this.iconsList[i].classList.remove('rtb-card__social-link--hidden');
        }
      },
      countHiddenIconsQuantity() {
        let visibleIcons = Math.floor((+getComputedStyle(this.$el.children[0]).width.slice(0, -2)) / 32);
        this.quantityHidden = this.totalQuantity - visibleIcons;
        if(this.quantityHidden === 1) {
          this.$el.querySelector('.rtb-card__links-block').style.maxWidth = '100%';
        } else {
          this.$el.querySelector('.rtb-card__links-block').style.maxWidth = 'calc(100% - 42px)';
        }
      }
    },

    render(h) {
      const content = (() => {
        if(this.$el) {
          let linksLayout = '';
          this.iconArray.forEach((el)=> {
            let link = `${this.sourceDirectory}${el}.svg`;
            let title = el.replace('b2b_', '');
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
