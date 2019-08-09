<template>
  <div class="container">
    <vheader></vheader>
    <div class="banner">
      <div class="banner__wrap">
        <div class="banner__title">
                聚焦区块链生态，专注于DAPP开发
          打造区块链+互联网新时代
        </div>
        <div class="banner__button">
          关于我们
        </div>
      </div>
      </div> 
    <vdesc></vdesc>
    <vpanel vtitle="四大系统" vdesc="完美的技术支持">
      <div><span class="f18d_b">区块链+</span>|短视频系统</div>
      <div class="swiper swiperBox" v-swiper:swiper="swiperOption" ref="swiperBox" @mouseenter="stopSwiper" @mouseleave="startSwiper">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(banner,i) in banners" :key="i">
                  <img :src="banner">
              </div>
          </div>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>  
      </div>
    </vpanel>
  </div>
</template>

<script>
import vpanel from "@/components/panel/index.vue";
import vheader from "@/pages-child/header/index.vue";
import vdesc from "@/pages-child/desc/index.vue";
export default {
  components: {
    vheader,
    vdesc,
    vpanel
  },
  data(){
        return {
            banners: [ '//cdn.cnbj0.fds.api.mi-img.com/b2c-bbs-cms/2018/0929/20180929071037605.jpg', '//cdn.cnbj0.fds.api.mi-img.com/b2c-bbs-cms/2018/0929/20180929071037605.jpg', '//cdn.cnbj0.fds.api.mi-img.com/b2c-bbs-cms/2018/0929/20180929071037605.jpg','//cdn.cnbj0.fds.api.mi-img.com/b2c-bbs-cms/2018/0929/20180929071037605.jpg'],
            // 所有配置均为可选（同Swiper配置）  
            swiperOption: {
                loop: true,
                speed:500,
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    slideChange() {
                    // console.log('onSlideChangeEnd', this);
                    },
                    tap() {
                    // console.log('onTap', this);
                    }
                },
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                autoplayDisableOnInteraction:false,
                // effect:'cube',
                mousewheel: true,
                preloadImages: false,
                lazy: true
            }
        }
    },
    swiper() {
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        return this.$refs.swiperBox.swiper
    },
    methods:{
        stopSwiper(){
            this.swiper.autoplay.stop()
        },
        startSwiper(){
            this.swiper.autoplay.start()
        }
    }
}
</script>

<style lang='scss'>
 @media screen and (min-width:1440px){
      @import '@/assets/pc-1920.scss';
      @import './pc.scss';
}
  @media screen and (min-width:768px) and (max-width:1440px) {
      @import '@/assets/pc-1366.scss';
      @import './pc.scss';
  }
  @media screen and (max-width:768px) {
    @import '@/assets/pc-768.scss';
    @import './pc.scss';
  }
</style>
