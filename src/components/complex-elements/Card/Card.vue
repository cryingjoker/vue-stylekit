<template>
    <div class="rt-card" :class="cardClass" :style="cardStyle">
        <div class="rt-card__background" :style="cardBackgroundStyle" :class="cardBackgroundClass"></div>
        <div class="rt-card__content" :class="cardContentClass">
            <div class="rt-card__body">
                <slot name="content"></slot>
            </div>
            <div class="rt-cart__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>

    const componentsList = {};


    export default {
        props: {
            backgroundColorType : String,
            backgroundImage     : String,
            backgroundCover     : Boolean,
            backgroundRepeat    : Boolean,
            backgroundBlur      : Number,
            backgroundSmoke     : Number,
            backgroundOpacity   : Number,
            isWhiteColor        : Boolean,
            backgroundPosition  : String, // [top, left, bottom, right, top-left, top-right, bottom-left, bottom-right]
            offsetTop           : Boolean,
            colSize             : Number,
            cardHeight          : Number
        },
        // data: ()=>({
        //     isDisabled : true
        // }),
        components: componentsList,
        name: "rt-card",
        computed: {
            cardClass(){
              const classArray = {};

              if(this.backgroundCover){
                  classArray['rt-card--has-bg-cover'] = true;
              }
              if(this.isWhiteColor){
                  classArray['rt-card--has-white-color'] = true;
              }

              if(this.backgroundColorType){
                  classArray['rt-card-'+this.backgroundColorType] = true;
              }
              if(this.backgroundRepeat){
                  classArray['rt-card--has-bg-repeat'] = true;
              }
              if(typeof this.backgroundSmoke !== 'undefined'){
                  this.backgroundSmoke
                  if(this.backgroundSmoke === 0.5) {
                      classArray['rt-card--has-smoke'] = true;
                  }
                  if(this.backgroundSmoke === 0.3){
                      classArray['rt-card--has-smoke03'] = true;
                  }
                  if(this.backgroundSmoke === 0.2){
                      classArray['rt-card--has-smoke02'] = true;
                  }
              }
              return classArray

            },
            cardContentClass() {
                const classArray = {};
                if(this.offsetTop){
                    classArray['rt-card__content--has-offset-top'] = true;
                }
                if(typeof this.colSize !== 'undefined'){
                    if(this.colSize === 2){
                        classArray['rt-col-6 rt-col-md-3'] = true;
                    }
                }
                return classArray
            },
            cardStyle(){
                const styles = {};
                if(typeof this.cardHeight !== 'undefined'){
                    styles.height = this.cardHeight+'px'
                }
                return styles
            },
            cardBackgroundClass(){
                const classArray = {};
                if(this.backgroundPosition){
                    if(this.backgroundPosition.search(/(top)|(left)|(bottom)|(right)|(bottom-left)|(top-right)|(bottom-left)|(bottom-right)/) === 0) {
                        switch (this.backgroundPosition) {
                            case 'top':
                                classArray['rt-card__background--position-background-top'] = true;
                                break;
                            case 'right':
                                classArray['rt-card__background--position-background-right'] = true;
                                break;
                            case 'bottom':
                                classArray['rt-card__background--position-background-bottom'] = true;
                                break;
                            case 'left':
                                classArray['rt-card__background--position-background-left'] = true;
                                break;
                            case 'top-right':
                                classArray['rt-card__background--position-background-top-right'] = true;
                                break;
                            case 'bottom-right':
                                classArray['rt-card__background--position-background-bottom-right'] = true;
                                break;
                            case 'bottom-left':
                                classArray['rt-card__background--position-background-bottom-left'] = true;
                                break;
                            case 'top-left':
                                classArray['rt-card__background--position-background-top-left'] = true;
                                break;
                        }
                    }
                }
                return classArray;
            },
            cardBackgroundStyle() {
                const styles = {};
                if(this.backgroundImage){
                    styles.backgroundImage = 'url('+this.backgroundImage+')'
                }
                if(this.backgroundBlur){
                    styles.filter = "blur("+this.backgroundBlur+"px)"
                }
                if(typeof this.backgroundOpacity !== 'undefined'){
                    styles.opacity = this.backgroundOpacity
                }
                if(this.backgroundSmoke){

                }
                return styles
            }
        },

        mounted: function () {
        }

    }
</script>
