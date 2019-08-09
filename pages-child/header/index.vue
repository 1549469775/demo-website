<template>
     <div class="header layer m-auto">
      <div class="logo">华谦官网</div>
      <div class="hr border-right"></div>
      <div class="desc">
        <div>区块链</div>
        <div>Block Chain + Professional Technology Platform</div>
      </div>
      <ul class="navbar">
          <li class="navbar__item">首页</li>
          <li class="navbar__item">区块链+</li>
          <li class="navbar__item">短视频直播</li>
          <li class="navbar__item">商城系统</li>
          <li class="navbar__item">棋牌系统</li>
          <li class="navbar__item">团队介绍</li>
          <li class="navbar__item">企业愿景</li>
          <li class="navbar__item">关于我们</li>
      </ul>
    </div>
</template>
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