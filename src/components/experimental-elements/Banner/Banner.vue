<template>
    <div class="rt-banner" :class="banerClass">
        <div class="rt-container">
            <div class="row">
                <div class="rt-col-6">
                    <div class="rt-banner-content">
                        <div class="rt-banner-content__inner">
                            <p class="rt-font-banner-label">Виртуальная <br>  телефония</p>
                            <p class="rt-space-top rt-space-bottom15">Быстрое подключение без трат на оборудование,<br> возможность пользоваться из любой точки мира 
                                <br> и ни одного пропущенного звонка клиента</p>
                            <rt-button class="rt-button-orange rt-button-small ">Подробнее</rt-button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="rt-banner-image">
            <svg class="rt-banner-triangle" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0v500h2L185 0z" fill-rule="evenodd"/>
            </svg>
            <svg class="rt-banner-right-triangle" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0v500h2L185 0z" fill-rule="evenodd"/>
            </svg>
        </div>

    </div>
</template>

<script>

    import {
        Card,
    } from "@/components/complex-elements/Card";
    import {Input, Button, Price} from "@/components/main-elements"
    import {Banner} from "@/components/experimental-elements"

    const componentsList = {};

    componentsList[Card.name] = Card;
    componentsList[Input.name] = Input;
    componentsList[Button.name] = Button;
    componentsList[Price.name] = Price;


    export default {
        props: {
            color: String
        },
        // data: ()=>({
        //     isDisabled : true
        // }),
        components: componentsList,
        name: "rt-banner",
        computed: {
            banerClass(){
              const classArray = {};
              if(this.color === 'yellow'){
                  classArray['rt-banner--yellow'] = true
              }else{
                  classArray['rt-banner--dark-state'] = true
                  classArray['rt-banner--color-white'] = true
              }
              //
              // if(this.backgroundCover){
              //     classArray['rt-card--has-bg-cover'] = true;
              // }
              // if(this.isWhiteColor){
              //     classArray['rt-card--has-white-color'] = true;
              // }
              //
              // if(this.backgroundColorType){
              //     classArray['rt-card-'+this.backgroundColorType] = true;
              // }
              // if(this.backgroundRepeat){
              //     classArray['rt-card--has-bg-repeat'] = true;
              // }
              // if(typeof this.backgroundSmoke !== 'undefined'){
              //     this.backgroundSmoke
              //     if(this.backgroundSmoke === 0.5) {
              //         classArray['rt-card--has-smoke'] = true;
              //     }
              //     if(this.backgroundSmoke === 0.3){
              //         classArray['rt-card--has-smoke03'] = true;
              //     }
              //     if(this.backgroundSmoke === 0.2){
              //         classArray['rt-card--has-smoke02'] = true;
              //     }
              // }
              return classArray

            },

        },

        mounted: function () {
        }

    }
</script>
