<script type="text/jsx">
const componentsList = {};

export default {
  name: "RtUseCase",
  components: componentsList,
  data () {
    return {
      lastSelectedCard: null
    }
  },
  computed: {},
  methods: {
    flipCard (index) {
      if (this.lastSelectedCard) this.lastSelectedCard.classList.remove('hover');
      if (index !== undefined) {
        this.$refs['flipContainer' + index][0].classList.toggle('hover');
        this.lastSelectedCard = this.$refs['flipContainer' + index][0]
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
