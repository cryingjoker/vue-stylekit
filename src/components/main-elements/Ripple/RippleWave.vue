<template>
    <transition name="ripple-wave"  :duration="400">
        <div v-bind:style=style  class="ripple-wave ripple-wave-active"></div>
    </transition>
</template>

<script>
    export default {
        props:['waveStyle'],
        data:()=>({
           style: {}
        }),
        name: "rt-ripple-wave",
        mounted: function () {
            setTimeout(()=>{
                this.setElementStyle(this.$el);
            },10)
            setTimeout(()=>{
                this.hideWive()
            },400)
        },
        methods: {
            setElementStyle(el){
                const newStyle = {
                            ...this.waveStyle,
                            visability: 'visible',
                            transform: 'scale(2)'
                        };
                this.$el.style.cssText += this.getInlineStyle(newStyle);
            },
            getInlineStyle(styleObj) {
                let inlineStyle = [];
                Object.keys(styleObj).forEach((key)=>{
                    inlineStyle.push(key+':'+styleObj[key]);
                })
                return inlineStyle.join(';');
            },
            hideWive(el){
                setTimeout(()=>{
                    // this.end();
                },40)
            },
            end(){
                this.$emit('on-timer-end')
            }
        }
    }
</script>
<style lang="css">
    .ripple-animation-enter {
        opacity: .26;
        transform: scale(.26) translateZ(0);
        transition: all 4000ms ease-out;
    }
    .ripple-animation-active {
        transition: all 4000ms ease-out;
    }
</style>


