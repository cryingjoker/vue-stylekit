<template>
  <div class="custom-carousel">
    <slot/>
    <div class="custom-carousel__nav">
      <div class="custom-carousel__nav-item custom-carousel__left" @click="previousSlide">
        <svg width="12px" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" class="custom-carousel__left-arrow">
          <g id="Page-1" stroke-width="1">
            <g transform="translate(-132.000000, -2341.000000)">
              <g id="Group-3-Copy-2" transform="translate(132.000000, 2332.000000)">
                <polygon id="Shape-Copy" points="10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="custom-carousel__nav-item custom-carousel__right" @click="nextSlide">
        <svg width="12px" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" class="custom-carousel__right-arrow">
          <g id="Page-1" stroke-width="1">
            <g transform="translate(-132.000000, -2341.000000)">
              <g id="Group-3-Copy-2" transform="translate(132.000000, 2332.000000)">
                <polygon id="Shape-Copy" points="10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="custom-carousel__paginator"></div>
    </div>
  </div>
</template>

<script type="text/jsx">
  const componentsList = {};
  import variables from "../../variables.json";

  export default {
    name: "RtCardCarousel",
    components: componentsList,
    data () {
      return {
        mobileLayout: window.innerWidth <= 767,
        parentArray: [],
        element: null,
        parent: null,
        activeSlideIndex: null,
        nextSlideIndex: 0
      }
    },
    mounted () {
      this.element = document.querySelector('.carousel-card');
      this.parent = this.element.parentNode;
      for(let i = 0; i < this.parent.children.length; i++) {
        if (this.parent.children[i].classList.contains('carousel-card')) {
          this.parentArray.push(this.parent.children[i]);
        }
      }
      window.addEventListener('resize', () => {
        this.mobileLayout = window.innerWidth <= 767;
        this.renderLayout();
      });
//      this.positionCarouselCards();
      this.renderLayout();
//      if(this.mobileLayout) {
//        this.addPaginator();
//        this.fixCardHeightMobile();
//        for(let i = 0; i < this.parentArray.length; i++) {
//          document.querySelector('.custom-carousel__paginator').children[i].addEventListener('click', (e) => {
//            let activePaginatorIndex = this.getChildNumber(e.target);
//            this.mobileCarousel(activePaginatorIndex);
//          })
//        }
//      } else {
//        this.positionCarouselCards();
//      }
    },
    methods: {
      renderLayout() {
        if(this.mobileLayout) {
          this.addPaginator();
          this.fixCardHeightMobile();
          for(let i = 0; i < this.parentArray.length; i++) {
            document.querySelector('.custom-carousel__paginator').children[i].addEventListener('click', (e) => {
              let activePaginatorIndex = this.getChildNumber(e.target);
              this.mobileCarousel(activePaginatorIndex);
            })
          }
          this.mobileSwipe();
        } else {
          this.removePaginator();
          this.positionCarouselCards();
        }
      },

      addPaginator() {
        for(let i = 0; i < this.parentArray.length; i++) {
          let paginatorItem = document.createElement('div');
          paginatorItem.classList.add('custom-carousel__paginator-item');
          document.querySelector('.custom-carousel__paginator').appendChild(paginatorItem);
          if(i === this.nextSlideIndex) {
            document.querySelector('.custom-carousel__paginator-item').classList.add('custom-carousel__paginator-item--active');
          }
        }
      },

      removePaginator() {
        let myNode = document.querySelector('.custom-carousel__paginator');
        while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
        }
      },

      getChildNumber(node) {
        return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
      },

      mobileCarousel(index) {
        let carouselPaginatorWrapper = document.querySelector('.custom-carousel__paginator');
        let slideWidth = document.querySelector('.carousel-card').offsetWidth;
        let carouselWrapperPadding = +window.getComputedStyle(document.querySelector('.custom-carousel')).paddingLeft.replace('px', '');
        for(let i = 0; i < this.parentArray.length; i++) {
          carouselPaginatorWrapper.children[i].classList.remove('custom-carousel__paginator-item--active');
        }
        carouselPaginatorWrapper.children[index].classList.add('custom-carousel__paginator-item--active');
        this.$el.scrollBy({
          top: 0,
          left: (slideWidth * index + (20 * index) - ((window.innerWidth - slideWidth) / 2) + carouselWrapperPadding) - this.$el.scrollLeft,
          behavior: 'smooth'
        });
      },

      positionCarouselCards() {
        if(!this.mobileLayout){
          this.parentArray.forEach((el, i)=>{
            if(((i + 1) < this.nextSlideIndex) || (i - 1) > this.nextSlideIndex) {
              el.classList.remove('carousel-card--next', 'carousel-card--previous', 'carousel-card--next-via-one', 'carousel-card--previous-via-one');
              if(((i - 2) === this.nextSlideIndex) || (this.nextSlideIndex === this.parentArray.length - 2 && i === 0) || (this.nextSlideIndex === this.parentArray.length - 1 && i === 1)) {
                el.classList.add('carousel-card--next-via-one');
              } else if(((i + 2) === this.nextSlideIndex) || (this.nextSlideIndex === 0 && i === this.parentArray.length - 2) || this.nextSlideIndex === 1 && i === (this.parentArray.length - 1)) {
                el.classList.add('carousel-card--previous-via-one');
              }
            }
            if((i + 1) === this.nextSlideIndex || (this.nextSlideIndex === 0 && i === this.parentArray.length - 1)){
              el.classList.remove('carousel-card--next-via-one', 'carousel-card--previous-via-one');
              el.classList.add('carousel-card--previous');
            }
            if((i - 1) === this.nextSlideIndex || (this.nextSlideIndex === this.parentArray.length - 1 && i === 0)){
              el.classList.remove('carousel-card--next-via-one', 'carousel-card--previous-via-one');
              el.classList.add('carousel-card--next');
            }
          });
        }
      },

      nextSlide() {
        if(!this.mobileLayout) {
          for(let i = 0; i < this.parentArray.length; i++){
            if(this.parent.children[i].classList.contains('carousel-card--active')){
              this.activeSlideIndex = this.parentArray.indexOf(this.parent.children[i]);
              this.nextSlideIndex = (this.activeSlideIndex +  1) % this.parentArray.length ? this.activeSlideIndex + 1 : 0;
            }
          }
          this.parentArray[this.activeSlideIndex].classList.remove('carousel-card--active');
          this.parentArray[this.nextSlideIndex].classList.add('carousel-card--active');
          this.parentArray[this.nextSlideIndex].classList
            .remove('carousel-card--next', 'carousel-card--previous', 'carousel-card--next-via-one', 'carousel-card--previous-via-one');
          this.positionCarouselCards()
        }
      },

      previousSlide() {
        if(!this.mobileLayout) {
          for(let i = 0; i < this.parentArray.length; i++){
            if(this.parent.children[i].classList.contains('carousel-card--active')){
              this.activeSlideIndex = this.parentArray.indexOf(this.parent.children[i]);
              this.nextSlideIndex = (this.activeSlideIndex -  1) >= 0 ? this.activeSlideIndex - 1 : this.parentArray.length - 1;
            }
          }
          this.parentArray[this.activeSlideIndex].classList.remove('carousel-card--active');
          this.parentArray[this.nextSlideIndex].classList.add('carousel-card--active');
          this.parentArray[this.nextSlideIndex].classList
            .remove('carousel-card--next', 'carousel-card--previous', 'carousel-card--next-via-one', 'carousel-card--previous-via-one');
          this.positionCarouselCards()
        }
      },

      fixCardHeightMobile() {
        let maxHeight = 0;
        for(let i = 0; i < this.parentArray.length; i++) {
          let cardHeight = +window.getComputedStyle(this.$el.children[i]).height.replace('px', '');
          maxHeight = maxHeight < cardHeight ? cardHeight : maxHeight;
        }
        for(let i = 0; i < this.parentArray.length; i++) {
          this.$el.children[i].style.height = maxHeight + 'px';
          this.$el.children[i].style.minHeight = maxHeight + 'px';
        }
      },

      mobileSwipe() {
        let carouselPaginatorWrapper = document.querySelector('.custom-carousel__paginator');
        let cardGallery = this.$el;
        let cardWidth = document.querySelector('.carousel-card').offsetWidth;
        let timer;
        this.$el.addEventListener('scroll',function(){
          let activePaginatorButton = Math.floor((cardGallery.scrollLeft + cardWidth / 2) / cardWidth);
          for(let i = 0; i < document.querySelectorAll('.carousel-card').length; i++) {
            carouselPaginatorWrapper.children[i].classList.remove('custom-carousel__paginator-item--active');
          }
          carouselPaginatorWrapper.children[activePaginatorButton].classList.add('custom-carousel__paginator-item--active');
          clearTimeout(timer);
          let refresh = () => {
            cardGallery.scrollBy({
              top: 0,
              left: cardWidth * activePaginatorButton + (20 * (activePaginatorButton - 1) + 20) - cardGallery.scrollLeft,
              behavior: 'smooth'
            });
          };
          timer = setTimeout( refresh , 50 );
        })
      }
    }
  }
</script>
