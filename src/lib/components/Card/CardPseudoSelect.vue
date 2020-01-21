<script type="text/jsx">
  export default {
    name: "RtCardPseudoSelect",
    props: {
      values: {
        type: Array,
        default: null
      },
      valueDescription: {
        type: String,
        default: ''
      },
      subscriptionFee: {
        type: String,
        default: ''
      },
      packageCost: {
        type: Array,
        default: null
      }
    },
    data() {
      return {
        localPackageCost: this.packageCost[0]
      }
    },
    computed: {},
    mounted() {
      this.pseudoSelectOptionsFill();
      this.$refs.inner.querySelectorAll('.pseudo-select__option').forEach(el => {
        el.addEventListener('click', e => {
          this.choosePackage(e);
        })
      })
    },
    created() {},

    methods: {
      pseudoSelectOptionsFill(){
        this.values.forEach((item, index) => {
          if(index === 0){
            this.$refs.optionListWrapper.innerHTML += `<div class="pseudo-select__option pseudo-select__option--chosen">
              <span class="rt-font-small-paragraph">${item} ${this.valueDescription}</span>
              </div>
              <div class="pseudo-select__option pseudo-select__option--clicked">
              <span class="rt-font-small-paragraph">${item} ${this.valueDescription}</span>
              </div>`;
          } else {
            this.$refs.optionListWrapper.innerHTML += `<div class="pseudo-select__option">
              <span class="rt-font-small-paragraph">${item} ${this.valueDescription}</span>
              </div>`;
          }
        });
      },
      toggleOpen(){
        this.$refs.inner.classList.toggle('pseudo-select--opened')
      },
      choosePackage(e) {
        let chosenFee = e.target;
        let siblings = this.$refs.optionListWrapper.children;
        for(let i = 0; i < siblings.length; i++){
          if(!chosenFee.closest('.pseudo-select__option').classList.contains('pseudo-select__option--chosen')) {
            siblings[i].classList.remove('pseudo-select__option--clicked')
          }
        }
        if(!chosenFee.closest('.pseudo-select__option').classList.contains('pseudo-select__option--chosen')) {
          chosenFee.closest('.pseudo-select__option').classList.add('pseudo-select__option--clicked')
        }
        let chosenFeeValue = chosenFee.innerText;
        let localChosenFeeValue;
        if(chosenFeeValue.lastIndexOf(' ') !== -1) {
          localChosenFeeValue = chosenFeeValue.slice(0, chosenFee.innerText.lastIndexOf(' ')).replace(' ', '')
        }
        chosenFee.closest('.pseudo-select').querySelector('.pseudo-select__option--chosen').querySelector('.rt-font-small-paragraph').innerText = chosenFeeValue;
        let index = this.values.indexOf(+localChosenFeeValue);
        this.localPackageCost = this.packageCost[index];
        let fullCost = this.localPackageCost + (+this.subscriptionFee)
        fullCost = fullCost.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        console.log(fullCost)
        chosenFee.closest('.rt-card').querySelector('.rt-price__value').innerText = fullCost
        this.toggleOpen();
      },

      chooseCategory(e) {
        e.preventDefault();
        var button = e.target;
        var targetLink = button.closest('.category-link').getAttribute('href');
        var categoryFullTitle = button.closest('.rt-card').querySelector('.category-title').innerText;
        var chosenCategory = categoryFullTitle.slice(0, categoryFullTitle.indexOf(' '));
        localStorage.setItem('chosenCategory', chosenCategory);
        window.location.href = targetLink;
      }
    },
    render(h) {
      const pseudoSelectArrow = (() => {
        return <div class="pseudo-select__arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-3 -6 20 20">
            <path fill="#868b95" fill-rule="evenodd" d="M12.704 6L6.706 0 .704 6l1.41 1.409L6.705 2.83l4.587 4.579z"/>
          </svg>
        </div>
      })();

      return <div>
        <div class="pseudo-select-wrapper">
          <div class="pseudo-select" ref="inner">
            {pseudoSelectArrow}
            <div class="pseudo-select__title rt-font-control color-main05">Пакет входящих минут<br/>с любых телефонов России</div>
            <div ref="optionListWrapper">
              {this.pseudoSelectOptionsFill}
            </div>

          </div>
        </div>
        <div class="rt-space-top rt-space-horizontal">
          <p class="rt-font-paragraph rt-font-bold subscription-fee">{this.subscriptionFee} ₽/мес</p>
          <p class="rt-font-control">Абонентская плата за&nbsp;номер</p>
        </div>
        <div class="rt-space-top rt-space-horizontal rt-space-bottom3 package-cost">
          <p class="rt-font-paragraph rt-font-bold">{this.localPackageCost} ₽/мес</p>
          <p class="rt-font-control">Стоимость пакета минут</p>
        </div>
      </div>
    }
  };
</script>
