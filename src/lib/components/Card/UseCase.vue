<script type="text/jsx">
const componentsList = {};
import variables from "../../variables.json";

export default {
  name: "RtUseCase",
  components: componentsList,
  data () {
    return {
      lastSelectedCard: null,
      mobileLayout: window.innerWidth <= parseInt(variables["tablet-upper-limit"])
    }
  },
  mounted(){
//    console.log(this.$el.children);
    this.setCardHeight();
//    this.equalizeCardsHeight();
  },
  computed: {},
  methods: {
//    flipCard (index) {
//      if (this.lastSelectedCard) this.lastSelectedCard.classList.remove('hover');
//      if (index !== undefined) {
//        this.$refs['flipContainer' + index][0].classList.toggle('hover');
//        this.lastSelectedCard = this.$refs['flipContainer' + index][0]
//      }
//    },
    setCardHeight() {
      window.onload = () => {
        if(!this.mobileLayout) {
          for(let i = 0; i < this.$children.length; i++) {
            this.$children[i].$el.style.height = this.$children[i].$el.querySelector('.rtb-card__reverse').scrollHeight;
          }
        }
        this.equalizeCardsHeight();
      };
    },
    equalizeCardsHeight() {
      let maxHeight = 0;
      for(let i = 0; i < this.$children.length; i++) {
        let cardHeight = +this.$children[i].$el.style.height.replace('px', '');
        maxHeight = maxHeight < cardHeight ? cardHeight : maxHeight;
      }
      for(let i = 0; i < this.$children.length; i++) {
        this.$children[i].$el.style.height = maxHeight;
      }
    }
  },
  render(h) {
    return <div class="row rt-rotating-card-gallery">
      {this.$slots.default}
    </div>
  }
}
</script>
